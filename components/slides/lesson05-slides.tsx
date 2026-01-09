/**
 * Lesson 05 - Base Slides (01-03, 15)
 * Title, Objectives, if Statement, Checkpoint
 */

import React from 'react';
import { GitBranch, Target, Code, Trophy } from 'lucide-react';
import { Terminal, CodeLine } from './Terminal';

// Slide 01: Title Card
export function Lesson05Slide01() {
    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-cyan-950 via-blue-950 to-slate-950 text-white flex items-center justify-center p-12 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'linear-gradient(cyan 1px, transparent 1px), linear-gradient(90deg, cyan 1px, transparent 1px)',
                    backgroundSize: '50px 50px'
                }} />
            </div>

            <div className="absolute inset-0 overflow-hidden">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 2}s`,
                            opacity: Math.random() * 0.5 + 0.2
                        }}
                    />
                ))}
            </div>

            <div className="relative z-10 text-center space-y-8">
                <div className="flex justify-center gap-8 mb-8">
                    <GitBranch className="w-16 h-16 text-cyan-400 animate-pulse" />
                    <Code className="w-16 h-16 text-[#53d22d]" />
                    <GitBranch className="w-16 h-16 text-cyan-400 animate-pulse" />
                </div>

                <div className="space-y-4">
                    <h1 className="text-7xl font-bold bg-gradient-to-r from-cyan-400 via-[#53d22d] to-cyan-400 bg-clip-text text-transparent animate-pulse">
                        OPERATION CHRONOS
                    </h1>
                    <h2 className="text-5xl font-light text-cyan-300">
                        DECISION PROTOCOLS
                    </h2>
                    <h3 className="text-3xl font-light text-gray-400">
                        Conditional Logic & Branching
                    </h3>
                </div>

                <div className="mt-12 space-y-3 text-gray-300 font-mono">
                    <div className="flex items-center justify-center gap-4">
                        <span className="text-cyan-400">▸</span>
                        <span><span className="text-gray-500">MISSION CODE:</span> L05-CONDITIONALS</span>
                    </div>
                    <div className="flex items-center justify-center gap-4">
                        <span className="text-cyan-400">▸</span>
                        <span><span className="text-gray-500">CLEARANCE LEVEL:</span> Cadet</span>
                    </div>
                    <div className="flex items-center justify-center gap-4">
                        <span className="text-cyan-400">▸</span>
                        <span><span className="text-gray-500">OBJECTIVE:</span> Intelligent Decision Making</span>
                    </div>
                </div>

                <div className="mt-16 inline-block">
                    <div className="px-8 py-3 border-2 border-cyan-500/50 rounded-lg bg-cyan-500/10 backdrop-blur">
                        <span className="text-cyan-400 font-mono text-sm tracking-wider">
                            INITIALIZING DECISION ENGINE...
                        </span>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/30 backdrop-blur-sm border-t border-cyan-500/30">
                <div className="flex items-center justify-between text-xs font-mono text-gray-400">
                    <div>CHRONOS DECISION SYSTEM v5.0</div>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-[#53d22d] animate-pulse" />
                        <span>LOGIC GATES ACTIVE</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Slide 02: Mission Objectives
export function Lesson05Slide02() {
    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-blue-950 via-slate-950 to-cyan-950 text-white p-12 relative overflow-hidden">
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'linear-gradient(cyan 1px, transparent 1px), linear-gradient(90deg, cyan 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }} />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto">
                <div className="flex items-center gap-3 mb-12">
                    <Target className="w-10 h-10 text-cyan-400" />
                    <h1 className="text-6xl font-bold text-cyan-400">MISSION OBJECTIVES</h1>
                </div>

                <div className="space-y-6">
                    {[
                        'Master the if statement',
                        'Use else for fallback logic',
                        'Implement elif for multi-path logic',
                        'Understand indentation rules',
                        'Build intelligent decision engines'
                    ].map((objective, i) => (
                        <div key={i} className="flex items-start gap-4 p-4 rounded-lg bg-cyan-500/10 border border-cyan-500/30">
                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 font-bold">
                                {i + 1}
                            </div>
                            <p className="text-xl text-gray-200 pt-1">{objective}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-12 p-8 rounded-xl bg-[#53d22d]/10 border-2 border-[#53d22d]/30">
                    <p className="text-2xl text-gray-200 text-center">
                        🎯 <span className="text-[#53d22d] font-bold">Mission Goal:</span> Teach Chronos to
                        <span className="text-cyan-400"> think</span> and make
                        <span className="text-cyan-400"> intelligent decisions</span>!
                    </p>
                </div>
            </div>
        </div>
    );
}

// Slide 03: The if Statement
export function Lesson05Slide03() {
    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-cyan-950 via-blue-950 to-slate-950 text-white p-12 relative overflow-hidden">
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'linear-gradient(#53d22d 1px, transparent 1px), linear-gradient(90deg, #53d22d 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }} />
            </div>

            <div className="relative z-10 max-w-5xl mx-auto">
                <h1 className="text-5xl font-bold text-[#53d22d] mb-8">THE IF STATEMENT</h1>

                <p className="text-2xl text-gray-300 mb-12">
                    The <code className="text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded">if</code> statement lets your code
                    <span className="text-[#53d22d] font-bold"> make decisions</span>:
                </p>

                <Terminal variant="success" title="Chronos Decision System">
                    <CodeLine>power_level = 9500</CodeLine>
                    <CodeLine>&nbsp;</CodeLine>
                    <CodeLine>if power_level &gt; 9000:</CodeLine>
                    <CodeLine>    print("Warning: Power level critical!")</CodeLine>
                    <CodeLine>&nbsp;</CodeLine>
                    <CodeLine output>Warning: Power level critical!</CodeLine>
                </Terminal>

                <div className="mt-12 p-8 rounded-xl bg-cyan-500/10 border-2 border-cyan-500/30">
                    <h3 className="text-cyan-400 font-bold text-2xl mb-6">SYNTAX RULES:</h3>
                    <div className="space-y-4 text-gray-300 text-lg">
                        <div className="flex items-start gap-3">
                            <span className="text-[#53d22d]">1.</span>
                            <p>Start with <code className="text-cyan-400">if</code> keyword</p>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="text-[#53d22d]">2.</span>
                            <p>Write a condition (must be True or False)</p>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="text-[#53d22d]">3.</span>
                            <p>End the line with a <code className="text-cyan-400">:</code> (colon)</p>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="text-[#53d22d]">4.</span>
                            <p><span className="text-yellow-400 font-bold">Indent</span> the code block (4 spaces)</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Slide 15: Checkpoint
export function Lesson05Slide15() {
    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-blue-950 via-slate-950 to-cyan-950 text-white p-12 flex items-center justify-center">
            <div className="max-w-4xl mx-auto text-center">
                <Trophy className="w-20 h-20 text-[#53d22d] mx-auto mb-8" />
                <h1 className="text-6xl font-bold text-[#53d22d] mb-8">CHECKPOINT REACHED</h1>
                <div className="p-8 rounded-xl bg-cyan-500/10 border-2 border-cyan-500/30">
                    <p className="text-3xl text-gray-200 mb-6">
                        You've mastered the fundamentals of conditional logic!
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-left mt-8">
                        {['if statements', 'else blocks', 'elif chains', 'Indentation rules'].map((item, i) => (
                            <div key={i} className="flex items-center gap-3 p-4 rounded bg-[#53d22d]/10">
                                <div className="w-6 h-6 rounded-full bg-[#53d22d]/30 flex items-center justify-center">
                                    <div className="w-3 h-3 rounded-full bg-[#53d22d]" />
                                </div>
                                <span className="text-xl">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="mt-8 p-4 rounded-lg bg-[#53d22d]/20 border border-[#53d22d]/50">
                    <p className="text-[#53d22d] font-bold text-lg">Continue to advanced patterns →</p>
                </div>
            </div>
        </div>
    );
}
