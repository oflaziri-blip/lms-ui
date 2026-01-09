-- ============================================================================
-- Fix RLS Policies for Course Import
-- ============================================================================
-- This script adds policies to allow course imports via API routes

-- Drop existing restrictive policies if they exist
DROP POLICY IF EXISTS "Admins can manage courses" ON courses;

-- Create a more permissive policy that allows inserts/updates for authenticated admins
-- Note: This still requires auth.uid() to be set, so it won't allow anonymous access

-- Allow admins to manage courses (INSERT, UPDATE, DELETE)
CREATE POLICY "Admins can manage courses" ON courses
  FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM users 
      WHERE id = auth.uid() AND role = 'admin'
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM users 
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- ============================================================================
-- Alternative: Allow anonymous INSERT for course imports (less secure)
-- Only use this if service role key is not available
-- ============================================================================
-- Uncomment the following if you can't use service role key:

-- DROP POLICY IF EXISTS "Allow anonymous insert courses" ON courses;
-- CREATE POLICY "Allow anonymous insert courses" ON courses
--   FOR INSERT
--   WITH CHECK (true);

-- DROP POLICY IF EXISTS "Allow anonymous update courses" ON courses;
-- CREATE POLICY "Allow anonymous update courses" ON courses
--   FOR UPDATE
--   USING (true)
--   WITH CHECK (true);

-- ============================================================================
-- Apply same fixes to modules, lessons, and tasks
-- ============================================================================

-- Modules
DROP POLICY IF EXISTS "Admins can manage modules" ON modules;
CREATE POLICY "Admins can manage modules" ON modules
  FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM users 
      WHERE id = auth.uid() AND role = 'admin'
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM users 
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- Lessons
DROP POLICY IF EXISTS "Admins can manage lessons" ON lessons;
CREATE POLICY "Admins can manage lessons" ON lessons
  FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM users 
      WHERE id = auth.uid() AND role = 'admin'
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM users 
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- Tasks
DROP POLICY IF EXISTS "Admins can manage tasks" ON tasks;
CREATE POLICY "Admins can manage tasks" ON tasks
  FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM users 
      WHERE id = auth.uid() AND role = 'admin'
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM users 
      WHERE id = auth.uid() AND role = 'admin'
    )
  );
