/**
 * Lesson 01 - Slide 12: Bad Code Example 2
 * Shows missing quotes error (NameError)
 */

import React from 'react';
import { Terminal, TerminalError } from './Terminal';
import { XCircle } from 'lucide-react';

export function Lesson01Slide12() {
    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-red-900/20 via-gray-900 to-black text-white flex flex-col items-center justify-center p-12 relative overflow-hidden">
            {/* Glitch effect background */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute w-full h-1 bg-red-500 animate-pulse" style={{ top: '20%' }} />
                <div className="absolute w-full h-1 bg-red-500 animate-pulse" style={{ top: '40%', animationDelay: '0.3s' }} />
                <div className="absolute w-full h-1 bg-red-500 animate-pulse" style={{ top: '60%', animationDelay: '0.6s' }} />
            </div>

            <div className="flex items-center gap-4 mb-8 relative z-10">
                <XCircle className="w-16 h-16 text-red-500" />
                <h1 className="text-5xl font-bold text-red-400">CRASH ALERT #2</h1>
            </div>

            <div className="max-w-3xl w-full space-y-8 relative z-10">
                {/* Bad Code */}
                <div className="bg-red-950/20 border-2 border-red-500/50 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-red-400 mb-4">Broken Code:</h3>
                    <code className="text-2xl font-mono text-red-300">print(Hello)</code>
                </div>

                {/* Error Terminal */}
                <Terminal variant="error" title="Python Error">
                    <TerminalError
                        type="NameError"
                        message="name 'Hello' is not defined"
                    />
                </Terminal>

                {/* Explanation */}
                <div className="bg-black/50 border border-gray-700 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-yellow-400 mb-3">What went wrong?</h3>
                    <p className="text-lg text-gray-300 mb-4">
                        Missing <span className="text-yellow-400 font-bold">quotes</span>. Python thinks <code className="text-red-400">Hello</code> is a variable (which doesn't exist).
                    </p>

                    {/* Visual breakdown */}
                    <div className="mt-4 bg-red-950/30 p-4 rounded border border-red-500/30">
                        <div className="flex items-center gap-2 mb-2">
                            <code className="text-lg">print(</code>
                            <code className="text-xl text-red-400">Hello</code>
                            <code className="text-lg">)</code>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-400">
                            <span className="ml-16">↑</span>
                            <span>Python looks for a variable named "Hello"... doesn't find it!</span>
                        </div>
                    </div>
                </div>

                {/* Fix */}
                <div className="bg-green-950/20 border-2 border-green-500/50 rounded-lg p-6">
                    <div className="flex items-center gap-2 mb-3">
                        <span className="text-2xl">✅</span>
                        <h3 className="text-xl font-bold text-green-400">Fix:</h3>
                    </div>
                    <code className="text-2xl font-mono text-green-400">print("Hello")</code>
                    <p className="text-sm text-gray-400 mt-3">
                        Quotes tell Python this is <span className="text-yellow-400 font-bold">text</span>, not a variable
                    </p>
                </div>
            </div>
        </div>
    );
}
