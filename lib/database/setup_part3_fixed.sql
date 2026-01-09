-- Part 3: Row Level Security Policies (FIXED VERSION)
-- Copy and paste this in Supabase SQL Editor

ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE courses ENABLE ROW LEVEL SECURITY;
ALTER TABLE groups ENABLE ROW LEVEL SECURITY;
ALTER TABLE enrollments ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist (to avoid conflicts)
DROP POLICY IF EXISTS "Allow anonymous read users" ON users;
DROP POLICY IF EXISTS "Allow anonymous read courses" ON courses;
DROP POLICY IF EXISTS "Allow anonymous read groups" ON groups;
DROP POLICY IF EXISTS "Allow anonymous read enrollments" ON enrollments;
DROP POLICY IF EXISTS "Allow anonymous insert enrollments" ON enrollments;
DROP POLICY IF EXISTS "Allow anonymous update enrollments" ON enrollments;

-- Allow anonymous read access for development
CREATE POLICY "Allow anonymous read users" ON users FOR SELECT USING (true);
CREATE POLICY "Allow anonymous read courses" ON courses FOR SELECT USING (true);
CREATE POLICY "Allow anonymous read groups" ON groups FOR SELECT USING (true);
CREATE POLICY "Allow anonymous read enrollments" ON enrollments FOR SELECT USING (true);

-- Allow anonymous insert/update for development (remove in production!)
CREATE POLICY "Allow anonymous insert enrollments" ON enrollments FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow anonymous update enrollments" ON enrollments FOR UPDATE USING (true);
