import { NextRequest, NextResponse } from "next/server"
import { authenticateRequest } from "@/lib/auth/middleware"
import { createServerClient, createServiceRoleClient } from "@/lib/supabase/client"

/**
 * Get All Groups
 * GET /api/groups
 * 
 * Returns all groups with course and teacher info
 */
export async function GET(req: NextRequest) {
  try {
    // Handle authentication
    const { user, authError } = await authenticateRequest(req)
    
    if (!user || authError) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const supabase = createServerClient()

    // Fetch all groups with course and teacher (exclude soft-deleted)
    const { data: groups, queryError } = await supabase
      .from("groups")
      .select(`
        *,
        course:courses(id, title),
        teacher:users!groups_teacher_id_fkey(id, name)
      `)
      .is("deleted_at", null)
      .order("created_at", { ascending: false })

    if (queryError) {
      console.error("Groups fetch error:", queryError)
      return NextResponse.json(
        { error: "Failed to fetch groups" },
        { status: 500 }
      )
    }

    // Get enrollment counts for each group
    const groupsWithCounts = await Promise.all(
      (groups || []).map(async (group) => {
        const { count } = await supabase
          .from("enrollments")
          .select("*", { count: "exact", head: true })
          .eq("group_id", group.id)
          .eq("status", "active")

        return {
          id: group.id,
          name: group.name,
          course: group.course?.title || "Unknown Course",
          courseId: group.course_id,
          teacher: group.teacher?.name || "Unassigned",
          teacherId: group.teacher_id,
          schedule: group.schedule,
          startDate: group.start_date,
          endDate: group.end_date,
          enrolledCount: count || 0,
          maxStudents: group.max_students,
          isActive: group.is_active,
          createdAt: group.created_at,
        }
      })
    )

    return NextResponse.json({
      success: true,
      data: groupsWithCounts,
      count: groupsWithCounts.length,
    })
  } catch (error) {
    console.error("Groups API error:", error)
    return NextResponse.json(
      { error: "Failed to fetch groups" },
      { status: 500 }
    )
  }
}

/**
 * Create a New Group
 * POST /api/groups
 */
export async function POST(req: NextRequest) {
  try {
    // Handle authentication
    const { user, authError } = await authenticateRequest(req)
    
    if (!user || authError) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    // Only admins and teachers can create groups
    if (user.role !== "admin" && user.role !== "teacher") {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 })
    }

    const body = await req.json()
    const { name, courseId, teacherId, schedule, startDate, endDate, maxStudents } = body

    if (!name || !courseId) {
      return NextResponse.json(
        { error: "Name and Course ID are required" },
        { status: 400 }
      )
    }

    // Use service role client to bypass RLS for admin operations
    const supabase = createServiceRoleClient()

    // Validate and format dates
    let formattedStartDate = null
    let formattedEndDate = null
    
    if (startDate) {
      const start = new Date(startDate)
      if (!isNaN(start.getTime())) {
        formattedStartDate = start.toISOString().split('T')[0] // Format as YYYY-MM-DD
      }
    }
    
    if (endDate) {
      const end = new Date(endDate)
      if (!isNaN(end.getTime())) {
        formattedEndDate = end.toISOString().split('T')[0] // Format as YYYY-MM-DD
      }
    }

    const { data: group, queryError } = await supabase
      .from("groups")
      .insert({
        name,
        course_id: courseId,
        teacher_id: teacherId || null,
        schedule: schedule || null,
        start_date: formattedStartDate,
        end_date: formattedEndDate,
        max_students: maxStudents || 30,
        is_active: true,
      })
      .select()
      .single()

    if (queryError) {
      console.error("Group creation error:", queryError)
      return NextResponse.json(
        { 
          error: "Failed to create group",
          details: queryError.message || JSON.stringify(queryError),
          code: queryError.code
        },
        { status: 500 }
      )
    }

    return NextResponse.json({
      success: true,
      data: group,
      message: "Group created successfully",
    })
  } catch (error) {
    console.error("Group creation API error:", error)
    return NextResponse.json(
      { error: "Failed to create group" },
      { status: 500 }
    )
  }
}
