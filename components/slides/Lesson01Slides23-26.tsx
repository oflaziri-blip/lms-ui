/**
 * Lesson 01 - Slides 23-26: Task Categories
 * Overview of the 17-task protocol
 */

import React from 'react';
import { ClipboardList, Keyboard, Bug, FileCode } from 'lucide-react';

export function Lesson01Slide23() {
    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-purple-950/30 via-gray-900 to-black text-white flex flex-col items-center justify-center p-12">
            <div className="flex items-center gap-4 mb-8">
                <ClipboardList className="w-12 h-12 text-purple-400" />
                <h1 className="text-4xl font-bold text-purple-400">FINAL TRAINING SEQUENCE</h1>
            </div>

            <div className="max-w-4xl w-full space-y-8">
                <p className="text-2xl text-gray-300 text-center">
                    You've learned the theory. Now prove your skills.
                </p>

                {/* Categories Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-cyan-950/20 border-2 border-cyan-500/40 rounded-lg p-6">
                        <div className="flex items-center gap-3 mb-4">
                            <Keyboard className="w-10 h-10 text-cyan-400" />
                            <div>
                                <h3 className="text-xl font-bold text-cyan-400">1. Neural Sync</h3>
                                <p className="text-sm text-gray-400">5 Typing Tasks</p>
                            </div>
                        </div>
                        <p className="text-gray-300">Build muscle memory for perfect syntax</p>
                    </div>

                    <div className="bg-red-950/20 border-2 border-red-500/40 rounded-lg p-6">
                        <div className="flex items-center gap-3 mb-4">
                            <Bug className="w-10 h-10 text-red-400" />
                            <div>
                                <h3 className="text-xl font-bold text-red-400">2. Glitch Repair</h3>
                                <p className="text-sm text-gray-400">5 Debugging Tasks</p>
                            </div>
                        </div>
                        <p className="text-gray-300">Find and fix broken code</p>
                    </div>

                    <div className="bg-emerald-950/20 border-2 border-emerald-500/40 rounded-lg p-6">
                        <div className="flex items-center gap-3 mb-4">
                            <FileCode className="w-10 h-10 text-emerald-400" />
                            <div>
                                <h3 className="text-xl font-bold text-emerald-400">3. Mission Protocols</h3>
                                <p className="text-sm text-gray-400">7 Writing Tasks</p>
                            </div>
                        </div>
                        <p className="text-gray-300">Write code from scratch</p>
                    </div>
                </div>

                {/* Total */}
                <div className="text-center">
                    <div className="inline-block bg-purple-950/20 border-2 border-purple-500/50 rounded-lg px-12 py-6">
                        <p className="text-3xl font-bold text-purple-400">
                            Complete all 17 to unlock the next mission
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export function Lesson01Slide24() {
    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-cyan-950/30 via-gray-900 to-black text-white flex flex-col items-center justify-center p-12">
            <div className="flex items-center gap-4 mb-8">
                <Keyboard className="w-12 h-12 text-cyan-400" />
                <h1 className="text-4xl font-bold text-cyan-400">TYPING TASKS</h1>
            </div>

            <div className="max-w-3xl w-full space-y-8">
                <div className="bg-cyan-950/20 border-2 border-cyan-500/40 rounded-lg p-8">
                    <h2 className="text-2xl font-bold text-cyan-400 mb-4">Muscle Memory</h2>
                    <p className="text-xl text-gray-300 mb-6">
                        Type these commands <span className="text-cyan-400 font-bold">exactly</span> as shown. No changes.
                    </p>

                    <div className="bg-black/50 border border-gray-700 rounded-lg p-4">
                        <p className="text-lg text-yellow-400 mb-2">Goal:</p>
                        <p className="text-gray-300">Build muscle memory for perfect syntax</p>
                    </div>
                </div>

                {/* Example tasks preview */}
                <div className="space-y-4">
                    <div className="bg-black/30 border border-cyan-500/30 rounded p-4">
                        <p className="text-sm text-gray-400 mb-2">Example Task:</p>
                        <code className="text-lg text-green-400">print("System check complete")</code>
                    </div>
                    <div className="bg-black/30 border border-cyan-500/30 rounded p-4">
                        <p className="text-sm text-gray-400 mb-2">Example Task:</p>
                        <code className="text-lg text-green-400">print("3... 2... 1... Launch!")</code>
                    </div>
                </div>

                <div className="text-center text-xl text-cyan-400">
                    Proceed to task list →
                </div>
            </div>
        </div>
    );
}

