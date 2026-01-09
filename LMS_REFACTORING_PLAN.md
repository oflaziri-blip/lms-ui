# LMS Refactoring & Architectural Improvements

**Date:** 2026-01-07  
**Status:** Implementation Plan  
**Priority:** High

---

## 1. Domain Language Standardization

### Current vs. Standard Terminology

| Current Term | Standard Term | Database Table | Rationale |
|--------------|---------------|----------------|-----------|
| `groups` | **Sections** | `groups` | Has `start_date`, `end_date`, `schedule` - these are Section properties |
| `courses` | **Courses** | `courses` | Correct ✅ |
| `enrollments` | **Enrollments** | `enrollments` | Correct ✅ |
| N/A | **Project Teams** | `project_teams` (NEW) | Small student collaboration groups |

### Why This Matters

**Problem:** The term "groups" is ambiguous
- In education: "Section" = scheduled instance of a course (e.g., "Python 101 - Fall 2026 - Mon/Wed 10am")
- In collaboration: "Group/Team" = small student team for projects

**Solution:** Rename conceptually
- `groups` table → represents **Sections** (course instances)
- New `project_teams` → represents **Student Teams** (collaboration groups)

### Refactoring Strategy

#### Option A: Database Rename (Breaking Change)
```sql
-- Rename table
ALTER TABLE groups RENAME TO sections;

-- Update foreign keys
ALTER TABLE enrollments RENAME COLUMN group_id TO section_id;

-- Update indexes
ALTER INDEX idx_groups_teacher_id RENAME TO idx_sections_teacher_id;
ALTER INDEX idx_groups_course_id RENAME TO idx_sections_course_id;
```

**Pros:**
- Clear, standard terminology
- Easier for new developers

**Cons:**
- Breaking change
- Requires migration
- Updates all code references

#### Option B: Alias/Wrapper (Non-Breaking)
```typescript
// Type aliases
export type Section = Group
export type SectionId = GroupId

// API wrappers
export const getSections = getGroups
export const createSection = createGroup
```

**Pros:**
- No database changes
- Gradual migration
- Backward compatible

**Cons:**
- Maintains confusion
- Technical debt

**Recommendation:** Option A for long-term clarity

---

## 2. New Feature: Project Teams

### Requirements

**User Story:**
> As a teacher, I want to organize students into small project teams within a section, so they can collaborate on assignments.

**Constraints:**
- A student can be in only ONE team per team set
- Teams belong to a specific section
- Teams have a size limit (e.g., 2-5 students)

### Database Schema

#### project_team_sets Table
```sql
CREATE TABLE project_team_sets (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  section_id UUID NOT NULL REFERENCES groups(id) ON DELETE CASCADE,
  name VARCHAR(255) NOT NULL, -- e.g., "Assignment 1 Teams"
  description TEXT,
  max_team_size INTEGER DEFAULT 5,
  min_team_size INTEGER DEFAULT 2,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  
  -- Ensure team set belongs to a section
  CONSTRAINT fk_section FOREIGN KEY (section_id) REFERENCES groups(id)
);
```

#### project_teams Table
```sql
CREATE TABLE project_teams (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  team_set_id UUID NOT NULL REFERENCES project_team_sets(id) ON DELETE CASCADE,
  name VARCHAR(255) NOT NULL, -- e.g., "Team Alpha"
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

#### project_team_members Table
```sql
CREATE TABLE project_team_members (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  team_id UUID NOT NULL REFERENCES project_teams(id) ON DELETE CASCADE,
  student_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  role VARCHAR(50) DEFAULT 'member' CHECK (role IN ('leader', 'member')),
  joined_at TIMESTAMP DEFAULT NOW(),
  
  -- Prevent duplicate memberships
  UNIQUE(team_id, student_id),
  
  -- Ensure student is actually a student
  CONSTRAINT student_role_check CHECK (
    EXISTS (SELECT 1 FROM users WHERE id = student_id AND role = 'student')
  ),
  
  -- Ensure student is enrolled in the section
  CONSTRAINT student_enrolled_check CHECK (
    EXISTS (
      SELECT 1 FROM enrollments e
      INNER JOIN project_teams pt ON pt.id = team_id
      INNER JOIN project_team_sets pts ON pts.id = pt.team_set_id
      WHERE e.student_id = student_id 
        AND e.group_id = pts.section_id
        AND e.status = 'active'
    )
  )
);

-- Constraint: Student can be in only ONE team per team set
CREATE UNIQUE INDEX idx_one_team_per_set ON project_team_members (
  student_id,
  (SELECT team_set_id FROM project_teams WHERE id = team_id)
);
```

### API Endpoints

```typescript
// GET /api/sections/[id]/team-sets
// List all team sets for a section

// POST /api/sections/[id]/team-sets
// Create a new team set

