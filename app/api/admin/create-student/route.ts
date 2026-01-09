import { NextRequest, NextResponse } from "next/server"
import { authenticateRequest } from "@/lib/auth/middleware"
import { createServiceRoleClient } from "@/lib/supabase/client"

/**
 * Create New Student (Admin Only)
 * POST /api/admin/create-student
 * 
 * This endpoint uses the SERVICE_ROLE_KEY securely on the backend
 * to create students without logging out the admin user.
 * 
 * Body: {
 *   fullName: string
 *   username: string
 *   password: string
 *   grade: string
 * }
 */
export async function POST(req: NextRequest) {
  try {
    // Step 1: Authenticate the request
    const { user, error: authError } = await authenticateRequest(req)

    if (!user || authError) {
      return NextResponse.json(
        { error: "Unauthorized. Please log in to continue." },
        { status: 401 }
      )
    }

    // Step 2: Verify user has admin or teacher role
    if (user.role !== "admin" && user.role !== "teacher") {
      return NextResponse.json(
        { error: "Forbidden. Only admins and teachers can create students." },
        { status: 403 }
      )
    }

    // Step 3: Parse and validate request body
    const body = await req.json()
    const { fullName, username, password, grade } = body

    // Validate required fields
    if (!fullName || !username || !password || !grade) {
      return NextResponse.json(
        {
          error: "Missing required fields",
          details: "fullName, username, password, and grade are all required",
        },
        { status: 400 }
      )
    }

    // Validate username format (alphanumeric and underscores only)
    if (!/^[a-zA-Z0-9_]+$/.test(username)) {
      return NextResponse.json(
        {
          error: "Invalid username format",
          details: "Username can only contain letters, numbers, and underscores",
        },
        { status: 400 }
      )
    }

    // Validate password strength
    if (password.length < 6) {
      return NextResponse.json(
        {
          error: "Password too weak",
          details: "Password must be at least 6 characters long",
        },
        { status: 400 }
      )
    }

    // Step 4: Create service role client (uses SERVICE_ROLE_KEY securely)
    const supabaseAdmin = createServiceRoleClient()

    // Step 5: Generate email using the specified domain
    const email = `${username}@algorithmics-student.com`

    // Step 6: Check if username/email already exists
    const { data: existingUser, error: checkError } = await supabaseAdmin
      .from("users")
      .select("id, email")
      .eq("email", email)
      .maybeSingle()

    if (checkError && checkError.code !== "PGRST116") {
      // PGRST116 is "not found" which is fine
      console.error("Error checking existing user:", checkError)
      return NextResponse.json(
        { error: "Failed to verify username availability" },
        { status: 500 }
      )
    }

    if (existingUser) {
      return NextResponse.json(
        {
          error: "Username already exists",
          details: `A student with username "${username}" already exists`,
        },
        { status: 409 }
      )
    }

    // Step 7: Create auth user using admin API (doesn't log out current admin)
    const { data: authData, error: createUserError } = await supabaseAdmin.auth.admin.createUser({
      email,
      password,
      email_confirm: true, // Skip email verification
      user_metadata: {
        name: fullName,
        username,
        grade,
        role: "Student", // Metadata uses capitalized for display
      },
    })

    if (createUserError) {
      console.error("Auth user creation error:", createUserError)
      return NextResponse.json(
        {
          error: "Failed to create student account",
          details: createUserError.message || "Unknown error occurred",
        },
        { status: 500 }
      )
    }

    if (!authData.user) {
      return NextResponse.json(
        { error: "Failed to create student account", details: "No user data returned" },
        { status: 500 }
      )
    }

    // Step 8: Insert into public.users table
    // Note: Database schema uses lowercase 'student', but user_metadata uses 'Student'
    const { data: userData, error: insertError } = await supabaseAdmin
      .from("users")
      .insert({
        id: authData.user.id,
        name: fullName,
        email,
        role: "student", // Database schema uses lowercase
        status: "active",
      })
      .select()
      .single()

    if (insertError) {
      console.error("User profile creation error:", insertError)
      
      // If profile creation fails, try to clean up the auth user
      try {
        await supabaseAdmin.auth.admin.deleteUser(authData.user.id)
      } catch (cleanupError) {
        console.error("Failed to cleanup auth user after profile creation failure:", cleanupError)
      }

      return NextResponse.json(
        {
          error: "Failed to create student profile",
          details: insertError.message || "Profile creation failed",
        },
        { status: 500 }
      )
    }

    // Step 9: Verify the student was created correctly and is queryable
    console.log(`[Create Student API] Student created successfully:`, {
      id: userData.id,
      name: userData.name,
      email: userData.email,
      role: userData.role,
      status: userData.status,
    })

    // Step 9.5: Verify the student can be queried (to ensure it's available for enrollment)
    const { data: verifyStudent, error: verifyError } = await supabaseAdmin
      .from("users")
      .select("id, name, email, role, status")
      .eq("id", userData.id)
      .eq("role", "student")
      .eq("status", "active")
      .single()

    if (verifyError || !verifyStudent) {
      console.warn(`[Create Student API] Warning: Could not verify student after creation:`, verifyError)
    } else {
      console.log(`[Create Student API] Student verified and queryable:`, verifyStudent)
    }

    // Step 10: Return success response with student data
    return NextResponse.json(
      {
        success: true,
        message: "Student created successfully",
        data: {
          id: userData.id,
          name: userData.name,
          email: userData.email,
          username,
          grade,
          role: userData.role,
          status: userData.status,
        },
      },
      { status: 201 }
    )
  } catch (error: any) {
    console.error("Create student API error:", error)
    return NextResponse.json(
      {
        error: "Internal server error",
        details: error.message || "An unexpected error occurred",
      },
      { status: 500 }
    )
  }
}
