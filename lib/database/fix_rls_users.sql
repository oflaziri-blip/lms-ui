-- ============================================================================
-- Fix RLS Policies for Users Table - Allow User Creation
-- Run this in Supabase SQL Editor
-- ============================================================================

-- Drop existing policies if they exist (to avoid conflicts)
DROP POLICY IF EXISTS "Allow anonymous insert users" ON users;
DROP POLICY IF EXISTS "Allow anonymous update users" ON users;
DROP POLICY IF EXISTS "Allow anonymous delete users" ON users;

-- Add INSERT policy for users table (allows creating new users)
CREATE POLICY "Allow anonymous insert users" ON users 
  FOR INSERT 
  WITH CHECK (true);

-- Add UPDATE policy for users table (allows updating users)
CREATE POLICY "Allow anonymous update users" ON users 
  FOR UPDATE 
  USING (true)
  WITH CHECK (true);

-- Add DELETE policy for users table (allows deleting users)
CREATE POLICY "Allow anonymous delete users" ON users 
  FOR DELETE 
  USING (true);

-- ============================================================================
-- Note: These policies allow full anonymous access for development.
-- In production, you should restrict these based on authenticated user roles.
-- ============================================================================