// GET /api/team-sets/[id]/teams
// List all teams in a team set

// POST /api/team-sets/[id]/teams
// Create a new team

// POST /api/teams/[id]/members
// Add student to team

// DELETE /api/teams/[id]/members/[studentId]
// Remove student from team
```

### UI Components

```typescript
// components/teams/CreateTeamSetModal.tsx
// components/teams/TeamSetCard.tsx
// components/teams/TeamCard.tsx
// components/teams/AddTeamMemberModal.tsx
// components/teams/TeamMemberList.tsx
```

---

## 3. Security & Architecture Improvements

### Current Issues

#### Issue 1: Service Role Client Misuse ⚠️
**Problem:** Service role client used without explicit permission checks

**Current Code:**
```typescript
// app/api/groups/[id]/route.ts
export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const supabase = createServiceRoleClient() // ❌ No auth check
  // ... query database
}
```

**Solution:** Add explicit permission checks

```typescript
export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  // SECURITY: Verify user has permission
  const { user, error } = await authenticateRequest(req)
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }
  
  // Only use service role after auth check
  const supabase = createServiceRoleClient()
  // ... query database
}
```

#### Issue 2: Client-Side Enrollment Logic ❌
**Problem:** Enrollment logic in client component

**Current Code:**
```typescript
// lib/hooks/useGroup.ts
const enrollStudent = async (studentId: string) => {
  const response = await fetch(`/api/groups/${groupId}/enroll`, {
    method: "POST",
    body: JSON.stringify({ studentId }),
  })
  // ... handle response
}
```

**Solution:** Use Server Actions

```typescript
// lib/actions/enrollment.ts
"use server"

export async function enrollStudentInSection(sectionId: string, studentId: string) {
  // SECURITY: Check permissions first
  const { user } = await getCurrentUser()
  if (!user || (user.role !== 'admin' && user.role !== 'teacher')) {
    return { success: false, error: "Forbidden" }
  }
  
  // Use service role client AFTER permission check
  const supabase = createServiceRoleClient()
  // ... enrollment logic
}
```

**Usage in Component:**
```typescript
// app/(admin)/admin/groups/[id]/page.tsx
import { enrollStudentInSection } from "@/lib/actions/enrollment"

const handleEnroll = async (studentId: string) => {
  const result = await enrollStudentInSection(groupId, studentId)
  if (result.success) {
    // Update UI
  }
}
```

#### Issue 3: Non-Idempotent Operations ⚠️
**Problem:** Enrolling twice throws error

**Current Behavior:**
```typescript
// First call: Success
await enrollStudent("student-123")

// Second call: Error 409 "Already enrolled"
await enrollStudent("student-123") // ❌ Throws error
```

**Solution:** Make idempotent

```typescript
// Both calls: Success (returns existing enrollment)
await enrollStudent("student-123") // ✅ Creates enrollment
await enrollStudent("student-123") // ✅ Returns existing enrollment
```

**Implementation:**
```typescript
// Check for existing enrollment
const existing = await supabase
  .from("enrollments")
  .select("*")
  .eq("group_id", sectionId)
  .eq("student_id", studentId)
  .eq("status", "active")
  .maybeSingle()

if (existing) {
  // Return existing enrollment (not an error)
  return {
    success: true,
    data: existing,
    alreadyEnrolled: true, // Flag for UI
  }
}

// Create new enrollment
// ...
```

---

## 4. Code Quality Improvements

### Remove Console Logs
**Files to Clean:**
- [`app/(admin)/admin/groups/[id]/page.tsx`](app/(admin)/admin/groups/[id]/page.tsx)
- [`lib/hooks/useGroup.ts`](lib/hooks/useGroup.ts)
- [`app/api/groups/[id]/students/route.ts`](app/api/groups/[id]/students/route.ts)
- [`app/api/groups/[id]/route.ts`](app/api/groups/[id]/route.ts)

**Replace with proper logging:**
```typescript
// Development
if (process.env.NODE_ENV === 'development') {
  console.log('[DEBUG]', message)
}

// Production
import { logger } from '@/lib/logger'
logger.info('Enrollment created', { sectionId, studentId })
```

### Add Type Safety
**Current Issues:**
- Many `any` types
- Type assertions everywhere
- Missing return type annotations

**Solutions:**
```typescript
// Define proper types
interface EnrollmentResponse {
  success: boolean
  data?: EnrollmentData
  error?: string
  alreadyEnrolled?: boolean
}

