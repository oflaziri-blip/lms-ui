# School Management System Refactoring Plan

**Date:** 2026-01-07  
**Scope:** Transform from "Course Seller" to "School Management" model  
**Reference:** zxmodren/Nextjs-SchoolManagementSystem-Template  
**Status:** 🎯 Architecture Design Phase

---

## Current vs. Target Architecture

### Current Model: "Course Seller" ❌
```
User → Enrolls in → Course
```
- Users buy/enroll in courses directly
- Payment/Stripe logic
- Individual course access

### Target Model: "School Management" ✅
```
Student → Assigned to → Group/Class → Has access to → Courses
```
- Students assigned to groups by admin
- Groups have course access
- No payment logic
- Institutional model

---

## Data Model Comparison

### Current Schema (LMS-UI)
```
users (id, email, name, role, status)
├─ teacher_profiles (user_id, bio, hourly_rate)
├─ student_profiles (user_id, grade, guardian_email) [NEW]
└─ enrollments (student_id, group_id, status, progress)

courses (id, title, description, lessons_count)
└─ lessons (course_id, title, description)

groups (id, name, course_id, teacher_id, max_students)
└─ enrollments (group_id, student_id)
```

### Target Schema (School Management)
```
users (id, email, name, role)
├─ teachers (user_id, subjects[], qualifications)
├─ students (user_id, admission_number, class_id, parent_id)
└─ parents (user_id, students[])

classes (id, name, grade_level, capacity)
├─ class_teachers (class_id, teacher_id, subject_id)
├─ class_students (class_id, student_id)
└─ class_subjects (class_id, subject_id)

subjects (id, name, code, description)
└─ lessons (subject_id, title, content)

schedules (class_id, subject_id, teacher_id, day, time)

assignments (subject_id, class_id, title, due_date)
└─ submissions (assignment_id, student_id, content, grade)

attendance (class_id, student_id, date, status)

exams (subject_id, class_id, title, date)
└─ exam_results (exam_id, student_id, score, grade)
```

---

## Key Differences

| Aspect | Current (Course Seller) | Target (School Management) |
|--------|------------------------|----------------------------|
| **Access Model** | User → Course | Student → Class → Subject |
| **Enrollment** | Manual, per course | Automatic via class membership |
| **Payment** | Stripe integration | No payment (institutional) |
| **Groups** | Optional study groups | Core organizational unit (Classes) |
| **Teachers** | Assigned to groups | Assigned to classes + subjects |
| **Content** | Courses with lessons | Subjects with lessons |
| **Tracking** | Progress percentage | Attendance + Grades + Exams |

---

## Migration Strategy

### Phase 1: Terminology & Concept Mapping

#### Rename Concepts
| Current | Target | Database Table | Action |
|---------|--------|----------------|--------|
| `groups` | `classes` | Rename table | ALTER TABLE |
| `courses` | `subjects` | Rename table | ALTER TABLE |
| `enrollments` | `class_students` | Rename table | ALTER TABLE |
| `group_id` | `class_id` | Rename column | ALTER TABLE |
| `course_id` | `subject_id` | Rename column | ALTER TABLE |

#### Add New Concepts
| Concept | Table | Purpose |
|---------|-------|---------|
| Grade Levels | `grade_levels` | Organize classes by grade |
| Class Subjects | `class_subjects` | Link classes to subjects |
| Class Teachers | `class_teachers` | Assign teachers to classes |
| Schedules | `schedules` | Timetable management |
| Attendance | `attendance` | Daily attendance tracking |
| Assignments | `assignments` | Homework/projects |
| Exams | `exams` | Tests and assessments |

### Phase 2: Database Migration

