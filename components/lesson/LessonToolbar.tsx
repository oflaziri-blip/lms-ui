"use client"

import * as React from "react"
import { PanelRight, Maximize2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface LessonToolbarProps {
    showAssignment: boolean
    onToggleAssignment: () => void
    className?: string
}

export function LessonToolbar({
    showAssignment,
    onToggleAssignment,
    className
}: LessonToolbarProps) {
    return (
        <div className={cn(
            "flex items-center gap-2 px-4 py-2 bg-white border-b border-gray-200",
            className
        )}>
            {/* Assignment Toggle */}
            <Button
                variant="ghost"
                size="icon"
                onClick={onToggleAssignment}
                className={cn(
                    "h-9 w-9 rounded-full transition-colors",
                    showAssignment
                        ? "bg-indigo-100 text-indigo-600 hover:bg-indigo-200"
                        : "text-gray-500 hover:bg-gray-100"
                )}
                title={showAssignment ? "Hide Assignment" : "Show Assignment"}
            >
                <PanelRight className="h-5 w-5" strokeWidth={1.5} />
            </Button>

            {/* Maximize Editor */}
            <Button
                variant="ghost"
                size="icon"
                onClick={onToggleAssignment}
                className={cn(
                    "h-9 w-9 rounded-full transition-colors",
                    !showAssignment
                        ? "bg-indigo-100 text-indigo-600 hover:bg-indigo-200"
                        : "text-gray-500 hover:bg-gray-100"
                )}
                title={!showAssignment ? "Show Assignment" : "Maximize Editor"}
            >
                <Maximize2 className="h-5 w-5" strokeWidth={1.5} />
            </Button>
        </div>
    )
}
