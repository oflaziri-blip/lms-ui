/**
 * Lesson 01 - Slide 01: Title Card
 * Operation Chronos: System Boot
 */

import React from 'react';
import { Terminal, Zap, Code2 } from 'lucide-react';

export function Lesson01Slide01() {
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
                    <Zap className="w-16 h-16 text-cyan-400 animate-pulse" />
                    <Terminal className="w-16 h-16 text-blue-400" />
                    <Code2 className="w-16 h-16 text-cyan-400 animate-pulse" />
                </div>

                {/* Title */}
                <div className="space-y-4">
                    <h1 className="text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent animate-pulse">
                        OPERATION CHRONOS
                    </h1>
                    <h2 className="text-5xl font-light text-blue-300">
                        SYSTEM BOOT
                    </h2>
                </div>

                {/* Mission Details */}
                <div className="mt-12 space-y-3 text-gray-300 font-mono">
                    <div className="flex items-center justify-center gap-4">
                        <span className="text-cyan-400">▸</span>
                        <span><span className="text-gray-500">MISSION CODE:</span> L01-PRINT</span>
                    </div>
                    <div className="flex items-center justify-center gap-4">
                        <span className="text-cyan-400">▸</span>
                        <span><span className="text-gray-500">CLEARANCE LEVEL:</span> Cadet</span>
                    </div>
                    <div className="flex items-center justify-center gap-4">
                        <span className="text-cyan-400">▸</span>
                        <span><span className="text-gray-500">OBJECTIVE:</span> Manual AI Override</span>
                    </div>
                </div>

                {/* Glowing Border Effect */}
                <div className="mt-16 inline-block">
                    <div className="px-8 py-3 border-2 border-cyan-500/50 rounded-lg bg-cyan-500/10 backdrop-blur">
                        <span className="text-cyan-400 font-mono text-sm tracking-wider">
                            INITIALIZING TRAINING PROTOCOL...
                        </span>
                    </div>
                </div>
            </div>

            {/* Bottom Status Bar */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/30 backdrop-blur-sm border-t border-cyan-500/30">
                <div className="flex items-center justify-between text-xs font-mono text-gray-400">
                    <div>CHRONOS COMMAND INTERFACE v3.14</div>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        <span>SYSTEM ONLINE</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
