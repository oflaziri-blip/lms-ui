/**
 * Lesson 02 - Slide 03: The Solution
 * Memory Banks (Variables)
 */

import React from 'react';
import { Database, CheckCircle } from 'lucide-react';
import { Terminal, CodeLine } from './Terminal';

export function Lesson02Slide03() {
    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-cyan-950 via-blue-950 to-slate-950 text-white p-12 relative overflow-hidden">
            {/* Grid Background */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'linear-gradient(#53d22d 1px, transparent 1px), linear-gradient(90deg, #53d22d 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }} />
            </div>

            <div className="relative z-10 max-w-5xl mx-auto">
                {/* Header */}
                <div className="flex items-center gap-3 mb-8">
                    <CheckCircle className="w-8 h-8 text-[#53d22d]" />
                    <h1 className="text-5xl font-bold text-[#53d22d]">THE SOLUTION</h1>
                </div>

                <p className="text-2xl text-gray-300 mb-12">
                    Introducing: <span className="text-cyan-400 font-bold">VARIABLES</span> —
                    Python's <span className="text-[#53d22d]">memory banks</span> for storing data!
                </p>

                {/* Visual Metaphor */}
                <div className="mb-12">
                    <div className="flex items-center justify-center gap-8 mb-8">
                        {/* Storage Container SVG */}
                        <svg width="200" height="150" viewBox="0 0 200 150" className="drop-shadow-lg">
                            <rect x="20" y="30" width="160" height="100" fill="#0891b2" fillOpacity="0.2" stroke="#06b6d4" strokeWidth="3" rx="8" />
                            <text x="100" y="70" textAnchor="middle" fill="#06b6d4" fontSize="16" fontWeight="bold">score</text>
                            <text x="100" y="100" textAnchor="middle" fill="#53d22d" fontSize="32" fontWeight="bold">100</text>
                        </svg>

                        <svg width="200" height="150" viewBox="0 0 200 150">
                            <rect x="20" y="30" width="160" height="100" fill="#0891b2" fillOpacity="0.2" stroke="#06b6d4" strokeWidth="3" rx="8" />
                            <text x="100" y="70" textAnchor="middle" fill="#06b6d4" fontSize="16" fontWeight="bold">name</text>
                            <text x="100" y="100" textAnchor="middle" fill="#53d22d" fontSize="24" fontWeight="bold">"Alex"</text>
                        </svg>
                    </div>
                    <p className="text-center text-gray-400 text-sm font-mono">
                        Variables are like labeled storage containers for your data
                    </p>
                </div>

                {/* Code Example */}
                <div className="mb-12">
                    <h3 className="text-cyan-400 font-bold mb-4 flex items-center gap-2">
                        <Database className="w-5 h-5" />
                        STORING DATA
                    </h3>
                    <Terminal variant="success" title="Python Console">
                        <CodeLine prompt=">>>">score = 100</CodeLine>
                        <CodeLine prompt=">>>">name = "Alex"</CodeLine>
                        <CodeLine prompt=">>>">print(score)</CodeLine>
                        <CodeLine output>100</CodeLine>
                        <CodeLine prompt=">>>">print(name)</CodeLine>
                        <CodeLine output>"Alex"</CodeLine>
                        <CodeLine className="text-[#53d22d]"># ✓ Data is saved and accessible!</CodeLine>
                    </Terminal>
                </div>

                {/* Key Insight */}
                <div className="p-6 rounded-xl bg-[#53d22d]/10 border-2 border-[#53d22d]/30">
                    <h3 className="text-[#53d22d] font-bold text-xl mb-3">💡 KEY CONCEPT</h3>
                    <p className="text-gray-300 text-lg leading-relaxed">
                        A <span className="text-cyan-400 font-bold">variable</span> gives your data a <span className="text-cyan-400">name</span> so
                        you can <span className="text-[#53d22d] font-bold">store it</span> and <span className="text-[#53d22d] font-bold">use it later</span>.
                    </p>
                </div>
            </div>
        </div>
    );
}
