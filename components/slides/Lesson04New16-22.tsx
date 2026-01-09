/**
 * Lesson 04 - NESTED CONSTRUCTIONS
 * Slides 16-22: Practice & Closure
 */

import React from 'react';
import { Layers, Code2, Zap, Target, BookCheck, Trophy, Award, AlertTriangle, Lightbulb } from 'lucide-react';
import { Terminal, CodeLine } from './Terminal';
import { CharacterQuote, ProTip, RealWorldExample } from './CharacterQuote';

// A simple component for challenges, as one was not provided in the template.
function ChallengeCard({ title, mission, expectedOutput }: { title: string, mission: string, expectedOutput: string }) {
    return (
        <div className="bg-slate-900/50 border-2 border-cyan-500/30 rounded-xl p-6">
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">{title}</h2>
            <p className="text-gray-300 mb-2"><span className="font-bold">Mission:</span> {mission}</p>
            <p className="text-gray-300"><span className="font-bold">Expected Output:</span> <span className="font-mono text-green-400">{expectedOutput}</span></p>
        </div>
    );
}


// ============================================================================
// SLIDE 16: Challenge 1 - Simple Calculator
// ============================================================================
function Lesson04NewSlide16() {
    return (
        <div className="h-screen w-full overflow-hidden bg-gradient-to-br from-cyan-950 via-blue-950 to-slate-950 text-white flex items-center justify-center">
            <div className="relative z-10 max-w-4xl w-full px-8">
                <ChallengeCard
                    title="Challenge 1 - Simple Calculator"
                    mission="Calculate (25 + 15) * 3"
                    expectedOutput="120"
                />
            </div>
        </div>
    );
}

// ============================================================================
// SLIDE 17: Challenge 2 - Complex Expression
// ============================================================================
function Lesson04NewSlide17() {
    return (
        <div className="h-screen w-full overflow-hidden bg-gradient-to-br from-cyan-950 via-blue-950 to-slate-950 text-white flex items-center justify-center">
            <div className="relative z-10 max-w-4xl w-full px-8">
                <ChallengeCard
                    title="Challenge 2 - Complex Expression"
                    mission="Calculate ((100 + 50) / 3) + 10"
                    expectedOutput="60.0"
                />
            </div>
        </div>
    );
}

// ============================================================================
// SLIDE 18: Challenge 3 - String & Math Combo
// ============================================================================
function Lesson04NewSlide18() {
    return (
        <div className="h-screen w-full overflow-hidden bg-gradient-to-br from-cyan-950 via-blue-950 to-slate-950 text-white flex items-center justify-center">
            <div className="relative z-10 max-w-4xl w-full px-8">
                 <ChallengeCard
                    title="Challenge 3 - String & Math Combo"
                    mission='Print a border with the text "CHRONOS SYSTEM" in between, using "=" * (10 + 10)'
                    expectedOutput="====================\nCHRONOS SYSTEM\n===================="
                />
            </div>
        </div>
    );
}

// ============================================================================
// SLIDE 19: Challenge 4 - Deeply Nested
// ============================================================================
function Lesson04NewSlide19() {
    return (
        <div className="h-screen w-full overflow-hidden bg-gradient-to-br from-cyan-950 via-blue-950 to-slate-950 text-white flex items-center justify-center">
            <div className="relative z-10 max-w-4xl w-full px-8">
                 <ChallengeCard
                    title="Challenge 4 - Deeply Nested"
                    mission="Calculate (((5 + 3) * 2) ** 2) - 10"
                    expectedOutput="246"
                />
                 <div className="mt-8 p-6 bg-cyan-500/10 border-l-4 border-cyan-500 rounded-r-xl">
                    <p># (5+3)=8</p>
                    <p># 8*2=16</p>
                    <p># 16**2=256</p>
                    <p># 256-10=246</p>
                </div>
            </div>
        </div>
    );
}

// ============================================================================
// SLIDE 20: Full Program Example
// ============================================================================
function Lesson04NewSlide20() {
    return (
        <div className="h-screen w-full overflow-hidden bg-gradient-to-br from-cyan-950 via-blue-950 to-slate-950 text-white flex items-center justify-center">
            <div className="relative z-10 max-w-4xl w-full px-8">
                <h1 className="text-4xl font-bold text-cyan-400 mb-6">Full Program Example</h1>
                <Terminal title="Python">
                    <CodeLine># Combat damage calculator</CodeLine>
                    <CodeLine>base = 50</CodeLine>
                    <CodeLine>bonus = 20</CodeLine>
                    <CodeLine>multiplier = 2</CodeLine>
                    <CodeLine>print("=" * 30)</CodeLine>
                    <CodeLine>print("DAMAGE REPORT")</CodeLine>
                    <CodeLine>print("=" * 30)</CodeLine>
                    <CodeLine>print("Total:", (base + bonus) * multiplier)</CodeLine>
                    <CodeLine>print("=" * 30)</CodeLine>
                </Terminal>
            </div>
        </div>
    );
}

// ============================================================================
// SLIDE 21: Mastery Checklist & Kael's Wisdom
// ============================================================================
function Lesson04NewSlide21() {
    return (
        <div className="h-screen w-full overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-950 text-white relative flex items-center justify-center">
            <div className="relative z-10 max-w-5xl w-full px-8">
                <div className="grid grid-cols-2 gap-8">
                    <div>
                        <h2 className="text-3xl font-bold text-green-400 mb-4">Mastery Checklist</h2>
                        <ul className="space-y-2 text-lg">
                            <li className="flex items-center"><BookCheck className="w-5 h-5 mr-2 text-green-400" /> Nested math with parentheses</li>
                            <li className="flex items-center"><BookCheck className="w-5 h-5 mr-2 text-green-400" /> Order of evaluation (inside-out)</li>
                            <li className="flex items-center"><BookCheck className="w-5 h-5 mr-2 text-green-400" /> Functions inside functions</li>
                            <li className="flex items-center"><BookCheck className="w-5 h-5 mr-2 text-green-400" /> Calculations in print()</li>
                            <li className="flex items-center"><BookCheck className="w-5 h-5 mr-2 text-green-400" /> Complex multi-level nesting</li>
                        </ul>
                    </div>
                    <ProTip>
                        <p>"Nesting is the foundation of all complex programs. Master it now, and you'll build anything later."</p>
                    </ProTip>
                </div>
            </div>
        </div>
    );
}

// ============================================================================
// SLIDE 22: Lesson Cleared!
// ============================================================================
function Lesson04NewSlide22() {
    return (
        <div className="h-screen w-full overflow-hidden bg-gradient-to-br from-green-950 via-blue-950 to-cyan-950 text-white flex items-center justify-center relative">
            <div className="text-center">
                <Trophy className="w-24 h-24 text-yellow-400 mx-auto mb-8 animate-bounce" />
                <h1 className="text-6xl font-bold text-green-400">LESSON CLEARED!</h1>
                <p className="text-2xl text-gray-300 mt-2">NESTED PROTOCOLS: MASTERED</p>
                <p className="text-xl text-yellow-400 mt-8">+150 XP EARNED</p>
                <p className="text-lg text-cyan-400 mt-4">Next: Module 2 - Logic & Flow</p>
            </div>
        </div>
    );
}


export {
    Lesson04NewSlide16,
    Lesson04NewSlide17,
    Lesson04NewSlide18,
    Lesson04NewSlide19,
    Lesson04NewSlide20,
    Lesson04NewSlide21,
    Lesson04NewSlide22
};
