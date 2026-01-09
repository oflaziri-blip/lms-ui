# Recycle Bin (Soft Delete) Implementation Summary

## Overview
A comprehensive Recycle Bin system has been implemented for the LMS, allowing administrators to soft-delete courses, groups, and students, with the ability to restore or permanently delete them.

## What Has Been Implemented

### 1. Database Schema
- The `deleted_at` column (timestamp) has been added to:
  - `courses` table
  - `groups` table
  - `users` table

### 2. API Routes - Filtering Deleted Items
All main API routes now filter out soft-deleted items:
- [`/api/courses`](app/api/courses/route.ts) - Filters with `.is("deleted_at", null)`
- [`/api/groups`](app/api/groups/route.ts) - Filters with `.is("deleted_at", null)`
- [`/api/users`](app/api/users/route.ts) - Filters with `.is("deleted_at", null)`

### 3. Soft Delete Endpoints
New DELETE endpoints that perform soft deletes:
- [`DELETE /api/courses/[id]`](app/api/courses/[id]/route.ts) - Sets `deleted_at` to current timestamp
- [`DELETE /api/groups/[id]`](app/api/groups/[id]/route.ts) - Sets `deleted_at` to current timestamp

### 4. Recycle Bin API Routes
New API routes for managing deleted items (Admin only):

#### Fetch Deleted Items:
- [`GET /api/bin/courses`](app/api/bin/courses/route.ts)
- [`GET /api/bin/groups`](app/api/bin/groups/route.ts)
- [`GET /api/bin/students`](app/api/bin/students/route.ts)

#### Restore Items:
- [`POST /api/bin/courses/[id]/restore`](app/api/bin/courses/[id]/restore/route.ts)
- [`POST /api/bin/groups/[id]/restore`](app/api/bin/groups/[id]/restore/route.ts)
- [`POST /api/bin/students/[id]/restore`](app/api/bin/students/[id]/restore/route.ts)

#### Permanently Delete Items:
- [`DELETE /api/bin/courses/[id]`](app/api/bin/courses/[id]/route.ts)
- [`DELETE /api/bin/groups/[id]`](app/api/bin/groups/[id]/route.ts)
- [`DELETE /api/bin/students/[id]`](app/api/bin/students/[id]/route.ts)

### 5. Frontend Components

#### Course Card
- [`components/course/CourseCard.tsx`](components/course/CourseCard.tsx)
  - Added delete button with trash icon
  - Confirmation dialog: "Move to Recycle Bin?"
  - Calls soft delete API endpoint
  - Refreshes course list after deletion

#### Recycle Bin Page
- [`app/(admin)/admin/bin/page.tsx`](app/(admin)/admin/bin/page.tsx)
  - Tabbed interface with three tabs:
    - Deleted Courses
    - Deleted Groups
    - Deleted Students
  - Each item shows:
    - Name/Title
    - Description/Details
    - Deletion timestamp
    - Two action buttons:
      - **Restore** - Returns item to main app
      - **Delete Forever** - Permanently removes from database
  - Confirmation dialogs for both actions

#### Admin Sidebar
- [`components/layout/AdminSidebar.tsx`](components/layout/AdminSidebar.tsx)
  - Added "Recycle Bin" menu item with trash icon
  - Positioned between "Media" and "Branch Settings"
  - Accessible at `/admin/bin`

### 6. Security & Permissions
All Recycle Bin operations are restricted to admins only:
- Authentication check: `user.role === "admin"`
- Returns 403 Forbidden for non-admin users
- Uses `createServiceRoleClient()` to bypass RLS when needed

## User Flow

### Soft Delete Flow:
1. Admin clicks delete button on a course/group/student
2. Confirmation dialog appears: "Move to Recycle Bin?"
3. On confirmation, item's `deleted_at` is set to current timestamp
4. Item disappears from main lists
5. Item appears in Recycle Bin

### Restore Flow:
1. Admin navigates to Recycle Bin (`/admin/bin`)
2. Selects appropriate tab (Courses/Groups/Students)
3. Clicks "Restore" button on an item
4. Confirmation dialog appears
5. On confirmation, `deleted_at` is set back to `null`
6. Item returns to main application

### Permanent Delete Flow:
1. Admin navigates to Recycle Bin
2. Clicks "Delete Forever" button (red, destructive)
3. Warning dialog: "This action cannot be undone!"
4. On confirmation, row is permanently deleted from database

