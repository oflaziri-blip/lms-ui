/**
 * Lesson 03 - Slides 02-05: Mission Briefing
 * What are Strings, The Index Train, Zero-Indexing
 */

import React from 'react';
import { Users, Train, Info, Target } from 'lucide-react';

// Slide 02: Mission Objectives
export function Lesson03Slide02() {
    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-blue-950 via-slate-950 to-cyan-950 text-white p-12 relative overflow-hidden">
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'linear-gradient(cyan 1px, transparent 1px), linear-gradient(90deg, cyan 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }} />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto">
                <div className="flex items-center gap-3 mb-12">
                    <Target className="w-10 h-10 text-cyan-400" />
                    <h1 className="text-6xl font-bold text-cyan-400">MISSION OBJECTIVES</h1>
                </div>

                <div className="space-y-6">
                    {[
                        'Master string concatenation and replication',
                        'Understand 0-based indexing in Chronos data streams',
                        'Learn string slicing [start:stop:step]',
                        'Use f-strings for formatting mission reports',
                        'Calculate string length with len()'
                    ].map((objective, i) => (
                        <div key={i} className="flex items-start gap-4 p-4 rounded-lg bg-cyan-500/10 border border-cyan-500/30">
                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 font-bold">
                                {i + 1}
                            </div>
                            <p className="text-xl text-gray-200 pt-1">{objective}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <div className="inline-block px-6 py-3 rounded-lg bg-[#53d22d]/20 border-2 border-[#53d22d]/50">
                        <p className="text-[#53d22d] font-mono font-bold">MISSION DURATION: ~60 MINUTES</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Slide 03: What is a String?
export function Lesson03Slide03() {
    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-cyan-950 via-blue-950 to-slate-950 text-white p-12 relative overflow-hidden">
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'linear-gradient(#53d22d 1px, transparent 1px), linear-gradient(90deg, #53d22d 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }} />
            </div>

            <div className="relative z-10 max-w-5xl mx-auto">
                <h1 className="text-5xl font-bold text-[#53d22d] mb-8">WHAT IS A STRING?</h1>

                <div className="mb-12 p-8 rounded-xl bg-cyan-500/10 border-2 border-cyan-500/30">
                    <p className="text-3xl text-gray-200 leading-relaxed">
                        A <span className="text-cyan-400 font-bold">string</span> is a sequence of characters —
                        the fundamental data type for storing <span className="text-[#53d22d]">text</span> in Chronos.
                    </p>
                </div>

                <div className="mb-12 p-6 rounded-xl bg-slate-800/50 border border-cyan-500/30">
                    <pre className="text-2xl font-mono text-cyan-400">
                        <code>message = "Hello, Agent!"</code>
                    </pre>
                </div>

                <div className="grid grid-cols-2 gap-6">
                    <div className="p-6 rounded-xl bg-blue-500/10 border border-blue-500/30">
                        <h3 className="text-blue-400 font-bold text-xl mb-4">INSIDE A STRING:</h3>
                        <ul className="text-gray-300 space-y-2">
                            <li>• Letters: <code className="text-[#53d22d]">H, e, l, l, o</code></li>
                            <li>• Spaces: <code className="text-[#53d22d]">" "</code></li>
                            <li>• Punctuation: <code className="text-[#53d22d]">, !</code></li>
                            <li>• Numbers as text: <code className="text-[#53d22d]">"123"</code></li>
                        </ul>
                    </div>

                    <div className="p-6 rounded-xl bg-[#53d22d]/10 border border-[#53d22d]/30">
                        <h3 className="text-[#53d22d] font-bold text-xl mb-4">KEY RULE:</h3>
                        <p className="text-gray-300 text-lg">
                            Everything in quotes is a string. The quotes tell Python:
                            "This is text data, not code!"
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Slide 04: The Index Train Concept
export function Lesson03Slide04() {
    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-950 text-white p-12 relative overflow-hidden">
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'linear-gradient(cyan 1px, transparent 1px), linear-gradient(90deg, cyan 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }} />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto">
                <div className="flex items-center gap-3 mb-8">
                    <Train className="w-8 h-8 text-cyan-400" />
                    <h1 className="text-5xl font-bold text-cyan-400">THE INDEX TRAIN</h1>
                </div>

                <p className="text-2xl text-gray-300 mb-12">
                    Think of a string as a <span className="text-[#53d22d] font-bold">data train</span> with numbered cars:
                </p>

                {/* Visual Train */}
                <div className="mb-12 p-8 rounded-xl bg-slate-800/50 border-2 border-cyan-500/30">
                    <div className="text-center mb-6">
                        <code className="text-3xl font-mono text-cyan-400">String: "PYTHON"</code>
                    </div>

                    <div className="flex justify-center gap-4 mb-6">
                        {['P', 'Y', 'T', 'H', 'O', 'N'].map((char, i) => (
                            <div key={i} className="text-center">
                                <div className="w-20 h-20 rounded-lg bg-cyan-500/20 border-2 border-cyan-500/50 flex items-center justify-center mb-2">
                                    <span className="text-3xl font-bold text-[#53d22d]">{char}</span>
                                </div>
                                <div className="text-cyan-400 font-mono text-sm">[{i}]</div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center text-gray-400 font-mono">
                        Position: 0 → 1 → 2 → 3 → 4 → 5
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                    <div className="p-6 rounded-xl bg-cyan-500/10 border-l-4 border-cyan-500">
                        <h3 className="text-cyan-400 font-bold text-xl mb-3">🔢 KEY RULES:</h3>
                        <ul className="text-gray-300 space-y-2">
                            <li>• Counting starts at <code className="text-[#53d22d]">0</code> (zero-indexed)</li>
                            <li>• Each character has a position number</li>
                            <li>• First character is at index <code className="text-[#53d22d]">0</code></li>
                            <li>• Last character is at index <code className="text-[#53d22d]">length - 1</code></li>
                        </ul>
                    </div>

                    <div className="p-6 rounded-xl bg-[#53d22d]/10 border-l-4 border-[#53d22d]">
                        <h3 className="text-[#53d22d] font-bold text-xl mb-3">💡 WHY ZERO?</h3>
                        <p className="text-gray-300 text-lg">
                            Computers measure <span className="text-cyan-400 font-bold">distance from the start</span>.
                            Character 0 = 0 steps away. Character 1 = 1 step away!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Slide 05: Accessing Characters
export function Lesson03Slide05() {
    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-cyan-950 via-blue-950 to-slate-950 text-white p-12 relative overflow-hidden">
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'linear-gradient(#53d22d 1px, transparent 1px), linear-gradient(90deg, #53d22d 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }} />
            </div>

            <div className="relative z-10 max-w-5xl mx-auto">
                <h1 className="text-5xl font-bold text-[#53d22d] mb-8">ACCESSING CHARACTERS</h1>

                <p className="text-2xl text-gray-300 mb-12">
                    Use <span className="text-cyan-400 font-bold">square brackets []</span> to extract a character from the data stream:
                </p>

                <div className="mb-12 p-8 rounded-xl bg-slate-800/50 border-2 border-cyan-500/30">
                    <pre className="text-xl font-mono text-gray-300 space-y-2">
                        <code className="text-cyan-400">message = "NEON"</code>
                        <code className="block mt-4"></code>
                        <code className="text-gray-500"># Access individual characters:</code>
                        <code className="block">print(message[0])    <span className="text-gray-500"># N</span></code>
                        <code className="block">print(message[1])    <span className="text-gray-500"># E</span></code>
                        <code className="block">print(message[2])    <span className="text-gray-500"># O</span></code>
                        <code className="block">print(message[3])    <span className="text-gray-500"># N</span></code>
                    </pre>
                </div>

                <div className="grid grid-cols-2 gap-6">
                    <div className="p-6 rounded-xl bg-cyan-500/10 border border-cyan-500/30">
                        <h3 className="text-cyan-400 font-bold text-xl mb-3">INDEX</h3>
                        <p className="text-gray-300">The position number inside the brackets</p>
                    </div>
                    <div className="p-6 rounded-xl bg-[#53d22d]/10 border border-[#53d22d]/30">
                        <h3 className="text-[#53d22d] font-bold text-xl mb-3">CHARACTER</h3>
                        <p className="text-gray-300">What's stored at that position</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
