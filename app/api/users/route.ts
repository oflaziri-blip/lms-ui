import { NextRequest, NextResponse } from "next/server"
import { authenticateRequest } from "@/lib/auth/middleware"
import { createServerClient, createServiceRoleClient } from "@/lib/supabase/client"

/**
 * Get All Users (with optional role filter)
 * GET /api/users?role=teacher
 */
export async function GET(req: NextRequest) {
  try {
    // Handle authentication
    const { user, error } = await authenticateRequest(req)
    
    if (!user || error) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    // Only admins can view all users
    if (user.role !== "admin") {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 })
    }

    const supabase = createServerClient()
    const { searchParams } = new URL(req.url)
    const roleFilter = searchParams.get("role")
    const includeMetadata = searchParams.get("includeMetadata") === "true"

    let query = supabase
      .from("users")
      .select("id, name, email, role, status")
      .is("deleted_at", null) // Exclude soft-deleted users
      .order("name", { ascending: true})

    // Filter by role if provided
    if (roleFilter) {
      query = query.eq("role", roleFilter)
    }

    const { data: users, error: usersError } = await query

    if (usersError) {
      console.error("Users fetch error:", usersError)
      return NextResponse.json(
        { error: "Failed to fetch users" },
        { status: 500 }
      )
    }

    // If metadata is requested, fetch from auth.users for user_metadata
    let usersWithMetadata = users || []
    if (includeMetadata && users && users.length > 0) {
      // Use service role client for admin operations (fetching auth metadata)
      const adminSupabase = createServiceRoleClient()
      
      // Fetch auth user metadata for each user
      const metadataPromises = users.map(async (user) => {
        try {
          const { data: authUser } = await adminSupabase.auth.admin.getUserById(user.id)
          return {
            ...user,
            metadata: authUser?.user?.user_metadata || null,
          }
        } catch (err) {
          console.warn(`Failed to fetch metadata for user ${user.id}:`, err)
          return { ...user, metadata: null }
        }
      })
      usersWithMetadata = await Promise.all(metadataPromises)
    }

    const transformedUsers = usersWithMetadata.map((u: any) => ({
      id: u.id,
      name: u.name,
      email: u.email,
      role: u.role,
      status: u.status,
      ...(includeMetadata && u.metadata ? {
        username: u.metadata.username || null,
        grade: u.metadata.grade || null,
      } : {}),
    }))

    return NextResponse.json({ success: true, data: transformedUsers })
  } catch (error) {
    console.error("Get users error:", error)
    return NextResponse.json(
      { error: "Failed to fetch users" },
      { status: 500 }
    )
  }
}

/**
 * Create New User
 * POST /api/users
 */
export async function POST(req: NextRequest) {
  try {
    // Handle authentication
    const { user, error } = await authenticateRequest(req)
    
    if (!user || error) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    // Only admins can create users
    if (user.role !== "admin") {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 })
    }

    const body = await req.json()
    const { name, email, password, phone, role, meta } = body

    if (!name || !email || !role) {
      return NextResponse.json(
        { error: "Missing required fields: name, email, and role are required" },
        { status: 400 }
      )
    }

    if (!["admin", "teacher", "student"].includes(role)) {
      return NextResponse.json(
        { error: "Invalid role. Must be admin, teacher, or student" },
        { status: 400 }
      )
    }

    const supabase = createServerClient()

    // Check if user already exists
    const { data: existingUser } = await supabase
      .from("users")
      .select("id, email")
      .eq("email", email)
      .single()

    if (existingUser) {
      return NextResponse.json(
        { error: "User with this email already exists" },
        { status: 409 }
      )
    }

    // Create user
    const { data: newUser, error: insertError } = await supabase
      .from("users")
      .insert({
        name,
        email,
        phone: phone || null,
        role: role as "admin" | "teacher" | "student",
        status: "active",
        avatar_url: null,
      })
      .select()
      .single()

    if (insertError) {
      console.error("User creation error:", insertError)
      return NextResponse.json(
        { error: insertError.message || "Failed to create user" },
        { status: 500 }
      )
    }

    // Create teacher profile if needed
    if (role === "teacher" && meta && newUser) {
      try {
        const { error: profileError } = await supabase
          .from("teacher_profiles")
          .insert({
            user_id: newUser.id,
            bio: meta.bio || null,
            hourly_rate: meta.hourlyRate ? Number(meta.hourlyRate) : null,
            specializations: meta.tags && Array.isArray(meta.tags) && meta.tags.length > 0 ? meta.tags : null,
          })

        if (profileError) {
          console.error("Teacher profile creation error (non-fatal):", profileError)
        }
      } catch (profileErr) {
        console.warn("Teacher profile table might not exist:", profileErr)
      }
    }

    const responseUser = {
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
      role: newUser.role,
      status: newUser.status,
      phone: newUser.phone,
      avatarUrl: newUser.avatar_url,
    }

    return NextResponse.json(
      { success: true, data: responseUser },
      { status: 201 }
    )
  } catch (error) {
    console.error("Create user error:", error)
    return NextResponse.json(
      { error: "Failed to create user" },
      { status: 500 }
    )
  }
}

/**
 * Soft Delete User (Move to Recycle Bin)
 * DELETE /api/users/[id]
 */
export async function DELETE(req: NextRequest) {
  try {
    const { user, error } = await authenticateRequest(req)
    
    if (!user || error) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    // Only admins can delete users
    if (user.role !== "admin") {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 })
    }

    // Get user ID from URL
    const url = new URL(req.url)
    const userId = url.searchParams.get("id")
    
    if (!userId) {
      return NextResponse.json(
        { error: "User ID is required" },
        { status: 400 }
      )
    }

    const supabase = createServerClient()

    // Soft delete: Update deleted_at timestamp
    const { error: deleteError } = await supabase
      .from("users")
      .update({ deleted_at: new Date().toISOString() })
      .eq("id", userId)

    if (deleteError) {
      console.error("User soft delete error:", deleteError)
      return NextResponse.json(
        { error: "Failed to delete user", details: deleteError.message },
        { status: 500 }
      )
    }

    return NextResponse.json({
      success: true,
      message: "User moved to recycle bin"
    })
  } catch (error: any) {
    console.error("Delete user error:", error)
    return NextResponse.json(
      { error: "Failed to delete user", details: error.message },
      { status: 500 }
    )
  }
}
