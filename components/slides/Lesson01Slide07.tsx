/**
 * Lesson 01 - Slide 07: The Analogy - Robot Mouth
 * Visual analogy comparing print() to a robot's mouth
 */

import React from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export function Lesson01Slide07() {
    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-purple-950/30 via-gray-900 to-black text-white flex flex-col items-center justify-center p-12">
            <h1 className="text-4xl font-bold mb-4 text-purple-400">
                What is <code className="text-green-400">print()</code>?
            </h1>

            <div className="text-2xl text-gray-400 mb-12 text-center max-w-3xl">
                <span className="text-purple-400 font-bold">Analogy:</span> <code className="text-green-400">print()</code> is the <span className="text-cyan-400 font-bold">mouth</span> of the computer.
            </div>

            {/* Robot Head SVG */}
            <div className="mb-12">
                <svg viewBox="0 0 400 400" className="w-96 h-96">
                    {/* Robot head */}
                    <rect x="100" y="100" width="200" height="180" rx="20" fill="rgba(100, 100, 120, 0.3)" stroke="cyan" strokeWidth="3" />

                    {/* Eyes */}
                    <circle cx="150" cy="150" r="20" fill="rgba(6, 182, 212, 0.5)" className="animate-pulse" />
                    <circle cx="250" cy="150" r="20" fill="rgba(6, 182, 212, 0.5)" className="animate-pulse" />

                    {/* Mouth opening with sound waves */}
                    <g>
                        <path d="M 140 220 Q 200 260 260 220" stroke="lime" strokeWidth="4" fill="none" />
                        <circle cx="200" cy="240" r="3" fill="lime" className="animate-ping" />

                        {/* Sound waves */}
                        <path d="M 280 210 Q 290 210 295 215" stroke="lime" strokeWidth="2" fill="none" opacity="0.6" className="animate-pulse" />
                        <path d="M 285 200 Q 300 200 310 210" stroke="lime" strokeWidth="2" fill="none" opacity="0.4" />
                        <path d="M 290 190 Q 310 190 325 205" stroke="lime" strokeWidth="2" fill="none" opacity="0.2" />
                    </g>

                    {/* Binary code coming out */}
                    <text x="320" y="220" fill="lime" fontSize="14" opacity="0.8">01001000</text>
                    <text x="320" y="240" fill="lime" fontSize="14" opacity="0.6">01101001</text>
                </svg>
            </div>

            {/* Explanation */}
            <div className="max-w-3xl space-y-6 text-lg">
                <p className="text-gray-300 text-center">
                    Without it, the computer <span className="text-cyan-400 font-bold">thinks</span> but cannot <span className="text-cyan-400 font-bold">speak</span>.
                </p>

                <div className="grid grid-cols-2 gap-8 mt-8">
                    {/* Without print() */}
                    <div className="border-2 border-red-500/40 rounded-lg p-6 bg-red-950/10">
                        <div className="flex items-center gap-3 mb-4">
                            <VolumeX className="w-8 h-8 text-red-400" />
                            <h3 className="text-xl font-bold text-red-400">Without print()</h3>
                        </div>
                        <ul className="space-y-2 text-gray-400">
                            <li>• The code runs in silence</li>
                            <li>• You never see the output</li>
                            <li>• It's like shouting in a vacuum</li>
                        </ul>
                    </div>

                    {/* With print() */}
                    <div className="border-2 border-green-500/40 rounded-lg p-6 bg-green-950/10">
                        <div className="flex items-center gap-3 mb-4">
                            <Volume2 className="w-8 h-8 text-green-400" />
                            <h3 className="text-xl font-bold text-green-400">With print()</h3>
                        </div>
                        <ul className="space-y-2 text-gray-400">
                            <li>• Results appear on screen</li>
                            <li>• You can see what happens</li>
                            <li>• Code becomes <span className="text-green-400 font-bold">visible</span></li>
                        </ul>
                    </div>
                </div>

                <p className="text-2xl text-center text-cyan-400 font-bold mt-8">
                    <code>print()</code> makes the invisible <span className="text-green-400">visible</span>.
                </p>
            </div>
        </div>
    );
}
