"use client"

import * as React from "react"
import { Exercise } from "@/lib/types/lesson"
import { ChevronRight, Check, Lock } from "lucide-react"
import { cn } from "@/lib/utils"

interface ExerciseAccordionProps {
  exercises: Exercise[]
  currentIndex: number
  completedExercises: Set<number>
  onSelectExercise: (index: number) => void
}

export function ExerciseAccordion({
  exercises,
  currentIndex,
  completedExercises,
  onSelectExercise
}: ExerciseAccordionProps) {
  // Read from environment variable - defaults to true for development
  const unlockAll = process.env.NEXT_PUBLIC_UNLOCK_ALL_EXERCISES === 'true' || process.env.NEXT_PUBLIC_UNLOCK_ALL_EXERCISES === undefined

  return (
    <div className="h-full bg-white border-r border-gray-200 overflow-y-auto">
      <div className="p-4">
        <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">
          Exercises
        </h3>
        <div className="space-y-1">
          {exercises.map((exercise, index) => {
            const isCompleted = completedExercises.has(index)
            const isCurrent = index === currentIndex
            const isLocked = !unlockAll && !isCompleted && index > 0 && !completedExercises.has(index - 1)
            const isClickable = unlockAll || isCompleted || isCurrent || completedExercises.has(index - 1)

            return (
              <button
                key={exercise.id}
                onClick={() => isClickable && onSelectExercise(index)}
                disabled={!isClickable}
                className={cn(
                  "w-full text-left px-4 py-3 rounded-lg transition-all group",
                  "flex items-center justify-between gap-3",
                  isCurrent && "bg-purple-100 border-2 border-purple-600",
                  !isCurrent && isCompleted && "bg-green-50 hover:bg-green-100 border border-green-200",
                  !isCurrent && !isCompleted && isClickable && "hover:bg-gray-100 border border-transparent",
                  !isClickable && "opacity-50 cursor-not-allowed"
                )}
              >
                <div className="flex items-center gap-3 flex-1 min-w-0">
                  {/* Status Icon */}
                  <div className={cn(
                    "flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold",
                    isCompleted && "bg-green-500 text-white",
                    isCurrent && !isCompleted && "bg-purple-600 text-white",
                    !isCompleted && !isCurrent && isClickable && "bg-gray-200 text-gray-600",
                    isLocked && "bg-gray-100"
                  )}>
                    {isCompleted ? (
                      <Check className="h-4 w-4" strokeWidth={3} />
                    ) : isLocked ? (
                      <Lock className="h-3 w-3" strokeWidth={2} />
                    ) : (
                      index + 1
                    )}
                  </div>

                  {/* Exercise Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className={cn(
                        "text-xs font-semibold uppercase tracking-wide",
                        isCurrent ? "text-purple-700" : "text-gray-500"
                      )}>
                        {exercise.type}
                      </span>
                      <span className={cn(
                        "text-xs font-mono",
                        isCurrent ? "text-purple-600" : "text-gray-400"
                      )}>
                        {exercise.xp} XP
                      </span>
                    </div>
                    <p className={cn(
                      "text-sm font-medium truncate",
                      isCurrent ? "text-purple-900" : "text-gray-900"
                    )}>
                      {exercise.title}
                    </p>
                  </div>
                </div>

                {/* Arrow Indicator */}
                {isCurrent && (
                  <ChevronRight className="h-5 w-5 text-purple-600 flex-shrink-0" strokeWidth={2} />
                )}
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
