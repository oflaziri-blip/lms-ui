/**
 * Lesson 01 - CORRECTED SLIDES 16-25
 * Practice, Challenges, and String Basics Preview
 */

import React from 'react';
import { Target, Code2, Zap, Type } from 'lucide-react';
import { Terminal, CodeLine } from './Terminal';
import { RealWorldExample, ProTip } from './CharacterQuote';

// ============================================================================
// SLIDE 16: REAL-WORLD EXAMPLE (ARIA) - COMBAT DAMAGE
// ============================================================================
export function Lesson01CorrectedSlide16() {
    return (
        <div className="h-screen w-full overflow-hidden bg-gradient-to-br from-cyan-950 via-blue-950 to-slate-950 text-white relative flex items-center justify-center">
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'linear-gradient(#53d22d 1px, transparent 1px), linear-gradient(90deg, #53d22d 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }} />
            </div>

            <div className="relative z-10 max-w-4xl w-full px-8">
                <h1 className="text-4xl font-bold text-cyan-400 mb-6">REAL-WORLD: COMBAT DAMAGE</h1>

                <RealWorldExample>
                    <p className="mb-4 italic text-lg">
                        "Imagine calculating damage in a Chronos combat simulation..."
                    </p>
                    <Terminal variant="success" title="Combat System">
                        <CodeLine>base_damage = 50</CodeLine>
                        <CodeLine>multiplier = 2</CodeLine>
                        <CodeLine>bonus = 15</CodeLine>
                        <CodeLine>&nbsp;</CodeLine>
                        <CodeLine>print(base_damage * multiplier + bonus)</CodeLine>
                        <CodeLine output>115</CodeLine>
                        <CodeLine>&nbsp;</CodeLine>
                        <CodeLine># Order: 50*2=100, then 100+15=115</CodeLine>
                    </Terminal>
                    <p className="mt-4 text-sm">
                        Math operators power every game, app, and system you use!
                    </p>
                </RealWorldExample>
            </div>
        </div>
    );
}

// ============================================================================
// SLIDE 17: CHALLENGE 1 - BASIC ARITHMETIC
// ============================================================================
export function Lesson01CorrectedSlide17() {
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
                    <Target className="w-8 h-8 text-cyan-400" />
                    <h1 className="text-4xl font-bold text-cyan-400">CHALLENGE 1: BASIC ARITHMETIC</h1>
                </div>

                <p className="text-xl text-gray-300 mb-8">
                    Calculate these expressions. What will Python output?
                </p>

                <div className="space-y-6">
                    <div className="p-6 bg-slate-900/50 border-2 border-cyan-500/30 rounded-xl">
                        <h3 className="text-cyan-400 font-bold mb-3">Task 1:</h3>
                        <Terminal variant="default" title="Python">
                            <CodeLine>print((100 + 50) * 2)</CodeLine>
                            <CodeLine output>???</CodeLine>
                        </Terminal>
                    </div>

                    <div className="p-6 bg-slate-900/50 border-2 border-cyan-500/30 rounded-xl">
                        <h3 className="text-cyan-400 font-bold mb-3">Task 2:</h3>
                        <Terminal variant="default" title="Python">
                            <CodeLine>print(200 / 4 + 10)</CodeLine>
                            <CodeLine output>???</CodeLine>
                        </Terminal>
                    </div>

                    <div className="p-6 bg-slate-900/50 border-2 border-cyan-500/30 rounded-xl">
                        <h3 className="text-cyan-400 font-bold mb-3">Task 3:</h3>
                        <Terminal variant="default" title="Python">
                            <CodeLine>print(2 ** 8)</CodeLine>
                            <CodeLine output>???</CodeLine>
                        </Terminal>
                    </div>
                </div>

                <div className="mt-6 text-center text-sm text-gray-500">
                    Answers: 300, 60.0, 256
                </div>
            </div>
        </div>
    );
}

