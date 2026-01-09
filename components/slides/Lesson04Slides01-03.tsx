/**
 * Lesson 04 - Slides 01-03: Title + Mission Briefing
 * Interactive Protocols & Logic Gates
 */

import React from 'react';
import { Monitor, Target, Code } from 'lucide-react';

// Slide 01: Title Card
export function Lesson04Slide01() {
    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-cyan-950 via-blue-950 to-slate-950 text-white flex items-center justify-center p-12 relative overflow-hidden">
            {/* Animated Background Grid */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'linear-gradient(cyan 1px, transparent 1px), linear-gradient(90deg, cyan 1px, transparent 1px)',
                    backgroundSize: '50px 50px'
                }} />
            </div>

            {/* Floating Particles */}
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 2}s`,
                            opacity: Math.random() * 0.5 + 0.2
                        }}
                    />
                ))}
            </div>

            {/* Main Content */}
            <div className="relative z-10 text-center space-y-8">
                {/* Icon Header */}
                <div className="flex justify-center gap-8 mb-8">
                    <Monitor className="w-16 h-16 text-cyan-400 animate-pulse" />
                    <Code className="w-16 h-16 text-[#53d22d]" />
                    <Monitor className="w-16 h-16 text-cyan-400 animate-pulse" />
                </div>

                {/* Title */}
                <div className="space-y-4">
                    <h1 className="text-7xl font-bold bg-gradient-to-r from-cyan-400 via-[#53d22d] to-cyan-400 bg-clip-text text-transparent animate-pulse">
                        OPERATION CHRONOS
                    </h1>
                    <h2 className="text-5xl font-light text-cyan-300">
                        INTERACTIVE PROTOCOLS
                    </h2>
                    <h3 className="text-3xl font-light text-gray-400">
                        Input & Logic Gates
                    </h3>
                </div>

                {/* Mission Details */}
                <div className="mt-12 space-y-3 text-gray-300 font-mono">
                    <div className="flex items-center justify-center gap-4">
                        <span className="text-cyan-400">▸</span>
                        <span><span className="text-gray-500">MISSION CODE:</span> L04-INPUT</span>
                    </div>
                    <div className="flex items-center justify-center gap-4">
                        <span className="text-cyan-400">▸</span>
                        <span><span className="text-gray-500">CLEARANCE LEVEL:</span> Cadet</span>
                    </div>
                    <div className="flex items-center justify-center gap-4">
                        <span className="text-cyan-400">▸</span>
                        <span><span className="text-gray-500">OBJECTIVE:</span> User Interaction & Boolean Logic</span>
                    </div>
                </div>

                {/* Glowing Border Effect */}
                <div className="mt-16 inline-block">
                    <div className="px-8 py-3 border-2 border-cyan-500/50 rounded-lg bg-cyan-500/10 backdrop-blur">
                        <span className="text-cyan-400 font-mono text-sm tracking-wider">
                            ACTIVATING INTERACTIVE MODE...
                        </span>
                    </div>
                </div>
            </div>

            {/* Bottom Status Bar */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/30 backdrop-blur-sm border-t border-cyan-500/30">
                <div className="flex items-center justify-between text-xs font-mono text-gray-400">
                    <div>CHRONOS INTERACTIVE INTERFACE v4.0</div>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-[#53d22d] animate-pulse" />
                        <span>AWAITING INPUT</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Slide 02: Mission Objectives
export function Lesson04Slide02() {
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
                        'Take user input with input()',
                        'Convert input types (str to int)',
                        'Understand boolean logic (True/False)',
                        'Use comparison operators (>, <, ==)',
                        'Build interactive security systems'
                    ].map((objective, i) => (
                        <div key={i} className="flex items-start gap-4 p-4 rounded-lg bg-cyan-500/10 border border-cyan-500/30">
                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 font-bold">
                                {i + 1}
                            </div>
                            <p className="text-xl text-gray-200 pt-1">{objective}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-12 p-8 rounded-xl bg-[#53d22d]/10 border-2 border-[#53d22d]/30">
                    <p className="text-2xl text-gray-200 text-center">
                        🎯 <span className="text-[#53d22d] font-bold">Mission Goal:</span> Make your programs
                        <span className="text-cyan-400"> interactive</span> and
                        <span className="text-cyan-400"> intelligent</span>!
                    </p>
                </div>

                <div className="mt-8 text-center">
                    <div className="inline-block px-6 py-3 rounded-lg bg-cyan-500/20 border-2 border-cyan-500/50">
                        <p className="text-cyan-400 font-mono font-bold">MISSION DURATION: ~60 MINUTES</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Slide 03: The Problem - Static Programs
export function Lesson04Slide03() {
    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-cyan-950 via-blue-950 to-slate-950 text-white p-12 relative overflow-hidden">
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'linear-gradient(#53d22d 1px, transparent 1px), linear-gradient(90deg, #53d22d 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }} />
            </div>

            <div className="relative z-10 max-w-5xl mx-auto">
                <h1 className="text-5xl font-bold text-red-400 mb-8">THE PROBLEM: STATIC PROGRAMS</h1>

                <div className="mb-12 p-8 rounded-xl bg-red-500/10 border-2 border-red-500/30">
                    <p className="text-3xl text-gray-200 leading-relaxed">
                        Right now, your programs are <span className="text-red-400 font-bold">one-way streets</span>.
                        They output data but can't <span className="text-yellow-400">receive</span> it!
                    </p>
                </div>

                <div className="mb-12 p-6 rounded-xl bg-slate-800/50 border border-red-500/30">
                    <pre className="text-xl font-mono text-gray-300">
                        <code className="text-cyan-400">name = "Agent"</code>
                        <code className="block mt-2">print(f"Welcome, {'{name}'}")</code>
                        <code className="block mt-4 text-gray-500"># Output: Welcome, Agent</code>
                        <code className="block mt-4 text-red-400"># Problem: Name is HARDCODED!</code>
                        <code className="block text-red-400"># Can't change without editing code!</code>
                    </pre>
                </div>

                <div className="grid grid-cols-2 gap-6">
                    <div className="p-6 rounded-xl bg-red-500/10 border border-red-500/30">
                        <h3 className="text-red-400 font-bold text-xl mb-3">❌ LIMITATIONS:</h3>
                        <ul className="text-gray-300 space-y-2">
                            <li>• No user interaction</li>
                            <li>• Fixed, unchanging data</li>
                            <li>• Same output every time</li>
                            <li>• Not responsive to users</li>
                        </ul>
                    </div>

                    <div className="p-6 rounded-xl bg-yellow-500/10 border border-yellow-500/30">
                        <h3 className="text-yellow-400 font-bold text-xl mb-3">⚠️ REAL WORLD:</h3>
                        <p className="text-gray-300">
                            Imagine a security system that can't ask for your password,
                            or a calculator that can't accept numbers!
                        </p>
                    </div>
                </div>

                <div className="mt-12 text-center">
                    <div className="inline-block px-8 py-4 rounded-lg bg-cyan-500/20 border-2 border-cyan-500/50">
                        <p className="text-2xl text-cyan-400 font-bold">
                            We need a way to make programs <span className="text-[#53d22d]">INTERACTIVE</span>!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
