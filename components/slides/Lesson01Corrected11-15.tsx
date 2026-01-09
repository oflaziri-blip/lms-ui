/**
 * Lesson 01 - CORRECTED SLIDES 11-15
 * Exponentiation, PEMDAS, and Practice
 */

import React from 'react';
import { Zap, AlertTriangle, Lightbulb, Target } from 'lucide-react';
import { Terminal, CodeLine } from './Terminal';
import { CharacterQuote, ProTip, RealWorldExample } from './CharacterQuote';

// ============================================================================
// SLIDE 11: EXPONENTIATION (**) - POWER OPERATOR
// ============================================================================
export function Lesson01CorrectedSlide11() {
    return (
        <div className="h-screen w-full overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-950 text-white relative flex items-center justify-center">
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'linear-gradient(#53d22d 1px, transparent 1px), linear-gradient(90deg, #53d22d 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }} />
            </div>

            <div className="relative z-10 max-w-4xl w-full px-8">
                <div className="flex items-center gap-3 mb-6">
                    <Zap className="w-8 h-8 text-[#53d22d]" />
                    <h1 className="text-4xl font-bold text-[#53d22d]">EXPONENTIATION (**)</h1>
                </div>

                <p className="text-xl text-gray-300 mb-6">
                    Raises a number to a <span className="text-[#53d22d] font-bold">power</span>
                </p>

                <Terminal variant="success" title="Python">
                    <CodeLine>print(2 ** 3)</CodeLine>
                    <CodeLine output>8  # 2 * 2 * 2</CodeLine>
                    <CodeLine>&nbsp;</CodeLine>
                    <CodeLine>print(10 ** 2)</CodeLine>
                    <CodeLine output>100  # 10 * 10</CodeLine>
                    <CodeLine>&nbsp;</CodeLine>
                    <CodeLine>print(5 ** 0)</CodeLine>
                    <CodeLine output>1  # Any number to power 0 = 1</CodeLine>
                    <CodeLine>&nbsp;</CodeLine>
                    <CodeLine>print(2 ** 8)</CodeLine>
                    <CodeLine output>256  # 2^8</CodeLine>
                </Terminal>

                <div className="mt-8 grid grid-cols-3 gap-4 text-sm">
                    <div className="p-4 bg-cyan-500/10 border border-cyan-500/30 rounded-lg text-center">
                        <div className="text-2xl font-bold text-cyan-400 mb-2">2³</div>
                        <div className="text-gray-400">2 ** 3 = 8</div>
                    </div>
                    <div className="p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg text-center">
                        <div className="text-2xl font-bold text-blue-400 mb-2">10²</div>
                        <div className="text-gray-400">10 ** 2 = 100</div>
                    </div>
                    <div className="p-4 bg-[#53d22d]/10 border border-[#53d22d]/30 rounded-lg text-center">
                        <div className="text-2xl font-bold text-[#53d22d] mb-2">5⁴</div>
                        <div className="text-gray-400">5 ** 4 = 625</div>
                    </div>
                </div>

                <div className="mt-6 p-5 bg-[#53d22d]/10 border-l-4 border-[#53d22d] rounded-r-xl">
                    <p className="text-gray-300">
                        <span className="text-[#53d22d] font-bold">Use case:</span> Exponential growth, area calculations, scientific notation
                    </p>
                </div>
            </div>
        </div>
    );
}

