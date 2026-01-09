/**
 * Lesson 02 - IMPROVED SLIDES 16-30
 * Advanced Techniques, Practice, and Closure
 */

import React from 'react';
import { Zap, Code2, AlertTriangle, BookCheck, Trophy, Rocket, Star, Target, Award } from 'lucide-react';
import { Terminal, CodeLine } from './Terminal';
import { CharacterQuote, ProTip } from './CharacterQuote';

// ============================================================================
// SLIDE 16: UPDATE SHORTCUTS
// ============================================================================
export function Lesson02ImprovedSlide16() {
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
                    <Zap className="w-8 h-8 text-[#53d22d]" />
                    <h1 className="text-4xl font-bold text-[#53d22d]">UPDATE SHORTCUTS</h1>
                </div>

                <div className="grid grid-cols-2 gap-8 mb-8">
                    <div>
                        <h3 className="text-gray-400 mb-3">THE LONG WAY:</h3>
                        <Terminal variant="default" title="Python">
                            <CodeLine>score = score + 10</CodeLine>
                            <CodeLine>health = health - 5</CodeLine>
                        </Terminal>
                    </div>

                    <div>
                        <h3 className="text-[#53d22d] font-bold mb-3">THE SHORTCUT:</h3>
                        <Terminal variant="success" title="Python">
                            <CodeLine>score += 10  # Same as: score = score + 10</CodeLine>
                            <CodeLine>health -= 5  # Same as: health = health - 5</CodeLine>
                        </Terminal>
                    </div>
                </div>

                <div className="p-6 bg-slate-900/50 border border-slate-700 rounded-xl">
                    <h3 className="text-cyan-400 font-bold text-xl mb-4">ALL SHORTCUTS:</h3>
                    <div className="grid grid-cols-4 gap-4 font-mono text-sm">
                        <div className="p-3 bg-cyan-500/10 border border-cyan-500/30 rounded text-center">
                            <div className="text-[#53d22d] font-bold mb-1">x += 5</div>
                            <div className="text-gray-500 text-xs">Add</div>
                        </div>
                        <div className="p-3 bg-cyan-500/10 border border-cyan-500/30 rounded text-center">
                            <div className="text-[#53d22d] font-bold mb-1">x -= 3</div>
                            <div className="text-gray-500 text-xs">Subtract</div>
                        </div>
                        <div className="p-3 bg-cyan-500/10 border border-cyan-500/30 rounded text-center">
                            <div className="text-[#53d22d] font-bold mb-1">x *= 2</div>
                            <div className="text-gray-500 text-xs">Multiply</div>
                        </div>
                        <div className="p-3 bg-cyan-500/10 border border-cyan-500/30 rounded text-center">
                            <div className="text-[#53d22d] font-bold mb-1">x /= 4</div>
                            <div className="text-gray-500 text-xs">Divide</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// ============================================================================
// SLIDE 17: COMMON MISTAKES
// ============================================================================
export function Lesson02ImprovedSlide17() {
    return (
        <div className="h-screen w-full overflow-hidden bg-gradient-to-br from-cyan-950 via-blue-950 to-slate-950 text-white relative flex items-center justify-center">
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'linear-gradient(#53d22d 1px, transparent 1px), linear-gradient(90deg, #53d22d 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }} />
            </div>

            <div className="relative z-10 max-w-5xl w-full px-8">
                <div className="flex items-center gap-3 mb-6">
                    <AlertTriangle className="w-8 h-8 text-red-500" />
                    <h1 className="text-4xl font-bold text-red-500">COMMON MISTAKES</h1>
                </div>

                <div className="space-y-6">
                    <div className="p-5 bg-red-500/10 border-l-4 border-red-500 rounded-r-xl">
                        <h3 className="text-red-400 font-bold text-lg mb-3">ERROR #1: Using Before Creating</h3>
                        <Terminal variant="error" title="Python">
                            <CodeLine>print(score)</CodeLine>
                            <CodeLine output className="text-red-400">NameError: name 'score' is not defined</CodeLine>
                        </Terminal>
                        <p className="text-gray-400 text-sm mt-2">You must create it first!</p>
                    </div>

                    <div className="p-5 bg-red-500/10 border-l-4 border-red-500 rounded-r-xl">
                        <h3 className="text-red-400 font-bold text-lg mb-3">ERROR #2: Typos (Case Matters!)</h3>
                        <Terminal variant="error" title="Python">
                            <CodeLine>playerScore = 100</CodeLine>
                            <CodeLine>print(playerscore)  # Wrong case!</CodeLine>
                            <CodeLine output className="text-red-400">NameError: name 'playerscore' is not defined</CodeLine>
                        </Terminal>
                    </div>

                    <div className="p-5 bg-red-500/10 border-l-4 border-red-500 rounded-r-xl">
                        <h3 className="text-red-400 font-bold text-lg mb-3">ERROR #3: Reserved Words</h3>
                        <Terminal variant="error" title="Python">
                            <CodeLine>print = 5  # Don't redefine Python keywords!</CodeLine>
                            <CodeLine output className="text-red-400">SyntaxError: invalid syntax</CodeLine>
                        </Terminal>
                    </div>
                </div>
            </div>
        </div>
    );
}

// ============================================================================
// SLIDE 18-20: CHALLENGES
// ============================================================================
export function Lesson02ImprovedSlide18() {
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
                    <h1 className="text-4xl font-bold text-cyan-400">CHALLENGE 1: BATTLE SIMULATOR</h1>
                </div>

                <Terminal variant="success" title="Combat System">
                    <CodeLine>hero_health = 100</CodeLine>
                    <CodeLine>monster_health = 80</CodeLine>
                    <CodeLine>&nbsp;</CodeLine>
                    <CodeLine>hero_attack = 25</CodeLine>
                    <CodeLine>monster_attack = 15</CodeLine>
                    <CodeLine>&nbsp;</CodeLine>
                    <CodeLine># Round 1</CodeLine>
                    <CodeLine>monster_health -= hero_attack</CodeLine>
                    <CodeLine>print("Monster health:", monster_health)</CodeLine>
                    <CodeLine>&nbsp;</CodeLine>
                    <CodeLine>hero_health -= monster_attack</CodeLine>
                    <CodeLine>print("Hero health:", hero_health)</CodeLine>
                    <CodeLine>&nbsp;</CodeLine>
                    <CodeLine># Who's winning?</CodeLine>
                </Terminal>

                <div className="mt-6 p-5 bg-yellow-500/10 border-l-4 border-yellow-500 rounded-r-xl">
                    <p className="text-yellow-300 font-bold">
                        🎯 TRY IT: Simulate 3 rounds of combat!
                    </p>
                </div>
            </div>
        </div>
    );
}

