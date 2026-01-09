/**
 * Lesson 01 - Slide 15: Sending the Wake-Up Signal
 * Introduction to building the command step by step
 */

import React from 'react';
import { Code2, Zap } from 'lucide-react';

export function Lesson01Slide15() {
    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-cyan-950/30 via-gray-900 to-black text-white flex flex-col items-center justify-center p-12">
            <div className="flex items-center gap-4 mb-8">
                <Zap className="w-12 h-12 text-cyan-400 animate-pulse" />
                <h1 className="text-4xl font-bold text-cyan-400">Sending the Wake-Up Signal</h1>
            </div>

            <div className="max-w-4xl w-full space-y-8">
                {/* Mission */}
                <div className="text-center space-y-4">
                    <p className="text-2xl text-gray-300">
                        <span className="text-cyan-400 font-bold">Mission:</span> Send a command to wake up Py, the dormant AI.
                    </p>
                    <p className="text-xl text-gray-400">
                        <span className="text-yellow-400 font-bold">Your tool:</span> The <code className="text-green-400">print()</code> function.
                    </p>
                    <p className="text-xl text-gray-400">
                        <span className="text-emerald-400 font-bold">The signal:</span> <code className="text-cyan-400">"Wake up"</code>
                    </p>
                </div>

                {/* Visual representation */}
                <div className="bg-black/50 border-2 border-cyan-500/30 rounded-lg p-8">
                    <div className="flex items-center justify-center gap-8">
                        <div className="text-center">
                            <Code2 className="w-16 h-16 text-gray-500 mx-auto mb-2" />
                            <p className="text-gray-500">Dormant AI</p>
                        </div>

                        <div className="flex-1 flex items-center justify-center">
                            <div className="relative">
                                {[...Array(3)].map((_, i) => (
                                    <div
                                        key={i}
                                        className="absolute w-2 h-2 bg-cyan-400 rounded-full animate-ping"
                                        style={{
                                            left: `${i * 30}px`,
                                            animationDelay: `${i * 0.3}s`
                                        }}
                                    />
                                ))}
                                <div className="text-cyan-400 font-mono text-lg ml-20">
                                    print("Wake up")
                                </div>
                            </div>
                        </div>

                        <div className="text-center">
                            <Code2 className="w-16 h-16 text-cyan-400 mx-auto mb-2 animate-pulse" />
                            <p className="text-cyan-400">AI Online!</p>
                        </div>
                    </div>
                </div>

                {/* Call to action */}
                <div className="text-center">
                    <div className="inline-block bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border-2 border-cyan-500/50 rounded-lg px-8 py-6">
                        <p className="text-2xl font-bold text-cyan-400 mb-2">
                            Let's build this command
                        </p>
                        <p className="text-lg text-gray-400">
                            one step at a time →
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
