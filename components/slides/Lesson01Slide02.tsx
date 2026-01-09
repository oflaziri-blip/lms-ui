/**
 * Lesson 01 - Slide 02: Welcome, Cadet (The Hook)
 * Sets the scene with cockpit visual
 */

import React from 'react';
import { Rocket, Target } from 'lucide-react';

export function Lesson01Slide02() {
    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-slate-900 via-blue-950 to-black text-white flex flex-col items-center justify-center p-12 relative overflow-hidden">
            {/* Stars background */}
            <div className="absolute inset-0">
                {[...Array(50)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-0.5 h-0.5 bg-white rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            opacity: Math.random() * 0.8 + 0.2,
                            animation: `twinkle ${Math.random() * 3 + 2}s infinite`
                        }}
                    />
                ))}
            </div>

            <div className="relative z-10 text-center max-w-4xl space-y-8">
                {/* Icon */}
                <div className="flex justify-center mb-6">
                    <Rocket className="w-20 h-20 text-cyan-400 animate-pulse" />
                </div>

                {/* Title */}
                <h1 className="text-5xl font-bold text-cyan-400 mb-6">
                    Welcome, Cadet
                </h1>

                {/* Content */}
                <div className="space-y-6 text-xl text-gray-300 leading-relaxed">
                    <p>
                        You are sitting in the cockpit of the <span className="text-cyan-400 font-bold">Chronos One</span> — humanity's first time-traveling spacecraft.
                    </p>

                    {/* Simple cockpit visualization */}
                    <div className="my-8 border-2 border-cyan-500/30 rounded-lg p-8 bg-blue-950/20 backdrop-blur">
                        <svg viewBox="0 0 600 300" className="w-full">
                            {/* Windshield */}
                            <path d="M 100 150 Q 300 50 500 150 L 500 250 L 100 250 Z" fill="rgba(59, 130, 246, 0.1)" stroke="cyan" strokeWidth="2" />

                            {/* Stars through windshield */}
                            <circle cx="200" cy="100" r="2" fill="white" />
                            <circle cx="350" cy="80" r="1.5" fill="white" />
                            <circle cx="450" cy="120" r="1" fill="white" />
                            <circle cx="280" cy="130" r="2" fill="white" />

                            {/* Control panels */}
                            <rect x="50" y="260" width="500" height="30" fill="rgba(0,0,0,0.5)" stroke="cyan" strokeWidth="1" />

                            {/* Buttons */}
                            {[0, 1, 2, 3, 4, 5].map((i) => (
                                <rect key={i} x={100 + i * 70} y="265" width="30" height="20" fill="rgba(6, 182, 212, 0.3)" stroke="cyan" strokeWidth="1" />
                            ))}
                        </svg>
                    </div>

                    <p className="text-2xl text-cyan-300">
                        The mission is simple: Travel to <span className="font-bold">Year 3042</span> to retrieve stolen technology.
                    </p>

                    <div className="mt-8 text-3xl text-red-400 font-bold animate-pulse">
                        But there's a <span className="text-red-500">problem</span>.
                    </div>
                </div>
            </div>

            <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 1; }
        }
      `}</style>
        </div>
    );
}
