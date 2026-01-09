-- ============================================================================
-- Add "invited" Status to Users Table
-- Run this in Supabase SQL Editor to allow "invited" status
-- ============================================================================

-- Drop the existing check constraint
ALTER TABLE users DROP CONSTRAINT IF EXISTS users_status_check;

-- Add new constraint that includes "invited"
ALTER TABLE users ADD CONSTRAINT users_status_check 
  CHECK (status IN ('active', 'inactive', 'suspended', 'invited'));

-- Optional: Update the default if you want new users to be "invited" by default
-- ALTER TABLE users ALTER COLUMN status SET DEFAULT 'invited';
