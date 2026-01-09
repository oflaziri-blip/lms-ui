/**
 * Lesson 02 - Slides 08-16: Core Concepts
 * Variables, Assignment, Data Types
 */

import React from 'react';
import { Code, Equal, Tag, Type, Hash, DollarSign } from 'lucide-react';
import { Terminal, CodeLine } from './Terminal';

// Slide 08: What is a Variable?
export function Lesson02Slide08() {
    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-cyan-950 via-blue-950 to-slate-950 text-white p-12 relative overflow-hidden">
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'linear-gradient(cyan 1px, transparent 1px), linear-gradient(90deg, cyan 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }} />
            </div>

            <div className="relative z-10 max-w-5xl mx-auto">
                <div className="flex items-center gap-3 mb-8">
                    <Code className="w-8 h-8 text-cyan-400" />
                    <h1 className="text-5xl font-bold text-cyan-400">WHAT IS A VARIABLE?</h1>
                </div>

                <div className="mb-12 p-8 rounded-xl bg-cyan-500/10 border-2 border-cyan-500/30">
                    <p className="text-3xl text-gray-200 leading-relaxed">
                        A <span className="text-cyan-400 font-bold">variable</span> is a <span className="text-[#53d22d]">named container</span> that
                        stores a piece of data in your computer's memory.
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-cyan-400 font-bold text-xl mb-4">WITHOUT VARIABLES</h3>
                        <Terminal variant="error" title="Python">
                            <CodeLine prompt=">>>">print(42 + 8)</CodeLine>
                            <CodeLine output>50</CodeLine>
                            <CodeLine prompt=">>>">print(42 + 8)</CodeLine>
                            <CodeLine output>50</CodeLine>
                            <CodeLine className="text-gray-500"># Must repeat 42 + 8 every time!</CodeLine>
                        </Terminal>
                    </div>

                    <div>
                        <h3 className="text-[#53d22d] font-bold text-xl mb-4">WITH VARIABLES</h3>
                        <Terminal variant="success" title="Python">
                            <CodeLine prompt=">>>">result = 42 + 8</CodeLine>
                            <CodeLine prompt=">>>">print(result)</CodeLine>
                            <CodeLine output>50</CodeLine>
                            <CodeLine prompt=">>>">print(result)</CodeLine>
                            <CodeLine output>50</CodeLine>
                            <CodeLine className="text-[#53d22d]"># Stored once, use many times!</CodeLine>
                        </Terminal>
                    </div>
                </div>

                <div className="mt-12 text-center">
                    <p className="text-xl text-gray-300">
                        Variables make your code <span className="text-cyan-400 font-bold">cleaner</span>,
                        <span className="text-[#53d22d] font-bold"> faster</span>, and
                        <span className="text-blue-400 font-bold"> easier to understand</span>!
                    </p>
                </div>
            </div>
        </div>
    );
}

// Slide 09: Anatomy of Assignment
export function Lesson02Slide09() {
    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-950 text-white p-12 relative overflow-hidden">
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'linear-gradient(#53d22d 1px, transparent 1px), linear-gradient(90deg, #53d22d 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }} />
            </div>

            <div className="relative z-10 max-w-5xl mx-auto">
                <h1 className="text-5xl font-bold text-[#53d22d] mb-12">ANATOMY OF ASSIGNMENT</h1>

                <p className="text-2xl text-gray-300 mb-12">
                    Let's break down: <code className="text-cyan-400 bg-cyan-400/10 px-4 py-2 rounded font-mono text-3xl">name = "Alex"</code>
                </p>

                <div className="mb-12 p-8 rounded-xl bg-slate-800/50 border-2 border-cyan-500/30">
                    <div className="flex items-center justify-center gap-8 text-4xl font-mono">
                        <div className="text-center">
                            <div className="text-cyan-400 font-bold mb-2">name</div>
                            <div className="text-sm text-gray-400">Variable Name</div>
                        </div>

                        <div className="text-center">
                            <div className="text-[#53d22d] font-bold mb-2">=</div>
                            <div className="text-sm text-gray-400">Assignment Operator</div>
                        </div>

                        <div className="text-center">
                            <div className="text-blue-400 font-bold mb-2">"Alex"</div>
                            <div className="text-sm text-gray-400">Value</div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-6">
                    <div className="p-6 rounded-xl bg-cyan-500/10 border border-cyan-500/30">
                        <h3 className="text-cyan-400 font-bold mb-3">1️⃣ VARIABLE NAME</h3>
                        <p className="text-gray-300">The label for your storage container</p>
                    </div>
                    <div className="p-6 rounded-xl bg-[#53d22d]/10 border border-[#53d22d]/30">
                        <h3 className="text-[#53d22d] font-bold mb-3">2️⃣ EQUALS SIGN</h3>
                        <p className="text-gray-300">Means "store this value"</p>
                    </div>
                    <div className="p-6 rounded-xl bg-blue-500/10 border border-blue-500/30">
                        <h3 className="text-blue-400 font-bold mb-3">3️⃣ VALUE</h3>
                        <p className="text-gray-300">The data you want to save</p>
                    </div>
                </div>

                <div className="mt-12 p-6 rounded-xl bg-cyan-500/10 border-2 border-cyan-500/30">
                    <p className="text-gray-300 text-xl text-center">
                        Read it as: <span className="text-cyan-400 font-bold">"name"</span> <span className="text-[#53d22d]">gets the value</span> <span className="text-blue-400 font-bold">"Alex"</span>
                    </p>
                </div>
            </div>
        </div>
    );
}

