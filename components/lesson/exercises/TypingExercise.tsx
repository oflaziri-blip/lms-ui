"use client"

import * as React from "react"
import { TypingExercise as TypingExerciseType } from "@/lib/types/lesson"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckCircle2, XCircle, Zap, Eye, EyeOff } from "lucide-react"
import { cn } from "@/lib/utils"

interface TypingExerciseProps {
  exercise: TypingExerciseType
  onComplete: (passed: boolean, xpEarned: number) => void
}

export function TypingExercise({ exercise, onComplete }: TypingExerciseProps) {
  const [userCode, setUserCode] = React.useState("")
  const [submitted, setSubmitted] = React.useState(false)
  const [isCorrect, setIsCorrect] = React.useState(false)
  const [showTarget, setShowTarget] = React.useState(false)

  const handleSubmit = () => {
    const correct = userCode.trim() === exercise.targetCode.trim()
    setIsCorrect(correct)
    setSubmitted(true)
    
    setTimeout(() => {
      onComplete(correct, correct ? exercise.xp : 0)
    }, 1500)
  }

  const handleRetry = () => {
    setUserCode("")
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

      {/* Target Code (Blurred/Hidden) */}
      <Card className="p-4 bg-muted/50">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-semibold text-muted-foreground">Target Code:</span>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setShowTarget(!showTarget)}
            className="text-cyan-400 hover:text-cyan-300"
          >
            {showTarget ? (
              <>
                <EyeOff className="h-4 w-4 mr-2" strokeWidth={1.5} />
                Hide
              </>
            ) : (
              <>
                <Eye className="h-4 w-4 mr-2" strokeWidth={1.5} />
                Show
              </>
            )}
          </Button>
        </div>
        <pre className={cn(
          "font-mono text-sm p-3 bg-black/50 rounded border border-cyan-900/30 overflow-x-auto transition-all",
          !showTarget && "blur-sm select-none"
        )}>
          <code className="text-cyan-300">{exercise.targetCode}</code>
        </pre>
      </Card>

      {/* User Input */}
      <div className="space-y-2">
        <label className="text-sm font-semibold text-muted-foreground">Type the code exactly:</label>
        <textarea
          value={userCode}
          onChange={(e) => setUserCode(e.target.value)}
          disabled={submitted}
          placeholder="Type here..."
          className={cn(
            "w-full min-h-[120px] p-4 bg-black/50 border-2 rounded font-mono text-sm",
            "text-cyan-300 placeholder:text-muted-foreground",
            "focus:outline-none focus:border-cyan-500 transition-colors",
            submitted && isCorrect && "border-green-500",
            submitted && !isCorrect && "border-red-500"
          )}
        />
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
                  <p className="font-semibold text-green-500">Perfect Match!</p>
                  <p className="text-sm text-muted-foreground">+{exercise.xp} XP earned</p>
                </div>
              </>
            ) : (
              <>
                <XCircle className="h-6 w-6 text-red-500 flex-shrink-0" strokeWidth={1.5} />
                <div>
                  <p className="font-semibold text-red-500">Not Quite Right</p>
                  <p className="text-sm text-muted-foreground">Check for typos and try again</p>
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
            disabled={!userCode.trim()}
            className="bg-cyan-600 hover:bg-cyan-700"
          >
            Check Code
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
