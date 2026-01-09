/**
 * Lesson 03 - DATA STRINGS (FINAL SLIDES)
 * Slides 17-22: Closure
 * CONCISE & COMPLETE!
 */

import React from 'react';
import { BookCheck, Rocket, Award, Trophy } from 'lucide-react';
import { CharacterQuote } from './CharacterQuote';

// ============================================================================
// SLIDE 17: KAEL'S PARTING WISDOM
// ============================================================================
export function Lesson03NewSlide17() {
    return (
        <div className="h-screen w-full overflow-hidden bg-gradient-to-br from-cyan-950 via-blue-950 to-slate-950 text-white relative flex items-center justify-center">
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(#06b6d4 1px, transparent 1px)',
                    backgroundSize: '30px 30px'
                }} />
            </div>

            <div className="relative z-10 max-w-4xl w-full px-8">
                <h1 className="text-4xl font-bold text-[#53d22d] mb-8 text-center">CHIEF ENGINEER'S PARTING WISDOM</h1>

                <CharacterQuote character="kael">
                    <div className="space-y-4 text-lg">
                        <p className="italic">
                            "Strings are the <span className="text-[#53d22d] font-bold">most common data type</span> you'll work with."
                        </p>
                        <p className="italic">
                            "Every website, app, and game processes <span className="text-cyan-400 font-bold">millions of strings</span> per second."
                        </p>
                        <p className="italic">
                            "Master string manipulation, and you can build <span className="text-[#53d22d] font-bold">anything that communicates</span>."
                        </p>
                    </div>
                </CharacterQuote>

                <div className="mt-8 p-6 bg-cyan-500/10 border-2 border-cyan-500/30 rounded-xl text-center">
                    <p className="text-xl text-gray-300">
                        You now control <span className="text-[#53d22d] font-bold">TEXT DATA</span>! 🎯
                    </p>
                </div>
            </div>
        </div>
    );
}

// ============================================================================
// SLIDE 18: MASTERY CHECKLIST
// ============================================================================
export function Lesson03NewSlide18() {
    return (
        <div className="h-screen w-full overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-950 text-white relative flex items-center justify-center">
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'linear-gradient(#53d22d 1px, transparent 1px), linear-gradient(90deg, #53d22d 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }} />
            </div>

            <div className="relative z-10 max-w-4xl w-full px-8">
                <div className="flex items-center gap-3 mb-8">
                    <BookCheck className="w-10 h-10 text-[#53d22d]" />
                    <h1 className="text-5xl font-bold text-[#53d22d]">MISSION COMPLETE!</h1>
                </div>

                <div className="p-8 bg-slate-900/50 border-2 border-cyan-500/30 rounded-xl">
                    <h3 className="text-cyan-400 font-bold text-2xl mb-6">YOU MASTERED:</h3>
                    <div className="grid grid-cols-2 gap-3 text-lg">
                        {[
                            'Creating strings with quotes',
                            'String length with len()',
                            'Indexing [0] and negative indexing [-1]',
                            'String slicing [start:end]',
                            'Concatenation (+) and repetition (*)',
                            '.upper() and .lower()',
                            '.strip() and .replace()',
                            '.find() and .count()',
                            'Combining string operations',
                            'Real-world text processing'
                        ].map((skill, i) => (
                            <div key={i} className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-[#53d22d]/30 flex items-center justify-center flex-shrink-0 mt-1">
                                    <div className="w-3 h-3 rounded-full bg-[#53d22d]" />
                                </div>
                                <p className="text-gray-300">{skill}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

// ============================================================================
// SLIDE 19: NEXT MISSION PREVIEW
// ============================================================================
export function Lesson03NewSlide19() {
    return (
        <div className="h-screen w-full overflow-hidden bg-gradient-to-br from-cyan-950 via-blue-950 to-slate-950 text-white relative flex items-center justify-center">
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'linear-gradient(cyan 1px, transparent 1px), linear-gradient(90deg, cyan 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }} />
            </div>

            <div className="relative z-10 max-w-4xl w-full px-8">
                <div className="flex items-center gap-3 mb-6">
                    <Rocket className="w-8 h-8 text-cyan-400" />
                    <h1 className="text-4xl font-bold text-cyan-400">NEXT MISSION</h1>
                </div>

                <div className="p-8 bg-cyan-500/10 border-2 border-cyan-500/30 rounded-xl text-center">
                    <h2 className="text-3xl font-bold text-[#53d22d] mb-4">LESSON 04: NESTED PROTOCOLS</h2>
                    <p className="text-xl text-gray-300 mb-6">
                        Learn to <span className="text-[#53d22d] font-bold">combine operations</span> for complex tasks
                    </p>
                    <div className="space-y-3 text-lg text-gray-300">
                        <p>• Calculations within calculations</p>
                        <p>• Functions inside functions</p>
                        <p>• Multi-step expressions</p>
                    </div>
                    <div className="mt-6 inline-block px-6 py-3 bg-[#53d22d]/20 border-2 border-[#53d22d]/50 rounded-lg">
                        <p className="text-[#53d22d] font-mono font-bold">
                            UNLOCKING: Complex Operation Protocols
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

// ============================================================================
// SLIDE 20: YOUR ASSIGNMENT
// ============================================================================
export function Lesson03NewSlide20() {
    return (
        <div className="h-screen w-full overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-950 text-white relative flex items-center justify-center">
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(#06b6d4 1px, transparent 1px)',
                    backgroundSize: '30px 30px'
                }} />
            </div>

            <div className="relative z-10 max-w-4xl w-full px-8">
                <div className="flex items-center gap-3 mb-6">
                    <Award className="w-8 h-8 text-yellow-500" />
                    <h1 className="text-4xl font-bold text-yellow-500">YOUR ASSIGNMENT</h1>
                </div>

                <div className="p-8 bg-slate-900/50 border-2 border-yellow-500/30 rounded-xl">
                    <h3 className="text-yellow-400 font-bold text-2xl mb-6">Build a Text Processor:</h3>
                    <div className="space-y-4 text-lg text-gray-300">
                        <div className="flex items-start gap-3">
                            <span className="text-[#53d22d] font-bold">1.</span>
                            <p>Take a username: <code className="text-cyan-400">"  AGENT_007  "</code></p>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="text-[#53d22d] font-bold">2.</span>
                            <p>Remove spaces with .strip()</p>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="text-[#53d22d] font-bold">3.</span>
                            <p>Convert to lowercase with .lower()</p>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="text-[#53d22d] font-bold">4.</span>
                            <p>Replace underscores with hyphens using .replace()</p>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="text-[#53d22d] font-bold">5.</span>
                            <p>Extract just the number part with slicing</p>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="text-[#53d22d] font-bold">6.</span>
                            <p>Print formatted output with borders</p>
                        </div>
                    </div>

                    <div className="mt-6 p-4 bg-[#53d22d]/10 border border-[#53d22d]/30 rounded-lg">
                        <p className="text-[#53d22d] font-bold">
                            ⭐ BONUS: Create a password validator that checks length and finds special characters!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

// ============================================================================
// SLIDE 21: LESSON CLEARED!
// ============================================================================
export function Lesson03NewSlide21() {
    return (
        <div className="h-screen w-full overflow-hidden bg-gradient-to-br from-cyan-950 via-blue-950 to-slate-950 text-white flex items-center justify-center relative">
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'linear-gradient(cyan 1px, transparent 1px), linear-gradient(90deg, cyan 1px, transparent 1px)',
                    backgroundSize: '50px 50px'
                }} />
            </div>

            <div className="absolute inset-0 overflow-hidden">
                {[...Array(30)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-2 h-2 bg-[#53d22d] rounded-full animate-pulse"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 2}s`,
                            opacity: Math.random() * 0.7 + 0.3
                        }}
                    />
                ))}
            </div>

            <div className="relative z-10 text-center max-w-4xl px-8">
                <div className="flex justify-center mb-8">
                    <div className="w-32 h-32 rounded-full bg-[#53d22d]/20 flex items-center justify-center" style={{ boxShadow: '0 0 40px rgba(83,210,45,0.5)' }}>
                        <Trophy className="w-20 h-20 text-[#53d22d]" />
                    </div>
                </div>

                <h1 className="text-6xl font-bold bg-gradient-to-r from-cyan-400 via-[#53d22d] to-cyan-400 bg-clip-text text-transparent mb-6">
                    LESSON CLEARED!
                </h1>

                <h2 className="text-3xl font-light text-cyan-300 mb-8">
                    DATA STRINGS: MASTERED
                </h2>

                <div className="inline-block px-8 py-3 rounded-lg bg-[#53d22d]/20 border-2 border-[#53d22d]/50 mb-8">
                    <p className="text-[#53d22d] font-mono font-bold text-lg">
                        LESSON 03 COMPLETE • +150 XP EARNED
                    </p>
                </div>

                <p className="text-xl text-gray-400">
                    You can now manipulate text like a pro!
                    <br />
                    <span className="text-[#53d22d] font-bold">Next: Learn to combine operations with nested constructions!</span>
                </p>
            </div>
        </div>
    );
}
