import { NextRequest, NextResponse } from "next/server"
import { createServerClient } from "@/lib/supabase/client"

/**
 * Login endpoint
 * POST /api/auth/login
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { email, password } = body

    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password are required" },
        { status: 400 }
      )
    }

    const supabase = createServerClient()

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      return NextResponse.json(
        { error: error.message || "Invalid credentials" },
        { status: 401 }
      )
    }

    // Fetch user role to determine redirect
    const { data: userData } = await supabase
      .from("users")
      .select("role")
      .eq("id", data.user.id)
      .single() as { data: any; error: any }

    const userRole = (userData?.role as string) || data.user.user_metadata?.role || 'student'

    // Determine redirect URL based on role
    let redirectUrl = '/admin' // default for staff
    if (userRole === 'student') {
      redirectUrl = '/student'
    } else if (userRole === 'teacher' || userRole === 'admin') {
      redirectUrl = '/admin'
    }

    return NextResponse.json({
      success: true,
      user: data.user,
      session: data.session,
      redirectUrl, // Include redirect URL in response
      role: userRole,
    })
  } catch (error) {
    console.error("Login API error:", error)
    return NextResponse.json(
      { error: "An unexpected error occurred" },
      { status: 500 }
    )
  }
}
