-- ============================================================================
-- LMS Database Schema
-- ============================================================================

-- Users Table (Already exists - shown for reference)
-- ============================================================================
CREATE TABLE IF NOT EXISTS users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) UNIQUE NOT NULL,
  name VARCHAR(255) NOT NULL,
  role VARCHAR(50) NOT NULL CHECK (role IN ('admin', 'teacher', 'student')),
  phone VARCHAR(50),
  avatar_url TEXT,
  status VARCHAR(50) DEFAULT 'active' CHECK (status IN ('active', 'inactive', 'suspended')),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Teacher-specific metadata (for users with role='teacher')
CREATE TABLE IF NOT EXISTS teacher_profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID UNIQUE NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  bio TEXT,
  hourly_rate DECIMAL(10, 2),
  specializations TEXT[], -- Array of tags like ['Python', 'React', 'Data Science']
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Courses Table
-- ============================================================================
CREATE TABLE IF NOT EXISTS courses (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title VARCHAR(255) NOT NULL,
  description TEXT,
  duration VARCHAR(100),
  lessons_count INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Groups Table (Classes)
-- ============================================================================
CREATE TABLE IF NOT EXISTS groups (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(255) NOT NULL,
  course_id UUID NOT NULL REFERENCES courses(id) ON DELETE CASCADE,
  teacher_id UUID REFERENCES users(id) ON DELETE SET NULL,
  schedule TEXT, -- JSON or text describing schedule
  start_date DATE,
  end_date DATE,
  max_students INTEGER DEFAULT 30,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  
  -- Ensure teacher is actually a teacher
  CONSTRAINT teacher_role_check CHECK (
    teacher_id IS NULL OR 
    EXISTS (SELECT 1 FROM users WHERE id = teacher_id AND role = 'teacher')
  )
);

-- ============================================================================
-- ENROLLMENTS TABLE (Junction Table)
-- Links Students to Groups
-- ============================================================================
CREATE TABLE IF NOT EXISTS enrollments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  group_id UUID NOT NULL REFERENCES groups(id) ON DELETE CASCADE,
  student_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  status VARCHAR(50) DEFAULT 'active' CHECK (status IN ('active', 'dropped', 'completed')),
  joined_at TIMESTAMP DEFAULT NOW(),
  completed_at TIMESTAMP,
  progress DECIMAL(5, 2) DEFAULT 0.0, -- Progress percentage (0-100)
  
  -- Prevent duplicate enrollments
  UNIQUE(group_id, student_id),
  
  -- Ensure student is actually a student
  CONSTRAINT student_role_check CHECK (
    EXISTS (SELECT 1 FROM users WHERE id = student_id AND role = 'student')
  )
);

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_enrollments_group_id ON enrollments(group_id);
CREATE INDEX IF NOT EXISTS idx_enrollments_student_id ON enrollments(student_id);
CREATE INDEX IF NOT EXISTS idx_enrollments_status ON enrollments(status);
CREATE INDEX IF NOT EXISTS idx_groups_teacher_id ON groups(teacher_id);
CREATE INDEX IF NOT EXISTS idx_groups_course_id ON groups(course_id);

-- ============================================================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- ============================================================================

-- Enable RLS on all tables
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE teacher_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE courses ENABLE ROW LEVEL SECURITY;
ALTER TABLE groups ENABLE ROW LEVEL SECURITY;
ALTER TABLE enrollments ENABLE ROW LEVEL SECURITY;

-- Users Policies
-- ============================================================================
-- Admins can see all users
CREATE POLICY "Admins can view all users" ON users
  FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM users AS u 
      WHERE u.id = auth.uid() AND u.role = 'admin'
    )
  );

-- Teachers can see students in their groups
CREATE POLICY "Teachers can view their students" ON users
  FOR SELECT
  USING (
    role = 'student' AND
    EXISTS (
      SELECT 1 FROM groups g
      INNER JOIN enrollments e ON g.id = e.group_id
      WHERE g.teacher_id = auth.uid() AND e.student_id = users.id
    )
  );

