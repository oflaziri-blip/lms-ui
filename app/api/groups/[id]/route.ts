import { NextRequest, NextResponse } from "next/server"
import { authenticateRequest } from "@/lib/auth/middleware"
import { createServiceRoleClient } from "@/lib/supabase/client"

// Disable caching for this route
export const dynamic = 'force-dynamic'
export const revalidate = 0

/**
 * Get Group Details
 * GET /api/groups/[id]
 *
 * Returns group details with course, teacher, and enrollment info
 */
export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const groupId = params.id
    const supabase = createServiceRoleClient()

    // Fetch group with course and teacher
    const { data: group, error: groupError } = await supabase
      .from("groups")
      .select(`
        *,
        course:courses(*),
        teacher:users!groups_teacher_id_fkey(id, name, email, avatar_url)
      `)
      .eq("id", groupId)
      .single() as { data: any; error: any }

    if (groupError || !group) {
      console.error("Group fetch error:", groupError)
      return NextResponse.json(
        { error: "Group not found" },
        { status: 404 }
      )
    }

    // Fetch enrollments with students
    const { data: enrollments, error: enrollError } = await supabase
      .from("enrollments")
      .select(`
        *,
        student:users!enrollments_student_id_fkey(id, name, email, avatar_url, role, status)
      `)
      .eq("group_id", groupId)
      .eq("status", "active")
      .order("joined_at", { ascending: false }) as { data: any[] | null; error: any }

    if (enrollError) {
      console.error("Enrollments fetch error:", enrollError)
      console.error("Enrollments fetch error details:", JSON.stringify(enrollError, null, 2))
    }

    console.log(`[Group ${groupId}] Fetched ${enrollments?.length || 0} enrollments`)
    console.log(`[Group ${groupId}] Enrollment details:`, JSON.stringify(enrollments, null, 2))

    // Calculate stats
    const enrolledCount = enrollments?.length || 0
    const availableSlots = group.max_students - enrolledCount

    // Transform response
    const groupDetails = {
      id: group.id,
      name: group.name,
      courseId: group.course_id,
      teacherId: group.teacher_id,
      schedule: group.schedule,
      startDate: group.start_date,
      endDate: group.end_date,
      maxStudents: group.max_students,
      isActive: group.is_active,
      course: group.course ? {
        id: group.course.id,
        title: group.course.title,
        description: group.course.description,
        duration: group.course.duration,
        lessonsCount: group.course.lessons_count,
      } : null,
      teacher: group.teacher ? {
        id: group.teacher.id,
        name: group.teacher.name,
        email: group.teacher.email,
        avatarUrl: group.teacher.avatar_url,
      } : null,
      enrolledCount,
      availableSlots,
      enrollments: enrollments?.map((e: any) => ({
        id: e.id,
        studentId: e.student_id,
        status: e.status,
        joinedAt: e.joined_at,
        progress: e.progress || 0,
        student: e.student ? {
          id: e.student.id,
          name: e.student.name,
          email: e.student.email,
          avatarUrl: e.student.avatar_url,
        } : {
          id: e.student_id,
          name: 'Unknown Student',
          email: 'unknown@example.com',
          avatarUrl: null,
        },
      })) || [],
    }

    return NextResponse.json({
      success: true,
      data: groupDetails,
    })
  } catch (error) {
    console.error("Group details API error:", error)
    return NextResponse.json(
      { error: "Failed to fetch group details" },
      { status: 500 }
    )
  }
}

/**
 * Soft Delete Group (Move to Recycle Bin)
 * DELETE /api/groups/[id]
 */
export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    // Handle authentication
    const { user, error } = await authenticateRequest(req)
    
    if (!user || error) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    // Only admins can delete groups
    if (user.role !== "admin") {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 })
    }

    const groupId = params.id
    const supabase = createServiceRoleClient()

    // Soft delete: Update deleted_at timestamp
    const { error: deleteError } = await supabase
      .from("groups")
      .update({ deleted_at: new Date().toISOString() })
      .eq("id", groupId)

    if (deleteError) {
      console.error("Group soft delete error:", deleteError)
      return NextResponse.json(
        { error: "Failed to delete group", details: deleteError.message },
        { status: 500 }
      )
    }

    return NextResponse.json({
      success: true,
      message: "Group moved to recycle bin"
    })
  } catch (error: any) {
    console.error("Delete group error:", error)
    return NextResponse.json(
      { error: "Failed to delete group", details: error.message },
      { status: 500 }
    )
  }
}
