import { NextRequest, NextResponse } from "next/server"
import { authenticateRequest } from "@/lib/auth/middleware"
import { createServiceRoleClient } from "@/lib/supabase/client"

/**
 * Get All Deleted Students (Admin Only)
 * GET /api/bin/students
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

    // Fetch deleted students
    const { data: students, error: studentsError } = await supabase
      .from("users")
      .select("id, name, email, deleted_at")
      .eq("role", "student")
      .not("deleted_at", "is", null)
      .order("deleted_at", { ascending: false })

    if (studentsError) {
      console.error("Deleted students fetch error:", studentsError)
      return NextResponse.json(
        { error: "Failed to fetch deleted students" },
        { status: 500 }
      )
    }

    return NextResponse.json({
      success: true,
      data: students || [],
    })
  } catch (error) {
    console.error("Get deleted students error:", error)
    return NextResponse.json(
      { error: "Failed to fetch deleted students" },
      { status: 500 }
    )
  }
}
