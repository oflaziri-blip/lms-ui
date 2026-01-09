-- Part 2: Insert Sample Data (FIXED VERSION)
-- UUIDs must be hexadecimal (0-9, a-f only) - no 'g' or 'c' at the start!

-- Insert sample users (Admin, Teachers, Students)
INSERT INTO users (id, email, name, role, status) VALUES
  ('11111111-1111-1111-1111-111111111111'::uuid, 'admin@lms.com', 'Admin User', 'admin', 'active'),
  ('22222222-2222-2222-2222-222222222222'::uuid, 'john.smith@lms.com', 'John Smith', 'teacher', 'active'),
  ('33333333-3333-3333-3333-333333333333'::uuid, 'sarah.johnson@lms.com', 'Sarah Johnson', 'teacher', 'active'),
  ('44444444-4444-4444-4444-444444444444'::uuid, 'michael.chen@lms.com', 'Michael Chen', 'teacher', 'active'),
  ('55555555-5555-5555-5555-555555555555'::uuid, 'alice.johnson@lms.com', 'Alice Johnson', 'student', 'active'),
  ('66666666-6666-6666-6666-666666666666'::uuid, 'bob.williams@lms.com', 'Bob Williams', 'student', 'active'),
  ('77777777-7777-7777-7777-777777777777'::uuid, 'charlie.brown@lms.com', 'Charlie Brown', 'student', 'active'),
  ('88888888-8888-8888-8888-888888888888'::uuid, 'diana.prince@lms.com', 'Diana Prince', 'student', 'active'),
  ('99999999-9999-9999-9999-999999999999'::uuid, 'ethan.hunt@lms.com', 'Ethan Hunt', 'student', 'active'),
  ('aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa'::uuid, 'fiona.green@lms.com', 'Fiona Green', 'student', 'active')
ON CONFLICT (id) DO NOTHING;

-- Insert sample courses (using valid hex UUIDs)
INSERT INTO courses (id, title, description, duration, lessons_count) VALUES
  ('a1111111-1111-1111-1111-111111111111'::uuid, 'Python Core', 'Learn Python fundamentals from scratch', '6 months', 32),
  ('a2222222-2222-2222-2222-222222222222'::uuid, 'Web Development', 'Full-stack web development with React and Node.js', '4 months', 24),
  ('a3333333-3333-3333-3333-333333333333'::uuid, 'AI Fundamentals', 'Introduction to Artificial Intelligence and Machine Learning', '3 months', 18),
  ('a4444444-4444-4444-4444-444444444444'::uuid, 'Game Design', 'Create games with Unity and C#', '5 months', 28)
ON CONFLICT (id) DO NOTHING;

-- Insert sample groups (using valid hex UUIDs)
INSERT INTO groups (id, name, course_id, teacher_id, schedule, start_date, max_students) VALUES
  ('b1111111-1111-1111-1111-111111111111'::uuid, 'Python Core - Group A', 'a1111111-1111-1111-1111-111111111111'::uuid, '22222222-2222-2222-2222-222222222222'::uuid, 'Mon, Wed, Fri - 10:00 AM', '2024-01-15', 30),
  ('b2222222-2222-2222-2222-222222222222'::uuid, 'Web Development - Beginners', 'a2222222-2222-2222-2222-222222222222'::uuid, '33333333-3333-3333-3333-333333333333'::uuid, 'Tue, Thu - 2:00 PM', '2024-02-01', 25),
  ('b3333333-3333-3333-3333-333333333333'::uuid, 'AI & Machine Learning', 'a3333333-3333-3333-3333-333333333333'::uuid, '44444444-4444-4444-4444-444444444444'::uuid, 'Mon, Wed - 6:00 PM', '2024-01-20', 20)
ON CONFLICT (id) DO NOTHING;

-- Insert sample enrollments
INSERT INTO enrollments (group_id, student_id, status, progress) VALUES
  ('b1111111-1111-1111-1111-111111111111'::uuid, '55555555-5555-5555-5555-555555555555'::uuid, 'active', 65.5),
  ('b1111111-1111-1111-1111-111111111111'::uuid, '66666666-6666-6666-6666-666666666666'::uuid, 'active', 72.3),
  ('b2222222-2222-2222-2222-222222222222'::uuid, '77777777-7777-7777-7777-777777777777'::uuid, 'active', 45.0),
  ('b2222222-2222-2222-2222-222222222222'::uuid, '88888888-8888-8888-8888-888888888888'::uuid, 'active', 58.2),
  ('b3333333-3333-3333-3333-333333333333'::uuid, '99999999-9999-9999-9999-999999999999'::uuid, 'active', 30.0)
ON CONFLICT (group_id, student_id) DO NOTHING;
