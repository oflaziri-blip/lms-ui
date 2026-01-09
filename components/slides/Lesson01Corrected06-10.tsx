/**
 * Lesson 01 - CORRECTED SLIDES 06-15
 * CRITICAL ADDITION: Math Operators (The Missing Content!)
 * Gold Standard Pedagogy + Viewport-Fitted Layout
 */

import React from 'react';
import { Calculator, Plus, Minus, X, Divide, Percent, Zap, AlertTriangle, Lightbulb } from 'lucide-react';
import { Terminal, CodeLine } from './Terminal';
import { CharacterQuote, ProTip, RealWorldExample } from './CharacterQuote';

// ============================================================================
// SLIDE 06: THE 7 MATH OPERATORS - OVERVIEW
// ============================================================================
export function Lesson01CorrectedSlide06() {
    return (
        <div className="h-screen w-full overflow-hidden bg-gradient-to-br from-cyan-950 via-blue-950 to-slate-950 text-white relative flex items-center justify-center">
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'linear-gradient(cyan 1px, transparent 1px), linear-gradient(90deg, cyan 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }} />
            </div>

            <div className="relative z-10 max-w-5xl w-full px-8">
                <div className="flex items-center gap-3 mb-6">
                    <Calculator className="w-8 h-8 text-[#53d22d]" />
                    <h1 className="text-4xl font-bold text-[#53d22d]">THE 7 MATH OPERATORS</h1>
                </div>

                <p className="text-xl text-gray-300 mb-8">
                    Python gives you <span className="text-[#53d22d] font-bold">7 powerful operators</span> to perform calculations:
                </p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                    {[
                        { op: '+', name: 'Addition', example: '10 + 5 = 15', color: 'cyan' },
                        { op: '-', name: 'Subtraction', example: '20 - 7 = 13', color: 'cyan' },
                        { op: '*', name: 'Multiplication', example: '6 * 7 = 42', color: 'blue' },
                        { op: '/', name: 'Division', example: '20 / 4 = 5.0', color: 'blue' },
                        { op: '//', name: 'Floor Division', example: '17 // 5 = 3', color: 'yellow' },
                        { op: '%', name: 'Modulo (Remainder)', example: '17 % 5 = 2', color: 'yellow' },
                        { op: '**', name: 'Exponentiation', example: '2 ** 3 = 8', color: 'green' }
                    ].map((item, i) => (
                        <div key={i} className={`p-4 bg-${item.color}-500/10 border border-${item.color}-500/30 rounded-lg`}>
                            <div className="flex items-center gap-3 mb-2">
                                <span className={`text-3xl font-bold text-${item.color}-400 font-mono`}>{item.op}</span>
                                <span className="text-lg text-gray-300">{item.name}</span>
                            </div>
                            <code className="text-sm text-gray-400">{item.example}</code>
                        </div>
                    ))}
                </div>

                <div className="p-5 bg-[#53d22d]/10 border-l-4 border-[#53d22d] rounded-r-xl text-center">
                    <p className="text-lg text-gray-300">
                        These 7 operators are the <span className="text-[#53d22d] font-bold">foundation of ALL computation</span>!
                    </p>
                </div>
            </div>
        </div>
    );
}

