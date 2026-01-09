/**
 * Lesson 02 - IMPROVED SLIDES 11-30
 * Operations, Practice, and Closure
 */

import React from 'react';
import { RefreshCw, Calculator, Users, Shuffle, Zap, Trophy, BookCheck, Rocket, Star } from 'lucide-react';
import { Terminal, CodeLine } from './Terminal';
import { CharacterQuote, RealWorldExample } from './CharacterQuote';

// ============================================================================
// SLIDE 11: VARIABLES CAN CHANGE
// ============================================================================
export function Lesson02ImprovedSlide11() {
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
                    <RefreshCw className="w-8 h-8 text-cyan-400" />
                    <h1 className="text-4xl font-bold text-cyan-400">VARIABLES CAN CHANGE</h1>
                </div>

                <p className="text-xl text-gray-300 mb-8">
                    That's why they're called <span className="text-[#53d22d] font-bold">vari</span>ables!
                </p>

                <Terminal variant="success" title="Python">
                    <CodeLine>health = 100</CodeLine>
                    <CodeLine>print(health)</CodeLine>
                    <CodeLine output>100</CodeLine>
                    <CodeLine>&nbsp;</CodeLine>
                    <CodeLine>health = 75  # Took damage!</CodeLine>
                    <CodeLine>print(health)</CodeLine>
                    <CodeLine output>75</CodeLine>
                    <CodeLine>&nbsp;</CodeLine>
                    <CodeLine>health = health - 25</CodeLine>
                    <CodeLine>print(health)</CodeLine>
                    <CodeLine output>50</CodeLine>
                </Terminal>

                <div className="mt-8 p-6 bg-cyan-500/10 border-l-4 border-cyan-500 rounded-r-xl">
                    <p className="text-gray-300 text-lg">
                        The old value gets <span className="text-red-400 font-bold">replaced</span> with the new one.
                        <br />
                        <span className="text-sm text-gray-500">Python doesn't keep a history—only the current value matters.</span>
                    </p>
                </div>
            </div>
        </div>
    );
}

// ============================================================================
// SLIDE 12: USING VARIABLES IN MATH
// ============================================================================
export function Lesson02ImprovedSlide12() {
    return (
        <div className="h-screen w-full overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-950 text-white relative flex items-center justify-center">
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(#06b6d4 1px, transparent 1px)',
                    backgroundSize: '30px 30px'
                }} />
            </div>

            <div className="relative z-10 max-w-5xl w-full px-8">
                <div className="flex items-center gap-3 mb-6">
                    <Calculator className="w-8 h-8 text-[#53d22d]" />
                    <h1 className="text-4xl font-bold text-[#53d22d]">USING VARIABLES IN MATH</h1>
                </div>

                <div className="grid grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-cyan-400 font-bold mb-3">COMBAT DAMAGE:</h3>
                        <Terminal variant="success" title="Python">
                            <CodeLine>attack = 10</CodeLine>
                            <CodeLine>defense = 5</CodeLine>
                            <CodeLine>&nbsp;</CodeLine>
                            <CodeLine>damage = attack - defense</CodeLine>
                            <CodeLine>print(damage)</CodeLine>
                            <CodeLine output>5</CodeLine>
                        </Terminal>
                    </div>

                    <div>
                        <h3 className="text-cyan-400 font-bold mb-3">SHOPPING TOTAL:</h3>
                        <Terminal variant="success" title="Python">
                            <CodeLine>price = 50</CodeLine>
                            <CodeLine>quantity = 3</CodeLine>
                            <CodeLine>&nbsp;</CodeLine>
                            <CodeLine>total = price * quantity</CodeLine>
                            <CodeLine>print(total)</CodeLine>
                            <CodeLine output>150</CodeLine>
                        </Terminal>
                    </div>
                </div>

                <div className="mt-8 p-6 bg-[#53d22d]/10 border-2 border-[#53d22d]/30 rounded-xl text-center">
                    <p className="text-xl text-gray-300">
                        Variables make calculations <span className="text-[#53d22d] font-bold">readable</span> and <span className="text-[#53d22d] font-bold">reusable</span>!
                    </p>
                </div>
            </div>
        </div>
    );
}

