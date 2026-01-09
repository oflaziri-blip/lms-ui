/**
 * Lesson 04 - Slides 04-06: Core Concepts
 * The Solution, input() Function, Type Conversion
 */

import React from 'react';
import { Lightbulb, Download, RefreshCcw } from 'lucide-react';
import { Terminal, CodeLine } from './Terminal';

// Slide 04: The Solution - input()
export function Lesson04Slide04() {
    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-blue-950 via-slate-950 to-cyan-950 text-white p-12 relative overflow-hidden">
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'linear-gradient(cyan 1px, transparent 1px), linear-gradient(90deg, cyan 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }} />
            </div>

            <div className="relative z-10 max-w-5xl mx-auto">
                <div className="flex items-center gap-3 mb-8">
                    <Lightbulb className="w-8 h-8 text-[#53d22d]" />
                    <h1 className="text-5xl font-bold text-[#53d22d]">THE SOLUTION: input()</h1>
                </div>

                <div className="mb-12 p-8 rounded-xl bg-[#53d22d]/10 border-2 border-[#53d22d]/30">
                    <p className="text-3xl text-gray-200 leading-relaxed">
                        Python's <code className="text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded">input()</code> function
                        lets your program <span className="text-[#53d22d] font-bold">pause and wait</span> for user data!
                    </p>
                </div>

                <Terminal variant="success" title="Chronos Interactive Terminal">
                    <CodeLine>name = input("Enter your agent codename: ")</CodeLine>
                    <CodeLine>print(f"Welcome to Chronos, Agent {'{name}'}")</CodeLine>
                    <CodeLine>&nbsp;</CodeLine>
                    <CodeLine className="text-gray-500"># When you run this:</CodeLine>
                    <CodeLine output>Enter your agent codename: _</CodeLine>
                    <CodeLine className="text-gray-500"># User types: Shadow</CodeLine>
                    <CodeLine output className="text-[#53d22d]">Welcome to Chronos, Agent Shadow</CodeLine>
                </Terminal>

                <div className="mt-12 grid grid-cols-2 gap-6">
                    <div className="p-6 rounded-xl bg-cyan-500/10 border border-cyan-500/30">
                        <h3 className="text-cyan-400 font-bold text-xl mb-3">HOW IT WORKS:</h3>
                        <ol className="text-gray-300 space-y-2">
                            <li>1. Program displays the prompt</li>
                            <li>2. Program <span className="text-yellow-400">pauses</span></li>
                            <li>3. User types their input</li>
                            <li>4. User presses <kbd className="bg-slate-700 px-2 py-1 rounded">Enter</kbd></li>
                            <li>5. Input is stored in variable</li>
                        </ol>
                    </div>

                    <div className="p-6 rounded-xl bg-[#53d22d]/10 border border-[#53d22d]/30">
                        <h3 className="text-[#53d22d] font-bold text-xl mb-3">✅ BENEFITS:</h3>
                        <ul className="text-gray-300 space-y-2">
                            <li>• Programs become interactive</li>
                            <li>• Different output each run</li>
                            <li>• User controls the data</li>
                            <li>• Real-world applications!</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Slide 05: input() Always Returns String
export function Lesson04Slide05() {
    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-cyan-950 via-blue-950 to-slate-950 text-white p-12 relative overflow-hidden">
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'linear-gradient(#53d22d 1px, transparent 1px), linear-gradient(90deg, #53d22d 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }} />
            </div>

            <div className="relative z-10 max-w-5xl mx-auto">
                <div className="flex items-center gap-3 mb-8">
                    <Download className="w-8 h-8 text-cyan-400" />
                    <h1 className="text-5xl font-bold text-cyan-400">CRITICAL: input() RETURNS STRING</h1>
                </div>

                <div className="mb-12 p-8 rounded-xl bg-yellow-500/10 border-2 border-yellow-500/30">
                    <p className="text-3xl text-gray-200 leading-relaxed">
                        ⚠️ <span className="text-yellow-400 font-bold">ALWAYS</span> remember:
                        <code className="text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded ml-2">input()</code> returns a
                        <span className="text-[#53d22d] font-bold"> STRING</span>, even if user types numbers!
                    </p>
                </div>

                <div className="mb-12">
                    <h3 className="text-[#53d22d] font-bold text-2xl mb-4">EXAMPLE:</h3>
                    <Terminal variant="default" title="Python">
                        <CodeLine>age = input("Enter your age: ")</CodeLine>
                        <CodeLine className="text-gray-500"># User types: 25</CodeLine>
                        <CodeLine>&nbsp;</CodeLine>
                        <CodeLine>print(type(age))</CodeLine>
                        <CodeLine output>&lt;class 'str'&gt;</CodeLine>
                        <CodeLine>&nbsp;</CodeLine>
                        <CodeLine className="text-gray-500"># age is "25" (string), not 25 (number)!</CodeLine>
                    </Terminal>
                </div>

                <div className="mb-12 p-8 rounded-xl bg-red-500/10 border-2 border-red-500/30">
                    <h3 className="text-red-400 font-bold text-2xl mb-4">❌ THIS CAUSES ERRORS:</h3>
                    <Terminal variant="error" title="Python">
                        <CodeLine>age = input("Age: ")  # Returns "25"</CodeLine>
                        <CodeLine>next_year = age + 1   # Trying to add number to string!</CodeLine>
                        <CodeLine>&nbsp;</CodeLine>
                        <CodeLine output className="text-red-400">TypeError: can only concatenate str (not "int") to str</CodeLine>
                    </Terminal>
                </div>

                <div className="p-6 rounded-xl bg-cyan-500/10 border-2 border-cyan-500/30">
                    <p className="text-xl text-gray-300 text-center">
                        💡 <span className="text-cyan-400 font-bold">Solution:</span> We need to
                        <span className="text-[#53d22d] font-bold"> convert</span> the string to a number!
                    </p>
                </div>
            </div>
        </div>
    );
}

