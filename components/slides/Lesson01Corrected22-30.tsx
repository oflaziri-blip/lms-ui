/**
 * Lesson 01 - CORRECTED SLIDES 22-30
 * String Basics Preview & Closure
 */

import React from 'react';
import { Type, Repeat, BookCheck, Rocket, Award, Trophy } from 'lucide-react';
import { Terminal, CodeLine } from './Terminal';
import { CharacterQuote } from './CharacterQuote';

// ============================================================================
// SLIDE 22: STRING CONCATENATION WITH +
// ============================================================================
export function Lesson01CorrectedSlide22() {
    return (
        <div className="h-screen w-full overflow-hidden bg-gradient-to-br from-cyan-950 via-blue-950 to-slate-950 text-white relative flex items-center justify-center">
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'linear-gradient(#53d22d 1px, transparent 1px), linear-gradient(90deg, #53d22d 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }} />
            </div>

            <div className="relative z-10 max-w-4xl w-full px-8">
                <div className="flex items-center gap-3 mb-6">
                    <Type className="w-8 h-8 text-cyan-400" />
                    <h1 className="text-4xl font-bold text-cyan-400">STRING CONCATENATION (+)</h1>
                </div>

                <p className="text-xl text-gray-300 mb-8">
                    Use <span className="text-cyan-400 font-bold">+</span> to join text pieces together
                </p>

                <Terminal variant="success" title="Python">
                    <CodeLine>print("Hello" + " " + "World")</CodeLine>
                    <CodeLine output>Hello World</CodeLine>
                    <CodeLine>&nbsp;</CodeLine>
                    <CodeLine>print("Agent" + "007")</CodeLine>
                    <CodeLine output>Agent007</CodeLine>
                    <CodeLine>&nbsp;</CodeLine>
                    <CodeLine>print("Chronos " + "System " + "Online")</CodeLine>
                    <CodeLine output>Chronos System Online</CodeLine>
                </Terminal>

                <div className="mt-8 p-6 bg-cyan-500/10 border-l-4 border-cyan-500 rounded-r-xl">
                    <p className="text-lg text-gray-300">
                        <span className="text-cyan-400 font-bold">Note:</span> Don't forget spaces! <code className="text-yellow-400">"Hello"+"World"</code> becomes <code className="text-gray-400">"HelloWorld"</code>
                    </p>
                </div>
            </div>
        </div>
    );
}

// ============================================================================
// SLIDE 23: STRING REPETITION WITH *
// ============================================================================
export function Lesson01CorrectedSlide23() {
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
                    <Repeat className="w-8 h-8 text-[#53d22d]" />
                    <h1 className="text-4xl font-bold text-[#53d22d]">STRING REPETITION (*)</h1>
                </div>

                <p className="text-xl text-gray-300 mb-8">
                    Use <span className="text-[#53d22d] font-bold">*</span> to repeat text multiple times
                </p>

                <Terminal variant="success" title="Python">
                    <CodeLine>print("=" * 20)</CodeLine>
                    <CodeLine output>====================</CodeLine>
                    <CodeLine>&nbsp;</CodeLine>
                    <CodeLine>print("Ha" * 3)</CodeLine>
                    <CodeLine output>HaHaHa</CodeLine>
                    <CodeLine>&nbsp;</CodeLine>
                    <CodeLine>print("-" * 10)</CodeLine>
                    <CodeLine output>----------</CodeLine>
                    <CodeLine>&nbsp;</CodeLine>
                    <CodeLine>print("★" * 5)</CodeLine>
                    <CodeLine output>★★★★★</CodeLine>
                </Terminal>

                <div className="mt-8 p-6 bg-[#53d22d]/10 border-l-4 border-[#53d22d] rounded-r-xl">
                    <p className="text-lg text-gray-300">
                        <span className="text-[#53d22d] font-bold">Use case:</span> Creating borders, patterns, separators, progress bars
                    </p>
                </div>
            </div>
        </div>
    );
}

