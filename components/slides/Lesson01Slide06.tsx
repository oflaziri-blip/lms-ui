/**
 * Lesson 01 - Slide 06: Key Terms Vocabulary
 * Glossary of important programming concepts
 */

import React from 'react';
import { BookOpen, MessageSquare, FileCode } from 'lucide-react';

export function Lesson01Slide06() {
    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-indigo-950/30 via-gray-900 to-black text-white flex flex-col items-center justify-center p-12">
            <div className="flex items-center gap-4 mb-12">
                <BookOpen className="w-12 h-12 text-indigo-400" />          <h1 className="text-5xl font-bold text-indigo-400">KEY TERMS</h1>
            </div>

            <p className="text-xl text-gray-400 mb-12">Before you begin, learn the language:</p>

            {/* Terms Grid */}
            <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Print */}
                <div className="group">
                    <div className="border-2 border-cyan-500/40 rounded-lg p-6 bg-cyan-950/10 backdrop-blur hover:bg-cyan-950/20 transition-all">
                        <div className="flex items-center gap-3 mb-4">
                            <MessageSquare className="w-8 h-8 text-cyan-400" />
                            <h3 className="text-2xl font-bold font-mono text-cyan-400">print()</h3>
                        </div>
                        <p className="text-gray-300">
                            The command that makes the computer <span className="text-cyan-400 font-bold">speak</span>. Without <code className="text-green-400">print()</code>, the code is silent.
                        </p>
                    </div>
                </div>

                {/* String */}
                <div className="group">
                    <div className="border-2 border-yellow-500/40 rounded-lg p-6 bg-yellow-950/10 backdrop-blur hover:bg-yellow-950/20 transition-all">
                        <div className="flex items-center gap-3 mb-4">
                            <FileCode className="w-8 h-8 text-yellow-400" />
                            <h3 className="text-2xl font-bold font-mono text-yellow-400">String</h3>
                        </div>
                        <p className="text-gray-300">
                            A <span className="text-yellow-400 font-bold">text message</span> wrapped in quotes. Example: <code className="text-green-400">"Hello World"</code>
                        </p>
                    </div>
                </div>

                {/* Syntax */}
                <div className="group">
                    <div className="border-2 border-red-500/40 rounded-lg p-6 bg-red-950/10 backdrop-blur hover:bg-red-950/20 transition-all">
                        <div className="flex items-center gap-3 mb-4">
                            <BookOpen className="w-8 h-8 text-red-400" />
                            <h3 className="text-2xl font-bold font-mono text-red-400">Syntax</h3>
                        </div>
                        <p className="text-gray-300">
                            The <span className="text-red-400 font-bold">grammar rules</span> of code. One missing quote = <span className="text-red-500 font-bold">game over</span>.
                        </p>
                    </div>
                </div>
            </div>

            {/* Visual Examples */}
            <div className="mt-16 max-w-4xl w-full">
                <div className="bg-black/50 border border-gray-700 rounded-lg p-6 font-mono">
                    <div className="space-y-3">
                        <div className="flex items-center gap-4">
                            <span className="text-cyan-400">print(</span>
                            <span className="text-yellow-400">"Hello World"</span>
                            <span className="text-cyan-400">)</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                            <span>↑</span>
                            <span>Command</span>
                            <span className="ml-8">↑</span>
                            <span>String</span>
                            <span className="ml-16">↑</span>
                            <span>Correct Syntax</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
