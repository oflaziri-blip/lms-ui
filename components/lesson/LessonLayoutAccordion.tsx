"use client"

import * as React from "react"
import { Lesson, CodeExercise, DebugExercise } from "@/lib/types/lesson"
import { ProgressSnake } from "./ProgressSnake"
import { QuizChallenge } from "./challenges/QuizChallenge"
import { TypingChallenge } from "./challenges/TypingChallenge"
import { CodeTerminalSimple } from "./challenges/CodeTerminalSimple"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  ChevronRight,
  Home,
  Check,
  Play,
  SkipForward,
  FastForward,
  Square,
  RotateCcw,
  FileText,
  History as HistoryIcon,
  Settings,
  ClipboardList,
  Maximize2,
  Minimize2
} from "lucide-react"
import { cn } from "@/lib/utils"

interface LessonLayoutAccordionProps {
  lesson: Lesson
}

export function LessonLayoutAccordion({ lesson }: LessonLayoutAccordionProps) {
  const [currentExerciseIndex, setCurrentExerciseIndex] = React.useState(0)
  const [completedExercises, setCompletedExercises] = React.useState<Set<number>>(new Set())
  const [showSuccess, setShowSuccess] = React.useState(false)
  const [showAssignment, setShowAssignment] = React.useState(true)
  const [showFiles, setShowFiles] = React.useState(false)
  const [output, setOutput] = React.useState("")
  const [code, setCode] = React.useState("")
  const [isRunning, setIsRunning] = React.useState(false)

  const currentExercise = lesson.exercises[currentExerciseIndex]
  const isCodeExercise = currentExercise.type === "code" || currentExercise.type === "debug"

  // Reset state when exercise changes
  React.useEffect(() => {
    setShowSuccess(false)
    setOutput("")
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [currentExercise.id, currentExerciseIndex])

  const handleExerciseComplete = (passed: boolean, xpEarned: number) => {
    if (passed) {
      setShowSuccess(true)
      setCompletedExercises(prev => new Set([...prev, currentExerciseIndex]))
    }
  }

  const handleNextLevel = () => {
    if (currentExerciseIndex < lesson.exercises.length - 1) {
      setCurrentExerciseIndex(prev => prev + 1)
      setShowSuccess(false)
    }
  }

  const handleStepClick = (index: number) => {
    if (completedExercises.has(index) || index === currentExerciseIndex) {
      setCurrentExerciseIndex(index)
      setShowSuccess(false)
    }
  }

  const handleReset = () => {
    setOutput("")
    setShowSuccess(false)
    if (isCodeExercise) {
      setCode((currentExercise as CodeExercise | DebugExercise).starterCode)
    }
  }

  const handleRun = () => {
    setIsRunning(true)
    setOutput("")
    
    // Simulate code execution
    setTimeout(() => {
      const simulatedOutput = "Hello World\n"
      setOutput(simulatedOutput)
      setIsRunning(false)
      
      // Check if passed
      if (isCodeExercise) {
        const exercise = currentExercise as CodeExercise | DebugExercise
        const passed = exercise.testCases.every(tc =>
          simulatedOutput.trim() === tc.expectedOutput.trim()
        )
        if (passed) {
          setTimeout(() => {
            handleExerciseComplete(true, exercise.xp)
          }, 500)
        }
      }
    }, 1000)
  }

  // Render exercise based on type
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
          <CodeTerminalSimple
            key={currentExercise.id}
            exercise={currentExercise}
            onComplete={handleExerciseComplete}
            onCodeChange={setCode}
          />
        )
      default:
        return <div className="p-6 text-gray-500">Unknown exercise type</div>
    }
  }

  return (
    <div className="h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <header className="bg-indigo-950 text-white h-16 flex items-center px-6 shadow-lg z-50">
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

      {/* Toolbar - Below Progress Bar (Only for Code/Debug) */}
      {isCodeExercise && (
        <div className="bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between shadow-sm">
          {/* Left: Run Controls */}
          <div className="flex items-center gap-3">
            <Button
              onClick={handleRun}
              disabled={isRunning}
              className="bg-purple-600 hover:bg-purple-700 text-white px-6"
              size="default"
            >
              <Play className="h-4 w-4 mr-2" strokeWidth={1.5} />
              {isRunning ? "Running..." : "Run"}
            </Button>
            <Button
              variant="outline"
              disabled={!isRunning}
              size="default"
            >
              <Square className="h-4 w-4 mr-2" strokeWidth={1.5} />
              Stop
            </Button>
            <Button variant="outline" onClick={handleReset} size="default">
              <RotateCcw className="h-4 w-4 mr-2" strokeWidth={1.5} />
              Reset
            </Button>
          </div>

          {/* Right: Toggle Icons - VISIBLE AND CLICKABLE */}
          <div className="flex items-center gap-1 bg-gray-50 p-1 rounded-lg">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => {
                console.log("Files clicked")
                setShowFiles(!showFiles)
              }}
              className={cn(
                "rounded-full w-10 h-10 transition-all",
                showFiles ? "bg-purple-600 text-white shadow-lg" : "text-gray-600 hover:bg-white hover:text-purple-600"
              )}
              title="Toggle Files"
            >
              <FileText className="h-5 w-5" strokeWidth={1.5} />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full w-10 h-10 text-gray-600 hover:bg-white hover:text-purple-600"
              title="History"
            >
              <HistoryIcon className="h-5 w-5" strokeWidth={1.5} />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full w-10 h-10 text-gray-600 hover:bg-white hover:text-purple-600"
              title="Settings"
            >
              <Settings className="h-5 w-5" strokeWidth={1.5} />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => {
                console.log("Assignment toggled:", !showAssignment)
                setShowAssignment(!showAssignment)
              }}
              className={cn(
                "rounded-full w-10 h-10 transition-all",
                showAssignment ? "bg-purple-600 text-white shadow-lg" : "text-gray-600 hover:bg-white hover:text-purple-600"
              )}
              title="Toggle Assignment Panel"
            >
              <ClipboardList className="h-5 w-5" strokeWidth={1.5} />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => {
                console.log("Maximize clicked")
                setShowAssignment(false)
              }}
              className="rounded-full w-10 h-10 text-gray-600 hover:bg-white hover:text-purple-600"
              title="Maximize Editor"
            >
              <Maximize2 className="h-5 w-5" strokeWidth={1.5} />
            </Button>
          </div>
        </div>
      )}

      {/* Main Content - Sliding Accordion Layout */}
      <div className="flex-1 relative overflow-hidden">
        {/* For Quiz/Typing: Full Width */}
        {!isCodeExercise && (
          <div className="h-full w-full">
            {renderExercise()}
          </div>
        )}

        {/* For Code/Debug: Sliding Accordion */}
        {isCodeExercise && (
          <>

            {/* Left Panel - Files (Optional) */}
            <div className={cn(
              "absolute left-0 top-0 h-full w-64 bg-white border-r border-gray-200 transition-transform duration-300 ease-in-out z-30",
              !showFiles && "-translate-x-full"
            )}>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-4">Files</h3>
                <div className="text-sm text-gray-600">
                  <div className="py-2 hover:bg-gray-100 px-2 rounded cursor-pointer">
                    📄 main.py
                  </div>
                </div>
              </div>
            </div>

            {/* Center - Code Editor */}
            <div className={cn(
              "absolute top-0 h-full bg-white transition-all duration-300 ease-in-out",
              showFiles && "left-64",
              !showFiles && "left-0",
              showAssignment && !showFiles && "w-1/2",
              !showAssignment && !showFiles && "w-full",
              showAssignment && showFiles && "w-[calc(50%-16rem)]",
              !showAssignment && showFiles && "w-[calc(100%-16rem)]"
            )}>
              {renderExercise()}
            </div>

            {/* Right Panel - Assignment/Output (Sliding Accordion) */}
            <div className={cn(
              "fixed right-0 top-[128px] h-[calc(100vh-128px)] w-1/2 bg-white border-l border-gray-200 shadow-2xl transition-transform duration-300 ease-in-out z-20 overflow-y-auto",
              !showAssignment && "translate-x-full"
            )}>
              <div className="p-6 space-y-6">
                {/* Success Banner */}
                {showSuccess && (
                  <Card className="p-6 bg-gradient-to-r from-green-50 to-green-100 border-2 border-green-500 animate-in slide-in-from-top">
                    <h3 className="text-2xl font-bold text-green-700 mb-2">
                      Well done, you passed this level :)
                    </h3>
                    <Button
                      onClick={handleNextLevel}
                      className="w-full bg-purple-600 hover:bg-purple-700 text-white text-lg py-6 mt-4"
                      disabled={currentExerciseIndex >= lesson.exercises.length - 1}
                    >
                      Next level
                      <ChevronRight className="ml-2 h-5 w-5" strokeWidth={2} />
                    </Button>
                  </Card>
                )}

                {/* Task Description */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">{currentExercise.title}</h2>
                  <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-line mb-6">
                    {currentExercise.description}
                  </p>

                  {/* Task Checklist */}
                  {isCodeExercise && (
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <span className="font-semibold">TASKS WITH AUTOMATIC CHECK</span>
                        <span className="text-gray-400">ℹ️</span>
                      </div>
                      <div className="space-y-2">
                        {(currentExercise as CodeExercise | DebugExercise).testCases.map((testCase, index) => (
                          <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                            <div className={cn(
                              "flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center",
                              showSuccess ? "bg-green-500" : "bg-gray-300"
                            )}>
                              {showSuccess && <Check className="h-3 w-3 text-white" strokeWidth={3} />}
                            </div>
                            <span className={cn(
                              "text-sm",
                              showSuccess ? "text-green-700 line-through" : "text-gray-700"
                            )}>
                              Test case {index + 1}: Expected output matches
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Console Output */}
                {output && (
                  <div className="space-y-3">
                    <h3 className="font-semibold text-gray-900">Console Output</h3>
                    
                    {/* Playback Controls */}
                    <div className="flex items-center gap-2">
                      <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                        <Play className="h-4 w-4" strokeWidth={1.5} />
                      </Button>
                      <Button size="sm" variant="outline">
                        <SkipForward className="h-4 w-4" strokeWidth={1.5} />
                      </Button>
                      <Button size="sm" variant="outline">
                        <FastForward className="h-4 w-4" strokeWidth={1.5} />
                      </Button>
                      <Button size="sm" variant="outline">
                        <Square className="h-4 w-4" strokeWidth={1.5} />
                      </Button>
                    </div>

                    {/* Output Display */}
                    <div className="bg-gray-50 rounded-lg p-4 font-mono text-sm">
                      <pre className="whitespace-pre-wrap text-gray-900">{output}</pre>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </>
        )}
      </div>

      {/* Success Modal for Quiz/Typing */}
      {showSuccess && !isCodeExercise && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <Card className="max-w-md w-full p-8 bg-gradient-to-r from-green-50 to-green-100 border-2 border-green-500 animate-in zoom-in">
            <h3 className="text-3xl font-bold text-green-700 mb-3">
              Well done, you passed this level :)
            </h3>
            <Button
              onClick={handleNextLevel}
              className="w-full bg-purple-600 hover:bg-purple-700 text-white text-xl py-7 mt-4"
              disabled={currentExerciseIndex >= lesson.exercises.length - 1}
            >
              Next level
              <ChevronRight className="ml-2 h-6 w-6" strokeWidth={2} />
            </Button>
          </Card>
        </div>
      )}
    </div>
  )
}
