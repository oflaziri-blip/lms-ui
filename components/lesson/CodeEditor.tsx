"use client"

import * as React from "react"
import dynamic from "next/dynamic"
import { cn } from "@/lib/utils"

// Dynamically import Monaco Editor to avoid SSR issues
const MonacoEditor = dynamic(
  () => import("@monaco-editor/react").then((mod) => mod.Editor),
  { ssr: false }
)

interface CodeEditorProps {
  value: string
  onChange?: (value: string | undefined) => void
  language?: string
  theme?: string
  className?: string
  readOnly?: boolean
}

export function CodeEditor({
  value,
  onChange,
  language = "python",
  theme = "vs-dark",
  className,
  readOnly = false,
}: CodeEditorProps) {
  return (
    <div className={cn("h-full w-full", className)}>
      <MonacoEditor
        height="100%"
        language={language}
        theme={theme}
        value={value}
        onChange={onChange}
        options={{
          readOnly,
          minimap: { enabled: false },
          fontSize: 14,
          lineNumbers: "on",
          scrollBeyondLastLine: false,
          automaticLayout: true,
          tabSize: 2,
          wordWrap: "on",
          fontFamily: "var(--font-jetbrains-mono)",
        }}
      />
    </div>
  )
}
