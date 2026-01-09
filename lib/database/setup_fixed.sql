-- ============================================================================
-- LMS Database Setup Script for Supabase (FIXED VERSION)
-- Run this in the Supabase SQL Editor
-- ============================================================================

-- 1. Users Table
-- ============================================================================
CREATE TABLE IF NOT EXISTS users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) UNIQUE NOT NULL,
  name VARCHAR(255) NOT NULL,
  role VARCHAR(50) NOT NULL CHECK (role IN ('admin', 'teacher', 'student')),
  phone VARCHAR(50),
  avatar_url TEXT,
  status VARCHAR(50) DEFAULT 'active' CHECK (status IN ('active', 'inactive', 'suspended')),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Courses Table
-- ============================================================================
CREATE TABLE IF NOT EXISTS courses (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title VARCHAR(255) NOT NULL,
  description TEXT,
  duration VARCHAR(100),
  lessons_count INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. Groups Table
-- ============================================================================
CREATE TABLE IF NOT EXISTS groups (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(255) NOT NULL,
  course_id UUID NOT NULL REFERENCES courses(id) ON DELETE CASCADE,
  teacher_id UUID REFERENCES users(id) ON DELETE SET NULL,
  schedule TEXT,
  start_date DATE,
  end_date DATE,
  max_students INTEGER DEFAULT 30,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. Enrollments Table (Junction Table)
-- ============================================================================
CREATE TABLE IF NOT EXISTS enrollments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  group_id UUID NOT NULL REFERENCES groups(id) ON DELETE CASCADE,
  student_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  status VARCHAR(50) DEFAULT 'active' CHECK (status IN ('active', 'dropped', 'completed')),
  joined_at TIMESTAMPTZ DEFAULT NOW(),
  completed_at TIMESTAMPTZ,
  progress DECIMAL(5, 2) DEFAULT 0.0,
  UNIQUE(group_id, student_id)
);

-- 5. Create Indexes
-- ============================================================================
CREATE INDEX IF NOT EXISTS idx_users_role ON users(role);
CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);
CREATE INDEX IF NOT EXISTS idx_groups_course_id ON groups(course_id);
CREATE INDEX IF NOT EXISTS idx_groups_teacher_id ON groups(teacher_id);
CREATE INDEX IF NOT EXISTS idx_enrollments_group_id ON enrollments(group_id);
CREATE INDEX IF NOT EXISTS idx_enrollments_student_id ON enrollments(student_id);
CREATE INDEX IF NOT EXISTS idx_enrollments_status ON enrollments(status);

-- ============================================================================
-- SAMPLE DATA
-- ============================================================================

-- Insert sample users (Admin, Teachers, Students)
INSERT INTO users (id, email, name, role, status) VALUES
  ('11111111-1111-1111-1111-111111111111', 'admin@lms.com', 'Admin User', 'admin', 'active'),
  ('22222222-2222-2222-2222-222222222222', 'john.smith@lms.com', 'John Smith', 'teacher', 'active'),
  ('33333333-3333-3333-3333-333333333333', 'sarah.johnson@lms.com', 'Sarah Johnson', 'teacher', 'active'),
  ('44444444-4444-4444-4444-444444444444', 'michael.chen@lms.com', 'Michael Chen', 'teacher', 'active'),
  ('55555555-5555-5555-5555-555555555555', 'alice.johnson@lms.com', 'Alice Johnson', 'student', 'active'),
  ('66666666-6666-6666-6666-666666666666', 'bob.williams@lms.com', 'Bob Williams', 'student', 'active'),
  ('77777777-7777-7777-7777-777777777777', 'charlie.brown@lms.com', 'Charlie Brown', 'student', 'active'),
  ('88888888-8888-8888-8888-888888888888', 'diana.prince@lms.com', 'Diana Prince', 'student', 'active'),
  ('99999999-9999-9999-9999-999999999999', 'ethan.hunt@lms.com', 'Ethan Hunt', 'student', 'active'),
  ('aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa', 'fiona.green@lms.com', 'Fiona Green', 'student', 'active')
