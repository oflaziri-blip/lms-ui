"use client"

import * as React from "react"
import Link from "next/link"
import { Lock, CheckCircle, PlayCircle } from "lucide-react"
import { cn } from "@/lib/utils"

interface Lesson {
    id: string
    external_id: string
    title: string
    description: string | null
    order_index: number
    is_active: boolean
    isLocked?: boolean
    isCompleted?: boolean
    score?: number
}

interface LessonCardProps {
    lesson: Lesson
    onClick?: () => void
    href?: string
}

export function LessonCard({ lesson, onClick, href }: LessonCardProps) {
    const isLocked = lesson.isLocked ?? false
    const isCompleted = lesson.isCompleted ?? false
    const isActive = !isLocked && !isCompleted

    const StatusIcon = isLocked ? Lock : isCompleted ? CheckCircle : PlayCircle

    const content = (
        <div
            className={cn(
                "group relative flex items-center justify-between p-4 rounded-lg border transition-all duration-300",
                "bg-gray-800/50 border-gray-700",
                isLocked && "opacity-50 cursor-not-allowed",
                !isLocked && "hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/20 cursor-pointer",
                isActive && "hover:bg-gray-800/80"
            )}
            onClick={!isLocked ? onClick : undefined}
        >
            {/* Left: Icon + Title */}
            <div className="flex items-center gap-4">
                <div
                    className={cn(
                        "flex items-center justify-center w-10 h-10 rounded-full transition-colors",
                        isLocked && "bg-gray-700 text-gray-500",
                        isCompleted && "bg-emerald-500/20 text-emerald-400",
                        isActive && "bg-purple-500/20 text-purple-400 group-hover:bg-purple-500/30"
                    )}
                >
                    <StatusIcon className="h-5 w-5" strokeWidth={2} />
                </div>

                <div>
                    <h3
                        className={cn(
                            "font-medium text-lg",
                            isLocked && "text-gray-500",
                            isCompleted && "text-gray-200",
                            isActive && "text-white"
                        )}
                    >
                        {lesson.title}
                    </h3>
                    {lesson.description && (
                        <p className="text-sm text-gray-400 mt-0.5">{lesson.description}</p>
                    )}
                </div>
            </div>

            {/* Right: Score */}
            {lesson.score !== undefined && (
                <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-purple-400">{lesson.score}</span>
                    <span className="text-sm text-gray-500">/ 100</span>
                </div>
            )}

            {/* Glow effect on hover */}
            {!isLocked && (
                <div className="absolute inset-0 rounded-lg bg-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            )}
        </div>
    )

    if (href && !isLocked) {
        return (
            <Link href={href} className="block">
                {content}
            </Link>
        )
    }

    return content
}