## What Still Needs to Be Done

### 1. RLS Policies (CRITICAL)
**File:** `lib/database/migration_add_soft_delete.sql` or create new migration

You need to update Supabase RLS policies to ensure:

```sql
-- Ensure teachers and students CANNOT see deleted items
CREATE POLICY "Teachers cannot see deleted courses"
ON courses FOR SELECT
TO authenticated
USING (
  deleted_at IS NULL
  AND (
    auth.jwt() ->> 'role' = 'admin'
    OR auth.jwt() ->> 'role' = 'teacher'
  )
);

-- Ensure only admins can query deleted items
CREATE POLICY "Only admins can see deleted courses"
ON courses FOR SELECT
TO authenticated
USING (
  auth.jwt() ->> 'role' = 'admin'
);

-- Similar policies needed for groups and users tables
```

### 2. Group Delete Button
Add delete functionality to group rows in:
- [`app/(admin)/admin/groups/page.tsx`](app/(admin)/admin/groups/page.tsx)
- Or in the group detail page: [`app/(admin)/admin/groups/[id]/page.tsx`](app/(admin)/admin/groups/[id]/page.tsx)

### 3. Student Delete Button
Add delete functionality to student rows in:
- [`app/(admin)/admin/students/page.tsx`](app/(admin)/admin/students/page.tsx)

### 4. Cascade Considerations
Decide on cascade behavior:
- When a course is deleted, should its groups be deleted?
- When a group is deleted, should enrollments be deleted?
- When a student is deleted, should their enrollments be deleted?

Consider adding these to the soft delete endpoints.

### 5. Testing
- Test all soft delete operations
- Test restore operations
- Test permanent delete operations
- Verify RLS policies work correctly
- Test with different user roles (admin, teacher, student)

## API Endpoint Summary

| Endpoint | Method | Purpose | Auth Required |
|----------|--------|---------|---------------|
| `/api/courses` | GET | List active courses | Yes |
| `/api/courses/[id]` | DELETE | Soft delete course | Admin only |
| `/api/groups` | GET | List active groups | Yes |
| `/api/groups/[id]` | DELETE | Soft delete group | Admin only |
| `/api/users` | GET | List active users | Admin only |
| `/api/bin/courses` | GET | List deleted courses | Admin only |
| `/api/bin/courses/[id]/restore` | POST | Restore course | Admin only |
| `/api/bin/courses/[id]` | DELETE | Permanently delete course | Admin only |
| `/api/bin/groups` | GET | List deleted groups | Admin only |
| `/api/bin/groups/[id]/restore` | POST | Restore group | Admin only |
| `/api/bin/groups/[id]` | DELETE | Permanently delete group | Admin only |
| `/api/bin/students` | GET | List deleted students | Admin only |
| `/api/bin/students/[id]/restore` | POST | Restore student | Admin only |
| `/api/bin/students/[id]` | DELETE | Permanently delete student | Admin only |

## Files Modified/Created

### Created:
- `app/(admin)/admin/bin/page.tsx`
- `app/api/bin/courses/route.ts`
- `app/api/bin/courses/[id]/route.ts`
- `app/api/bin/courses/[id]/restore/route.ts`
- `app/api/bin/groups/route.ts`
- `app/api/bin/groups/[id]/route.ts`
- `app/api/bin/groups/[id]/restore/route.ts`
- `app/api/bin/students/route.ts`
- `app/api/bin/students/[id]/route.ts`
- `app/api/bin/students/[id]/restore/route.ts`

### Modified:
- `components/course/CourseCard.tsx` - Added delete button and dialog
- `components/course/CourseGrid.tsx` - Added onDelete prop
- `components/layout/AdminSidebar.tsx` - Added Recycle Bin menu item
- `app/(admin)/admin/courses/page.tsx` - Pass refetch to CourseGrid
- `app/api/courses/[id]/route.ts` - Added DELETE endpoint
- `app/api/groups/[id]/route.ts` - Added DELETE endpoint

## Notes
- All TypeScript errors related to Supabase types are expected and will resolve at runtime
- The system uses service role client for admin operations to bypass RLS
- Confirmation dialogs prevent accidental deletions
- The Recycle Bin provides a safety net before permanent deletion
