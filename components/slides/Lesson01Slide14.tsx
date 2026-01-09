/**
 * Lesson 01 - Slide 14: Knowledge Check Quiz
 * Interactive-style multiple choice question
 */

import React from 'react';
import { HelpCircle } from 'lucide-react';

export function Lesson01Slide14() {
    const options = [
        { letter: 'A', code: 'print(Hi)', correct: false },
        { letter: 'B', code: 'print "Hi"', correct: false },
        { letter: 'C', code: 'print("Hi")', correct: true },
        { letter: 'D', code: 'Print("Hi")', correct: false }
    ];

    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-indigo-950/30 via-gray-900 to-black text-white flex flex-col items-center justify-center p-12">
            <div className="flex items-center gap-4 mb-8">
                <HelpCircle className="w-12 h-12 text-indigo-400" />
                <h1 className="text-5xl font-bold text-indigo-400">CLEARANCE QUIZ</h1>
            </div>

            <div className="max-w-4xl w-full space-y-8">
                {/* Question */}
                <div className="bg-indigo-950/20 border-2 border-indigo-500/40 rounded-lg p-8 backdrop-blur">
                    <h2 className="text-3xl font-bold text-center mb-2">Which code is <span className="text-emerald-400">valid</span>?</h2>
                    <p className="text-center text-gray-400">Choose the answer with correct Python syntax</p>
                </div>

                {/* Options Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {options.map((option) => (
                        <div
                            key={option.letter}
                            className={`
                group cursor-pointer
                border-2 rounded-lg p-6 transition-all
                ${option.correct
                                    ? 'border-emerald-500/40 bg-emerald-950/10 hover:bg-emerald-950/20 hover:border-emerald-500/60'
                                    : 'border-gray-600/40 bg-gray-900/20 hover:bg-red-950/20 hover:border-red-500/40'
                                }
              `}
                        >
                            <div className="flex items-center gap-4">
                                <div className={`
                  w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl
                  ${option.correct
                                        ? 'bg-emerald-500/20 text-emerald-400 border-2 border-emerald-500/50'
                                        : 'bg-gray-700/30 text-gray-400 border-2 border-gray-600/50'
                                    }
                `}>
                                    {option.letter}
                                </div>
                                <code className="text-2xl font-mono flex-1">
                                    {option.code}
                                </code>
                            </div>

                            {/* Hint on hover */}
                            <div className="mt-3 text-sm text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity">
                                {option.correct ? '✓ All syntax rules followed!' : '✗ Something is missing or wrong...'}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Hint */}
                <div className="text-center">
                    <p className="text-xl text-gray-400">Think carefully...</p>
                    <p className="text-sm text-gray-500 mt-2">(Correct Answer: C)</p>
                </div>

                {/* Reminder box */}
                <div className="bg-cyan-950/10 border border-cyan-500/30 rounded-lg p-6">
                    <h3 className="text-lg font-bold text-cyan-400 mb-2">Remember:</h3>
                    <ul className="space-y-1 text-gray-300">
                        <li>• <code className="text-green-400">print</code> must be lowercase</li>
                        <li>• Needs parentheses: <code className="text-yellow-400">()</code></li>
                        <li>• Text needs quotes: <code className="text-cyan-400">""</code></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
