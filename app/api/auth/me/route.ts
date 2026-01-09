import { NextRequest, NextResponse } from "next/server"
import { createServerClient } from "@/lib/supabase/client"

/**
 * Get current authenticated user
 * GET /api/auth/me
 */
export async function GET(req: NextRequest) {
  try {
    const supabase = createServerClient()

    // Get current session
    const {
      data: { session },
      error: sessionError,
    } = await supabase.auth.getSession()

    if (sessionError || !session?.user) {
      return NextResponse.json({ user: null }, { status: 200 })
    }

    // Fetch user details from users table
    const { data: userData, error: userError } = await supabase
      .from("users")
      .select("id, email, name, role, status, avatar_url")
      .eq("id", session.user.id)
      .single()

    if (userError || !userData) {
      // If user not found in users table, return auth user data
      return NextResponse.json({
        user: {
          id: session.user.id,
          email: session.user.email || "",
          name: session.user.user_metadata?.name || session.user.email?.split("@")[0] || "User",
          role: session.user.user_metadata?.role || "student",
        },
      })
    }

    return NextResponse.json({
      user: {
        id: userData.id,
        email: userData.email,
        name: userData.name,
        role: userData.role,
        avatarUrl: userData.avatar_url,
      },
    })
  } catch (error) {
    console.error("Auth me error:", error)
    return NextResponse.json({ user: null }, { status: 200 })
  }
}