export function Lesson01Slide25() {
    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-red-950/30 via-gray-900 to-black text-white flex flex-col items-center justify-center p-12">
            <div className="flex items-center gap-4 mb-8">
                <Bug className="w-12 h-12 text-red-400" />
                <h1 className="text-4xl font-bold text-red-400">DEBUGGING TASKS</h1>
            </div>

            <div className="max-w-3xl w-full space-y-8">
                <div className="bg-red-950/20 border-2 border-red-500/40 rounded-lg p-8">
                    <h2 className="text-2xl font-bold text-red-400 mb-4">Error Detection</h2>
                    <p className="text-xl text-gray-300 mb-6">
                        Each code snippet has <span className="text-red-400 font-bold">one error</span>. Find it. Fix it.
                    </p>

                    <div className="bg-black/50 border border-gray-700 rounded-lg p-4">
                        <p className="text-lg text-yellow-400 mb-2">Skills tested:</p>
                        <ul className="text-gray-300 space-y-1">
                            <li>• Spotting missing quotes</li>
                            <li>• Finding missing parentheses</li>
                            <li>• Catching typos</li>
                        </ul>
                    </div>
                </div>

                {/* Example */}
                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-red-950/20 border border-red-500/40 rounded p-4">
                        <p className="text-sm text-red-400 mb-2">❌ Broken:</p>
                        <code className="text-lg text-red-300">print("Hello</code>
                    </div>
                    <div className="bg-green-950/20 border border-green-500/40 rounded p-4">
                        <p className="text-sm text-green-400 mb-2">✅ Fixed:</p>
                        <code className="text-lg text-green-300">print("Hello")</code>
                    </div>
                </div>

                <div className="text-center text-xl text-red-400">
                    Proceed to task list →
                </div>
            </div>
        </div>
    );
}

export function Lesson01Slide26() {
    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-emerald-950/30 via-gray-900 to-black text-white flex flex-col items-center justify-center p-12">
            <div className="flex items-center gap-4 mb-8">
                <FileCode className="w-12 h-12 text-emerald-400" />
                <h1 className="text-4xl font-bold text-emerald-400">WRITING TASKS</h1>
            </div>

            <div className="max-w-4xl w-full space-y-8">
                <div className="bg-emerald-950/20 border-2 border-emerald-500/40 rounded-lg p-8">
                    <h2 className="text-2xl font-bold text-emerald-400 mb-4">Problem Solving</h2>
                    <p className="text-xl text-gray-300 mb-6">
                        Write code from scratch to solve challenges.
                    </p>
                </div>

                {/* Difficulty levels */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-green-950/20 border-2 border-green-500/40 rounded-lg p-6 text-center">
                        <div className="text-4xl mb-2">🟢</div>
                        <h3 className="text-xl font-bold text-green-400 mb-2">Recruit</h3>
                        <p className="text-sm text-gray-400">Easy: 1-liners</p>
                    </div>

                    <div className="bg-yellow-950/20 border-2 border-yellow-500/40 rounded-lg p-6 text-center">
                        <div className="text-4xl mb-2">🟡</div>
                        <h3 className="text-xl font-bold text-yellow-400 mb-2">Agent</h3>
                        <p className="text-sm text-gray-400">Medium: Logic required</p>
                    </div>

                    <div className="bg-red-950/20 border-2 border-red-500/40 rounded-lg p-6 text-center">
                        <div className="text-4xl mb-2">🔴</div>
                        <h3 className="text-xl font-bold text-red-400 mb-2">Architect</h3>
                        <p className="text-sm text-gray-400">Hard: Boss-level</p>
                    </div>
                </div>

                <div className="text-center text-xl text-emerald-400">
                    Proceed to task list →
                </div>
            </div>
        </div>
    );
}