// ============================================================================
// SLIDE 24: COMBINING NUMBERS AND STRINGS
// ============================================================================
export function Lesson01CorrectedSlide24() {
    return (
        <div className="h-screen w-full overflow-hidden bg-gradient-to-br from-cyan-950 via-blue-950 to-slate-950 text-white relative flex items-center justify-center">
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'linear-gradient(cyan 1px, transparent 1px), linear-gradient(90deg, cyan 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }} />
            </div>

            <div className="relative z-10 max-w-5xl w-full px-8">
                <h1 className="text-4xl font-bold text-yellow-500 mb-6">COMBINING NUMBERS & STRINGS</h1>

                <div className="grid grid-cols-2 gap-8 mb-8">
                    <div className="p-6 bg-red-500/10 border-2 border-red-500/50 rounded-xl">
                        <h3 className="text-red-400 font-bold text-xl mb-4">❌ THIS DOESN'T WORK:</h3>
                        <Terminal variant="error" title="Python">
                            <CodeLine>print("Score: " + 100)</CodeLine>
                            <CodeLine output>TypeError: can only concatenate str to str</CodeLine>
                        </Terminal>
                        <p className="mt-3 text-sm text-gray-400">Can't use + to join text and numbers!</p>
                    </div>

                    <div className="p-6 bg-[#53d22d]/10 border-2 border-[#53d22d]/50 rounded-xl">
                        <h3 className="text-[#53d22d] font-bold text-xl mb-4">✅ USE COMMA INSTEAD:</h3>
                        <Terminal variant="success" title="Python">
                            <CodeLine>print("Score:", 100)</CodeLine>
                            <CodeLine output>Score: 100</CodeLine>
                        </Terminal>
                        <p className="mt-3 text-sm text-gray-400">Comma automatically adds a space!</p>
                    </div>
                </div>

                <Terminal variant="success" title="More Examples">
                    <CodeLine>print("Level:", 5)</CodeLine>
                    <CodeLine output>Level: 5</CodeLine>
                    <CodeLine>&nbsp;</CodeLine>
                    <CodeLine>print("Health:", 100, "Mana:", 50)</CodeLine>
                    <CodeLine output>Health: 100 Mana: 50</CodeLine>
                    <CodeLine>&nbsp;</CodeLine>
                    <CodeLine>print("Result:", 10 + 5)</CodeLine>
                    <CodeLine output>Result: 15</CodeLine>
                </Terminal>

                <div className="mt-6 text-center text-sm text-gray-500">
                    Full string manipulation techniques in Lesson 03!
                </div>
            </div>
        </div>
    );
}

// ============================================================================
// SLIDE 25: MULTI-LINE PRINT
// ============================================================================
export function Lesson01CorrectedSlide25() {
    return (
        <div className="h-screen w-full overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-950 text-white relative flex items-center justify-center">
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'linear-gradient(#53d22d 1px, transparent 1px), linear-gradient(90deg, #53d22d 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }} />
            </div>

            <div className="relative z-10 max-w-4xl w-full px-8">
                <h1 className="text-4xl font-bold text-cyan-400 mb-6">MULTI-LINE PRINT</h1>

                <p className="text-xl text-gray-300 mb-8">
                    Use multiple <code className="text-cyan-400">print()</code> statements to create formatted output
                </p>

                <Terminal variant="success" title="Python">
                    <CodeLine>print("=" * 30)</CodeLine>
                    <CodeLine>print("CHRONOS SYSTEM STATUS")</CodeLine>
                    <CodeLine>print("=" * 30)</CodeLine>
                    <CodeLine>print("Power Level:", 100)</CodeLine>
                    <CodeLine>print("Status:", "ONLINE")</CodeLine>
                    <CodeLine>print("Agents Active:", 42)</CodeLine>
                    <CodeLine>print("=" * 30)</CodeLine>
                    <CodeLine>&nbsp;</CodeLine>
                    <CodeLine output>==============================</CodeLine>
                    <CodeLine output>CHRONOS SYSTEM STATUS</CodeLine>
                    <CodeLine output>==============================</CodeLine>
                    <CodeLine output>Power Level: 100</CodeLine>
                    <CodeLine output>Status: ONLINE</CodeLine>
                    <CodeLine output>Agents Active: 42</CodeLine>
                    <CodeLine output>==============================</CodeLine>
                </Terminal>

                <div className="mt-6 p-5 bg-cyan-500/10 border-l-4 border-cyan-500 rounded-r-xl">
                    <p className="text-gray-300">
                        <span className="text-cyan-400 font-bold">Pro tip:</span> Each <code>print()</code> automatically moves to a new line!
                    </p>
                </div>
            </div>
        </div>
    );
}

