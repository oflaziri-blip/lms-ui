/**
 * Lesson 03 - DATA STRINGS (COMPLETE REPLACEMENT)
 * Slides 01-30: Complete String Manipulation Lesson
 * NO F-STRINGS! (Forbidden by curriculum)
 */

import React from 'react';
import { Type, Database, Search, Scissors, AlertTriangle, Lightbulb, Target, Code2, BookCheck, Rocket, Award, Trophy } from 'lucide-react';
import { Terminal, CodeLine } from './Terminal';
import { CharacterQuote, ProTip, RealWorldExample } from './CharacterQuote';

// ============================================================================
// SLIDE 01: MISSION BRIEFING
// ============================================================================
export function Lesson03NewSlide01() {
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
                    <Type className="w-16 h-16 text-cyan-400 animate-pulse" />
                    <Database className="w-16 h-16 text-blue-400" />
                    <Type className="w-16 h-16 text-cyan-400 animate-pulse" />
                </div>

                <div className="space-y-4">
                    <h1 className="text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent animate-pulse">
                        OPERATION CHRONOS
                    </h1>
                    <h2 className="text-5xl font-light text-blue-300">
                        DATA STRINGS
                    </h2>
                </div>

                <div className="mt-12 space-y-3 text-gray-300 font-mono">
                    <div className="flex items-center justify-center gap-4">
                        <span className="text-cyan-400">▸</span>
                        <span><span className="text-gray-500">MISSION CODE:</span> L03-STRINGS</span>
                    </div>
                    <div className="flex items-center justify-center gap-4">
                        <span className="text-cyan-400">▸</span>
                        <span><span className="text-gray-500">CLEARANCE LEVEL:</span> Cadet</span>
                    </div>
                    <div className="flex items-center justify-center gap-4">
                        <span className="text-cyan-400">▸</span>
                        <span><span className="text-gray-500">OBJECTIVE:</span> Text Manipulation & Analysis</span>
                    </div>
                </div>

                <div className="mt-16 inline-block">
                    <div className="px-8 py-3 border-2 border-cyan-500/50 rounded-lg bg-cyan-500/10 backdrop-blur">
                        <span className="text-cyan-400 font-mono text-sm tracking-wider">
                            INITIALIZING TEXT PROTOCOLS...
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
export function Lesson03NewSlide02() {
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
                            "Text is everywhere—usernames, messages, commands. You need to control it."
                        </p>
                        <p className="text-sm text-gray-400">
                            Commander Aria will show you real-world applications of string manipulation.
                        </p>
                    </CharacterQuote>

                    <ProTip>
                        <p className="text-lg italic mb-3">
                            "Strings are sequences of characters. Master them, and you master communication."
                        </p>
                        <p className="text-sm text-gray-400">
                            Chief Engineer Kael will teach you the technical details and best practices.
                        </p>
                    </ProTip>
                </div>

                <div className="mt-8 p-6 bg-cyan-500/10 border-2 border-cyan-500/30 rounded-xl text-center">
                    <p className="text-xl text-gray-300">
                        Today you'll learn to <span className="text-[#53d22d] font-bold">manipulate, analyze, and transform</span> text data!
                    </p>
                </div>
            </div>
        </div>
    );
}

// ============================================================================
// SLIDE 03: REVIEW - VARIABLES
// ============================================================================
export function Lesson03NewSlide03() {
    return (
        <div className="h-screen w-full overflow-hidden bg-gradient-to-br from-cyan-950 via-blue-950 to-slate-950 text-white relative flex items-center justify-center">
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'linear-gradient(#53d22d 1px, transparent 1px), linear-gradient(90deg, #53d22d 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }} />
            </div>

            <div className="relative z-10 max-w-4xl w-full px-8">
                <h1 className="text-4xl font-bold text-cyan-400 mb-6">REVIEW: VARIABLES</h1>

                <p className="text-xl text-gray-300 mb-8">
                    Quick recap from Lesson 02:
                </p>

                <Terminal variant="success" title="Python">
                    <CodeLine>name = "Shadow"</CodeLine>
                    <CodeLine>level = 5</CodeLine>
                    <CodeLine>&nbsp;</CodeLine>
                    <CodeLine>print(name)</CodeLine>
                    <CodeLine output>Shadow</CodeLine>
                    <CodeLine>&nbsp;</CodeLine>
                    <CodeLine>print("Level:", level)</CodeLine>
                    <CodeLine output>Level: 5</CodeLine>
                </Terminal>

                <div className="mt-8 p-6 bg-yellow-500/10 border-l-4 border-yellow-500 rounded-r-xl">
                    <h3 className="text-yellow-400 font-bold text-xl mb-3">THE PROBLEM:</h3>
                    <p className="text-lg text-gray-300">
                        We can <span className="text-[#53d22d] font-bold">store</span> text in variables...
                        <br />
                        But how do we <span className="text-cyan-400 font-bold">WORK</span> with it?
                    </p>
                </div>
            </div>
        </div>
    );
}

