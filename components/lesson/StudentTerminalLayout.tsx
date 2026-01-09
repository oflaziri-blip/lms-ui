"use client"

import * as React from "react"
import { Lesson } from "@/lib/types/lesson"
import { ProgressSnake } from "./ProgressSnake"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChevronRight, Home } from "lucide-react"
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels"
import { QuizChallenge } from "./challenges/QuizChallenge"
import { TypingChallenge } from "./challenges/TypingChallenge"
import { CodeTerminal } from "./challenges/CodeTerminal"

interface StudentTerminalLayoutProps {
  lesson: Lesson
}

export function StudentTerminalLayout({ lesson }: StudentTerminalLayoutProps) {
  const [currentExerciseIndex, setCurrentExerciseIndex] = React.useState(0)
  const [completedExercises, setCompletedExercises] = React.useState<Set<number>>(new Set())
  const [showSuccess, setShowSuccess] = React.useState(false)

  const currentExercise = lesson.exercises[currentExerciseIndex]

  // State Cleanup Effect - Reset all state when exercise changes
  React.useEffect(() => {
    setShowSuccess(false)
    // Force scroll to top when changing exercises
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [currentExercise.id, currentExerciseIndex])

  const handleExerciseComplete = (passed: boolean, xpEarned: number) => {
    if (passed) {
      setShowSuccess(true)
      setCompletedExercises(prev => new Set([...prev, currentExerciseIndex]))
    }
  }

  const handleNextLevel = () => {
    // Boundary check before incrementing
    if (currentExerciseIndex < lesson.exercises.length - 1) {
      setCurrentExerciseIndex(prev => prev + 1)
      setShowSuccess(false) // Reset success state immediately
    }
  }

  const handleStepClick = (index: number) => {
    // Only allow navigation to completed or current exercise
    if (completedExercises.has(index) || index === currentExerciseIndex) {
      setCurrentExerciseIndex(index)
      setShowSuccess(false)
    }
  }

  // Universal Switcher - Render appropriate component based on exercise type
  // CRITICAL: key prop forces React to destroy and recreate component on exercise change
  const renderExercise = () => {
    switch (currentExercise.type) {
      case "quiz":
        return (
          <QuizChallenge
            key={currentExercise.id}
            exercise={currentExercise}
            onComplete={handleExerciseComplete}
          />
        )
      case "typing":
        return (
          <TypingChallenge
            key={currentExercise.id}
            exercise={currentExercise}
            onComplete={handleExerciseComplete}
          />
        )
      case "code":
      case "debug":
        return (
          <CodeTerminal
            key={currentExercise.id}
            exercise={currentExercise}
            onComplete={handleExerciseComplete}
          />
        )
      default:
        return <div className="p-6 text-gray-500">Unknown exercise type</div>
    }
  }

  return (
    <div className="h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <header className="bg-indigo-950 text-white h-16 flex items-center px-6 shadow-lg">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-4">
            <span className="text-xl font-bold">Learn.NIT.academy</span>
            <div className="flex items-center gap-2 text-sm text-indigo-300">
              <Home className="h-4 w-4" strokeWidth={1.5} />
              <span>/</span>
              <span>{lesson.module}</span>
              <span>/</span>
              <span className="text-white">{lesson.title}</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-indigo-700 flex items-center justify-center font-semibold">
              U
            </div>
          </div>
        </div>
      </header>

      {/* Progress Snake */}
      <ProgressSnake
        totalSteps={lesson.exercises.length}
        currentStep={currentExerciseIndex}
        completedSteps={completedExercises}
        onStepClick={handleStepClick}
      />

      {/* Main Content - Resizable Split */}
      <div className="flex-1 overflow-hidden">
        <PanelGroup direction="horizontal">
          {/* Left Panel - Code Editor (60%) - Only for code/debug exercises */}
          {(currentExercise.type === "code" || currentExercise.type === "debug") && (
            <Panel defaultSize={60} minSize={40}>
              <CodeTerminal
                key={currentExercise.id}
                exercise={currentExercise}
                onComplete={handleExerciseComplete}
              />
            </Panel>
          )}

          {/* For quiz/typing, use full width right panel */}
          {(currentExercise.type === "quiz" || currentExercise.type === "typing") && (
            <Panel defaultSize={100}>
              <div className="h-full bg-white overflow-y-auto">
                {renderExercise()}
              </div>
            </Panel>
          )}

          {/* Resize Handle - Only for code/debug exercises */}
          {(currentExercise.type === "code" || currentExercise.type === "debug") && (
            <>
              <PanelResizeHandle className="w-2 bg-gray-200 hover:bg-indigo-400 transition-colors" />

              {/* Right Panel - Task Description (40%) */}
              <Panel defaultSize={40} minSize={30}>
                <div className="h-full flex flex-col bg-white overflow-y-auto p-6">
                  {/* Success Card */}
                  {showSuccess && (
                    <Card className="mb-6 p-6 bg-gradient-to-r from-emerald-50 to-indigo-50 border-2 border-emerald-500 animate-in slide-in-from-top">
                      <h3 className="text-2xl font-bold text-emerald-700 mb-2">Thanks a lot!</h3>
                      <p className="text-gray-700 mb-4">Question added to assessment base</p>
                      <Button
                        onClick={handleNextLevel}
                        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white text-lg py-6"
                        disabled={currentExerciseIndex >= lesson.exercises.length - 1}
                      >
                        Next level
                        <ChevronRight className="ml-2 h-5 w-5" strokeWidth={2} />
                      </Button>
                    </Card>
                  )}

                  {/* Task Instructions */}
                  <div className="mb-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">{currentExercise.title}</h2>
                    <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-line">
                      {currentExercise.description}
                    </p>
                  </div>
                </div>
              </Panel>
            </>
          )}

          {/* Success Card for Quiz/Typing - Overlay */}
          {showSuccess && (currentExercise.type === "quiz" || currentExercise.type === "typing") && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
              <Card className="max-w-md w-full p-8 bg-gradient-to-r from-emerald-50 to-indigo-50 border-2 border-emerald-500 animate-in zoom-in">
                <h3 className="text-3xl font-bold text-emerald-700 mb-3">Thanks a lot!</h3>
                <p className="text-gray-700 text-lg mb-6">Question added to assessment base</p>
                <Button
                  onClick={handleNextLevel}
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white text-xl py-7"
                  disabled={currentExerciseIndex >= lesson.exercises.length - 1}
                >
                  Next level
                  <ChevronRight className="ml-2 h-6 w-6" strokeWidth={2} />
                </Button>
              </Card>
            </div>
          )}
        </PanelGroup>
      </div>
    </div>
  )
}
