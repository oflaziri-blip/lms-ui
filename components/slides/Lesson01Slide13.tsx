/**
 * Lesson 01 - Slide 13: Good Code Example
 * Shows perfect syntax with success celebration
 */

import React from 'react';
import { Terminal, CodeLine } from './Terminal';
import { CheckCircle, Sparkles } from 'lucide-react';

export function Lesson01Slide13() {
    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-emerald-950/30 via-gray-900 to-black text-white flex flex-col items-center justify-center p-12 relative overflow-hidden">
            {/* Success particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(30)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animation: `float ${3 + Math.random() * 2}s ease-in-out infinite`,
                            animationDelay: `${Math.random() * 2}s`
                        }}
                    >
                        <Sparkles className="w-4 h-4 text-emerald-400 opacity-30" />
                    </div>
                ))}
            </div>

            <div className="flex items-center gap-4 mb-8 relative z-10">
                <CheckCircle className="w-16 h-16 text-emerald-500" />
                <h1 className="text-5xl font-bold text-emerald-400">SUCCESS!</h1>
            </div>

            <div className="max-w-3xl w-full space-y-8 relative z-10">
                {/* Good Code */}
                <div className="bg-emerald-950/20 border-2 border-emerald-500/50 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-emerald-400 mb-4">Perfect Code:</h3>
                    <code className="text-2xl font-mono text-emerald-300">print("System Online")</code>
                </div>

                {/* Output Terminal */}
                <Terminal variant="success" title="Python Output">
                    <CodeLine prompt=">>>">print("System Online")</CodeLine>
                    <CodeLine output>System Online</CodeLine>
                </Terminal>

                {/* Why it works */}
                <div className="bg-black/50 border border-emerald-700/30 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-emerald-400 mb-4">Why it works:</h3>

                    <div className="space-y-3">
                        <div className="flex items-start gap-3">
                            <span className="text-emerald-400 text-xl">✅</span>
                            <div>
                                <code className="text-lg text-green-400">print</code>
                                <span className="text-gray-400 ml-2">(command)</span>
                            </div>
                        </div>

                        <div className="flex items-start gap-3">
                            <span className="text-emerald-400 text-xl">✅</span>
                            <div>
                                <code className="text-lg text-yellow-400">(</code>
                                <span className="text-gray-400 ml-2">(open airlock)</span>
                            </div>
                        </div>

                        <div className="flex items-start gap-3">
                            <span className="text-emerald-400 text-xl">✅</span>
                            <div>
                                <code className="text-lg text-cyan-400">"System Online"</code>
                                <span className="text-gray-400 ml-2">(quoted text)</span>
                            </div>
                        </div>

                        <div className="flex items-start gap-3">
                            <span className="text-emerald-400 text-xl">✅</span>
                            <div>
                                <code className="text-lg text-yellow-400">)</code>
                                <span className="text-gray-400 ml-2">(close airlock)</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Key insight */}
                <div className="text-center">
                    <div className="inline-block bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border-2 border-emerald-500/50 rounded-lg px-8 py-4">
                        <p className="text-2xl font-bold text-emerald-400">
                            Perfect syntax = Perfect execution
                        </p>
                    </div>
                </div>
            </div>

            <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
        </div>
    );
}
