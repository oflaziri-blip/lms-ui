/**
 * Lesson 01 - Slide 20: AI Online Success
 * Shows the successful execution result
 */

import React from 'react';
import { Terminal, CodeLine } from './Terminal';
import { Cpu, CheckCircle } from 'lucide-react';

export function Lesson01Slide20() {
    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-emerald-950/30 via-gray-900 to-black text-white flex flex-col items-center justify-center p-12 relative overflow-hidden">
            {/* Success particles */}
            <div className="absolute inset-0">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 bg-emerald-400 rounded-full animate-ping"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 2}s`
                        }}
                    />
                ))}
            </div>

            <div className="flex items-center gap-4 mb-8 relative z-10">
                <CheckCircle className="w-16 h-16 text-emerald-500" />
                <h1 className="text-5xl font-bold text-emerald-400">AI ONLINE</h1>
            </div>

            <div className="max-w-3xl w-full space-y-8 relative z-10">
                {/* Terminal Output */}
                <Terminal variant="success" title="Python Output">
                    <CodeLine prompt=">>>">print("Wake up")</CodeLine>
                    <CodeLine output>Wake up</CodeLine>
                </Terminal>

                {/* Success message */}
                <div className="bg-emerald-950/20 border-2 border-emerald-500/50 rounded-lg p-8 backdrop-blur">
                    <div className="flex items-center gap-4 mb-4">
                        <Cpu className="w-12 h-12 text-emerald-400 animate-pulse" />
                        <h2 className="text-2xl font-bold text-emerald-400">Success!</h2>
                    </div>
                    <p className="text-xl text-gray-300 mb-4">Py responds:</p>
                    <blockquote className="border-l-4 border-emerald-500 pl-4 italic text-lg text-emerald-300">
                        "Systems online. Good morning, Cadet. What are your orders?"
                    </blockquote>
                </div>

                {/* Celebration */}
                <div className="text-center">
                    <div className="inline-block bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border-2 border-emerald-500/50 rounded-lg px-12 py-6">
                        <p className="text-4xl font-bold text-emerald-400">
                            You did it! 🎉
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
