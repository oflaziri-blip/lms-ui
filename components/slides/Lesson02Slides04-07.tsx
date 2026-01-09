/**
 * Lesson 02 - Slides 04-10: Mission Briefing & Core Concepts
 * Grouped for efficiency
 */

import React from 'react';
import { Target, Terminal as TerminalIcon, BookOpen, Tag, CheckCircle, XCircle, Code } from 'lucide-react';
import { Terminal, CodeLine } from './Terminal';

// Slide 04: Mission Objective
export function Lesson02Slide04() {
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
                        'Understand what variables are and how to store data',
                        'Learn about different data types: Strings, Integers, Floats',
                        'Practice variable assignment and re-assignment',
                        'Use variables in calculations',
                        'Debug variable naming errors'
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

// Slide 05: The Terminal
export function Lesson02Slide05() {
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
                    <TerminalIcon className="w-8 h-8 text-[#53d22d]" />
                    <h1 className="text-5xl font-bold text-[#53d22d]">THE TERMINAL</h1>
                </div>

                <p className="text-2xl text-gray-300 mb-12">
                    Quick reminder: This is your <span className="text-cyan-400 font-bold">command center</span> for
                    writing and testing Python code.
                </p>

                <Terminal variant="default" title="Python 3.10 Interactive Shell">
                    <CodeLine className="text-gray-500"># The >>> prompt means Python is ready</CodeLine>
                    <CodeLine prompt=">>>">agent_id = 42</CodeLine>
                    <CodeLine prompt=">>>">print(agent_id)</CodeLine>
                    <CodeLine output>42</CodeLine>
                    <CodeLine prompt=">>>">&nbsp;</CodeLine>
                </Terminal>

                <div className="mt-12 grid grid-cols-2 gap-6">
                    <div className="p-6 rounded-xl bg-blue-500/10 border border-blue-500/30">
                        <h3 className="text-blue-400 font-bold mb-3">📥 INPUT</h3>
                        <p className="text-gray-300">Lines starting with <code className="text-cyan-400 bg-cyan-400/10 px-2 py-1 rounded">{'>>>'}</code> are your commands</p>
                    </div>
                    <div className="p-6 rounded-xl bg-[#53d22d]/10 border border-[#53d22d]/30">
                        <h3 className="text-[#53d22d] font-bold mb-3">📤 OUTPUT</h3>
                        <p className="text-gray-300">Lines without <code className="text-cyan-400 bg-cyan-400/10 px-2 py-1 rounded">{'>>>'}</code> are Python's responses</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Slide 06: Key Terms
export function Lesson02Slide06() {
    const terms = [
        { term: 'Variable', definition: 'A named storage location for data', color: 'cyan' },
        { term: 'Assignment', definition: 'The act of storing a value in a variable', color: 'green' },
        { term: 'Value', definition: 'The data stored in a variable', color: 'blue' },
        { term: 'Data Type', definition: 'The kind of data (text, number, etc.)', color: 'purple' }
    ];

    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-cyan-950 via-blue-950 to-slate-950 text-white p-12 relative overflow-hidden">
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'linear-gradient(cyan 1px, transparent 1px), linear-gradient(90deg, cyan 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }} />
            </div>

            <div className="relative z-10 max-w-5xl mx-auto">
                <div className="flex items-center gap-3 mb-12">
                    <BookOpen className="w-8 h-8 text-cyan-400" />
                    <h1 className="text-5xl font-bold text-cyan-400">KEY TERMS</h1>
                </div>

                <div className="grid grid-cols-2 gap-6">
                    {terms.map((item, i) => (
                        <div key={i} className={`p-6 rounded-xl bg-${item.color}-500/10 border-2 border-${item.color}-500/30`}>
                            <h3 className={`text-2xl font-bold text-${item.color}-400 mb-3`}>{item.term}</h3>
                            <p className="text-gray-300 text-lg">{item.definition}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-12 p-6 rounded-xl bg-cyan-500/10 border border-cyan-500/30">
                    <p className="text-gray-300 text-lg text-center">
                        <span className="text-cyan-400 font-bold">Example:</span> In <code className="text-[#53d22d] bg-[#53d22d]/10 px-2 py-1 rounded font-mono">score = 100</code>,
                        <span className="text-cyan-400"> "score"</span> is the <span className="text-cyan-400 font-bold">variable</span>,
                        <span className="text-[#53d22d]"> 100</span> is the <span className="text-[#53d22d] font-bold">value</span>
                    </p>
                </div>
            </div>
        </div>
    );
}

// Slide 07: Real-World Analogy
export function Lesson02Slide07() {
    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-blue-950 via-slate-950 to-cyan-950 text-white p-12 relative overflow-hidden">
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'linear-gradient(#53d22d 1px, transparent 1px), linear-gradient(90deg, #53d22d 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }} />
            </div>

            <div className="relative z-10 max-w-5xl mx-auto">
                <h1 className="text-5xl font-bold text-[#53d22d] mb-12">REAL-WORLD ANALOGY</h1>

                <p className="text-2xl text-gray-300 mb-12">
                    Think of variables like <span className="text-cyan-400 font-bold">labeled storage boxes</span>:
                </p>

                <div className="grid grid-cols-3 gap-6 mb-12">
                    {[
                        { label: 'player_name', content: '"Nova"', color: 'cyan' },
                        { label: 'health', content: '100', color: 'green' },
                        { label: 'level', content: '5', color: 'blue' }
                    ].map((box, i) => (
                        <div key={i} className="text-center">
                            <svg width="200" height="180" viewBox="0 0 200 180" className="mx-auto">
                                <rect x="20" y="40" width="160" height="120" fill="#0891b2" fillOpacity="0.2" stroke="#06b6d4" strokeWidth="3" rx="8" />
                                <rect x="40" y="20" width="120" height="30" fill="#0891b2" fillOpacity="0.3" stroke="#06b6d4" strokeWidth="2" rx="4" />
                                <text x="100" y="40" textAnchor="middle" fill="#06b6d4" fontSize="14" fontWeight="bold">{box.label}</text>
                                <text x="100" y="110" textAnchor="middle" fill="#53d22d" fontSize="28" fontWeight="bold">{box.content}</text>
                            </svg>
                        </div>
                    ))}
                </div>

                <div className="p-6 rounded-xl bg-cyan-500/10 border-2 border-cyan-500/30">
                    <p className="text-gray-300 text-xl text-center leading-relaxed">
                        Each box has a <span className="text-cyan-400 font-bold">label</span> (variable name) and
                        holds <span className="text-[#53d22d] font-bold">contents</span> (the value).
                        You can look inside anytime by using the label!
                    </p>
                </div>
            </div>
        </div>
    );
}
