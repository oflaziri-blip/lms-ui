"use client"

import * as React from "react"
import { CodeExercise, DebugExercise } from "@/lib/types/lesson"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Play, Square, RotateCcw, Send, CheckCircle2, XCircle } from "lucide-react"
import { cn } from "@/lib/utils"
import dynamic from "next/dynamic"
import { usePyodideWorker } from "@/lib/hooks/usePyodideWorker"

const Editor = dynamic(() => import("@monaco-editor/react"), { ssr: false })

interface CodeTerminalPyodideProps {
  exercise: CodeExercise | DebugExercise
  onComplete: (passed: boolean, xpEarned: number) => void
  onOutputChange?: (output: string, error: string | null, testsPassed: boolean | null) => void
  onHideInstructions?: () => void
}

export function CodeTerminalPyodide({ exercise, onComplete, onOutputChange, onHideInstructions }: CodeTerminalPyodideProps) {
  const [code, setCode] = React.useState(exercise.starterCode)
  const [isMonacoMounted, setIsMonacoMounted] = React.useState(false)
  const [inputValue, setInputValue] = React.useState("")
  const [testsPassed, setTestsPassed] = React.useState<boolean | null>(null)
  const [validationMessage, setValidationMessage] = React.useState<string>("")
  const canvasRef = React.useRef<HTMLCanvasElement>(null)

  const {
    isReady,
    isRunning,
    runCodeWithValidation,
    writeInput,
    stopExecution,
    waitingForInput,
    drawCommands,
  } = usePyodideWorker()

  // Draw turtle graphics on canvas
  React.useEffect(() => {
    if (!canvasRef.current || drawCommands.length === 0) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Set canvas center as origin
    ctx.save()
    ctx.translate(canvas.width / 2, canvas.height / 2)
    ctx.scale(1, -1) // Flip Y axis to match turtle coordinates

    // Draw all commands
    drawCommands.forEach((cmd) => {
      if (cmd.type === "DRAW" && cmd.action === "line") {
        ctx.beginPath()
        ctx.moveTo(cmd.x1 || 0, cmd.y1 || 0)
        ctx.lineTo(cmd.x2 || 0, cmd.y2 || 0)
        ctx.strokeStyle = cmd.color || "white"
        ctx.lineWidth = cmd.width || 2
        ctx.stroke()
      }
    })

    ctx.restore()
  }, [drawCommands])

  // Handle run with Golden Standard validation
  const handleRun = async () => {
    if (!isReady) {
      alert("Python environment is still loading. Please wait...")
      return
    }

    onHideInstructions?.()
    setTestsPassed(null)
    setValidationMessage("")

    try {
      // Run with Golden Standard validation
      const result = await runCodeWithValidation(code, exercise.testCases)

      if (result.passed) {
        setTestsPassed(true)
        setValidationMessage(result.friendlyMessage || "✅ Mission Complete!")

        // Notify parent
        onOutputChange?.(result.actualOutput || "", null, true)

        // Award XP after delay
        setTimeout(() => {
          onComplete(true, exercise.xp)
        }, 1500)
      } else {
        setTestsPassed(false)
        setValidationMessage(result.friendlyMessage || result.error || "Validation failed")

        // Notify parent
        onOutputChange?.(result.actualOutput || "", result.error || null, false)
      }
    } catch (err) {
      setTestsPassed(false)
      const errorMessage = err instanceof Error ? err.message : "Unknown error"
      setValidationMessage(`❌ System Error: ${errorMessage}`)
      onOutputChange?.("", errorMessage, false)
    }
  }

  const handleStop = () => {
    stopExecution()
  }

  const handleReset = () => {
    setCode(exercise.starterCode)
    setTestsPassed(null)
    setValidationMessage("")
  }

  const handleInputSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (inputValue.trim()) {
      writeInput(inputValue)
      setInputValue("")
    }
  }

  const hasTurtleGraphics = drawCommands.length > 0

  return (
    <div className="h-full flex flex-col bg-[#080c14]">
      {/* Monaco Editor */}
      <div className="flex-1 w-full relative">
        {!isMonacoMounted && (
          <div className="absolute inset-0 flex items-center justify-center bg-[#080c14] z-20">
            <div className="text-gray-400 text-sm">Loading editor...</div>
          </div>
        )}
        <Editor
          height="100%"
          defaultLanguage="python"
          value={code}
          onChange={(value) => setCode(value || "")}
          onMount={() => setIsMonacoMounted(true)}
          theme="vs-dark"
          options={{
            minimap: { enabled: false },
            fontSize: 15,
            lineNumbers: "on",
            scrollBeyondLastLine: false,
            automaticLayout: true,
            tabSize: 4,
            wordWrap: "on",
            fontFamily: "'Fira Code', 'Courier New', monospace",
            fontLigatures: true,
            renderLineHighlight: "all",
            padding: { top: 16, bottom: 16 },
          }}
        />
      </div>

      {/* Footer Container - Always visible with fixed structure */}
      <div className="border-t border-gray-800">
        {/* Control Buttons - ALWAYS VISIBLE, NEVER HIDDEN */}
        <div className="p-4 flex items-center gap-2 bg-[#080c14]">
          <Button
            onClick={handleRun}
            disabled={isRunning || !isReady}
            size="sm"
            className="bg-green-600 hover:bg-green-700"
          >
            <Play className="h-4 w-4 mr-2" />
            {isRunning ? "Running..." : "Run Code"}
          </Button>

          <Button
            onClick={handleStop}
            disabled={!isRunning}
            size="sm"
            variant="destructive"
          >
            <Square className="h-4 w-4 mr-2" />
            Stop
          </Button>

          <Button
            onClick={handleReset}
            disabled={isRunning}
            size="sm"
            variant="outline"
          >
            <RotateCcw className="h-4 w-4 mr-2" />
            Reset
          </Button>

          {!isReady && (
            <span className="text-sm text-gray-400 ml-auto">
              Loading Python environment...
            </span>
          )}
        </div>

        {/* Input Form (when waiting for input) */}
        {waitingForInput && (
          <div className="p-4 border-t border-gray-800 bg-gray-900/50">
            <form onSubmit={handleInputSubmit} className="flex gap-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Enter input..."
                className="flex-1"
                autoFocus
              />
              <Button type="submit" size="sm">
                <Send className="h-4 w-4 mr-2" />
                Send
              </Button>
            </form>
          </div>
        )}

        {/* Turtle Graphics Canvas */}
        {hasTurtleGraphics && (
          <div className="p-4 border-t border-gray-800">
            <canvas
              ref={canvasRef}
              width={600}
              height={400}
              className="w-full bg-gray-900 rounded"
            />
          </div>
        )}
      </div>
    </div>
  )
}
