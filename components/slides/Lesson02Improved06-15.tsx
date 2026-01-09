/**
 * Lesson 02 - IMPROVED SLIDES 06-15
 * Gold Standard Pedagogy: Core Concept & Operations
 */

import React from 'react';
import { Box, Tag, Code2, AlertCircle, CheckCircle2, Lightbulb, ArrowRight, Copy } from 'lucide-react';
import { Terminal, CodeLine } from './Terminal';
import { CharacterQuote, ProTip } from './CharacterQuote';

// ============================================================================
// SLIDE 06: VISUAL METAPHOR (Data Vault Diagram)
// ============================================================================
export function Lesson02ImprovedSlide06() {
    return (
        <div className="h-screen w-full overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-950 text-white relative flex items-center justify-center">
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'linear-gradient(to right, #1e293b 1px, transparent 1px), linear-gradient(to bottom, #1e293b 1px, transparent 1px)',
                    backgroundSize: '60px 60px'
                }} />
            </div>

            <div className="relative z-10 max-w-5xl w-full px-8">
                <h1 className="text-4xl font-bold text-cyan-400 mb-8 text-center">THE VARIABLE: VISUAL SCHEMATIC</h1>

                <div className="flex items-center justify-center gap-12 mb-8">
                    {/* The Label */}
                    <div className="text-center group">
                        <div className="w-48 p-6 border-2 border-dashed border-gray-500 rounded-lg group-hover:border-yellow-500 transition-colors bg-slate-900/50">
                            <Tag className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
                            <span className="font-mono text-2xl text-yellow-500">score</span>
                        </div>
                        <p className="mt-4 text-gray-400 text-sm font-bold">THE NAME (LABEL)</p>
                    </div>

                    {/* The Connector */}
                    <div className="flex flex-col items-center">
                        <ArrowRight className="w-12 h-12 text-gray-600" />
                        <div className="mt-2 text-[#53d22d] font-bold text-3xl font-mono">=</div>
                    </div>

                    {/* The Value */}
                    <div className="text-center group">
                        <div className="w-48 p-6 bg-cyan-900/30 border-2 border-cyan-500 rounded-lg shadow-[0_0_30px_rgba(6,182,212,0.3)]">
                            <Box className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                            <span className="font-mono text-4xl text-white">100</span>
                        </div>
                        <p className="mt-4 text-gray-400 text-sm font-bold">THE DATA (VALUE)</p>
                    </div>
                </div>

                <div className="p-6 bg-slate-900/80 border-t-4 border-cyan-500 rounded-xl text-center">
                    <p className="text-xl text-gray-300">
                        Think of a variable as a <span className="text-yellow-500 font-bold">labeled container</span>.
                        <br />
                        You can put data in, take it out, or change it later.
                    </p>
                </div>
            </div>
        </div>
    );
}

// ============================================================================
// SLIDE 07: FORMAL DEFINITION
// ============================================================================
export function Lesson02ImprovedSlide07() {
    return (
        <div className="h-screen w-full overflow-hidden bg-gradient-to-br from-cyan-950 via-blue-950 to-slate-950 text-white relative flex items-center justify-center">
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'linear-gradient(cyan 1px, transparent 1px), linear-gradient(90deg, cyan 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }} />
            </div>

            <div className="relative z-10 max-w-4xl w-full px-8">
                <h1 className="text-4xl font-bold text-[#53d22d] mb-8 text-center">WHAT IS A VARIABLE?</h1>

                <div className="mb-8 p-8 bg-slate-900/50 border-2 border-[#53d22d]/30 rounded-xl">
                    <p className="text-2xl text-gray-300 mb-6 text-center">
                        A <span className="text-[#53d22d] font-bold">variable</span> is a named storage location in memory.
                    </p>

                    <Terminal variant="success" title="Python">
                        <CodeLine>score = 100</CodeLine>
                    </Terminal>

                    <div className="mt-6 grid grid-cols-3 gap-4">
                        <div className="p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
                            <div className="text-yellow-500 font-mono text-sm mb-1">score</div>
                            <div className="text-gray-400 text-xs">Variable name (the label)</div>
                        </div>
                        <div className="p-4 bg-[#53d22d]/10 border border-[#53d22d]/30 rounded-lg">
                            <div className="text-[#53d22d] font-mono text-sm mb-1">=</div>
                            <div className="text-gray-400 text-xs">Assignment operator (NOT equals!)</div>
                        </div>
                        <div className="p-4 bg-cyan-500/10 border border-cyan-500/30 rounded-lg">
                            <div className="text-cyan-400 font-mono text-sm mb-1">100</div>
                            <div className="text-gray-400 text-xs">Value stored</div>
                        </div>
                    </div>
                </div>

                <div className="p-6 bg-cyan-500/10 border-l-4 border-cyan-500 rounded-r-xl">
                    <p className="text-lg text-gray-300">
                        <span className="text-cyan-400 font-bold">Think:</span> "Put 100 into the container labeled 'score'"
                    </p>
                </div>
            </div>
        </div>
    );
}