// Use in functions
export async function enrollStudent(
  sectionId: string,
  studentId: string
): Promise<EnrollmentResponse> {
  // ...
}
```

### Add Error Boundaries
```typescript
// components/ErrorBoundary.tsx
export class ErrorBoundary extends React.Component {
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Log to error tracking service
    logError(error, errorInfo)
  }
  
  render() {
    if (this.state.hasError) {
      return <ErrorFallback />
    }
    return this.props.children
  }
}
```

---

## 5. Implementation Roadmap

### Phase 1: Critical Fixes ✅ COMPLETED
- [x] Fix infinite loop in enrollment modal
- [x] Fix RLS permission issue
- [x] Make enrollment API idempotent
- [x] Add proper TypeScript types

### Phase 2: Security Hardening (IN PROGRESS)
- [x] Create Server Actions for enrollment
- [ ] Add explicit permission checks to all service role usage
- [ ] Move client-side logic to server actions
- [ ] Add request validation middleware
- [ ] Implement rate limiting

### Phase 3: Domain Language Migration
- [ ] Create migration scripts
- [ ] Rename `groups` → `sections` in database
- [ ] Update all code references
- [ ] Update API endpoints
- [ ] Update frontend components
- [ ] Update documentation

### Phase 4: Project Teams Feature
- [ ] Design database schema
- [ ] Create migration scripts
- [ ] Implement API endpoints
- [ ] Build UI components
- [ ] Add team management pages
- [ ] Test team constraints

### Phase 5: Code Quality
- [ ] Remove console.logs
- [ ] Add proper logging
- [ ] Improve type safety
- [ ] Add error boundaries
- [ ] Add loading states
- [ ] Add success notifications

### Phase 6: Testing
- [ ] Unit tests for server actions
- [ ] Integration tests for API routes
- [ ] E2E tests for enrollment flow
- [ ] E2E tests for team management

---

## 6. Migration Scripts

### Script 1: Rename Groups to Sections
```sql
-- migration_001_rename_groups_to_sections.sql

BEGIN;

-- Rename table
ALTER TABLE groups RENAME TO sections;

-- Rename foreign key columns
ALTER TABLE enrollments RENAME COLUMN group_id TO section_id;

-- Rename indexes
ALTER INDEX idx_groups_teacher_id RENAME TO idx_sections_teacher_id;
ALTER INDEX idx_groups_course_id RENAME TO idx_sections_course_id;
ALTER INDEX idx_enrollments_group_id RENAME TO idx_enrollments_section_id;

-- Update RLS policies
DROP POLICY IF EXISTS "Admins can view all groups" ON sections;
CREATE POLICY "Admins can view all sections" ON sections
  FOR SELECT USING (
    EXISTS (SELECT 1 FROM users WHERE id = auth.uid() AND role = 'admin')
  );

-- Update functions
DROP FUNCTION IF EXISTS get_available_students_for_group(UUID);
CREATE OR REPLACE FUNCTION get_available_students_for_section(p_section_id UUID)
RETURNS TABLE (id UUID, name VARCHAR, email VARCHAR, avatar_url TEXT)
AS $$
BEGIN
  RETURN QUERY
  SELECT u.id, u.name, u.email, u.avatar_url
  FROM users u
  WHERE u.role = 'student'
    AND u.status = 'active'
    AND u.id NOT IN (
      SELECT student_id 
      FROM enrollments 
      WHERE section_id = p_section_id AND status = 'active'
    )
  ORDER BY u.name;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

COMMIT;
```

### Script 2: Create Project Teams Tables
```sql
-- migration_002_create_project_teams.sql

BEGIN;

-- Project Team Sets (e.g., "Assignment 1 Teams")
CREATE TABLE project_team_sets (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  section_id UUID NOT NULL REFERENCES sections(id) ON DELETE CASCADE,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  max_team_size INTEGER DEFAULT 5,
  min_team_size INTEGER DEFAULT 2,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Project Teams (e.g., "Team Alpha")
CREATE TABLE project_teams (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  team_set_id UUID NOT NULL REFERENCES project_team_sets(id) ON DELETE CASCADE,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  
  -- Unique team name within a team set
  UNIQUE(team_set_id, name)
);

-- Project Team Members
CREATE TABLE project_team_members (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  team_id UUID NOT NULL REFERENCES project_teams(id) ON DELETE CASCADE,
  student_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  role VARCHAR(50) DEFAULT 'member' CHECK (role IN ('leader', 'member')),
  joined_at TIMESTAMP DEFAULT NOW(),
  
  -- Prevent duplicate memberships
  UNIQUE(team_id, student_id),
  
  -- Ensure student is actually a student
  CONSTRAINT student_role_check CHECK (
    EXISTS (SELECT 1 FROM users WHERE id = student_id AND role = 'student')
  )
);

-- Indexes
CREATE INDEX idx_team_sets_section ON project_team_sets(section_id);
CREATE INDEX idx_teams_team_set ON project_teams(team_set_id);
CREATE INDEX idx_team_members_team ON project_team_members(team_id);
CREATE INDEX idx_team_members_student ON project_team_members(student_id);

-- Constraint: Student can be in only ONE team per team set
CREATE UNIQUE INDEX idx_one_team_per_set ON project_team_members (
  student_id,
  (SELECT team_set_id FROM project_teams WHERE id = team_id)
);

-- RLS Policies
ALTER TABLE project_team_sets ENABLE ROW LEVEL SECURITY;
ALTER TABLE project_teams ENABLE ROW LEVEL SECURITY;
ALTER TABLE project_team_members ENABLE ROW LEVEL SECURITY;

-- Admins can manage all team sets
CREATE POLICY "Admins can manage team sets" ON project_team_sets
  FOR ALL USING (
    EXISTS (SELECT 1 FROM users WHERE id = auth.uid() AND role = 'admin')
  );

-- Teachers can manage team sets in their sections
CREATE POLICY "Teachers can manage their section team sets" ON project_team_sets
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM sections 
      WHERE id = project_team_sets.section_id AND teacher_id = auth.uid()
    )
  );

