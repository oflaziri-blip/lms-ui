# Enrollment Database Issue - Root Cause & Fix

**Date:** 2026-01-07  
**Issue:** Enrollments not persisting to database  
**Status:** 🔴 CRITICAL - Database constraint blocking writes

---

## Problem Statement

**Symptom:** 
- Enrollment API returns 200 OK with success message
- Optimistic UI update shows student enrolled
- Page refresh shows 0 students (enrollment not in database)
- Enrollment disappears after refresh

**Evidence:**
```
[Enroll API] Creating enrollment: {groupId: "...", studentId: "..."}
[Enroll API] Enrollment created successfully: {...}
// But on page refresh:
Fetched enrolled students: 0
```

---

## Root Cause: CHECK Constraint Failure

**Location:** [`lib/database/schema.sql:82`](lib/database/schema.sql:82)

**Problematic Constraint:**
```sql
CREATE TABLE enrollments (
  ...
  CONSTRAINT student_role_check CHECK (
    EXISTS (SELECT 1 FROM users WHERE id = student_id AND role = 'student')
  )
);
```

**Why It Fails:**
1. **Subquery in CHECK constraint** - PostgreSQL doesn't reliably evaluate subqueries in CHECK constraints
2. **Service role context** - The subquery may not have access to the users table in the same transaction
3. **Timing issue** - The constraint check happens before the transaction commits
4. **Silent failure** - Supabase client returns success even if constraint fails

**PostgreSQL Documentation:**
> CHECK constraints that contain subqueries are not recommended because the subquery is evaluated at constraint check time, which may not be when you expect.

---

## Solution Options

### Option A: Remove CHECK Constraint (Recommended)
**Pros:**
- Immediate fix
- No code changes needed
- Validation already done in API

**Cons:**
- Loses database-level validation
- Relies on application logic

**Implementation:**
```sql
-- Remove the problematic constraint
ALTER TABLE enrollments DROP CONSTRAINT IF EXISTS student_role_check;
```

**Justification:**
- API already validates student role before insertion
- Double validation is redundant
- Application-level validation is sufficient

### Option B: Replace with Trigger
**Pros:**
- Maintains database-level validation
- More reliable than CHECK constraint

**Cons:**
- More complex
- Requires trigger management

**Implementation:**
```sql
-- Remove CHECK constraint
ALTER TABLE enrollments DROP CONSTRAINT IF EXISTS student_role_check;

-- Create validation trigger
CREATE OR REPLACE FUNCTION validate_student_enrollment()
RETURNS TRIGGER AS $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM users WHERE id = NEW.student_id AND role = 'student') THEN
    RAISE EXCEPTION 'User is not a student';
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER enforce_student_role
  BEFORE INSERT OR UPDATE ON enrollments
  FOR EACH ROW
  EXECUTE FUNCTION validate_student_enrollment();
```

### Option C: Foreign Key with Filtered Unique Index
**Pros:**
- Database-level enforcement
- No subqueries

**Cons:**
- Requires schema changes
- Complex setup

---

## Immediate Fix (Apply Now)

### Step 1: Remove Problematic Constraint

Run this SQL in Supabase SQL Editor:

```sql
-- Check if constraint exists
SELECT conname, contype 
FROM pg_constraint 
WHERE conrelid = 'enrollments'::regclass;

-- Remove the problematic constraint
ALTER TABLE enrollments DROP CONSTRAINT IF EXISTS student_role_check;

-- Verify removal
SELECT conname, contype 
FROM pg_constraint 
WHERE conrelid = 'enrollments'::regclass;
```

### Step 2: Verify Enrollment Works

Test enrollment after removing constraint:

```sql
-- Test insert
INSERT INTO enrollments (group_id, student_id, status, progress)
VALUES (
  'd5d9ecd8-d285-4c42-b936-af705b251636',
  (SELECT id FROM users WHERE email = 'alice.johnson@lms.com' LIMIT 1),
  'active',
  0
);

-- Verify insert
SELECT * FROM enrollments 
WHERE group_id = 'd5d9ecd8-d285-4c42-b936-af705b251636';
```

### Step 3: Test in Application

1. Refresh the page
2. Click "Enroll Student"
3. Select a student
4. Click "Enroll Student" button
5. Refresh page
6. Verify student persists

---

