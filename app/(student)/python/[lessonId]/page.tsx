"use client"

import * as React from "react"
import { useParams, useRouter } from "next/navigation"
import { Lesson } from "@/lib/types/lesson"
import { ProgressSnake } from "@/components/lesson/ProgressSnake"
import { InstructionsPanel } from "@/components/lesson/InstructionsPanel"
import { CodeEditorPanel } from "@/components/lesson/CodeEditorPanel"
import { TerminalOutputPanel } from "@/components/lesson/TerminalOutputPanel"
import { QuizChallenge } from "@/components/lesson/challenges/QuizChallenge"
import { TypingChallenge } from "@/components/lesson/challenges/TypingChallenge"
import { CodeTerminalPyodide } from "@/components/lesson/challenges/CodeTerminalPyodide"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Loader2, AlertCircle, ChevronRight, ArrowLeft, Terminal as TerminalIcon, Zap } from "lucide-react"

// 🔧 ANALYSIS MODE: Set to true to unlock all exercises for easy navigation
const ANALYSIS_MODE = true

export default function PythonLessonPage() {
  const params = useParams()
  const router = useRouter()
  const lessonId = params.lessonId as string

  const [lesson, setLesson] = React.useState<Lesson | null>(null)
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState<string | null>(null)
  const [currentExerciseIndex, setCurrentExerciseIndex] = React.useState(0)
  const [completedExercises, setCompletedExercises] = React.useState<Set<number>>(new Set())
  const [showSuccess, setShowSuccess] = React.useState(false)
  const [isRunning, setIsRunning] = React.useState(false)

  // Console output state
  const [consoleOutput, setConsoleOutput] = React.useState("")
  const [consoleError, setConsoleError] = React.useState<string | null>(null)
  const [testsPassed, setTestsPassed] = React.useState<boolean | null>(null)
  const [exitCode, setExitCode] = React.useState<number | null>(null)

  // Fetch lesson data
  React.useEffect(() => {
    const fetchLesson = async () => {
      try {
        setLoading(true)
        setError(null)

        const response = await fetch(`/lessons/${lessonId}.json`)

        if (!response.ok) {
          throw new Error(`Lesson not found: ${lessonId}`)
        }

        const data = await response.json()
        setLesson(data)
      } catch (err) {
        console.error("Error loading lesson:", err)
        setError(err instanceof Error ? err.message : "Failed to load lesson")
      } finally {
        setLoading(false)
      }
    }

    if (lessonId) {
      fetchLesson()
    }
  }, [lessonId])

  // Reset state when exercise changes
  React.useEffect(() => {
    if (lesson) {
      setShowSuccess(false)
      setConsoleOutput("")
      setConsoleError(null)
      setExitCode(null)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [currentExerciseIndex, lesson])

  // Auto-advance for code/debug exercises
  React.useEffect(() => {
    if (showSuccess && lesson) {
      const currentExercise = lesson.exercises[currentExerciseIndex]
      if (currentExercise.type === "code" || currentExercise.type === "debug") {
        const timer = setTimeout(() => {
          handleNextLevel()
        }, 2500)
        return () => clearTimeout(timer)
      }
    }
  }, [showSuccess, currentExerciseIndex, lesson])

  const handleExerciseComplete = () => {
    setCompletedExercises(prev => new Set(prev).add(currentExerciseIndex))
    setShowSuccess(true)
    setExitCode(0)
  }

  const handleNextLevel = () => {
    if (lesson && currentExerciseIndex < lesson.exercises.length - 1) {
      setCurrentExerciseIndex(prev => prev + 1)
      setShowSuccess(false)
    }
  }

  const handleStepClick = (index: number) => {
    if (ANALYSIS_MODE || completedExercises.has(index) || index === 0 || completedExercises.has(index - 1)) {
      setCurrentExerciseIndex(index)
    }
  }

  const handleRunCode = () => {
    // This will be triggered by the InstructionsPanel button
    // The actual execution happens in CodeTerminalPyodide
    setIsRunning(true)
    setTimeout(() => setIsRunning(false), 1000) // Reset after animation
  }

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-[#0f172a] flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="h-8 w-8 animate-spin text-[#53d22d] mx-auto" />
          <p className="text-gray-400 mt-4">Loading mission...</p>
        </div>
      </div>
    )
  }

  // Error state
  if (error || !lesson) {
    return (
      <div className="min-h-screen bg-[#0f172a] flex items-center justify-center p-4">
        <Card className="max-w-md w-full p-6 bg-[#1e293b] border-white/10">
          <AlertCircle className="h-12 w-12 text-red-400 mx-auto mb-4" />
          <h2 className="text-xl font-bold text-red-400 mb-2 text-center">Mission Not Found</h2>
          <p className="text-gray-300 text-center mb-6">{error || "Lesson not found"}</p>
          <Button
            onClick={() => router.push("/dashboard")}
            className="w-full bg-[#53d22d] hover:bg-[#53d22d]/90 text-[#0f172a]"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Dashboard
          </Button>
        </Card>
      </div>
    )
  }

  const currentExercise = lesson.exercises[currentExerciseIndex]
  const completedCount = completedExercises.size
  const totalExercises = lesson.exercises.length
  const xpEarned = completedCount * 10

  // Universal Switcher - Render appropriate component
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
          <CodeTerminalPyodide
            key={currentExercise.id}
            exercise={currentExercise}
            onComplete={handleExerciseComplete}
            onOutputChange={(output, error, passed) => {
              setConsoleOutput(output)
              setConsoleError(error)
              setTestsPassed(passed)
              if (passed !== null) {
                setExitCode(passed ? 0 : 1)
              }
            }}
            onHideInstructions={() => { }}
          />
        )
      default:
        return <div className="p-6 text-gray-500">Unknown exercise type</div>
    }
  }

  return (
    <div className="h-screen flex flex-col bg-[#0f172a] text-white">
      {/* Cyberpunk Header */}
      <header className="glass-panel h-16 flex items-center px-6 border-b border-white/5">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-4">
            {/* Back Button */}
            <Button
              onClick={() => router.push("/dashboard")}
              variant="ghost"
              size="sm"
              className="text-slate-400 hover:text-[#53d22d] hover:bg-white/5"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Dashboard
            </Button>

            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-slate-400">
              <TerminalIcon className="h-4 w-4 text-[#53d22d]" />
              <span>/</span>
              <span>{lesson.module}</span>
              <span>/</span>
              <span className="text-white font-medium">{lesson.title}</span>
            </div>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-4">
            {/* Progress */}
            <div className="hidden md:flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1.5">
              <span className="font-mono text-sm font-bold text-cyan-400">
                {completedCount}/{totalExercises}
              </span>
            </div>

            {/* XP */}
            <div className="hidden md:flex items-center gap-2 rounded-full border border-yellow-500/20 bg-yellow-500/10 px-3 py-1.5">
              <Zap className="w-4 h-4 text-yellow-400" />
              <span className="font-mono text-sm font-bold text-yellow-400">+{xpEarned} XP</span>
            </div>

            {/* Profile */}
            <div className="relative flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-slate-800 ring-2 ring-slate-700 transition-all hover:ring-[#53d22d]">
              <div className="bg-center bg-no-repeat bg-cover rounded-full h-full w-full bg-gradient-to-br from-cyan-500 to-blue-600" />
              <div className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-[#53d22d] ring-2 ring-[#0f172a]" />
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

      {/* Main Content - 3 Column Layout */}
      <div className="flex-1 overflow-hidden">
        {/* Code/Debug: 3-Column Split (25/50/25) */}
        {(currentExercise.type === "code" || currentExercise.type === "debug") && (
          <div className="flex h-full relative">
            {/* Abstract Background Grid Pattern */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:40px_40px]"></div>

            {/* Left Panel: Instructions (25%) */}
            <InstructionsPanel
              title={currentExercise.title}
              description={currentExercise.description}
              tasks={currentExercise.tasks || []}
              onRunCode={handleRunCode}
              isRunning={isRunning}
            />

            {/* Center Panel: Code Editor (50%) */}
            <CodeEditorPanel
              fileName="main.py"
              language="Python 3.10"
            >
              {renderExercise()}
            </CodeEditorPanel>

            {/* Right Panel: Terminal Output (25%) */}
            <TerminalOutputPanel
              output={consoleOutput}
              error={consoleError}
              isRunning={isRunning}
              exitCode={exitCode}
            />
          </div>
        )}

        {/* Quiz/Typing: Full Width (no split) */}
        {(currentExercise.type === "quiz" || currentExercise.type === "typing") && (
          <div className="h-full bg-[#0f172a] overflow-y-auto">
            {renderExercise()}
          </div>
        )}
      </div>

      {/* Success Modal for Quiz/Typing - Cyberpunk Style */}
      {showSuccess && (currentExercise.type === "quiz" || currentExercise.type === "typing") && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <Card className="max-w-md w-full p-8 bg-[#1e293b] border-2 border-[#53d22d] animate-in zoom-in" style={{ boxShadow: '0 0 30px rgba(83,210,45,0.3)' }}>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-[#53d22d]/20 flex items-center justify-center mx-auto mb-4" style={{ boxShadow: '0 0 20px rgba(83,210,45,0.4)' }}>
                <Zap className="w-8 h-8 text-[#53d22d]" />
              </div>
              <h3 className="text-3xl font-bold text-[#53d22d] mb-3">Mission Complete!</h3>
              <p className="text-gray-300 text-lg mb-2">+10 XP Earned</p>
              <p className="text-gray-400 text-sm mb-6">Task added to assessment base</p>
              <Button
                onClick={handleNextLevel}
                className="w-full bg-[#53d22d] hover:bg-[#53d22d]/90 text-[#0f172a] text-xl py-7 font-bold"
                style={{ boxShadow: '0 0 20px rgba(83,210,45,0.4)' }}
                disabled={currentExerciseIndex >= lesson.exercises.length - 1}
              >
                Next Mission
                <ChevronRight className="ml-2 h-6 w-6" strokeWidth={2} />
              </Button>
            </div>
          </Card>
        </div>
      )}

      <style jsx>{`
        .glass-panel {
          background: rgba(15, 23, 42, 0.6);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.05);
        }
      `}</style>
    </div>
  )
}
