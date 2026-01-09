"use client"

import * as React from "react"
import { Terminal } from "lucide-react"

interface TerminalOutputPanelProps {
    output: string
    error: string | null
    isRunning?: boolean
    exitCode?: number | null
}

export function TerminalOutputPanel({
    output,
    error,
    isRunning = false,
    exitCode = null
}: TerminalOutputPanelProps) {
    const terminalRef = React.useRef<HTMLDivElement>(null)

    // Auto-scroll to bottom when output changes
    React.useEffect(() => {
        if (terminalRef.current) {
            terminalRef.current.scrollTop = terminalRef.current.scrollHeight
        }
    }, [output, error])

    return (
        <aside className="w-[25%] min-w-[280px] flex flex-col z-10 bg-[#05080c] h-full">
            {/* Console Header */}
            <div className="h-10 flex items-center justify-between px-4 bg-[#05080c] border-b border-[#1e293b]">
                <div className="text-gray-400 text-xs font-mono font-bold uppercase tracking-widest flex items-center gap-2">
                    <Terminal className="w-4 h-4" />
                    Terminal
                </div>
                <div className="flex items-center gap-2">
                    <span className="text-[10px] text-[#53d22d] font-mono uppercase">
                        {isRunning ? 'Running' : 'Connected'}
                    </span>
                    <div
                        className={`w-1.5 h-1.5 rounded-full ${isRunning ? 'bg-yellow-400' : 'bg-[#53d22d]'} animate-pulse`}
                        style={{ boxShadow: isRunning ? '0 0 6px rgba(250,204,21,0.8)' : '0 0 6px rgba(83,210,45,0.8)' }}
                    />
                </div>
            </div>

            {/* Console Output */}
            <div
                ref={terminalRef}
                className="flex-1 p-4 font-mono text-sm overflow-y-auto custom-scrollbar"
            >
                {/* Command Prompt */}
                <div className="text-gray-500 mb-2">root@chronos:~/lesson $ python3 main.py</div>

                {/* Output */}
                {output && (
                    <div className="text-white mb-1 whitespace-pre-wrap">{output}</div>
                )}

                {/* Error */}
                {error && (
                    <div className="text-red-400 mb-1 whitespace-pre-wrap border-l-2 border-red-400 pl-2 bg-red-400/5">
                        {error}
                    </div>
                )}

                {/* Exit Code */}
                {exitCode !== null && !isRunning && (
                    <div className={`${exitCode === 0 ? 'text-[#53d22d]/80 border-[#53d22d]' : 'text-red-400/80 border-red-400'} border-l-2 pl-2 text-xs py-1 mb-4 bg-opacity-5`}>
                        Process finished with exit code {exitCode}
                    </div>
                )}

                {/* Cursor */}
                {!isRunning && (
                    <div className="flex items-center text-[#53d22d] mt-2">
                        <span className="mr-2">&gt;&gt;&gt;</span>
                        <span className="w-2 h-4 bg-[#53d22d] opacity-50 animate-pulse"></span>
                    </div>
                )}

                {/* Running Indicator */}
                {isRunning && (
                    <div className="flex items-center text-yellow-400 mt-2">
                        <span className="mr-2">⚡</span>
                        <span className="animate-pulse">Executing...</span>
                    </div>
                )}
            </div>

            <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #080c14;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #1e293b;
          border-radius: 4px;
          border: 2px solid #080c14;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #334155;
        }
      `}</style>
        </aside>
    )
}
