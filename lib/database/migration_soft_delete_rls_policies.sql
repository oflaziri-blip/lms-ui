-- =====================================================
-- SOFT DELETE RLS POLICIES FOR LMS
-- =====================================================
-- This migration adds Row Level Security policies to ensure:
-- 1. Admins can see ALL rows (including deleted ones)
-- 2. Teachers and Students can ONLY see non-deleted rows
-- =====================================================

-- =====================================================
-- COURSES TABLE POLICIES
-- =====================================================

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Admins can view all courses including deleted" ON courses;
DROP POLICY IF EXISTS "Teachers can view active courses only" ON courses;
DROP POLICY IF EXISTS "Students can view active courses only" ON courses;
DROP POLICY IF EXISTS "Non-admins can only view active courses" ON courses;

-- Policy 1: Admins can view ALL courses (including deleted)
CREATE POLICY "Admins can view all courses including deleted"
ON courses
FOR SELECT
TO authenticated
USING (
  (auth.jwt() -> 'user_metadata' ->> 'role' = 'admin')
  OR
  (SELECT role FROM users WHERE id = auth.uid()) = 'admin'
);

-- Policy 2: Non-admins can ONLY view active (non-deleted) courses
CREATE POLICY "Non-admins can only view active courses"
ON courses
FOR SELECT
TO authenticated
USING (
  deleted_at IS NULL
  AND (
    (auth.jwt() -> 'user_metadata' ->> 'role' IN ('teacher', 'student'))
    OR
    (SELECT role FROM users WHERE id = auth.uid()) IN ('teacher', 'student')
  )
);

-- =====================================================
-- GROUPS TABLE POLICIES
-- =====================================================

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Admins can view all groups including deleted" ON groups;
DROP POLICY IF EXISTS "Teachers can view active groups only" ON groups;
DROP POLICY IF EXISTS "Students can view active groups only" ON groups;
DROP POLICY IF EXISTS "Non-admins can only view active groups" ON groups;

-- Policy 1: Admins can view ALL groups (including deleted)
CREATE POLICY "Admins can view all groups including deleted"
ON groups
FOR SELECT
TO authenticated
USING (
  (auth.jwt() -> 'user_metadata' ->> 'role' = 'admin')
  OR
  (SELECT role FROM users WHERE id = auth.uid()) = 'admin'
);

-- Policy 2: Non-admins can ONLY view active (non-deleted) groups
CREATE POLICY "Non-admins can only view active groups"
ON groups
FOR SELECT
TO authenticated
USING (
  deleted_at IS NULL
  AND (
    (auth.jwt() -> 'user_metadata' ->> 'role' IN ('teacher', 'student'))
    OR
    (SELECT role FROM users WHERE id = auth.uid()) IN ('teacher', 'student')
  )
);

-- =====================================================
-- USERS TABLE POLICIES
-- =====================================================

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Admins can view all users including deleted" ON users;
DROP POLICY IF EXISTS "Teachers can view active users only" ON users;
DROP POLICY IF EXISTS "Students can view active users only" ON users;
DROP POLICY IF EXISTS "Non-admins can only view active users" ON users;
DROP POLICY IF EXISTS "Users can view their own profile" ON users;

-- Policy 1: Admins can view ALL users (including deleted)
CREATE POLICY "Admins can view all users including deleted"
ON users
FOR SELECT
TO authenticated
USING (
  (auth.jwt() -> 'user_metadata' ->> 'role' = 'admin')
  OR
  (SELECT role FROM users WHERE id = auth.uid()) = 'admin'
);

-- Policy 2: Non-admins can ONLY view active (non-deleted) users
CREATE POLICY "Non-admins can only view active users"
ON users
FOR SELECT
TO authenticated
USING (
  deleted_at IS NULL
  AND (
    (auth.jwt() -> 'user_metadata' ->> 'role' IN ('teacher', 'student'))
    OR
    (SELECT role FROM users WHERE id = auth.uid()) IN ('teacher', 'student')
  )
);

-- Policy 3: Users can always view their own profile (even if deleted)
CREATE POLICY "Users can view their own profile"
ON users
FOR SELECT
TO authenticated
USING (
  id = auth.uid()
);

-- =====================================================
-- ENROLLMENTS TABLE POLICIES
-- =====================================================

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Admins can view all enrollments" ON enrollments;
DROP POLICY IF EXISTS "Teachers can view enrollments for their groups" ON enrollments;
DROP POLICY IF EXISTS "Students can view their own enrollments" ON enrollments;
DROP POLICY IF EXISTS "Users can view enrollments for active groups only" ON enrollments;

