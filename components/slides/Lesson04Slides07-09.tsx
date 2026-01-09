/**
 * Lesson 04 - Slides 07-09: Boolean Logic
 * What are Booleans, Comparison Operators, True/False Values
 */

import React from 'react';
import { Binary, Scale, CheckCircle2 } from 'lucide-react';
import { Terminal, CodeLine } from './Terminal';

// Slide 07: What are Booleans?
export function Lesson04Slide07() {
    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-cyan-950 via-blue-950 to-slate-950 text-white p-12 relative overflow-hidden">
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'linear-gradient(cyan 1px, transparent 1px), linear-gradient(90deg, cyan 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }} />
            </div>

            <div className="relative z-10 max-w-5xl mx-auto">
                <div className="flex items-center gap-3 mb-8">
                    <Binary className="w-8 h-8 text-cyan-400" />
                    <h1 className="text-5xl font-bold text-cyan-400">WHAT ARE BOOLEANS?</h1>
                </div>

                <div className="mb-12 p-8 rounded-xl bg-cyan-500/10 border-2 border-cyan-500/30">
                    <p className="text-3xl text-gray-200 leading-relaxed">
                        A <span className="text-[#53d22d] font-bold">boolean</span> is a data type with only
                        <span className="text-cyan-400 font-bold"> TWO</span> possible values:
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-8 mb-12">
                    <div className="p-8 rounded-xl bg-[#53d22d]/20 border-2 border-[#53d22d]/50">
                        <div className="text-center">
                            <div className="text-8xl font-bold text-[#53d22d] mb-4">True</div>
                            <p className="text-2xl text-gray-300">Yes • On • 1 • Correct</p>
                        </div>
                    </div>

                    <div className="p-8 rounded-xl bg-red-500/20 border-2 border-red-500/50">
                        <div className="text-center">
                            <div className="text-8xl font-bold text-red-400 mb-4">False</div>
                            <p className="text-2xl text-gray-300">No • Off • 0 • Incorrect</p>
                        </div>
                    </div>
                </div>

                <Terminal variant="success" title="Chronos Boolean System">
                    <CodeLine>access_granted = True</CodeLine>
                    <CodeLine>system_offline = False</CodeLine>
                    <CodeLine>&nbsp;</CodeLine>
                    <CodeLine>print(access_granted)</CodeLine>
                    <CodeLine output>True</CodeLine>
                    <CodeLine>&nbsp;</CodeLine>
                    <CodeLine>print(system_offline)</CodeLine>
                    <CodeLine output>False</CodeLine>
                </Terminal>

                <div className="mt-12 p-6 rounded-xl bg-yellow-500/10 border-2 border-yellow-500/30">
                    <p className="text-xl text-gray-300">
                        ⚠️ <span className="text-yellow-400 font-bold">Important:</span>
                        <code className="text-[#53d22d] bg-[#53d22d]/10 px-2 py-1 rounded mx-2">True</code> and
                        <code className="text-red-400 bg-red-400/10 px-2 py-1 rounded">False</code> are
                        <span className="text-cyan-400 font-bold"> capitalized</span> in Python!
                    </p>
                </div>
            </div>
        </div>
    );
}

