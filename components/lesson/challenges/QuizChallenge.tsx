"use client"

import * as React from "react"
import { QuizExercise } from "@/lib/types/lesson"
import { Button } from "@/components/ui/button"
import { Check, X } from "lucide-react"
import { cn } from "@/lib/utils"

interface QuizChallengeProps {
  exercise: QuizExercise
  onComplete: (passed: boolean, xpEarned: number) => void
}

export function QuizChallenge({ exercise, onComplete }: QuizChallengeProps) {
  const [selectedOption, setSelectedOption] = React.useState<number | null>(null)
  const [submitted, setSubmitted] = React.useState(false)
  const [isCorrect, setIsCorrect] = React.useState(false)
  const [shakeIndex, setShakeIndex] = React.useState<number | null>(null)

  const handleOptionClick = (index: number) => {
    if (submitted) return
    setSelectedOption(index)
  }

  const handleSubmit = () => {
    if (selectedOption === null) return

    const correct = selectedOption === exercise.correctAnswer
    setIsCorrect(correct)
    setSubmitted(true)

    if (!correct) {
      // Shake animation for wrong answer
      setShakeIndex(selectedOption)
      setTimeout(() => setShakeIndex(null), 500)
    } else {
      // Success - trigger completion after brief delay
      setTimeout(() => {
        onComplete(true, exercise.xp)
      }, 1000)
    }
  }

  const handleRetry = () => {
    setSelectedOption(null)
    setSubmitted(false)
    setIsCorrect(false)
  }

  return (
    <div className="min-h-screen bg-[#0f172a] p-8">
      <div className="max-w-3xl mx-auto space-y-6">
        {/* Question */}
        <div className="bg-[#1e293b]/50 border border-white/10 rounded-xl p-6">
          <h2 className="text-2xl font-bold text-white mb-4">{exercise.title}</h2>
          <p className="text-lg text-gray-300 leading-relaxed">{exercise.description}</p>
        </div>

        {/* Options Grid */}
        <div className="grid grid-cols-1 gap-3">
          {exercise.options.map((option, index) => {
            const isSelected = selectedOption === index
            const isCorrectAnswer = index === exercise.correctAnswer
            const showCorrect = submitted && isCorrectAnswer
            const showWrong = submitted && isSelected && !isCorrect
            const shouldShake = shakeIndex === index

            return (
              <button
                key={index}
                onClick={() => handleOptionClick(index)}
                disabled={submitted}
                className={cn(
                  "relative p-4 text-left rounded-lg border-2 transition-all font-medium",
                  "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#53d22d]",
                  !submitted && !isSelected && "border-slate-600 bg-[#1e293b] text-white hover:border-[#53d22d] hover:bg-[#1e293b]/80",
                  !submitted && isSelected && "border-[#53d22d] bg-[#53d22d]/10 text-white",
                  showCorrect && "border-[#53d22d] bg-[#53d22d]/20 text-[#53d22d]",
                  showWrong && "border-red-500 bg-red-500/10 text-red-400",
                  submitted && !showCorrect && !showWrong && "border-slate-700 bg-slate-800/50 text-gray-500",
                  shouldShake && "animate-shake"
                )}
              >
                <div className="flex items-center justify-between">
                  <span>{option}</span>
                  {showCorrect && (
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#53d22d] flex items-center justify-center">
                      <Check className="h-4 w-4 text-[#0f172a]" strokeWidth={3} />
                    </div>
                  )}
                  {showWrong && (
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-500 flex items-center justify-center">
                      <X className="h-4 w-4 text-white" strokeWidth={3} />
                    </div>
                  )}
                </div>
              </button>
            )
          })}
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          {!submitted ? (
            <Button
              onClick={handleSubmit}
              disabled={selectedOption === null}
              className="bg-[#53d22d] hover:bg-[#53d22d]/90 text-[#0f172a] px-8 font-bold"
              style={{ boxShadow: '0 0 20px rgba(83,210,45,0.4)' }}
            >
              Submit Answer
            </Button>
          ) : !isCorrect ? (
            <Button
              onClick={handleRetry}
              variant="outline"
              className="border-[#53d22d] text-[#53d22d] hover:bg-[#53d22d]/10 px-8"
            >
              Try Again
            </Button>
          ) : null}
        </div>

        {/* Feedback Message */}
        {submitted && (
          <div className={cn(
            "p-4 rounded-lg border-2",
            isCorrect ? "bg-[#53d22d]/10 border-[#53d22d]" : "bg-red-500/10 border-red-500"
          )}>
            <p className={cn(
              "font-semibold",
              isCorrect ? "text-[#53d22d]" : "text-red-400"
            )}>
              {isCorrect ? `Correct! +${exercise.xp} XP` : "Not quite right. Try again!"}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
