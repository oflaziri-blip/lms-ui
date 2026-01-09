"use server"

import { createServiceRoleClient } from "@/lib/supabase/client"
import { cookies } from "next/headers"
import { supabase } from "@/lib/supabase/client"

/**
 * Server Action: Enroll Student in Section (Group)
 * 
 * SECURITY: This function uses service role client to bypass RLS.
 * Permission checks are performed at the application level.
 * 
 * IDEMPOTENT: Returns existing enrollment if student already enrolled.
 */
export async function enrollStudentInSection(
  sectionId: string,
  studentId: string
): Promise<{
  success: boolean
  data?: any
  error?: string
  alreadyEnrolled?: boolean
}> {
  try {
    // 1. Verify user authentication and role
    const cookieStore = await cookies()
    const authCookie = cookieStore.get("auth-token")
    
    // Get current user session
    const { data: { session } } = await supabase.auth.getSession()
    
    if (!session?.user) {
      return { success: false, error: "Unauthorized: No active session" }
    }

    // Fetch user details to check role
    const serviceClient = createServiceRoleClient()
    const { data: currentUser, error: userError } = await serviceClient
      .from("users")
      .select("id, role")
      .eq("id", session.user.id)
      .single()

    if (userError || !currentUser) {
      return { success: false, error: "Unauthorized: User not found" }
    }

    // SECURITY CHECK: Only admins and teachers can enroll students
    if (currentUser.role !== "admin" && currentUser.role !== "teacher") {
      return { success: false, error: "Forbidden: Only admins and teachers can enroll students" }
    }

    // 2. Validate section (group) exists and is active
    const { data: section, error: sectionError } = await serviceClient
      .from("groups")
      .select("id, name, max_students, is_active")
      .eq("id", sectionId)
      .single()

    if (sectionError || !section) {
      return { success: false, error: "Section not found" }
    }

    if (!section.is_active) {
      return { success: false, error: "Cannot enroll in inactive section" }
    }

    // 3. Validate student exists and has 'student' role
    const { data: student, error: studentError } = await serviceClient
      .from("users")
      .select("id, name, email, avatar_url, role")
      .eq("id", studentId)
      .single()

    if (studentError || !student) {
      return { success: false, error: "Student not found" }
    }

    if (student.role !== "student") {
      return { success: false, error: "User is not a student" }
    }

    // 4. Check if student is already enrolled (IDEMPOTENT)
    const { data: existingEnrollment } = await serviceClient
      .from("enrollments")
      .select("*")
      .eq("group_id", sectionId)
      .eq("student_id", studentId)
      .eq("status", "active")
      .maybeSingle()

    if (existingEnrollment) {
      // IDEMPOTENT: Return existing enrollment
      return {
        success: true,
        data: {
          id: existingEnrollment.id,
          sectionId: existingEnrollment.group_id,
          studentId: existingEnrollment.student_id,
          status: existingEnrollment.status,
          joinedAt: existingEnrollment.joined_at,
          progress: existingEnrollment.progress,
          student: {
            id: student.id,
            name: student.name,
            email: student.email,
            avatarUrl: student.avatar_url,
          },
        },
        alreadyEnrolled: true,
      }
    }

    // 5. Check if section is full
    const { count: enrolledCount } = await serviceClient
      .from("enrollments")
      .select("*", { count: "exact", head: true })
      .eq("group_id", sectionId)
      .eq("status", "active")

    if (enrolledCount !== null && enrolledCount >= section.max_students) {
      return { success: false, error: "Section is full" }
    }

    // 6. Create enrollment
    const { data: enrollment, error: enrollError } = await serviceClient
      .from("enrollments")
      .insert({
        group_id: sectionId,
        student_id: studentId,
        status: "active",
        progress: 0,
      })
      .select()
      .single()

    if (enrollError) {
      console.error("Enrollment error:", enrollError)
      return { success: false, error: "Failed to enroll student" }
    }

    return {
      success: true,
      data: {
        id: enrollment.id,
        sectionId: enrollment.group_id,
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
    }
  } catch (error) {
    console.error("Enrollment server action error:", error)
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to enroll student",
    }
  }
}

/**
 * Server Action: Get Available Students for Section
 * 
 * Returns students who are NOT already enrolled in the section.
 */
export async function getAvailableStudentsForSection(
  sectionId: string
): Promise<{
  success: boolean
  data?: any[]
  error?: string
}> {
  try {
    const serviceClient = createServiceRoleClient()

    // Get all active students
    const { data: allStudents, error: studentsError } = await serviceClient
      .from("users")
      .select("id, name, email, avatar_url")
      .eq("role", "student")
      .eq("status", "active")
      .order("name")

    if (studentsError) {
      return { success: false, error: "Failed to fetch students" }
    }

    // Get students already enrolled in this section
    const { data: enrolledStudents, error: enrolledError } = await serviceClient
      .from("enrollments")
      .select("student_id")
      .eq("group_id", sectionId)
      .eq("status", "active")

    if (enrolledError) {
      console.error("Enrolled students fetch error:", enrolledError)
    }

    // Filter out already enrolled students
    const enrolledIds = new Set(enrolledStudents?.map((e: any) => e.student_id) || [])
    const availableStudents = allStudents?.filter(
      (student: any) => !enrolledIds.has(student.id)
    ) || []

    return {
      success: true,
      data: availableStudents.map((s: any) => ({
        id: s.id,
        name: s.name,
        email: s.email,
        avatarUrl: s.avatar_url,
      })),
    }
  } catch (error) {
    console.error("Get available students error:", error)
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to fetch available students",
    }
  }
}
