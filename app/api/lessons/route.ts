import { NextRequest, NextResponse } from "next/server";
import { createServerClient } from "@/lib/supabase/client";

/**
 * Get Lessons
 * GET /api/lessons
 * 
 * Query Params:
 * - moduleId (optional): Filter lessons by module
 * - courseId (optional): Filter lessons by course
 */
export async function GET(req: NextRequest) {
    try {
        const { searchParams } = new URL(req.url);
        const moduleId = searchParams.get("moduleId");

        const supabase = createServerClient();

        let query = supabase
            .from("lessons")
            .select(`
        *,
        modules:module_id (
          id,
          title,
          module_number
        )
      `)
            .is("deleted_at", null)
            .order("lesson_number", { ascending: true });

        if (moduleId) {
            query = query.eq("module_id", moduleId);
        }

        const { data: lessons, error } = await query;

        if (error) {
            console.error("Lessons fetch error:", error);
            return NextResponse.json(
                { error: "Failed to fetch lessons" },
                { status: 500 }
            );
        }

        return NextResponse.json({
            success: true,
            data: lessons,
            count: lessons?.length || 0,
        });
    } catch (error) {
        console.error("Lessons API error:", error);
        return NextResponse.json(
            { error: "Failed to fetch lessons" },
            { status: 500 }
        );
    }
}

/**
 * Create Lesson Metadata
 * POST /api/lessons
 */
export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const {
            lesson_number,
            module_id,
            title,
            description,
            slide_url,
            objectives
        } = body;

        if (!title || !lesson_number || !module_id || !slide_url) {
            return NextResponse.json(
                { error: "Missing required fields (title, lesson_number, module_id, slide_url)" },
                { status: 400 }
            );
        }

        const supabase = createServerClient();

        const { data: lesson, error } = await supabase
            .from("lessons")
            .insert({
                lesson_number,
                module_id,
                title,
                description: description || null,
                slide_url,
                objectives: objectives || [],
                is_active: true,
            })
            .select()
            .single();

        if (error) {
            console.error("Lesson creation error:", error);
            return NextResponse.json(
                { error: "Failed to create lesson" },
                { status: 500 }
            );
        }

        return NextResponse.json({
            success: true,
            data: lesson,
            message: "Lesson metadata created successfully",
        });
    } catch (error) {
        console.error("Lesson creation API error:", error);
        return NextResponse.json(
            { error: "Failed to create lesson" },
            { status: 500 }
        );
    }
}