// Slide 10: The Assignment Operator
export function Lesson02Slide10() {
    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-cyan-950 via-blue-950 to-slate-950 text-white p-12 relative overflow-hidden">
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'linear-gradient(cyan 1px, transparent 1px), linear-gradient(90deg, cyan 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }} />
            </div>

            <div className="relative z-10 max-w-5xl mx-auto">
                <div className="flex items-center gap-3 mb-8">
                    <Equal className="w-8 h-8 text-[#53d22d]" />
                    <h1 className="text-5xl font-bold text-[#53d22d]">THE ASSIGNMENT OPERATOR</h1>
                </div>

                <div className="mb-12 p-8 rounded-xl bg-yellow-500/10 border-2 border-yellow-500/30">
                    <p className="text-3xl text-gray-200 text-center">
                        In Python, <code className="text-[#53d22d] bg-[#53d22d]/10 px-4 py-2 rounded font-mono text-4xl">=</code> does NOT mean "equals"!
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-8 mb-12">
                    <div className="p-6 rounded-xl bg-red-500/10 border-2 border-red-500/30">
                        <h3 className="text-red-400 font-bold text-2xl mb-4">❌ NOT THIS (Math)</h3>
                        <p className="text-gray-300 text-xl mb-4">In math class:</p>
                        <code className="text-white text-2xl">x = 5</code>
                        <p className="text-gray-400 mt-4">means "x equals 5"</p>
                    </div>

                    <div className="p-6 rounded-xl bg-[#53d22d]/10 border-2 border-[#53d22d]/30">
                        <h3 className="text-[#53d22d] font-bold text-2xl mb-4">✅ THIS (Python)</h3>
                        <p className="text-gray-300 text-xl mb-4">In Python:</p>
                        <code className="text-white text-2xl">x = 5</code>
                        <p className="text-gray-400 mt-4">means "store 5 in x"</p>
                    </div>
                </div>

                <Terminal variant="success" title="Python Console">
                    <CodeLine prompt=">>>">score = 100</CodeLine>
                    <CodeLine className="text-gray-500"># "score gets the value 100"</CodeLine>
                    <CodeLine className="text-gray-500"># NOT "score equals 100"</CodeLine>
                </Terminal>

                <div className="mt-12 p-6 rounded-xl bg-cyan-500/10 border-2 border-cyan-500/30">
                    <p className="text-gray-300 text-xl text-center">
                        Think of <code className="text-[#53d22d] bg-[#53d22d]/10 px-2 py-1 rounded">=</code> as an <span className="text-[#53d22d] font-bold">arrow pointing left</span>:
                        the value on the right goes <span className="text-cyan-400">INTO</span> the variable on the left
                    </p>
                </div>
            </div>
        </div>
    );
}

// Slide 11: Variable Names
export function Lesson02Slide11() {
    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-blue-950 via-slate-950 to-cyan-950 text-white p-12 relative overflow-hidden">
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'linear-gradient(#53d22d 1px, transparent 1px), linear-gradient(90deg, #53d22d 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }} />
            </div>

            <div className="relative z-10 max-w-5xl mx-auto">
                <div className="flex items-center gap-3 mb-8">
                    <Tag className="w-8 h-8 text-cyan-400" />
                    <h1 className="text-5xl font-bold text-cyan-400">VARIABLE NAMING RULES</h1>
                </div>

                <p className="text-2xl text-gray-300 mb-12">
                    Python has <span className="text-cyan-400 font-bold">strict rules</span> for naming variables:
                </p>

                <div className="space-y-6 mb-12">
                    <div className="p-6 rounded-xl bg-cyan-500/10 border-l-4 border-cyan-500">
                        <h3 className="text-cyan-400 font-bold text-xl mb-2">1. Start with a letter or underscore</h3>
                        <p className="text-gray-300">Can't start with a number!</p>
                    </div>

                    <div className="p-6 rounded-xl bg-cyan-500/10 border-l-4 border-cyan-500">
                        <h3 className="text-cyan-400 font-bold text-xl mb-2">2. Use only letters, numbers, and underscores</h3>
                        <p className="text-gray-300">No spaces, no special characters like @, #, $</p>
                    </div>

                    <div className="p-6 rounded-xl bg-cyan-500/10 border-l-4 border-cyan-500">
                        <h3 className="text-cyan-400 font-bold text-xl mb-2">3. Case-sensitive</h3>
                        <p className="text-gray-300"><code className="text-[#53d22d]">score</code> and <code className="text-[#53d22d]">Score</code> are different variables!</p>
                    </div>

                    <div className="p-6 rounded-xl bg-cyan-500/10 border-l-4 border-cyan-500">
                        <h3 className="text-cyan-400 font-bold text-xl mb-2">4. No Python keywords</h3>
                        <p className="text-gray-300">Can't use words like: <code className="text-red-400">print</code>, <code className="text-red-400">if</code>, <code className="text-red-400">for</code></p>
                    </div>
                </div>

                <div className="p-6 rounded-xl bg-[#53d22d]/10 border-2 border-[#53d22d]/30">
                    <h3 className="text-[#53d22d] font-bold text-xl mb-4">💡 BEST PRACTICE: Use snake_case</h3>
                    <p className="text-gray-300 text-lg">
                        Use lowercase letters with underscores: <code className="text-cyan-400 bg-cyan-400/10 px-2 py-1 rounded">player_score</code>,
                        <code className="text-cyan-400 bg-cyan-400/10 px-2 py-1 rounded ml-2">user_name</code>
                    </p>
                </div>
            </div>
        </div>
    );
}