#### Step 1: Rename Core Tables
```sql
-- Rename groups to classes
ALTER TABLE groups RENAME TO classes;
ALTER TABLE classes RENAME COLUMN course_id TO subject_id;

-- Rename courses to subjects
ALTER TABLE courses RENAME TO subjects;

-- Rename enrollments to class_students
ALTER TABLE enrollments RENAME TO class_students;
ALTER TABLE class_students RENAME COLUMN group_id TO class_id;

-- Update indexes
ALTER INDEX idx_groups_teacher_id RENAME TO idx_classes_teacher_id;
ALTER INDEX idx_groups_course_id RENAME TO idx_classes_subject_id;
ALTER INDEX idx_enrollments_group_id RENAME TO idx_class_students_class_id;
```

#### Step 2: Add Grade Levels
```sql
CREATE TABLE grade_levels (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(100) NOT NULL UNIQUE, -- e.g., "Grade 1", "Year 7", "Freshman"
  level_number INTEGER NOT NULL,     -- Numeric order: 1, 2, 3...
  description TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Add grade_level_id to classes
ALTER TABLE classes ADD COLUMN grade_level_id UUID REFERENCES grade_levels(id);
```

#### Step 3: Add Class-Subject Relationship
```sql
-- Many-to-many: A class can have multiple subjects
CREATE TABLE class_subjects (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  class_id UUID NOT NULL REFERENCES classes(id) ON DELETE CASCADE,
  subject_id UUID NOT NULL REFERENCES subjects(id) ON DELETE CASCADE,
  teacher_id UUID REFERENCES users(id) ON DELETE SET NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  UNIQUE(class_id, subject_id)
);
```

#### Step 4: Add Schedules
```sql
CREATE TABLE schedules (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  class_id UUID NOT NULL REFERENCES classes(id) ON DELETE CASCADE,
  subject_id UUID NOT NULL REFERENCES subjects(id) ON DELETE CASCADE,
  teacher_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  day_of_week INTEGER NOT NULL CHECK (day_of_week BETWEEN 0 AND 6), -- 0=Sunday, 6=Saturday
  start_time TIME NOT NULL,
  end_time TIME NOT NULL,
  room VARCHAR(100),
  created_at TIMESTAMP DEFAULT NOW()
);
```

#### Step 5: Add Attendance
```sql
CREATE TABLE attendance (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  class_id UUID NOT NULL REFERENCES classes(id) ON DELETE CASCADE,
  student_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  date DATE NOT NULL,
  status VARCHAR(20) NOT NULL CHECK (status IN ('present', 'absent', 'late', 'excused')),
  notes TEXT,
  recorded_by UUID REFERENCES users(id),
  created_at TIMESTAMP DEFAULT NOW(),
  UNIQUE(class_id, student_id, date)
);
```

### Phase 3: Access Control Refactoring

#### Current: Direct Course Access
```typescript
// Student can enroll in any course
POST /api/courses/[id]/enroll
```

#### Target: Class-Based Access
```typescript
// Student assigned to class by admin
POST /api/classes/[id]/students { studentId }

// Student automatically gets access to all class subjects
GET /api/students/[id]/subjects
// Returns subjects from student's class
```

#### RLS Policy Changes
```sql
-- OLD: Students can view courses they're enrolled in
CREATE POLICY "Students view enrolled courses" ON courses
  FOR SELECT USING (
    EXISTS (SELECT 1 FROM enrollments WHERE course_id = courses.id AND student_id = auth.uid())
  );

-- NEW: Students can view subjects in their class
CREATE POLICY "Students view class subjects" ON subjects
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM class_students cs
      INNER JOIN class_subjects csub ON csub.class_id = cs.class_id
      WHERE cs.student_id = auth.uid() AND csub.subject_id = subjects.id
    )
  );
```

---

## Implementation Roadmap

### Immediate (Week 1)
- [x] Fix enrollment database constraint
- [x] Implement portal separation
- [x] Create student_profiles table
- [ ] Remove Stripe/payment logic (if exists)
- [ ] Audit current enrollment flow

### Short Term (Weeks 2-3)
- [ ] Rename `groups` → `classes`
- [ ] Rename `courses` → `subjects`
- [ ] Rename `enrollments` → `class_students`
- [ ] Create `grade_levels` table
- [ ] Create `class_subjects` junction table
- [ ] Update all API routes
- [ ] Update all frontend components