// Slide 06: Type Conversion
export function Lesson04Slide06() {
    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-950 text-white p-12 relative overflow-hidden">
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'linear-gradient(cyan 1px, transparent 1px), linear-gradient(90deg, cyan 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }} />
            </div>

            <div className="relative z-10 max-w-5xl mx-auto">
                <div className="flex items-center gap-3 mb-8">
                    <RefreshCcw className="w-8 h-8 text-[#53d22d]" />
                    <h1 className="text-5xl font-bold text-[#53d22d]">TYPE CONVERSION</h1>
                </div>

                <p className="text-2xl text-gray-300 mb-12">
                    Convert strings to numbers using <code className="text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded">int()</code> and
                    <code className="text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded ml-2">float()</code>:
                </p>

                <div className="space-y-6">
                    <div className="p-6 rounded-xl bg-slate-800/50 border border-cyan-500/30">
                        <h3 className="text-cyan-400 font-bold text-xl mb-3">CONVERT TO INTEGER</h3>
                        <Terminal variant="success" title="Python">
                            <CodeLine>age = input("Age: ")      # Returns "25" (string)</CodeLine>
                            <CodeLine>age = int(age)            # Converts to 25 (integer)</CodeLine>
                            <CodeLine>next_year = age + 1       # Now math works!</CodeLine>
                            <CodeLine>print(next_year)</CodeLine>
                            <CodeLine output className="text-[#53d22d]">26</CodeLine>
                        </Terminal>
                    </div>

                    <div className="p-6 rounded-xl bg-slate-800/50 border border-cyan-500/30">
                        <h3 className="text-cyan-400 font-bold text-xl mb-3">CONVERT TO FLOAT (Decimals)</h3>
                        <Terminal variant="success" title="Python">
                            <CodeLine>price = input("Price: ")  # Returns "19.99"</CodeLine>
                            <CodeLine>price = float(price)      # Converts to 19.99</CodeLine>
                            <CodeLine>tax = price * 0.1</CodeLine>
                            <CodeLine>print(tax)</CodeLine>
                            <CodeLine output className="text-[#53d22d]">1.999</CodeLine>
                        </Terminal>
                    </div>

                    <div className="p-6 rounded-xl bg-slate-800/50 border border-cyan-500/30">
                        <h3 className="text-cyan-400 font-bold text-xl mb-3">SHORTCUT: Combine input() and int()</h3>
                        <Terminal variant="success" title="Python">
                            <CodeLine>age = int(input("Age: "))  # Convert immediately!</CodeLine>
                            <CodeLine>print(age + 1)</CodeLine>
                            <CodeLine output className="text-[#53d22d]">26</CodeLine>
                        </Terminal>
                    </div>
                </div>

                <div className="mt-12 p-6 rounded-xl bg-[#53d22d]/10 border-2 border-[#53d22d]/30">
                    <h3 className="text-[#53d22d] font-bold text-2xl mb-4">CONVERSION CHEAT SHEET:</h3>
                    <div className="grid grid-cols-3 gap-4 text-center">
                        <div className="p-4 rounded bg-slate-800/50">
                            <code className="text-cyan-400 text-lg">int(x)</code>
                            <p className="text-gray-400 mt-2">→ Integer</p>
                        </div>
                        <div className="p-4 rounded bg-slate-800/50">
                            <code className="text-cyan-400 text-lg">float(x)</code>
                            <p className="text-gray-400 mt-2">→ Decimal</p>
                        </div>
                        <div className="p-4 rounded bg-slate-800/50">
                            <code className="text-cyan-400 text-lg">str(x)</code>
                            <p className="text-gray-400 mt-2">→ String</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