// ============================================================================
// SLIDE 07: ADDITION (+) AND SUBTRACTION (-)
// ============================================================================
export function Lesson01CorrectedSlide07() {
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
                    <Plus className="w-8 h-8 text-cyan-400" />
                    <Minus className="w-8 h-8 text-cyan-400" />
                    <h1 className="text-4xl font-bold text-cyan-400">ADDITION & SUBTRACTION</h1>
                </div>

                <div className="grid grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-2xl text-cyan-400 font-bold mb-4">ADDITION (+)</h3>
                        <Terminal variant="success" title="Python">
                            <CodeLine>print(10 + 5)</CodeLine>
                            <CodeLine output>15</CodeLine>
                            <CodeLine>&nbsp;</CodeLine>
                            <CodeLine>print(100 + 250)</CodeLine>
                            <CodeLine output>350</CodeLine>
                            <CodeLine>&nbsp;</CodeLine>
                            <CodeLine>print(7 + 3 + 2)</CodeLine>
                            <CodeLine output>12</CodeLine>
                        </Terminal>
                    </div>

                    <div>
                        <h3 className="text-2xl text-cyan-400 font-bold mb-4">SUBTRACTION (-)</h3>
                        <Terminal variant="success" title="Python">
                            <CodeLine>print(20 - 7)</CodeLine>
                            <CodeLine output>13</CodeLine>
                            <CodeLine>&nbsp;</CodeLine>
                            <CodeLine>print(100 - 25)</CodeLine>
                            <CodeLine output>75</CodeLine>
                            <CodeLine>&nbsp;</CodeLine>
                            <CodeLine>print(50 - 10 - 5)</CodeLine>
                            <CodeLine output>35</CodeLine>
                        </Terminal>
                    </div>
                </div>

                <div className="mt-8 p-5 bg-cyan-500/10 border-l-4 border-cyan-500 rounded-r-xl">
                    <p className="text-lg text-gray-300">
                        <span className="text-cyan-400 font-bold">Real-world use:</span> Calculating scores, health points, inventory counts
                    </p>
                </div>
            </div>
        </div>
    );
}

// ============================================================================
// SLIDE 08: MULTIPLICATION (*) AND DIVISION (/)
// ============================================================================
export function Lesson01CorrectedSlide08() {
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
                    <X className="w-8 h-8 text-blue-400" />
                    <Divide className="w-8 h-8 text-blue-400" />
                    <h1 className="text-4xl font-bold text-blue-400">MULTIPLICATION & DIVISION</h1>
                </div>

                <div className="grid grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-2xl text-blue-400 font-bold mb-4">MULTIPLICATION (*)</h3>
                        <Terminal variant="success" title="Python">
                            <CodeLine>print(6 * 7)</CodeLine>
                            <CodeLine output>42</CodeLine>
                            <CodeLine>&nbsp;</CodeLine>
                            <CodeLine>print(10 * 5)</CodeLine>
                            <CodeLine output>50</CodeLine>
                            <CodeLine>&nbsp;</CodeLine>
                            <CodeLine>print(3 * 4 * 2)</CodeLine>
                            <CodeLine output>24</CodeLine>
                        </Terminal>
                    </div>

                    <div>
                        <h3 className="text-2xl text-blue-400 font-bold mb-4">DIVISION (/)</h3>
                        <Terminal variant="success" title="Python">
                            <CodeLine>print(20 / 4)</CodeLine>
                            <CodeLine output>5.0</CodeLine>
                            <CodeLine>&nbsp;</CodeLine>
                            <CodeLine>print(15 / 3)</CodeLine>
                            <CodeLine output>5.0</CodeLine>
                            <CodeLine>&nbsp;</CodeLine>
                            <CodeLine>print(10 / 4)</CodeLine>
                            <CodeLine output>2.5</CodeLine>
                        </Terminal>
                    </div>
                </div>

                <div className="mt-8 p-5 bg-yellow-500/10 border-l-4 border-yellow-500 rounded-r-xl">
                    <p className="text-lg text-gray-300">
                        <span className="text-yellow-400 font-bold">⚠️ NOTE:</span> Division (/) <span className="text-yellow-400 font-bold">always</span> returns a decimal (float), even for whole numbers!
                    </p>
                </div>
            </div>
        </div>
    );
}

