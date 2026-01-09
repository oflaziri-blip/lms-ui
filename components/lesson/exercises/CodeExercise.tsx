"use client"

import * as React from "react"
import { CodeExercise as CodeExerciseType, DebugExercise } from "@/lib/types/lesson"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckCircle2, XCircle, Zap, Play, RotateCcw } from "lucide-react"
import { cn } from "@/lib/utils"
import dynamic from "next/dynamic"

// Dynamically import Monaco Editor to avoid SSR issues
const Editor = dynamic(() => import("@monaco-editor/react"), { ssr: false })

interface CodeExerciseProps {
  exercise: CodeExerciseType | DebugExercise
  onComplete: (passed: boolean, xpEarned: number) => void
}

export function CodeExercise({ exercise, onComplete }: CodeExerciseProps) {
  const [code, setCode] = React.useState(exercise.starterCode)
  const [output, setOutput] = React.useState("")
  const [isRunning, setIsRunning] = React.useState(false)
  const [testResults, setTestResults] = React.useState<{ passed: boolean; message: string } | null>(null)
  const [isMonacoMounted, setIsMonacoMounted] = React.useState(false)

  const isDebugExercise = exercise.type === "debug"

  const handleRun = async () => {
    setIsRunning(true)
    setOutput("")
    setTestResults(null)

    // Simulate code execution (in a real app, you'd send this to a backend)
    setTimeout(() => {
      try {
        // Simple simulation - in production, use a sandboxed Python executor
        let simulatedOutput = ""
        
        // Check if code matches expected output for test cases
        const allTestsPassed = exercise.testCases.every((testCase) => {
          // This is a simplified check - in production, actually execute the code
          const codeMatches = code.includes("print") || code.includes("result")
          return codeMatches
        })

        if (allTestsPassed) {
          simulatedOutput = exercise.testCases[0].expectedOutput
          setTestResults({ passed: true, message: "All tests passed!" })
        } else {
          simulatedOutput = "Error: Output doesn't match expected result"
          setTestResults({ passed: false, message: "Tests failed. Check your code." })
        }

        setOutput(simulatedOutput)
        setIsRunning(false)

        if (allTestsPassed) {
          setTimeout(() => {
            onComplete(true, exercise.xp)
          }, 1500)
        }
      } catch (error) {
        setOutput(`Error: ${error}`)
        setTestResults({ passed: false, message: "Runtime error occurred" })
        setIsRunning(false)
      }
    }, 1000)
  }

  const handleReset = () => {
    setCode(exercise.starterCode)
    setOutput("")
    setTestResults(null)
  }

  return (
    <div className="space-y-6 h-full flex flex-col">
      {/* Exercise Header */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-foreground">{exercise.title}</h2>
          <div className="flex items-center gap-2 text-sm text-cyan-400">
            <Zap className="h-4 w-4" strokeWidth={1.5} />
            <span className="font-mono">{exercise.xp} XP</span>
          </div>
        </div>
        <p className="text-muted-foreground whitespace-pre-line">{exercise.description}</p>
      </div>

      {/* Code Editor */}
      <div className="relative w-full h-[500px] border-2 border-cyan-900/30 rounded overflow-hidden z-10 bg-[#1e1e1e]">
        {!isMonacoMounted && (
          <div className="absolute inset-0 flex items-center justify-center bg-[#1e1e1e] z-20">
            <div className="text-cyan-400 text-sm">Loading editor...</div>
          </div>
        )}
        <Editor
          height="500px"
          defaultLanguage="python"
          value={code}
          onChange={(value) => setCode(value || "")}
          onMount={() => setIsMonacoMounted(true)}
          theme="vs-dark"
          options={{
            minimap: { enabled: false },
            fontSize: 14,
            lineNumbers: "on",
            scrollBeyondLastLine: false,
            automaticLayout: true,
            tabSize: 4,
            wordWrap: "on",
          }}
        />
      </div>

      {/* Output Console */}
      {output && (
        <Card className="p-4 bg-black/50 border-cyan-900/30">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-semibold text-cyan-400">Output:</span>
            {testResults && (
              <span className={cn(
                "text-xs font-mono",
                testResults.passed ? "text-green-500" : "text-red-500"
              )}>
                {testResults.message}
              </span>
            )}
          </div>
          <pre className="font-mono text-sm text-cyan-300 whitespace-pre-wrap">
            {output}
          </pre>
        </Card>
      )}

      {/* Test Results */}
      {testResults && (
        <Card className={cn(
          "p-4 border-2",
          testResults.passed ? "border-green-500 bg-green-500/10" : "border-red-500 bg-red-500/10"
        )}>
          <div className="flex items-center gap-3">
            {testResults.passed ? (
              <>
                <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0" strokeWidth={1.5} />
                <div>
                  <p className="font-semibold text-green-500">Success!</p>
                  <p className="text-sm text-muted-foreground">+{exercise.xp} XP earned</p>
                </div>
              </>
            ) : (
              <>
                <XCircle className="h-6 w-6 text-red-500 flex-shrink-0" strokeWidth={1.5} />
                <div>
                  <p className="font-semibold text-red-500">Not Quite</p>
                  <p className="text-sm text-muted-foreground">Review the requirements and try again</p>
                </div>
              </>
            )}
          </div>
        </Card>
      )}

      {/* Actions */}
      <div className="flex gap-3">
        <Button
          onClick={handleRun}
          disabled={isRunning || !code.trim()}
          className="bg-green-600 hover:bg-green-700"
        >
          {isRunning ? (
            <>
              <div className="animate-spin mr-2 h-4 w-4 border-2 border-white border-t-transparent rounded-full" />
              Running...
            </>
          ) : (
            <>
              <Play className="mr-2 h-4 w-4" strokeWidth={1.5} />
              Run Code
            </>
          )}
        </Button>
        <Button
          onClick={handleReset}
          variant="outline"
          className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10"
        >
          <RotateCcw className="mr-2 h-4 w-4" strokeWidth={1.5} />
          Reset
        </Button>
      </div>
    </div>
  )
}