// ============================================================================
// SLIDE 26: KAEL'S PARTING WISDOM
// ============================================================================
export function Lesson01CorrectedSlide26() {
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
                            "Math operators are the <span className="text-[#53d22d] font-bold">foundation of ALL computation</span>."
                        </p>
                        <p className="italic">
                            "Every game, app, and AI you use performs <span className="text-cyan-400 font-bold">billions</span> of these operations per second."
                        </p>
                        <p className="italic">
                            "Master these 7 operators, and you <span className="text-[#53d22d] font-bold">control the machine</span>."
                        </p>
                    </div>
                </CharacterQuote>

                <div className="mt-8 p-6 bg-cyan-500/10 border-2 border-cyan-500/30 rounded-xl text-center">
                    <p className="text-xl text-gray-300">
                        You now speak <span className="text-[#53d22d] font-bold">Python</span>! 🎯
                    </p>
                </div>
            </div>
        </div>
    );
}

// ============================================================================
// SLIDE 27: MISSION COMPLETE - MASTERY CHECKLIST
// ============================================================================
export function Lesson01CorrectedSlide27() {
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
                            'Using print() to display output',
                            'All 7 math operators (+, -, *, /, //, %, **)',
                            'Order of operations (PEMDAS)',
                            'Using parentheses to control order',
                            'Printing text with quotes',
                            'String concatenation (+) and repetition (*)',
                            'Combining numbers and strings in print()',
                            'Creating formatted multi-line output'
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
// SLIDE 28: NEXT MISSION PREVIEW
// ============================================================================
export function Lesson01CorrectedSlide28() {
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
                    <h2 className="text-3xl font-bold text-[#53d22d] mb-4">LESSON 02: MEMORY CONTAINERS</h2>
                    <p className="text-xl text-gray-300 mb-6">
                        Learn to <span className="text-[#53d22d] font-bold">SAVE</span> your calculations in variables
                    </p>
                    <div className="space-y-3 text-lg text-gray-300">
                        <p>• No more lost data!</p>
                        <p>• Store numbers, text, and calculations</p>
                        <p>• Reuse values throughout your programs</p>
                    </div>
                    <div className="mt-6 inline-block px-6 py-3 bg-[#53d22d]/20 border-2 border-[#53d22d]/50 rounded-lg">
                        <p className="text-[#53d22d] font-mono font-bold">
                            UNLOCKING: Data Persistence Protocols
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

// ============================================================================
// SLIDE 29: YOUR ASSIGNMENT
// ============================================================================
export function Lesson01CorrectedSlide29() {
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
                    <h3 className="text-yellow-400 font-bold text-2xl mb-6">Build a Multi-Operation Calculator:</h3>
                    <div className="space-y-4 text-lg text-gray-300">
                        <div className="flex items-start gap-3">
                            <span className="text-[#53d22d] font-bold">1.</span>
                            <p>Calculate area of rectangle: <code className="text-cyan-400">length * width</code></p>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="text-[#53d22d] font-bold">2.</span>
                            <p>Calculate circle area: <code className="text-cyan-400">3.14 * radius ** 2</code></p>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="text-[#53d22d] font-bold">3.</span>
                            <p>Calculate average: <code className="text-cyan-400">(num1 + num2 + num3) / 3</code></p>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="text-[#53d22d] font-bold">4.</span>
                            <p>Print all results with labels and borders</p>
                        </div>
                    </div>

                    <div className="mt-6 p-4 bg-[#53d22d]/10 border border-[#53d22d]/30 rounded-lg">
                        <p className="text-[#53d22d] font-bold">
                            ⭐ BONUS: Use all 7 operators (+, -, *, /, //, %, **) in one program!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

// ============================================================================
// SLIDE 30: LESSON CLEARED!
// ============================================================================
export function Lesson01CorrectedSlide30() {
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
                    SYSTEM BOOT: COMPLETE
                </h2>

                <div className="inline-block px-8 py-3 rounded-lg bg-[#53d22d]/20 border-2 border-[#53d22d]/50 mb-8">
                    <p className="text-[#53d22d] font-mono font-bold text-lg">
                        LESSON 01 COMPLETE • +100 XP EARNED
                    </p>
                </div>

                <p className="text-xl text-gray-400">
                    You can now speak Python and command the machine!
                    <br />
                    <span className="text-[#53d22d] font-bold">Next: Learn to save your data in variables!</span>
                </p>
            </div>
        </div>
    );
}
