/**
 * Course Data Import Script
 * Imports course data from JSON into Supabase database
 */

import { createServiceRoleClient } from "@/lib/supabase/client"
import type { Database } from "@/lib/supabase/types"

interface CourseData {
  exportDate: string
  totalCourses: number
  courses: Array<{
    courseId: string
    courseTitle: string
    modules: Array<{
      id: string
      title: string
      lessons: Array<{
        id: string
        title: string
        description: string
        tasks: Array<{
          id: string
          type: "code" | "quiz"
          title: string
          instructions: string
          starterCode: string
          solutionCode: string
          expectedOutput: string
          hints: string[]
          points: number
        }>
      }>
    }>
  }>
}

interface ImportResult {
  success: boolean
  coursesCreated: number
  modulesCreated: number
  lessonsCreated: number
  tasksCreated: number
  errors: string[]
}

/**
 * Import course data from JSON
 */
export async function importCourseData(
  jsonData: CourseData
): Promise<ImportResult> {
  // Use service role client to bypass RLS for admin operations
  const supabase = createServiceRoleClient()
  const result: ImportResult = {
    success: true,
    coursesCreated: 0,
    modulesCreated: 0,
    lessonsCreated: 0,
    tasksCreated: 0,
    errors: [],
  }

  try {
    // Process each course
    for (const courseData of jsonData.courses) {
      try {
        // Step 1: Insert or get Course
        const { data: existingCourse } = await supabase
          .from("courses")
          .select("id")
          .eq("title", courseData.courseTitle)
          .single()

        let courseId: string

        if (existingCourse) {
          // Update existing course
          courseId = existingCourse.id
          const { error: updateError } = await supabase
            .from("courses")
            .update({
              title: courseData.courseTitle,
              is_active: true,
              updated_at: new Date().toISOString(),
            })
            .eq("id", courseId)

          if (updateError) {
            result.errors.push(
              `Failed to update course "${courseData.courseTitle}": ${updateError.message}`
            )
            continue
          }
        } else {
          // Create new course
          const { data: newCourse, error: courseError } = await supabase
            .from("courses")
            .insert({
              title: courseData.courseTitle,
              description: `Course imported on ${new Date().toLocaleDateString()}`,
              is_active: true,
            })
            .select("id")
            .single()

          if (courseError || !newCourse) {
            result.errors.push(
              `Failed to create course "${courseData.courseTitle}": ${courseError?.message || "Unknown error"}`
            )
            continue
          }

          courseId = newCourse.id
          result.coursesCreated++
        }

        // Step 2: Process Modules and Lessons
        let globalLessonIndex = 0 // Global counter for lesson order across all modules
        for (let moduleIndex = 0; moduleIndex < courseData.modules.length; moduleIndex++) {
          const moduleData = courseData.modules[moduleIndex]

          // Insert or get Module
          const { data: existingModule } = await supabase
            .from("modules")
            .select("id")
            .eq("course_id", courseId)
            .eq("external_id", moduleData.id)
            .single()

          let moduleId: string | null = null

          if (existingModule) {
            moduleId = existingModule.id
            // Update module
            await supabase
              .from("modules")
              .update({
                title: moduleData.title,
                order_index: moduleIndex,
                updated_at: new Date().toISOString(),
              })
              .eq("id", moduleId)
          } else {
            // Create new module
            const { data: newModule, error: moduleError } = await supabase
              .from("modules")
              .insert({
                course_id: courseId,
                external_id: moduleData.id,
                title: moduleData.title,
                order_index: moduleIndex,
              })
              .select("id")
              .single()

            if (moduleError || !newModule) {
              result.errors.push(
                `Failed to create module "${moduleData.title}": ${moduleError?.message || "Unknown error"}`
              )
              // Continue without module (lessons can exist without modules)
            } else {
              moduleId = newModule.id
              result.modulesCreated++
            }
          }

          // Step 3: Process Lessons in this Module
          for (let lessonIndex = 0; lessonIndex < moduleData.lessons.length; lessonIndex++) {
            const lessonData = moduleData.lessons[lessonIndex]

            // Insert or get Lesson
            const { data: existingLesson } = await supabase
              .from("lessons")
              .select("id")
              .eq("course_id", courseId)
              .eq("external_id", lessonData.id)
              .single()

            let lessonId: string

            if (existingLesson) {
              lessonId = existingLesson.id
              // Update lesson
              await supabase
                .from("lessons")
                .update({
                  title: lessonData.title,
                  description: lessonData.description || null,
                  module_id: moduleId,
                  order_index: globalLessonIndex,
                  is_active: true,
                  updated_at: new Date().toISOString(),
                })
                .eq("id", lessonId)
            } else {
              // Create new lesson
              const { data: newLesson, error: lessonError } = await supabase
                .from("lessons")
                .insert({
                  course_id: courseId,
                  module_id: moduleId,
                  external_id: lessonData.id,
                  title: lessonData.title,
                  description: lessonData.description || null,
                  order_index: globalLessonIndex,
                  is_active: true,
                })
                .select("id")
                .single()

              if (lessonError || !newLesson) {
                result.errors.push(
                  `Failed to create lesson "${lessonData.title}": ${lessonError?.message || "Unknown error"}`
                )
                continue
              }

              lessonId = newLesson.id
              result.lessonsCreated++
            }

            // Step 4: Process Tasks in this Lesson
            // Delete existing tasks for this lesson (to allow re-import)
            await supabase.from("tasks").delete().eq("lesson_id", lessonId)

            // Insert tasks
            for (let taskIndex = 0; taskIndex < lessonData.tasks.length; taskIndex++) {
              const taskData = lessonData.tasks[taskIndex]

              const { error: taskError } = await supabase.from("tasks").insert({
                lesson_id: lessonId,
                external_id: taskData.id,
                type: taskData.type,
                title: taskData.title || null,
                instructions: taskData.instructions || null,
                starter_code: taskData.starterCode || null,
                solution_code: taskData.solutionCode || null,
                expected_output: taskData.expectedOutput || null,
                hints: taskData.hints || [],
                points: taskData.points || 0,
                order_index: taskIndex,
                is_active: true,
              })

              if (taskError) {
                result.errors.push(
                  `Failed to create task "${taskData.id}" in lesson "${lessonData.title}": ${taskError.message}`
                )
              } else {
                result.tasksCreated++
              }
            }

            // Increment global lesson counter
            globalLessonIndex++
          }
        }
      } catch (courseError: any) {
        result.errors.push(
          `Error processing course "${courseData.courseTitle}": ${courseError.message}`
        )
        result.success = false
      }
    }

    // Update lessons_count for all affected courses
    // This is handled by the trigger, but we can verify it's working
    if (result.errors.length > 0) {
      result.success = false
    }

    return result
  } catch (error: any) {
    result.success = false
    result.errors.push(`Fatal error during import: ${error.message}`)
    return result
  }
}
