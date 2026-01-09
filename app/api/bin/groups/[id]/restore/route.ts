import { NextRequest, NextResponse } from "next/server"
import { authenticateRequest } from "@/lib/auth/middleware"
import { createServiceRoleClient } from "@/lib/supabase/client"

/**
 * Restore a Deleted Group
 * POST /api/bin/groups/[id]/restore
 */
export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { user, error } = await authenticateRequest(req)
    
    if (!user || error) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    // Only admins can restore groups
    if (user.role !== "admin") {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 })
    }

    const { id } = await params
    const supabase = createServiceRoleClient()

    // Restore: Set deleted_at back to null
    const { error: restoreError } = await supabase
      .from("groups")
      .update({ deleted_at: null })
      .eq("id", id)

    if (restoreError) {
      console.error("Group restore error:", restoreError)
      return NextResponse.json(
        { error: "Failed to restore group" },
        { status: 500 }
      )
    }

    return NextResponse.json({
      success: true,
      message: "Group restored successfully",
    })
  } catch (error) {
    console.error("Restore group error:", error)
    return NextResponse.json(
      { error: "Failed to restore group" },
      { status: 500 }
    )
  }
}
