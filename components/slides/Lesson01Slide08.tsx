/**
 * Lesson 01 - Slide 08: Anatomy of print()
 * Visual diagram showing code syntax breakdown
 */

import React from 'react';

export function Lesson01Slide08() {
    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-slate-900 via-gray-900 to-slate-950 text-white flex flex-col items-center justify-center p-12">
            <h1 className="text-4xl font-bold mb-12 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Breaking Down `print("Hello")`
            </h1>

            {/* Code Display */}
            <div className="mb-12 bg-black/50 border-2 border-cyan-500/30 rounded-lg p-8 backdrop-blur">
                <code className="text-4xl font-mono text-green-400">
                    print("Hello")
                </code>
            </div>

            {/* SVG Diagram */}
            <div className="w-full max-w-4xl relative">
                {/* Annotated Code */}
                <svg viewBox="0 0 800 300" className="w-full">
                    {/* Code Text */}
                    <text x="200" y="100" className="text-5xl font-mono fill-green-400">
                        print("Hello")
                    </text>

                    {/* Arrows and Labels */}
                    {/* Arrow to print */}
                    <line x1="150" y1="140" x2="220" y2="110" stroke="cyan" strokeWidth="2" />
                    <text x="50" y="150" className="text-sm fill-cyan-400">The Verb</text>
                    <text x="50" y="170" className="text-xs fill-gray-400">The command</text>

                    {/* Arrow to ( */}
                    <line x1="320" y1="140" x2="320" y2="110" stroke="cyan" strokeWidth="2" />
                    <text x="250" y="170" className="text-sm fill-cyan-400">Open Airlock</text>
                    <text x="250" y="190" className="text-xs fill-gray-400">Container start</text>

                    {/* Arrow to "Hello" */}
                    <line x1="420" y1="140" x2="390" y2="110" stroke="cyan" strokeWidth="2" />
                    <text x="420" y="150" className="text-sm fill-cyan-400">The Message</text>
                    <text x="420" y="170" className="text-xs fill-gray-400">The text data</text>

                    {/* Arrow to ) */}
                    <line x1="550" y1="140" x2="500" y2="110" stroke="cyan" strokeWidth="2" />
                    <text x="520" y="170" className="text-sm fill-cyan-400">Close Airlock</text>
                    <text x="520" y="190" className="text-xs fill-gray-400">Container end</text>
                </svg>
            </div>

            {/* Table */}
            <div className="mt-12 w-full max-w-3xl">
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="border-b-2 border-cyan-500/30">
                            <th className="text-left p-4 text-cyan-400">Part</th>
                            <th className="text-left p-4 text-cyan-400">Name</th>
                            <th className="text-left p-4 text-cyan-400">Function</th>
                        </tr>
                    </thead>
                    <tbody className="font-mono text-sm">
                        <tr className="border-b border-gray-700/30">
                            <td className="p-4 text-green-400">print</td>
                            <td className="p-4">The Verb</td>
                            <td className="p-4 text-gray-400">The command</td>
                        </tr>
                        <tr className="border-b border-gray-700/30">
                            <td className="p-4 text-green-400">(</td>
                            <td className="p-4">Open Airlock</td>
                            <td className="p-4 text-gray-400">Container start</td>
                        </tr>
                        <tr className="border-b border-gray-700/30">
                            <td className="p-4 text-green-400">"Hello"</td>
                            <td className="p-4">The Message</td>
                            <td className="p-4 text-gray-400">The text data</td>
                        </tr>
                        <tr>
                            <td className="p-4 text-green-400">)</td>
                            <td className="p-4">Close Airlock</td>
                            <td className="p-4 text-gray-400">Container end</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <p className="mt-8 text-xl text-cyan-400 font-bold">Every piece matters.</p>
        </div>
    );
}
