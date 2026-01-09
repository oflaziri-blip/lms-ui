"use client"

import * as React from "react"
import { FileCode, File } from "lucide-react"

interface CodeEditorPanelProps {
    children: React.ReactNode
    fileName?: string
    language?: string
    lineNumber?: number
    columnNumber?: number
}

export function CodeEditorPanel({
    children,
    fileName = "main.py",
    language = "Python 3.10",
    lineNumber = 1,
    columnNumber = 1
}: CodeEditorPanelProps) {
    return (
        <section className="flex-1 flex flex-col z-10 bg-[#080c14] relative border-r border-[#1e293b]">
            {/* Editor Tabs */}
            <div className="h-10 flex items-end px-2 bg-[#05080c] border-b border-[#1e293b] gap-1">
                {/* Active Tab */}
                <div className="px-4 py-2 text-xs text-[#53d22d] bg-[#080c14] border-t-2 border-[#53d22d] rounded-t font-mono flex items-center gap-2 shadow-[0_-4px_12px_rgba(0,0,0,0.5)] z-10">
                    <FileCode className="w-3.5 h-3.5" />
                    {fileName}
                    <span className="w-2 h-2 rounded-full bg-[#53d22d] ml-2 animate-pulse"></span>
                </div>

                {/* Inactive Tab */}
                <div className="px-4 py-2 text-xs text-gray-500 hover:text-gray-300 hover:bg-[#0f172a] rounded-t font-mono flex items-center gap-2 transition-colors cursor-pointer">
                    <File className="w-3.5 h-3.5" />
                    utils.py
                </div>
            </div>

            {/* Code Area */}
            <div className="flex-1 overflow-hidden relative">
                {children}
            </div>

            {/* Editor Status Bar */}
            <div className="h-6 bg-[#53d22d]/5 border-t border-[#1e293b] flex items-center justify-between px-3 text-[10px] text-[#53d22d] font-mono uppercase tracking-wider">
                <div className="flex gap-4">
                    <span>{language}</span>
                    <span>UTF-8</span>
                </div>
                <div>
                    Ln {lineNumber}, Col {columnNumber}
                </div>
            </div>
        </section>
    )
}
