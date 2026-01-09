"use client"

import * as React from "react"
import { QuizExercise as QuizExerciseType } from "@/lib/types/lesson"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckCircle2, XCircle, Zap } from "lucide-react"
import { cn } from "@/lib/utils"

interface QuizExerciseProps {
  exercise: QuizExerciseType
  onComplete: (passed: boolean, xpEarned: number) => void
}

export function QuizExercise({ exercise, onComplete }: QuizExerciseProps) {
  const [selectedOption, setSelectedOption] = React.useState<number | null>(null)
  const [submitted, setSubmitted] = React.useState(false)
  const [isCorrect, setIsCorrect] = React.useState(false)

  const handleSubmit = () => {
    if (selectedOption === null) return
    
    const correct = selectedOption === exercise.correctAnswer
    setIsCorrect(correct)
    setSubmitted(true)
    
    // Delay completion callback to show feedback
    setTimeout(() => {
      onComplete(correct, correct ? exercise.xp : 0)
    }, 1500)
  }

  const handleRetry = () => {
    setSelectedOption(null)
    setSubmitted(false)
    setIsCorrect(false)
  }

  return (
    <div className="space-y-6">
      {/* Exercise Header */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-foreground">{exercise.title}</h2>
          <div className="flex items-center gap-2 text-sm text-cyan-400">
            <Zap className="h-4 w-4" strokeWidth={1.5} />
            <span className="font-mono">{exercise.xp} XP</span>
          </div>
        </div>
        <p className="text-muted-foreground">{exercise.description}</p>
      </div>

      {/* Options */}
      <div className="space-y-3">
        {exercise.options.map((option, index) => (
          <Card
            key={index}
            className={cn(
              "p-4 cursor-pointer transition-all border-2",
              selectedOption === index && !submitted && "border-cyan-500 bg-cyan-500/10",
              submitted && index === exercise.correctAnswer && "border-green-500 bg-green-500/10",
              submitted && selectedOption === index && !isCorrect && "border-red-500 bg-red-500/10",
              !submitted && selectedOption !== index && "hover:border-cyan-400/50"
            )}
            onClick={() => !submitted && setSelectedOption(index)}
          >
            <div className="flex items-center justify-between">
              <span className="text-foreground">{option}</span>
              {submitted && index === exercise.correctAnswer && (
                <CheckCircle2 className="h-5 w-5 text-green-500" strokeWidth={1.5} />
              )}
              {submitted && selectedOption === index && !isCorrect && (
                <XCircle className="h-5 w-5 text-red-500" strokeWidth={1.5} />
              )}
            </div>
          </Card>
        ))}
      </div>

      {/* Feedback */}
      {submitted && (
        <Card className={cn(
          "p-4 border-2",
          isCorrect ? "border-green-500 bg-green-500/10" : "border-red-500 bg-red-500/10"
        )}>
          <div className="flex items-center gap-3">
            {isCorrect ? (
              <>
                <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0" strokeWidth={1.5} />
                <div>
                  <p className="font-semibold text-green-500">Correct!</p>
                  <p className="text-sm text-muted-foreground">+{exercise.xp} XP earned</p>
                </div>
              </>
            ) : (
              <>
                <XCircle className="h-6 w-6 text-red-500 flex-shrink-0" strokeWidth={1.5} />
                <div>
                  <p className="font-semibold text-red-500">Incorrect</p>
                  <p className="text-sm text-muted-foreground">Try again to earn XP</p>
                </div>
              </>
            )}
          </div>
        </Card>
      )}

      {/* Actions */}
      <div className="flex gap-3">
        {!submitted ? (
          <Button
            onClick={handleSubmit}
            disabled={selectedOption === null}
            className="bg-cyan-600 hover:bg-cyan-700"
          >
            Submit Answer
          </Button>
        ) : !isCorrect ? (
          <Button
            onClick={handleRetry}
            variant="outline"
            className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10"
          >
            Try Again
          </Button>
        ) : null}
      </div>
    </div>
  )
}
