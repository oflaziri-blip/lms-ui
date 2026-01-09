import { NextRequest, NextResponse } from "next/server"
import { requireAuth } from "@/lib/auth/middleware"
import { importCourseData } from "@/lib/seedCourses"
import type { UserRole } from "@/lib/types/auth"

/**
 * Import Course Data from JSON
 * POST /api/courses/import
 */
async function importCourses(
  req: NextRequest,
  user: { id: string; role: UserRole }
) {
  try {
    // Only admins can import courses
    if (user.role !== "admin") {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 })
    }

    const body = await req.json()
    const { data } = body

    if (!data || !data.courses || !Array.isArray(data.courses)) {
      return NextResponse.json(
        { error: "Invalid JSON data. Expected 'courses' array." },
        { status: 400 }
      )
    }

    // Import the data
    const result = await importCourseData(data)

    return NextResponse.json({
      success: result.success,
      message: result.success
        ? "Course data imported successfully"
        : "Import completed with errors",
      data: {
        coursesCreated: result.coursesCreated,
        modulesCreated: result.modulesCreated,
        lessonsCreated: result.lessonsCreated,
        tasksCreated: result.tasksCreated,
        errors: result.errors,
      },
    })
  } catch (error: any) {
    console.error("Import courses error:", error)
    return NextResponse.json(
      { error: error.message || "Failed to import course data" },
      { status: 500 }
    )
  }
}

export const POST = requireAuth(importCourses)
