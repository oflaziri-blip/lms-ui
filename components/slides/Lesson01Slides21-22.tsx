/**
 * Lesson 01 - Slide 21-22: Multiple Commands & Challenge
 */

import React from 'react';
import { Terminal, CodeLine } from './Terminal';
import { Layers, Zap } from 'lucide-react';

export function Lesson01Slide21() {
    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-blue-950/30 via-gray-900 to-black text-white flex flex-col items-center justify-center p-12">
            <div className="flex items-center gap-4 mb-8">
                <Layers className="w-12 h-12 text-blue-400" />
                <h1 className="text-4xl font-bold text-blue-400">Sending a Second Signal</h1>
            </div>

            <div className="max-w-3xl w-full space-y-8">
                <p className="text-xl text-gray-300 text-center">
                    You can execute <span className="text-cyan-400 font-bold">multiple</span> <code className="text-green-400">print()</code> statements.
                </p>

                {/* Code example */}
                <div className="bg-black/50 border-2 border-blue-500/30 rounded-lg p-6">
                    <div className="font-mono text-xl space-y-2">
                        <div className="text-green-400">print("Wake up")</div>
                        <div className="text-green-400">print("Status Report")</div>
                    </div>
                </div>

                {/* Output */}
                <Terminal variant="success" title="Output">
                    <CodeLine output>Wake up</CodeLine>
                    <CodeLine output>Status Report</CodeLine>
                </Terminal>

                {/* Explanation */}
                <div className="bg-blue-950/20 border border-blue-500/30 rounded-lg p-6">
                    <p className="text-lg text-gray-300">
                        Each <code className="text-green-400">print()</code> creates a <span className="text-cyan-400 font-bold">new line</span> of text.
                    </p>
                </div>

                {/* Visual representation */}
                <div className="flex items-center justify-center gap-4">
                    <div className="text-center">
                        <div className="bg-green-500/20 border border-green-500/50 rounded px-4 py-2 mb-2">
                            <code className="text-green-400">print()</code>
                        </div>
                        <div className="text-sm text-gray-400">Line 1</div>
                    </div>
                    <span className="text-2xl text-gray-600">→</span>
                    <div className="text-center">
                        <div className="bg-green-500/20 border border-green-500/50 rounded px-4 py-2 mb-2">
                            <code className="text-green-400">print()</code>
                        </div>
                        <div className="text-sm text-gray-400">Line 2</div>
                    </div>
                    <span className="text-2xl text-gray-600">→</span>
                    <div className="text-center">
                        <div className="bg-green-500/20 border border-green-500/50 rounded px-4 py-2 mb-2">
                            <code className="text-green-400">print()</code>
                        </div>
                        <div className="text-sm text-gray-400">Line 3...</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export function Lesson01Slide22() {
    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-yellow-950/20 via-gray-900 to-black text-white flex flex-col items-center justify-center p-12">
            <div className="flex items-center gap-4 mb-8">
                <Zap className="w-12 h-12 text-yellow-400 animate-pulse" />
                <h1 className="text-4xl font-bold text-yellow-400">YOUR TURN</h1>
            </div>

            <div className="max-w-3xl w-full space-y-8">
                {/* Challenge */}
                <div className="bg-yellow-950/20 border-2 border-yellow-500/50 rounded-lg p-8">
                    <h2 className="text-2xl font-bold text-yellow-400 mb-4">Challenge:</h2>
                    <p className="text-xl text-gray-300">
                        Write a command to shout <code className="text-cyan-400 font-bold">LAUNCH!</code>
                    </p>
                </div>

                {/* Template */}
                <div className="bg-black/50 border-2 border-gray-700 rounded-lg p-6">
                    <h3 className="text-lg text-gray-400 mb-3">Template:</h3>
                    <div className="font-mono text-2xl">
                        <span className="text-green-400">print(</span>
                        <span className="text-yellow-400 bg-yellow-500/20 px-2">______</span>
                        <span className="text-green-400">)</span>
                    </div>
                </div>

                {/* Hint */}
                <div className="bg-cyan-950/10 border border-cyan-500/30 rounded-lg p-6">
                    <h3 className="text-lg text-cyan-400 mb-2">Hint:</h3>
                    <ul className="space-y-2 text-gray-300">
                        <li>• Remember to use quotes for text</li>
                        <li>• Make sure parentheses are closed</li>
                        <li>• Type exactly what you want to see</li>
                    </ul>
                </div>

                {/* Timer */}
                <div className="text-center">
                    <p className="text-xl text-gray-400">Take 30 seconds. Try it yourself!</p>
                    <p className="text-sm text-gray-500 mt-4">
                        (Answer: <code className="text-green-400">print("LAUNCH!")</code>)
                    </p>
                </div>
            </div>
        </div>
    );
}
