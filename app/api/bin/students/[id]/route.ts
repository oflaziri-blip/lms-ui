import { NextRequest, NextResponse } from "next/server"
import { authenticateRequest } from "@/lib/auth/middleware"
import { createServiceRoleClient } from "@/lib/supabase/client"

/**
 * Permanently Delete a Student
 * DELETE /api/bin/students/[id]
 */
export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { user, error } = await authenticateRequest(req)
    
    if (!user || error) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    // Only admins can permanently delete students
    if (user.role !== "admin") {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 })
    }

    const { id } = await params
    const supabase = createServiceRoleClient()

    // Hard delete: Actually remove the row
    const { error: deleteError } = await supabase
      .from("users")
      .delete()
      .eq("id", id)

    if (deleteError) {
      console.error("Student permanent delete error:", deleteError)
      return NextResponse.json(
        { error: "Failed to permanently delete student" },
        { status: 500 }
      )
    }

    return NextResponse.json({
      success: true,
      message: "Student permanently deleted",
    })
  } catch (error) {
    console.error("Permanent delete student error:", error)
    return NextResponse.json(
      { error: "Failed to permanently delete student" },
      { status: 500 }
    )
  }
}
