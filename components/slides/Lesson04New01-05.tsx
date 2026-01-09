import React from 'react';
import {
    Layers, Code2, Zap, Target, BookCheck, Trophy,
    Award, AlertTriangle, Lightbulb
} from 'lucide-react';
import { Terminal, CodeLine } from './Terminal';
import { CharacterQuote, ProTip, RealWorldExample } from './CharacterQuote';

// ============================================================================
// SLIDE 01: MISSION BRIEFING
// ============================================================================
export function Lesson04NewSlide01() {
    return (
        <div className="h-screen w-full overflow-hidden bg-gradient-to-br from-cyan-950 via-blue-950 to-slate-950 text-white flex items-center justify-center relative">
            <div className="absolute inset-0 opacity-5">
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
                    <Layers className="w-16 h-16 text-cyan-400 animate-pulse" />
                    <Code2 className="w-16 h-16 text-blue-400" />
                    <Layers className="w-16 h-16 text-cyan-400 animate-pulse" />
                </div>

                <div className="space-y-4">
                    <h1 className="text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent animate-pulse">
                        OPERATION CHRONOS
                    </h1>
                    <h2 className="text-5xl font-light text-blue-300">
                        NESTED PROTOCOLS
                    </h2>
                </div>

                <div className="mt-12 space-y-3 text-gray-300 font-mono">
                    <div className="flex items-center justify-center gap-4">
                        <span className="text-cyan-400">▸</span>
                        <span><span className="text-gray-500">MISSION CODE:</span> L04-NESTED</span>
                    </div>
                    <div className="flex items-center justify-center gap-4">
                        <span className="text-cyan-400">▸</span>
                        <span><span className="text-gray-500">CLEARANCE LEVEL:</span> Cadet</span>
                    </div>
                    <div className="flex items-center justify-center gap-4">
                        <span className="text-cyan-400">▸</span>
                        <span><span className="text-gray-500">OBJECTIVE:</span> Multi-Layer Operations</span>
                    </div>
                </div>

                <div className="mt-16 inline-block">
                    <div className="px-8 py-3 border-2 border-cyan-500/50 rounded-lg bg-cyan-500/10 backdrop-blur">
                        <span className="text-cyan-400 font-mono text-sm tracking-wider">
                            INITIALIZING NESTED SYSTEMS...
                        </span>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/30 backdrop-blur-sm border-t border-cyan-500/30">
                <div className="flex items-center justify-between text-xs font-mono text-gray-400">
                    <div>CHRONOS COMMAND INTERFACE v3.14</div>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
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
export function Lesson04NewSlide02() {
    return (
        <div className="h-screen w-full overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-950 text-white relative flex items-center justify-center">
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(#06b6d4 1px, transparent 1px)',
                    backgroundSize: '30px 30px'
                }} />
            </div>

            <div className="relative z-10 max-w-5xl w-full px-8">
                <h1 className="text-4xl font-bold text-cyan-400 mb-8 text-center">MEET YOUR INSTRUCTORS</h1>

                <div className="grid grid-cols-2 gap-8">
                    <CharacterQuote character="aria">
                        <p className="text-lg italic mb-3">
                            "Real systems combine operations—calculations within calculations."
                        </p>
                        <p className="text-sm text-gray-400">
                            Commander Aria will show you how to build robust, multi-layer logic.
                        </p>
                    </CharacterQuote>

                    <ProTip>
                        <p className="text-lg italic mb-3">
                            "Nesting is how Python handles complex logic efficiently."
                        </p>
                        <p className="text-sm text-gray-400">
                            Chief Engineer Kael will guide you through the syntax and structure.
                        </p>
                    </ProTip>
                </div>

                <div className="mt-8 p-6 bg-cyan-500/10 border-2 border-cyan-500/30 rounded-xl text-center">
                    <p className="text-xl text-gray-300">
                        Today you'll learn to <span className="text-[#53d22d] font-bold">combine operations</span> into powerful expressions!
                    </p>
                </div>
            </div>
        </div>
    );
}

// ============================================================================
// SLIDE 03: REVIEW - PREVIOUS LESSONS
// ============================================================================
export function Lesson04NewSlide03() {
    return (
        <div className="h-screen w-full overflow-hidden bg-gradient-to-br from-cyan-950 via-blue-950 to-slate-950 text-white relative flex items-center justify-center">
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'linear-gradient(#53d22d 1px, transparent 1px), linear-gradient(90deg, #53d22d 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }} />
            </div>

            <div className="relative z-10 max-w-4xl w-full px-8">
                <h1 className="text-4xl font-bold text-cyan-400 mb-6">REVIEW: BUILDING BLOCKS</h1>

                <p className="text-xl text-gray-300 mb-8">
                    Quick recap of what we've learned so far:
                </p>

                <Terminal variant="success" title="Python Review">
                    <CodeLine># Math Operators (PEMDAS)</CodeLine>
                    <CodeLine>print(10 + 5 * 2)</CodeLine>
                    <CodeLine output>20</CodeLine>
                    <CodeLine>&nbsp;</CodeLine>
                    <CodeLine># String Operations</CodeLine>
                    <CodeLine>print("Hello" + " " + "World")</CodeLine>
                    <CodeLine output>Hello World</CodeLine>
                    <CodeLine>&nbsp;</CodeLine>
                    <CodeLine># Variables</CodeLine>
                    <CodeLine>x = 10</CodeLine>
                    <CodeLine>print(x)</CodeLine>
                    <CodeLine output>10</CodeLine>
                </Terminal>
            </div>
        </div>
    );
}

// ============================================================================
// SLIDE 04: THE PROBLEM
// ============================================================================
export function Lesson04NewSlide04() {
    return (
        <div className="h-screen w-full overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-950 text-white relative flex items-center justify-center">
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(#06b6d4 1px, transparent 1px)',
                    backgroundSize: '30px 30px'
                }} />
            </div>

            <div className="relative z-10 max-w-5xl w-full px-8">
                <h1 className="text-4xl font-bold text-yellow-500 mb-6">THE CHALLENGE</h1>

                <div className="flex gap-8 items-center">
                    <div className="flex-1 space-y-6">
                        <div className="p-6 bg-yellow-500/10 border-l-4 border-yellow-500 rounded-r-xl">
                            <div className="flex items-center gap-3 mb-3">
                                <AlertTriangle className="w-8 h-8 text-yellow-500" />
                                <h3 className="text-yellow-400 font-bold text-xl">Real World Scenario</h3>
                            </div>
                            <p className="text-lg text-gray-300">
                                We need to calculate total damage: <br/>
                                <span className="font-mono text-cyan-300">(base + bonus) * multiplier</span>
                            </p>
                        </div>

                        <div className="p-6 bg-slate-900/50 border-2 border-cyan-500/30 rounded-xl">
                             <p className="text-gray-300 mb-4">
                                If we do it step-by-step, it's slow and uses too many lines:
                             </p>
                             <div className="font-mono text-sm text-gray-400 bg-black/50 p-4 rounded">
                                step1 = base + bonus<br/>
                                total = step1 * multiplier<br/>
                                print(total)
                             </div>
                        </div>
                    </div>

                    <div className="flex-1">
                        <RealWorldExample>
                            <p className="mb-4 italic text-lg">
                                "In combat, we don't have time for multi-step calculations. We need instant results."
                            </p>
                            <p className="text-sm text-gray-400">
                                - Commander Aria
                            </p>
                        </RealWorldExample>
                    </div>
                </div>

                 <div className="mt-8 text-center">
                    <p className="text-2xl text-gray-300">
                        We need to <span className="text-[#53d22d] font-bold">NEST</span> these operations!
                    </p>
                </div>
            </div>
        </div>
    );
}

