/**
 * Lesson 03 - Slide 11: Mission Complete
 */

import React from 'react';
import { Trophy } from 'lucide-react';

export function Lesson03Slide11() {
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
                    LESSON 03: DATA STREAMS
                </h2>

                {/* Summary */}
                <div className="mb-12 p-8 rounded-xl bg-cyan-500/10 border-2 border-cyan-500/30">
                    <h3 className="text-cyan-400 font-bold text-2xl mb-6">WHAT YOU MASTERED:</h3>
                    <div className="grid grid-cols-2 gap-4 text-left">
                        <div className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-full bg-[#53d22d]/30 flex items-center justify-center flex-shrink-0 mt-1">
                                <div className="w-3 h-3 rounded-full bg-[#53d22d]" />
                            </div>
                            <p className="text-gray-300 text-lg">String indexing (0-based)</p>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-full bg-[#53d22d]/30 flex items-center justify-center flex-shrink-0 mt-1">
                                <div className="w-3 h-3 rounded-full bg-[#53d22d]" />
                            </div>
                            <p className="text-gray-300 text-lg">Negative indexing</p>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-full bg-[#53d22d]/30 flex items-center justify-center flex-shrink-0 mt-1">
                                <div className="w-3 h-3 rounded-full bg-[#53d22d]" />
                            </div>
                            <p className="text-gray-300 text-lg">String slicing [start:stop]</p>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-full bg-[#53d22d]/30 flex items-center justify-center flex-shrink-0 mt-1">
                                <div className="w-3 h-3 rounded-full bg-[#53d22d]" />
                            </div>
                            <p className="text-gray-300 text-lg">F-string formatting</p>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-full bg-[#53d22d]/30 flex items-center justify-center flex-shrink-0 mt-1">
                                <div className="w-3 h-3 rounded-full bg-[#53d22d]" />
                            </div>
                            <p className="text-gray-300 text-lg">String methods</p>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-full bg-[#53d22d]/30 flex items-center justify-center flex-shrink-0 mt-1">
                                <div className="w-3 h-3 rounded-full bg-[#53d22d]" />
                            </div>
                            <p className="text-gray-300 text-lg">String concatenation</p>
                        </div>
                    </div>
                </div>

                {/* Next Steps */}
                <div className="p-6 rounded-xl bg-[#53d22d]/10 border-2 border-[#53d22d]/30">
                    <p className="text-gray-300 text-xl mb-4">
                        🎯 <span className="text-[#53d22d] font-bold">NEXT MISSION:</span> Lesson 04 - Input & Logic
                    </p>
                    <p className="text-gray-400">
                        You'll master user input and boolean logic!
                    </p>
                </div>

                {/* Status Bar */}
                <div className="mt-12 inline-block px-8 py-3 rounded-lg bg-[#53d22d]/20 border-2 border-[#53d22d]/50">
                    <p className="text-[#53d22d] font-mono font-bold text-lg">
                        LESSON 03 CLEARED • +285 XP EARNED
                    </p>
                </div>
            </div>
        </div>
    );
}
