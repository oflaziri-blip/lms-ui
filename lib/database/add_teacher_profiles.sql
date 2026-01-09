-- ============================================================================
-- Add Teacher Profiles Table (Optional)
-- Run this in Supabase SQL Editor if you want to store teacher-specific data
-- ============================================================================

CREATE TABLE IF NOT EXISTS teacher_profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID UNIQUE NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  bio TEXT,
  hourly_rate DECIMAL(10, 2),
  specializations TEXT[],
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_teacher_profiles_user_id ON teacher_profiles(user_id);

-- Enable RLS
ALTER TABLE teacher_profiles ENABLE ROW LEVEL SECURITY;

-- Allow anonymous read access for development
CREATE POLICY IF NOT EXISTS "Allow anonymous read teacher_profiles" ON teacher_profiles FOR SELECT USING (true);

-- Allow anonymous insert/update for development (remove in production!)
CREATE POLICY IF NOT EXISTS "Allow anonymous insert teacher_profiles" ON teacher_profiles FOR INSERT WITH CHECK (true);
CREATE POLICY IF NOT EXISTS "Allow anonymous update teacher_profiles" ON teacher_profiles FOR UPDATE USING (true);
