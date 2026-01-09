"use client"

import * as React from "react"
import { CodeExercise, DebugExercise } from "@/lib/types/lesson"
import { Button } from "@/components/ui/button"
import { Play, Square, RotateCcw } from "lucide-react"
import { cn } from "@/lib/utils"
import dynamic from "next/dynamic"

const Editor = dynamic(() => import("@monaco-editor/react"), { ssr: false })

interface CodeTerminalProps {
  exercise: CodeExercise | DebugExercise
  onComplete: (passed: boolean, xpEarned: number) => void
}

export function CodeTerminal({ exercise, onComplete }: CodeTerminalProps) {
  const [code, setCode] = React.useState(exercise.starterCode)
  const [output, setOutput] = React.useState("")
  const [isRunning, setIsRunning] = React.useState(false)
  const [testsPassed, setTestsPassed] = React.useState(false)
  const [isMonacoMounted, setIsMonacoMounted] = React.useState(false)

  const handleRun = async () => {
    setIsRunning(true)
    setOutput("")
    setTestsPassed(false)

    // Simulate code execution with validation
    setTimeout(() => {
      try {
        // Simple Python code execution simulation
        let simulatedOutput = ""
        
        // Extract print statements and evaluate simple expressions
        const printMatches = code.matchAll(/print\((.*?)\)/g)
        for (const match of printMatches) {
          const content = match[1].trim()
          
          // Handle string literals
          if (content.startsWith("'") || content.startsWith('"')) {
            simulatedOutput += content.slice(1, -1) + "\n"
          }
          // Handle simple math expressions
          else if (/^[\d\s+\-*/%()]+$/.test(content)) {
            try {
              const result = eval(content)
              simulatedOutput += result + "\n"
            } catch {
              simulatedOutput += content + "\n"
            }
          }
          // Handle variables (simplified)
          else {
            // Try to find variable assignments
            const varMatch = code.match(new RegExp(`${content}\\s*=\\s*(.+)`))
            if (varMatch) {
              const value = varMatch[1].trim()
              if (/^[\d\s+\-*/%()]+$/.test(value)) {
                try {
                  const result = eval(value)
                  simulatedOutput += result + "\n"
                } catch {
                  simulatedOutput += value + "\n"
                }
              } else {
                simulatedOutput += value.replace(/['"]/g, "") + "\n"
              }
            } else {
              simulatedOutput += content + "\n"
            }
          }
        }

        setOutput(simulatedOutput)

        // Validate against test cases
        const allTestsPassed = exercise.testCases.every((testCase) => {
          const expected = testCase.expectedOutput.trim()
          const actual = simulatedOutput.trim()
          return actual === expected
        })

        setTestsPassed(allTestsPassed)
        setIsRunning(false)

        if (allTestsPassed) {
          setTimeout(() => {
            onComplete(true, exercise.xp)
          }, 1500)
        }
      } catch (error) {
        setOutput(`Error: ${error}`)
        setIsRunning(false)
      }
    }, 1000)
  }

  const handleStop = () => {
    setIsRunning(false)
  }

  const handleReset = () => {
    setCode(exercise.starterCode)
    setOutput("")
    setTestsPassed(false)
  }

  return (
    <div className="h-full flex flex-col">
      {/* Toolbar */}
      <div className="flex items-center gap-2 px-4 py-3 bg-gray-50 border-b border-gray-200">
        <Button
          onClick={handleRun}
          disabled={isRunning}
          className="bg-indigo-600 hover:bg-indigo-700 text-white"
          size="sm"
        >
          <Play className="h-4 w-4 mr-2" strokeWidth={1.5} />
          Run
        </Button>
        <Button
          onClick={handleStop}
          disabled={!isRunning}
          variant="outline"
          size="sm"
        >
          <Square className="h-4 w-4 mr-2" strokeWidth={1.5} />
          Stop
        </Button>
        <Button
          onClick={handleReset}
          variant="outline"
          size="sm"
        >
          <RotateCcw className="h-4 w-4 mr-2" strokeWidth={1.5} />
          Reset
        </Button>
      </div>

      {/* Monaco Editor */}
      <div className="flex-1 relative">
        {!isMonacoMounted && (
          <div className="absolute inset-0 flex items-center justify-center bg-white z-20">
            <div className="text-gray-400 text-sm">Loading editor...</div>
          </div>
        )}
        <Editor
          height="100%"
          defaultLanguage="python"
          value={code}
          onChange={(value) => setCode(value || "")}
          onMount={() => setIsMonacoMounted(true)}
          theme="light"
          options={{
            minimap: { enabled: false },
            fontSize: 14,
            lineNumbers: "on",
            scrollBeyondLastLine: false,
            automaticLayout: true,
            tabSize: 4,
            wordWrap: "on",
            fontFamily: "Consolas, 'Courier New', monospace",
          }}
        />
      </div>

      {/* Console Output */}
      {output && (
        <div className="border-t border-gray-200 bg-gray-900 p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-emerald-400 text-sm font-semibold">Output:</span>
            {testsPassed !== null && (
              <span className={cn(
                "text-xs font-mono px-2 py-1 rounded",
                testsPassed ? "bg-emerald-500 text-white" : "bg-red-500 text-white"
              )}>
                {testsPassed ? "All tests passed!" : "Tests failed"}
              </span>
            )}
          </div>
          <pre className="font-mono text-sm text-gray-100 whitespace-pre-wrap">
            {output}
          </pre>
        </div>
      )}

      {/* Running Indicator */}
      {isRunning && !output && (
        <div className="border-t border-gray-200 bg-gray-900 p-4">
          <div className="flex items-center gap-3 text-emerald-400">
            <div className="animate-spin h-4 w-4 border-2 border-emerald-400 border-t-transparent rounded-full" />
            <span className="text-sm">Running code...</span>
          </div>
        </div>
      )}
    </div>
  )
}
