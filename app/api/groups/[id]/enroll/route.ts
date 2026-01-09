import { NextRequest, NextResponse } from "next/server"
import { authenticateRequest } from "@/lib/auth/middleware"
import { createServiceRoleClient } from "@/lib/supabase/client"

/**
 * Enroll Student in Group
 * POST /api/groups/[id]/enroll
 * 
 * Body: { studentId: string }
 */
export async function POST(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    // Handle authentication
    const { user, error: authError } = await authenticateRequest(req)
    
    if (!user || authError) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    // Only admins and teachers can enroll students
    if (user.role !== "admin" && user.role !== "teacher") {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 })
    }

    const groupId = params.id
    const body = await req.json()
    const { studentId } = body

    if (!studentId) {
      return NextResponse.json(
        { error: "Student ID is required" },
        { status: 400 }
      )
    }

    // Use service role client to bypass RLS for admin operations
    const supabase = createServiceRoleClient()

    // 1. Verify group exists and get max students
    const { data: group, error: groupError } = await supabase
      .from("groups")
      .select("id, name, max_students, is_active")
      .eq("id", groupId)
      .single()

    if (groupError || !group) {
      return NextResponse.json(
        { error: "Group not found" },
        { status: 404 }
      )
    }

    if (!group.is_active) {
      return NextResponse.json(
        { error: "Cannot enroll in inactive group" },
        { status: 400 }
      )
    }

    // 2. Verify student exists and has 'student' role
    const { data: student, error: studentError } = await supabase
      .from("users")
      .select("id, name, email, avatar_url, role")
      .eq("id", studentId)
      .single()

    if (studentError || !student) {
      return NextResponse.json(
        { error: "Student not found" },
        { status: 404 }
      )
    }

    if (student.role !== "student") {
      return NextResponse.json(
        { error: "User is not a student" },
        { status: 400 }
      )
    }

    // 3. Check if student is already enrolled (IDEMPOTENT: return existing enrollment)
    const { data: existingEnrollment } = await supabase
      .from("enrollments")
      .select(`
        *,
        student:users!enrollments_student_id_fkey(id, name, email, avatar_url)
      `)
      .eq("group_id", groupId)
      .eq("student_id", studentId)
      .eq("status", "active")
      .maybeSingle() as { data: any; error: any }

    if (existingEnrollment) {
      // IDEMPOTENT: Return existing enrollment instead of error
      return NextResponse.json({
        success: true,
        data: {
          id: existingEnrollment.id,
          groupId: existingEnrollment.group_id,
          studentId: existingEnrollment.student_id,
          status: existingEnrollment.status,
          joinedAt: existingEnrollment.joined_at,
          progress: existingEnrollment.progress,
          student: existingEnrollment.student ? {
            id: existingEnrollment.student.id,
            name: existingEnrollment.student.name,
            email: existingEnrollment.student.email,
            avatarUrl: existingEnrollment.student.avatar_url,
          } : null,
        },
        message: "Student already enrolled",
        alreadyEnrolled: true,
      })
    }

    // 4. Check if group is full
    const { count: enrolledCount } = await supabase
      .from("enrollments")
      .select("*", { count: "exact", head: true })
      .eq("group_id", groupId)
      .eq("status", "active")

    if (enrolledCount !== null && enrolledCount >= group.max_students) {
      return NextResponse.json(
        { error: "Group is full" },
        { status: 400 }
      )
    }

    // 5. Create enrollment
    console.log('[Enroll API] Creating enrollment:', { groupId, studentId })
    const { data: enrollment, error: enrollError } = await supabase
      .from("enrollments")
      .insert({
        group_id: groupId,
        student_id: studentId,
        status: "active",
        progress: 0,
      } as any)
      .select()
      .single() as { data: any; error: any }

    if (enrollError) {
      console.error("Enrollment error:", enrollError)
      console.error("Enrollment error details:", JSON.stringify(enrollError, null, 2))
      console.error("Enrollment error code:", enrollError.code)
      console.error("Enrollment error hint:", enrollError.hint)
      return NextResponse.json(
        { error: "Failed to enroll student", details: enrollError.message || JSON.stringify(enrollError) },
        { status: 500 }
      )
    }

    console.log('[Enroll API] Enrollment created successfully:', enrollment)
    
    // Verify enrollment was actually created
    const { data: verifyEnrollment, error: verifyError } = await supabase
      .from("enrollments")
      .select("*")
      .eq("id", enrollment.id)
      .single() as { data: any; error: any }
    
    console.log('[Enroll API] Verification query result:', verifyEnrollment, verifyError)

    return NextResponse.json({
      success: true,
      data: {
        id: enrollment.id,
        groupId: enrollment.group_id,
        studentId: enrollment.student_id,
        status: enrollment.status,
        joinedAt: enrollment.joined_at,
        progress: enrollment.progress,
        student: {
          id: student.id,
          name: student.name,
          email: student.email,
          avatarUrl: student.avatar_url,
        },
      },
      message: "Student enrolled successfully",
    })
  } catch (error) {
    console.error("Enrollment API error:", error)
    return NextResponse.json(
      { error: "Failed to enroll student" },
      { status: 500 }
    )
  }
}
