/**
 * Lesson 01 - Slides 27-30: Tips, Secrets, Boss Preview, Victory
 */

import React from 'react';
import { Target, Lightbulb, Skull, Trophy } from 'lucide-react';

export function Lesson01Slide27() {
    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-indigo-950/30 via-gray-900 to-black text-white flex flex-col items-center justify-center p-12">
            <div className="flex items-center gap-4 mb-8">
                <Target className="w-12 h-12 text-indigo-400" />
                <h1 className="text-4xl font-bold text-indigo-400">COMBAT STRATEGY</h1>
            </div>

            <div className="max-w-3xl w-full space-y-6">
                <p className="text-2xl text-gray-300 text-center mb-8">Before you start:</p>

                <div className="space-y-4">
                    {[
                        { num: 1, text: 'Read carefully', detail: 'Every word matters' },
                        { num: 2, text: 'Check quotes', detail: 'Open AND close' },
                        { num: 3, text: 'Check parentheses', detail: 'Open AND close' },
                        { num: 4, text: 'Test your code', detail: 'Run it to see output' },
                        { num: 5, text: "Don't rush", detail: 'Syntax errors are costly' }
                    ].map((tip) => (
                        <div key={tip.num} className="bg-indigo-950/20 border border-indigo-500/30 rounded-lg p-4 flex items-start gap-4">
                            <div className="w-10 h-10 rounded-full bg-indigo-500/20 border-2 border-indigo-500/50 flex items-center justify-center flex-shrink-0">
                                <span className="text-xl font-bold text-indigo-400">{tip.num}</span>
                            </div>
                            <div className="flex-1">
                                <p className="text-xl font-bold text-white mb-1">{tip.text}</p>
                                <p className="text-gray-400">{tip.detail}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="bg-yellow-950/20 border-2 border-yellow-500/40 rounded-lg p-6 mt-8">
                    <p className="text-lg text-yellow-400 font-bold">
                        ⚠️ Reminder: In Python, <code className="text-green-400">print</code> must be <span className="text-red-400">lowercase</span>
                    </p>
                </div>
            </div>
        </div>
    );
}

export function Lesson01Slide28() {
    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-yellow-950/20 via-gray-900 to-black text-white flex flex-col items-center justify-center p-12">
            <div className="flex items-center gap-4 mb-8">
                <Lightbulb className="w-12 h-12 text-yellow-400 animate-pulse" />
                <h1 className="text-4xl font-bold text-yellow-400">DEBUGGING SECRET</h1>
            </div>

            <div className="max-w-3xl w-full space-y-8">
                <div className="bg-yellow-950/20 border-2 border-yellow-500/50 rounded-lg p-8">
                    <h2 className="text-2xl font-bold text-yellow-400 mb-6">Pro Tip:</h2>
                    <p className="text-xl text-gray-300 mb-6">
                        When debugging, check these <span className="text-yellow-400 font-bold">3 things</span> first:
                    </p>

                    <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <div className="text-3xl">1️⃣</div>
                            <div className="flex-1">
                                <p className="text-xl font-bold text-cyan-400 mb-2">Quotes</p>
                                <p className="text-gray-300">Are they there? <code className="text-yellow-400">""</code></p>
                                <div className="mt-2 bg-black/50 rounded p-2">
                                    <code className="text-red-400">print(Hello)</code> ❌
                                    <br />
                                    <code className="text-green-400">print("Hello")</code> ✅
                                </div>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="text-3xl">2️⃣</div>
                            <div className="flex-1">
                                <p className="text-xl font-bold text-blue-400 mb-2">Parentheses</p>
                                <p className="text-gray-300">Are they closed? <code className="text-yellow-400">()</code></p>
                                <div className="mt-2 bg-black/50 rounded p-2">
                                    <code className="text-red-400">print("Hi"</code> ❌
                                    <br />
                                    <code className="text-green-400">print("Hi")</code> ✅
                                </div>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="text-3xl">3️⃣</div>
                            <div className="flex-1">
                                <p className="text-xl font-bold text-emerald-400 mb-2">Spelling</p>
                                <p className="text-gray-300">Is it <code className="text-green-400">print</code> not <code className="text-red-400">Print</code> or <code className="text-red-400">pint</code>?</p>
                                <div className="mt-2 bg-black/50 rounded p-2">
                                    <code className="text-red-400">Print("Hi")</code> ❌
                                    <br />
                                    <code className="text-green-400">print("Hi")</code> ✅
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-center text-xl text-yellow-400">
                    90% of beginner errors are one of these three
                </div>
            </div>
        </div>
    );
}

export function Lesson01Slide29() {
    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-red-950/30 via-gray-900 to-black text-white flex flex-col items-center justify-center p-12 relative overflow-hidden">
            {/* Dramatic background */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-purple-500 to-red-500 animate-pulse" />
            </div>

            <div className="flex items-center gap-4 mb-8 relative z-10">
                <Skull className="w-16 h-16 text-red-500 animate-pulse" />
                <h1 className="text-5xl font-bold text-red-400">ARCHITECT CHALLENGE</h1>
            </div>

            <div className="max-w-3xl w-full space-y-8 relative z-10">
                <div className="bg-red-950/20 border-2 border-red-500/50 rounded-lg p-8 backdrop-blur">
                    <h2 className="text-3xl font-bold text-red-400 mb-4">Task #17: The Dialogue</h2>
                    <blockquote className="border-l-4 border-red-500 pl-4 text-xl text-gray-300 italic mb-6">
                        "Write a script where the computer asks a question (line 1) and answers it (line 2)."
                    </blockquote>

                    <div className="bg-black/50 border border-gray-700 rounded-lg p-6 mb-6">
                        <p className="text-lg text-yellow-400 mb-3">This tests:</p>
                        <ul className="space-y-2 text-gray-300">
                            <li>• Multiple <code className="text-green-400">print()</code> statements</li>
                            <li>• Creative thinking</li>
                            <li>• String composition</li>
                        </ul>
                    </div>

                    <div className="bg-emerald-950/20 border border-emerald-500/30 rounded p-4">
                        <p className="text-sm text-gray-400 mb-2">Example Output:</p>
                        <div className="font-mono text-lg text-emerald-300">
                            <div>What is your mission?</div>
                            <div>To save humanity</div>
                        </div>
                    </div>
                </div>

                <div className="text-center">
                    <p className="text-3xl font-bold text-red-400">
                        Can you do it? 💀
                    </p>
                </div>
            </div>
        </div>
    );
}

export function Lesson01Slide30() {
    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-emerald-500/20 via-cyan-900 to-blue-950 text-white flex flex-col items-center justify-center p-12 relative overflow-hidden">
            {/* Celebration particles */}
            <div className="absolute inset-0">
                {[...Array(50)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute text-4xl animate-bounce"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 2}s`,
                            animationDuration: `${2 + Math.random() * 2}s`
                        }}
                    >
                        {['🎉', '✨', '🚀', '⭐'][Math.floor(Math.random() * 4)]}
                    </div>
                ))}
            </div>

            <div className="relative z-10 text-center space-y-8 max-w-4xl">
                <Trophy className="w-24 h-24 text-yellow-400 mx-auto animate-pulse" />

                <h1 className="text-6xl font-bold bg-gradient-to-r from-yellow-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                    LESSON 01 CLEARED
                </h1>

                <p className="text-3xl text-emerald-400 font-bold">
                    Congratulations, Cadet!
                </p>

                {/* Skills mastered */}
                <div className="bg-black/30 border-2 border-emerald-500/50 rounded-lg p-8 backdrop-blur">
                    <h2 className="text-2xl font-bold text-emerald-400 mb-4">You've mastered:</h2>
                    <div className="grid grid-cols-2 gap-4 text-lg">
                        <div className="flex items-center gap-2">
                            <span className="text-green-400">✅</span>
                            <span><code className="text-cyan-400">print()</code> syntax</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-green-400">✅</span>
                            <span>String formatting</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-green-400">✅</span>
                            <span>Error detection</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-green-400">✅</span>
                            <span>Code writing</span>
                        </div>
                    </div>
                </div>

                {/* Rewards */}
                <div className="bg-gradient-to-r from-yellow-500/20 to-emerald-500/20 border-2 border-yellow-500/50 rounded-lg p-8">
                    <h2 className="text-2xl font-bold text-yellow-400 mb-4">Rewards Unlocked:</h2>
                    <div className="space-y-3 text-xl">
                        <div>🎖️ <span className="text-yellow-400 font-bold">120 XP</span></div>
                        <div>🔓 <span className="text-cyan-400">Lesson 02: Memory Containers (Variables)</span></div>
                        <div>🏅 Achievement: <span className="text-emerald-400 italic">"First Words"</span></div>
                    </div>
                </div>

                <div className="text-2xl text-gray-300">
                    <p>Next Mission: Learn to <span className="text-cyan-400 font-bold">store</span> data using variables.</p>
                    <p className="text-lg text-gray-400 mt-4">Stand by for deployment briefing...</p>
                </div>
            </div>
        </div>
    );
}
