/**
 * Lesson 02 - Slides 21-24: Variables in Action (Part 2)
 * Multiple Variables, Swapping, Concatenation, F-Strings Preview
 */

import React from 'react';
import { Users, RefreshCcw, Link, Sparkles } from 'lucide-react';
import { Terminal, CodeLine } from './Terminal';

// Slide 21: Multiple Variables
export function Lesson02Slide21() {
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
                    <Users className="w-8 h-8 text-[#53d22d]" />
                    <h1 className="text-5xl font-bold text-[#53d22d]">MULTIPLE VARIABLES</h1>
                </div>

                <p className="text-2xl text-gray-300 mb-12">
                    You can create <span className="text-cyan-400 font-bold">as many variables</span> as you need:
                </p>

                <Terminal variant="success" title="Python Console">
                    <CodeLine prompt=">>>">player_name = "Nova"</CodeLine>
                    <CodeLine prompt=">>>">player_health = 100</CodeLine>
                    <CodeLine prompt=">>>">player_level = 5</CodeLine>
                    <CodeLine prompt=">>>">player_xp = 2500</CodeLine>
                    <CodeLine prompt=">>>">is_alive = True</CodeLine>
                    <CodeLine className="text-gray-500"># All stored in memory!</CodeLine>
                    <CodeLine prompt=">>>">&nbsp;</CodeLine>
                    <CodeLine prompt=">>>">print(player_name, "- Level", player_level)</CodeLine>
                    <CodeLine output>Nova - Level 5</CodeLine>
                </Terminal>

                <div className="mt-12 grid grid-cols-2 gap-6">
                    <div className="p-6 rounded-xl bg-cyan-500/10 border border-cyan-500/30">
                        <h3 className="text-cyan-400 font-bold text-xl mb-3">✅ GOOD PRACTICE</h3>
                        <p className="text-gray-300">Group related variables with similar prefixes: <code className="text-[#53d22d]">player_</code>, <code className="text-[#53d22d]">enemy_</code></p>
                    </div>
                    <div className="p-6 rounded-xl bg-[#53d22d]/10 border border-[#53d22d]/30">
                        <h3 className="text-[#53d22d] font-bold text-xl mb-3">💡 TIP</h3>
                        <p className="text-gray-300">Each variable is independent — changing one doesn't affect others!</p>
                    </div>
                </div>

                <div className="mt-12">
                    <h3 className="text-cyan-400 font-bold text-xl mb-4">USING MULTIPLE VARIABLES TOGETHER:</h3>
                    <Terminal variant="default" title="Python">
                        <CodeLine>width = 10</CodeLine>
                        <CodeLine>height = 5</CodeLine>
                        <CodeLine>area = width * height</CodeLine>
                        <CodeLine>print("Area:", area)  # Output: Area: 50</CodeLine>
                    </Terminal>
                </div>
            </div>
        </div>
    );
}

// Slide 22: Variable Swapping
export function Lesson02Slide22() {
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
                    <RefreshCcw className="w-8 h-8 text-cyan-400" />
                    <h1 className="text-5xl font-bold text-cyan-400">VARIABLE SWAPPING</h1>
                </div>

                <p className="text-2xl text-gray-300 mb-12">
                    A classic programming trick: <span className="text-[#53d22d] font-bold">swapping</span> the values of two variables!
                </p>

                <div className="mb-12 p-6 rounded-xl bg-yellow-500/10 border-2 border-yellow-500/30">
                    <h3 className="text-yellow-400 font-bold text-xl mb-4">THE PROBLEM:</h3>
                    <Terminal variant="error" title="Python - WRONG WAY">
                        <CodeLine>a = 10</CodeLine>
                        <CodeLine>b = 20</CodeLine>
                        <CodeLine>a = b  # a is now 20</CodeLine>
                        <CodeLine>b = a  # b is now 20 (we lost 10!)</CodeLine>
                        <CodeLine className="text-red-400"># Both are 20 — swap failed!</CodeLine>
                    </Terminal>
                </div>

                <div className="mb-12 p-6 rounded-xl bg-[#53d22d]/10 border-2 border-[#53d22d]/30">
                    <h3 className="text-[#53d22d] font-bold text-xl mb-4">THE SOLUTION: Use a temporary variable</h3>
                    <Terminal variant="success" title="Python - CORRECT WAY">
                        <CodeLine>a = 10</CodeLine>
                        <CodeLine>b = 20</CodeLine>
                        <CodeLine className="text-gray-500"># Save a's value before overwriting</CodeLine>
                        <CodeLine>temp = a  # temp = 10</CodeLine>
                        <CodeLine>a = b     # a = 20</CodeLine>
                        <CodeLine>b = temp  # b = 10</CodeLine>
                        <CodeLine className="text-[#53d22d]"># ✓ Swapped! a=20, b=10</CodeLine>
                    </Terminal>
                </div>

                <div className="p-6 rounded-xl bg-cyan-500/10 border border-cyan-500/30">
                    <h3 className="text-cyan-400 font-bold text-xl mb-3">💡 PYTHON SHORTCUT</h3>
                    <Terminal variant="default" title="Python - ELEGANT WAY">
                        <CodeLine>a, b = 10, 20</CodeLine>
                        <CodeLine>a, b = b, a  # Swap in one line!</CodeLine>
                        <CodeLine className="text-[#53d22d]"># ✓ a=20, b=10</CodeLine>
                    </Terminal>
                </div>
            </div>
        </div>
    );
}

