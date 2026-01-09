import { NextRequest, NextResponse } from "next/server"
import { authenticateRequest } from "@/lib/auth/middleware"
import { createServiceRoleClient } from "@/lib/supabase/client"

/**
 * Create New Student
 * POST /api/students
 */
export async function POST(req: NextRequest) {
  try {
    // Handle authentication
    const { user, error } = await authenticateRequest(req)

    if (!user || error) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    // Only admins and teachers can create students
    if (user.role !== "admin" && user.role !== "teacher") {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 })
    }

    const body = await req.json()
    const { name, username, password, grade } = body

    if (!name || !username || !password || !grade) {
      return NextResponse.json(
        { error: "Missing required fields: name, username, password, and grade are required" },
        { status: 400 }
      )
    }

    const supabase = createServiceRoleClient()

    // Generate fake email
    const fakeEmail = `${username}@demo.com`

    // Check if username is already taken
    const { data: existingUser } = await supabase
      .from("users")
      .select("id")
      .eq("email", fakeEmail)
      .single()

    if (existingUser) {
      return NextResponse.json(
        { error: "Username already exists" },
        { status: 409 }
      )
    }

    // Create auth user using admin API (no email verification required)
    const { data: authData, error: createUserError } = await supabase.auth.admin.createUser({
      email: fakeEmail,
      password,
      user_metadata: {
        name,
        username,
        grade,
        role: 'student'
      },
      email_confirm: true // Skip email confirmation
    })

    if (createUserError) {
      return NextResponse.json(
        { error: createUserError.message },
        { status: 500 }
      )
    }

    if (!authData.user) {
      return NextResponse.json(
        { error: "Failed to create student account" },
        { status: 500 }
      )
    }

    // Insert into users table (in case trigger doesn't work)
    const { data: userData, error: insertError } = await supabase
      .from("users")
      .insert({
        id: authData.user.id,
        name,
        email: fakeEmail,
        role: 'student',
        status: 'active',
      } as any)
      .select()
      .single()

    if (insertError) {
      console.error("User profile creation error:", insertError)
      // Don't fail the request if profile creation fails
    }

    return NextResponse.json({
      success: true,
      data: {
        id: authData.user.id,
        name,
        username,
        grade,
        email: fakeEmail,
        role: 'student',
        status: 'active'
      }
    }, { status: 201 })

  } catch (error) {
    console.error("Create student error:", error)
    return NextResponse.json(
      { error: "Failed to create student" },
      { status: 500 }
    )
  }
}