### Medium Term (Month 2)
- [ ] Add `schedules` table
- [ ] Add `attendance` table
- [ ] Add `assignments` table
- [ ] Add `exams` table
- [ ] Build attendance tracking UI
- [ ] Build grade management UI
- [ ] Build timetable UI

### Long Term (Month 3+)
- [ ] Parent portal
- [ ] Report cards
- [ ] Bulk operations (import students, etc.)
- [ ] Mobile app
- [ ] Notifications system

---

## Breaking Changes

### API Endpoints
```
OLD → NEW
/api/groups → /api/classes
/api/courses → /api/subjects
/api/groups/[id]/enroll → /api/classes/[id]/students (admin only)
/api/students/[id]/courses → /api/students/[id]/subjects
```

### Database Tables
```
OLD → NEW
groups → classes
courses → subjects
enrollments → class_students
```

### Frontend Routes
```
OLD → NEW
/admin/groups → /admin/classes
/admin/courses → /admin/subjects
/student/courses → /student/subjects
```

---

## Enrollment Logic Refactoring

### Current: Manual Enrollment
```typescript
// Student or admin enrolls in course
POST /api/courses/[id]/enroll { studentId }

// Creates enrollment record
INSERT INTO enrollments (course_id, student_id)
```

### Target: Automatic via Class Membership
```typescript
// Admin assigns student to class
POST /api/classes/[id]/students { studentId }

// Student automatically gets access to all class subjects
// No separate enrollment needed

// Query student's subjects
SELECT s.* FROM subjects s
INNER JOIN class_subjects cs ON cs.subject_id = s.id
INNER JOIN class_students cst ON cst.class_id = cs.class_id
WHERE cst.student_id = ?
```

---

## Reference Schema Analysis

Based on typical school management systems, here's the recommended schema:

```sql
-- Core organizational structure
grade_levels (id, name, level_number)
classes (id, name, grade_level_id, capacity, academic_year)
subjects (id, name, code, description)

-- Relationships
class_students (class_id, student_id, enrollment_date)
class_subjects (class_id, subject_id, teacher_id)
class_teachers (class_id, teacher_id, is_class_teacher)

-- Academic tracking
schedules (class_id, subject_id, teacher_id, day, time, room)
attendance (class_id, student_id, date, status)
assignments (subject_id, class_id, title, due_date)
submissions (assignment_id, student_id, content, grade)
exams (subject_id, class_id, title, date, total_marks)
exam_results (exam_id, student_id, marks_obtained, grade)

-- Communication
announcements (class_id, author_id, title, content, date)
messages (sender_id, recipient_id, content, read_status)
```

---

## Next Steps

1. **Review Current Schema**
   - Identify all payment/Stripe references
   - List all enrollment-related code
   - Map current structure to target structure

2. **Create Migration Scripts**
   - Rename tables and columns
   - Add new tables
   - Migrate existing data
   - Update constraints and indexes

3. **Update API Layer**
   - Rename endpoints
   - Update business logic
   - Remove payment logic
   - Add class-based access control

4. **Update Frontend**
   - Rename components
   - Update routing
   - Rebuild UI for school management
   - Add new features (attendance, grades, etc.)

5. **Test & Deploy**
   - Test all user flows
   - Verify data integrity
   - Deploy in stages
   - Monitor for issues

---

## Conclusion

This is a **major architectural refactoring** that transforms the system from a course marketplace to an institutional school management system. The changes affect:

- ✅ Database schema (table renames, new tables)
- ✅ API layer (endpoint renames, logic changes)
- ✅ Frontend (component renames, new UIs)
- ✅ Business logic (enrollment → class assignment)
- ✅ Access control (class-based permissions)

**Estimated Effort:** 6-8 weeks for complete refactoring

**Recommendation:** Implement in phases to minimize disruption and allow for testing at each stage.