// Slide 23: String Concatenation
export function Lesson02Slide23() {
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
                    <Link className="w-8 h-8 text-[#53d22d]" />
                    <h1 className="text-5xl font-bold text-[#53d22d]">STRING CONCATENATION</h1>
                </div>

                <p className="text-2xl text-gray-300 mb-12">
                    You can <span className="text-cyan-400 font-bold">combine</span> (concatenate) strings using the <code className="text-[#53d22d] bg-[#53d22d]/10 px-2 py-1 rounded">+</code> operator:
                </p>

                <Terminal variant="success" title="Python Console">
                    <CodeLine prompt=">>>">first_name = "Alex"</CodeLine>
                    <CodeLine prompt=">>>">last_name = "Nova"</CodeLine>
                    <CodeLine prompt=">>>">&nbsp;</CodeLine>
                    <CodeLine prompt=">>>">full_name = first_name + " " + last_name</CodeLine>
                    <CodeLine prompt=">>>">print(full_name)</CodeLine>
                    <CodeLine output>Alex Nova</CodeLine>
                </Terminal>

                <div className="mt-12 grid grid-cols-2 gap-6">
                    <div>
                        <h3 className="text-cyan-400 font-bold text-xl mb-4">BUILDING MESSAGES:</h3>
                        <Terminal variant="default" title="Python">
                            <CodeLine>agent = "Cipher"</CodeLine>
                            <CodeLine>status = "Active"</CodeLine>
                            <CodeLine>message = "Agent " + agent + " is " + status</CodeLine>
                            <CodeLine>print(message)</CodeLine>
                            <CodeLine output className="text-[#53d22d]">Agent Cipher is Active</CodeLine>
                        </Terminal>
                    </div>

                    <div>
                        <h3 className="text-yellow-400 font-bold text-xl mb-4">⚠️ WATCH OUT:</h3>
                        <Terminal variant="error" title="Python">
                            <CodeLine>score = 100</CodeLine>
                            <CodeLine>message = "Score: " + score</CodeLine>
                            <CodeLine output className="text-red-400">TypeError: can only concatenate str to str</CodeLine>
                            <CodeLine className="text-gray-500"># Can't mix strings and numbers!</CodeLine>
                        </Terminal>
                    </div>
                </div>

                <div className="mt-12 p-6 rounded-xl bg-[#53d22d]/10 border-2 border-[#53d22d]/30">
                    <h3 className="text-[#53d22d] font-bold text-xl mb-4">✅ FIX: Convert number to string</h3>
                    <Terminal variant="success" title="Python">
                        <CodeLine>score = 100</CodeLine>
                        <CodeLine>message = "Score: " + str(score)</CodeLine>
                        <CodeLine>print(message)</CodeLine>
                        <CodeLine output className="text-[#53d22d]">Score: 100</CodeLine>
                    </Terminal>
                </div>
            </div>
        </div>
    );
}

// Slide 24: F-Strings Preview
export function Lesson02Slide24() {
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
                    <Sparkles className="w-8 h-8 text-cyan-400" />
                    <h1 className="text-5xl font-bold text-cyan-400">F-STRINGS PREVIEW</h1>
                </div>

                <p className="text-2xl text-gray-300 mb-12">
                    There's a <span className="text-[#53d22d] font-bold">better way</span> to combine variables and text: <span className="text-cyan-400 font-bold">f-strings</span>!
                </p>

                <div className="grid grid-cols-2 gap-8 mb-12">
                    <div>
                        <h3 className="text-yellow-400 font-bold text-xl mb-4">😓 OLD WAY (Concatenation)</h3>
                        <Terminal variant="default" title="Python">
                            <CodeLine>name = "Nova"</CodeLine>
                            <CodeLine>level = 10</CodeLine>
                            <CodeLine>message = "Agent " + name + " is level " + str(level)</CodeLine>
                            <CodeLine className="text-gray-500"># Messy and error-prone!</CodeLine>
                        </Terminal>
                    </div>

                    <div>
                        <h3 className="text-[#53d22d] font-bold text-xl mb-4">😎 NEW WAY (F-Strings)</h3>
                        <Terminal variant="success" title="Python">
                            <CodeLine>name = "Nova"</CodeLine>
                            <CodeLine>level = 10</CodeLine>
                            <CodeLine>message = f"Agent {'{name}'} is level {'{level}'}"</CodeLine>
                            <CodeLine className="text-[#53d22d]"># Clean and simple!</CodeLine>
                        </Terminal>
                    </div>
                </div>

                <div className="mb-12 p-8 rounded-xl bg-cyan-500/10 border-2 border-cyan-500/30">
                    <h3 className="text-cyan-400 font-bold text-2xl mb-4">HOW IT WORKS:</h3>
                    <div className="space-y-4 text-gray-300 text-lg">
                        <p>1. Put an <code className="text-[#53d22d] bg-[#53d22d]/10 px-2 py-1 rounded">f</code> before the opening quote</p>
                        <p>2. Wrap variable names in curly braces: <code className="text-cyan-400 bg-cyan-400/10 px-2 py-1 rounded">{'{variable}'}</code></p>
                        <p>3. Python automatically inserts the values!</p>
                    </div>
                </div>

                <Terminal variant="success" title="More F-String Examples">
                    <CodeLine>score = 1500</CodeLine>
                    <CodeLine>rank = "Gold"</CodeLine>
                    <CodeLine>print(f"Your score is {'{score}'} ({'{rank}'} rank)")</CodeLine>
                    <CodeLine output>Your score is 1500 (Gold rank)</CodeLine>
                    <CodeLine className="text-gray-500"># No str() needed — f-strings handle it!</CodeLine>
                </Terminal>

                <div className="mt-12 p-6 rounded-xl bg-yellow-500/10 border-2 border-yellow-500/30 text-center">
                    <p className="text-gray-300 text-xl">
                        📚 We'll learn f-strings in detail in <span className="text-cyan-400 font-bold">Lesson 04</span>.
                        For now, just know they exist!
                    </p>
                </div>
            </div>
        </div>
    );
}
