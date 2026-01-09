import { NextRequest, NextResponse } from "next/server"
import { authenticateRequest } from "@/lib/auth/middleware"
import { createServiceRoleClient } from "@/lib/supabase/client"

/**
 * Get All Deleted Groups (Admin Only)
 * GET /api/bin/groups
 */
export async function GET(req: NextRequest) {
  try {
    const { user, error } = await authenticateRequest(req)
    
    if (!user || error) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    // Only admins can access the recycle bin
    if (user.role !== "admin") {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 })
    }

    const supabase = createServiceRoleClient()

    // Fetch deleted groups with course info
    const { data: groups, error: groupsError } = await supabase
      .from("groups")
      .select(`
        id,
        name,
        deleted_at,
        course:courses(title)
      `)
      .not("deleted_at", "is", null)
      .order("deleted_at", { ascending: false })

    if (groupsError) {
      console.error("Deleted groups fetch error:", groupsError)
      return NextResponse.json(
        { error: "Failed to fetch deleted groups" },
        { status: 500 }
      )
    }

    // Transform the data
    const transformedGroups = (groups || []).map((g: any) => ({
      id: g.id,
      name: g.name,
      deleted_at: g.deleted_at,
      course_title: g.course?.title || 'Unknown Course',
    }))

    return NextResponse.json({
      success: true,
      data: transformedGroups,
    })
  } catch (error) {
    console.error("Get deleted groups error:", error)
    return NextResponse.json(
      { error: "Failed to fetch deleted groups" },
      { status: 500 }
    )
  }
}