// ============================================================================
// SLIDE 05: WHAT ARE NESTED CONSTRUCTIONS?
// ============================================================================
export function Lesson04NewSlide05() {
    return (
        <div className="h-screen w-full overflow-hidden bg-gradient-to-br from-cyan-950 via-blue-950 to-slate-950 text-white relative flex items-center justify-center">
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'linear-gradient(cyan 1px, transparent 1px), linear-gradient(90deg, cyan 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }} />
            </div>

            <div className="relative z-10 max-w-5xl w-full px-8">
                <h1 className="text-4xl font-bold text-[#53d22d] mb-8">NESTED CONSTRUCTIONS</h1>

                <div className="grid grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <div className="p-6 bg-slate-900/50 border-2 border-[#53d22d]/30 rounded-xl">
                            <h3 className="text-[#53d22d] font-bold text-xl mb-3">Definition:</h3>
                            <p className="text-lg text-gray-300">
                                Placing one operation <span className="text-cyan-400 font-bold">INSIDE</span> another operation.
                            </p>
                        </div>

                        <Terminal variant="success" title="Examples">
                            <CodeLine># Math Nesting</CodeLine>
                            <CodeLine>print((10 + 5) * 2)</CodeLine>
                            <CodeLine>&nbsp;</CodeLine>
                            <CodeLine># Function Nesting</CodeLine>
                            <CodeLine>print(len("Hello"))</CodeLine>
                        </Terminal>
                    </div>

                    <div className="flex flex-col items-center justify-center space-y-4">
                        <div className="w-64 h-64 relative flex items-center justify-center">
                             {/* Outer Box */}
                             <div className="absolute inset-0 border-4 border-cyan-500 rounded-xl flex items-start justify-center pt-2">
                                <span className="text-cyan-400 font-mono font-bold bg-slate-950 px-2">OUTER</span>
                             </div>

                             {/* Middle Box */}
                             <div className="absolute inset-8 border-4 border-blue-500 rounded-xl flex items-start justify-center pt-2">
                                <span className="text-blue-400 font-mono font-bold bg-slate-950 px-2">MIDDLE</span>
                             </div>

                             {/* Inner Box */}
                             <div className="absolute inset-16 border-4 border-[#53d22d] rounded-xl flex items-center justify-center">
                                <span className="text-[#53d22d] font-mono font-bold bg-slate-950 px-2">INNER</span>
                             </div>
                        </div>
                        <p className="text-gray-400 text-sm italic">Python evaluates from the inside out!</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Export all slides
export {
    Lesson04NewSlide01,
    Lesson04NewSlide02,
    Lesson04NewSlide03,
    Lesson04NewSlide04,
    Lesson04NewSlide05
};