export function Lesson02ImprovedSlide19() {
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
                    <h1 className="text-4xl font-bold text-[#53d22d]">CHALLENGE 2: CALCULATOR</h1>
                </div>

                <Terminal variant="success" title="Calculator with Memory">
                    <CodeLine># Simple calculator</CodeLine>
                    <CodeLine>num1 = 25</CodeLine>
                    <CodeLine>num2 = 7</CodeLine>
                    <CodeLine>&nbsp;</CodeLine>
                    <CodeLine>sum_result = num1 + num2</CodeLine>
                    <CodeLine>diff_result = num1 - num2</CodeLine>
                    <CodeLine>prod_result = num1 * num2</CodeLine>
                    <CodeLine>quot_result = num1 / num2</CodeLine>
                    <CodeLine>&nbsp;</CodeLine>
                    <CodeLine>print("Numbers:", num1, "and", num2)</CodeLine>
                    <CodeLine>print("Sum:", sum_result)</CodeLine>
                    <CodeLine>print("Difference:", diff_result)</CodeLine>
                    <CodeLine>print("Product:", prod_result)</CodeLine>
                    <CodeLine>print("Quotient:", quot_result)</CodeLine>
                </Terminal>
            </div>
        </div>
    );
}

export function Lesson02ImprovedSlide20() {
    return (
        <div className="h-screen w-full overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-950 text-white relative flex items-center justify-center">
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'linear-gradient(#53d22d 1px, transparent 1px), linear-gradient(90deg, #53d22d 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }} />
            </div>

            <div className="relative z-10 max-w-4xl w-full px-8">
                <h1 className="text-4xl font-bold text-cyan-400 mb-6">CHALLENGE 3: CHARACTER PROFILE</h1>

                <Terminal variant="success" title="Agent Profile Builder">
                    <CodeLine># Character creation</CodeLine>
                    <CodeLine>agent_name = "Nova"</CodeLine>
                    <CodeLine>level = 1</CodeLine>
                    <CodeLine>health = 100</CodeLine>
                    <CodeLine>attack = 15</CodeLine>
                    <CodeLine>defense = 10</CodeLine>
                    <CodeLine>&nbsp;</CodeLine>
                    <CodeLine># Display stats</CodeLine>
                    <CodeLine>print("=" * 30)</CodeLine>
                    <CodeLine>print("  AGENT PROFILE")</CodeLine>
                    <CodeLine>print("=" * 30)</CodeLine>
                    <CodeLine>print("Name:", agent_name)</CodeLine>
                    <CodeLine>print("Level:", level)</CodeLine>
                    <CodeLine>print("Health:", health)</CodeLine>
                    <CodeLine>print("Attack:", attack)</CodeLine>
                    <CodeLine>print("Defense:", defense)</CodeLine>
                    <CodeLine>print("=" * 30)</CodeLine>
                </Terminal>
            </div>
        </div>
    );
}

