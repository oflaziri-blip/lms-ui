/**
 * Lesson 01 - Slide 11: Bad Code Example 1
 * Shows missing parentheses error
 */

import React from 'react';
import { Terminal, TerminalError } from './Terminal';
import { AlertTriangle } from 'lucide-react';

export function Lesson01Slide11() {
    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-red-950/30 via-gray-900 to-black text-white flex flex-col items-center justify-center p-12">
            <div className="flex items-center gap-4 mb-8">
                <AlertTriangle className="w-16 h-16 text-red-500 animate-pulse" />
                <h1 className="text-5xl font-bold text-red-400">CRASH ALERT</h1>
            </div>

            <div className="max-w-3xl w-full space-y-8">
                {/* Bad Code */}
                <div className="bg-red-950/20 border-2 border-red-500/50 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-red-400 mb-4">Broken Code:</h3>
                    <code className="text-2xl font-mono text-red-300">print "Hello"</code>
                </div>

                {/* Error Terminal */}
                <Terminal variant="error" title="Python Error">
                    <TerminalError
                        type="SyntaxError"
                        message="invalid syntax"
                    />
                </Terminal>

                {/* Explanation */}
                <div className="bg-black/50 border border-gray-700 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-yellow-400 mb-3">What went wrong?</h3>
                    <p className="text-lg text-gray-300">
                        Missing <span className="text-cyan-400 font-bold">parentheses</span>. The airlock never opened!
                    </p>

                    {/* Visual indicator */}
                    <div className="mt-4 flex items-center gap-2">
                        <code className="text-xl text-red-400">print</code>
                        <span className="text-2xl text-yellow-400 animate-pulse">← Missing ( )</span>
                    </div>
                </div>

                {/* Fix */}
                <div className="bg-green-950/20 border-2 border-green-500/50 rounded-lg p-6">
                    <div className="flex items-center gap-2 mb-3">
                        <span className="text-2xl">✅</span>
                        <h3 className="text-xl font-bold text-green-400">Fix:</h3>
                    </div>
                    <code className="text-2xl font-mono text-green-400">print("Hello")</code>
                    <p className="text-sm text-gray-400 mt-3">Now the parentheses properly contain the string</p>
                </div>
            </div>

            {/* Flashing error border */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-red-500 animate-pulse" />
            <div className="absolute bottom-0 left-0 right-0 h-2 bg-red-500 animate-pulse" />
        </div>
    );
}
