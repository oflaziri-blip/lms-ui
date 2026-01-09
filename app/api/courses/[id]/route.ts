import { NextRequest, NextResponse } from "next/server"
import { authenticateRequest } from "@/lib/auth/middleware"
import { createServerClient, createServiceRoleClient } from "@/lib/supabase/client"

/**
 * Get Course Details with Lessons
 * GET /api/courses/[id]
 */
export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    // Handle authentication
    const { user, error } = await authenticateRequest(req)

    if (!user || error) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    // Get course ID from params
    const { id } = await params

    if (!id) {
      return NextResponse.json(
        { error: "Course ID is required" },
        { status: 400 }
      )
    }

    const supabase = createServerClient()

    // Fetch course with lessons
    const { data: course, error: courseError } = await supabase
      .from("courses")
      .select(
        `
        *,
        lessons (
          id,
          external_id,
          title,
          description,
          order_index,
          is_active,
          module_id,
          modules (
            id,
            title,
            order_index
          )
        )
      `
      )
      .eq("id", id)
      .single()

    if (courseError) {
      console.error("Course fetch error:", courseError)
      return NextResponse.json(
        { error: "Course not found or failed to fetch", details: courseError.message },
        { status: 404 }
      )
    }

    if (!course) {
      return NextResponse.json(
        { error: "Course not found" },
        { status: 404 }
      )
    }

    // Sort lessons by order_index, then by title
    const sortedLessons = (course.lessons || []).sort((a: any, b: any) => {
      if (a.order_index !== b.order_index) {
        return (a.order_index || 0) - (b.order_index || 0)
      }
      return (a.title || "").localeCompare(b.title || "")
    })

    // Group lessons by module if they have modules
    const lessonsByModule: { [key: string]: any[] } = {}
    const ungroupedLessons: any[] = []

    sortedLessons.forEach((lesson: any) => {
      if (lesson.module_id && lesson.modules) {
        const moduleId = lesson.modules.id
        if (!lessonsByModule[moduleId]) {
          lessonsByModule[moduleId] = []
        }
        lessonsByModule[moduleId].push(lesson)
      } else {
        ungroupedLessons.push(lesson)
      }
    })

    const transformedCourse = {
      id: course.id,
      title: course.title,
      description: course.description,
      duration: course.duration,
      lessons_count: course.lessons_count,
      is_active: course.is_active,
      created_at: course.created_at,
      updated_at: course.updated_at,
      lessons: sortedLessons,
      lessonsByModule: Object.entries(lessonsByModule)
        .map(([moduleId, lessons]) => {
          const firstLesson = lessons[0]
          return {
            module: firstLesson.modules,
            lessons: lessons.sort((a: any, b: any) => {
              // Sort lessons within module by order_index
              return (a.order_index || 0) - (b.order_index || 0)
            }),
          }
        })
        .sort((a, b) => {
          // Sort modules by their order_index
          return (a.module.order_index || 0) - (b.module.order_index || 0)
        }),
      ungroupedLessons: ungroupedLessons,
    }

    return NextResponse.json({ success: true, data: transformedCourse })
  } catch (error: any) {
    console.error("Get course details error:", error)
    return NextResponse.json(
      { error: "Failed to fetch course details", details: error.message },
      { status: 500 }
    )
  }
}

/**
 * Soft Delete Course (Move to Recycle Bin)
 * DELETE /api/courses/[id]
 */
export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    // Handle authentication
    const { user, error } = await authenticateRequest(req)

    if (!user || error) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    // Only admins can delete courses
    if (user.role !== "admin") {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 })
    }

    // Get course ID from params
    const { id } = await params

    if (!id) {
      return NextResponse.json(
        { error: "Course ID is required" },
        { status: 400 }
      )
    }

    const supabase = createServiceRoleClient()

    // Soft delete: Update deleted_at timestamp
    const { error: deleteError } = await supabase
      .from("courses")
      .update({ deleted_at: new Date().toISOString() })
      .eq("id", id)

    if (deleteError) {
      console.error("Course soft delete error:", deleteError)
      return NextResponse.json(
        { error: "Failed to delete course", details: deleteError.message },
        { status: 500 }
      )
    }

    return NextResponse.json({
      success: true,
      message: "Course moved to recycle bin"
    })
  } catch (error: any) {
    console.error("Delete course error:", error)
    return NextResponse.json(
      { error: "Failed to delete course", details: error.message },
      { status: 500 }
    )
  }
}
