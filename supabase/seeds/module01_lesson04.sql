-- Ensure module exists
INSERT INTO public.modules (module_number, title, description)
VALUES (1, 'Python Basics', 'Introduction to Python programming language')
ON CONFLICT (module_number) DO NOTHING;

-- Insert Lesson 04
INSERT INTO public.lessons (lesson_number, module_id, title, slide_url, objectives)
VALUES (
  4,
  (SELECT id FROM modules WHERE module_number = 1),
  'Nested Protocols: Multi-Layer Operations',
  '/test-lesson04',
  '["Understand nested constructions and why they''re powerful", "Use parentheses to control order of operations", "Nest calculations inside print() and other functions", "Combine multiple operations in single expressions", "Build complex programs with nested logic"]'::jsonb
)
ON CONFLICT (module_id, lesson_number) DO UPDATE SET
  title = EXCLUDED.title,
  slide_url = EXCLUDED.slide_url,
  objectives = EXCLUDED.objectives;