// ============================================================================
// SLIDES 21-25: ADVANCED & FULL PROGRAMS
// ============================================================================
export function Lesson02ImprovedSlide21() {
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
                    <Star className="w-8 h-8 text-yellow-500" />
                    <h1 className="text-4xl font-bold text-yellow-500">ADVANCED: MULTIPLE ASSIGNMENT</h1>
                </div>

                <p className="text-xl text-gray-300 mb-6">Python magic tricks:</p>

                <div className="space-y-6">
                    <div>
                        <h3 className="text-cyan-400 font-bold mb-3">Assign same value to multiple variables:</h3>
                        <Terminal variant="success" title="Python">
                            <CodeLine>a = b = c = 0</CodeLine>
                            <CodeLine>print(a, b, c)</CodeLine>
                            <CodeLine output>0 0 0</CodeLine>
                        </Terminal>
                    </div>

                    <div>
                        <h3 className="text-cyan-400 font-bold mb-3">Assign different values in one line:</h3>
                        <Terminal variant="success" title="Python">
                            <CodeLine>x, y, z = 10, 20, 30</CodeLine>
                            <CodeLine>print(x, y, z)</CodeLine>
                            <CodeLine output>10 20 30</CodeLine>
                        </Terminal>
                    </div>

                    <div>
                        <h3 className="text-[#53d22d] font-bold mb-3">✨ Swap without temp:</h3>
                        <Terminal variant="success" title="Python">
                            <CodeLine>a, b = 5, 10</CodeLine>
                            <CodeLine>a, b = b, a  # Swap!</CodeLine>
                            <CodeLine>print(a, b)</CodeLine>
                            <CodeLine output>10 5</CodeLine>
                        </Terminal>
                    </div>
                </div>
            </div>
        </div>
    );
}

