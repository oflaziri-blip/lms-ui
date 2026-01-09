-- Migration: Add Soft Delete Support
-- Description: Adds deleted_at column to courses, groups, and users tables for soft delete functionality
-- Date: 2026-01-07

-- Add deleted_at column to courses table
ALTER TABLE courses 
ADD COLUMN IF NOT EXISTS deleted_at TIMESTAMPTZ DEFAULT NULL;

-- Add deleted_at column to groups table
ALTER TABLE groups 
ADD COLUMN IF NOT EXISTS deleted_at TIMESTAMPTZ DEFAULT NULL;

-- Add deleted_at column to users table
ALTER TABLE users 
ADD COLUMN IF NOT EXISTS deleted_at TIMESTAMPTZ DEFAULT NULL;

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_courses_deleted_at ON courses(deleted_at);
CREATE INDEX IF NOT EXISTS idx_groups_deleted_at ON groups(deleted_at);
CREATE INDEX IF NOT EXISTS idx_users_deleted_at ON users(deleted_at);

-- Add comments for documentation
COMMENT ON COLUMN courses.deleted_at IS 'Timestamp when the course was soft deleted. NULL means not deleted.';
COMMENT ON COLUMN groups.deleted_at IS 'Timestamp when the group was soft deleted. NULL means not deleted.';
COMMENT ON COLUMN users.deleted_at IS 'Timestamp when the user was soft deleted. NULL means not deleted.';
