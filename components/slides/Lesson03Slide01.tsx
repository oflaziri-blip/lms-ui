/**
 * Lesson 03 - Slide 01: Title Card
 * Data Streams & String Indexing
 */

import React from 'react';
import { Database, Code, Zap } from 'lucide-react';

export function Lesson03Slide01() {
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
                    <Database className="w-16 h-16 text-cyan-400 animate-pulse" />
                    <Code className="w-16 h-16 text-[#53d22d]" />
                    <Zap className="w-16 h-16 text-cyan-400 animate-pulse" />
                </div>

                {/* Title */}
                <div className="space-y-4">
                    <h1 className="text-7xl font-bold bg-gradient-to-r from-cyan-400 via-[#53d22d] to-cyan-400 bg-clip-text text-transparent animate-pulse">
                        OPERATION CHRONOS
                    </h1>
                    <h2 className="text-5xl font-light text-cyan-300">
                        DATA STREAMS
                    </h2>
                    <h3 className="text-3xl font-light text-gray-400">
                        String Indexing & Manipulation
                    </h3>
                </div>

                {/* Mission Details */}
                <div className="mt-12 space-y-3 text-gray-300 font-mono">
                    <div className="flex items-center justify-center gap-4">
                        <span className="text-cyan-400">▸</span>
                        <span><span className="text-gray-500">MISSION CODE:</span> L03-STRINGS</span>
                    </div>
                    <div className="flex items-center justify-center gap-4">
                        <span className="text-cyan-400">▸</span>
                        <span><span className="text-gray-500">CLEARANCE LEVEL:</span> Cadet</span>
                    </div>
                    <div className="flex items-center justify-center gap-4">
                        <span className="text-cyan-400">▸</span>
                        <span><span className="text-gray-500">OBJECTIVE:</span> Data Stream Manipulation</span>
                    </div>
                </div>

                {/* Glowing Border Effect */}
                <div className="mt-16 inline-block">
                    <div className="px-8 py-3 border-2 border-cyan-500/50 rounded-lg bg-cyan-500/10 backdrop-blur">
                        <span className="text-cyan-400 font-mono text-sm tracking-wider">
                            INITIALIZING CHARACTER STREAM ANALYSIS...
                        </span>
                    </div>
                </div>
            </div>

            {/* Bottom Status Bar */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/30 backdrop-blur-sm border-t border-cyan-500/30">
                <div className="flex items-center justify-between text-xs font-mono text-gray-400">
                    <div>CHRONOS DATA STREAM INTERFACE v3.0</div>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-[#53d22d] animate-pulse" />
                        <span>SYSTEM ONLINE</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