-- Policy 1: Admins can view ALL enrollments
CREATE POLICY "Admins can view all enrollments"
ON enrollments
FOR SELECT
TO authenticated
USING (
  (auth.jwt() -> 'user_metadata' ->> 'role' = 'admin')
  OR
  (SELECT role FROM users WHERE id = auth.uid()) = 'admin'
);

-- Policy 2: Teachers can view enrollments for their groups (only active groups)
CREATE POLICY "Teachers can view enrollments for their groups"
ON enrollments
FOR SELECT
TO authenticated
USING (
  (
    (auth.jwt() -> 'user_metadata' ->> 'role' = 'teacher')
    OR
    (SELECT role FROM users WHERE id = auth.uid()) = 'teacher'
  )
  AND
  group_id IN (
    SELECT id FROM groups 
    WHERE teacher_id = auth.uid() 
    AND deleted_at IS NULL
  )
);

-- Policy 3: Students can view their own enrollments (only for active groups)
CREATE POLICY "Students can view their own enrollments"
ON enrollments
FOR SELECT
TO authenticated
USING (
  student_id = auth.uid()
  AND
  group_id IN (
    SELECT id FROM groups WHERE deleted_at IS NULL
  )
);

-- =====================================================
-- UPDATE/DELETE POLICIES (Admin Only)
-- =====================================================

-- Only admins can update courses
DROP POLICY IF EXISTS "Only admins can update courses" ON courses;
CREATE POLICY "Only admins can update courses"
ON courses
FOR UPDATE
TO authenticated
USING (
  (auth.jwt() -> 'user_metadata' ->> 'role' = 'admin')
  OR
  (SELECT role FROM users WHERE id = auth.uid()) = 'admin'
);

-- Only admins can delete courses
DROP POLICY IF EXISTS "Only admins can delete courses" ON courses;
CREATE POLICY "Only admins can delete courses"
ON courses
FOR DELETE
TO authenticated
USING (
  (auth.jwt() -> 'user_metadata' ->> 'role' = 'admin')
  OR
  (SELECT role FROM users WHERE id = auth.uid()) = 'admin'
);

-- Only admins can update groups
DROP POLICY IF EXISTS "Only admins can update groups" ON groups;
CREATE POLICY "Only admins can update groups"
ON groups
FOR UPDATE
TO authenticated
USING (
  (auth.jwt() -> 'user_metadata' ->> 'role' = 'admin')
  OR
  (SELECT role FROM users WHERE id = auth.uid()) = 'admin'
);

-- Only admins can delete groups
DROP POLICY IF EXISTS "Only admins can delete groups" ON groups;
CREATE POLICY "Only admins can delete groups"
ON groups
FOR DELETE
TO authenticated
USING (
  (auth.jwt() -> 'user_metadata' ->> 'role' = 'admin')
  OR
  (SELECT role FROM users WHERE id = auth.uid()) = 'admin'
);

-- Only admins can update users
DROP POLICY IF EXISTS "Only admins can update users" ON users;
CREATE POLICY "Only admins can update users"
ON users
FOR UPDATE
TO authenticated
USING (
  (auth.jwt() -> 'user_metadata' ->> 'role' = 'admin')
  OR
  (SELECT role FROM users WHERE id = auth.uid()) = 'admin'
  OR
  id = auth.uid() -- Users can update their own profile
);

-- Only admins can delete users
DROP POLICY IF EXISTS "Only admins can delete users" ON users;
CREATE POLICY "Only admins can delete users"
ON users
FOR DELETE
TO authenticated
USING (
  (auth.jwt() -> 'user_metadata' ->> 'role' = 'admin')
  OR
  (SELECT role FROM users WHERE id = auth.uid()) = 'admin'
);

-- =====================================================
-- VERIFICATION QUERIES
-- =====================================================
-- Run these queries to verify the policies are working:

-- 1. Check all policies on courses table
-- SELECT * FROM pg_policies WHERE tablename = 'courses';

-- 2. Check all policies on groups table
-- SELECT * FROM pg_policies WHERE tablename = 'groups';

-- 3. Check all policies on users table
-- SELECT * FROM pg_policies WHERE tablename = 'users';

-- 4. Check all policies on enrollments table
-- SELECT * FROM pg_policies WHERE tablename = 'enrollments';

-- =====================================================
-- NOTES
-- =====================================================
-- 1. These policies ensure that deleted items are only visible to admins
-- 2. Teachers and students will never see deleted courses, groups, or users
-- 3. The Recycle Bin page (/admin/bin) uses service role client to bypass RLS
-- 4. Regular API endpoints will automatically filter deleted items via RLS
-- 5. Users can always see their own profile even if deleted (for logout, etc.)
-- =====================================================
