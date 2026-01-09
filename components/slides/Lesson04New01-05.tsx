/**
 * Lesson 04 - NESTED CONSTRUCTIONS
 * Slides 01-05: Hook & Context
 */

import React from 'react';
import { Layers, Code2, Zap, Target, BookCheck, Trophy, Award, AlertTriangle, Lightbulb } from 'lucide-react';
import { Terminal, CodeLine } from './Terminal';
import { CharacterQuote, ProTip, RealWorldExample } from './CharacterQuote';

// ============================================================================
// SLIDE 01: MISSION BRIEFING
// ============================================================================
function Lesson04NewSlide01() {
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
                </div>

                <div className="space-y-4">
                    <h1 className="text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent animate-pulse">
                        NESTED PROTOCOLS
                    </h1>
                </div>

                <div className="mt-12 space-y-3 text-gray-300 font-mono">
                    <div className="flex items-center justify-center gap-4">
                        <span className="text-cyan-400">▸</span>
                        <span><span className="text-gray-500">MISSION CODE:</span> L04-NESTED</span>
                    </div>
                </div>

                <div className="mt-16 inline-block">
                    <div className="px-8 py-3 border-2 border-cyan-500/50 rounded-lg bg-cyan-500/10 backdrop-blur">
                        <span className="text-cyan-400 font-mono text-sm tracking-wider">
                            INITIALIZING...
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

// ============================================================================
// SLIDE 02: CHARACTER INTRODUCTION
// ============================================================================
function Lesson04NewSlide02() {
    return (
        <div className="h-screen w-full overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-950 text-white relative flex items-center justify-center">
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(#06b6d4 1px, transparent 1px)',
                    backgroundSize: '30px 30px'
                }} />
            </div>

            <div className="relative z-10 max-w-5xl w-full px-8">
                <div className="grid grid-cols-2 gap-8">
                    <CharacterQuote character="aria">
                        <p className="text-lg italic mb-3">
                            "Real systems combine operations—calculations within calculations"
                        </p>
                    </CharacterQuote>

                    <ProTip>
                        <p className="text-lg italic mb-3">
                            "Nesting is how Python handles complex logic"
                        </p>
                    </ProTip>
                </div>
            </div>
        </div>
    );
}

// ============================================================================
// SLIDE 03: REVIEW - PREVIOUS LESSONS
// ============================================================================
function Lesson04NewSlide03() {
    return (
        <div className="h-screen w-full overflow-hidden bg-gradient-to-br from-cyan-950 via-blue-950 to-slate-950 text-white relative flex items-center justify-center">
            <div className="relative z-10 max-w-4xl w-full px-8">
                <h1 className="text-4xl font-bold text-cyan-400 mb-6">REVIEW: PREVIOUS LESSONS</h1>
                <Terminal variant="success" title="Python">
                    <CodeLine># Math</CodeLine>
                    <CodeLine>10 + 5 * 2</CodeLine>
                    <CodeLine output>20</CodeLine>
                    <CodeLine># Strings</CodeLine>
                    <CodeLine>"Hello" + "World"</CodeLine>
                    <CodeLine output>HelloWorld</CodeLine>
                    <CodeLine># Variables</CodeLine>
                    <CodeLine>x = 10</CodeLine>
                </Terminal>
            </div>
        </div>
    );
}

// ============================================================================
// SLIDE 04: THE PROBLEM
// ============================================================================
function Lesson04NewSlide04() {
    return (
        <div className="h-screen w-full overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-950 text-white relative flex items-center justify-center">
            <div className="relative z-10 max-w-5xl w-full px-8">
                 <div className="mt-8 p-6 bg-yellow-500/10 border-l-4 border-yellow-500 rounded-r-xl">
                    <h3 className="text-yellow-400 font-bold text-xl mb-3">THE PROBLEM:</h3>
                    <p className="text-lg text-gray-300">
                        How do we calculate total damage: (base + bonus) * multiplier in one line?
                    </p>
                </div>
            </div>
        </div>
    );
}

// ============================================================================
// SLIDE 05: WHAT ARE NESTED CONSTRUCTIONS?
// ============================================================================
function Lesson04NewSlide05() {
    return (
        <div className="h-screen w-full overflow-hidden bg-gradient-to-br from-cyan-950 via-blue-950 to-slate-950 text-white relative flex items-center justify-center">
            <div className="relative z-10 max-w-4xl w-full px-8">
                <h1 className="text-4xl font-bold text-[#53d22d] mb-6">WHAT ARE NESTED CONSTRUCTIONS?</h1>

                <div className="mb-8 p-8 bg-slate-900/50 border-2 border-[#53d22d]/30 rounded-xl">
                    <p className="text-2xl text-gray-300 mb-6 text-center">
                        Operations inside other operations
                    </p>
                </div>
                <Terminal title="Python">
                    <CodeLine>print(10 + 5)</CodeLine>
                    <CodeLine>len("Hello")</CodeLine>
                </Terminal>
            </div>
        </div>
    );
}

export {
    Lesson04NewSlide01,
    Lesson04NewSlide02,
    Lesson04NewSlide03,
    Lesson04NewSlide04,
    Lesson04NewSlide05
};