// ============================================================================
// SLIDE 18: CHALLENGE 2 - COMPLEX EXPRESSION
// ============================================================================
export function Lesson01CorrectedSlide18() {
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
                    <Code2 className="w-8 h-8 text-[#53d22d]" />
                    <h1 className="text-4xl font-bold text-[#53d22d]">CHALLENGE 2: COMPLEX EXPRESSION</h1>
                </div>

                <p className="text-xl text-gray-300 mb-8">
                    Build a calculator for this expression:
                </p>

                <div className="p-8 bg-slate-900/50 border-2 border-[#53d22d]/30 rounded-xl mb-8">
                    <div className="text-center mb-6">
                        <div className="text-4xl font-bold text-[#53d22d] mb-4">((15 + 5) * 3) - 10</div>
                        <p className="text-gray-400">Expected output: <span className="text-yellow-400">50</span></p>
                    </div>

                    <Terminal variant="success" title="Python">
                        <CodeLine>print(((15 + 5) * 3) - 10)</CodeLine>
                        <CodeLine output>50</CodeLine>
                    </Terminal>

                    <div className="mt-6 p-4 bg-cyan-500/10 border-l-4 border-cyan-500 rounded-r-xl">
                        <h4 className="text-cyan-400 font-bold mb-2">Step-by-step:</h4>
                        <div className="space-y-1 text-sm text-gray-300 font-mono">
                            <p>1. (15 + 5) = 20</p>
                            <p>2. 20 * 3 = 60</p>
                            <p>3. 60 - 10 = 50</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// ============================================================================
// SLIDE 19: CHALLENGE 3 - PEMDAS PRACTICE
// ============================================================================
export function Lesson01CorrectedSlide19() {
    return (
        <div className="h-screen w-full overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-950 text-white relative flex items-center justify-center">
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'linear-gradient(#53d22d 1px, transparent 1px), linear-gradient(90deg, #53d22d 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }} />
            </div>

            <div className="relative z-10 max-w-5xl w-full px-8">
                <div className="flex items-center gap-3 mb-6">
                    <Zap className="w-8 h-8 text-yellow-500" />
                    <h1 className="text-4xl font-bold text-yellow-500">CHALLENGE 3: PEMDAS PRACTICE</h1>
                </div>

                <p className="text-xl text-gray-300 mb-8">
                    What's the output? Think about order of operations!
                </p>

                <div className="grid grid-cols-2 gap-6">
                    <div className="p-6 bg-slate-900/50 border-2 border-cyan-500/30 rounded-xl">
                        <Terminal variant="default" title="Python">
                            <CodeLine>print(10 + 5 * 2)</CodeLine>
                            <CodeLine output>???</CodeLine>
                        </Terminal>
                        <p className="mt-3 text-sm text-gray-500">Hint: Multiplication first!</p>
                    </div>

                    <div className="p-6 bg-slate-900/50 border-2 border-cyan-500/30 rounded-xl">
                        <Terminal variant="default" title="Python">
                            <CodeLine>print((10 + 5) * 2)</CodeLine>
                            <CodeLine output>???</CodeLine>
                        </Terminal>
                        <p className="mt-3 text-sm text-gray-500">Hint: Parentheses first!</p>
                    </div>

                    <div className="p-6 bg-slate-900/50 border-2 border-cyan-500/30 rounded-xl">
                        <Terminal variant="default" title="Python">
                            <CodeLine>print(10 ** 2 + 5)</CodeLine>
                            <CodeLine output>???</CodeLine>
                        </Terminal>
                        <p className="mt-3 text-sm text-gray-500">Hint: Exponent first!</p>
                    </div>

                    <div className="p-6 bg-slate-900/50 border-2 border-cyan-500/30 rounded-xl">
                        <Terminal variant="default" title="Python">
                            <CodeLine>print(20 / 4 * 2)</CodeLine>
                            <CodeLine output>???</CodeLine>
                        </Terminal>
                        <p className="mt-3 text-sm text-gray-500">Hint: Left to right!</p>
                    </div>
                </div>

                <div className="mt-6 text-center p-4 bg-slate-800/50 rounded-lg">
                    <p className="text-sm text-gray-400">Answers: 20, 30, 105, 10.0</p>
                </div>
            </div>
        </div>
    );
}

// ============================================================================
// SLIDE 20: PRO TIPS (KAEL)
// ============================================================================
export function Lesson01CorrectedSlide20() {
    return (
        <div className="h-screen w-full overflow-hidden bg-gradient-to-br from-cyan-950 via-blue-950 to-slate-950 text-white relative flex items-center justify-center">
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(#06b6d4 1px, transparent 1px)',
                    backgroundSize: '30px 30px'
                }} />
            </div>

            <div className="relative z-10 max-w-4xl w-full px-8">
                <h1 className="text-4xl font-bold text-[#53d22d] mb-8">CHIEF ENGINEER'S PRO TIPS</h1>

                <div className="space-y-6">
                    <ProTip>
                        <p className="mb-3">
                            <span className="text-[#53d22d] font-bold">Use parentheses liberally</span> — clarity beats cleverness.
                        </p>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                                <p className="text-gray-500 mb-2">Unclear:</p>
                                <code className="text-gray-400">2 + 3 * 4 + 5</code>
                            </div>
                            <div>
                                <p className="text-[#53d22d] mb-2">Clear:</p>
                                <code className="text-gray-300">2 + (3 * 4) + 5</code>
                            </div>
                        </div>
                    </ProTip>

                    <div className="p-6 bg-[#53d22d]/10 border-l-4 border-[#53d22d] rounded-r-xl">
                        <h4 className="text-[#53d22d] font-bold text-lg mb-3">💡 PRO TIP</h4>
                        <p className="text-gray-300">
                            Division (/) <span className="text-[#53d22d] font-bold">always returns a float</span>, even for whole numbers.
                        </p>
                        <div className="mt-3 space-y-1 font-mono text-sm">
                            <p><code className="text-cyan-400">10 / 2</code> → <code className="text-yellow-400">5.0</code> (not 5)</p>
                            <p><code className="text-cyan-400">10 // 2</code> → <code className="text-yellow-400">5</code> (whole number)</p>
                        </div>
                    </div>

                    <div className="p-6 bg-[#53d22d]/10 border-l-4 border-[#53d22d] rounded-r-xl">
                        <h4 className="text-[#53d22d] font-bold text-lg mb-3">💡 PRO TIP</h4>
                        <p className="text-gray-300">
                            Use <span className="text-[#53d22d] font-bold">//</span> when you want whole number division (like splitting items into groups).
                        </p>
                        <div className="mt-3 font-mono text-sm">
                            <p><code className="text-cyan-400">17 // 5</code> → <code className="text-yellow-400">3 groups</code></p>
                            <p><code className="text-cyan-400">17 % 5</code> → <code className="text-yellow-400">2 leftover</code></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// ============================================================================
// SLIDE 21: PRINTING TEXT (String Basics Preview)
// ============================================================================
export function Lesson01CorrectedSlide21() {
    return (
        <div className="h-screen w-full overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-950 text-white relative flex items-center justify-center">
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'linear-gradient(cyan 1px, transparent 1px), linear-gradient(90deg, cyan 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }} />
            </div>

            <div className="relative z-10 max-w-4xl w-full px-8">
                <div className="flex items-center gap-3 mb-6">
                    <Type className="w-8 h-8 text-cyan-400" />
                    <h1 className="text-4xl font-bold text-cyan-400">PRINTING TEXT</h1>
                </div>

                <p className="text-xl text-gray-300 mb-8">
                    Text needs <span className="text-yellow-500 font-bold">quotes</span> to be recognized as a string
                </p>

                <div className="grid grid-cols-2 gap-8 mb-8">
                    <div>
                        <h3 className="text-cyan-400 font-bold mb-3">SINGLE QUOTES:</h3>
                        <Terminal variant="success" title="Python">
                            <CodeLine>print('Hello, Chronos!')</CodeLine>
                            <CodeLine output>Hello, Chronos!</CodeLine>
                        </Terminal>
                    </div>

                    <div>
                        <h3 className="text-cyan-400 font-bold mb-3">DOUBLE QUOTES:</h3>
                        <Terminal variant="success" title="Python">
                            <CodeLine>print("Hello, Chronos!")</CodeLine>
                            <CodeLine output>Hello, Chronos!</CodeLine>
                        </Terminal>
                    </div>
                </div>

                <div className="p-6 bg-cyan-500/10 border-2 border-cyan-500/30 rounded-xl">
                    <h3 className="text-cyan-400 font-bold text-xl mb-4">Both work the same!</h3>
                    <div className="space-y-3 text-gray-300">
                        <p>• Use <code className="text-yellow-400">"double quotes"</code> when text has apostrophes: <code className="text-gray-400">"It's working!"</code></p>
                        <p>• Use <code className="text-yellow-400">'single quotes'</code> when text has double quotes: <code className="text-gray-400">'She said "Hi"'</code></p>
                    </div>
                </div>

                <div className="mt-6 text-center text-sm text-gray-500">
                    Full string manipulation in Lesson 03!
                </div>
            </div>
        </div>
    );
}

// Slides 22-25 continue in next file...
