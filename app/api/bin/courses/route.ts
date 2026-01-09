import { NextRequest, NextResponse } from "next/server"
import { authenticateRequest } from "@/lib/auth/middleware"
import { createServiceRoleClient } from "@/lib/supabase/client"

/**
 * Get All Deleted Courses (Admin Only)
 * GET /api/bin/courses
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

    // Fetch deleted courses
    const { data: courses, error: coursesError } = await supabase
      .from("courses")
      .select("id, title, description, deleted_at, lessons_count")
      .not("deleted_at", "is", null)
      .order("deleted_at", { ascending: false })

    if (coursesError) {
      console.error("Deleted courses fetch error:", coursesError)
      return NextResponse.json(
        { error: "Failed to fetch deleted courses" },
        { status: 500 }
      )
    }

    return NextResponse.json({
      success: true,
      data: courses || [],
    })
  } catch (error) {
    console.error("Get deleted courses error:", error)
    return NextResponse.json(
      { error: "Failed to fetch deleted courses" },
      { status: 500 }
    )
  }
}
