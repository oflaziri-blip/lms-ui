/**
 * Lesson 02 - Slides 29-30: Memory Visualization & Mission Complete
 */

import React from 'react';
import { Cpu, Trophy } from 'lucide-react';

// Slide 29: Memory Visualization
export function Lesson02Slide29() {
    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-950 text-white p-12 relative overflow-hidden">
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'linear-gradient(#53d22d 1px, transparent 1px), linear-gradient(90deg, #53d22d 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }} />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto">
                <div className="flex items-center gap-3 mb-8">
                    <Cpu className="w-8 h-8 text-cyan-400" />
                    <h1 className="text-5xl font-bold text-cyan-400">MEMORY VISUALIZATION</h1>
                </div>

                <p className="text-2xl text-gray-300 mb-12">
                    Here's what happens in <span className="text-[#53d22d] font-bold">computer memory</span> when you create variables:
                </p>

                <div className="mb-12">
                    <h3 className="text-cyan-400 font-bold text-xl mb-6 text-center">PYTHON MEMORY BANK</h3>

                    {/* Memory visualization */}
                    <div className="grid grid-cols-3 gap-6">
                        <div className="p-6 rounded-xl bg-cyan-500/10 border-2 border-cyan-500/30">
                            <div className="text-center mb-4">
                                <div className="inline-block px-4 py-2 rounded bg-cyan-500/20 border border-cyan-500/50">
                                    <code className="text-cyan-400 font-bold">name</code>
                                </div>
                            </div>
                            <svg width="100%" height="120" viewBox="0 0 200 120" className="mx-auto">
                                <rect x="20" y="20" width="160" height="80" fill="#0891b2" fillOpacity="0.2" stroke="#06b6d4" strokeWidth="2" rx="4" />
                                <text x="100" y="70" textAnchor="middle" fill="#53d22d" fontSize="24" fontWeight="bold">"Alex"</text>
                            </svg>
                            <p className="text-gray-400 text-sm text-center mt-2">Memory Address: 0x7f8a...</p>
                        </div>

                        <div className="p-6 rounded-xl bg-[#53d22d]/10 border-2 border-[#53d22d]/30">
                            <div className="text-center mb-4">
                                <div className="inline-block px-4 py-2 rounded bg-[#53d22d]/20 border border-[#53d22d]/50">
                                    <code className="text-[#53d22d] font-bold">score</code>
                                </div>
                            </div>
                            <svg width="100%" height="120" viewBox="0 0 200 120" className="mx-auto">
                                <rect x="20" y="20" width="160" height="80" fill="#53d22d" fillOpacity="0.2" stroke="#53d22d" strokeWidth="2" rx="4" />
                                <text x="100" y="70" textAnchor="middle" fill="#06b6d4" fontSize="32" fontWeight="bold">100</text>
                            </svg>
                            <p className="text-gray-400 text-sm text-center mt-2">Memory Address: 0x7f8b...</p>
                        </div>

                        <div className="p-6 rounded-xl bg-blue-500/10 border-2 border-blue-500/30">
                            <div className="text-center mb-4">
                                <div className="inline-block px-4 py-2 rounded bg-blue-500/20 border border-blue-500/50">
                                    <code className="text-blue-400 font-bold">price</code>
                                </div>
                            </div>
                            <svg width="100%" height="120" viewBox="0 0 200 120" className="mx-auto">
                                <rect x="20" y="20" width="160" height="80" fill="#3b82f6" fillOpacity="0.2" stroke="#3b82f6" strokeWidth="2" rx="4" />
                                <text x="100" y="70" textAnchor="middle" fill="#06b6d4" fontSize="28" fontWeight="bold">19.99</text>
                            </svg>
                            <p className="text-gray-400 text-sm text-center mt-2">Memory Address: 0x7f8c...</p>
                        </div>
                    </div>
                </div>

                <div className="space-y-6">
                    <div className="p-6 rounded-xl bg-cyan-500/10 border-l-4 border-cyan-500">
                        <h3 className="text-cyan-400 font-bold text-xl mb-3">1. Python allocates memory</h3>
                        <p className="text-gray-300">Each variable gets a unique spot in RAM</p>
                    </div>

                    <div className="p-6 rounded-xl bg-[#53d22d]/10 border-l-4 border-[#53d22d]">
                        <h3 className="text-[#53d22d] font-bold text-xl mb-3">2. Variable name = Label</h3>
                        <p className="text-gray-300">The name points to the memory location</p>
                    </div>

                    <div className="p-6 rounded-xl bg-blue-500/10 border-l-4 border-blue-500">
                        <h3 className="text-blue-400 font-bold text-xl mb-3">3. Value = Contents</h3>
                        <p className="text-gray-300">The actual data is stored at that location</p>
                    </div>
                </div>

                <div className="mt-12 p-6 rounded-xl bg-cyan-500/10 border-2 border-cyan-500/30 text-center">
                    <p className="text-gray-300 text-xl">
                        💡 When you use a variable, Python looks up the memory address and retrieves the value!
                    </p>
                </div>
            </div>
        </div>
    );
}

