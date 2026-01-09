import { NextRequest, NextResponse } from "next/server"
import { authenticateRequest } from "@/lib/auth/middleware"
import { createServiceRoleClient } from "@/lib/supabase/client"

/**
 * Permanently Delete a Group
 * DELETE /api/bin/groups/[id]
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

    // Only admins can permanently delete groups
    if (user.role !== "admin") {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 })
    }

    const { id } = await params
    const supabase = createServiceRoleClient()

    // Hard delete: Actually remove the row
    const { error: deleteError } = await supabase
      .from("groups")
      .delete()
      .eq("id", id)

    if (deleteError) {
      console.error("Group permanent delete error:", deleteError)
      return NextResponse.json(
        { error: "Failed to permanently delete group" },
        { status: 500 }
      )
    }

    return NextResponse.json({
      success: true,
      message: "Group permanently deleted",
    })
  } catch (error) {
    console.error("Permanent delete group error:", error)
    return NextResponse.json(
      { error: "Failed to permanently delete group" },
      { status: 500 }
    )
  }
}
