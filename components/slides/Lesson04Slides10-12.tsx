/**
 * Lesson 04 - Slides 10-12: Common Pitfalls & Examples
 * Common Errors, Assignment vs Comparison, Practical Examples
 */

import React from 'react';
import { AlertTriangle, GitCompare, Rocket } from 'lucide-react';
import { Terminal, CodeLine } from './Terminal';

// Slide 10: Common Input Errors
export function Lesson04Slide10() {
    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-950 text-white p-12 relative overflow-hidden">
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'linear-gradient(#53d22d 1px, transparent 1px), linear-gradient(90deg, #53d22d 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }} />
            </div>

            <div className="relative z-10 max-w-5xl mx-auto">
                <div className="flex items-center gap-3 mb-8">
                    <AlertTriangle className="w-8 h-8 text-red-400" />
                    <h1 className="text-5xl font-bold text-red-400">COMMON INPUT ERRORS</h1>
                </div>

                <div className="space-y-6">
                    <div className="p-6 rounded-xl bg-red-500/10 border-l-4 border-red-500">
                        <h3 className="text-red-400 font-bold text-xl mb-3">ERROR 1: Forgetting Type Conversion</h3>
                        <Terminal variant="error" title="Python">
                            <CodeLine>age = input("Age: ")  # Returns "25" (string)</CodeLine>
                            <CodeLine>next_age = age + 1    # ERROR!</CodeLine>
                            <CodeLine output className="text-red-400">TypeError: can only concatenate str (not "int") to str</CodeLine>
                            <CodeLine>&nbsp;</CodeLine>
                            <CodeLine className="text-[#53d22d]"># Fix: age = int(input("Age: "))</CodeLine>
                        </Terminal>
                    </div>

                    <div className="p-6 rounded-xl bg-red-500/10 border-l-4 border-red-500">
                        <h3 className="text-red-400 font-bold text-xl mb-3">ERROR 2: Converting Non-Numeric Input</h3>
                        <Terminal variant="error" title="Python">
                            <CodeLine>age = int(input("Age: "))</CodeLine>
                            <CodeLine className="text-gray-500"># User types: "twenty"</CodeLine>
                            <CodeLine output className="text-red-400">ValueError: invalid literal for int() with base 10: 'twenty'</CodeLine>
                            <CodeLine>&nbsp;</CodeLine>
                            <CodeLine className="text-[#53d22d]"># Users must enter numbers!</CodeLine>
                        </Terminal>
                    </div>

                    <div className="p-6 rounded-xl bg-red-500/10 border-l-4 border-red-500">
                        <h3 className="text-red-400 font-bold text-xl mb-3">ERROR 3: Using = Instead of ==</h3>
                        <Terminal variant="error" title="Python">
                            <CodeLine>password = input("Password: ")</CodeLine>
                            <CodeLine>if password = "secret":  # WRONG!</CodeLine>
                            <CodeLine output className="text-red-400">SyntaxError: invalid syntax</CodeLine>
                            <CodeLine>&nbsp;</CodeLine>
                            <CodeLine className="text-[#53d22d]"># Fix: if password == "secret":</CodeLine>
                        </Terminal>
                    </div>

                    <div className="p-6 rounded-xl bg-red-500/10 border-l-4 border-red-500">
                        <h3 className="text-red-400 font-bold text-xl mb-3">ERROR 4: Case Sensitivity</h3>
                        <Terminal variant="error" title="Python">
                            <CodeLine>answer = input("Yes or No? ")</CodeLine>
                            <CodeLine className="text-gray-500"># User types: "yes"</CodeLine>
                            <CodeLine>print(answer == "Yes")</CodeLine>
                            <CodeLine output>False  # "yes" != "Yes"</CodeLine>
                            <CodeLine>&nbsp;</CodeLine>
                            <CodeLine className="text-[#53d22d]"># Fix: answer.lower() == "yes"</CodeLine>
                        </Terminal>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Slide 11: Assignment vs Comparison
export function Lesson04Slide11() {
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
                    <GitCompare className="w-8 h-8 text-cyan-400" />
                    <h1 className="text-5xl font-bold text-cyan-400">= vs == : CRITICAL DIFFERENCE</h1>
                </div>

                <div className="mb-12 p-8 rounded-xl bg-yellow-500/10 border-2 border-yellow-500/30">
                    <p className="text-3xl text-gray-200 leading-relaxed text-center">
                        ⚠️ <span className="text-yellow-400 font-bold">DON'T CONFUSE THESE!</span>
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-8 mb-12">
                    <div className="p-8 rounded-xl bg-blue-500/20 border-2 border-blue-500/50">
                        <div className="text-center mb-6">
                            <div className="text-6xl font-bold text-blue-400 mb-4">=</div>
                            <h3 className="text-2xl text-blue-400 font-bold">ASSIGNMENT</h3>
                            <p className="text-gray-300 mt-2">Stores a value</p>
                        </div>
                        <Terminal variant="default" title="Python">
                            <CodeLine>x = 10  # Store 10 in x</CodeLine>
                            <CodeLine>name = "Alex"  # Store "Alex"</CodeLine>
                            <CodeLine>&nbsp;</CodeLine>
                            <CodeLine className="text-gray-500"># Creates or updates variable</CodeLine>
                        </Terminal>
                    </div>

                    <div className="p-8 rounded-xl bg-[#53d22d]/20 border-2 border-[#53d22d]/50">
                        <div className="text-center mb-6">
                            <div className="text-6xl font-bold text-[#53d22d] mb-4">==</div>
                            <h3 className="text-2xl text-[#53d22d] font-bold">COMPARISON</h3>
                            <p className="text-gray-300 mt-2">Checks equality</p>
                        </div>
                        <Terminal variant="success" title="Python">
                            <CodeLine>x == 10  # Is x equal to 10?</CodeLine>
                            <CodeLine>name == "Alex"  # True or False</CodeLine>
                            <CodeLine>&nbsp;</CodeLine>
                            <CodeLine className="text-gray-500"># Returns boolean result</CodeLine>
                        </Terminal>
                    </div>
                </div>

                <div className="p-8 rounded-xl bg-slate-800/50 border-2 border-cyan-500/30">
                    <h3 className="text-cyan-400 font-bold text-2xl mb-6 text-center">SIDE-BY-SIDE COMPARISON:</h3>
                    <Terminal variant="default" title="Python">
                        <CodeLine>password = "secret"      # Assignment: store "secret"</CodeLine>
                        <CodeLine>is_correct = password == "secret"  # Comparison: check if equal</CodeLine>
                        <CodeLine>&nbsp;</CodeLine>
                        <CodeLine>print(password)          # Output: secret</CodeLine>
                        <CodeLine>print(is_correct)        # Output: True</CodeLine>
                    </Terminal>
                </div>

                <div className="mt-8 p-6 rounded-xl bg-red-500/10 border-2 border-red-500/30">
                    <p className="text-xl text-gray-300 text-center">
                        ❌ <span className="text-red-400 font-bold">Common Mistake:</span> Using
                        <code className="text-red-400 bg-red-400/10 px-2 py-1 rounded mx-2">=</code> when you mean
                        <code className="text-[#53d22d] bg-[#53d22d]/10 px-2 py-1 rounded">==</code>
                    </p>
                </div>
            </div>
        </div>
    );
}

