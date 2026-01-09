import { NextRequest, NextResponse } from "next/server"
import { authenticateRequest } from "@/lib/auth/middleware"
import { createServerClient } from "@/lib/supabase/client"

/**
 * Get Lesson Data for Teacher View
 * GET /api/lessons/[id]/teacher-data
 */
export async function GET(
    req: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        // Authenticate
        const { user, error } = await authenticateRequest(req)

        if (!user || error) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
        }

        // Only teachers and admins can access
        if (user.role !== "teacher" && user.role !== "admin") {
            return NextResponse.json({ error: "Forbidden" }, { status: 403 })
        }

        const { id } = await params

        if (!id) {
            return NextResponse.json(
                { error: "Lesson ID is required" },
                { status: 400 }
            )
        }

        const supabase = createServerClient()

        // Fetch lesson details
        const { data: lesson, error: lessonError } = await supabase
            .from("lessons")
            .select("id, external_id, title, description, order_index")
            .eq("id", id)
            .single()

        if (lessonError || !lesson) {
            return NextResponse.json(
                { error: "Lesson not found" },
                { status: 404 }
            )
        }

        // Fetch task count
        const { count: taskCount, error: countError } = await supabase
            .from("tasks")
            .select("*", { count: "exact", head: true })
            .eq("lesson_id", id)

        if (countError) {
            console.error("Task count error:", countError)
        }

        return NextResponse.json({
            success: true,
            data: {
                id: lesson.id,
                external_id: lesson.external_id,
                title: lesson.title,
                description: lesson.description,
                order_index: lesson.order_index,
                taskCount: taskCount || 0
            }
        })
    } catch (error: any) {
        console.error("Get teacher lesson data error:", error)
        return NextResponse.json(
            { error: "Failed to fetch lesson data" },
            { status: 500 }
        )
    }
}
