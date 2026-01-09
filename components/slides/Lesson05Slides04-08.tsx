/**
 * Lesson 05 - Slides 04-08: Core Concepts
 * else, elif, Indentation, Common Errors
 */

import React from 'react';
import { ArrowRight, GitMerge, Indent, AlertTriangle } from 'lucide-react';
import { Terminal, CodeLine } from './Terminal';

// Slide 04: The else Statement
export function Lesson05Slide04() {
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
                    <ArrowRight className="w-8 h-8 text-cyan-400" />
                    <h1 className="text-5xl font-bold text-cyan-400">THE ELSE STATEMENT</h1>
                </div>

                <p className="text-2xl text-gray-300 mb-12">
                    <code className="text-[#53d22d] bg-[#53d22d]/10 px-3 py-1 rounded">else</code> provides a
                    <span className="text-cyan-400 font-bold"> fallback</span> when the if condition is False:
                </p>

                <Terminal variant="success" title="Chronos Access Control">
                    <CodeLine>password = input("Enter password: ")</CodeLine>
                    <CodeLine>&nbsp;</CodeLine>
                    <CodeLine>if password == "chronos":</CodeLine>
                    <CodeLine>    print("Access Granted")</CodeLine>
                    <CodeLine>else:</CodeLine>
                    <CodeLine>    print("Access Denied")</CodeLine>
                    <CodeLine>&nbsp;</CodeLine>
                    <CodeLine className="text-gray-500"># If password is "chronos":</CodeLine>
                    <CodeLine output>Access Granted</CodeLine>
                    <CodeLine>&nbsp;</CodeLine>
                    <CodeLine className="text-gray-500"># If password is anything else:</CodeLine>
                    <CodeLine output>Access Denied</CodeLine>
                </Terminal>

                <div className="mt-12 grid grid-cols-2 gap-6">
                    <div className="p-6 rounded-xl bg-[#53d22d]/10 border border-[#53d22d]/30">
                        <h3 className="text-[#53d22d] font-bold text-xl mb-3">✅ HOW IT WORKS:</h3>
                        <ul className="text-gray-300 space-y-2">
                            <li>• If condition is True → run if block</li>
                            <li>• If condition is False → run else block</li>
                            <li>• Only ONE block executes</li>
                        </ul>
                    </div>

                    <div className="p-6 rounded-xl bg-cyan-500/10 border border-cyan-500/30">
                        <h3 className="text-cyan-400 font-bold text-xl mb-3">📝 SYNTAX:</h3>
                        <ul className="text-gray-300 space-y-2">
                            <li>• Type <code className="text-cyan-400">else:</code> (with colon)</li>
                            <li>• Indent the code block</li>
                            <li>• No condition needed!</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Slide 05: The elif Statement
export function Lesson05Slide05() {
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
                    <GitMerge className="w-8 h-8 text-[#53d22d]" />
                    <h1 className="text-5xl font-bold text-[#53d22d]">THE ELIF STATEMENT</h1>
                </div>

                <p className="text-2xl text-gray-300 mb-12">
                    <code className="text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded">elif</code> (else if) lets you check
                    <span className="text-[#53d22d] font-bold"> multiple conditions</span>:
                </p>

                <Terminal variant="success" title="Chronos Traffic System">
                    <CodeLine>color = input("Traffic light color: ")</CodeLine>
                    <CodeLine>&nbsp;</CodeLine>
                    <CodeLine>if color == "red":</CodeLine>
                    <CodeLine>    print("Stop")</CodeLine>
                    <CodeLine>elif color == "yellow":</CodeLine>
                    <CodeLine>    print("Caution")</CodeLine>
                    <CodeLine>elif color == "green":</CodeLine>
                    <CodeLine>    print("Go")</CodeLine>
                    <CodeLine>else:</CodeLine>
                    <CodeLine>    print("Invalid color")</CodeLine>
                </Terminal>

                <div className="mt-12 p-8 rounded-xl bg-cyan-500/10 border-2 border-cyan-500/30">
                    <h3 className="text-cyan-400 font-bold text-2xl mb-6">EXECUTION FLOW:</h3>
                    <div className="space-y-3 text-gray-300 text-lg">
                        <div className="flex items-start gap-3">
                            <span className="text-[#53d22d]">1.</span>
                            <p>Check first <code className="text-cyan-400">if</code> condition</p>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="text-[#53d22d]">2.</span>
                            <p>If False, check first <code className="text-cyan-400">elif</code></p>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="text-[#53d22d]">3.</span>
                            <p>If False, check next <code className="text-cyan-400">elif</code></p>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="text-[#53d22d]">4.</span>
                            <p>If all False, run <code className="text-cyan-400">else</code> (if present)</p>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="text-yellow-400">⚠️</span>
                            <p className="text-yellow-400 font-bold">Only the FIRST True condition executes!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Slide 06: Indentation Rules
export function Lesson05Slide06() {
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
                    <Indent className="w-8 h-8 text-cyan-400" />
                    <h1 className="text-5xl font-bold text-cyan-400">INDENTATION RULES</h1>
                </div>

                <div className="mb-12 p-8 rounded-xl bg-yellow-500/10 border-2 border-yellow-500/30">
                    <p className="text-3xl text-gray-200 leading-relaxed">
                        ⚠️ <span className="text-yellow-400 font-bold">CRITICAL:</span> Python uses
                        <span className="text-[#53d22d] font-bold"> indentation</span> to define code blocks!
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-6 mb-12">
                    <div className="p-6 rounded-xl bg-[#53d22d]/10 border-2 border-[#53d22d]/50">
                        <h3 className="text-[#53d22d] font-bold text-2xl mb-4">✅ CORRECT:</h3>
                        <Terminal variant="success" title="Python">
                            <CodeLine>if age &gt;= 18:</CodeLine>
                            <CodeLine>    print("Adult")</CodeLine>
                            <CodeLine>    print("Can vote")</CodeLine>
                            <CodeLine>&nbsp;</CodeLine>
                            <CodeLine className="text-gray-500"># Both lines are indented</CodeLine>
                            <CodeLine className="text-gray-500"># Both are part of if block</CodeLine>
                        </Terminal>
                    </div>

                    <div className="p-6 rounded-xl bg-red-500/10 border-2 border-red-500/50">
                        <h3 className="text-red-400 font-bold text-2xl mb-4">❌ WRONG:</h3>
                        <Terminal variant="error" title="Python">
                            <CodeLine>if age &gt;= 18:</CodeLine>
                            <CodeLine>print("Adult")</CodeLine>
                            <CodeLine>&nbsp;</CodeLine>
                            <CodeLine output className="text-red-400">IndentationError: expected an indented block</CodeLine>
                        </Terminal>
                    </div>
                </div>

                <div className="p-8 rounded-xl bg-cyan-500/10 border-2 border-cyan-500/30">
                    <h3 className="text-cyan-400 font-bold text-2xl mb-6">INDENTATION RULES:</h3>
                    <div className="space-y-4 text-gray-300 text-lg">
                        <div className="flex items-start gap-3">
                            <span className="text-[#53d22d]">•</span>
                            <p>Use <span className="text-yellow-400 font-bold">4 spaces</span> for each indentation level (standard)</p>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="text-[#53d22d]">•</span>
                            <p>Be <span className="text-yellow-400 font-bold">consistent</span> - don't mix tabs and spaces</p>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="text-[#53d22d]">•</span>
                            <p>All code in the same block must have the <span className="text-yellow-400 font-bold">same indentation</span></p>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="text-[#53d22d]">•</span>
                            <p>Code at the original level means the block has ended</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Slide 07: Common Errors
export function Lesson05Slide07() {
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
                    <AlertTriangle className="w-8 h-8 text-red-400" />
                    <h1 className="text-5xl font-bold text-red-400">COMMON ERRORS</h1>
                </div>

                <div className="space-y-6">
                    <div className="p-6 rounded-xl bg-red-500/10 border-l-4 border-red-500">
                        <h3 className="text-red-400 font-bold text-xl mb-3">ERROR 1: Missing Colon</h3>
                        <Terminal variant="error" title="Python">
                            <CodeLine>if x &gt; 5  # Missing colon!</CodeLine>
                            <CodeLine>    print("Big")</CodeLine>
                            <CodeLine>&nbsp;</CodeLine>
                            <CodeLine output className="text-red-400">SyntaxError: invalid syntax</CodeLine>
                            <CodeLine>&nbsp;</CodeLine>
                            <CodeLine className="text-[#53d22d]"># Fix: if x &gt; 5:</CodeLine>
                        </Terminal>
                    </div>

                    <div className="p-6 rounded-xl bg-red-500/10 border-l-4 border-red-500">
                        <h3 className="text-red-400 font-bold text-xl mb-3">ERROR 2: No Indentation</h3>
                        <Terminal variant="error" title="Python">
                            <CodeLine>if x &gt; 5:</CodeLine>
                            <CodeLine>print("Big")  # Not indented!</CodeLine>
                            <CodeLine>&nbsp;</CodeLine>
                            <CodeLine output className="text-red-400">IndentationError: expected an indented block</CodeLine>
                            <CodeLine>&nbsp;</CodeLine>
                            <CodeLine className="text-[#53d22d]"># Fix: Add 4 spaces before print</CodeLine>
                        </Terminal>
                    </div>

                    <div className="p-6 rounded-xl bg-red-500/10 border-l-4 border-red-500">
                        <h3 className="text-red-400 font-bold text-xl mb-3">ERROR 3: Using = Instead of ==</h3>
                        <Terminal variant="error" title="Python">
                            <CodeLine>if x = 5:  # Assignment, not comparison!</CodeLine>
                            <CodeLine>    print("Five")</CodeLine>
                            <CodeLine>&nbsp;</CodeLine>
                            <CodeLine output className="text-red-400">SyntaxError: invalid syntax</CodeLine>
                            <CodeLine>&nbsp;</CodeLine>
                            <CodeLine className="text-[#53d22d]"># Fix: if x == 5:</CodeLine>
                        </Terminal>
                    </div>

                    <div className="p-6 rounded-xl bg-red-500/10 border-l-4 border-red-500">
                        <h3 className="text-red-400 font-bold text-xl mb-3">ERROR 4: elif Without if</h3>
                        <Terminal variant="error" title="Python">
                            <CodeLine>elif x &gt; 10:  # No if before this!</CodeLine>
                            <CodeLine>    print("Big")</CodeLine>
                            <CodeLine>&nbsp;</CodeLine>
                            <CodeLine output className="text-red-400">SyntaxError: invalid syntax</CodeLine>
                            <CodeLine>&nbsp;</CodeLine>
                            <CodeLine className="text-[#53d22d]"># Fix: Start with if, then elif</CodeLine>
                        </Terminal>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Slide 08: Practical Example
export function Lesson05Slide08() {
    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-blue-950 via-slate-950 to-cyan-950 text-white p-12 relative overflow-hidden">
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'linear-gradient(cyan 1px, transparent 1px), linear-gradient(90deg, cyan 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }} />
            </div>

            <div className="relative z-10 max-w-5xl mx-auto">
                <h1 className="text-5xl font-bold text-[#53d22d] mb-8">PRACTICAL EXAMPLE: GRADE SYSTEM</h1>

                <Terminal variant="success" title="Chronos Academy Grading">
                    <CodeLine>score = int(input("Enter your score: "))</CodeLine>
                    <CodeLine>&nbsp;</CodeLine>
                    <CodeLine>if score &gt;= 90:</CodeLine>
                    <CodeLine>    print("Grade: A - Elite Performance")</CodeLine>
                    <CodeLine>elif score &gt;= 80:</CodeLine>
                    <CodeLine>    print("Grade: B - Excellent Work")</CodeLine>
                    <CodeLine>elif score &gt;= 70:</CodeLine>
                    <CodeLine>    print("Grade: C - Good Job")</CodeLine>
                    <CodeLine>elif score &gt;= 60:</CodeLine>
                    <CodeLine>    print("Grade: D - Needs Improvement")</CodeLine>
                    <CodeLine>else:</CodeLine>
                    <CodeLine>    print("Grade: F - Reassignment Required")</CodeLine>
                    <CodeLine>&nbsp;</CodeLine>
                    <CodeLine className="text-gray-500"># Input: 85</CodeLine>
                    <CodeLine output>Grade: B - Excellent Work</CodeLine>
                </Terminal>

                <div className="mt-12 p-8 rounded-xl bg-cyan-500/10 border-2 border-cyan-500/30">
                    <h3 className="text-cyan-400 font-bold text-2xl mb-6">HOW IT WORKS:</h3>
                    <div className="space-y-3 text-gray-300 text-lg">
                        <p>1. Checks if score ≥ 90 → No (85 &lt; 90)</p>
                        <p>2. Checks if score ≥ 80 → <span className="text-[#53d22d] font-bold">Yes! (85 ≥ 80)</span></p>
                        <p>3. Prints "Grade: B" and <span className="text-yellow-400 font-bold">STOPS</span></p>
                        <p>4. Remaining elif/else blocks are <span className="text-gray-500">skipped</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
}