// Slide 08: Comparison Operators
export function Lesson04Slide08() {
    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-blue-950 via-slate-950 to-cyan-950 text-white p-12 relative overflow-hidden">
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'linear-gradient(#53d22d 1px, transparent 1px), linear-gradient(90deg, #53d22d 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }} />
            </div>

            <div className="relative z-10 max-w-5xl mx-auto">
                <div className="flex items-center gap-3 mb-8">
                    <Scale className="w-8 h-8 text-[#53d22d]" />
                    <h1 className="text-5xl font-bold text-[#53d22d]">COMPARISON OPERATORS</h1>
                </div>

                <p className="text-2xl text-gray-300 mb-12">
                    Compare values and get <code className="text-[#53d22d]">True</code> or <code className="text-red-400">False</code> results:
                </p>

                <div className="space-y-4">
                    <div className="p-6 rounded-xl bg-slate-800/50 border border-cyan-500/30">
                        <div className="grid grid-cols-2 gap-6">
                            <div>
                                <h3 className="text-cyan-400 font-bold text-xl mb-3">OPERATOR: ==</h3>
                                <p className="text-gray-400 mb-3">Equal to</p>
                                <Terminal variant="default" title="Python">
                                    <CodeLine>print(5 == 5)</CodeLine>
                                    <CodeLine output>True</CodeLine>
                                    <CodeLine>print(5 == 3)</CodeLine>
                                    <CodeLine output>False</CodeLine>
                                </Terminal>
                            </div>
                            <div>
                                <h3 className="text-cyan-400 font-bold text-xl mb-3">OPERATOR: !=</h3>
                                <p className="text-gray-400 mb-3">Not equal to</p>
                                <Terminal variant="default" title="Python">
                                    <CodeLine>print(5 != 3)</CodeLine>
                                    <CodeLine output>True</CodeLine>
                                    <CodeLine>print(5 != 5)</CodeLine>
                                    <CodeLine output>False</CodeLine>
                                </Terminal>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 rounded-xl bg-slate-800/50 border border-cyan-500/30">
                        <div className="grid grid-cols-2 gap-6">
                            <div>
                                <h3 className="text-cyan-400 font-bold text-xl mb-3">OPERATOR: &gt;</h3>
                                <p className="text-gray-400 mb-3">Greater than</p>
                                <Terminal variant="default" title="Python">
                                    <CodeLine>print(10 &gt; 5)</CodeLine>
                                    <CodeLine output>True</CodeLine>
                                    <CodeLine>print(3 &gt; 10)</CodeLine>
                                    <CodeLine output>False</CodeLine>
                                </Terminal>
                            </div>
                            <div>
                                <h3 className="text-cyan-400 font-bold text-xl mb-3">OPERATOR: &lt;</h3>
                                <p className="text-gray-400 mb-3">Less than</p>
                                <Terminal variant="default" title="Python">
                                    <CodeLine>print(3 &lt; 10)</CodeLine>
                                    <CodeLine output>True</CodeLine>
                                    <CodeLine>print(10 &lt; 5)</CodeLine>
                                    <CodeLine output>False</CodeLine>
                                </Terminal>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 rounded-xl bg-slate-800/50 border border-cyan-500/30">
                        <div className="grid grid-cols-2 gap-6">
                            <div>
                                <h3 className="text-cyan-400 font-bold text-xl mb-3">OPERATOR: &gt;=</h3>
                                <p className="text-gray-400 mb-3">Greater than or equal</p>
                                <Terminal variant="default" title="Python">
                                    <CodeLine>print(18 &gt;= 18)</CodeLine>
                                    <CodeLine output>True</CodeLine>
                                    <CodeLine>print(17 &gt;= 18)</CodeLine>
                                    <CodeLine output>False</CodeLine>
                                </Terminal>
                            </div>
                            <div>
                                <h3 className="text-cyan-400 font-bold text-xl mb-3">OPERATOR: &lt;=</h3>
                                <p className="text-gray-400 mb-3">Less than or equal</p>
                                <Terminal variant="default" title="Python">
                                    <CodeLine>print(5 &lt;= 10)</CodeLine>
                                    <CodeLine output>True</CodeLine>
                                    <CodeLine>print(15 &lt;= 10)</CodeLine>
                                    <CodeLine output>False</CodeLine>
                                </Terminal>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Slide 09: Boolean in Action
export function Lesson04Slide09() {
    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-cyan-950 via-blue-950 to-slate-950 text-white p-12 relative overflow-hidden">
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'linear-gradient(cyan 1px, transparent 1px), linear-gradient(90deg, cyan 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }} />
            </div>

            <div className="relative z-10 max-w-5xl mx-auto">
                <div className="flex items-center gap-3 mb-8">
                    <CheckCircle2 className="w-8 h-8 text-cyan-400" />
                    <h1 className="text-5xl font-bold text-cyan-400">BOOLEANS IN ACTION</h1>
                </div>

                <p className="text-2xl text-gray-300 mb-12">
                    Combine <code className="text-[#53d22d]">input()</code> with comparisons for powerful logic:
                </p>

                <div className="mb-12">
                    <h3 className="text-[#53d22d] font-bold text-2xl mb-4">EXAMPLE 1: Age Verification</h3>
                    <Terminal variant="success" title="Chronos Security System">
                        <CodeLine>age = int(input("Enter your age: "))</CodeLine>
                        <CodeLine>is_adult = age &gt;= 18</CodeLine>
                        <CodeLine>print(is_adult)</CodeLine>
                        <CodeLine>&nbsp;</CodeLine>
                        <CodeLine className="text-gray-500"># If user enters 20:</CodeLine>
                        <CodeLine output>True</CodeLine>
                        <CodeLine>&nbsp;</CodeLine>
                        <CodeLine className="text-gray-500"># If user enters 15:</CodeLine>
                        <CodeLine output>False</CodeLine>
                    </Terminal>
                </div>

                <div className="mb-12">
                    <h3 className="text-[#53d22d] font-bold text-2xl mb-4">EXAMPLE 2: Password Check</h3>
                    <Terminal variant="success" title="Chronos Access Control">
                        <CodeLine>password = input("Enter password: ")</CodeLine>
                        <CodeLine>is_correct = password == "mainframe"</CodeLine>
                        <CodeLine>print(is_correct)</CodeLine>
                        <CodeLine>&nbsp;</CodeLine>
                        <CodeLine className="text-gray-500"># If user enters "mainframe":</CodeLine>
                        <CodeLine output>True</CodeLine>
                        <CodeLine>&nbsp;</CodeLine>
                        <CodeLine className="text-gray-500"># If user enters "guest":</CodeLine>
                        <CodeLine output>False</CodeLine>
                    </Terminal>
                </div>

                <div className="p-6 rounded-xl bg-[#53d22d]/10 border-2 border-[#53d22d]/30">
                    <p className="text-xl text-gray-300 text-center">
                        💡 <span className="text-[#53d22d] font-bold">Pro Tip:</span> You can print comparisons directly!
                        <code className="block mt-3 text-cyan-400">print(age &gt;= 18)</code>
                    </p>
                </div>
            </div>
        </div>
    );
}
