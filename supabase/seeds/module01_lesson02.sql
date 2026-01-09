-- Ensure module exists
INSERT INTO public.modules (module_number, title, description)
VALUES (1, 'Python Basics', 'Introduction to Python programming language')
ON CONFLICT (module_number) DO NOTHING;

-- Insert Lesson 02
INSERT INTO public.lessons (lesson_number, module_id, title, slide_url, objectives)
VALUES (
  2,
  (SELECT id FROM modules WHERE module_number = 1),
  'Memory Containers: Variables',
  '/test-improved-slides',
  '["Understand what variables are and why they''re essential", "Create and name variables following Python conventions", "Store numbers and strings in variables", "Reassign and update variable values", "Use variables in calculations and operations"]'::jsonb
)
ON CONFLICT (module_id, lesson_number) DO UPDATE SET
  title = EXCLUDED.title,
  slide_url = EXCLUDED.slide_url,
  objectives = EXCLUDED.objectives;