// ============================================================================
// SLIDE 13: REAL-WORLD EXAMPLE (Aria)
// ============================================================================
export function Lesson02ImprovedSlide13() {
    return (
        <div className="h-screen w-full overflow-hidden bg-gradient-to-br from-cyan-950 via-blue-950 to-slate-950 text-white relative flex items-center justify-center">
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'linear-gradient(#53d22d 1px, transparent 1px), linear-gradient(90deg, #53d22d 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }} />
            </div>

            <div className="relative z-10 max-w-4xl w-full px-8">
                <h1 className="text-4xl font-bold text-cyan-400 mb-6">REAL-WORLD: GAME HEALTH SYSTEM</h1>

                <RealWorldExample>
                    <p className="mb-4 italic">
                        "Imagine a combat scenario in the Chronos simulation:"
                    </p>
                    <Terminal variant="success" title="Combat Simulation">
                        <CodeLine>player_health = 100</CodeLine>
                        <CodeLine>enemy_damage = 23</CodeLine>
                        <CodeLine>&nbsp;</CodeLine>
                        <CodeLine>player_health = player_health - enemy_damage</CodeLine>
                        <CodeLine>print("Health:", player_health)</CodeLine>
                        <CodeLine output>Health: 77</CodeLine>
                    </Terminal>
                    <p className="mt-4 text-sm">
                        The computer <span className="text-cyan-400 font-bold">READS</span> the old value (100),
                        subtracts 23, then <span className="text-[#53d22d] font-bold">WRITES</span> back 77 into the same container!
                    </p>
                </RealWorldExample>
            </div>
        </div>
    );
}

// ============================================================================
// SLIDE 14: MULTIPLE VARIABLES
// ============================================================================
export function Lesson02ImprovedSlide14() {
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
                    <Users className="w-8 h-8 text-cyan-400" />
                    <h1 className="text-4xl font-bold text-cyan-400">MULTIPLE VARIABLES</h1>
                </div>

                <p className="text-xl text-gray-300 mb-6">
                    You can create as many as you need:
                </p>

                <Terminal variant="success" title="Agent Profile System">
                    <CodeLine>name = "Shadow"</CodeLine>
                    <CodeLine>level = 5</CodeLine>
                    <CodeLine>experience = 1250</CodeLine>
                    <CodeLine>gold = 300</CodeLine>
                    <CodeLine>health = 85</CodeLine>
                    <CodeLine>mana = 120</CodeLine>
                    <CodeLine>&nbsp;</CodeLine>
                    <CodeLine>print(name, "is level", level)</CodeLine>
                    <CodeLine>print("Gold:", gold)</CodeLine>
                    <CodeLine>&nbsp;</CodeLine>
                    <CodeLine output>Shadow is level 5</CodeLine>
                    <CodeLine output>Gold: 300</CodeLine>
                </Terminal>

                <div className="mt-6 p-5 bg-cyan-500/10 border-l-4 border-cyan-500 rounded-r-xl">
                    <p className="text-gray-300">
                        Each variable is independent—changing one doesn't affect the others.
                    </p>
                </div>
            </div>
        </div>
    );
}

// ============================================================================
// SLIDE 15: SWAPPING VARIABLES (Error-First Teaching)
// ============================================================================
export function Lesson02ImprovedSlide15() {
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
                    <Shuffle className="w-8 h-8 text-yellow-500" />
                    <h1 className="text-4xl font-bold text-yellow-500">CHALLENGE: SWAPPING VARIABLES</h1>
                </div>

                <p className="text-xl text-gray-300 mb-6">
                    How do we swap two variables?
                </p>

                <div className="grid grid-cols-2 gap-6 mb-6">
                    <div className="p-6 bg-red-500/10 border-2 border-red-500/50 rounded-xl">
                        <h3 className="text-red-400 font-bold text-xl mb-3">❌ THIS DOESN'T WORK:</h3>
                        <Terminal variant="error" title="Python">
                            <CodeLine>a = 10</CodeLine>
                            <CodeLine>b = 20</CodeLine>
                            <CodeLine>&nbsp;</CodeLine>
                            <CodeLine>a = b  # Now a=20, but old a (10) is lost!</CodeLine>
                            <CodeLine>b = a  # b=20 (both are 20 now!)</CodeLine>
                        </Terminal>
                    </div>

                    <div className="p-6 bg-[#53d22d]/10 border-2 border-[#53d22d]/50 rounded-xl">
                        <h3 className="text-[#53d22d] font-bold text-xl mb-3">✅ USE A TEMPORARY CONTAINER:</h3>
                        <Terminal variant="success" title="Python">
                            <CodeLine>a = 10</CodeLine>
                            <CodeLine>b = 20</CodeLine>
                            <CodeLine>&nbsp;</CodeLine>
                            <CodeLine>temp = a  # temp=10</CodeLine>
                            <CodeLine>a = b     # a=20</CodeLine>
                            <CodeLine>b = temp  # b=10</CodeLine>
                        </Terminal>
                    </div>
                </div>

                <CharacterQuote character="aria">
                    <p className="italic">
                        "Swapping is like switching drinks between two cups. You can't pour cup A into cup B without spilling—
                        you need a <span className="text-cyan-400 font-bold">THIRD cup</span> to hold one drink temporarily!"
                    </p>
                </CharacterQuote>
            </div>
        </div>
    );
}

// ============================================================================
// SLIDES 16-30 CONTINUE...
// (Due to length, I'll create these in the next file)
// ============================================================================
