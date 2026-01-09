"use client"

import * as React from "react"
import { PanelRight, Maximize2, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ConsoleOutput } from "@/components/lesson/ConsoleOutput"
import { cn } from "@/lib/utils"

interface TaskPaneProps {
    isOpen: boolean
    onToggle: () => void
    title: string
    description: string
    output: string
    error: string | null
    testsPassed: boolean | null
    showSuccess?: boolean
    onNext?: () => void
    canAdvance?: boolean
}

export function TaskPane({
    isOpen,
    onToggle,
    title,
    description,
    output,
    error,
    testsPassed,
    showSuccess = false,
    onNext,
    canAdvance = true
}: TaskPaneProps) {
    return (
        <div className="relative h-full w-full flex flex-col">
            {/* Toolbar */}
            <div className="flex items-center gap-2 px-4 py-2 bg-white border-b border-gray-200 z-20">
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={onToggle}
                    className={cn(
                        "h-9 w-9 rounded-full transition-colors",
                        isOpen
                            ? "bg-indigo-100 text-indigo-600 hover:bg-indigo-200"
                            : "text-gray-500 hover:bg-gray-100"
                    )}
                    title={isOpen ? "Hide Instructions" : "Show Instructions"}
                >
                    <PanelRight className="h-5 w-5" strokeWidth={1.5} />
                </Button>

                <Button
                    variant="ghost"
                    size="icon"
                    onClick={onToggle}
                    className={cn(
                        "h-9 w-9 rounded-full transition-colors",
                        !isOpen
                            ? "bg-indigo-100 text-indigo-600 hover:bg-indigo-200"
                            : "text-gray-500 hover:bg-gray-100"
                    )}
                    title={!isOpen ? "Show Instructions" : "Maximize Terminal"}
                >
                    <Maximize2 className="h-5 w-5" strokeWidth={1.5} />
                </Button>
            </div>

            {/* Layered Content Area */}
            <div className="relative flex-1 overflow-hidden">
                {/* Layer A (Base): Terminal - Always mounted */}
                <div className="absolute inset-0 z-0 bg-gray-900 overflow-y-auto">
                    <div className="p-6">
                        <ConsoleOutput
                            output={output}
                            error={error}
                            testsPassed={testsPassed}
                        />
                    </div>
                </div>

                {/* Layer B (Overlay): Instructions - Toggle visibility */}
                <div
                    className={cn(
                        "absolute inset-0 z-10 bg-white transition-opacity duration-300 overflow-y-auto",
                        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                    )}
                >
                    <div className="p-6">
                        {/* Success Banner */}
                        {showSuccess && (
                            <Card className="mb-6 p-6 bg-gradient-to-r from-emerald-50 to-indigo-50 border-2 border-emerald-500 animate-in slide-in-from-top">
                                <h3 className="text-2xl font-bold text-emerald-700 mb-2">Thanks a lot!</h3>
                                <p className="text-gray-700 mb-4">Question added to assessment base</p>
                                {onNext && (
                                    <Button
                                        onClick={onNext}
                                        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white text-lg py-6"
                                        disabled={!canAdvance}
                                    >
                                        Next level
                                        <ChevronRight className="ml-2 h-5 w-5" strokeWidth={2} />
                                    </Button>
                                )}
                            </Card>
                        )}

                        {/* Task Instructions */}
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">{title}</h2>
                            <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-line">
                                {description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
