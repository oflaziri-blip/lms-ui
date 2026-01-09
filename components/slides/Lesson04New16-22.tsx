import React from 'react';
import {
    Layers, Code2, Zap, Target, BookCheck, Trophy,
    Award, AlertTriangle, Lightbulb
} from 'lucide-react';
import { Terminal, CodeLine } from './Terminal';
import { CharacterQuote, ProTip, RealWorldExample } from './CharacterQuote';

// ============================================================================
// SLIDE 16: CHALLENGE 1 - SIMPLE CALCULATOR
// ============================================================================
export function Lesson04NewSlide16() {
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
                    <Target className="w-8 h-8 text-cyan-400" />
                    <h1 className="text-4xl font-bold text-cyan-400">CHALLENGE 1</h1>
                </div>

                <div className="p-8 bg-slate-900/50 border-2 border-cyan-500/30 rounded-xl">
                    <h3 className="text-[#53d22d] font-bold text-2xl mb-6">Your Mission:</h3>

                    <p className="text-lg text-gray-300 mb-6">
                        Calculate and print the result of: <span className="font-mono text-cyan-300">(25 + 15) * 3</span>
                    </p>

                    <div className="grid grid-cols-2 gap-6">
                        <div className="p-5 bg-cyan-500/10 border border-cyan-500/30 rounded-xl">
                            <h4 className="text-cyan-400 font-bold mb-3">Logic:</h4>
                            <p className="font-mono text-gray-300">1. Add 25 + 15</p>
                            <p className="font-mono text-gray-300">2. Multiply by 3</p>
                        </div>

                        <div className="p-5 bg-yellow-500/10 border border-yellow-500/30 rounded-xl">
                            <h4 className="text-yellow-400 font-bold mb-3">Expected Output:</h4>
                            <p className="font-mono text-[#53d22d] text-xl">120</p>
                        </div>
                    </div>
                </div>

                 <div className="mt-6 text-center text-sm text-gray-500">
                    Use parentheses to control the order!
                </div>
            </div>
        </div>
    );
}

// ============================================================================
// SLIDE 17: CHALLENGE 2 - COMPLEX EXPRESSION
// ============================================================================
export function Lesson04NewSlide17() {
    return (
        <div className="h-screen w-full overflow-hidden bg-gradient-to-br from-cyan-950 via-blue-950 to-slate-950 text-white relative flex items-center justify-center">
             <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(#06b6d4 1px, transparent 1px)',
                    backgroundSize: '30px 30px'
                }} />
            </div>

            <div className="relative z-10 max-w-5xl w-full px-8">
                <div className="flex items-center gap-3 mb-6">
                    <Target className="w-8 h-8 text-cyan-400" />
                    <h1 className="text-4xl font-bold text-cyan-400">CHALLENGE 2</h1>
                </div>

                <div className="p-8 bg-slate-900/50 border-2 border-cyan-500/30 rounded-xl">
                    <h3 className="text-[#53d22d] font-bold text-2xl mb-6">Your Mission:</h3>

                    <p className="text-lg text-gray-300 mb-6">
                        Write a single line to calculate: <span className="font-mono text-cyan-300">((100 + 50) / 3) + 10</span>
                    </p>

                    <div className="grid grid-cols-2 gap-6">
                         <div className="p-5 bg-cyan-500/10 border border-cyan-500/30 rounded-xl">
                            <h4 className="text-cyan-400 font-bold mb-3">Steps:</h4>
                            <p className="font-mono text-gray-300">1. 100 + 50 = 150</p>
                            <p className="font-mono text-gray-300">2. 150 / 3 = 50</p>
                            <p className="font-mono text-gray-300">3. 50 + 10 = 60</p>
                        </div>

                        <div className="p-5 bg-yellow-500/10 border border-yellow-500/30 rounded-xl">
                            <h4 className="text-yellow-400 font-bold mb-3">Expected Output:</h4>
                            <p className="font-mono text-[#53d22d] text-xl">60.0</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// ============================================================================
// SLIDE 18: CHALLENGE 3 - STRING & MATH COMBO
// ============================================================================
export function Lesson04NewSlide18() {
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
                    <Target className="w-8 h-8 text-cyan-400" />
                    <h1 className="text-4xl font-bold text-cyan-400">CHALLENGE 3</h1>
                </div>

                <div className="p-8 bg-slate-900/50 border-2 border-cyan-500/30 rounded-xl">
                    <h3 className="text-[#53d22d] font-bold text-2xl mb-6">Your Mission:</h3>

                    <p className="text-lg text-gray-300 mb-6">
                        Print a border of <span className="font-mono text-cyan-300">"="</span> calculated by <span className="font-mono text-cyan-300">(10 + 10)</span> length, followed by "CHRONOS SYSTEM"
                    </p>

                    <div className="p-5 bg-yellow-500/10 border border-yellow-500/30 rounded-xl">
                        <h4 className="text-yellow-400 font-bold mb-3">Expected Output:</h4>
                        <div className="font-mono text-[#53d22d] bg-black/50 p-4 rounded">
                            ====================<br/>
                            CHRONOS SYSTEM<br/>
                            ====================
                        </div>
                    </div>
                </div>
                 <div className="mt-6 text-center text-sm text-gray-500">
                    Hint: You can use print("=" * (math))
                </div>
            </div>
        </div>
    );
}