// ============================================================================
// SLIDE 09: FLOOR DIVISION (//)
// ============================================================================
export function Lesson01CorrectedSlide09() {
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
                    <Divide className="w-8 h-8 text-yellow-500" />
                    <h1 className="text-4xl font-bold text-yellow-500">FLOOR DIVISION (//)</h1>
                </div>

                <p className="text-xl text-gray-300 mb-6">
                    Divides and <span className="text-yellow-500 font-bold">rounds DOWN</span> to the nearest whole number
                </p>

                <Terminal variant="success" title="Python">
                    <CodeLine>print(17 // 5)</CodeLine>
                    <CodeLine output>3  # Not 3.4!</CodeLine>
                    <CodeLine>&nbsp;</CodeLine>
                    <CodeLine>print(20 // 3)</CodeLine>
                    <CodeLine output>6  # Not 6.666...</CodeLine>
                    <CodeLine>&nbsp;</CodeLine>
                    <CodeLine>print(10 // 2)</CodeLine>
                    <CodeLine output>5  # Whole number result</CodeLine>
                    <CodeLine>&nbsp;</CodeLine>
                    <CodeLine>print(7 // 2)</CodeLine>
                    <CodeLine output>3  # Not 3.5!</CodeLine>
                </Terminal>

                <div className="mt-8 grid grid-cols-2 gap-6">
                    <div className="p-5 bg-blue-500/10 border-l-4 border-blue-500 rounded-r-xl">
                        <h3 className="text-blue-400 font-bold mb-2">Regular Division (/)</h3>
                        <code className="text-gray-300">17 / 5 = 3.4</code>
                    </div>
                    <div className="p-5 bg-yellow-500/10 border-l-4 border-yellow-500 rounded-r-xl">
                        <h3 className="text-yellow-400 font-bold mb-2">Floor Division (//)</h3>
                        <code className="text-gray-300">17 // 5 = 3</code>
                    </div>
                </div>

                <div className="mt-6 p-5 bg-[#53d22d]/10 border-l-4 border-[#53d22d] rounded-r-xl">
                    <p className="text-gray-300">
                        <span className="text-[#53d22d] font-bold">Use case:</span> Splitting items into groups, pagination, grid layouts
                    </p>
                </div>
            </div>
        </div>
    );
}

// ============================================================================
// SLIDE 10: MODULO (%) - REMAINDER
// ============================================================================
export function Lesson01CorrectedSlide10() {
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
                    <Percent className="w-8 h-8 text-yellow-500" />
                    <h1 className="text-4xl font-bold text-yellow-500">MODULO (%) - REMAINDER</h1>
                </div>

                <p className="text-xl text-gray-300 mb-6">
                    Returns the <span className="text-yellow-500 font-bold">remainder</span> after division
                </p>

                <Terminal variant="success" title="Python">
                    <CodeLine>print(17 % 5)</CodeLine>
                    <CodeLine output>2  # 17 = 5*3 + 2</CodeLine>
                    <CodeLine>&nbsp;</CodeLine>
                    <CodeLine>print(20 % 3)</CodeLine>
                    <CodeLine output>2  # 20 = 3*6 + 2</CodeLine>
                    <CodeLine>&nbsp;</CodeLine>
                    <CodeLine>print(10 % 2)</CodeLine>
                    <CodeLine output>0  # No remainder (even number!)</CodeLine>
                    <CodeLine>&nbsp;</CodeLine>
                    <CodeLine>print(7 % 2)</CodeLine>
                    <CodeLine output>1  # Remainder 1 (odd number!)</CodeLine>
                </Terminal>

                <div className="mt-8 p-6 bg-cyan-500/10 border-2 border-cyan-500/30 rounded-xl">
                    <h3 className="text-cyan-400 font-bold text-xl mb-4">💡 COMMON USES:</h3>
                    <div className="space-y-2 text-gray-300">
                        <p>• <span className="text-[#53d22d] font-bold">Even/Odd detection:</span> <code>num % 2 == 0</code> means even</p>
                        <p>• <span className="text-[#53d22d] font-bold">Cycling patterns:</span> Wrap around after reaching a limit</p>
                        <p>• <span className="text-[#53d22d] font-bold">Time calculations:</span> Convert minutes to hours + minutes</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Slides 11-15 continue in next file...
