/**
 * Lesson 01 - Slide 10: Quotes - String Protection
 * Visual showing letters protected inside quotes
 */

import React from 'react';

export function Lesson01Slide10() {
    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-yellow-950/20 via-gray-900 to-black text-white flex flex-col items-center justify-center p-12">
            <h1 className="text-4xl font-bold mb-4 text-yellow-400">
                Strings Need Protection
            </h1>

            <p className="text-xl text-gray-400 mb-12">Strings are fragile. They need <span className="text-yellow-400 font-bold">quotes</span> to survive.</p>

            {/* Visual representation */}
            <div className="mb-12">
                <svg viewBox="0 0 700 300" className="w-full max-w-4xl">
                    {/* Protected bubble with quotes */}
                    <ellipse cx="350" cy="120" rx="200" ry="70" fill="rgba(234, 179, 8, 0.1)" stroke="yellow" strokeWidth="3" strokeDasharray="10,5" className="animate-pulse" />

                    {/* Opening quote */}
                    <text x="150" y="100" fill="yellow" fontSize="60" fontWeight="bold">"</text>

                    {/* Letters inside bubble - SAFE */}
                    <text x="220" y="130" fill="lime" fontSize="40" fontWeight="bold">H E L L O</text>

                    {/* Closing quote */}
                    <text x="520" y="100" fill="yellow" fontSize="60" fontWeight="bold">"</text>

                    {/* Label */}
                    <text x="300" y="180" fill="lime" fontSize="16">✓ PROTECTED</text>

                    {/* Letters outside bubble - NOT SAFE */}
                    <g opacity="0.5">
                        <text x="100" y="250" fill="red" fontSize="30" transform="rotate(-15 100 250)">H</text>
                        <text x="200" y="270" fill="red" fontSize="30" transform="rotate(10 200 270)">e</text>
                        <text x="300" y="260" fill="red" fontSize="30" transform="rotate(-20 300 260)">l</text>
                        <text x="400" y="275" fill="red" fontSize="30">l</text>
                        <text x="500" y="265" fill="red" fontSize="30" transform="rotate(15 500 265)">o</text>
                    </g>

                    {/* Scattered label */}
                    <text x="270" y="295" fill="red" fontSize="16">✗ UNPROTECTED - SCATTERED</text>
                </svg>
            </div>

            {/* Explanation */}
            <div className="max-w-3xl space-y-8">
                <div className="bg-yellow-950/20 border-2 border-yellow-500/40 rounded-lg p-6 backdrop-blur">
                    <h3 className="text-2xl font-bold text-yellow-400 mb-4">Why?</h3>
                    <p className="text-xl text-gray-300">
                        Without quotes, Python thinks <code className="text-red-400">Hello</code> is a <span className="text-red-400 font-bold">variable</span>, not text.
                    </p>
                </div>

                {/* Code examples */}
                <div className="grid grid-cols-2 gap-6">
                    <div className="bg-green-950/20 border-2 border-green-500/40 rounded-lg p-6">
                        <div className="flex items-center gap-2 mb-3">
                            <span className="text-2xl">✅</span>
                            <span className="text-green-400 font-bold">Text is safe</span>
                        </div>
                        <code className="text-xl text-green-400">print("Hello")</code>
                        <p className="text-sm text-gray-400 mt-2">Quotes protect the string</p>
                    </div>

                    <div className="bg-red-950/20 border-2 border-red-500/40 rounded-lg p-6">
                        <div className="flex items-center gap-2 mb-3">
                            <span className="text-2xl">❌</span>
                            <span className="text-red-400 font-bold">ERROR!</span>
                        </div>
                        <code className="text-xl text-red-400">print(Hello)</code>
                        <p className="text-sm text-gray-400 mt-2">Who is Hello?</p>
                    </div>
                </div>

                <div className="text-center text-2xl text-yellow-400 font-bold">
                    Rule: Text = <span className="text-green-400">Quotes Required</span>
                </div>
            </div>
        </div>
    );
}
