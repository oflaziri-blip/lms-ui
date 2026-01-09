"use client"

import * as React from "react"
import { TypingExercise } from "@/lib/types/lesson"
import { cn } from "@/lib/utils"

interface TypingChallengeProps {
  exercise: TypingExercise
  onComplete: (passed: boolean, xpEarned: number) => void
}

export function TypingChallenge({ exercise, onComplete }: TypingChallengeProps) {
  const [userInput, setUserInput] = React.useState("")
  const [isComplete, setIsComplete] = React.useState(false)
  const targetCode = exercise.targetCode
  const textareaRef = React.useRef<HTMLTextAreaElement>(null)

  // Auto-focus on mount
  React.useEffect(() => {
    textareaRef.current?.focus()
  }, [])

  // Completion Logic
  React.useEffect(() => {
    if (userInput === targetCode && !isComplete) {
      setIsComplete(true)
      setTimeout(() => {
        onComplete(true, exercise.xp)
      }, 1000)
    }
  }, [userInput, targetCode, isComplete, exercise.xp, onComplete])

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value
    // Only allow typing up to the length of target code
    if (value.length <= targetCode.length) {
      setUserInput(value)
    }
  }

  // Render each character with appropriate styling
  const renderCharacters = () => {
    return targetCode.split("").map((char, index) => {
      const userChar = userInput[index]
      const isTyped = index < userInput.length
      const isCorrect = userChar === char
      const isCurrent = index === userInput.length

      return (
        <span
          key={index}
          className={cn(
            "relative",
            // Ghost text (not yet typed)
            !isTyped && "text-gray-600",
            // Correct character - Neon Green
            isTyped && isCorrect && "text-green-400 font-semibold",
            // Wrong character - Red with background
            isTyped && !isCorrect && "text-red-500 bg-red-900/30 font-semibold",
            // Current cursor position
            isCurrent && "border-l-2 border-green-400 animate-pulse"
          )}
        >
          {char}
        </span>
      )
    })
  }

  return (
    <div className="space-y-6 p-6">
      {/* Instructions */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">{exercise.title}</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">{exercise.description}</p>
        <p className="text-sm text-indigo-600 font-medium">
          Type the code exactly as shown. Correct characters turn green, errors turn red.
        </p>
      </div>

      {/* Typewriter Container */}
      <div className="relative bg-[#0f172a] rounded-lg border-2 border-indigo-500 overflow-hidden">
        {/* Invisible Input Layer */}
        <textarea
          ref={textareaRef}
          value={userInput}
          onChange={handleInputChange}
          disabled={isComplete}
          className="absolute inset-0 w-full h-full opacity-0 cursor-text resize-none z-10"
          autoFocus
          spellCheck={false}
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
        />

        {/* Visible Display Layer */}
        <div className="relative p-8 font-mono text-xl leading-relaxed whitespace-pre-wrap pointer-events-none select-none">
          {renderCharacters()}
        </div>
      </div>

      {/* Progress Indicator */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600">
            Progress: {userInput.length} / {targetCode.length} characters
          </span>
          <span className={cn(
            "font-mono font-semibold",
            isComplete ? "text-green-600" : "text-indigo-600"
          )}>
            {Math.round((userInput.length / targetCode.length) * 100)}%
          </span>
        </div>
        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className={cn(
              "h-full transition-all duration-300",
              isComplete ? "bg-green-500" : "bg-indigo-600"
            )}
            style={{ width: `${(userInput.length / targetCode.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Success Message */}
      {isComplete && (
        <div className="p-4 bg-green-50 border-2 border-green-500 rounded-lg animate-in slide-in-from-top">
          <p className="text-green-900 font-semibold text-center">
            Perfect! +{exercise.xp} XP
          </p>
        </div>
      )}
    </div>
  )
}
