import { NextRequest, NextResponse } from "next/server"
import { createServerClient } from "@/lib/supabase/client"

/**
 * Logout endpoint
 * POST /api/auth/logout
 */
export async function POST(req: NextRequest) {
  try {
    const supabase = createServerClient()

    const { error } = await supabase.auth.signOut()

    if (error) {
      return NextResponse.json(
        { error: error.message || "Failed to sign out" },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true, message: "Signed out successfully" })
  } catch (error) {
    console.error("Logout API error:", error)
    return NextResponse.json(
      { error: "An unexpected error occurred" },
      { status: 500 }
    )
  }
}