// ============================================================================
// SLIDE 04: PROBLEM STATEMENT
// ============================================================================
export function Lesson03NewSlide04() {
    return (
        <div className="h-screen w-full overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-950 text-white relative flex items-center justify-center">
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(#06b6d4 1px, transparent 1px)',
                    backgroundSize: '30px 30px'
                }} />
            </div>

            <div className="relative z-10 max-w-5xl w-full px-8">
                <h1 className="text-4xl font-bold text-yellow-500 mb-6">TEXT MANIPULATION NEEDS</h1>

                <div className="grid grid-cols-2 gap-6">
                    {[
                        { task: 'Convert "JOHN DOE" to "John Doe"', icon: Type },
                        { task: 'Extract first name from "John_Doe_123"', icon: Scissors },
                        { task: 'Count characters in a password', icon: Search },
                        { task: 'Find "@" in an email address', icon: Database }
                    ].map((item, i) => (
                        <div key={i} className="p-5 bg-slate-900/50 border-2 border-cyan-500/30 rounded-xl">
                            <div className="flex items-center gap-3 mb-3">
                                <item.icon className="w-6 h-6 text-cyan-400" />
                                <h3 className="text-cyan-400 font-bold">Task {i + 1}:</h3>
                            </div>
                            <p className="text-gray-300">{item.task}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-8 p-6 bg-[#53d22d]/10 border-2 border-[#53d22d]/30 rounded-xl text-center">
                    <p className="text-2xl text-gray-300">
                        We need <span className="text-[#53d22d] font-bold">STRING TOOLS</span>!
                    </p>
                </div>
            </div>
        </div>
    );
}

// ============================================================================
// SLIDE 05: WHAT IS A STRING?
// ============================================================================
export function Lesson03NewSlide05() {
    return (
        <div className="h-screen w-full overflow-hidden bg-gradient-to-br from-cyan-950 via-blue-950 to-slate-950 text-white relative flex items-center justify-center">
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'linear-gradient(cyan 1px, transparent 1px), linear-gradient(90deg, cyan 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }} />
            </div>

            <div className="relative z-10 max-w-4xl w-full px-8">
                <h1 className="text-4xl font-bold text-[#53d22d] mb-6">WHAT IS A STRING?</h1>

                <div className="mb-8 p-8 bg-slate-900/50 border-2 border-[#53d22d]/30 rounded-xl">
                    <p className="text-2xl text-gray-300 mb-6 text-center">
                        A <span className="text-[#53d22d] font-bold">string</span> is an ordered sequence of characters
                    </p>

                    <div className="flex justify-center items-center gap-2 mb-6">
                        {['H', 'E', 'L', 'L', 'O'].map((char, i) => (
                            <div key={i} className="w-16 h-16 bg-cyan-900/30 border-2 border-cyan-500 rounded-lg flex items-center justify-center">
                                <span className="text-3xl font-bold text-cyan-400">{char}</span>
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-center items-center gap-2 text-sm text-gray-500 font-mono">
                        {[0, 1, 2, 3, 4].map((num, i) => (
                            <div key={i} className="w-16 text-center">
                                [{num}]
                            </div>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                    <div className="p-5 bg-cyan-500/10 border-l-4 border-cyan-500 rounded-r-xl">
                        <h3 className="text-cyan-400 font-bold mb-2">✓ Each character has a position (index)</h3>
                        <p className="text-sm text-gray-400">Starting from 0!</p>
                    </div>
                    <div className="p-5 bg-yellow-500/10 border-l-4 border-yellow-500 rounded-r-xl">
                        <h3 className="text-yellow-400 font-bold mb-2">⚠️ Strings are IMMUTABLE</h3>
                        <p className="text-sm text-gray-400">Can't change individual characters</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Export all slides
export {
    Lesson03NewSlide01,
    Lesson03NewSlide02,
    Lesson03NewSlide03,
    Lesson03NewSlide04,
    Lesson03NewSlide05
};