ON CONFLICT (id) DO NOTHING;

-- Insert sample courses
INSERT INTO courses (id, title, description, duration, lessons_count) VALUES
  ('c1111111-1111-1111-1111-111111111111', 'Python Core', 'Learn Python fundamentals from scratch', '6 months', 32),
  ('c2222222-2222-2222-2222-222222222222', 'Web Development', 'Full-stack web development with React and Node.js', '4 months', 24),
  ('c3333333-3333-3333-3333-333333333333', 'AI Fundamentals', 'Introduction to Artificial Intelligence and Machine Learning', '3 months', 18),
  ('c4444444-4444-4444-4444-444444444444', 'Game Design', 'Create games with Unity and C#', '5 months', 28)
ON CONFLICT (id) DO NOTHING;

-- Insert sample groups
INSERT INTO groups (id, name, course_id, teacher_id, schedule, start_date, max_students) VALUES
  ('g1111111-1111-1111-1111-111111111111', 'Python Core - Group A', 'c1111111-1111-1111-1111-111111111111', '22222222-2222-2222-2222-222222222222', 'Mon, Wed, Fri - 10:00 AM', '2024-01-15', 30),
  ('g2222222-2222-2222-2222-222222222222', 'Web Development - Beginners', 'c2222222-2222-2222-2222-222222222222', '33333333-3333-3333-3333-333333333333', 'Tue, Thu - 2:00 PM', '2024-02-01', 25),
  ('g3333333-3333-3333-3333-333333333333', 'AI & Machine Learning', 'c3333333-3333-3333-3333-333333333333', '44444444-4444-4444-4444-444444444444', 'Mon, Wed - 6:00 PM', '2024-01-20', 20)
ON CONFLICT (id) DO NOTHING;

-- Insert sample enrollments
INSERT INTO enrollments (group_id, student_id, status, progress) VALUES
  ('g1111111-1111-1111-1111-111111111111', '55555555-5555-5555-5555-555555555555', 'active', 65.5),
  ('g1111111-1111-1111-1111-111111111111', '66666666-6666-6666-6666-666666666666', 'active', 72.3),
  ('g2222222-2222-2222-2222-222222222222', '77777777-7777-7777-7777-777777777777', 'active', 45.0),
  ('g2222222-2222-2222-2222-222222222222', '88888888-8888-8888-8888-888888888888', 'active', 58.2),
  ('g3333333-3333-3333-3333-333333333333', '99999999-9999-9999-9999-999999999999', 'active', 30.0)
ON CONFLICT (group_id, student_id) DO NOTHING;

-- ============================================================================
-- ROW LEVEL SECURITY
-- ============================================================================

ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE courses ENABLE ROW LEVEL SECURITY;
ALTER TABLE groups ENABLE ROW LEVEL SECURITY;
ALTER TABLE enrollments ENABLE ROW LEVEL SECURITY;

-- Allow anonymous read access for development
CREATE POLICY IF NOT EXISTS "Allow anonymous read users" ON users FOR SELECT USING (true);
CREATE POLICY IF NOT EXISTS "Allow anonymous read courses" ON courses FOR SELECT USING (true);
CREATE POLICY IF NOT EXISTS "Allow anonymous read groups" ON groups FOR SELECT USING (true);
CREATE POLICY IF NOT EXISTS "Allow anonymous read enrollments" ON enrollments FOR SELECT USING (true);

-- Allow anonymous insert/update for development (remove in production!)
CREATE POLICY IF NOT EXISTS "Allow anonymous insert enrollments" ON enrollments FOR INSERT WITH CHECK (true);
CREATE POLICY IF NOT EXISTS "Allow anonymous update enrollments" ON enrollments FOR UPDATE USING (true);