// Slide 30: Mission Complete
export function Lesson02Slide30() {
    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-cyan-950 via-blue-950 to-slate-950 text-white flex items-center justify-center p-12 relative overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'linear-gradient(cyan 1px, transparent 1px), linear-gradient(90deg, cyan 1px, transparent 1px)',
                    backgroundSize: '50px 50px'
                }} />
            </div>

            {/* Floating Particles */}
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(30)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-2 h-2 bg-[#53d22d] rounded-full animate-pulse"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 2}s`,
                            opacity: Math.random() * 0.7 + 0.3
                        }}
                    />
                ))}
            </div>

            <div className="relative z-10 text-center max-w-4xl mx-auto">
                {/* Trophy Icon */}
                <div className="flex justify-center mb-8">
                    <div className="w-32 h-32 rounded-full bg-[#53d22d]/20 flex items-center justify-center" style={{ boxShadow: '0 0 40px rgba(83,210,45,0.5)' }}>
                        <Trophy className="w-20 h-20 text-[#53d22d]" />
                    </div>
                </div>

                {/* Title */}
                <h1 className="text-7xl font-bold bg-gradient-to-r from-cyan-400 via-[#53d22d] to-cyan-400 bg-clip-text text-transparent mb-6 animate-pulse">
                    MISSION COMPLETE!
                </h1>

                <h2 className="text-4xl font-light text-cyan-300 mb-12">
                    LESSON 02: MEMORY CONTAINERS
                </h2>

                {/* Summary */}
                <div className="mb-12 p-8 rounded-xl bg-cyan-500/10 border-2 border-cyan-500/30">
                    <h3 className="text-cyan-400 font-bold text-2xl mb-6">WHAT YOU MASTERED:</h3>
                    <div className="grid grid-cols-2 gap-4 text-left">
                        <div className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-full bg-[#53d22d]/30 flex items-center justify-center flex-shrink-0 mt-1">
                                <div className="w-3 h-3 rounded-full bg-[#53d22d]" />
                            </div>
                            <p className="text-gray-300 text-lg">Creating and using variables</p>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-full bg-[#53d22d]/30 flex items-center justify-center flex-shrink-0 mt-1">
                                <div className="w-3 h-3 rounded-full bg-[#53d22d]" />
                            </div>
                            <p className="text-gray-300 text-lg">Understanding data types</p>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-full bg-[#53d22d]/30 flex items-center justify-center flex-shrink-0 mt-1">
                                <div className="w-3 h-3 rounded-full bg-[#53d22d]" />
                            </div>
                            <p className="text-gray-300 text-lg">Variable naming rules</p>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-full bg-[#53d22d]/30 flex items-center justify-center flex-shrink-0 mt-1">
                                <div className="w-3 h-3 rounded-full bg-[#53d22d]" />
                            </div>
                            <p className="text-gray-300 text-lg">Type conversion</p>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-full bg-[#53d22d]/30 flex items-center justify-center flex-shrink-0 mt-1">
                                <div className="w-3 h-3 rounded-full bg-[#53d22d]" />
                            </div>
                            <p className="text-gray-300 text-lg">Variables in calculations</p>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-full bg-[#53d22d]/30 flex items-center justify-center flex-shrink-0 mt-1">
                                <div className="w-3 h-3 rounded-full bg-[#53d22d]" />
                            </div>
                            <p className="text-gray-300 text-lg">Best practices</p>
                        </div>
                    </div>
                </div>

                {/* Next Steps */}
                <div className="p-6 rounded-xl bg-[#53d22d]/10 border-2 border-[#53d22d]/30">
                    <p className="text-gray-300 text-xl mb-4">
                        🎯 <span className="text-[#53d22d] font-bold">NEXT MISSION:</span> Lesson 03 - Jump Calculations (Math)
                    </p>
                    <p className="text-gray-400">
                        You'll master all 7 Python math operators and PEMDAS!
                    </p>
                </div>

                {/* Status Bar */}
                <div className="mt-12 inline-block px-8 py-3 rounded-lg bg-[#53d22d]/20 border-2 border-[#53d22d]/50">
                    <p className="text-[#53d22d] font-mono font-bold text-lg">
                        LESSON 02 CLEARED • +120 XP EARNED
                    </p>
                </div>
            </div>
        </div>
    );
}
