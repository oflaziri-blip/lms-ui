-- ============================================================================
-- Lessons and Tasks Schema
-- ============================================================================

-- Modules Table (Optional - for organizing lessons)
CREATE TABLE IF NOT EXISTS modules (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  course_id UUID NOT NULL REFERENCES courses(id) ON DELETE CASCADE,
  external_id VARCHAR(255), -- Original module ID from JSON (e.g., "module_1")
  title VARCHAR(255) NOT NULL,
  order_index INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Lessons Table
CREATE TABLE IF NOT EXISTS lessons (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  course_id UUID NOT NULL REFERENCES courses(id) ON DELETE CASCADE,
  module_id UUID REFERENCES modules(id) ON DELETE SET NULL,
  external_id VARCHAR(255), -- Original lesson ID from JSON (e.g., "lesson_01")
  title VARCHAR(255) NOT NULL,
  description TEXT,
  order_index INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Tasks Table
CREATE TABLE IF NOT EXISTS tasks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  lesson_id UUID NOT NULL REFERENCES lessons(id) ON DELETE CASCADE,
  external_id VARCHAR(255), -- Original task ID from JSON (e.g., "task_1")
  type VARCHAR(50) NOT NULL CHECK (type IN ('code', 'quiz')),
  title TEXT,
  instructions TEXT,
  starter_code TEXT,
  solution_code TEXT,
  expected_output TEXT,
  hints TEXT[], -- Array of hint strings
  points INTEGER DEFAULT 0,
  order_index INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_lessons_course_id ON lessons(course_id);
CREATE INDEX IF NOT EXISTS idx_lessons_module_id ON lessons(module_id);
CREATE INDEX IF NOT EXISTS idx_tasks_lesson_id ON tasks(lesson_id);
CREATE INDEX IF NOT EXISTS idx_modules_course_id ON modules(course_id);
CREATE INDEX IF NOT EXISTS idx_lessons_external_id ON lessons(external_id);
CREATE INDEX IF NOT EXISTS idx_tasks_external_id ON tasks(external_id);

-- Enable RLS
ALTER TABLE modules ENABLE ROW LEVEL SECURITY;
ALTER TABLE lessons ENABLE ROW LEVEL SECURITY;
ALTER TABLE tasks ENABLE ROW LEVEL SECURITY;

-- RLS Policies for Modules
CREATE POLICY "Anyone can view active modules" ON modules
  FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM courses 
      WHERE courses.id = modules.course_id AND courses.is_active = true
    )
  );

CREATE POLICY "Admins can manage modules" ON modules
  FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM users 
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- RLS Policies for Lessons
CREATE POLICY "Anyone can view active lessons" ON lessons
  FOR SELECT
  USING (
    is_active = true AND
    EXISTS (
      SELECT 1 FROM courses 
      WHERE courses.id = lessons.course_id AND courses.is_active = true
    )
  );

CREATE POLICY "Admins can manage lessons" ON lessons
  FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM users 
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- RLS Policies for Tasks
CREATE POLICY "Anyone can view active tasks" ON tasks
  FOR SELECT
  USING (
    is_active = true AND
    EXISTS (
      SELECT 1 FROM lessons 
      WHERE lessons.id = tasks.lesson_id AND lessons.is_active = true
    )
  );

CREATE POLICY "Admins can manage tasks" ON tasks
  FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM users 
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- ============================================================================
-- Helper: Update courses.lessons_count when lessons are added/removed
-- ============================================================================
CREATE OR REPLACE FUNCTION update_course_lessons_count()
RETURNS TRIGGER AS $$
BEGIN
  IF TG_OP = 'INSERT' THEN
    UPDATE courses
    SET lessons_count = (
      SELECT COUNT(*) FROM lessons WHERE course_id = NEW.course_id AND is_active = true
    )
    WHERE id = NEW.course_id;
    RETURN NEW;
  ELSIF TG_OP = 'DELETE' THEN
    UPDATE courses
    SET lessons_count = (
      SELECT COUNT(*) FROM lessons WHERE course_id = OLD.course_id AND is_active = true
    )
    WHERE id = OLD.course_id;
    RETURN OLD;
  ELSIF TG_OP = 'UPDATE' THEN
    -- If is_active changed, update both old and new course
    IF (OLD.is_active IS DISTINCT FROM NEW.is_active) OR (OLD.course_id IS DISTINCT FROM NEW.course_id) THEN
      UPDATE courses
      SET lessons_count = (
        SELECT COUNT(*) FROM lessons WHERE course_id = COALESCE(NEW.course_id, OLD.course_id) AND is_active = true
      )
      WHERE id = COALESCE(NEW.course_id, OLD.course_id);
    END IF;
    RETURN NEW;
  END IF;
  RETURN NULL;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_update_course_lessons_count
  AFTER INSERT OR UPDATE OR DELETE ON lessons
  FOR EACH ROW
  EXECUTE FUNCTION update_course_lessons_count();
