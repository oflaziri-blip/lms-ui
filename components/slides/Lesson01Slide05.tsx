/**
 * Lesson 01 - Slide 05: The Terminal
 * Introduction to the terminal control center
 */

import React from 'react';
import { Terminal as TerminalIcon, Code2, Cpu } from 'lucide-react';

export function Lesson01Slide05() {
    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-gray-950 via-slate-900 to-black text-white flex flex-col items-center justify-center p-12">
            <h1 className="text-5xl font-bold mb-8 text-cyan-400">
                THE CONTROL CENTER
            </h1>

            <p className="text-2xl text-gray-300 mb-12 text-center max-w-3xl">
                The <span className="text-cyan-400 font-bold">Terminal</span> is where all commands are executed.
            </p>

            {/* Terminal Visualization */}
            <div className="w-full max-w-4xl mb-12">
                <div className="border-2 border-green-500/30 rounded-lg overflow-hidden bg-black/90 backdrop-blur shadow-2xl">
                    {/* Terminal Header */}
                    <div className="bg-gray-900/70 px-4 py-2 border-b border-gray-700/50 flex items-center gap-2">
                        <div className="flex gap-1.5">
                            <div className="w-3 h-3 rounded-full bg-red-500/80" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                            <div className="w-3 h-3 rounded-full bg-green-500/80" />
                        </div>
                        <span className="text-gray-400 text-sm font-mono ml-2">Terminal - Chronos One</span>
                    </div>

                    {/* Terminal Content with blinking cursor */}
                    <div className="p-8 font-mono text-green-400 relative">
                        <div className="flex items-center gap-2">
                            <span className="text-cyan-400">$</span>
                            <span className="animate-pulse">█</span>
                        </div>

                        {/* Matrix-style rain effect in background */}
                        <div className="absolute inset-0 opacity-5 overflow-hidden pointer-events-none">
                            {[...Array(10)].map((_, i) => (
                                <div
                                    key={i}
                                    className="absolute text-green-500 font-mono text-xs"
                                    style={{
                                        left: `${i * 10}%`,
                                        animation: `fall ${3 + Math.random() * 2}s linear infinite`,
                                        animationDelay: `${Math.random() * 2}s`
                                    }}
                                >
                                    {Array.from({ length: 20 }, () =>
                                        Math.random() > 0.5 ? '1' : '0'
                                    ).join('\n')}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Analogy */}
            <div className="max-w-3xl text-center space-y-6 text-lg">
                <p className="text-xl text-gray-300">
                    Think of it as the <span className="text-cyan-400 font-bold">cockpit controls</span> for your code.
                </p>

                <div className="grid grid-cols-3 gap-6 mt-8">
                    <div className="flex flex-col items-center gap-3 p-4 border border-cyan-500/30 rounded-lg bg-cyan-950/10">
                        <Cpu className="w-12 h-12 text-cyan-400" />
                        <p className="text-sm">Every command you type is <span className="text-cyan-400 font-bold">instant</span></p>
                    </div>
                    <div className="flex flex-col items-center gap-3 p-4 border border-red-500/30 rounded-lg bg-red-950/10">
                        <Code2 className="w-12 h-12 text-red-400" />
                        <p className="text-sm">One mistake = <span className="text-red-400 font-bold">System crash</span></p>
                    </div>
                    <div className="flex flex-col items-center gap-3 p-4 border border-emerald-500/30 rounded-lg bg-emerald-950/10">
                        <TerminalIcon className="w-12 h-12 text-emerald-400" />
                        <p className="text-sm">Perfect syntax = <span className="text-emerald-400 font-bold">Power</span></p>
                    </div>
                </div>
            </div>

            <style jsx>{`
        @keyframes fall {
          from { transform: translateY(-100%); }
          to { transform: translateY(100vh); }
        }
      `}</style>
        </div>
    );
}
