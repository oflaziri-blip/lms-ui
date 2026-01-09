"use client"

import * as React from "react"
import { Lesson, Exercise } from "@/lib/types/lesson"
import { QuizExercise } from "./exercises/QuizExercise"
import { TypingExercise } from "./exercises/TypingExercise"
import { CodeExercise } from "./exercises/CodeExercise"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { ChevronLeft, ChevronRight, Trophy, Target, Clock } from "lucide-react"
import { cn } from "@/lib/utils"

interface LessonRunnerProps {
  lesson: Lesson
}

export function LessonRunner({ lesson }: LessonRunnerProps) {
  const [currentExerciseIndex, setCurrentExerciseIndex] = React.useState(0)
  const [completedExercises, setCompletedExercises] = React.useState<Set<number>>(new Set())
  const [totalXP, setTotalXP] = React.useState(0)
  const [showDescription, setShowDescription] = React.useState(true)

  const currentExercise = lesson.exercises[currentExerciseIndex]
  const progress = (completedExercises.size / lesson.exercises.length) * 100
  const isLastExercise = currentExerciseIndex === lesson.exercises.length - 1
  const canProceed = completedExercises.has(currentExerciseIndex)

  const handleExerciseComplete = (passed: boolean, xpEarned: number) => {
    if (passed) {
      setCompletedExercises(prev => new Set([...prev, currentExerciseIndex]))
      setTotalXP(prev => prev + xpEarned)
    }
  }

  const handleNext = () => {
    if (canProceed && !isLastExercise) {
      setCurrentExerciseIndex(prev => prev + 1)
      setShowDescription(true)
    }
  }

  const handlePrevious = () => {
    if (currentExerciseIndex > 0) {
      setCurrentExerciseIndex(prev => prev - 1)
      setShowDescription(true)
    }
  }

  const renderExercise = (exercise: Exercise) => {
    switch (exercise.type) {
      case "quiz":
        return <QuizExercise exercise={exercise} onComplete={handleExerciseComplete} />
      case "typing":
        return <TypingExercise exercise={exercise} onComplete={handleExerciseComplete} />
      case "code":
      case "debug":
        return <CodeExercise exercise={exercise} onComplete={handleExerciseComplete} />
      default:
        return <div>Unknown exercise type</div>
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Header */}
      <header className="glass-strong border-b border-cyan-900/30 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-foreground">{lesson.title}</h1>
              <p className="text-sm text-muted-foreground">{lesson.module}</p>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-cyan-400">
                <Trophy className="h-5 w-5" strokeWidth={1.5} />
                <span className="font-mono font-bold">{totalXP} XP</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock className="h-5 w-5" strokeWidth={1.5} />
                <span className="text-sm">{lesson.duration_minutes} min</span>
              </div>
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="mt-4 space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">
                Exercise {currentExerciseIndex + 1} of {lesson.exercises.length}
              </span>
              <span className="text-cyan-400 font-mono">{Math.round(progress)}% Complete</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Panel: Task Description */}
          <div className="space-y-6">
            {showDescription && (
              <Card className="p-6 glass border-cyan-900/30">
                <div className="flex items-start gap-3 mb-4">
                  <Target className="h-6 w-6 text-cyan-400 flex-shrink-0 mt-1" strokeWidth={1.5} />
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Mission Briefing</h3>
                    <p className="text-muted-foreground whitespace-pre-line">
                      {currentExercise.description}
                    </p>
                  </div>
                </div>
                <Button
                  onClick={() => setShowDescription(false)}
                  variant="outline"
                  size="sm"
                  className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10"
                >
                  Start Exercise
                </Button>
              </Card>
            )}

            {/* Lesson Objectives */}
            <Card className="p-6 glass border-cyan-900/30">
              <h3 className="text-lg font-semibold text-foreground mb-4">Learning Objectives</h3>
              <ul className="space-y-2">
                {lesson.objectives.map((objective, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>{objective}</span>
                  </li>
                ))}
              </ul>
            </Card>

            {/* Exercise Navigation */}
            <Card className="p-4 glass border-cyan-900/30">
              <h4 className="text-sm font-semibold text-muted-foreground mb-3">Exercises</h4>
              <div className="grid grid-cols-5 gap-2">
                {lesson.exercises.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentExerciseIndex(index)}
                    className={cn(
                      "aspect-square rounded border-2 flex items-center justify-center text-sm font-mono transition-all",
                      index === currentExerciseIndex && "border-cyan-500 bg-cyan-500/20 text-cyan-400",
                      completedExercises.has(index) && index !== currentExerciseIndex && "border-green-500 bg-green-500/10 text-green-400",
                      index !== currentExerciseIndex && !completedExercises.has(index) && "border-muted text-muted-foreground hover:border-cyan-400/50"
                    )}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
            </Card>
          </div>

          {/* Right Panel: Interactive Exercise */}
          <div>
            <Card className="p-6 glass border-cyan-900/30 min-h-[600px]">
              {!showDescription ? (
                renderExercise(currentExercise)
              ) : (
                <div className="flex items-center justify-center h-full text-muted-foreground">
                  Click "Start Exercise" to begin
                </div>
              )}
            </Card>

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-6">
              <Button
                onClick={handlePrevious}
                disabled={currentExerciseIndex === 0}
                variant="outline"
                className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10"
              >
                <ChevronLeft className="mr-2 h-4 w-4" strokeWidth={1.5} />
                Previous
              </Button>
              <Button
                onClick={handleNext}
                disabled={!canProceed || isLastExercise}
                className="bg-cyan-600 hover:bg-cyan-700"
              >
                Next
                <ChevronRight className="ml-2 h-4 w-4" strokeWidth={1.5} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
