"use client"

import * as React from "react"
import { Lightbulb, School, Play } from "lucide-react"
import { Button } from "@/components/ui/button"

interface InstructionsPanelProps {
    title: string
    description: string
    tasks?: string[]
    onRunCode?: () => void
    isRunning?: boolean
}

export function InstructionsPanel({
    title,
    description,
    tasks = [],
    onRunCode,
    isRunning = false
}: InstructionsPanelProps) {
    const [completedTasks, setCompletedTasks] = React.useState<Set<number>>(new Set())

    const toggleTask = (index: number) => {
        setCompletedTasks(prev => {
            const newSet = new Set(prev)
            if (newSet.has(index)) {
                newSet.delete(index)
            } else {
                newSet.add(index)
            }
            return newSet
        })
    }

    return (
        <aside className="w-[25%] min-w-[320px] flex flex-col z-10 glass-panel border-r border-[#1e293b] h-full">
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {/* Section Header */}
                <div>
                    <div className="inline-flex items-center gap-2 px-2 py-1 rounded bg-[#53d22d]/10 border border-[#53d22d]/20 text-[#53d22d] text-xs font-mono font-bold uppercase tracking-wider mb-3">
                        <School className="w-3.5 h-3.5" />
                        Objective
                    </div>
                    <h2 className="text-2xl font-display font-bold text-white mb-2 leading-tight">
                        {title}
                    </h2>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        {description}
                    </p>
                </div>

                {/* Info Card - Quick Tip */}
                <div className="p-4 rounded-xl bg-[#0f172a]/80 border border-[#8b5cf6]/20 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
                        <Lightbulb className="w-10 h-10 text-[#8b5cf6]" />
                    </div>
                    <h3 className="text-[#8b5cf6] font-bold text-sm mb-2 flex items-center gap-2">
                        <Lightbulb className="w-4 h-4" />
                        Quick Tip
                    </h3>
                    <p className="text-xs text-gray-300 leading-relaxed">
                        Use the <code className="text-[#8b5cf6] bg-[#8b5cf6]/10 px-1 rounded">print()</code> function to display output.
                        Remember to use quotes for strings!
                    </p>
                </div>

                {/* Task Checklist */}
                {tasks.length > 0 && (
                    <div>
                        <h3 className="text-white text-sm font-bold uppercase tracking-wider mb-4 border-b border-[#1e293b] pb-2">
                            Tasks
                        </h3>
                        <div className="space-y-3">
                            {tasks.map((task, index) => (
                                <label key={index} className="flex gap-x-3 items-start group cursor-pointer">
                                    <div className="relative flex items-center">
                                        <input
                                            type="checkbox"
                                            checked={completedTasks.has(index)}
                                            onChange={() => toggleTask(index)}
                                            className="peer h-5 w-5 rounded border-[#334155] border-2 bg-transparent text-[#53d22d] focus:ring-0 focus:ring-offset-0 transition-all checked:bg-[#53d22d] checked:border-[#53d22d] cursor-pointer"
                                        />
                                    </div>
                                    <span className={`text-gray-300 text-sm font-medium transition-colors pt-0.5 ${completedTasks.has(index) ? 'text-white line-through decoration-gray-500' : ''
                                        }`}>
                                        {task}
                                    </span>
                                </label>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* Sticky Action Button */}
            <div className="p-6 border-t border-[#1e293b] bg-[#080c14]/80 backdrop-blur-sm">
                <Button
                    onClick={onRunCode}
                    disabled={isRunning}
                    className="w-full flex items-center justify-center gap-3 rounded-lg h-12 bg-[#8b5cf6] hover:bg-[#7c26cb] text-white text-sm font-bold tracking-wide transition-all duration-300 transform active:scale-[0.98]"
                    style={{ boxShadow: '0 0 5px rgba(139, 43, 226, 0.5), 0 0 20px rgba(139, 43, 226, 0.3)' }}
                >
                    <Play className="w-5 h-5" />
                    {isRunning ? 'RUNNING...' : 'RUN CODE'}
                    <span className="opacity-60 font-normal text-xs ml-1">[Ctrl+Enter]</span>
                </Button>
            </div>

            <style jsx>{`
        .glass-panel {
          background: rgba(16, 24, 24, 0.6);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
        }
      `}</style>
        </aside>
    )
}
