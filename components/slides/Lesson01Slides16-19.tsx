/**
 * Lesson 01 - Slide 16-19: Step-by-step code building
 * Shows progressive construction of print("Wake up")
 */

import React from 'react';
import { Terminal } from './Terminal';

export function Lesson01Slide16() {
    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-gray-950 via-slate-900 to-black text-white flex flex-col items-center justify-center p-12">
            <h1 className="text-4xl font-bold mb-4 text-cyan-400">
                Micro-Step 1: The Command
            </h1>
            <p className="text-xl text-gray-400 mb-12">Type: <code className="text-green-400">print</code></p>

            <Terminal title="Terminal">
                <div className="flex items-center gap-2">
                    <span className="text-green-400 text-3xl font-bold">print</span>
                    <span className="text-cyan-400 text-2xl animate-pulse">█</span>
                </div>
            </Terminal>

            <div className="mt-12 max-w-2xl text-center space-y-4">
                <p className="text-xl text-gray-300">
                    This is the <span className="text-cyan-400 font-bold">verb</span> — the action word.
                </p>
                <p className="text-lg text-gray-400">
                    It tells Python: <span className="text-green-400 italic">"I want to display something."</span>
                </p>
                <p className="text-2xl text-yellow-400 font-bold mt-6">
                    But we're not done yet...
                </p>
            </div>
        </div>
    );
}

export function Lesson01Slide17() {
    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-gray-950 via-slate-900 to-black text-white flex flex-col items-center justify-center p-12">
            <h1 className="text-4xl font-bold mb-4 text-cyan-400">
                Micro-Step 2: Open Channel
            </h1>
            <p className="text-xl text-gray-400 mb-12">Type: <code className="text-green-400">print(</code></p>

            <Terminal title="Terminal">
                <div className="flex items-center gap-1">
                    <span className="text-green-400 text-3xl font-bold">print</span>
                    <span className="text-blue-400 text-3xl font-bold">(</span>
                    <span className="text-cyan-400 text-2xl animate-pulse">█</span>
                </div>
            </Terminal>

            <div className="mt-12 max-w-2xl text-center space-y-4">
                <p className="text-xl text-gray-300">
                    The <code className="text-blue-400 text-2xl">(</code> <span className="text-cyan-400 font-bold">opens the airlock</span>.
                </p>
                <p className="text-lg text-gray-400">
                    Now Python is listening: <span className="text-green-400 italic">"What do you want to display?"</span>
                </p>
                <p className="text-2xl text-yellow-400 font-bold mt-6">
                    Almost there...
                </p>
            </div>
        </div>
    );
}

export function Lesson01Slide18() {
    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-gray-950 via-slate-900 to-black text-white flex flex-col items-center justify-center p-12">
            <h1 className="text-4xl font-bold mb-4 text-cyan-400">
                Micro-Step 3: The Signal
            </h1>
            <p className="text-xl text-gray-400 mb-12">Type: <code className="text-green-400">print("Wake up"</code></p>

            <Terminal title="Terminal">
                <div className="flex items-center gap-1">
                    <span className="text-green-400 text-3xl font-bold">print(</span>
                    <span className="text-yellow-400 text-3xl font-bold">"Wake up"</span>
                    <span className="text-cyan-400 text-2xl animate-pulse">█</span>
                </div>
            </Terminal>

            <div className="mt-12 max-w-2xl text-center space-y-4">
                <p className="text-xl text-gray-300">
                    The <span className="text-cyan-400 font-bold">message</span> is inserted.
                </p>
                <div className="bg-black/50 border border-gray-700 rounded-lg p-4 mt-4">
                    <p className="text-lg text-gray-400">Notice:</p>
                    <ul className="text-left mt-2 space-y-2">
                        <li>• The quotes <code className="text-yellow-400">"</code> protect the text</li>
                        <li>• The message is clear</li>
                    </ul>
                </div>
                <p className="text-2xl text-yellow-400 font-bold mt-6">
                    One more step...
                </p>
            </div>
        </div>
    );
}

export function Lesson01Slide19() {
    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-gray-950 via-slate-900 to-black text-white flex flex-col items-center justify-center p-12">
            <h1 className="text-4xl font-bold mb-4 text-emerald-400">
                Micro-Step 4: Seal Channel
            </h1>
            <p className="text-xl text-gray-400 mb-12">Type: <code className="text-green-400">print("Wake up")</code></p>

            <Terminal variant="success" title="Terminal">
                <div className="flex items-center gap-1">
                    <span className="text-green-400 text-3xl font-bold">print(</span>
                    <span className="text-yellow-400 text-3xl font-bold">"Wake up"</span>
                    <span className="text-blue-400 text-3xl font-bold">)</span>
                </div>
            </Terminal>

            <div className="mt-12 max-w-2xl text-center space-y-4">
                <p className="text-xl text-gray-300">
                    The <code className="text-blue-400 text-2xl">)</code> <span className="text-emerald-400 font-bold">closes the airlock</span>.
                </p>
                <div className="bg-emerald-950/20 border-2 border-emerald-500/50 rounded-lg p-6 mt-6">
                    <p className="text-3xl text-emerald-400 font-bold mb-2">
                        ✓ Command Complete!
                    </p>
                    <p className="text-lg text-gray-400">
                        Press <kbd className="px-3 py-1 bg-gray-700 rounded">Enter</kbd> to execute
                    </p>
                </div>
            </div>
        </div>
    );
}
