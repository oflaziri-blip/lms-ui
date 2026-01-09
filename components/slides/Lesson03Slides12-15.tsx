/**
 * Lesson 03 - Slides 12-15: String Operations
 * Concatenation, Multiplication, Escape Characters, Finding Characters
 */

import React from 'react';
import { Plus, Copy, AlertCircle, Search } from 'lucide-react';
import { Terminal, CodeLine } from './Terminal';

// Slide 12: String Concatenation
export function Lesson03Slide12() {
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
                    <Plus className="w-8 h-8 text-cyan-400" />
                    <h1 className="text-5xl font-bold text-cyan-400">STRING CONCATENATION</h1>
                </div>

                <p className="text-2xl text-gray-300 mb-12">
                    Join strings together using the <code className="text-[#53d22d] bg-[#53d22d]/10 px-3 py-1 rounded">+</code> operator:
                </p>

                <Terminal variant="success" title="Chronos Terminal">
                    <CodeLine>first = "Alex"</CodeLine>
                    <CodeLine>last = "Chen"</CodeLine>
                    <CodeLine>&nbsp;</CodeLine>
                    <CodeLine>full_name = first + " " + last</CodeLine>
                    <CodeLine>print(full_name)</CodeLine>
                    <CodeLine output>Alex Chen</CodeLine>
                </Terminal>

                <div className="mt-12 grid grid-cols-2 gap-6">
                    <div>
                        <h3 className="text-[#53d22d] font-bold text-xl mb-4">BUILDING MESSAGES:</h3>
                        <Terminal variant="default" title="Python">
                            <CodeLine>greeting = "Hello, " + "Agent" + "!"</CodeLine>
                            <CodeLine>print(greeting)</CodeLine>
                            <CodeLine output className="text-[#53d22d]">Hello, Agent!</CodeLine>
                        </Terminal>
                    </div>

                    <div>
                        <h3 className="text-yellow-400 font-bold text-xl mb-4">⚠️ WATCH OUT:</h3>
                        <Terminal variant="error" title="Python">
                            <CodeLine>score = 100</CodeLine>
                            <CodeLine>msg = "Score: " + score</CodeLine>
                            <CodeLine output className="text-red-400">TypeError: can only concatenate str to str</CodeLine>
                            <CodeLine className="text-gray-500"># Can't mix strings and numbers!</CodeLine>
                        </Terminal>
                    </div>
                </div>

                <div className="mt-12 p-6 rounded-xl bg-[#53d22d]/10 border-2 border-[#53d22d]/30">
                    <h3 className="text-[#53d22d] font-bold text-xl mb-4">✅ FIX: Convert to string first</h3>
                    <Terminal variant="success" title="Python">
                        <CodeLine>score = 100</CodeLine>
                        <CodeLine>msg = "Score: " + str(score)</CodeLine>
                        <CodeLine>print(msg)</CodeLine>
                        <CodeLine output className="text-[#53d22d]">Score: 100</CodeLine>
                    </Terminal>
                </div>
            </div>
        </div>
    );
}

// Slide 13: String Multiplication
export function Lesson03Slide13() {
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
                    <Copy className="w-8 h-8 text-[#53d22d]" />
                    <h1 className="text-5xl font-bold text-[#53d22d]">STRING MULTIPLICATION</h1>
                </div>

                <p className="text-2xl text-gray-300 mb-12">
                    Repeat strings using the <code className="text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded">*</code> operator:
                </p>

                <Terminal variant="success" title="Chronos Terminal">
                    <CodeLine>print("=" * 20)</CodeLine>
                    <CodeLine output className="text-[#53d22d]">====================</CodeLine>
                    <CodeLine>&nbsp;</CodeLine>
                    <CodeLine>print("ABC" * 3)</CodeLine>
                    <CodeLine output className="text-[#53d22d]">ABCABCABC</CodeLine>
                    <CodeLine>&nbsp;</CodeLine>
                    <CodeLine>print("-" * 10)</CodeLine>
                    <CodeLine output className="text-[#53d22d]">----------</CodeLine>
                </Terminal>

                <div className="mt-12 p-8 rounded-xl bg-cyan-500/10 border-2 border-cyan-500/30">
                    <h3 className="text-cyan-400 font-bold text-2xl mb-6">USE CASES:</h3>
                    <Terminal variant="default" title="Creating Borders">
                        <CodeLine>print("=" * 30)</CodeLine>
                        <CodeLine>print("  CHRONOS MISSION REPORT")</CodeLine>
                        <CodeLine>print("=" * 30)</CodeLine>
                        <CodeLine output className="text-[#53d22d]">==============================</CodeLine>
                        <CodeLine output className="text-[#53d22d]">  CHRONOS MISSION REPORT</CodeLine>
                        <CodeLine output className="text-[#53d22d]">==============================</CodeLine>
                    </Terminal>
                </div>

                <div className="mt-8 p-6 rounded-xl bg-[#53d22d]/10 border border-[#53d22d]/30">
                    <p className="text-xl text-gray-300">
                        💡 Perfect for creating <span className="text-[#53d22d] font-bold">separators</span>,
                        <span className="text-cyan-400 font-bold"> patterns</span>, and
                        <span className="text-[#53d22d] font-bold"> borders</span> in terminal output!
                    </p>
                </div>
            </div>
        </div>
    );
}

