import React from 'react';
import { Database, AlertTriangle, Scan, Terminal as TerminalIcon, Cpu } from 'lucide-react';
import { Terminal, CodeLine } from './Terminal';

/**
 * LESSON 02 PEDAGOGY TEST
 * theme: Chronos Cyberpunk
 * pedagogy: Gold Standard (Workplace Simulation / Scaffolded)
 */

// ----------------------------------------------------------------------
// 1. MISSION BRIEFING (The Hook)
// Goal: Set a concrete, narrative-driven objective.
// ----------------------------------------------------------------------
export function Lesson02TestSlide01() {
    return (
        <div className="min-h-screen w-full bg-slate-950 text-white p-12 relative overflow-hidden font-sans">
            {/* Background Grid */}
            <div className="absolute inset-0 opacity-10"
                style={{ backgroundImage: 'linear-gradient(#53d22d 1px, transparent 1px), linear-gradient(90deg, #53d22d 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

            <div className="relative z-10 max-w-4xl mx-auto flex flex-col h-full justify-center">
                <div className="flex items-center gap-4 mb-6">
                    <div className="p-4 bg-[#53d22d]/20 rounded-full border border-[#53d22d]">
                        <Cpu className="w-12 h-12 text-[#53d22d]" />
                    </div>
                    <div>
                        <h2 className="text-cyan-400 text-xl tracking-widest font-mono">MISSION BRIEFING</h2>
                        <h1 className="text-5xl font-bold text-white mt-2">MEMORY CONTAINERS</h1>
                    </div>
                </div>

                <div className="bg-slate-900/80 border-l-4 border-[#53d22d] p-8 rounded-r-xl backdrop-blur-sm">
                    <h3 className="text-2xl text-[#53d22d] font-bold mb-4 font-mono">
                        // INCOMING TRANSMISSION: CORE
                    </h3>
                    <p className="text-xl text-gray-300 leading-relaxed mb-6">
                        Agent, the system is flooded with data fragments. We can't just
                        <span className="text-cyan-400 font-mono mx-2">print()</span>
                        them to the void anymore. We need to <strong className="text-white">capture</strong> and <strong className="text-white">store</strong> them for later use.
                    </p>
                    <p className="text-xl text-gray-300 leading-relaxed">
                        Your objective: Initialize <span className="text-[#53d22d] font-bold">Variables</span> to hold critical mission data.
                    </p>
                </div>
            </div>
        </div>
    );
}

// ----------------------------------------------------------------------
// 2. SYSTEM DIAGNOSTIC (The Review)
// Goal: Activate prior knowledge (Print, Data Types)
// ----------------------------------------------------------------------
export function Lesson02TestSlide02() {
    return (
        <div className="min-h-screen w-full bg-slate-950 text-white p-12 relative overflow-hidden">
            <div className="absolute inset-0 opacity-5"
                style={{ backgroundImage: 'radial-gradient(#06b6d4 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

            <div className="relative z-10 max-w-4xl mx-auto">
                <div className="flex items-center gap-3 mb-12">
                    <AlertTriangle className="w-8 h-8 text-yellow-500" />
                    <h1 className="text-4xl font-bold text-yellow-500 tracking-wider">SYSTEM DIAGNOSTIC</h1>
                </div>

                <div className="grid grid-cols-2 gap-8">
                    <div className="p-6 bg-slate-900/50 border border-slate-700 rounded-xl hover:border-cyan-500 transition-colors">
                        <h3 className="text-cyan-400 font-mono text-lg mb-4">CHECK 1: OUTPUT</h3>
                        <p className="text-gray-400 mb-4">Which command sends data to the terminal console?</p>
                        <Terminal variant="default" title="Terminal">
                            <CodeLine output>Hello World</CodeLine>
                        </Terminal>
                        <div className="mt-4 flex gap-2">
                            <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded text-sm">show()</span>
                            <span className="px-3 py-1 bg-[#53d22d]/20 text-[#53d22d] rounded text-sm font-bold">print()</span>
                        </div>
                    </div>

                    <div className="p-6 bg-slate-900/50 border border-slate-700 rounded-xl hover:border-cyan-500 transition-colors">
                        <h3 className="text-cyan-400 font-mono text-lg mb-4">CHECK 2: DATA TYPES</h3>
                        <p className="text-gray-400 mb-4">Identify a 'String' of text:</p>
                        <div className="space-y-2 font-mono text-sm">
                            <div className="p-2 bg-slate-800 rounded border border-slate-700">42</div>
                            <div className="p-2 bg-[#53d22d]/10 border border-[#53d22d] text-[#53d22d] rounded">"Cyberpunk"</div>
                            <div className="p-2 bg-slate-800 rounded border border-slate-700">3.14</div>
                        </div>
                    </div>
                </div>

                <div className="mt-12 text-center">
                    <p className="text-gray-500 font-mono animate-pulse">Waiting for diagnostic confirmation...</p>
                </div>
            </div>
        </div>
    );
}

// ----------------------------------------------------------------------
// 3. SCHEMATIC LOGIC (Visual First)
// Goal: Visualize the concept before coding.
// ----------------------------------------------------------------------
export function Lesson02TestSlide03() {
    return (
        <div className="min-h-screen w-full bg-slate-950 text-white p-12 relative overflow-hidden">
            <div className="absolute inset-0 opacity-5"
                style={{ backgroundImage: 'linear-gradient(to right, #1e293b 1px, transparent 1px), linear-gradient(to bottom, #1e293b 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

            <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
                <h1 className="text-4xl font-bold text-cyan-400 mb-16 tracking-widest">SCHEMATIC: THE VARIABLE</h1>

                <div className="relative flex items-center justify-center gap-12 w-full">

                    {/* The Label */}
                    <div className="text-center group">
                        <div className="w-48 p-4 border-2 border-dashed border-gray-500 rounded-lg group-hover:border-yellow-500 transition-colors">
                            <span className="font-mono text-2xl text-yellow-500">score</span>
                        </div>
                        <p className="mt-4 text-gray-400 text-sm">THE NAME (LABEL)</p>
                    </div>

                    {/* The Connector */}
                    <div className="flex flex-col items-center">
                        <div className="w-24 h-1 bg-gray-700"></div>
                        <div className="mt-2 text-[#53d22d] font-bold text-2xl font-mono">=</div>
                    </div>

                    {/* The Value */}
                    <div className="text-center group">
                        <div className="w-48 p-4 bg-cyan-900/30 border-2 border-cyan-500 rounded-lg shadow-[0_0_30px_rgba(6,182,212,0.3)]">
                            <span className="font-mono text-3xl text-white">100</span>
                        </div>
                        <p className="mt-4 text-gray-400 text-sm">THE DATALOD (VALUE)</p>
                    </div>
                </div>

                <div className="mt-20 p-6 bg-slate-900/80 border-t-4 border-cyan-500 max-w-2xl text-center">
                    <p className="text-xl text-gray-300">
                        Think of a variable as a <span className="text-yellow-500 font-bold">labelled box</span>.
                        You can put data in, take it out, or change it later.
                    </p>
                </div>
            </div>
        </div>
    );
}

// ----------------------------------------------------------------------
// 4. PROTOCOL IMPLEMENTATION (Code Walkthrough)
// Goal: Interactive code analysis.
// ----------------------------------------------------------------------
export function Lesson02TestSlide04() {
    return (
        <div className="min-h-screen w-full bg-slate-950 text-white p-12 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10"
                style={{ backgroundImage: 'linear-gradient(45deg, #1e293b 25%, transparent 25%, transparent 75%, #1e293b 75%, #1e293b), linear-gradient(45deg, #1e293b 25%, transparent 25%, transparent 75%, #1e293b 75%, #1e293b)', backgroundSize: '20px 20px', backgroundPosition: '0 0, 10px 10px' }} />

            <div className="relative z-10 max-w-5xl mx-auto grid grid-cols-2 gap-12 items-center h-full">

                {/* Visual/Text Column */}
                <div>
                    <div className="flex items-center gap-3 mb-6">
                        <TerminalIcon className="w-8 h-8 text-[#53d22d]" />
                        <h1 className="text-4xl font-bold text-[#53d22d]">PROTOCOL</h1>
                    </div>

                    <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <div className="w-8 h-8 rounded bg-cyan-900/50 flex items-center justify-center text-cyan-400 font-bold border border-cyan-500/50">1</div>
                            <p className="text-lg text-gray-300">Choose a <span className="text-white font-bold">meaningful name</span> (no spaces!).</p>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="w-8 h-8 rounded bg-cyan-900/50 flex items-center justify-center text-cyan-400 font-bold border border-cyan-500/50">2</div>
                            <p className="text-lg text-gray-300">Use the <span className="text-[#53d22d] font-bold font-mono">=</span> operator to assign.</p>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="w-8 h-8 rounded bg-cyan-900/50 flex items-center justify-center text-cyan-400 font-bold border border-cyan-500/50">3</div>
                            <p className="text-lg text-gray-300">Set the <span className="text-white font-bold">value</span> on the right.</p>
                        </div>
                    </div>
                </div>

                {/* Code Column */}
                <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-[#53d22d] rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                    <div className="relative">
                        <Terminal variant="success" title="script.py">
                            <CodeLine className="text-gray-500"># Defining mission parameters</CodeLine>
                            <CodeLine>&nbsp;</CodeLine>
                            <CodeLine>
                                <span className="text-yellow-400">agent_name</span>
                                <span className="text-[#53d22d] mx-2">=</span>
                                <span className="text-cyan-300">"Neo"</span>
                            </CodeLine>
                            <CodeLine>
                                <span className="text-yellow-400">mission_id</span>
                                <span className="text-[#53d22d] mx-2">=</span>
                                <span className="text-purple-400">101</span>
                            </CodeLine>
                            <CodeLine>&nbsp;</CodeLine>
                            <CodeLine>print(agent_name)</CodeLine>
                            <CodeLine output>Neo</CodeLine>
                        </Terminal>

                        <div className="mt-6 p-4 bg-yellow-500/10 border border-yellow-500/50 rounded-lg">
                            <p className="text-yellow-200 text-sm font-mono">
                                ⚠ SYSTEM WARNING: Variable names cannot start with numbers!
                                <br />
                                <span className="text-red-400 line-through">1st_player = "me"</span>
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

// ----------------------------------------------------------------------
// 5. FIELD CHALLENGE (The Hackathon)
// Goal: Open ended creative task.
// ----------------------------------------------------------------------
export function Lesson02TestSlide05() {
    return (
        <div className="min-h-screen w-full bg-slate-950 text-white p-12 relative overflow-hidden flex flex-col justify-center items-center">

            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#53d22d] to-transparent shadow-[0_0_20px_#53d22d]"></div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent shadow-[0_0_20px_cyan]"></div>
            </div>

            <div className="relative z-10 max-w-4xl w-full text-center">
                <div className="mb-8 inline-block p-4 rounded-full bg-[#53d22d]/10 border border-[#53d22d] shadow-[0_0_30px_rgba(83,210,45,0.2)]">
                    <Database className="w-16 h-16 text-[#53d22d] animate-pulse" />
                </div>

                <h1 className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-[#53d22d] to-cyan-400 mb-6">
                    FIELD ASSIGNMENT
                </h1>

                <p className="text-2xl text-gray-300 mb-12 max-w-2xl mx-auto">
                    Initialize your <span className="text-white font-bold">Agent Profile</span> in the system.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                    <div className="p-8 bg-slate-900 border-2 border-dashed border-gray-700 rounded-2xl hover:border-[#53d22d] transition-all group">
                        <h3 className="text-[#53d22d] text-xl font-bold mb-4 group-hover:translate-x-2 transition-transform">OBJECTIVES:</h3>
                        <ul className="space-y-4 font-mono text-gray-400">
                            <li className="flex items-center gap-3">
                                <span className="w-2 h-2 bg-[#53d22d] rounded-full"></span>
                                Create variable <span className="text-white">agent_alias</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-2 h-2 bg-[#53d22d] rounded-full"></span>
                                Create variable <span className="text-white">agent_rank</span> (number)
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-2 h-2 bg-[#53d22d] rounded-full"></span>
                                Print the full profile
                            </li>
                        </ul>
                    </div>

                    <div className="p-8 bg-slate-900 border border-gray-700 rounded-2xl flex flex-col justify-center items-center">
                        <p className="text-cyan-400 font-mono mb-4 text-sm mt-auto">STATUS</p>
                        <p className="text-4xl font-bold text-white mb-2">WAITING...</p>
                        <div className="w-full h-2 bg-gray-800 rounded-full mt-4 overflow-hidden">
                            <div className="w-1/3 h-full bg-[#53d22d] animate-[shimmer_2s_infinite]"></div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