-- Students can view team sets in their sections
CREATE POLICY "Students can view their section team sets" ON project_team_sets
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM enrollments e
      INNER JOIN sections s ON s.id = e.section_id
      WHERE e.student_id = auth.uid() 
        AND s.id = project_team_sets.section_id
        AND e.status = 'active'
    )
  );

COMMIT;
```

---

## 7. Server Actions Architecture

### Enrollment Server Actions ✅ CREATED
**File:** [`lib/actions/enrollment.ts`](lib/actions/enrollment.ts)

```typescript
"use server"

export async function enrollStudentInSection(
  sectionId: string,
  studentId: string
): Promise<EnrollmentResult> {
  // 1. SECURITY: Verify authentication
  const { user } = await getCurrentUser()
  if (!user) return { success: false, error: "Unauthorized" }
  
  // 2. SECURITY: Check role
  if (user.role !== 'admin' && user.role !== 'teacher') {
    return { success: false, error: "Forbidden" }
  }
  
  // 3. Use service role AFTER permission checks
  const supabase = createServiceRoleClient()
  
  // 4. IDEMPOTENT: Check existing enrollment
  const existing = await checkExistingEnrollment(sectionId, studentId)
  if (existing) {
    return { success: true, data: existing, alreadyEnrolled: true }
  }
  
  // 5. Validate and create enrollment
  // ...
}
```

### Benefits of Server Actions
1. **Security:** Logic runs on server, not exposed to client
2. **Type Safety:** Full TypeScript support
3. **Simplicity:** No need for API routes
4. **Performance:** Direct database access
5. **Reusability:** Can be called from multiple components

---

## 8. Refactoring Checklist

### Immediate (High Priority)
- [x] Fix infinite loop in enrollment modal
- [x] Fix RLS permission issue
- [x] Make enrollment idempotent
- [x] Create Server Actions for enrollment
- [ ] Add permission checks to all service role usage
- [ ] Remove console.logs from production code

### Short Term (1-2 weeks)
- [ ] Migrate to Server Actions throughout app
- [ ] Add proper error handling and logging
- [ ] Implement success notifications
- [ ] Add loading states everywhere
- [ ] Write unit tests for server actions

### Medium Term (1 month)
- [ ] Rename `groups` → `sections` in database
- [ ] Update all code references
- [ ] Implement Project Teams feature
- [ ] Add team management UI
- [ ] Write integration tests

### Long Term (2-3 months)
- [ ] Add progress tracking functionality
- [ ] Implement assignment submission
- [ ] Add grade management
- [ ] Build real-time collaboration features
- [ ] Add email notifications

---

## 9. Breaking Changes & Migration Path

### Database Migration
```bash
# Step 1: Backup database
pg_dump lms_db > backup_$(date +%Y%m%d).sql

# Step 2: Run migration
psql lms_db < migration_001_rename_groups_to_sections.sql

# Step 3: Verify migration
psql lms_db -c "SELECT * FROM sections LIMIT 1;"

# Step 4: Deploy code changes
npm run build
npm run start
```

### Code Migration
```bash
# Find all references to "group" that should be "section"
grep -r "group" app/ lib/ components/ | grep -v node_modules

# Update imports
# groups → sections
# groupId → sectionId
# enrollments.group_id → enrollments.section_id
```

---

## 10. Conclusion

### Current Status
- ✅ Enrollment system functional
- ✅ Critical bugs fixed
- ✅ Server Actions created
- ⚠️ Domain language needs standardization
- ⚠️ Project Teams feature needed

### Next Steps
1. Complete security hardening
2. Migrate to Server Actions
3. Plan database rename migration
4. Implement Project Teams
5. Add comprehensive testing

### Estimated Effort
- **Security Hardening:** 2-3 days
- **Server Actions Migration:** 1 week
- **Database Rename:** 2-3 days
- **Project Teams Feature:** 2 weeks
- **Testing:** 1 week

**Total:** ~4-5 weeks for complete refactoring
