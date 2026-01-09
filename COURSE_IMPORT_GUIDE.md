# Course Data Import Guide

This guide explains how to import course data (courses, modules, lessons, and tasks) from a JSON file into your Supabase database.

## 📋 Prerequisites

1. **Database Schema Setup**
   - Before importing data, ensure your database schema includes the necessary tables
   - Run the SQL file: `lib/database/add_lessons_tasks_schema.sql` in your Supabase SQL Editor
   - This creates the `modules`, `lessons`, and `tasks` tables if they don't exist

2. **JSON File Format**
   - Your JSON file should follow this structure:
   ```json
   {
     "exportDate": "2026-01-06",
     "totalCourses": 3,
     "courses": [
       {
         "courseId": "python",
         "courseTitle": "Python Start",
         "modules": [
           {
             "id": "module_1",
             "title": "Module 1: Python Basics",
             "lessons": [
               {
                 "id": "lesson_01",
                 "title": "Introduction to Python",
                 "description": "Lesson description",
                 "tasks": [
                   {
                     "id": "task_1",
                     "type": "code",
                     "title": "Task Title",
                     "instructions": "Task instructions",
                     "starterCode": "// starter code",
                     "solutionCode": "// solution",
                     "expectedOutput": "",
                     "hints": [],
                     "points": 10
                   }
                 ]
               }
             ]
           }
         ]
       }
     ]
   }
   ```

## 🚀 Import Methods

### Method 1: Web UI (Recommended)

1. **Navigate to Settings**
   - Go to `/admin/settings` in your LMS
   - Make sure you're logged in as an admin

2. **Import via File Upload**
   - Click "Select JSON File" button
   - Choose your JSON file (e.g., `COMPLETE_CURRICULUM_EXPORT.json`)
   - Wait for the import to complete
   - Review the import results

3. **Review Results**
   - The import will show:
     - Number of courses created/updated
     - Number of modules created
     - Number of lessons created
     - Number of tasks created
     - Any errors that occurred

### Method 2: Command Line

1. **Install Dependencies**
   ```bash
   npm install tsx  # If not already installed
   ```

2. **Run Import Script**
   ```bash
   npx tsx scripts/import-courses.ts path/to/your/courses.json
   ```

3. **Review Output**
   - The script will print detailed results
   - Check for any errors in the output

### Method 3: API Endpoint

You can also call the API directly:

```bash
curl -X POST http://localhost:3000/api/courses/import \
  -H "Content-Type: application/json" \
  -H "Cookie: your-auth-cookie" \
  -d '{
    "data": {
      "courses": [...]
    }
  }'
```

## 📊 How It Works

The import process follows this sequence:

1. **For each Course:**
   - Checks if course exists (by title)
   - Creates new course or updates existing one
   - Gets the course UUID

2. **For each Module:**
   - Checks if module exists (by external_id + course_id)
   - Creates new module or updates existing one
   - Gets the module UUID

3. **For each Lesson:**
   - Checks if lesson exists (by external_id + course_id)
   - Creates new lesson or updates existing one
   - Links lesson to course and module
   - Gets the lesson UUID

4. **For each Task:**
   - Deletes existing tasks for the lesson (to allow re-import)
   - Creates new tasks
   - Links each task to its lesson

## ⚠️ Important Notes

### Duplicate Handling
- **Courses**: If a course with the same title exists, it will be **updated**
- **Modules**: If a module with the same `external_id` exists, it will be **updated**
- **Lessons**: If a lesson with the same `external_id` exists, it will be **updated**
- **Tasks**: Existing tasks for a lesson are **deleted** before importing new ones (this allows re-importing with changes)

### Data Relationships
- Lessons can exist without modules (module_id can be NULL)
- Tasks must belong to a lesson (lesson_id is required)
- All records are linked by UUIDs automatically

### Performance
- Large imports may take several minutes
- The UI will show a loading state during import
- Progress is displayed in real-time

### Error Handling
- If a course fails to import, the import continues with the next course
- Errors are collected and displayed at the end
- Partial imports are possible (some courses succeed, others fail)

## 🔍 Troubleshooting

### "Table does not exist" Error
**Solution**: Run the schema migration file first:
```sql
-- Run in Supabase SQL Editor
lib/database/add_lessons_tasks_schema.sql
```

### "Row-level security policy violation" Error
**Solution**: Ensure RLS policies allow admin access. Check the schema file for correct policies.

### "Invalid JSON format" Error
**Solution**: 
- Verify your JSON is valid JSON (use a JSON validator)
- Ensure it has the `courses` array at the root level
- Check that each course has the required fields

### Import Takes Too Long
**Solution**: 
- Break large imports into smaller files
- Import courses one at a time
- Check database performance/connection

### Duplicate Data
**Solution**: 
- The import handles duplicates by updating existing records
- If you want to start fresh, delete existing courses first in Supabase

## 📁 File Structure

```
lms-ui/
├── lib/
│   ├── database/
│   │   └── add_lessons_tasks_schema.sql  # Schema migration
│   └── seedCourses.ts                    # Import logic
├── app/
│   └── api/
│       └── courses/
│           └── import/
│               └── route.ts              # API endpoint
├── scripts/
│   └── import-courses.ts                 # CLI script
└── app/(admin)/admin/settings/
    └── page.tsx                          # Settings UI
```

## ✅ Verification

After importing, verify the data:

1. **Check Courses**
   ```sql
   SELECT id, title, lessons_count FROM courses;
   ```

2. **Check Lessons**
   ```sql
   SELECT COUNT(*) FROM lessons;
   SELECT l.title, c.title as course_name 
   FROM lessons l 
   JOIN courses c ON l.course_id = c.id;
   ```

3. **Check Tasks**
   ```sql
   SELECT COUNT(*) FROM tasks;
   SELECT t.type, t.points, l.title as lesson_title
   FROM tasks t
   JOIN lessons l ON t.lesson_id = l.id
   LIMIT 10;
   ```

## 🎯 Next Steps

After importing:
1. Verify data in Supabase dashboard
2. Check course pages in the LMS
3. Test lesson viewing functionality
4. Verify task assignments work correctly

---

**Need Help?** Check the error messages in the import results for specific issues.
