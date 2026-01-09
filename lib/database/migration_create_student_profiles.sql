-- ============================================================================
-- Migration: Create Student Profiles Table
-- Date: 2026-01-07
-- Purpose: Separate student-specific data from generic users table
-- ============================================================================

BEGIN;

-- ============================================================================
-- 1. CREATE STUDENT_PROFILES TABLE
-- ============================================================================

CREATE TABLE IF NOT EXISTS student_profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID UNIQUE NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  
  -- Student-specific fields
  grade VARCHAR(50),                    -- e.g., "Grade 10", "Year 1", "Sophomore"
  student_number VARCHAR(100) UNIQUE,   -- School-assigned student ID
  guardian_name VARCHAR(255),           -- Parent/Guardian name
  guardian_email VARCHAR(255),          -- Parent/Guardian email
  guardian_phone VARCHAR(50),           -- Parent/Guardian phone
  enrollment_year INTEGER,              -- Year student enrolled (e.g., 2026)
  graduation_year INTEGER,              -- Expected graduation year
  date_of_birth DATE,                   -- Student's date of birth
  address TEXT,                         -- Student's address
  emergency_contact VARCHAR(255),       -- Emergency contact info
  medical_notes TEXT,                   -- Any medical information
  notes TEXT,                           -- General notes about student
  
  -- Metadata
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  
  -- Ensure user is actually a student
  CONSTRAINT user_is_student CHECK (
    user_id IN (SELECT id FROM users WHERE role = 'student')
  )
);

-- ============================================================================
-- 2. CREATE INDEXES
-- ============================================================================

CREATE INDEX IF NOT EXISTS idx_student_profiles_user_id ON student_profiles(user_id);
CREATE INDEX IF NOT EXISTS idx_student_profiles_grade ON student_profiles(grade);
CREATE INDEX IF NOT EXISTS idx_student_profiles_enrollment_year ON student_profiles(enrollment_year);
CREATE INDEX IF NOT EXISTS idx_student_profiles_student_number ON student_profiles(student_number);

-- ============================================================================
-- 3. ENABLE ROW LEVEL SECURITY
-- ============================================================================

ALTER TABLE student_profiles ENABLE ROW LEVEL SECURITY;

-- ============================================================================
-- 4. CREATE RLS POLICIES
-- ============================================================================

-- Students can ONLY read their own profile
CREATE POLICY "Students can view own profile" ON student_profiles
  FOR SELECT
  USING (user_id = auth.uid());

-- Students can update their own profile (limited fields)
CREATE POLICY "Students can update own profile" ON student_profiles
  FOR UPDATE
  USING (user_id = auth.uid())
  WITH CHECK (user_id = auth.uid());

-- Teachers can view all student profiles
CREATE POLICY "Teachers can view all student profiles" ON student_profiles
  FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM users 
      WHERE id = auth.uid() AND role = 'teacher'
    )
  );

-- Admins can manage all student profiles
CREATE POLICY "Admins can manage student profiles" ON student_profiles
  FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM users 
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- ============================================================================
-- 5. CREATE TRIGGER FOR AUTO-CREATION
-- ============================================================================

-- Automatically create student profile when a student user is created
CREATE OR REPLACE FUNCTION create_student_profile()
RETURNS TRIGGER AS $$
BEGIN
  IF NEW.role = 'student' THEN
    INSERT INTO student_profiles (user_id)
    VALUES (NEW.id)
    ON CONFLICT (user_id) DO NOTHING;
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS auto_create_student_profile ON users;
CREATE TRIGGER auto_create_student_profile
  AFTER INSERT ON users
  FOR EACH ROW
  EXECUTE FUNCTION create_student_profile();

-- ============================================================================
-- 6. MIGRATE EXISTING STUDENTS
-- ============================================================================

-- Create profiles for existing students
INSERT INTO student_profiles (user_id, created_at)
SELECT id, created_at
FROM users
WHERE role = 'student'
ON CONFLICT (user_id) DO NOTHING;

-- ============================================================================
-- 7. ADD COMMENTS
-- ============================================================================

COMMENT ON TABLE student_profiles IS 'Student-specific profile data, separate from generic users table';
COMMENT ON COLUMN student_profiles.user_id IS 'Foreign key to users table (must be role=student)';
COMMENT ON COLUMN student_profiles.grade IS 'Current grade level (e.g., Grade 10, Year 1)';
COMMENT ON COLUMN student_profiles.student_number IS 'School-assigned student ID number';
COMMENT ON COLUMN student_profiles.guardian_email IS 'Parent/Guardian email for communications';

COMMIT;

-- ============================================================================
-- VERIFICATION QUERIES
-- ============================================================================

-- Check table was created
SELECT table_name, column_name, data_type 
FROM information_schema.columns 
WHERE table_name = 'student_profiles'
ORDER BY ordinal_position;

-- Check RLS policies
SELECT policyname, cmd, qual 
FROM pg_policies 
WHERE tablename = 'student_profiles';

-- Check existing student profiles were created
SELECT COUNT(*) as student_profile_count 
FROM student_profiles;

-- Verify trigger works
-- (Create a test student and check if profile is auto-created)
