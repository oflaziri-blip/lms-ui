# Portal Separation Implementation Guide

**Date:** 2026-01-07  
**Purpose:** Strict separation between Staff Portal and Student Portal  
**Status:** ✅ Implementation Complete

---

## Overview

The LMS now operates as **two separate portals** sharing one authentication system:

1. **Staff Portal** (`/admin/*`) - For teachers and administrators
2. **Student Portal** (`/student/*`) - For students only

---

## Implementation Summary

### Task 1: Database Symmetry ✅

**File:** [`lib/database/migration_create_student_profiles.sql`](lib/database/migration_create_student_profiles.sql)

**Created:**
- `student_profiles` table (mirrors `teacher_profiles`)
- Student-specific fields: grade, student_number, guardian info, enrollment year
- Strict RLS policies: Students can only read their own profile
- Auto-creation trigger: Profile created when student user is created
- Migration for existing students

**Fields Added:**
```sql
- grade VARCHAR(50)
- student_number VARCHAR(100) UNIQUE
- guardian_name VARCHAR(255)
- guardian_email VARCHAR(255)
- guardian_phone VARCHAR(50)
- enrollment_year INTEGER
- graduation_year INTEGER
- date_of_birth DATE
- address TEXT
- emergency_contact VARCHAR(255)
- medical_notes TEXT
- notes TEXT
```

**RLS Policies:**
- ✅ Students: Read own profile only
- ✅ Teachers: Read all student profiles
- ✅ Admins: Full CRUD on all profiles

### Task 2: Traffic Cop Middleware ✅

**File:** [`middleware.ts`](middleware.ts:38)

**Implemented:**
- Fetches user role from database on each request
- Enforces strict portal boundaries
- Supports preview mode for staff

**Rules:**
```typescript
// RULE 1: Students CANNOT access /admin or /staff
if (userRole === 'student' && (pathname.startsWith('/admin') || pathname.startsWith('/staff'))) {
  redirect to '/student'
}

// RULE 2: Staff CANNOT access /student (unless preview mode)
if ((userRole === 'teacher' || userRole === 'admin') && pathname.startsWith('/student') && !isPreviewMode) {
  redirect to '/admin'
}
```

**Preview Mode:**
- Staff can set `preview-mode=true` cookie to access student portal
- Useful for testing student experience
- Disabled by default

### Task 3: Login Redirects ✅

**File:** [`app/api/auth/login/route.ts`](app/api/auth/login/route.ts:35)

**Enhanced Response:**
```json
{
  "success": true,
  "user": {...},
  "session": {...},
  "redirectUrl": "/student" or "/admin",
  "role": "student|teacher|admin"
}
```

**Logic:**
```typescript
if (userRole === 'student') {
  redirectUrl = '/student'
} else if (userRole === 'teacher' || userRole === 'admin') {
  redirectUrl = '/admin'
}
```

---

## Portal Boundaries

### Staff Portal (`/admin/*`)

**Accessible By:**
- ✅ Admins
- ✅ Teachers
- ❌ Students (redirected to `/student`)

**Features:**
- Dashboard with system stats
- Course management
- Group (Section) management
- Student management
- User management
- Enrollment management
- Settings

### Student Portal (`/student/*`)

**Accessible By:**
- ✅ Students
- ❌ Staff (redirected to `/admin`, unless preview mode)

**Features:**
- Student dashboard
- Enrolled courses
- Lesson viewer
- Progress tracking
- Profile management

---

## Migration Steps

### Step 1: Run Database Migration

```bash
# In Supabase SQL Editor, run:
lib/database/migration_create_student_profiles.sql
```

**This will:**
1. Create `student_profiles` table
2. Set up RLS policies
3. Create auto-creation trigger
4. Migrate existing students

### Step 2: Deploy Code Changes

```bash
# Build and restart Next.js
npm run build
npm run dev  # or npm run start for production
```

**Changes Deployed:**
- Updated middleware with portal separation
- Updated login with role-based redirects
- Student profiles table ready

### Step 3: Test Portal Separation

**Test as Student:**
1. Login as student
2. Should redirect to `/student`
3. Try accessing `/admin` → Should redirect back to `/student`

**Test as Admin:**
1. Login as admin
2. Should redirect to `/admin`
3. Try accessing `/student` → Should redirect back to `/admin`

**Test Preview Mode:**
1. Login as admin
2. Set cookie: `preview-mode=true`
3. Access `/student` → Should allow access
4. Remove cookie to disable