// ============================================================================
// SLIDE 19: CHALLENGE 4 - DEEPLY NESTED
// ============================================================================
export function Lesson04NewSlide19() {
    return (
        <div className="h-screen w-full overflow-hidden bg-gradient-to-br from-cyan-950 via-blue-950 to-slate-950 text-white relative flex items-center justify-center">
             <div className="absolute inset-0 opacity-5">
                 <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(#06b6d4 1px, transparent 1px)',
                    backgroundSize: '30px 30px'
                }} />
            </div>

            <div className="relative z-10 max-w-5xl w-full px-8">
                <div className="flex items-center gap-3 mb-6">
                     <Target className="w-8 h-8 text-cyan-400" />
                    <h1 className="text-4xl font-bold text-cyan-400">CHALLENGE 4</h1>
                </div>

                <div className="p-8 bg-slate-900/50 border-2 border-cyan-500/30 rounded-xl">
                    <h3 className="text-[#53d22d] font-bold text-2xl mb-6">Your Mission:</h3>

                    <p className="text-lg text-gray-300 mb-6">
                         Solve the Ultimate Expression: <br/>
                         <span className="font-mono text-cyan-300 text-2xl">(((5 + 3) * 2) ** 2) - 10</span>
                    </p>

                     <div className="space-y-2 font-mono text-gray-400 text-center">
                        <p>Step 1: 5 + 3 = 8</p>
                        <p>Step 2: 8 * 2 = 16</p>
                        <p>Step 3: 16 ** 2 = 256</p>
                        <p>Step 4: 256 - 10 = ?</p>
                    </div>

                    <div className="mt-6 text-center">
                         <h4 className="text-yellow-400 font-bold mb-2">Expected Output:</h4>
                         <p className="font-mono text-[#53d22d] text-4xl font-bold">246</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

// ============================================================================
// SLIDE 20: FULL PROGRAM EXAMPLE
// ============================================================================
export function Lesson04NewSlide20() {
    return (
        <div className="h-screen w-full overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-950 text-white relative flex items-center justify-center">
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'linear-gradient(cyan 1px, transparent 1px), linear-gradient(90deg, cyan 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }} />
            </div>

            <div className="relative z-10 max-w-4xl w-full px-8">
                <h1 className="text-4xl font-bold text-cyan-400 mb-8">INTEGRATION</h1>

                <p className="text-xl text-gray-300 mb-8">
                    Putting it all together in a real script:
                </p>

                <Terminal variant="success" title="DamageCalculator.py">
                    <CodeLine># Combat damage calculator</CodeLine>
                    <CodeLine>base = 50</CodeLine>
                    <CodeLine>bonus = 20</CodeLine>
                    <CodeLine>multiplier = 2</CodeLine>
                    <CodeLine>&nbsp;</CodeLine>
                    <CodeLine>print("=" * 30)</CodeLine>
                    <CodeLine>print("DAMAGE REPORT")</CodeLine>
                    <CodeLine>print("=" * 30)</CodeLine>
                    <CodeLine>print("Total:", (base + bonus) * multiplier)</CodeLine>
                    <CodeLine>print("=" * 30)</CodeLine>

                    <CodeLine output>==============================</CodeLine>
                    <CodeLine output>DAMAGE REPORT</CodeLine>
                    <CodeLine output>==============================</CodeLine>
                    <CodeLine output>Total: 140</CodeLine>
                    <CodeLine output>==============================</CodeLine>
                </Terminal>
            </div>
        </div>
    );
}

// ============================================================================
// SLIDE 21: MASTERY CHECKLIST
// ============================================================================
export function Lesson04NewSlide21() {
    return (
        <div className="h-screen w-full overflow-hidden bg-gradient-to-br from-cyan-950 via-blue-950 to-slate-950 text-white relative flex items-center justify-center">
            <div className="absolute inset-0 opacity-5">
                 <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(#06b6d4 1px, transparent 1px)',
                    backgroundSize: '30px 30px'
                }} />
            </div>

            <div className="relative z-10 max-w-4xl w-full px-8">
                <div className="flex items-center gap-4 mb-8">
                    <BookCheck className="w-12 h-12 text-[#53d22d]" />
                    <h1 className="text-4xl font-bold text-[#53d22d]">MISSION CHECKLIST</h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                        {[
                            "Nested math with parentheses",
                            "Order of evaluation (inside-out)",
                            "Functions inside functions",
                            "Calculations inside print()",
                            "Complex multi-level nesting"
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-3 p-3 bg-slate-900/50 border border-[#53d22d]/30 rounded-lg">
                                <div className="text-[#53d22d]">✓</div>
                                <span className="text-gray-300">{item}</span>
                            </div>
                        ))}
                    </div>

                    <ProTip>
                         <p className="text-lg italic mb-3">
                            "Nesting is the foundation of all complex programs. Master it now, and you'll build anything later."
                        </p>
                        <p className="text-sm text-gray-400">
                            - Chief Engineer Kael
                        </p>
                    </ProTip>
                </div>
            </div>
        </div>
    );
}

