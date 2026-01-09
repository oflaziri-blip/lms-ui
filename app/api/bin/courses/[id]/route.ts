import { NextRequest, NextResponse } from "next/server"
import { authenticateRequest } from "@/lib/auth/middleware"
import { createServiceRoleClient } from "@/lib/supabase/client"

/**
 * Permanently Delete a Course
 * DELETE /api/bin/courses/[id]
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

    // Only admins can permanently delete courses
    if (user.role !== "admin") {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 })
    }

    const { id } = await params
    const supabase = createServiceRoleClient()

    // Hard delete: Actually remove the row
    const { error: deleteError } = await supabase
      .from("courses")
      .delete()
      .eq("id", id)

    if (deleteError) {
      console.error("Course permanent delete error:", deleteError)
      return NextResponse.json(
        { error: "Failed to permanently delete course" },
        { status: 500 }
      )
    }

    return NextResponse.json({
      success: true,
      message: "Course permanently deleted",
    })
  } catch (error) {
    console.error("Permanent delete course error:", error)
    return NextResponse.json(
      { error: "Failed to permanently delete course" },
      { status: 500 }
    )
  }
}
