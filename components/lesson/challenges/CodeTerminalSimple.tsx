"use client"

import * as React from "react"
import { CodeExercise, DebugExercise } from "@/lib/types/lesson"
import { cn } from "@/lib/utils"
import dynamic from "next/dynamic"

const Editor = dynamic(() => import("@monaco-editor/react"), { ssr: false })

interface CodeTerminalSimpleProps {
  exercise: CodeExercise | DebugExercise
  onComplete: (passed: boolean, xpEarned: number) => void
  onCodeChange?: (code: string) => void
  onRun?: () => void
}

export function CodeTerminalSimple({ exercise, onComplete, onCodeChange, onRun }: CodeTerminalSimpleProps) {
  const [code, setCode] = React.useState(exercise.starterCode)
  const [isMonacoMounted, setIsMonacoMounted] = React.useState(false)

  const handleCodeChange = (value: string | undefined) => {
    const newCode = value || ""
    setCode(newCode)
    onCodeChange?.(newCode)
  }

  return (
    <div className="h-full w-full relative bg-white">
      {!isMonacoMounted && (
        <div className="absolute inset-0 flex items-center justify-center bg-white z-20">
          <div className="text-gray-400 text-sm">Loading editor...</div>
        </div>
      )}
      <Editor
        height="100%"
        defaultLanguage="python"
        value={code}
        onChange={handleCodeChange}
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
  )
}