-- Users can view their own profile
CREATE POLICY "Users can view own profile" ON users
  FOR SELECT
  USING (id = auth.uid());

-- Admins can insert/update/delete users
CREATE POLICY "Admins can manage users" ON users
  FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM users AS u 
      WHERE u.id = auth.uid() AND u.role = 'admin'
    )
  );

-- Enrollments Policies
-- ============================================================================
-- Admins can view all enrollments
CREATE POLICY "Admins can view all enrollments" ON enrollments
  FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM users 
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- Teachers can view enrollments in their groups
CREATE POLICY "Teachers can view their group enrollments" ON enrollments
  FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM groups 
      WHERE id = enrollments.group_id AND teacher_id = auth.uid()
    )
  );

-- Students can view their own enrollments
CREATE POLICY "Students can view own enrollments" ON enrollments
  FOR SELECT
  USING (student_id = auth.uid());

-- Admins can insert/update/delete enrollments
CREATE POLICY "Admins can manage enrollments" ON enrollments
  FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM users 
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- Teachers can enroll students in their groups
CREATE POLICY "Teachers can enroll students in their groups" ON enrollments
  FOR INSERT
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM groups 
      WHERE id = enrollments.group_id AND teacher_id = auth.uid()
    )
  );

-- Groups Policies
-- ============================================================================
-- Admins can view all groups
CREATE POLICY "Admins can view all groups" ON groups
  FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM users 
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- Teachers can view their own groups
CREATE POLICY "Teachers can view their groups" ON groups
  FOR SELECT
  USING (teacher_id = auth.uid());

-- Students can view groups they're enrolled in
CREATE POLICY "Students can view enrolled groups" ON groups
  FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM enrollments 
      WHERE group_id = groups.id AND student_id = auth.uid()
    )
  );

-- Admins can manage all groups
CREATE POLICY "Admins can manage groups" ON groups
  FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM users 
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- Courses Policies
-- ============================================================================
-- Everyone can view active courses
CREATE POLICY "Anyone can view active courses" ON courses
  FOR SELECT
  USING (is_active = true);

-- Admins can manage courses
CREATE POLICY "Admins can manage courses" ON courses
  FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM users 
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- ============================================================================
-- HELPER FUNCTIONS
-- ============================================================================

-- Function to get available students for a group (not already enrolled)
CREATE OR REPLACE FUNCTION get_available_students_for_group(p_group_id UUID)
RETURNS TABLE (
  id UUID,
  name VARCHAR,
  email VARCHAR,
  avatar_url TEXT
) AS $$
BEGIN
  RETURN QUERY
  SELECT u.id, u.name, u.email, u.avatar_url
  FROM users u
  WHERE u.role = 'student'
    AND u.status = 'active'
    AND u.id NOT IN (
      SELECT student_id 
      FROM enrollments 
      WHERE group_id = p_group_id AND status = 'active'
    )
  ORDER BY u.name;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Function to get group details with stats
CREATE OR REPLACE FUNCTION get_group_details(p_group_id UUID)
RETURNS JSON AS $$
DECLARE
  result JSON;
BEGIN
  SELECT json_build_object(
    'id', g.id,
    'name', g.name,
    'schedule', g.schedule,
    'start_date', g.start_date,
    'end_date', g.end_date,
    'max_students', g.max_students,
    'is_active', g.is_active,
    'course', json_build_object(
      'id', c.id,
      'title', c.title,
      'description', c.description
    ),
    'teacher', json_build_object(
      'id', t.id,
      'name', t.name,
      'email', t.email
    ),
    'enrolled_count', (
      SELECT COUNT(*) FROM enrollments 
      WHERE group_id = g.id AND status = 'active'
    ),
    'available_slots', g.max_students - (
      SELECT COUNT(*) FROM enrollments 
      WHERE group_id = g.id AND status = 'active'
    )
  ) INTO result
  FROM groups g
  LEFT JOIN courses c ON g.course_id = c.id
  LEFT JOIN users t ON g.teacher_id = t.id
  WHERE g.id = p_group_id;
  
  RETURN result;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
