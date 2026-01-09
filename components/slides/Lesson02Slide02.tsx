/**
 * Lesson 02 - Slide 02: The Problem
 * Data Vanishes
 */

import React from 'react';
import { AlertTriangle, Zap } from 'lucide-react';
import { Terminal, CodeLine } from './Terminal';

export function Lesson02Slide02() {
    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-950 text-white p-12 relative overflow-hidden">
            {/* Grid Background */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'linear-gradient(cyan 1px, transparent 1px), linear-gradient(90deg, cyan 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }} />
            </div>

            <div className="relative z-10 max-w-5xl mx-auto">
                {/* Header */}
                <div className="flex items-center gap-3 mb-8">
                    <AlertTriangle className="w-8 h-8 text-red-500" />
                    <h1 className="text-5xl font-bold text-cyan-400">THE PROBLEM</h1>
                </div>

                <p className="text-2xl text-gray-300 mb-12">
                    Agent, we have a <span className="text-red-400 font-bold">critical issue</span>.
                    Our calculations keep <span className="text-red-400">disappearing</span>!
                </p>

                {/* Problem Demonstration */}
                <div className="grid grid-cols-2 gap-6 mb-12">
                    <div>
                        <h3 className="text-cyan-400 font-bold mb-4 flex items-center gap-2">
                            <Zap className="w-5 h-5" />
                            ATTEMPT 1
                        </h3>
                        <Terminal variant="error" title="Python Console">
                            <CodeLine prompt=">>>">10 + 5</CodeLine>
                            <CodeLine output>15</CodeLine>
                            <CodeLine prompt=">>>">print("Result:")</CodeLine>
                            <CodeLine output className="text-red-400">Result:</CodeLine>
                            <CodeLine className="text-gray-500"># Where did 15 go? 😢</CodeLine>
                        </Terminal>
                    </div>

                    <div>
                        <h3 className="text-cyan-400 font-bold mb-4 flex items-center gap-2">
                            <Zap className="w-5 h-5" />
                            ATTEMPT 2
                        </h3>
                        <Terminal variant="error" title="Python Console">
                            <CodeLine prompt=">>>">100 * 3</CodeLine>
                            <CodeLine output>300</CodeLine>
                            <CodeLine prompt=">>>">200 + 50</CodeLine>
                            <CodeLine output>250</CodeLine>
                            <CodeLine className="text-gray-500"># Both results lost! 💥</CodeLine>
                        </Terminal>
                    </div>
                </div>

                {/* Key Insight */}
                <div className="p-6 rounded-xl bg-red-500/10 border-2 border-red-500/30">
                    <h3 className="text-red-400 font-bold text-xl mb-3">⚠️ THE ISSUE</h3>
                    <p className="text-gray-300 text-lg leading-relaxed">
                        Python calculates the answer, shows it to you, then <span className="text-red-400 font-bold">immediately forgets it</span>.
                        It's like writing on a whiteboard that erases itself instantly!
                    </p>
                </div>

                {/* Bottom hint */}
                <div className="mt-12 text-center">
                    <p className="text-cyan-400 font-mono text-sm">
                        → We need a way to <span className="text-[#53d22d] font-bold">SAVE</span> our data...
                    </p>
                </div>
            </div>
        </div>
    );
}
