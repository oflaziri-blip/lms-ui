/**
 * Lesson 02 - IMPROVED SLIDES 01-10
 * Gold Standard Pedagogy + Viewport-Fitted Layout
 * Topic: Variables (Memory Containers)
 */

import React from 'react';
import { Database, Save, HardDrive, AlertTriangle, CheckCircle, Box, Tag, Zap, User, Wrench } from 'lucide-react';
import { Terminal, CodeLine } from './Terminal';
import { CharacterQuote, ProTip } from './CharacterQuote';

// ============================================================================
// SLIDE 01: TITLE CARD (Mission Briefing)
// ============================================================================
export function Lesson02ImprovedSlide01() {
    return (
        <div className="h-screen w-full overflow-hidden bg-gradient-to-br from-cyan-950 via-blue-950 to-slate-950 text-white relative flex items-center justify-center">
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

            <div className="relative z-10 text-center space-y-6 px-8">
                <div className="flex justify-center gap-8 mb-6">
                    <Database className="w-14 h-14 text-cyan-400 animate-pulse" />
                    <HardDrive className="w-14 h-14 text-[#53d22d]" />
                    <Save className="w-14 h-14 text-cyan-400 animate-pulse" />
                </div>

                <div className="space-y-3">
                    <h1 className="text-6xl font-bold bg-gradient-to-r from-cyan-400 via-[#53d22d] to-cyan-400 bg-clip-text text-transparent">
                        OPERATION CHRONOS
                    </h1>
                    <h2 className="text-4xl font-light text-cyan-300">
                        MEMORY CONTAINERS
                    </h2>
                </div>

                <div className="mt-8 space-y-2 text-gray-300 font-mono text-sm">
                    <div className="flex items-center justify-center gap-3">
                        <span className="text-cyan-400">▸</span>
                        <span><span className="text-gray-500">MISSION CODE:</span> L02-VARS</span>
                    </div>
                    <div className="flex items-center justify-center gap-3">
                        <span className="text-cyan-400">▸</span>
                        <span><span className="text-gray-500">CLEARANCE:</span> Cadet</span>
                    </div>
                    <div className="flex items-center justify-center gap-3">
                        <span className="text-cyan-400">▸</span>
                        <span><span className="text-gray-500">OBJECTIVE:</span> Data Persistence</span>
                    </div>
                </div>

                <div className="mt-10 inline-block">
                    <div className="px-6 py-2 border-2 border-cyan-500/50 rounded-lg bg-cyan-500/10 backdrop-blur">
                        <span className="text-cyan-400 font-mono text-xs tracking-wider">
                            ALLOCATING MEMORY BLOCKS...
                        </span>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-3 bg-black/30 backdrop-blur-sm border-t border-cyan-500/30">
                <div className="flex items-center justify-between text-xs font-mono text-gray-400">
                    <div>CHRONOS MEMORY INTERFACE v2.0</div>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-[#53d22d] animate-pulse" />
                        <span>SYSTEM ONLINE</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

// ============================================================================
// SLIDE 02: CHARACTER INTRODUCTION
// ============================================================================
export function Lesson02ImprovedSlide02() {
    return (
        <div className="h-screen w-full overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-950 text-white relative flex items-center justify-center">
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'linear-gradient(cyan 1px, transparent 1px), linear-gradient(90deg, cyan 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }} />
            </div>

            <div className="relative z-10 max-w-4xl w-full px-8">
                <h1 className="text-4xl font-bold text-cyan-400 mb-8 text-center">YOUR MISSION TEAM</h1>

                <div className="grid grid-cols-2 gap-6">
                    {/* Commander Aria */}
                    <div className="p-6 bg-cyan-500/10 border-2 border-cyan-500/30 rounded-xl">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-16 h-16 rounded-full bg-cyan-500/20 flex items-center justify-center">
                                <User className="w-8 h-8 text-cyan-400" />
                            </div>
                            <div>
                                <h3 className="text-cyan-400 font-bold text-xl">Commander Aria</h3>
                                <p className="text-gray-500 text-xs uppercase tracking-wide">Mission Overseer</p>
                            </div>
                        </div>
                        <p className="text-gray-300 italic text-sm leading-relaxed">
                            "Agent, today we're diving into the system's memory grid. Think of it as a vast data vault with billions of storage cells."
                        </p>
                    </div>

                    {/* Chief Engineer Kael */}
                    <div className="p-6 bg-[#53d22d]/10 border-2 border-[#53d22d]/30 rounded-xl">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-16 h-16 rounded-full bg-[#53d22d]/20 flex items-center justify-center">
                                <Wrench className="w-8 h-8 text-[#53d22d]" />
                            </div>
                            <div>
                                <h3 className="text-[#53d22d] font-bold text-xl">Chief Engineer Kael</h3>
                                <p className="text-gray-500 text-xs uppercase tracking-wide">Protocol Architect</p>
                            </div>
                        </div>
                        <p className="text-gray-300 italic text-sm leading-relaxed">
                            "Variables are how you label those cells. Master this protocol, and you control data flow across the entire system."
                        </p>
                    </div>
                </div>

                <div className="mt-8 p-4 bg-slate-800/50 border border-slate-700 rounded-lg text-center">
                    <p className="text-gray-400 text-sm">
                        <span className="text-cyan-400 font-bold">Aria</span> will provide real-world context and analogies.
                        <br />
                        <span className="text-[#53d22d] font-bold">Kael</span> will share technical insights and pro tips.
                    </p>
                </div>
            </div>
        </div>
    );
}

// ============================================================================
// SLIDE 03: PREVIOUS LESSON REVIEW
// ============================================================================
export function Lesson02ImprovedSlide03() {
    return (
        <div className="h-screen w-full overflow-hidden bg-gradient-to-br from-cyan-950 via-blue-950 to-slate-950 text-white relative flex items-center justify-center">
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(#06b6d4 1px, transparent 1px)',
                    backgroundSize: '30px 30px'
                }} />
            </div>

            <div className="relative z-10 max-w-4xl w-full px-8">
                <div className="flex items-center gap-3 mb-6">
                    <Zap className="w-8 h-8 text-yellow-500" />
                    <h1 className="text-4xl font-bold text-yellow-500">QUICK REVIEW: print()</h1>
                </div>

                <p className="text-xl text-gray-300 mb-8">
                    Last mission, you learned to output data to the terminal:
                </p>

                <Terminal variant="success" title="Lesson 01 Recap">
                    <CodeLine>print("Hello, Chronos!")</CodeLine>
                    <CodeLine output>Hello, Chronos!</CodeLine>
                    <CodeLine>&nbsp;</CodeLine>
                    <CodeLine>print(5 + 3)</CodeLine>
                    <CodeLine output>8</CodeLine>
                    <CodeLine>&nbsp;</CodeLine>
                    <CodeLine>print("=" * 20)</CodeLine>
                    <CodeLine output>====================</CodeLine>
                </Terminal>

                <div className="mt-8 p-6 bg-red-500/10 border-l-4 border-red-500 rounded-r-xl">
                    <h3 className="text-red-400 font-bold text-lg mb-2">⚠️ THE PROBLEM</h3>
                    <p className="text-gray-300">
                        The data <span className="text-red-400 font-bold">disappears</span> after printing!
                        <br />
                        It's like writing on a self-erasing whiteboard.
                    </p>
                </div>

                <div className="mt-6 text-center">
                    <p className="text-cyan-400 font-mono text-sm">
                        → We need a way to <span className="text-[#53d22d] font-bold">SAVE</span> our data...
                    </p>
                </div>
            </div>
        </div>
    );
}

// ============================================================================
// SLIDE 04: PROBLEM STATEMENT (Detailed)
// ============================================================================
export function Lesson02ImprovedSlide04() {
    return (
        <div className="h-screen w-full overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-950 text-white relative flex items-center justify-center">
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'linear-gradient(cyan 1px, transparent 1px), linear-gradient(90deg, cyan 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }} />
            </div>

            <div className="relative z-10 max-w-5xl w-full px-8">
                <div className="flex items-center gap-3 mb-6">
                    <AlertTriangle className="w-8 h-8 text-red-500" />
                    <h1 className="text-4xl font-bold text-cyan-400">THE PROBLEM</h1>
                </div>

                <p className="text-xl text-gray-300 mb-8">
                    Agent, we have a <span className="text-red-400 font-bold">critical issue</span>.
                    Our calculations keep <span className="text-red-400">disappearing</span>!
                </p>

                <div className="grid grid-cols-2 gap-6 mb-8">
                    <div>
                        <h3 className="text-cyan-400 font-bold mb-3 flex items-center gap-2">
                            <Zap className="w-5 h-5" />
                            ATTEMPT 1
                        </h3>
                        <Terminal variant="error" title="Python Console">
                            <CodeLine>10 + 5</CodeLine>
                            <CodeLine output>15</CodeLine>
                            <CodeLine>print("Result:")</CodeLine>
                            <CodeLine output className="text-red-400">Result:</CodeLine>
                            <CodeLine className="text-gray-500"># Where did 15 go? 😢</CodeLine>
                        </Terminal>
                    </div>

                    <div>
                        <h3 className="text-cyan-400 font-bold mb-3 flex items-center gap-2">
                            <Zap className="w-5 h-5" />
                            ATTEMPT 2
                        </h3>
                        <Terminal variant="error" title="Python Console">
                            <CodeLine>100 * 3</CodeLine>
                            <CodeLine output>300</CodeLine>
                            <CodeLine>200 + 50</CodeLine>
                            <CodeLine output>250</CodeLine>
                            <CodeLine className="text-gray-500"># Both results lost! 💥</CodeLine>
                        </Terminal>
                    </div>
                </div>

                <div className="p-5 rounded-xl bg-red-500/10 border-2 border-red-500/30">
                    <h3 className="text-red-400 font-bold text-lg mb-2">⚠️ THE ISSUE</h3>
                    <p className="text-gray-300 leading-relaxed">
                        Python calculates the answer, shows it to you, then <span className="text-red-400 font-bold">immediately forgets it</span>.
                    </p>
                </div>
            </div>
        </div>
    );
}

// ============================================================================
// SLIDE 05: CONCEPTUAL FOUNDATION (RAM Metaphor)
// ============================================================================
export function Lesson02ImprovedSlide05() {
    return (
        <div className="h-screen w-full overflow-hidden bg-gradient-to-br from-cyan-950 via-blue-950 to-slate-950 text-white relative flex items-center justify-center">
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'linear-gradient(#53d22d 1px, transparent 1px), linear-gradient(90deg, #53d22d 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }} />
            </div>

            <div className="relative z-10 max-w-4xl w-full px-8">
                <h1 className="text-4xl font-bold text-[#53d22d] mb-6 text-center">HOW SYSTEM MEMORY WORKS</h1>

                <div className="mb-8 p-6 bg-slate-900/50 border border-slate-700 rounded-xl">
                    <h2 className="text-2xl text-cyan-400 mb-4">RAM (Random Access Memory)</h2>
                    <p className="text-gray-300 text-lg leading-relaxed mb-4">
                        Think of RAM as a <span className="text-[#53d22d] font-bold">massive data vault</span> with billions of storage cells.
                    </p>
                    <div className="grid grid-cols-3 gap-4 text-sm">
                        <div className="p-3 bg-cyan-500/10 border border-cyan-500/30 rounded">
                            <div className="text-cyan-400 font-bold mb-1">📍 ADDRESS</div>
                            <div className="text-gray-400 font-mono text-xs">0x7FFF5E4C</div>
                        </div>
                        <div className="p-3 bg-blue-500/10 border border-blue-500/30 rounded">
                            <div className="text-blue-400 font-bold mb-1">📦 CONTENTS</div>
                            <div className="text-gray-400">The actual data</div>
                        </div>
                        <div className="p-3 bg-[#53d22d]/10 border border-[#53d22d]/30 rounded">
                            <div className="text-[#53d22d] font-bold mb-1">🏷️ LABEL</div>
                            <div className="text-gray-400">Your variable!</div>
                        </div>
                    </div>
                </div>

                <CharacterQuote character="aria">
                    <p className="italic">
                        "Imagine a vault with millions of cells. Each cell has a number (memory address).
                        Without labels, you'd need to remember: 'My data is in cell #7,548,293,847'. IMPOSSIBLE!
                        Variables are <span className="text-cyan-400 font-bold">tags</span> you attach to cells so you can find your data."
                    </p>
                </CharacterQuote>

                <div className="mt-6 text-center text-yellow-400 text-sm font-mono">
                    ⚠️ When you power down... RAM is erased!
                </div>
            </div>
        </div>
    );
}

// Slides 06-10 will continue in next file...
