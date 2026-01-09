"use client"

import * as React from "react"
import { ChevronRight } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface SlidingPanelProps {
    isVisible: boolean
    title: string
    description: string
    showSuccess?: boolean
    onNext?: () => void
    canAdvance?: boolean
    children?: React.ReactNode
    className?: string
}

export function SlidingPanel({
    isVisible,
    title,
    description,
    showSuccess = false,
    onNext,
    canAdvance = true,
    children,
    className
}: SlidingPanelProps) {
    return (
        <div
            className={cn(
                "fixed right-0 top-16 h-[calc(100vh-4rem)] w-1/2 bg-white border-l border-gray-200",
                "transition-transform duration-300 ease-in-out z-20",
                "overflow-y-auto",
                !isVisible && "translate-x-full",
                className
            )}
        >
            <div className="flex flex-col h-full p-6">
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
                <div className="flex-1">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">{title}</h2>
                    <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-line mb-6">
                        {description}
                    </p>

                    {/* Additional Content (e.g., Console Output) */}
                    {children}
                </div>
            </div>
        </div>
    )
}