// Slide 14: Escape Characters
export function Lesson03Slide14() {
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
                    <AlertCircle className="w-8 h-8 text-cyan-400" />
                    <h1 className="text-5xl font-bold text-cyan-400">ESCAPE CHARACTERS</h1>
                </div>

                <p className="text-2xl text-gray-300 mb-12">
                    Special characters using backslash <code className="text-[#53d22d] bg-[#53d22d]/10 px-3 py-1 rounded">\</code>:
                </p>

                <div className="space-y-6">
                    <div className="p-6 rounded-xl bg-slate-800/50 border border-cyan-500/30">
                        <h3 className="text-cyan-400 font-bold text-xl mb-3">NEW LINE (\n)</h3>
                        <Terminal variant="default" title="Python">
                            <CodeLine>print("Line 1\nLine 2")</CodeLine>
                            <CodeLine output>Line 1</CodeLine>
                            <CodeLine output>Line 2</CodeLine>
                        </Terminal>
                    </div>

                    <div className="p-6 rounded-xl bg-slate-800/50 border border-cyan-500/30">
                        <h3 className="text-cyan-400 font-bold text-xl mb-3">TAB (\t)</h3>
                        <Terminal variant="default" title="Python">
                            <CodeLine>print("Name:\tAlex")</CodeLine>
                            <CodeLine output>Name:    Alex</CodeLine>
                        </Terminal>
                    </div>

                    <div className="p-6 rounded-xl bg-slate-800/50 border border-cyan-500/30">
                        <h3 className="text-cyan-400 font-bold text-xl mb-3">QUOTES (\" and \')</h3>
                        <Terminal variant="default" title="Python">
                            <CodeLine>print("She said \"Hello!\"")</CodeLine>
                            <CodeLine output>She said "Hello!"</CodeLine>
                            <CodeLine>&nbsp;</CodeLine>
                            <CodeLine>print('It\'s working!')</CodeLine>
                            <CodeLine output>It's working!</CodeLine>
                        </Terminal>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Slide 15: Finding Characters
export function Lesson03Slide15() {
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
                    <Search className="w-8 h-8 text-[#53d22d]" />
                    <h1 className="text-5xl font-bold text-[#53d22d]">FINDING CHARACTERS</h1>
                </div>

                <p className="text-2xl text-gray-300 mb-12">
                    Check if a character or substring exists using the <code className="text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded">in</code> keyword:
                </p>

                <Terminal variant="success" title="Chronos Terminal">
                    <CodeLine>message = "Neon City"</CodeLine>
                    <CodeLine>&nbsp;</CodeLine>
                    <CodeLine>print("N" in message)</CodeLine>
                    <CodeLine output>True</CodeLine>
                    <CodeLine>&nbsp;</CodeLine>
                    <CodeLine>print("City" in message)</CodeLine>
                    <CodeLine output>True</CodeLine>
                    <CodeLine>&nbsp;</CodeLine>
                    <CodeLine>print("Mars" in message)</CodeLine>
                    <CodeLine output>False</CodeLine>
                </Terminal>

                <div className="mt-12 p-8 rounded-xl bg-yellow-500/10 border-2 border-yellow-500/30">
                    <h3 className="text-yellow-400 font-bold text-2xl mb-4">⚠️ CASE SENSITIVE!</h3>
                    <Terminal variant="default" title="Python">
                        <CodeLine>text = "Python Programming"</CodeLine>
                        <CodeLine>&nbsp;</CodeLine>
                        <CodeLine>print("python" in text)  # lowercase p</CodeLine>
                        <CodeLine output>False</CodeLine>
                        <CodeLine>&nbsp;</CodeLine>
                        <CodeLine>print("Python" in text)  # uppercase P</CodeLine>
                        <CodeLine output>True</CodeLine>
                    </Terminal>
                </div>

                <div className="mt-8 p-6 rounded-xl bg-cyan-500/10 border border-cyan-500/30">
                    <p className="text-xl text-gray-300">
                        💡 Returns <code className="text-[#53d22d]">True</code> if found,
                        <code className="text-red-400"> False</code> if not found
                    </p>
                </div>
            </div>
        </div>
    );
}