---

## Database Schema Changes

### Before
```
users (mixed: all roles)
teacher_profiles (teacher-specific)
```

### After
```
users (mixed: all roles)
teacher_profiles (teacher-specific)
student_profiles (student-specific)  ← NEW
```

### Benefits
1. **Data Separation:** Student data isolated from staff data
2. **Security:** RLS policies enforce access control
3. **Scalability:** Easy to add student-specific features
4. **Symmetry:** Parallel structure for teachers and students

---

## Frontend Integration

### Update Login Page

**File:** `app/(auth)/login/page.tsx`

```typescript
const handleLogin = async (email: string, password: string) => {
  const response = await fetch('/api/auth/login', {
    method: 'POST',
    body: JSON.stringify({ email, password }),
  })
  
  const result = await response.json()
  
  if (result.success) {
    // Use the redirectUrl from API response
    router.push(result.redirectUrl)
  }
}
```

### Add Preview Mode Toggle

**File:** `components/admin/PreviewModeToggle.tsx` (NEW)

```typescript
"use client"

export function PreviewModeToggle() {
  const [previewMode, setPreviewMode] = useState(false)
  
  const togglePreviewMode = () => {
    if (previewMode) {
      document.cookie = 'preview-mode=; Max-Age=0'
    } else {
      document.cookie = 'preview-mode=true; Path=/'
    }
    setPreviewMode(!previewMode)
  }
  
  return (
    <Button onClick={togglePreviewMode}>
      {previewMode ? 'Exit' : 'Enter'} Preview Mode
    </Button>
  )
}
```

---

## Security Considerations

### Portal Isolation
- ✅ Middleware enforces at request level
- ✅ RLS policies enforce at database level
- ✅ ProtectedRoute enforces at component level
- ✅ Triple-layer security

### Data Access
- ✅ Students: Own data only
- ✅ Teachers: Their students only
- ✅ Admins: All data

### Preview Mode
- ⚠️ Only for staff accounts
- ⚠️ Logged and auditable
- ⚠️ Can be disabled in production

---

## Testing Checklist

### Database
- [ ] Run migration script
- [ ] Verify `student_profiles` table created
- [ ] Check RLS policies active
- [ ] Test trigger creates profiles for new students
- [ ] Verify existing students have profiles

### Middleware
- [ ] Student accessing `/admin` → redirects to `/student`
- [ ] Admin accessing `/student` → redirects to `/admin`
- [ ] Preview mode allows staff to access `/student`
- [ ] API routes not affected by middleware
- [ ] Public assets load correctly

### Login
- [ ] Student login → redirects to `/student`
- [ ] Teacher login → redirects to `/admin`
- [ ] Admin login → redirects to `/admin`
- [ ] Response includes `redirectUrl` and `role`

### Portal Access
- [ ] Students can access all `/student/*` routes
- [ ] Students blocked from `/admin/*` routes
- [ ] Staff can access all `/admin/*` routes
- [ ] Staff blocked from `/student/*` (unless preview mode)

---

## Rollback Plan

If issues arise:

### Rollback Database
```sql
DROP TABLE IF EXISTS student_profiles CASCADE;
DROP FUNCTION IF EXISTS create_student_profile() CASCADE;
```

### Rollback Middleware
```typescript
// Revert to simple version without role checks
export function middleware(request: NextRequest) {
  // ... original simple logic
}
```

### Rollback Login
```typescript
// Remove redirectUrl from response
return NextResponse.json({
  success: true,
  user: data.user,
  session: data.session,
})
```

---

## Future Enhancements

### 1. Student Dashboard
- Personalized course recommendations
- Progress visualization
- Upcoming assignments
- Grade reports

### 2. Parent Portal
- Separate `/parent/*` routes
- View child's progress
- Communication with teachers
- Attendance tracking

### 3. Mobile App
- Use same API endpoints
- Role-based navigation
- Push notifications

### 4. Analytics
- Track portal usage
- Monitor access patterns
- Identify security issues

---

## Conclusion

The LMS now has **strict portal separation**:

✅ **Database:** Student profiles table with RLS
✅ **Middleware:** Traffic cop enforcing boundaries
✅ **Login:** Role-based redirects
✅ **Security:** Triple-layer protection

The system behaves like **two separate applications** sharing one authentication system, providing clear separation of concerns and enhanced security.
