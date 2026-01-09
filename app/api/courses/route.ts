import { NextRequest, NextResponse } from "next/server"
import { createServerClient } from "@/lib/supabase/client"

/**
 * Get All Courses
 * GET /api/courses
 * 
 * Returns all courses with enrollment statistics
 */
export async function GET(req: NextRequest) {
  try {
    const supabase = createServerClient()

    // Fetch all courses (exclude soft-deleted)
    const { data: courses, error } = await supabase
      .from("courses")
      .select("*")
      .is("deleted_at", null)
      .order("created_at", { ascending: false })

    if (error) {
      console.error("Courses fetch error:", error)
      return NextResponse.json(
        { error: "Failed to fetch courses" },
        { status: 500 }
      )
    }

    // Get enrollment counts and group counts for each course
    const coursesWithStats = await Promise.all(
      (courses || []).map(async (course) => {
        // Get groups for this course (exclude soft-deleted)
        const { data: groups } = await supabase
          .from("groups")
          .select("id")
          .eq("course_id", course.id)
          .is("deleted_at", null)

        const groupIds = groups?.map((g) => g.id) || []

        // Get total students enrolled in all groups for this course
        const { count: studentCount } = await supabase
          .from("enrollments")
          .select("*", { count: "exact", head: true })
          .in("group_id", groupIds)
          .eq("status", "active")

        return {
          id: course.id,
          title: course.title,
          description: course.description,
          duration: course.duration || "N/A",
          lessons: course.lessons_count || 0,
          students: studentCount || 0,
          isActive: course.is_active,
          createdAt: course.created_at,
        }
      })
    )

    return NextResponse.json({
      success: true,
      data: coursesWithStats,
      count: coursesWithStats.length,
    })
  } catch (error) {
    console.error("Courses API error:", error)
    return NextResponse.json(
      { error: "Failed to fetch courses" },
      { status: 500 }
    )
  }
}

/**
 * Create a New Course
 * POST /api/courses
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { title, description, duration, lessonsCount } = body

    if (!title) {
      return NextResponse.json(
        { error: "Title is required" },
        { status: 400 }
      )
    }

    const supabase = createServerClient()

    const { data: course, error } = await supabase
      .from("courses")
      .insert({
        title,
        description: description || null,
        duration: duration || null,
        lessons_count: lessonsCount || 0,
        is_active: true,
      })
      .select()
      .single()

    if (error) {
      console.error("Course creation error:", error)
      return NextResponse.json(
        { error: "Failed to create course" },
        { status: 500 }
      )
    }

    return NextResponse.json({
      success: true,
      data: course,
      message: "Course created successfully",
    })
  } catch (error) {
    console.error("Course creation API error:", error)
    return NextResponse.json(
      { error: "Failed to create course" },
      { status: 500 }
    )
  }
}