// ============================================================================
// SLIDE 22: LESSON CLEARED
// ============================================================================
export function Lesson04NewSlide22() {
    return (
        <div className="h-screen w-full overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-950 text-white relative flex items-center justify-center">
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'linear-gradient(cyan 1px, transparent 1px), linear-gradient(90deg, cyan 1px, transparent 1px)',
                    backgroundSize: '50px 50px'
                }} />
            </div>

            <div className="relative z-10 text-center">
                <div className="flex justify-center mb-8">
                    <Trophy className="w-32 h-32 text-yellow-400 animate-bounce" />
                </div>

                <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 mb-6">
                    LESSON CLEARED!
                </h1>

                <div className="text-2xl text-cyan-400 font-mono mb-12 tracking-widest">
                    NESTED PROTOCOLS: MASTERED
                </div>

                <div className="inline-block px-8 py-4 bg-yellow-500/20 border-2 border-yellow-500 rounded-xl mb-12 transform hover:scale-105 transition-transform">
                    <div className="text-3xl font-bold text-yellow-400">+150 XP EARNED</div>
                </div>

                <div className="text-gray-400 font-mono">
                    NEXT: MODULE 2 - LOGIC & FLOW
                </div>
            </div>
        </div>
    );
}

// Export all slides
export {
    Lesson04NewSlide16,
    Lesson04NewSlide17,
    Lesson04NewSlide18,
    Lesson04NewSlide19,
    Lesson04NewSlide20,
    Lesson04NewSlide21,
    Lesson04NewSlide22
};
