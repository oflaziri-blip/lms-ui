"use client"

import * as React from "react"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

interface ProgressSnakeProps {
  totalSteps: number
  currentStep: number
  completedSteps: Set<number>
  onStepClick?: (step: number) => void
}

export function ProgressSnake({ totalSteps, currentStep, completedSteps, onStepClick }: ProgressSnakeProps) {
  // HARDCODED: All exercises unlocked for development
  const unlockAll = true

  return (
    <div className="w-full bg-[#0f172a] border-b border-white/5 py-4">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-center gap-2">
          {Array.from({ length: totalSteps }, (_, index) => {
            const stepNumber = index + 1
            const isCompleted = completedSteps.has(index)
            const isCurrent = index === currentStep
            const isClickable = unlockAll || isCompleted || isCurrent || (index > 0 && completedSteps.has(index - 1))

            return (
              <React.Fragment key={index}>
                {/* Step Circle */}
                <button
                  onClick={() => isClickable && onStepClick?.(index)}
                  disabled={!isClickable}
                  className={cn(
                    "relative flex items-center justify-center rounded-full font-semibold transition-all font-mono",
                    "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#53d22d]",
                    isCurrent && "w-12 h-12 text-lg shadow-lg",
                    !isCurrent && "w-10 h-10 text-sm",
                    isCompleted && !isCurrent && "bg-[#53d22d] text-[#0f172a] hover:bg-[#53d22d]/90 cursor-pointer hover:scale-110",
                    isCurrent && "bg-[#0f172a] border-2 border-[#53d22d] text-[#53d22d] ring-4 ring-[#0f172a] animate-pulse cursor-pointer",
                    !isCompleted && !isCurrent && "bg-slate-800 text-slate-500 cursor-not-allowed border border-slate-700"
                  )}
                  style={
                    isCompleted && !isCurrent ? { boxShadow: '0 0 15px rgba(83,210,45,0.4)' } :
                      isCurrent ? { boxShadow: '0 0 20px rgba(83,210,45,0.6)' } : undefined
                  }
                >
                  {isCompleted && !isCurrent ? (
                    <Check className="h-5 w-5" strokeWidth={3} />
                  ) : (
                    stepNumber
                  )}

                  {/* Pulsating glow effect for current */}
                  {isCurrent && (
                    <span className="absolute inset-0 rounded-full bg-[#53d22d] animate-ping opacity-30" />
                  )}
                </button>

                {/* Connector Line */}
                {index < totalSteps - 1 && (
                  <div
                    className={cn(
                      "h-1 w-8 transition-colors rounded-full",
                      isCompleted ? "bg-[#53d22d]" : "bg-slate-700"
                    )}
                    style={isCompleted ? { boxShadow: '0 0 8px rgba(83,210,45,0.3)' } : undefined}
                  />
                )}
              </React.Fragment>
            )
          })}
        </div>
      </div>
    </div>
  )
}
