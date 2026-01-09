# Role-Based Access Control (RBAC) Implementation

## Overview

This LMS implements strict RBAC for Dashboard and Courses views, ensuring data security at the backend level.

## Architecture

### Backend Security (API Level)

**Critical Principle**: All data filtering happens on the backend. Frontend only displays what the backend provides.

#### Admin Role
- **Access**: ALL courses and ALL groups in the system
- **Query Pattern**: No filters applied
- **Example**: `SELECT * FROM courses`

#### Teacher Role
- **Access**: ONLY courses where they are assigned as instructor
- **Query Pattern**: Filter by `teacher_id` in Groups/Classes table
- **Example**: `SELECT * FROM courses WHERE id IN (SELECT course_id FROM groups WHERE teacher_id = ?)`

### Frontend Behavior

- **Admin View**: Shows "All Branches", "Global Settings", system-wide stats
- **Teacher View**: Shows "My Students", "My Groups", filtered stats only

## File Structure

```
lib/
├── auth/
│   └── middleware.ts          # Authentication & authorization middleware
├── types/
│   └── auth.ts                # TypeScript types for auth
├── hooks/
│   ├── useAuth.ts            # Auth context hook
│   ├── useDashboard.ts       # Dashboard data hook
│   └── useCourses.ts         # Courses data hook
└── database/
    └── queries.ts             # Database query examples

app/
├── api/
│   ├── auth/
│   │   └── me/
│   │       └── route.ts       # Get current user
│   ├── dashboard/
│   │   └── route.ts           # Dashboard API (role-based)
│   └── courses/
│       └── route.ts           # Courses API (role-based)

components/
└── dashboard/
    ├── RoleBasedStats.tsx    # Role-aware stats component
    └── SparklineChart.tsx    # Chart component
```

## Security Checklist

✅ **Backend Filtering**: All queries filter by `teacher_id` for teachers  
✅ **No Frontend Filtering**: Frontend never filters data, only displays  
✅ **Authentication Required**: All API routes require valid JWT token  
✅ **Role Verification**: Middleware verifies user role before data access  
✅ **Type Safety**: TypeScript ensures type safety across the stack  

## Database Schema Requirements

```sql
-- Users table
CREATE TABLE users (
  id VARCHAR PRIMARY KEY,
  email VARCHAR UNIQUE NOT NULL,
  name VARCHAR NOT NULL,
  role VARCHAR NOT NULL CHECK (role IN ('admin', 'teacher'))
);

-- Courses table
CREATE TABLE courses (
  id VARCHAR PRIMARY KEY,
  title VARCHAR NOT NULL,
  description TEXT,
  duration VARCHAR
);

-- Groups table (links courses to teachers)
CREATE TABLE groups (
  id VARCHAR PRIMARY KEY,
  name VARCHAR NOT NULL,
  course_id VARCHAR REFERENCES courses(id),
  teacher_id VARCHAR REFERENCES users(id),  -- CRITICAL: Links teacher to group
  is_active BOOLEAN DEFAULT true
);

-- Students table
CREATE TABLE students (
  id VARCHAR PRIMARY KEY,
  name VARCHAR NOT NULL,
  group_id VARCHAR REFERENCES groups(id)
);
```

## API Usage Examples

### Get Dashboard Data
```typescript
// Automatically filtered by role
const response = await fetch('/api/dashboard', {
  credentials: 'include'
})
const { data, role } = await response.json()
```

### Get Courses
```typescript
// Automatically filtered by role
const response = await fetch('/api/courses', {
  credentials: 'include'
})
const { data, role, count } = await response.json()
```

## Frontend Usage

```tsx
import { useAuth } from '@/lib/hooks/useAuth'
import { useDashboard } from '@/lib/hooks/useDashboard'
import { RoleBasedStats } from '@/components/dashboard/RoleBasedStats'

function DashboardPage() {
  const { isAdmin, isTeacher, user } = useAuth()
  const { stats, loading } = useDashboard()

  return (
    <div>
      <h1>Welcome, {user?.name}</h1>
      {isAdmin && <AdminOnlyComponent />}
      {isTeacher && <TeacherOnlyComponent />}
      <RoleBasedStats />
    </div>
  )
}
```

## Next Steps

1. **Implement JWT Verification**: Replace mock `verifyJWT` function in `lib/auth/middleware.ts`
2. **Connect Database**: Replace mock data with actual database queries in API routes
3. **Add Authentication UI**: Create login/logout components
4. **Add Error Handling**: Implement proper error boundaries and error states
5. **Add Loading States**: Implement skeleton loaders for better UX

## Testing

### Admin User Test
1. Login as admin
2. Should see ALL courses and groups
3. Should see "All Branches" and "Global Settings"

### Teacher User Test
1. Login as teacher
2. Should see ONLY assigned courses/groups
3. Should see "My Students" and "My Groups"
4. Should NOT see courses they're not assigned to