// Slide 12: Practical Examples
export function Lesson04Slide12() {
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
                    <Rocket className="w-8 h-8 text-[#53d22d]" />
                    <h1 className="text-5xl font-bold text-[#53d22d]">PRACTICAL EXAMPLES</h1>
                </div>

                <div className="space-y-8">
                    <div className="p-6 rounded-xl bg-cyan-500/10 border border-cyan-500/30">
                        <h3 className="text-cyan-400 font-bold text-2xl mb-4">1. Simple Calculator</h3>
                        <Terminal variant="success" title="Chronos Calculator">
                            <CodeLine>num1 = int(input("First number: "))</CodeLine>
                            <CodeLine>num2 = int(input("Second number: "))</CodeLine>
                            <CodeLine>result = num1 + num2</CodeLine>
                            <CodeLine>print(f"{'{num1}'} + {'{num2}'} = {'{result}'}")</CodeLine>
                            <CodeLine>&nbsp;</CodeLine>
                            <CodeLine className="text-gray-500"># Input: 5, 3</CodeLine>
                            <CodeLine output>5 + 3 = 8</CodeLine>
                        </Terminal>
                    </div>

                    <div className="p-6 rounded-xl bg-[#53d22d]/10 border border-[#53d22d]/30">
                        <h3 className="text-[#53d22d] font-bold text-2xl mb-4">2. Even/Odd Checker</h3>
                        <Terminal variant="success" title="Chronos Logic Gate">
                            <CodeLine>number = int(input("Enter a number: "))</CodeLine>
                            <CodeLine>is_even = number % 2 == 0</CodeLine>
                            <CodeLine>print(f"Is {'{number}'} even? {'{is_even}'}")</CodeLine>
                            <CodeLine>&nbsp;</CodeLine>
                            <CodeLine className="text-gray-500"># Input: 8</CodeLine>
                            <CodeLine output>Is 8 even? True</CodeLine>
                        </Terminal>
                    </div>

                    <div className="p-6 rounded-xl bg-blue-500/10 border border-blue-500/30">
                        <h3 className="text-blue-400 font-bold text-2xl mb-4">3. Temperature Converter</h3>
                        <Terminal variant="success" title="Chronos Converter">
                            <CodeLine>celsius = int(input("Temperature in Celsius: "))</CodeLine>
                            <CodeLine>fahrenheit = (celsius * 9/5) + 32</CodeLine>
                            <CodeLine>print(f"{'{celsius}'}°C = {'{fahrenheit}'}°F")</CodeLine>
                            <CodeLine>&nbsp;</CodeLine>
                            <CodeLine className="text-gray-500"># Input: 0</CodeLine>
                            <CodeLine output>0°C = 32.0°F</CodeLine>
                        </Terminal>
                    </div>

                    <div className="p-6 rounded-xl bg-purple-500/10 border border-purple-500/30">
                        <h3 className="text-purple-400 font-bold text-2xl mb-4">4. Name Formatter</h3>
                        <Terminal variant="success" title="Chronos Identity System">
                            <CodeLine>first = input("First name: ")</CodeLine>
                            <CodeLine>last = input("Last name: ")</CodeLine>
                            <CodeLine>full_name = first + " " + last</CodeLine>
                            <CodeLine>print(f"Agent codename: {'{full_name.upper()}'}")</CodeLine>
                            <CodeLine>&nbsp;</CodeLine>
                            <CodeLine className="text-gray-500"># Input: Alex, Chen</CodeLine>
                            <CodeLine output>Agent codename: ALEX CHEN</CodeLine>
                        </Terminal>
                    </div>
                </div>
            </div>
        </div>
    );
}
