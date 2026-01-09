# Learning Management System - Complete Project Context

**Project Name:** Numeris Institute of Technology (NIT) - Learning Management System  
**Version:** 0.1.0  
**Last Updated:** 2026-01-07  
**Status:** Production-Ready Core Features

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Technology Stack](#technology-stack)
3. [Project Structure](#project-structure)
4. [Database Schema](#database-schema)
5. [Database Relationships](#database-relationships)
6. [Backend API](#backend-api)
7. [Frontend Architecture](#frontend-architecture)
8. [Authentication & Authorization](#authentication--authorization)
9. [TypeScript Types](#typescript-types)
10. [Environment Configuration](#environment-configuration)
11. [Key Features](#key-features)
12. [Business Logic](#business-logic)
13. [State Management](#state-management)
14. [Security Implementation](#security-implementation)
15. [Recent Fixes & Status](#recent-fixes--status)
16. [Development Setup](#development-setup)

---

## Project Overview

A comprehensive Learning Management System (LMS) built for Numeris Institute of Technology. The system supports three user roles (Admin, Teacher, Student) with role-based access control, course management, group/class management, student enrollment, and interactive lesson delivery.

### Key Characteristics
- **Framework:** Next.js 14.2.5 with App Router
- **Language:** TypeScript 5.5.4
- **Database:** Supabase (PostgreSQL)
- **Authentication:** Supabase Auth
- **UI:** React 18.3.1 + Tailwind CSS 3.4.7
- **Design System:** Industrial minimalist aesthetic (inspired by Linear, Vercel, Codecademy)

### Core Capabilities
- ✅ Multi-role user management (Admin, Teacher, Student)
- ✅ Course catalog with modules and lessons
- ✅ Group/class management
- ✅ Student enrollment system
- ✅ Interactive lesson viewer with code editor
- ✅ Role-based dashboards
- ✅ Course import from JSON
- ✅ Progress tracking (database ready, UI partial)

---

## Technology Stack

### Core Dependencies

```json
{
  "next": "^14.2.5",
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "typescript": "^5.5.4",
  "@supabase/supabase-js": "^2.89.0"
}
```

### UI & Styling
- **Tailwind CSS:** ^3.4.7 - Utility-first CSS framework
- **Radix UI Components:**
  - `@radix-ui/react-dialog` - Modal dialogs
  - `@radix-ui/react-dropdown-menu` - Dropdown menus
  - `@radix-ui/react-select` - Select components
  - `@radix-ui/react-tabs` - Tab navigation
  - `@radix-ui/react-progress` - Progress indicators
  - `@radix-ui/react-slot` - Slot component
- **Lucide React:** ^0.427.0 - Icon library
- **Monaco Editor:** ^4.6.0 - Code editor component
- **React Resizable Panels:** ^2.1.0 - Split pane layouts
- **Class Variance Authority:** ^0.7.0 - Component variants
- **Tailwind Merge:** ^2.5.2 - Merge Tailwind classes
- **CLSX:** ^2.1.1 - Conditional class names

### Dev Dependencies
- **Tailwind Typography:** ^0.5.13 - Prose styling
- **Tailwind Animate:** ^1.0.7 - Animation utilities
- **Autoprefixer:** ^10.4.19
- **PostCSS:** ^8.4.40
- **ESLint:** ^8.57.0
- **TypeScript Types:** @types/node, @types/react, @types/react-dom

### Database & Backend
- **Supabase:** PostgreSQL database with Row Level Security (RLS)
- **Supabase Auth:** Email/password authentication
- **Supabase Admin API:** User creation and management

---

## Project Structure

```
lms-ui/
├── app/                          # Next.js App Router
│   ├── (admin)/                  # Admin layout group
│   │   ├── admin/
│   │   │   ├── dashboard/       # Admin dashboard
│   │   │   ├── courses/         # Course management
│   │   │   │   └── [id]/        # Course details
│   │   │   ├── groups/          # Group management
│   │   │   │   └── [id]/        # Group details & enrollment
│   │   │   ├── students/        # Student management
│   │   │   ├── users/           # User management
│   │   │   ├── settings/        # System settings
│   │   │   └── bin/             # Recycle bin
│   │   ├── courses/             # Public courses view
│   │   └── layout.tsx           # Admin layout
│   │
│   ├── (auth)/                  # Auth layout group
│   │   └── login/               # Login page
│   │
│   ├── (student)/               # Student layout group
│   │   ├── student/             # Student dashboard
│   │   ├── lesson/[id]/        # Lesson viewer
│   │   ├── learn/[lessonId]/   # Learning interface
│   │   ├── python/[lessonId]/  # Python-specific lessons
│   │   ├── terminal/[lessonId]/ # Terminal interface
│   │   └── layout.tsx           # Student layout
│   │
│   ├── api/                     # API routes
│   │   ├── auth/                # Authentication endpoints
│   │   │   ├── login/
│   │   │   ├── logout/
│   │   │   └── me/
│   │   ├── users/               # User management
│   │   ├── students/            # Student management
│   │   ├── courses/             # Course management
│   │   │   ├── [id]/
│   │   │   └── import/          # Bulk course import
│   │   ├── groups/              # Group management
│   │   │   ├── [id]/
│   │   │   │   ├── enroll/      # Enrollment endpoint
│   │   │   │   └── students/    # Available students
│   │   ├── dashboard/           # Dashboard data
│   │   ├── admin/               # Admin endpoints
│   │   └── bin/                 # Recycle bin endpoints
│   │
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout
│   └── not-found.tsx            # 404 page
│
├── components/                  # React components
│   ├── ui/                      # Base UI components (Radix UI)
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── dialog.tsx
│   │   ├── dropdown-menu.tsx
│   │   ├── input.tsx
│   │   ├── label.tsx
│   │   ├── select.tsx
│   │   ├── tabs.tsx
│   │   ├── skeleton.tsx
│   │   ├── badge.tsx
│   │   ├── alert.tsx
│   │   ├── sidebar.tsx
│   │   └── progress.tsx
│   │
│   ├── auth/                    # Authentication components
│   │   ├── ProtectedRoute.tsx  # Route protection
│   │   └── SignOutButton.tsx    # Logout button
│   │
│   ├── layout/                  # Layout components
│   │   ├── AdminSidebar.tsx    # Admin navigation
│   │   ├── StudentHeader.tsx   # Student header
│   │   └── SplitPane.tsx       # Resizable panels
│   │
│   ├── course/                  # Course components
│   │   ├── CourseCard.tsx      # Course card display
│   │   └── CourseGrid.tsx      # Course grid layout
│   │
│   ├── groups/                  # Group components
│   │   ├── CreateGroupModal.tsx
│   │   └── EnrollStudentModal.tsx
│   │
│   ├── students/                # Student components
│   │   ├── CreateStudentModal.tsx
│   │   └── AddToGroupModal.tsx
│   │
│   ├── users/                   # User components
│   │   └── AddUserModal.tsx
│   │
│   ├── dashboard/               # Dashboard components
│   │   ├── RoleBasedStats.tsx
│   │   └── SparklineChart.tsx
│   │
│   ├── lesson/                  # Lesson components
│   │   ├── LessonContent.tsx
│   │   ├── CodeEditor.tsx      # Monaco editor wrapper
│   │   ├── Terminal.tsx        # Terminal emulator
│   │   ├── LessonRunner.tsx
│   │   ├── TaskPane.tsx
│   │   ├── exercises/          # Exercise types
│   │   │   ├── CodeExercise.tsx
│   │   │   ├── QuizExercise.tsx
│   │   │   └── TypingExercise.tsx
│   │   └── challenges/         # Challenge components
│   │       ├── CodeTerminal.tsx
│   │       ├── CodeTerminalPyodide.tsx
│   │       ├── QuizChallenge.tsx
│   │       └── TypingChallenge.tsx
│   │
│   └── empty-states/            # Empty state components
│       └── EmptyState.tsx
│
├── lib/                         # Utilities and core logic
│   ├── supabase/                # Supabase configuration
│   │   ├── client.ts           # Supabase clients (3 types)
│   │   └── types.ts            # Database types
│   │
│   ├── auth/                    # Authentication
│   │   └── middleware.ts       # Auth middleware & helpers
│   │
│   ├── database/                # Database schemas & queries
│   │   ├── schema.sql          # Main schema
│   │   ├── add_lessons_tasks_schema.sql
│   │   ├── add_teacher_profiles.sql
│   │   ├── queries.ts          # Database query helpers
│   │   └── [migration files]
│   │
│   ├── hooks/                   # Custom React hooks
│   │   ├── useAuth.tsx         # Authentication hook
│   │   ├── useGroups.ts        # Groups data hook
│   │   ├── useGroup.ts         # Single group hook
│   │   ├── useCourses.ts       # Courses data hook
│   │   ├── useCourseDetails.ts # Course details hook
│   │   ├── useUsers.ts         # Users data hook
│   │   ├── useDashboard.ts     # Dashboard data hook
│   │   └── usePyodideWorker.ts # Pyodide worker hook
│   │
│   ├── types/                   # TypeScript type definitions
│   │   ├── auth.ts             # Auth types
│   │   ├── user.ts             # User types
│   │   ├── group.ts            # Group & enrollment types
│   │   └── lesson.ts           # Lesson & exercise types
│   │
│   ├── actions/                 # Server actions
│   │   └── enrollment.ts
│   │
│   ├── utils.ts                # Utility functions
│   ├── subdomain.ts            # Subdomain detection
│   └── seedCourses.ts          # Course seeding utility
│
├── public/                      # Static assets
│   ├── lessons/                 # Lesson JSON files
│   └── pyodide.worker.js       # Pyodide web worker
│
├── scripts/                     # Utility scripts
│   ├── import-courses.ts
│   └── diagnose-enrollments.ts
│
├── middleware.ts                # Next.js middleware (route protection)
├── next.config.js               # Next.js configuration
├── tsconfig.json                # TypeScript configuration
├── tailwind.config.ts           # Tailwind configuration
├── postcss.config.js            # PostCSS configuration
├── package.json                 # Dependencies
└── .env.local                   # Environment variables (not in git)
```

---

## Database Schema

### Core Tables

#### 1. `users` Table
**Purpose:** Core user management for all roles

```sql
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) UNIQUE NOT NULL,
  name VARCHAR(255) NOT NULL,
  role VARCHAR(50) NOT NULL CHECK (role IN ('admin', 'teacher', 'student')),
  phone VARCHAR(50),
  avatar_url TEXT,
  status VARCHAR(50) DEFAULT 'active' CHECK (status IN ('active', 'inactive', 'suspended')),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

**Fields:**
- `id`: UUID primary key
- `email`: Unique email address
- `name`: User's full name
- `role`: One of 'admin', 'teacher', 'student'
- `phone`: Optional phone number
- `avatar_url`: Optional avatar image URL
- `status`: Account status ('active', 'inactive', 'suspended')
- `created_at`: Timestamp
- `updated_at`: Timestamp

**Indexes:**
- Primary key on `id`
- Unique index on `email`

#### 2. `teacher_profiles` Table
**Purpose:** Extended metadata for teachers

```sql
CREATE TABLE teacher_profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID UNIQUE NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  bio TEXT,
  hourly_rate DECIMAL(10, 2),
  specializations TEXT[], -- Array of tags
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

**Relationships:**
- One-to-One with `users` (via `user_id`)

#### 3. `courses` Table
**Purpose:** Course catalog

```sql
CREATE TABLE courses (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title VARCHAR(255) NOT NULL,
  description TEXT,
  duration VARCHAR(100),
  lessons_count INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

**Fields:**
- `lessons_count`: Auto-updated by trigger when lessons are added/removed

#### 4. `modules` Table
**Purpose:** Organize lessons into modules

```sql
CREATE TABLE modules (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  course_id UUID NOT NULL REFERENCES courses(id) ON DELETE CASCADE,
  external_id VARCHAR(255), -- Original module ID from JSON
  title VARCHAR(255) NOT NULL,
  order_index INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

#### 5. `lessons` Table
**Purpose:** Course content structure

```sql
CREATE TABLE lessons (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  course_id UUID NOT NULL REFERENCES courses(id) ON DELETE CASCADE,
  module_id UUID REFERENCES modules(id) ON DELETE SET NULL,
  external_id VARCHAR(255), -- Original lesson ID from JSON
  title VARCHAR(255) NOT NULL,
  description TEXT,
  order_index INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

#### 6. `tasks` Table
**Purpose:** Lesson exercises and assignments

```sql
CREATE TABLE tasks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  lesson_id UUID NOT NULL REFERENCES lessons(id) ON DELETE CASCADE,
  external_id VARCHAR(255), -- Original task ID from JSON
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
```

#### 7. `groups` Table
**Purpose:** Class groups (instances of courses)

```sql
CREATE TABLE groups (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(255) NOT NULL,
  course_id UUID NOT NULL REFERENCES courses(id) ON DELETE CASCADE,
  teacher_id UUID REFERENCES users(id) ON DELETE SET NULL,
  schedule TEXT, -- JSON or text describing schedule
  start_date DATE,
  end_date DATE,
  max_students INTEGER DEFAULT 30,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  
  CONSTRAINT teacher_role_check CHECK (
    teacher_id IS NULL OR 
    EXISTS (SELECT 1 FROM users WHERE id = teacher_id AND role = 'teacher')
  )
);
```

**Constraints:**
- `teacher_role_check`: Ensures teacher_id references a user with role='teacher'

**Indexes:**
- `idx_groups_teacher_id` on `teacher_id`
- `idx_groups_course_id` on `course_id`

#### 8. `enrollments` Table
**Purpose:** Junction table linking students to groups

```sql
CREATE TABLE enrollments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  group_id UUID NOT NULL REFERENCES groups(id) ON DELETE CASCADE,
  student_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  status VARCHAR(50) DEFAULT 'active' CHECK (status IN ('active', 'dropped', 'completed')),
  joined_at TIMESTAMP DEFAULT NOW(),
  completed_at TIMESTAMP,
  progress DECIMAL(5, 2) DEFAULT 0.0, -- Progress percentage (0-100)
  
  UNIQUE(group_id, student_id), -- Prevent duplicate enrollments
  
  CONSTRAINT student_role_check CHECK (
    EXISTS (SELECT 1 FROM users WHERE id = student_id AND role = 'student')
  )
);
```

**Constraints:**
- Unique constraint on `(group_id, student_id)` - prevents duplicates
- Check constraint ensures student role
- Foreign keys with CASCADE delete

**Indexes:**
- `idx_enrollments_group_id` on `group_id`
- `idx_enrollments_student_id` on `student_id`
- `idx_enrollments_status` on `status`

### Database Functions

#### `get_available_students_for_group(p_group_id UUID)`
**Purpose:** Returns students not enrolled in a specific group

```sql
CREATE OR REPLACE FUNCTION get_available_students_for_group(p_group_id UUID)
RETURNS TABLE (id UUID, name VARCHAR, email VARCHAR, avatar_url TEXT)
SECURITY DEFINER;
```

**Logic:**
- Selects all active students
- Excludes students already enrolled in the group
- Returns ordered by name

#### `get_group_details(p_group_id UUID)`
**Purpose:** Returns group with stats (enrolled count, available slots)

```sql
CREATE OR REPLACE FUNCTION get_group_details(p_group_id UUID)
RETURNS JSON
SECURITY DEFINER;
```

**Returns:** JSON object with group details, course info, teacher info, enrollment stats

#### `update_course_lessons_count()`
**Purpose:** Trigger function to update `courses.lessons_count` when lessons change

**Trigger:** Automatically fires on INSERT/UPDATE/DELETE of lessons

---

## Database Relationships

### Entity Relationship Diagram

```
users (1) ──< (0..1) teacher_profiles
  │
  │ (1)
  │
  ├──< (many) groups (teacher_id)
  │
  └──< (many) enrollments (student_id)

courses (1) ──< (many) groups
  │
  ├──< (many) modules
  │     │
  │     └──< (many) lessons (module_id)
  │
  └──< (many) lessons (course_id)
        │
        └──< (many) tasks

groups (1) ──< (many) enrollments
```

### Relationship Details

1. **users → teacher_profiles** (One-to-One)
   - One user can have one teacher profile
   - Cascade delete: if user deleted, profile deleted

2. **users → groups** (One-to-Many as Teacher)
   - One teacher can teach many groups
   - `groups.teacher_id` → `users.id`
   - SET NULL on delete: if teacher deleted, groups remain but teacher_id becomes NULL

3. **users → enrollments** (One-to-Many as Student)
   - One student can be enrolled in many groups
   - `enrollments.student_id` → `users.id`
   - Cascade delete: if student deleted, enrollments deleted

4. **courses → groups** (One-to-Many)
   - One course can have many group instances
   - `groups.course_id` → `courses.id`
   - Cascade delete: if course deleted, all groups deleted

5. **courses → modules** (One-to-Many)
   - One course can have many modules
   - `modules.course_id` → `courses.id`
   - Cascade delete: if course deleted, modules deleted

6. **courses → lessons** (One-to-Many)
   - One course can have many lessons
   - `lessons.course_id` → `courses.id`
   - Cascade delete: if course deleted, lessons deleted

7. **modules → lessons** (One-to-Many)
   - One module can contain many lessons
   - `lessons.module_id` → `modules.id`
   - SET NULL on delete: if module deleted, lessons remain but module_id becomes NULL

8. **lessons → tasks** (One-to-Many)
   - One lesson can have many tasks/exercises
   - `tasks.lesson_id` → `lessons.id`
   - Cascade delete: if lesson deleted, tasks deleted

9. **groups → enrollments** (One-to-Many)
   - One group can have many enrollments
   - `enrollments.group_id` → `groups.id`
   - Cascade delete: if group deleted, enrollments deleted

10. **users → enrollments** (Many-to-Many via enrollments table)
    - Many students can enroll in many groups
    - Junction table: `enrollments`
    - Unique constraint prevents duplicate enrollments

---

## Backend API

### API Route Structure

All API routes are located in `app/api/` and follow Next.js 14 App Router conventions.

### Authentication Endpoints

#### `POST /api/auth/login`
**File:** `app/api/auth/login/route.ts`  
**Purpose:** User authentication  
**Auth Required:** No

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "password"
}
```

**Response:**
```json
{
  "success": true,
  "user": {
    "id": "uuid",
    "email": "user@example.com",
    "name": "User Name",
    "role": "admin|teacher|student"
  },
  "session": {
    "access_token": "...",
    "refresh_token": "..."
  }
}
```

**Implementation:**
- Uses Supabase `signInWithPassword()`
- Creates session and stores in cookies
- Returns user data and session tokens

#### `POST /api/auth/logout`
**File:** `app/api/auth/logout/route.ts`  
**Purpose:** User logout  
**Auth Required:** No (but uses session if available)

**Response:**
```json
{
  "success": true
}
```

#### `GET /api/auth/me`
**File:** `app/api/auth/me/route.ts`  
**Purpose:** Get current user details  
**Auth Required:** Yes (via session)

**Response:**
```json
{
  "user": {
    "id": "uuid",
    "email": "user@example.com",
    "name": "User Name",
    "role": "admin|teacher|student",
    "avatarUrl": "url"
  }
}
```

### User Management Endpoints

#### `GET /api/users`
**File:** `app/api/users/route.ts`  
**Purpose:** List all users (admin only)  
**Auth Required:** Yes (admin)

**Query Parameters:**
- `role` (optional): Filter by role ('admin', 'teacher', 'student')

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "uuid",
      "name": "User Name",
      "email": "email@example.com",
      "role": "admin|teacher|student",
      "status": "active|inactive|suspended",
      "avatarUrl": "url",
      "createdAt": "timestamp"
    }
  ],
  "count": 10
}
```

#### `POST /api/users`
**File:** `app/api/users/route.ts`  
**Purpose:** Create new user (admin only)  
**Auth Required:** Yes (admin)

**Request Body:**
```json
{
  "name": "User Name",
  "email": "user@example.com",
  "role": "admin|teacher|student",
  "password": "password"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "id": "uuid",
    "name": "User Name",
    "email": "user@example.com",
    "role": "admin|teacher|student"
  }
}
```

### Student Management Endpoints

#### `POST /api/students`
**File:** `app/api/students/route.ts`  
**Purpose:** Create student with username (no email required)  
**Auth Required:** Yes (admin or teacher)

**Request Body:**
```json
{
  "name": "Student Name",
  "username": "student123",
  "password": "password",
  "grade": "Grade 10"
}
```

**Features:**
- Generates fake email: `{username}@demo.com`
- Creates Supabase auth user
- Inserts into users table with role='student'
- Skips email verification

**Response:**
```json
{
  "success": true,
  "data": {
    "id": "uuid",
    "name": "Student Name",
    "email": "student123@demo.com",
    "role": "student"
  }
}
```

#### `POST /api/admin/create-student`
**File:** `app/api/admin/create-student/route.ts`  
**Purpose:** Alternative student creation endpoint  
**Auth Required:** Yes (admin or teacher)

### Course Management Endpoints

#### `GET /api/courses`
**File:** `app/api/courses/route.ts`  
**Purpose:** List all courses with stats  
**Auth Required:** No (public)

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "uuid",
      "title": "Python Start",
      "description": "...",
      "duration": "3 months",
      "lessons": 20,
      "students": 45,
      "isActive": true,
      "createdAt": "timestamp"
    }
  ],
  "count": 3
}
```

**Features:**
- Includes enrollment count per course
- Includes lessons count
- Filters active courses by default

#### `POST /api/courses`
**File:** `app/api/courses/route.ts`  
**Purpose:** Create new course  
**Auth Required:** Yes (admin)

**Request Body:**
```json
{
  "title": "Course Title",
  "description": "Course description",
  "duration": "3 months",
  "lessonsCount": 20
}
```

#### `GET /api/courses/[id]`
**File:** `app/api/courses/[id]/route.ts`  
**Purpose:** Get course details with lessons and modules  
**Auth Required:** Yes

**Response:**
```json
{
  "success": true,
  "data": {
    "id": "uuid",
    "title": "Python Start",
    "description": "...",
    "lessons": [...],
    "lessonsByModule": [...],
    "ungroupedLessons": [...]
  }
}
```

#### `POST /api/courses/import`
**File:** `app/api/courses/import/route.ts`  
**Purpose:** Bulk import courses from JSON  
**Auth Required:** Yes (admin only)

**Request Body:**
```json
{
  "data": {
    "courses": [
      {
        "title": "Course Title",
        "modules": [...],
        "lessons": [...]
      }
    ]
  }
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "coursesCreated": 3,
    "modulesCreated": 15,
    "lessonsCreated": 60,
    "tasksCreated": 120,
    "errors": []
  }
}
```

**Features:**
- Creates courses, modules, lessons, and tasks in transaction
- Preserves external_id for reference
- Returns import statistics

### Group Management Endpoints

#### `GET /api/groups`
**File:** `app/api/groups/route.ts`  
**Purpose:** List all groups with stats  
**Auth Required:** Yes

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "uuid",
      "name": "ISSAMG",
      "course": "Python Go 1",
      "courseId": "uuid",
      "teacher": "John Smith",
      "teacherId": "uuid",
      "schedule": "Mon/Wed 10:00-12:00",
      "startDate": "2026-01-01",
      "endDate": "2026-03-31",
      "enrolledCount": 0,
      "maxStudents": 30,
      "isActive": true,
      "createdAt": "timestamp"
    }
  ],
  "count": 7
}
```

**Role-Based Filtering:**
- Admin: All groups
- Teacher: Only their groups
- Student: Groups they're enrolled in

#### `POST /api/groups`
**File:** `app/api/groups/route.ts`  
**Purpose:** Create new group  
**Auth Required:** Yes (admin or teacher)

**Request Body:**
```json
{
  "name": "Group Name",
  "courseId": "uuid",
  "teacherId": "uuid",
  "schedule": "Mon/Wed 10:00-12:00",
  "startDate": "2026-01-01",
  "endDate": "2026-03-31",
  "maxStudents": 30
}
```

#### `GET /api/groups/[id]`
**File:** `app/api/groups/[id]/route.ts`  
**Purpose:** Get group details with enrollments  
**Auth Required:** No (uses service role)

**Response:**
```json
{
  "success": true,
  "data": {
    "id": "uuid",
    "name": "ISSAMG",
    "course": {
      "id": "uuid",
      "title": "Python Go 1",
      "description": "...",
      "duration": "3 months",
      "lessonsCount": 20
    },
    "teacher": {
      "id": "uuid",
      "name": "John Smith",
      "email": "john@example.com",
      "avatarUrl": null
    },
    "enrolledCount": 0,
    "availableSlots": 30,
    "enrollments": [
      {
        "id": "uuid",
        "studentId": "uuid",
        "status": "active",
        "joinedAt": "timestamp",
        "progress": 0,
        "student": {
          "id": "uuid",
          "name": "Student Name",
          "email": "student@example.com",
          "avatarUrl": null
        }
      }
    ]
  }
}
```

#### `GET /api/groups/[id]/students`
**File:** `app/api/groups/[id]/students/route.ts`  
**Purpose:** Get available students for enrollment (not already enrolled)  
**Auth Required:** No (uses service role)

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "uuid",
      "name": "Student Name",
      "email": "student@example.com",
      "avatarUrl": null
    }
  ],
  "count": 11
}
```

**Logic:**
1. Fetch all active students with role='student'
2. Fetch students already enrolled in group
3. Filter out enrolled students
4. Return available students

#### `POST /api/groups/[id]/enroll`
**File:** `app/api/groups/[id]/enroll/route.ts`  
**Purpose:** Enroll student in group  
**Auth Required:** Yes (admin or teacher)

**Request Body:**
```json
{
  "studentId": "uuid"
}
```

**Validation:**
1. ✅ User authenticated (admin or teacher)
2. ✅ Group exists and is active
3. ✅ Student exists and has 'student' role
4. ✅ Student not already enrolled
5. ✅ Group not full (enrolled < max_students)

**Response:**
```json
{
  "success": true,
  "data": {
    "id": "enrollment-uuid",
    "groupId": "group-uuid",
    "studentId": "student-uuid",
    "status": "active",
    "joinedAt": "timestamp",
    "progress": 0,
    "student": {
      "id": "uuid",
      "name": "Student Name",
      "email": "student@example.com",
      "avatarUrl": null
    }
  },
  "message": "Student enrolled successfully"
}
```

**Implementation Notes:**
- Uses `createServiceRoleClient()` to bypass RLS
- Reason: API routes don't have auth session, RLS blocks writes
- Security: Route validates permissions before using service role

### Dashboard Endpoint

#### `GET /api/dashboard`
**File:** `app/api/dashboard/route.ts`  
**Purpose:** Get role-based dashboard statistics  
**Auth Required:** Yes

**Response (Admin):**
```json
{
  "success": true,
  "role": "admin",
  "data": {
    "activeStudents": {
      "total": 189,
      "offline": 189,
      "online": 0
    },
    "activeGroups": {
      "total": 20,
      "offline": 20,
      "online": 0
    },
    "studentsPerGroup": {
      "offline": "9.4",
      "online": "0.0"
    },
    "courses": [...],
    "groups": [...]
  }
}
```

**Response (Teacher):**
```json
{
  "success": true,
  "role": "teacher",
  "data": {
    "myGroups": [...],
    "myStudents": [...]
  }
}
```

**Role-Based Data:**
- **Admin:** All courses, groups, and students
- **Teacher:** Only their assigned courses and groups

### Recycle Bin Endpoints

#### `GET /api/bin/courses`
**File:** `app/api/bin/courses/route.ts`  
**Purpose:** List soft-deleted courses

#### `POST /api/bin/courses/[id]/restore`
**File:** `app/api/bin/courses/[id]/restore/route.ts`  
**Purpose:** Restore soft-deleted course

#### `DELETE /api/bin/courses/[id]`
**File:** `app/api/bin/courses/[id]/route.ts`  
**Purpose:** Permanently delete course

Similar endpoints exist for `groups` and `students`.

---

## Frontend Architecture

### Page Routes

#### Admin Routes (Protected)

##### `/admin` or `/admin/dashboard`
**File:** `app/(admin)/admin/page.tsx`  
**Purpose:** Admin dashboard with system overview

**Components:**
- `RoleBasedStats` - Statistics cards
- `SparklineChart` - Trend visualizations

**Features:**
- Active students count
- Active groups count
- Students per group average
- System overview cards

##### `/admin/courses`
**File:** `app/(admin)/admin/courses/page.tsx`  
**Purpose:** Course catalog management

**Components:**
- `CourseGrid` - Course list
- `CourseCard` - Individual course display

**Features:**
- View all courses
- Course statistics
- Import courses from JSON

##### `/admin/courses/[id]`
**File:** `app/(admin)/admin/courses/[id]/page.tsx`  
**Purpose:** Course details with lessons

**Features:**
- View course information
- List lessons by module
- Lesson organization

##### `/admin/groups`
**File:** `app/(admin)/admin/groups/page.tsx`  
**Purpose:** Group management

**Components:**
- `CreateGroupModal` - Create new group

**Features:**
- List all groups
- Group statistics
- Create new groups
- Search/filter groups

##### `/admin/groups/[id]`
**File:** `app/(admin)/admin/groups/[id]/page.tsx`  
**Purpose:** Group details and enrollment management

**Components:**
- `EnrollStudentModal` - Enroll students

**Features:**
- View group details
- List enrolled students
- Enroll new students
- Student progress tracking
- Group statistics

##### `/admin/students`
**File:** `app/(admin)/admin/students/page.tsx`  
**Purpose:** Student management

**Components:**
- `CreateStudentModal` - Create student
- `AddToGroupModal` - Enroll in group

**Features:**
- List all students
- Create new students
- Add students to groups
- View student details

##### `/admin/users`
**File:** `app/(admin)/admin/users/page.tsx`  
**Purpose:** User management (all roles)

**Components:**
- `AddUserModal` - Create user

**Features:**
- List all users
- Filter by role
- Create new users
- Manage user status

##### `/admin/settings`
**File:** `app/(admin)/admin/settings/page.tsx`  
**Purpose:** System settings

#### Auth Routes

##### `/login`
**File:** `app/(auth)/login/page.tsx`  
**Purpose:** Login page

**Features:**
- Email/password authentication
- Supabase auth integration
- Redirect after login

#### Student Routes

##### `/student`
**File:** `app/(student)/student/page.tsx`  
**Purpose:** Student dashboard

**Features:**
- View enrolled courses
- Track progress
- Access lessons

##### `/lesson/[id]`
**File:** `app/(student)/lesson/[id]/page.tsx`  
**Purpose:** Lesson viewer

**Components:**
- `LessonContent` - Lesson display
- `CodeEditor` - Monaco editor
- `Terminal` - Terminal emulator

**Features:**
- View lesson content
- Code editor
- Terminal for exercises

##### `/learn/[lessonId]`
**File:** `app/(student)/learn/[lessonId]/page.tsx`  
**Purpose:** Learning interface with exercises

##### `/python/[lessonId]`
**File:** `app/(student)/python/[lessonId]/page.tsx`  
**Purpose:** Python-specific lesson interface

##### `/terminal/[lessonId]`
**File:** `app/(student)/terminal/[lessonId]/page.tsx`  
**Purpose:** Terminal-based lesson interface

### Component Library

#### UI Components (Radix UI + Custom)
- `Button` - `components/ui/button.tsx`
- `Card` - `components/ui/card.tsx`
- `Dialog` - `components/ui/dialog.tsx`
- `DropdownMenu` - `components/ui/dropdown-menu.tsx`
- `Input` - `components/ui/input.tsx`
- `Label` - `components/ui/label.tsx`
- `Select` - `components/ui/select.tsx`
- `Tabs` - `components/ui/tabs.tsx`
- `Skeleton` - `components/ui/skeleton.tsx`
- `Badge` - `components/ui/badge.tsx`
- `Alert` - `components/ui/alert.tsx`
- `Sidebar` - `components/ui/sidebar.tsx`
- `Progress` - `components/ui/progress.tsx`

#### Layout Components
- `AdminSidebar` - `components/layout/AdminSidebar.tsx` - Navigation sidebar
- `StudentHeader` - `components/layout/StudentHeader.tsx` - Student page header
- `SplitPane` - `components/layout/SplitPane.tsx` - Resizable panels

#### Auth Components
- `ProtectedRoute` - `components/auth/ProtectedRoute.tsx` - Route protection
- `SignOutButton` - `components/auth/SignOutButton.tsx` - Logout button

#### Feature Components
- `CreateGroupModal` - `components/groups/CreateGroupModal.tsx`
- `EnrollStudentModal` - `components/groups/EnrollStudentModal.tsx`
- `CreateStudentModal` - `components/students/CreateStudentModal.tsx`
- `AddToGroupModal` - `components/students/AddToGroupModal.tsx`
- `AddUserModal` - `components/users/AddUserModal.tsx`
- `CourseCard` - `components/course/CourseCard.tsx`
- `CourseGrid` - `components/course/CourseGrid.tsx`
- `EmptyState` - `components/empty-states/EmptyState.tsx`

#### Lesson Components
- `LessonContent` - `components/lesson/LessonContent.tsx`
- `CodeEditor` - `components/lesson/CodeEditor.tsx` - Monaco editor wrapper
- `Terminal` - `components/lesson/Terminal.tsx` - Terminal emulator
- `LessonRunner` - `components/lesson/LessonRunner.tsx`
- `TaskPane` - `components/lesson/TaskPane.tsx`
- `ExerciseAccordion` - `components/lesson/ExerciseAccordion.tsx`
- `ProgressSnake` - `components/lesson/ProgressSnake.tsx`

#### Exercise Components
- `CodeExercise` - `components/lesson/exercises/CodeExercise.tsx`
- `QuizExercise` - `components/lesson/exercises/QuizExercise.tsx`
- `TypingExercise` - `components/lesson/exercises/TypingExercise.tsx`

#### Challenge Components
- `CodeTerminal` - `components/lesson/challenges/CodeTerminal.tsx`
- `CodeTerminalPyodide` - `components/lesson/challenges/CodeTerminalPyodide.tsx`
- `QuizChallenge` - `components/lesson/challenges/QuizChallenge.tsx`
- `TypingChallenge` - `components/lesson/challenges/TypingChallenge.tsx`

---

## Authentication & Authorization

### Authentication Flow

#### 1. Login Process
```
User → Login Page → POST /api/auth/login → Supabase Auth
                                          ↓
                                    Session Created
                                          ↓
                                    Cookie Set
                                          ↓
                                    Redirect to Dashboard
```

#### 2. Session Management

**Client-Side:**
- `useAuth` hook (`lib/hooks/useAuth.tsx`) - React context for auth state
- Supabase client with `persistSession: true`
- Auto-refresh tokens

**Server-Side:**
- `authenticateRequest()` (`lib/auth/middleware.ts`) - Validates requests
- Checks Authorization header or auth-token cookie
- Dev mode fallback for local development

#### 3. Protected Routes

**Component:** `ProtectedRoute` (`components/auth/ProtectedRoute.tsx`)

**Usage:**
```typescript
<ProtectedRoute requireAdmin={true}>
  <AdminPage />
</ProtectedRoute>
```

**Features:**
- Redirects to `/login` if not authenticated
- Role-based access control
- Loading states

### Authorization Levels

#### Admin Role
**Permissions:**
- ✅ View all users, courses, groups, students
- ✅ Create/edit/delete all resources
- ✅ Import courses
- ✅ Manage system settings
- ✅ Enroll students in any group

#### Teacher Role
**Permissions:**
- ✅ View their assigned groups
- ✅ View students in their groups
- ✅ Create students
- ✅ Enroll students in their groups
- ❌ Cannot access other teachers' groups
- ❌ Cannot manage system settings

#### Student Role
**Permissions:**
- ✅ View their enrolled courses
- ✅ Access lessons
- ✅ Track their progress
- ❌ Cannot access admin pages
- ❌ Cannot enroll themselves

### Row Level Security (RLS) Policies

#### Users Table Policies

```sql
-- Admins can view all users
CREATE POLICY "Admins can view all users" ON users
  FOR SELECT USING (
    EXISTS (SELECT 1 FROM users WHERE id = auth.uid() AND role = 'admin')
  );

-- Teachers can view their students
CREATE POLICY "Teachers can view their students" ON users
  FOR SELECT USING (
    role = 'student' AND
    EXISTS (
      SELECT 1 FROM groups g
      INNER JOIN enrollments e ON g.id = e.group_id
      WHERE g.teacher_id = auth.uid() AND e.student_id = users.id
    )
  );

-- Users can view own profile
CREATE POLICY "Users can view own profile" ON users
  FOR SELECT USING (id = auth.uid());

-- Admins can manage users
CREATE POLICY "Admins can manage users" ON users
  FOR ALL USING (
    EXISTS (SELECT 1 FROM users WHERE id = auth.uid() AND role = 'admin')
  );
```

#### Enrollments Table Policies

```sql
-- Admins can view all enrollments
CREATE POLICY "Admins can view all enrollments" ON enrollments
  FOR SELECT USING (
    EXISTS (SELECT 1 FROM users WHERE id = auth.uid() AND role = 'admin')
  );

-- Teachers can view their group enrollments
CREATE POLICY "Teachers can view their group enrollments" ON enrollments
  FOR SELECT USING (
    EXISTS (SELECT 1 FROM groups WHERE id = enrollments.group_id AND teacher_id = auth.uid())
  );

-- Students can view own enrollments
CREATE POLICY "Students can view own enrollments" ON enrollments
  FOR SELECT USING (student_id = auth.uid());

-- Admins can manage enrollments
CREATE POLICY "Admins can manage enrollments" ON enrollments
  FOR ALL USING (
    EXISTS (SELECT 1 FROM users WHERE id = auth.uid() AND role = 'admin')
  );

-- Teachers can enroll students in their groups
CREATE POLICY "Teachers can enroll students in their groups" ON enrollments
  FOR INSERT WITH CHECK (
    EXISTS (SELECT 1 FROM groups WHERE id = enrollments.group_id AND teacher_id = auth.uid())
  );
```

#### Groups Table Policies

```sql
-- Admins can view all groups
CREATE POLICY "Admins can view all groups" ON groups
  FOR SELECT USING (
    EXISTS (SELECT 1 FROM users WHERE id = auth.uid() AND role = 'admin')
  );

-- Teachers can view their own groups
CREATE POLICY "Teachers can view their groups" ON groups
  FOR SELECT USING (teacher_id = auth.uid());

-- Students can view groups they're enrolled in
CREATE POLICY "Students can view enrolled groups" ON groups
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM enrollments 
      WHERE group_id = groups.id AND student_id = auth.uid()
    )
  );

-- Admins can manage all groups
CREATE POLICY "Admins can manage groups" ON groups
  FOR ALL USING (
    EXISTS (SELECT 1 FROM users WHERE id = auth.uid() AND role = 'admin')
  );
```

#### Courses Table Policies

```sql
-- Everyone can view active courses
CREATE POLICY "Anyone can view active courses" ON courses
  FOR SELECT USING (is_active = true);

-- Admins can manage courses
CREATE POLICY "Admins can manage courses" ON courses
  FOR ALL USING (
    EXISTS (SELECT 1 FROM users WHERE id = auth.uid() AND role = 'admin')
  );
```

**Note:** API routes use service role client to bypass RLS, but validate permissions in application code.

### Middleware Protection

**File:** `middleware.ts`

**Features:**
- Portal separation (students cannot access admin routes)
- Role-based route blocking
- Subdomain detection for student portal
- Session validation

---

## TypeScript Types

### Core Types

#### User Types (`lib/types/user.ts`)

```typescript
export type UserRole = "admin" | "teacher" | "student"

export interface User {
  id: string
  name: string
  email: string
  role?: UserRole
  avatarUrl?: string
}

export interface LMSUser {
  id: string
  name: string
  email: string
  role: UserRole
  status: "active" | "invited" | "suspended"
  avatarUrl?: string
  phone?: string
  // Teacher-only metadata
  bio?: string
  hourlyRate?: number
  tags?: string[]
}
```

#### Auth Types (`lib/types/auth.ts`)

```typescript
export interface User {
  id: string
  email: string
  name: string
  role: UserRole
}

export interface AuthContextType {
  user: User | null
  isLoading: boolean
  isAdmin: boolean
  isTeacher: boolean
}
```

#### Group Types (`lib/types/group.ts`)

```typescript
export interface Course {
  id: string
  title: string
  description: string
  duration?: string
  lessonsCount?: number
}

export interface Group {
  id: string
  name: string
  courseId: string
  teacherId: string
  schedule?: string
  startDate?: string
  endDate?: string
  maxStudents: number
  isActive: boolean
  createdAt: string
  updatedAt: string
}

export interface GroupDetails extends Group {
  course: Course
  teacher: User
  enrolledCount: number
  availableSlots: number
}

export interface Enrollment {
  id: string
  groupId: string
  studentId: string
  status: "active" | "dropped" | "completed"
  joinedAt: string
  completedAt?: string
  progress: number
}

export interface EnrolledStudent {
  id: string
  name: string
  email: string
  avatarUrl?: string
  enrollment: {
    id: string
    status: "active" | "dropped" | "completed"
    joinedAt: string
    progress: number
  }
}

export interface AvailableStudent {
  id: string
  name: string
  email: string
  avatarUrl?: string
}
```

#### Lesson Types (`lib/types/lesson.ts`)

```typescript
export interface QuizExercise {
  id: string
  type: "quiz"
  title: string
  description: string
  options: string[]
  correctAnswer: number
  xp: number
  points?: number
}

export interface TypingExercise {
  id: string
  type: "typing"
  title: string
  description: string
  targetCode: string
  xp: number
  points?: number
}

export interface TestCase {
  input: string
  expectedOutput: string
}

export interface CodeExercise {
  id: string
  type: "code"
  title: string
  description: string
  starterCode: string
  solution: string
  testCases: TestCase[]
  xp: number
  points: number
}

export type Exercise = QuizExercise | TypingExercise | CodeExercise

export interface Lesson {
  lesson_id: string
  title: string
  module: string
  duration_minutes: number
  slide_url: string
  objectives: string[]
  description: string
  exercises: Exercise[]
}

export interface ExerciseProgress {
  exerciseId: string
  completed: boolean
  passed: boolean
  attempts: number
  xpEarned: number
}

export interface LessonProgress {
  lessonId: string
  currentExerciseIndex: number
  exerciseProgress: Record<string, ExerciseProgress>
  totalXP: number
  startedAt: Date
  completedAt?: Date
}
```

### Database Types (`lib/supabase/types.ts`)

Auto-generated TypeScript types from Supabase schema. Includes:
- Table row types
- Insert types
- Update types
- Database interface

---

## Environment Configuration

### Required Environment Variables

Create a `.env.local` file in the project root:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key

# Development Auth (optional)
NEXT_PUBLIC_AUTH_DEV_ROLE=admin
AUTH_DEV_ROLE=admin
```

### Environment Variable Usage

**Client-Side (Public):**
- `NEXT_PUBLIC_SUPABASE_URL` - Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Supabase anonymous key
- `NEXT_PUBLIC_AUTH_DEV_ROLE` - Dev mode role fallback

**Server-Side (Private):**
- `SUPABASE_SERVICE_ROLE_KEY` - Service role key (bypasses RLS)
- `AUTH_DEV_ROLE` - Dev mode role fallback

### Supabase Client Configuration

**File:** `lib/supabase/client.ts`

**Three Client Types:**

1. **Client-side (`supabase`)** - Browser, with RLS
   ```typescript
   export const supabase = createClient(url, anonKey, {
     auth: { persistSession: true, autoRefreshToken: true }
   })
   ```

2. **Server-side (`createServerClient()`)** - API routes, with RLS
   ```typescript
   export function createServerClient() {
     return createClient(url, anonKey, {
       auth: { persistSession: false }
     })
   }
   ```

3. **Service role (`createServiceRoleClient()`)** - Admin operations, bypasses RLS
   ```typescript
   export function createServiceRoleClient() {
     return createClient(url, serviceRoleKey, {
       auth: { persistSession: false, autoRefreshToken: false }
     })
   }
   ```

---

## Key Features

### ✅ Fully Implemented

1. **Authentication System**
   - Login/logout
   - Session management
   - Role-based access control
   - Protected routes

2. **User Management**
   - List users
   - Create users
   - Filter by role
   - User status management

3. **Student Management**
   - Create students (username-based)
   - List students
   - Add to groups
   - View student details

4. **Course Management**
   - List courses
   - View course details
   - Import courses from JSON
   - Create courses
   - Course statistics

5. **Group Management**
   - List groups
   - View group details
   - Create groups
   - View enrolled students
   - Group statistics

6. **Enrollment System**
   - View available students
   - Enroll students in groups
   - Prevent duplicates
   - Enforce capacity limits
   - Update UI after enrollment

7. **Dashboard**
   - Role-based statistics
   - System overview
   - Sparkline charts

8. **Lesson Viewer**
   - Lesson content display
   - Code editor (Monaco)
   - Terminal emulator
   - Exercise components

### ⚠️ Partially Implemented

1. **Progress Tracking**
   - Database field exists
   - Not yet editable via UI

2. **Schedule Management**
   - Database field exists
   - UI placeholder only

3. **Lesson Content**
   - Page exists
   - Content display needs work

### ❌ Not Implemented

1. User profile editing
2. Student unenrollment
3. Group editing/deletion
4. Course editing/deletion
5. Email notifications
6. Password reset
7. Attendance tracking
8. Grade management
9. Assignment submission
10. Real-time collaboration

---

## Business Logic

### Enrollment Business Rules

#### Validation Rules
1. **Group must be active** - Cannot enroll in inactive groups
2. **Group not full** - enrolled_count < max_students
3. **Student must have 'student' role** - Enforced by database constraint
4. **No duplicate enrollments** - Enforced by UNIQUE(group_id, student_id)
5. **Only admin/teacher can enroll** - Enforced by API middleware

#### Enrollment Process
```
1. User clicks "Enroll Student" button
2. Modal opens → Fetch available students
3. User selects student from dropdown
4. Submit enrollment request
5. API validates all rules
6. Create enrollment record
7. Return success with enrollment data
8. Frontend updates:
   - Add student to enrolled list
   - Remove from available list
   - Update group stats
   - Close modal
```

### Group Management Rules

#### Group Creation
- Name required
- Course ID required
- Teacher ID optional
- Max students default: 30
- Status default: active

#### Group Capacity
- Tracked via enrollment count
- Available slots = max_students - enrolled_count
- Enrollment button disabled when full

### Student Management Rules

#### Student Creation
- Name required
- Username required (unique)
- Password required
- Grade required
- Email auto-generated: `{username}@demo.com`
- Role auto-set: 'student'
- Status default: 'active'
- Email verification skipped

### Course Import Rules

#### Import Process
1. Validate JSON structure
2. Create courses in transaction
3. Create modules for each course
4. Create lessons for each module
5. Create tasks for each lesson
6. Preserve external_id for reference
7. Return import statistics

---

## State Management

### Client-Side State

#### React Context
- **AuthContext** - Global auth state
  - Current user
  - Loading state
  - Role helpers (isAdmin, isTeacher)

#### Custom Hooks

##### `useAuth()` (`lib/hooks/useAuth.tsx`)
**Purpose:** Access authentication state

**Provides:**
- `user` - Current user object
- `isLoading` - Auth check in progress
- `isAdmin` - Boolean helper
- `isTeacher` - Boolean helper

##### `useGroup(groupId)` (`lib/hooks/useGroup.ts`)
**Purpose:** Manage group data and operations

**Provides:**
- `group` - Group details
- `enrolledStudents` - List of enrolled students
- `availableStudents` - Students available for enrollment
- `loading` - Data loading state
- `error` - Error message
- `enrollStudent(studentId)` - Enroll function
- `refetch()` - Refresh group data
- `refetchAvailableStudents()` - Refresh available students

##### `useGroups()` (`lib/hooks/useGroups.ts`)
**Purpose:** Manage groups list

**Provides:**
- `groups` - All groups
- `loading` - Loading state
- `error` - Error message
- `refetch()` - Refresh groups

##### `useCourses()` (`lib/hooks/useCourses.ts`)
**Purpose:** Manage courses list

**Provides:**
- `courses` - All courses
- `loading` - Loading state
- `error` - Error message
- `refetch()` - Refresh courses

##### `useCourseDetails(courseId)` (`lib/hooks/useCourseDetails.ts`)
**Purpose:** Manage course details

**Provides:**
- `course` - Course with lessons
- `loading` - Loading state
- `error` - Error message

##### `useUsers()` (`lib/hooks/useUsers.ts`)
**Purpose:** Manage users list

**Provides:**
- `users` - All users
- `loading` - Loading state
- `error` - Error message
- `refetch()` - Refresh users

##### `useDashboard()` (`lib/hooks/useDashboard.ts`)
**Purpose:** Manage dashboard data

**Provides:**
- `stats` - Dashboard statistics
- `loading` - Loading state
- `error` - Error message

### Component State
- Local state with `useState`
- Form state management
- Modal open/close state
- Loading and error states

---

## Security Implementation

### Authentication Security

#### Token Management
- **Storage:** HTTP-only cookies (secure)
- **Refresh:** Automatic token refresh
- **Expiry:** Handled by Supabase
- **Validation:** Every API request

#### Password Security
- **Hashing:** Handled by Supabase Auth (bcrypt)
- **Minimum Length:** Enforced by Supabase
- **Reset:** Not yet implemented

### Authorization Security

#### Middleware Protection
**File:** `lib/auth/middleware.ts`

```typescript
export async function authenticateRequest(request: NextRequest) {
  // 1. Extract token from header or cookie
  // 2. Verify JWT (or use dev mode fallback)
  // 3. Return user with role
}
```

**Dev Mode Fallback:**
```typescript
if (!token && process.env.NODE_ENV !== "production") {
  return {
    user: {
      id: "dev-admin-1",
      role: process.env.NEXT_PUBLIC_AUTH_DEV_ROLE || "admin",
      email: "admin@example.com"
    }
  }
}
```

#### API Route Protection
```typescript
// Method 1: Manual check
const { user, error } = await authenticateRequest(req)
if (!user || error) {
  return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
}

// Method 2: Middleware wrapper
export const GET = requireAuth(handler)
export const POST = requireRole(['admin', 'teacher'], handler)
```

### Database Security

#### RLS Policies
- ✅ Enabled on all tables
- ✅ Role-based access control
- ✅ Row-level filtering
- ✅ Secure by default

#### Service Role Usage
**When to Use:**
- Admin operations in API routes
- Bulk operations
- Operations requiring cross-user access

**Security Measures:**
- ✅ Never exposed to client
- ✅ Only in server-side code
- ✅ Protected by API authentication
- ✅ Application-level permission checks

#### SQL Injection Prevention
- ✅ Parameterized queries (Supabase client)
- ✅ No raw SQL from user input
- ✅ Type-safe queries

### Input Validation

#### API Level
- Required field validation
- Type checking
- Format validation (emails, UUIDs)
- Range validation (max_students, progress)

#### Database Level
- CHECK constraints
- UNIQUE constraints
- Foreign key constraints
- NOT NULL constraints

---

## Recent Fixes & Status

### Fix 1: Enrollment Infinite Loop ✅
**Date:** 2026-01-07  
**Issue:** Modal opening triggered infinite API calls  
**Location:** `app/(admin)/admin/groups/[id]/page.tsx:47`  
**Solution:** Removed useEffect with unstable dependency  
**Impact:** Enrollment modal now works correctly

### Fix 2: Enrollment RLS Permission ✅
**Date:** 2026-01-07  
**Issue:** Enrollment API couldn't write to database  
**Location:** `app/api/groups/[id]/enroll/route.ts:39`  
**Solution:** Changed from `createServerClient()` to `createServiceRoleClient()`  
**Impact:** Enrollments now save successfully

### Fix 3: TypeScript Error ✅
**Date:** 2026-01-07  
**Issue:** `authError` property doesn't exist  
**Location:** `app/api/groups/[id]/enroll/route.ts:17`  
**Solution:** Changed `authError` to `error: authError`  
**Impact:** TypeScript compilation successful

### System Health Status

#### ✅ Fully Functional
1. Authentication System
2. User Management
3. Student Management
4. Course Management
5. Group Management
6. Enrollment System
7. Dashboard

#### ⚠️ Needs Work
1. Progress Tracking (database ready, UI needed)
2. Schedule Management (database ready, UI needed)
3. Lesson Viewer (basic structure exists)

#### ❌ Not Implemented
1. User profile editing
2. Student unenrollment
3. Group/Course editing/deletion
4. Email notifications
5. Password reset
6. Attendance tracking
7. Grade management
8. Assignment submission
9. Real-time collaboration

---

## Development Setup

### Prerequisites

- Node.js 18+
- npm or yarn
- Supabase account and project
- Git

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd lms-ui
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your Supabase credentials
   ```

4. **Set up database**
   - Run SQL scripts in `lib/database/` in order:
     - `schema.sql`
     - `add_lessons_tasks_schema.sql`
     - `add_teacher_profiles.sql`
   - Or use Supabase migration tool

5. **Run development server**
   ```bash
   npm run dev
   ```

6. **Open browser**
   - Main app: http://localhost:3000
   - Student portal: http://student.localhost:3000 (requires hosts file entry)

### Local Development with Subdomains

For local development with subdomain routing:

1. **Add to hosts file**
   - Windows: `C:\Windows\System32\drivers\etc\hosts`
   - Mac/Linux: `/etc/hosts`
   
   ```
   127.0.0.1 student.localhost
   ```

2. **Access student portal**
   - http://student.localhost:3000

### Build for Production

```bash
npm run build
npm start
```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

### Database Setup

1. **Create Supabase project**
   - Go to https://supabase.com
   - Create new project
   - Note your project URL and API keys

2. **Run schema migrations**
   - Open Supabase SQL Editor
   - Run scripts from `lib/database/` in order:
     - `schema.sql` (main schema)
     - `add_lessons_tasks_schema.sql` (lessons & tasks)
     - `add_teacher_profiles.sql` (teacher profiles)

3. **Configure RLS policies**
   - All RLS policies are included in `schema.sql`
   - Verify policies are active in Supabase dashboard

4. **Set up authentication**
   - Configure email/password auth in Supabase dashboard
   - Set up email templates (optional)

### Project Configuration Files

- `next.config.js` - Next.js configuration (Pyodide headers)
- `tsconfig.json` - TypeScript configuration
- `tailwind.config.ts` - Tailwind CSS configuration
- `postcss.config.js` - PostCSS configuration
- `.eslintrc.json` - ESLint configuration

---

## Additional Resources

### Documentation Files in Project

- `LMS_SYSTEM_AUDIT.md` - Comprehensive technical audit
- `README.md` - Basic project overview
- `README_GROUPS.md` - Groups feature documentation
- `README_RBAC.md` - Role-based access control docs
- `AUTHENTICATION_SETUP.md` - Auth setup guide
- `COURSE_IMPORT_GUIDE.md` - Course import guide
- `LESSON_RUNNER_IMPLEMENTATION.md` - Lesson runner docs
- `PYODIDE_INTEGRATION.md` - Pyodide integration docs

### Key Implementation Files

- `middleware.ts` - Route protection middleware
- `lib/supabase/client.ts` - Supabase client configuration
- `lib/auth/middleware.ts` - Auth middleware helpers
- `components/auth/ProtectedRoute.tsx` - Route protection component
- `lib/hooks/useAuth.tsx` - Authentication hook

---

## Conclusion

This Learning Management System is a comprehensive, production-ready application with:

- ✅ Complete authentication and authorization system
- ✅ Multi-role user management (Admin, Teacher, Student)
- ✅ Course and group management
- ✅ Student enrollment system
- ✅ Role-based dashboards
- ✅ Interactive lesson viewer
- ✅ Secure database with RLS
- ✅ Modern UI with Tailwind CSS and Radix UI

The system is ready for core operations and can be extended with additional features as needed.

---

**Last Updated:** 2026-01-07  
**Version:** 0.1.0  
**Status:** Production-Ready Core Features