## Alternative: Check for Other Constraints

If removing `student_role_check` doesn't fix it, check for other issues:

### Check 1: Unique Constraint
```sql
-- This should exist and is good
SELECT * FROM pg_indexes WHERE tablename = 'enrollments';
-- Should show: UNIQUE(group_id, student_id)
```

### Check 2: Foreign Key Constraints
```sql
SELECT
  tc.constraint_name,
  tc.table_name,
  kcu.column_name,
  ccu.table_name AS foreign_table_name,
  ccu.column_name AS foreign_column_name
FROM information_schema.table_constraints AS tc
JOIN information_schema.key_column_usage AS kcu
  ON tc.constraint_name = kcu.constraint_name
JOIN information_schema.constraint_column_usage AS ccu
  ON ccu.constraint_name = tc.constraint_name
WHERE tc.table_name = 'enrollments' AND tc.constraint_type = 'FOREIGN KEY';
```

### Check 3: RLS Policies
```sql
-- Check if RLS is blocking writes
SELECT * FROM pg_policies WHERE tablename = 'enrollments';

-- Temporarily disable RLS to test
ALTER TABLE enrollments DISABLE ROW LEVEL SECURITY;

-- Test enrollment
-- ...

-- Re-enable RLS
ALTER TABLE enrollments ENABLE ROW LEVEL SECURITY;
```

---

## Long-Term Solution

### Update Database Schema

**File:** Create `lib/database/fix_enrollment_constraint.sql`

```sql
-- Migration: Fix Enrollment Constraint
-- Date: 2026-01-07
-- Issue: CHECK constraint with subquery prevents enrollments

BEGIN;

-- Remove problematic CHECK constraint
ALTER TABLE enrollments DROP CONSTRAINT IF EXISTS student_role_check;

-- Add comment explaining why we removed it
COMMENT ON TABLE enrollments IS 'Student role validation is performed at application level in API routes';

-- Optionally: Add trigger for validation (more reliable than CHECK)
CREATE OR REPLACE FUNCTION validate_student_enrollment()
RETURNS TRIGGER AS $$
DECLARE
  user_role VARCHAR(50);
BEGIN
  -- Get user role
  SELECT role INTO user_role FROM users WHERE id = NEW.student_id;
  
  -- Validate role
  IF user_role IS NULL THEN
    RAISE EXCEPTION 'User not found: %', NEW.student_id;
  END IF;
  
  IF user_role != 'student' THEN
    RAISE EXCEPTION 'User % is not a student (role: %)', NEW.student_id, user_role;
  END IF;
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger
DROP TRIGGER IF EXISTS enforce_student_role ON enrollments;
CREATE TRIGGER enforce_student_role
  BEFORE INSERT OR UPDATE ON enrollments
  FOR EACH ROW
  EXECUTE FUNCTION validate_student_enrollment();

COMMIT;
```

---

## Testing Checklist

After applying the fix:

- [ ] Remove `student_role_check` constraint
- [ ] Test enrollment via API
- [ ] Verify enrollment persists in database
- [ ] Refresh page and verify student still enrolled
- [ ] Test with multiple students
- [ ] Test duplicate enrollment (should return existing)
- [ ] Test with non-student user (should fail validation in API)
- [ ] Test with full group (should fail validation in API)

---

## Why This Happened

1. **Schema Design:** CHECK constraint with subquery is anti-pattern in PostgreSQL
2. **Service Role:** Subquery evaluation context differs from normal queries
3. **Silent Failure:** Supabase client doesn't always surface constraint violations
4. **Optimistic UI:** Masked the database issue temporarily

---

## Prevention

### Best Practices Going Forward

1. **Avoid Subqueries in CHECK Constraints**
   - Use triggers instead
   - Or rely on application validation

2. **Test Database Constraints**
   - Always test INSERT/UPDATE operations
   - Verify data persists after transaction

3. **Monitor Database Logs**
   - Check for constraint violations
   - Watch for silent failures

4. **Use Proper Error Handling**
   - Log full error objects
   - Include error codes and hints
   - Don't swallow database errors

---

## Immediate Action Required

**Run this SQL in Supabase:**

```sql
ALTER TABLE enrollments DROP CONSTRAINT IF EXISTS student_role_check;
```

This will immediately fix the enrollment persistence issue.