// ============================================================================
// SLIDE 08: FIRST EXAMPLE WALKTHROUGH
// ============================================================================
export function Lesson02ImprovedSlide08() {
    return (
        <div className="h-screen w-full overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-950 text-white relative flex items-center justify-center">
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(#06b6d4 1px, transparent 1px)',
                    backgroundSize: '30px 30px'
                }} />
            </div>

            <div className="relative z-10 max-w-5xl w-full px-8">
                <h1 className="text-4xl font-bold text-cyan-400 mb-6">CREATING YOUR FIRST VARIABLE</h1>

                <div className="grid grid-cols-2 gap-8">
                    <div>
                        <Terminal variant="success" title="Python Console">
                            <CodeLine>age = 14</CodeLine>
                            <CodeLine>print(age)</CodeLine>
                            <CodeLine output>14</CodeLine>
                        </Terminal>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-[#53d22d] font-bold text-xl mb-4">WHAT HAPPENED:</h3>
                        <div className="space-y-3 text-gray-300">
                            <div className="flex items-start gap-3">
                                <div className="w-8 h-8 rounded-full bg-cyan-900/50 flex items-center justify-center text-cyan-400 font-bold border border-cyan-500/50 flex-shrink-0">1</div>
                                <p>Python finds empty space in RAM</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-8 h-8 rounded-full bg-cyan-900/50 flex items-center justify-center text-cyan-400 font-bold border border-cyan-500/50 flex-shrink-0">2</div>
                                <p>Stores the number <code className="text-[#53d22d]">14</code></p>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-8 h-8 rounded-full bg-cyan-900/50 flex items-center justify-center text-cyan-400 font-bold border border-cyan-500/50 flex-shrink-0">3</div>
                                <p>Labels that spot as <code className="text-yellow-500">age</code></p>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-8 h-8 rounded-full bg-cyan-900/50 flex items-center justify-center text-cyan-400 font-bold border border-cyan-500/50 flex-shrink-0">4</div>
                                <p>When you say <code className="text-yellow-500">age</code>, Python fetches the value</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-8 p-5 bg-[#53d22d]/10 border-2 border-[#53d22d]/30 rounded-xl">
                    <p className="text-gray-300 text-center">
                        <span className="text-[#53d22d] font-bold">Memory address might be</span> <code className="text-gray-500">0x7FFF5E4C</code>,
                        <br />
                        <span className="text-cyan-400 font-bold">but you just say</span> <code className="text-yellow-500">age</code>!
                    </p>
                </div>
            </div>
        </div>
    );
}

// ============================================================================
// SLIDE 09: SYNTAX RULES (✅ vs ❌)
// ============================================================================
export function Lesson02ImprovedSlide09() {
    return (
        <div className="h-screen w-full overflow-hidden bg-gradient-to-br from-cyan-950 via-blue-950 to-slate-950 text-white relative flex items-center justify-center">
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'linear-gradient(#53d22d 1px, transparent 1px), linear-gradient(90deg, #53d22d 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }} />
            </div>

            <div className="relative z-10 max-w-5xl w-full px-8">
                <h1 className="text-4xl font-bold text-yellow-500 mb-6">VARIABLE NAMING RULES</h1>

                <div className="grid grid-cols-2 gap-8">
                    {/* Valid Names */}
                    <div className="p-6 bg-[#53d22d]/10 border-2 border-[#53d22d]/50 rounded-xl">
                        <h3 className="text-[#53d22d] font-bold text-2xl mb-4 flex items-center gap-2">
                            <CheckCircle2 className="w-6 h-6" />
                            VALID NAMES
                        </h3>
                        <Terminal variant="success" title="Python">
                            <CodeLine>name = "Alex"</CodeLine>
                            <CodeLine>player_score = 100</CodeLine>
                            <CodeLine>level2 = True</CodeLine>
                            <CodeLine>_secret = "password"</CodeLine>
                        </Terminal>
                    </div>

                    {/* Invalid Names */}
                    <div className="p-6 bg-red-500/10 border-2 border-red-500/50 rounded-xl">
                        <h3 className="text-red-400 font-bold text-2xl mb-4 flex items-center gap-2">
                            <AlertCircle className="w-6 h-6" />
                            INVALID NAMES
                        </h3>
                        <Terminal variant="error" title="Python">
                            <CodeLine>2nd_place = "Silver"  # Can't start with number</CodeLine>
                            <CodeLine>my-score = 50  # No hyphens</CodeLine>
                            <CodeLine>class = "Python"  # Reserved word</CodeLine>
                            <CodeLine>my score = 10  # No spaces</CodeLine>
                        </Terminal>
                    </div>
                </div>

                <div className="mt-6 grid grid-cols-3 gap-4 text-sm">
                    <div className="p-4 bg-slate-800/50 border border-slate-700 rounded-lg">
                        <div className="text-cyan-400 font-bold mb-2">✓ Letters, numbers, underscore</div>
                        <code className="text-gray-400 text-xs">player_1, score_2</code>
                    </div>
                    <div className="p-4 bg-slate-800/50 border border-slate-700 rounded-lg">
                        <div className="text-cyan-400 font-bold mb-2">✓ Start with letter or _</div>
                        <code className="text-gray-400 text-xs">_private, name</code>
                    </div>
                    <div className="p-4 bg-slate-800/50 border border-slate-700 rounded-lg">
                        <div className="text-cyan-400 font-bold mb-2">✓ Case-sensitive</div>
                        <code className="text-gray-400 text-xs">Score ≠ score</code>
                    </div>
                </div>
            </div>
        </div>
    );
}

// ============================================================================
// SLIDE 10: PRO TIPS (Kael)
// ============================================================================
export function Lesson02ImprovedSlide10() {
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
                    <Lightbulb className="w-8 h-8 text-[#53d22d]" />
                    <h1 className="text-4xl font-bold text-[#53d22d]">CHIEF ENGINEER'S PRO TIPS</h1>
                </div>

                <div className="space-y-6">
                    <ProTip>
                        <p className="mb-3">
                            <span className="text-[#53d22d] font-bold">Use descriptive names:</span>
                        </p>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                                <p className="text-red-400 mb-2">❌ Unclear:</p>
                                <code className="text-gray-400">s = 100</code>
                            </div>
                            <div>
                                <p className="text-[#53d22d] mb-2">✅ Clear:</p>
                                <code className="text-gray-300">player_score = 100</code>
                            </div>
                        </div>
                    </ProTip>

                    <div className="p-6 bg-[#53d22d]/10 border-l-4 border-[#53d22d] rounded-r-xl">
                        <h4 className="text-[#53d22d] font-bold text-lg mb-3">💡 PRO TIP</h4>
                        <p className="text-gray-300 mb-3">
                            <span className="text-[#53d22d] font-bold">Python convention:</span> Use <code className="text-yellow-500">snake_case</code> (lowercase with underscores).
                        </p>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                                <p className="text-gray-500 mb-2">Other languages:</p>
                                <code className="text-gray-400">playerScore</code> (camelCase)
                            </div>
                            <div>
                                <p className="text-[#53d22d] mb-2">Python style:</p>
                                <code className="text-gray-300">player_score</code> (snake_case)
                            </div>
                        </div>
                    </div>

                    <div className="p-6 bg-yellow-500/10 border-l-4 border-yellow-500 rounded-r-xl">
                        <h4 className="text-yellow-400 font-bold text-lg mb-3">⚠️ CRITICAL</h4>
                        <p className="text-gray-300">
                            Variables ARE <span className="text-yellow-400 font-bold">case-sensitive</span>:
                            <br />
                            <code className="text-red-400">Score</code> ≠ <code className="text-red-400">score</code> ≠ <code className="text-red-400">SCORE</code>
                            <br />
                            <span className="text-sm text-gray-500">These are THREE different variables!</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Slides 11-15 continue in next section...
