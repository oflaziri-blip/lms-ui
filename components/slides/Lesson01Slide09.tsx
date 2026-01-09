/**
 * Lesson 01 - Slide 09: Parentheses - The Airlock
 * Visual metaphor for parentheses container
 */

import React from 'react';

export function Lesson01Slide09() {
    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-blue-950/30 via-gray-900 to-black text-white flex flex-col items-center justify-center p-12">
            <h1 className="text-5xl font-bold mb-4 text-cyan-400">
                <code className="text-yellow-400">()</code> - The Airlock
            </h1>

            <p className="text-xl text-gray-400 mb-12">Parentheses are the container that holds your data safely</p>

            {/* Airlock SVG Visualization */}
            <div className="mb-12">
                <svg viewBox="0 0 600 300" className="w-full max-w-3xl">
                    {/* Left wall */}
                    <rect x="50" y="100" width="30" height="100" fill="rgba(100, 100, 120, 0.5)" stroke="cyan" strokeWidth="2" />

                    {/* Left door (opening parenthesis) */}
                    <path d="M 80 100 Q 100 100 120 150 Q 100 200 80 200" fill="none" stroke="cyan" strokeWidth="4" />
                    <text x="90" y="120" fill="cyan" fontSize="40" fontWeight="bold">(</text>

                    {/* Airlock chamber */}
                    <rect x="120" y="100" width="360" height="100" fill="rgba(6, 182, 212, 0.1)" stroke="cyan" strokeWidth="2" strokeDasharray="5,5" />

                    {/* Data particles flowing through */}
                    {[0, 1, 2, 3, 4].map((i) => (
                        <g key={i}>
                            <circle
                                cx={180 + i * 60}
                                cy={150}
                                r="8"
                                fill="lime"
                                opacity="0.8"
                                className="animate-pulse"
                                style={{ animationDelay: `${i * 0.2}s` }}
                            />
                            <text x={175 + i * 60} y={155} fill="white" fontSize="10">01</text>
                        </g>
                    ))}

                    {/* Right door (closing parenthesis) */}
                    <path d="M 480 100 Q 460 100 440 150 Q 460 200 480 200" fill="none" stroke="cyan" strokeWidth="4" />
                    <text x="470" y="120" fill="cyan" fontSize="40" fontWeight="bold">)</text>

                    {/* Right wall */}
                    <rect x="480" y="100" width="30" height="100" fill="rgba(100, 100, 120, 0.5)" stroke="cyan" strokeWidth="2" />

                    {/* Labels */}
                    <text x="105" y="240" fill="cyan" fontSize="16">OPEN</text>
                    <text x="300" y="240" fill="lime" fontSize="14">DATA SECURED</text>
                    <text x="455" y="240" fill="cyan" fontSize="16">CLOSE</text>
                </svg>
            </div>

            {/* Rules */}
            <div className="max-w-3xl w-full bg-black/50 border-2 border-cyan-500/30 rounded-lg p-8 backdrop-blur">
                <h3 className="text-2xl font-bold text-cyan-400 mb-6">Rules:</h3>
                <div className="space-y-4 text-lg">
                    <div className="flex items-start gap-3">
                        <span className="text-green-400 font-bold text-xl">1.</span>
                        <p><span className="font-bold">Always open:</span> <code className="text-yellow-400 text-xl">(</code></p>
                    </div>
                    <div className="flex items-start gap-3">
                        <span className="text-green-400 font-bold text-xl">2.</span>
                        <p><span className="font-bold">Always close:</span> <code className="text-yellow-400 text-xl">)</code></p>
                    </div>
                    <div className="flex items-start gap-3">
                        <span className="text-red-400 font-bold text-xl">3.</span>
                        <p><span className="font-bold text-red-400">Never forget</span> or data leaks into space!</p>
                    </div>
                </div>
            </div>

            {/* Examples */}
            <div className="mt-8 grid grid-cols-2 gap-6 max-w-3xl w-full">
                <div className="bg-green-950/20 border-2 border-green-500/40 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                        <span className="text-2xl">✅</span>
                        <span className="text-green-400 font-bold">Airlock Sealed</span>
                    </div>
                    <code className="text-lg text-green-400">print("Safe")</code>
                </div>

                <div className="bg-red-950/20 border-2 border-red-500/40 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                        <span className="text-2xl">❌</span>
                        <span className="text-red-400 font-bold">DANGER!</span>
                    </div>
                    <code className="text-lg text-red-400">print("Danger"</code>
                    <p className="text-sm text-gray-400 mt-2">Missing closing )</p>
                </div>
            </div>
        </div>
    );
}