// ============================================================================
// SLIDE 12: OPERATOR COMPARISON TABLE
// ============================================================================
export function Lesson01CorrectedSlide12() {
    return (
        <div className="h-screen w-full overflow-hidden bg-gradient-to-br from-cyan-950 via-blue-950 to-slate-950 text-white relative flex items-center justify-center">
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'linear-gradient(cyan 1px, transparent 1px), linear-gradient(90deg, cyan 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }} />
            </div>

            <div className="relative z-10 max-w-5xl w-full px-8">
                <h1 className="text-4xl font-bold text-cyan-400 mb-8 text-center">OPERATOR REFERENCE TABLE</h1>

                <div className="bg-slate-900/50 border-2 border-cyan-500/30 rounded-xl overflow-hidden">
                    <table className="w-full">
                        <thead className="bg-cyan-900/30">
                            <tr className="text-left">
                                <th className="p-4 text-cyan-400 font-bold">Operator</th>
                                <th className="p-4 text-cyan-400 font-bold">Name</th>
                                <th className="p-4 text-cyan-400 font-bold">Example</th>
                                <th className="p-4 text-cyan-400 font-bold">Result</th>
                            </tr>
                        </thead>
                        <tbody className="font-mono">
                            {[
                                { op: '+', name: 'Addition', ex: '10 + 5', result: '15' },
                                { op: '-', name: 'Subtraction', ex: '20 - 7', result: '13' },
                                { op: '*', name: 'Multiplication', ex: '6 * 7', result: '42' },
                                { op: '/', name: 'Division', ex: '20 / 4', result: '5.0' },
                                { op: '//', name: 'Floor Division', ex: '17 // 5', result: '3' },
                                { op: '%', name: 'Modulo', ex: '17 % 5', result: '2' },
                                { op: '**', name: 'Exponentiation', ex: '2 ** 3', result: '8' }
                            ].map((row, i) => (
                                <tr key={i} className="border-t border-gray-700">
                                    <td className="p-4 text-[#53d22d] text-2xl font-bold">{row.op}</td>
                                    <td className="p-4 text-gray-300">{row.name}</td>
                                    <td className="p-4 text-cyan-400">{row.ex}</td>
                                    <td className="p-4 text-yellow-400">{row.result}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="mt-6 text-center text-gray-400 text-sm">
                    💾 Save this table—you'll use these operators in EVERY program!
                </div>
            </div>
        </div>
    );
}

// ============================================================================
// SLIDE 13: ORDER OF OPERATIONS (PEMDAS)
// ============================================================================
export function Lesson01CorrectedSlide13() {
    return (
        <div className="h-screen w-full overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-950 text-white relative flex items-center justify-center">
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(#06b6d4 1px, transparent 1px)',
                    backgroundSize: '30px 30px'
                }} />
            </div>

            <div className="relative z-10 max-w-4xl w-full px-8">
                <h1 className="text-4xl font-bold text-yellow-500 mb-6">ORDER OF OPERATIONS (PEMDAS)</h1>

                <p className="text-xl text-gray-300 mb-8">
                    Python follows the same math rules you learned in school:
                </p>

                <div className="grid grid-cols-2 gap-6 mb-8">
                    <div className="space-y-3">
                        {[
                            { letter: 'P', name: 'Parentheses', color: 'red' },
                            { letter: 'E', name: 'Exponents', color: 'orange' },
                            { letter: 'M', name: 'Multiplication', color: 'yellow' },
                            { letter: 'D', name: 'Division', color: 'yellow' },
                            { letter: 'A', name: 'Addition', color: 'green' },
                            { letter: 'S', name: 'Subtraction', color: 'green' }
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-4 p-3 bg-slate-800/50 rounded-lg">
                                <div className={`w-12 h-12 rounded-full bg-${item.color}-500/20 flex items-center justify-center text-${item.color}-400 font-bold text-2xl`}>
                                    {item.letter}
                                </div>
                                <span className="text-lg text-gray-300">{item.name}</span>
                            </div>
                        ))}
                    </div>

                    <div>
                        <h3 className="text-cyan-400 font-bold text-xl mb-4">EXAMPLE:</h3>
                        <Terminal variant="success" title="Python">
                            <CodeLine>print(2 + 3 * 4)</CodeLine>
                            <CodeLine output>14  # NOT 20!</CodeLine>
                            <CodeLine>&nbsp;</CodeLine>
                            <CodeLine className="text-gray-500"># Why? Multiplication first:</CodeLine>
                            <CodeLine className="text-gray-500"># 3 * 4 = 12</CodeLine>
                            <CodeLine className="text-gray-500"># 2 + 12 = 14</CodeLine>
                        </Terminal>

                        <div className="mt-6 p-4 bg-yellow-500/10 border-l-4 border-yellow-500 rounded-r-xl">
                            <p className="text-sm text-gray-300">
                                <span className="text-yellow-400 font-bold">⚠️ Remember:</span> Multiplication and Division happen BEFORE Addition and Subtraction!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// ============================================================================
// SLIDE 14: USING PARENTHESES TO CONTROL ORDER
// ============================================================================
export function Lesson01CorrectedSlide14() {
    return (
        <div className="h-screen w-full overflow-hidden bg-gradient-to-br from-cyan-950 via-blue-950 to-slate-950 text-white relative flex items-center justify-center">
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'linear-gradient(#53d22d 1px, transparent 1px), linear-gradient(90deg, #53d22d 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }} />
            </div>

            <div className="relative z-10 max-w-5xl w-full px-8">
                <h1 className="text-4xl font-bold text-[#53d22d] mb-6">CONTROLLING ORDER WITH PARENTHESES</h1>

                <p className="text-xl text-gray-300 mb-8">
                    Use <span className="text-[#53d22d] font-bold">( )</span> to force operations to happen first
                </p>

                <div className="grid grid-cols-2 gap-8">
                    <div className="p-6 bg-red-500/10 border-2 border-red-500/50 rounded-xl">
                        <h3 className="text-red-400 font-bold text-xl mb-4">WITHOUT PARENTHESES:</h3>
                        <Terminal variant="error" title="Python">
                            <CodeLine>print(2 + 3 * 4)</CodeLine>
                            <CodeLine output>14</CodeLine>
                            <CodeLine>&nbsp;</CodeLine>
                            <CodeLine className="text-gray-500"># Order: 3*4=12, then 2+12=14</CodeLine>
                        </Terminal>
                    </div>

                    <div className="p-6 bg-[#53d22d]/10 border-2 border-[#53d22d]/50 rounded-xl">
                        <h3 className="text-[#53d22d] font-bold text-xl mb-4">WITH PARENTHESES:</h3>
                        <Terminal variant="success" title="Python">
                            <CodeLine>print((2 + 3) * 4)</CodeLine>
                            <CodeLine output>20</CodeLine>
                            <CodeLine>&nbsp;</CodeLine>
                            <CodeLine className="text-gray-500"># Order: 2+3=5, then 5*4=20</CodeLine>
                        </Terminal>
                    </div>
                </div>

                <div className="mt-8 space-y-4">
                    <h3 className="text-cyan-400 font-bold text-xl">MORE EXAMPLES:</h3>
                    <Terminal variant="success" title="Python">
                        <CodeLine>print((5 + 3) * 2)</CodeLine>
                        <CodeLine output>16  # (8) * 2</CodeLine>
                        <CodeLine>&nbsp;</CodeLine>
                        <CodeLine>print(((5 + 3) * 2) ** 2)</CodeLine>
                        <CodeLine output>256  # (16) ** 2</CodeLine>
                        <CodeLine>&nbsp;</CodeLine>
                        <CodeLine>print((10 + 5) / 3)</CodeLine>
                        <CodeLine output>5.0  # (15) / 3</CodeLine>
                    </Terminal>
                </div>
            </div>
        </div>
    );
}

// ============================================================================
// SLIDE 15: COMMON MISTAKES
// ============================================================================
export function Lesson01CorrectedSlide15() {
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
                    <AlertTriangle className="w-8 h-8 text-red-500" />
                    <h1 className="text-4xl font-bold text-red-500">COMMON MISTAKES</h1>
                </div>

                <div className="space-y-6">
                    <div className="p-5 bg-red-500/10 border-l-4 border-red-500 rounded-r-xl">
                        <h3 className="text-red-400 font-bold text-lg mb-3">ERROR #1: Division by Zero</h3>
                        <Terminal variant="error" title="Python">
                            <CodeLine>print(10 / 0)</CodeLine>
                            <CodeLine output className="text-red-400">ZeroDivisionError: division by zero</CodeLine>
                        </Terminal>
                        <p className="text-gray-400 text-sm mt-2">You can't divide by zero—it's mathematically undefined!</p>
                    </div>

                    <div className="p-5 bg-red-500/10 border-l-4 border-red-500 rounded-r-xl">
                        <h3 className="text-red-400 font-bold text-lg mb-3">ERROR #2: Forgetting Parentheses</h3>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <p className="text-sm text-gray-400 mb-2">You wanted:</p>
                                <code className="text-cyan-400">(2 + 3) * 4 = 20</code>
                            </div>
                            <div>
                                <p className="text-sm text-gray-400 mb-2">You wrote:</p>
                                <code className="text-red-400">2 + 3 * 4 = 14</code>
                            </div>
                        </div>
                    </div>

                    <div className="p-5 bg-red-500/10 border-l-4 border-red-500 rounded-r-xl">
                        <h3 className="text-red-400 font-bold text-lg mb-3">ERROR #3: Using ^ for Exponent</h3>
                        <Terminal variant="error" title="Python">
                            <CodeLine>print(2 ^ 3)  # WRONG!</CodeLine>
                            <CodeLine output>1  # Not 8! (^ is XOR operator)</CodeLine>
                            <CodeLine>&nbsp;</CodeLine>
                            <CodeLine className="text-[#53d22d]">print(2 ** 3)  # CORRECT!</CodeLine>
                            <CodeLine output className="text-[#53d22d]">8</CodeLine>
                        </Terminal>
                        <p className="text-gray-400 text-sm mt-2">Use ** for exponents, not ^</p>
                    </div>
                </div>

                <ProTip>
                    <p>When in doubt, add parentheses! Python doesn't mind extra ( ), and they make your code clearer.</p>
                </ProTip>
            </div>
        </div>
    );
}
