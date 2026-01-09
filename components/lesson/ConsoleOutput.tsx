"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface ConsoleOutputProps {
    output: string
    error: string | null
    testsPassed: boolean | null
    className?: string
}

export function ConsoleOutput({ output, error, testsPassed, className }: ConsoleOutputProps) {
    if (!output && !error) {
        return null
    }

    return (
        <div className={cn("rounded-lg border border-gray-200 bg-gray-900 p-4", className)}>
            {/* Header with test status */}
            <div className="flex items-center justify-between mb-3">
                <span className="text-emerald-400 text-sm font-semibold">Output:</span>
                {testsPassed !== null && (
                    <span
                        className={cn(
                            "text-xs font-mono px-2 py-1 rounded",
                            testsPassed ? "bg-emerald-500 text-white" : "bg-red-500 text-white"
                        )}
                    >
                        {testsPassed ? "All tests passed!" : "Tests failed"}
                    </span>
                )}
            </div>

            {/* Output Text */}
            {output && (
                <pre className="font-mono text-sm text-gray-100 whitespace-pre-wrap mb-2">
                    {output}
                </pre>
            )}

            {/* Error */}
            {error && (
                <pre className="font-mono text-sm text-red-400 whitespace-pre-wrap">
                    Error: {error}
                </pre>
            )}
        </div>
    )
}