// ============================================================================
// SLIDES 26-30: CLOSURE
// ============================================================================
export function Lesson02ImprovedSlide26() {
    return (
        <div className="h-screen w-full overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-950 text-white relative flex items-center justify-center">
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'linear-gradient(cyan 1px, transparent 1px), linear-gradient(90deg, cyan 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }} />
            </div>

            <div className="relative z-10 max-w-4xl w-full px-8">
                <h1 className="text-4xl font-bold text-[#53d22d] mb-8 text-center">CHIEF ENGINEER'S PARTING WISDOM</h1>

                <CharacterQuote character="kael">
                    <div className="space-y-4 text-lg">
                        <p className="italic">
                            "Variables are the <span className="text-[#53d22d] font-bold">FOUNDATION</span> of programming."
                        </p>
                        <p className="italic">
                            "Every app, game, and website you use has <span className="text-cyan-400 font-bold">MILLIONS</span> of variables storing data in RAM right now."
                        </p>
                        <p className="italic">
                            "Master variables, and you're <span className="text-[#53d22d] font-bold">50%</span> of the way to being a real programmer!"
                        </p>
                    </div>
                </CharacterQuote>

                <div className="mt-8 p-6 bg-cyan-500/10 border-2 border-cyan-500/30 rounded-xl text-center">
                    <p className="text-xl text-gray-300">
                        You now control the <span className="text-[#53d22d] font-bold">MEMORY GRID</span>! 🎯
                    </p>
                </div>
            </div>
        </div>
    );
}

export function Lesson02ImprovedSlide27() {
    return (
        <div className="h-screen w-full overflow-hidden bg-gradient-to-br from-cyan-950 via-blue-950 to-slate-950 text-white relative flex items-center justify-center">
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
                            'What RAM and memory addresses are',
                            'Creating and naming variables',
                            'Storing and changing values',
                            'Using variables in calculations',
                            'Update shortcuts (+=, -=, etc.)',
                            'Swapping variables with temp'
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

export function Lesson02ImprovedSlide28() {
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
                    <Rocket className="w-8 h-8 text-cyan-400" />
                    <h1 className="text-4xl font-bold text-cyan-400">NEXT MISSION</h1>
                </div>

                <div className="p-8 bg-cyan-500/10 border-2 border-cyan-500/30 rounded-xl text-center">
                    <h2 className="text-3xl font-bold text-[#53d22d] mb-4">LESSON 03: STRINGS</h2>
                    <p className="text-xl text-gray-300 mb-6">
                        The Index Train: Accessing characters one by one
                    </p>
                    <div className="inline-block px-6 py-3 bg-[#53d22d]/20 border-2 border-[#53d22d]/50 rounded-lg">
                        <p className="text-[#53d22d] font-mono font-bold">
                            UNLOCKING: Text Manipulation Protocols
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export function Lesson02ImprovedSlide29() {
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
                    <Award className="w-8 h-8 text-yellow-500" />
                    <h1 className="text-4xl font-bold text-yellow-500">YOUR ASSIGNMENT</h1>
                </div>

                <div className="p-8 bg-slate-900/50 border-2 border-yellow-500/30 rounded-xl">
                    <h3 className="text-yellow-400 font-bold text-2xl mb-6">Create a Character Stats Tracker:</h3>
                    <div className="space-y-4 text-lg text-gray-300">
                        <div className="flex items-start gap-3">
                            <span className="text-[#53d22d] font-bold">1.</span>
                            <p>Create 5 variables (name, level, health, mana, gold)</p>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="text-[#53d22d] font-bold">2.</span>
                            <p>Display them in a formatted profile</p>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="text-[#53d22d] font-bold">3.</span>
                            <p>Simulate gaining experience: <code className="text-cyan-400">exp += 250</code></p>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="text-[#53d22d] font-bold">4.</span>
                            <p>Simulate taking damage: <code className="text-cyan-400">health -= 30</code></p>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="text-[#53d22d] font-bold">5.</span>
                            <p>Print updated stats</p>
                        </div>
                    </div>

                    <div className="mt-6 p-4 bg-[#53d22d]/10 border border-[#53d22d]/30 rounded-lg">
                        <p className="text-[#53d22d] font-bold">
                            ⭐ BONUS: Use += shortcuts for everything!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export function Lesson02ImprovedSlide30() {
    return (
        <div className="h-screen w-full overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-950 text-white flex items-center justify-center relative">
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
                    MEMORY CONTAINERS: MASTERED
                </h2>

                <div className="inline-block px-8 py-3 rounded-lg bg-[#53d22d]/20 border-2 border-[#53d22d]/50">
                    <p className="text-[#53d22d] font-mono font-bold text-lg">
                        LESSON 02 COMPLETE • +250 XP EARNED
                    </p>
                </div>

                <p className="mt-8 text-xl text-gray-400">
                    Remember: Variables are labeled containers in memory.
                    <br />
                    <span className="text-[#53d22d] font-bold">You now control the RAM!</span>
                </p>
            </div>
        </div>
    );
}
