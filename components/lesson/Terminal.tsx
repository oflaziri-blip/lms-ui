"use client"

import * as React from "react"
import { Terminal as TerminalIcon, Play, Square } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface TerminalProps {
  output?: string
  isRunning?: boolean
  onRun?: () => void
  onStop?: () => void
  className?: string
}

export function Terminal({
  output = "",
  isRunning = false,
  onRun,
  onStop,
  className,
}: TerminalProps) {
  const terminalRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [output])

  return (
    <div className={cn("flex flex-col h-full bg-[#1e1e1e] text-green-400 font-mono", className)}>
      {/* Terminal Header */}
      <div className="flex items-center justify-between px-4 py-2 bg-[#252526] border-b border-[#3e3e42]">
        <div className="flex items-center gap-2">
          <TerminalIcon className="h-4 w-4" strokeWidth={1.5} />
          <span className="text-sm text-gray-300">Terminal</span>
          {isRunning && (
            <span className="flex items-center gap-1 text-xs text-yellow-400 animate-pulse-running">
              <span className="w-2 h-2 bg-yellow-400 rounded-full" />
              Running...
            </span>
          )}
        </div>
        <div className="flex items-center gap-2">
          {isRunning ? (
            <Button
              variant="ghost"
              size="sm"
              onClick={onStop}
              className="h-7 px-2 text-xs hover:bg-red-500/20 hover:text-red-400"
            >
              <Square className="h-3 w-3 mr-1" strokeWidth={1.5} />
              Stop
            </Button>
          ) : (
            <Button
              variant="ghost"
              size="sm"
              onClick={onRun}
              className="h-7 px-2 text-xs hover:bg-green-500/20 hover:text-green-400"
            >
              <Play className="h-3 w-3 mr-1" strokeWidth={1.5} />
              Run
            </Button>
          )}
        </div>
      </div>

      {/* Terminal Output */}
      <div
        ref={terminalRef}
        className="flex-1 overflow-y-auto px-4 py-3 text-sm"
        style={{ fontFamily: "var(--font-jetbrains-mono)" }}
      >
        <pre className="whitespace-pre-wrap break-words">
          {output || (
            <span className="text-gray-500">
              {"> "}Ready to run code...
            </span>
          )}
        </pre>
      </div>
    </div>
  )
}
