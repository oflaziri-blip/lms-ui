"use client"

import * as React from "react"
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels"
import { cn } from "@/lib/utils"

interface SplitPaneProps {
  left: React.ReactNode
  right: React.ReactNode
  defaultLeftSize?: number
  className?: string
}

export function SplitPane({ left, right, defaultLeftSize = 50, className }: SplitPaneProps) {
  return (
    <>
      {/* Desktop: Horizontal Split */}
      <div className="hidden md:block h-full w-full">
        <PanelGroup direction="horizontal" className={cn("h-full w-full", className)}>
          <Panel defaultSize={defaultLeftSize} minSize={30} className="overflow-auto">
            {left}
          </Panel>
          <PanelResizeHandle className="w-2 bg-border hover:bg-primary/20 transition-colors cursor-col-resize group">
            <div className="h-full w-1 bg-border group-hover:bg-primary transition-colors" />
          </PanelResizeHandle>
          <Panel defaultSize={100 - defaultLeftSize} minSize={30} className="overflow-auto">
            {right}
          </Panel>
        </PanelGroup>
      </div>

      {/* Mobile: Vertical Stack */}
      <div className="md:hidden flex flex-col h-full w-full">
        <div className="flex-1 overflow-auto border-b">{left}</div>
        <div className="flex-1 overflow-auto">{right}</div>
      </div>
    </>
  )
}
