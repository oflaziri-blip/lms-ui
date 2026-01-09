/**
 * Lesson 02 - Slides 12-16: Valid Names & Data Types
 */

import React from 'react';
import { CheckCircle, XCircle, Type, Hash, DollarSign } from 'lucide-react';
import { Terminal, CodeLine } from './Terminal';

// Slide 12: Valid vs Invalid Names
export function Lesson02Slide12() {
    const validNames = ['player_score', 'user_name', 'level1', '_private', 'totalXP'];
    const invalidNames = ['2fast', 'user-name', 'my score', 'class', '@handle'];
    const reasons = ['Starts with number', 'Has dash (-)', 'Has space', 'Python keyword', 'Has @ symbol'];

    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-cyan-950 via-blue-950 to-slate-950 text-white p-12 relative overflow-hidden">
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'linear-gradient(cyan 1px, transparent 1px), linear-gradient(90deg, cyan 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }} />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto">
                <h1 className="text-5xl font-bold text-cyan-400 mb-12">VALID VS INVALID NAMES</h1>

                <div className="grid grid-cols-2 gap-8">
                    {/* Valid Names */}
                    <div>
                        <h2 className="text-2xl font-bold text-[#53d22d] mb-6 flex items-center gap-3">
                            <CheckCircle className="w-8 h-8" />
                            VALID NAMES ✓
                        </h2>
                        <div className="space-y-3">
                            {validNames.map((name, i) => (
                                <div key={i} className="p-4 rounded-lg bg-[#53d22d]/10 border border-[#53d22d]/30">
                                    <code className="text-[#53d22d] text-xl font-mono">{name}</code>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Invalid Names */}
                    <div>
                        <h2 className="text-2xl font-bold text-red-400 mb-6 flex items-center gap-3">
                            <XCircle className="w-8 h-8" />
                            INVALID NAMES ✗
                        </h2>
                        <div className="space-y-3">
                            {invalidNames.map((name, i) => (
                                <div key={i} className="p-4 rounded-lg bg-red-500/10 border border-red-500/30">
                                    <code className="text-red-400 text-xl font-mono line-through">{name}</code>
                                    <p className="text-gray-400 text-sm mt-1">{reasons[i]}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-12 p-6 rounded-xl bg-cyan-500/10 border-2 border-cyan-500/30">
                    <p className="text-gray-300 text-xl text-center">
                        💡 <span className="text-cyan-400 font-bold">Pro Tip:</span> Choose names that describe what the variable stores:
                        <code className="text-[#53d22d] bg-[#53d22d]/10 px-2 py-1 rounded ml-2">player_health</code> is better than
                        <code className="text-gray-500 bg-gray-500/10 px-2 py-1 rounded ml-2">x</code>
                    </p>
                </div>
            </div>
        </div>
    );
}

// Slide 13: Data Types Overview
export function Lesson02Slide13() {
    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-950 text-white p-12 relative overflow-hidden">
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'linear-gradient(#53d22d 1px, transparent 1px), linear-gradient(90deg, #53d22d 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }} />
            </div>

            <div className="relative z-10 max-w-5xl mx-auto">
                <div className="flex items-center gap-3 mb-8">
                    <Type className="w-8 h-8 text-[#53d22d]" />
                    <h1 className="text-5xl font-bold text-[#53d22d]">DATA TYPES: OVERVIEW</h1>
                </div>

                <p className="text-2xl text-gray-300 mb-12">
                    Python has different <span className="text-cyan-400 font-bold">types</span> of data.
                    Here are the <span className="text-[#53d22d]">3 most important</span> ones:
                </p>

                <div className="space-y-6">
                    <div className="p-8 rounded-xl bg-cyan-500/10 border-2 border-cyan-500/30">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center">
                                <Type className="w-6 h-6 text-cyan-400" />
                            </div>
                            <h3 className="text-3xl font-bold text-cyan-400">STRING (str)</h3>
                        </div>
                        <p className="text-gray-300 text-xl mb-4">Text data — always in quotes</p>
                        <Terminal variant="default" title="Examples">
                            <CodeLine>name = "Alex"</CodeLine>
                            <CodeLine>message = 'Hello, World!'</CodeLine>
                            <CodeLine>code = "L02-VARS"</CodeLine>
                        </Terminal>
                    </div>

                    <div className="p-8 rounded-xl bg-[#53d22d]/10 border-2 border-[#53d22d]/30">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 rounded-full bg-[#53d22d]/20 flex items-center justify-center">
                                <Hash className="w-6 h-6 text-[#53d22d]" />
                            </div>
                            <h3 className="text-3xl font-bold text-[#53d22d]">INTEGER (int)</h3>
                        </div>
                        <p className="text-gray-300 text-xl mb-4">Whole numbers — no quotes, no decimals</p>
                        <Terminal variant="success" title="Examples">
                            <CodeLine>score = 100</CodeLine>
                            <CodeLine>level = 5</CodeLine>
                            <CodeLine>year = 2026</CodeLine>
                        </Terminal>
                    </div>

                    <div className="p-8 rounded-xl bg-blue-500/10 border-2 border-blue-500/30">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                                <DollarSign className="w-6 h-6 text-blue-400" />
                            </div>
                            <h3 className="text-3xl font-bold text-blue-400">FLOAT (float)</h3>
                        </div>
                        <p className="text-gray-300 text-xl mb-4">Decimal numbers — has a decimal point</p>
                        <Terminal variant="default" title="Examples">
                            <CodeLine>price = 19.99</CodeLine>
                            <CodeLine>temperature = 98.6</CodeLine>
                            <CodeLine>pi = 3.14159</CodeLine>
                        </Terminal>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Slide 14: Strings Explained
export function Lesson02Slide14() {
    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-cyan-950 via-blue-950 to-slate-950 text-white p-12 relative overflow-hidden">
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'linear-gradient(cyan 1px, transparent 1px), linear-gradient(90deg, cyan 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }} />
            </div>

            <div className="relative z-10 max-w-5xl mx-auto">
                <h1 className="text-5xl font-bold text-cyan-400 mb-8">STRINGS EXPLAINED</h1>

                <div className="mb-12 p-8 rounded-xl bg-cyan-500/10 border-2 border-cyan-500/30">
                    <p className="text-3xl text-gray-200">
                        A <span className="text-cyan-400 font-bold">string</span> is any text wrapped in quotes.
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-8 mb-12">
                    <div>
                        <h3 className="text-[#53d22d] font-bold text-xl mb-4">✅ SINGLE QUOTES</h3>
                        <Terminal variant="success" title="Python">
                            <CodeLine>name = 'Nova'</CodeLine>
                            <CodeLine>status = 'Active'</CodeLine>
                        </Terminal>
                    </div>

                    <div>
                        <h3 className="text-[#53d22d] font-bold text-xl mb-4">✅ DOUBLE QUOTES</h3>
                        <Terminal variant="success" title="Python">
                            <CodeLine>name = "Nova"</CodeLine>
                            <CodeLine>status = "Active"</CodeLine>
                        </Terminal>
                    </div>
                </div>

                <div className="mb-12 p-6 rounded-xl bg-yellow-500/10 border-2 border-yellow-500/30">
                    <h3 className="text-yellow-400 font-bold text-xl mb-4">⚠️ IMPORTANT RULES</h3>
                    <div className="space-y-3 text-gray-300 text-lg">
                        <p>• Both quote types work the same — pick one and be consistent</p>
                        <p>• <span className="text-red-400 font-bold">Must</span> have quotes on both sides: <code className="text-cyan-400 bg-cyan-400/10 px-2 py-1 rounded">"text"</code></p>
                        <p>• Numbers in quotes become strings: <code className="text-cyan-400 bg-cyan-400/10 px-2 py-1 rounded">"100"</code> is text, not a number!</p>
                    </div>
                </div>

                <Terminal variant="default" title="String Examples">
                    <CodeLine>message = "Welcome to Chronos"</CodeLine>
                    <CodeLine>agent_id = "A-42"</CodeLine>
                    <CodeLine>emoji = "🚀"</CodeLine>
                    <CodeLine>empty = ""  # Empty string is valid!</CodeLine>
                </Terminal>
            </div>
        </div>
    );
}

// Slide 15: Integers Explained
export function Lesson02Slide15() {
    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-blue-950 via-slate-950 to-cyan-950 text-white p-12 relative overflow-hidden">
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'linear-gradient(#53d22d 1px, transparent 1px), linear-gradient(90deg, #53d22d 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }} />
            </div>

            <div className="relative z-10 max-w-5xl mx-auto">
                <h1 className="text-5xl font-bold text-[#53d22d] mb-8">INTEGERS EXPLAINED</h1>

                <div className="mb-12 p-8 rounded-xl bg-[#53d22d]/10 border-2 border-[#53d22d]/30">
                    <p className="text-3xl text-gray-200">
                        An <span className="text-[#53d22d] font-bold">integer</span> is a whole number with <span className="text-cyan-400">no decimal point</span>.
                    </p>
                </div>

                <div className="grid grid-cols-3 gap-6 mb-12">
                    <div className="p-6 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-center">
                        <p className="text-gray-400 mb-2">Positive</p>
                        <code className="text-[#53d22d] text-4xl font-bold">100</code>
                    </div>
                    <div className="p-6 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-center">
                        <p className="text-gray-400 mb-2">Negative</p>
                        <code className="text-[#53d22d] text-4xl font-bold">-50</code>
                    </div>
                    <div className="p-6 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-center">
                        <p className="text-gray-400 mb-2">Zero</p>
                        <code className="text-[#53d22d] text-4xl font-bold">0</code>
                    </div>
                </div>

                <Terminal variant="success" title="Integer Examples">
                    <CodeLine>health = 100</CodeLine>
                    <CodeLine>damage = -25</CodeLine>
                    <CodeLine>level = 5</CodeLine>
                    <CodeLine>year = 2026</CodeLine>
                    <CodeLine>count = 0</CodeLine>
                </Terminal>

                <div className="mt-12 p-6 rounded-xl bg-cyan-500/10 border-2 border-cyan-500/30">
                    <h3 className="text-cyan-400 font-bold text-xl mb-4">💡 KEY POINTS</h3>
                    <div className="space-y-3 text-gray-300 text-lg">
                        <p>• <span className="text-[#53d22d] font-bold">No quotes</span> — integers are not text!</p>
                        <p>• <span className="text-[#53d22d] font-bold">No decimals</span> — that would be a float!</p>
                        <p>• Perfect for counting, scoring, and whole quantities</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Slide 16: Floats Explained
export function Lesson02Slide16() {
    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-cyan-950 via-blue-950 to-slate-950 text-white p-12 relative overflow-hidden">
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'linear-gradient(cyan 1px, transparent 1px), linear-gradient(90deg, cyan 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }} />
            </div>

            <div className="relative z-10 max-w-5xl mx-auto">
                <h1 className="text-5xl font-bold text-blue-400 mb-8">FLOATS EXPLAINED</h1>

                <div className="mb-12 p-8 rounded-xl bg-blue-500/10 border-2 border-blue-500/30">
                    <p className="text-3xl text-gray-200">
                        A <span className="text-blue-400 font-bold">float</span> is a number with a <span className="text-[#53d22d]">decimal point</span>.
                    </p>
                </div>

                <div className="grid grid-cols-3 gap-6 mb-12">
                    <div className="p-6 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-center">
                        <p className="text-gray-400 mb-2">Price</p>
                        <code className="text-blue-400 text-4xl font-bold">19.99</code>
                    </div>
                    <div className="p-6 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-center">
                        <p className="text-gray-400 mb-2">Temperature</p>
                        <code className="text-blue-400 text-4xl font-bold">98.6</code>
                    </div>
                    <div className="p-6 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-center">
                        <p className="text-gray-400 mb-2">Pi</p>
                        <code className="text-blue-400 text-4xl font-bold">3.14</code>
                    </div>
                </div>

                <Terminal variant="default" title="Float Examples">
                    <CodeLine>price = 49.99</CodeLine>
                    <CodeLine>weight = 150.5</CodeLine>
                    <CodeLine>percentage = 0.75</CodeLine>
                    <CodeLine>pi = 3.14159</CodeLine>
                </Terminal>

                <div className="mt-12 grid grid-cols-2 gap-6">
                    <div className="p-6 rounded-xl bg-[#53d22d]/10 border border-[#53d22d]/30">
                        <h3 className="text-[#53d22d] font-bold mb-3">✅ WHEN TO USE</h3>
                        <p className="text-gray-300">Money, measurements, percentages, scientific calculations</p>
                    </div>
                    <div className="p-6 rounded-xl bg-yellow-500/10 border border-yellow-500/30">
                        <h3 className="text-yellow-400 font-bold mb-3">⚠️ REMEMBER</h3>
                        <p className="text-gray-300">Even <code className="text-blue-400">5.0</code> is a float, not an integer!</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
