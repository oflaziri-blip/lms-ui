"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { 
  FileText, 
  History, 
  Settings, 
  ClipboardList, 
  RotateCcw, 
  Maximize2,
  Minimize2
} from "lucide-react"
import { cn } from "@/lib/utils"

interface FloatingToolbarProps {
  showFiles: boolean
  showAssignment: boolean
  onToggleFiles: () => void
  onToggleAssignment: () => void
  onReset?: () => void
  className?: string
}

export function FloatingToolbar({
  showFiles,
  showAssignment,
  onToggleFiles,
  onToggleAssignment,
  onReset,
  className
}: FloatingToolbarProps) {
  return (
    <div className={cn(
      "flex items-center gap-2 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg shadow-lg border border-gray-200",
      className
    )}>
      {/* Files Toggle */}
      <Button
        variant="ghost"
        size="icon"
        onClick={onToggleFiles}
        className={cn(
          "rounded-full w-10 h-10 transition-colors",
          showFiles ? "bg-purple-100 text-purple-700" : "text-gray-600 hover:text-purple-600 hover:bg-purple-50"
        )}
        title="Toggle Files"
      >
        <FileText className="h-5 w-5" strokeWidth={1.5} />
      </Button>

      {/* History */}
      <Button
        variant="ghost"
        size="icon"
        className="rounded-full w-10 h-10 text-gray-600 hover:text-purple-600 hover:bg-purple-50"
        title="History"
      >
        <History className="h-5 w-5" strokeWidth={1.5} />
      </Button>

      {/* Settings */}
      <Button
        variant="ghost"
        size="icon"
        className="rounded-full w-10 h-10 text-gray-600 hover:text-purple-600 hover:bg-purple-50"
        title="Settings"
      >
        <Settings className="h-5 w-5" strokeWidth={1.5} />
      </Button>

      {/* Assignment Toggle - KEY FEATURE */}
      <Button
        variant="ghost"
        size="icon"
        onClick={onToggleAssignment}
        className={cn(
          "rounded-full w-10 h-10 transition-colors",
          showAssignment ? "bg-purple-100 text-purple-700" : "text-gray-600 hover:text-purple-600 hover:bg-purple-50"
        )}
        title={showAssignment ? "Hide Assignment" : "Show Assignment"}
      >
        <ClipboardList className="h-5 w-5" strokeWidth={1.5} />
      </Button>

      {/* Reset */}
      {onReset && (
        <Button
          variant="ghost"
          size="icon"
          onClick={onReset}
          className="rounded-full w-10 h-10 text-gray-600 hover:text-purple-600 hover:bg-purple-50"
          title="Reset Code"
        >
          <RotateCcw className="h-5 w-5" strokeWidth={1.5} />
        </Button>
      )}

      {/* Maximize/Minimize */}
      <Button
        variant="ghost"
        size="icon"
        onClick={onToggleAssignment}
        className="rounded-full w-10 h-10 text-gray-600 hover:text-purple-600 hover:bg-purple-50"
        title={showAssignment ? "Maximize Editor" : "Show Assignment"}
      >
        {showAssignment ? (
          <Maximize2 className="h-5 w-5" strokeWidth={1.5} />
        ) : (
          <Minimize2 className="h-5 w-5" strokeWidth={1.5} />
        )}
      </Button>
    </div>
  )
}
