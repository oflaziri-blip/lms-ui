/**
 * Lesson 05 - Slides 09-14: Advanced Examples & Review
 * More Practical Examples, Best Practices, Quick Review
 */

import React from 'react';
import { Rocket, Shield, BookOpen, CheckCircle2, Zap, Award } from 'lucide-react';
import { Terminal, CodeLine } from './Terminal';

// Slide 09: Multiple Conditions Example
export function Lesson05Slide09() {
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
                    <Rocket className="w-8 h-8 text-cyan-400" />
                    <h1 className="text-5xl font-bold text-cyan-400">EXAMPLE: AGE CLASSIFIER</h1>
                </div>

                <Terminal variant="success" title="Chronos Age Classification System">
                    <CodeLine>age = int(input("Enter age: "))</CodeLine>
                    <CodeLine>&nbsp;</CodeLine>
                    <CodeLine>if age &lt; 0:</CodeLine>
                    <CodeLine>    print("Invalid age")</CodeLine>
                    <CodeLine>elif age &lt; 13:</CodeLine>
                    <CodeLine>    print("Child")</CodeLine>
                    <CodeLine>elif age &lt; 20:</CodeLine>
                    <CodeLine>    print("Teenager")</CodeLine>
                    <CodeLine>elif age &lt; 65:</CodeLine>
                    <CodeLine>    print("Adult")</CodeLine>
                    <CodeLine>else:</CodeLine>
                    <CodeLine>    print("Senior")</CodeLine>
                </Terminal>

                <div className="mt-12 grid grid-cols-2 gap-6">
                    <div className="p-6 rounded-xl bg-cyan-500/10 border border-cyan-500/30">
                        <h3 className="text-cyan-400 font-bold text-xl mb-4">TEST CASES:</h3>
                        <div className="space-y-2 text-gray-300 font-mono">
                            <p>age = -5 → Invalid age</p>
                            <p>age = 10 → Child</p>
                            <p>age = 16 → Teenager</p>
                            <p>age = 30 → Adult</p>
                            <p>age = 70 → Senior</p>
                        </div>
                    </div>

                    <div className="p-6 rounded-xl bg-[#53d22d]/10 border border-[#53d22d]/30">
                        <h3 className="text-[#53d22d] font-bold text-xl mb-4">KEY POINTS:</h3>
                        <ul className="text-gray-300 space-y-2">
                            <li>• Checks in order from top to bottom</li>
                            <li>• First True condition wins</li>
                            <li>• Use ranges with &lt; or &lt;=</li>
                            <li>• else catches everything else</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Slide 10: Number Sign Checker
export function Lesson05Slide10() {
    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-blue-950 via-slate-950 to-cyan-950 text-white p-12 relative overflow-hidden">
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'linear-gradient(#53d22d 1px, transparent 1px), linear-gradient(90deg, #53d22d 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }} />
            </div>

            <div className="relative z-10 max-w-5xl mx-auto">
                <h1 className="text-5xl font-bold text-[#53d22d] mb-8">EXAMPLE: NUMBER SIGN CHECKER</h1>

                <Terminal variant="success" title="Chronos Number Analysis">
                    <CodeLine>number = int(input("Enter a number: "))</CodeLine>
                    <CodeLine>&nbsp;</CodeLine>
                    <CodeLine>if number &gt; 0:</CodeLine>
                    <CodeLine>    print("Positive")</CodeLine>
                    <CodeLine>elif number &lt; 0:</CodeLine>
                    <CodeLine>    print("Negative")</CodeLine>
                    <CodeLine>else:</CodeLine>
                    <CodeLine>    print("Zero")</CodeLine>
                    <CodeLine>&nbsp;</CodeLine>
                    <CodeLine className="text-gray-500"># Input: 42</CodeLine>
                    <CodeLine output>Positive</CodeLine>
                    <CodeLine>&nbsp;</CodeLine>
                    <CodeLine className="text-gray-500"># Input: -15</CodeLine>
                    <CodeLine output>Negative</CodeLine>
                    <CodeLine>&nbsp;</CodeLine>
                    <CodeLine className="text-gray-500"># Input: 0</CodeLine>
                    <CodeLine output>Zero</CodeLine>
                </Terminal>

                <div className="mt-12 p-8 rounded-xl bg-cyan-500/10 border-2 border-cyan-500/30">
                    <h3 className="text-cyan-400 font-bold text-2xl mb-6">LOGIC BREAKDOWN:</h3>
                    <div className="space-y-4 text-gray-300 text-lg">
                        <div className="flex items-start gap-3">
                            <span className="text-[#53d22d]">1.</span>
                            <p>If number &gt; 0 → It's positive</p>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="text-[#53d22d]">2.</span>
                            <p>Else if number &lt; 0 → It's negative</p>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="text-[#53d22d]">3.</span>
                            <p>Else → It must be zero (only option left)</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Slide 11: Best Practices
export function Lesson05Slide11() {
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
                    <Award className="w-8 h-8 text-[#53d22d]" />
                    <h1 className="text-5xl font-bold text-[#53d22d]">BEST PRACTICES</h1>
                </div>

                <div className="space-y-6">
                    <div className="p-6 rounded-xl bg-[#53d22d]/10 border-l-4 border-[#53d22d]">
                        <h3 className="text-[#53d22d] font-bold text-xl mb-3">1. Order Matters with Ranges</h3>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <p className="text-gray-400 mb-2">✅ CORRECT:</p>
                                <Terminal variant="success" title="Python">
                                    <CodeLine>if score &gt;= 90:</CodeLine>
                                    <CodeLine>    grade = "A"</CodeLine>
                                    <CodeLine>elif score &gt;= 80:</CodeLine>
                                    <CodeLine>    grade = "B"</CodeLine>
                                </Terminal>
                            </div>
                            <div>
                                <p className="text-gray-400 mb-2">❌ WRONG:</p>
                                <Terminal variant="error" title="Python">
                                    <CodeLine>if score &gt;= 80:</CodeLine>
                                    <CodeLine>    grade = "B"</CodeLine>
                                    <CodeLine>elif score &gt;= 90:</CodeLine>
                                    <CodeLine>    grade = "A"  # Never reached!</CodeLine>
                                </Terminal>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 rounded-xl bg-cyan-500/10 border-l-4 border-cyan-500">
                        <h3 className="text-cyan-400 font-bold text-xl mb-3">2. Use Meaningful Conditions</h3>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <p className="text-gray-400 mb-2">❌ Unclear:</p>
                                <code className="text-red-400">if x == 1:</code>
                            </div>
                            <div>
                                <p className="text-gray-400 mb-2">✅ Clear:</p>
                                <code className="text-[#53d22d]">if is_admin:</code>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 rounded-xl bg-blue-500/10 border-l-4 border-blue-500">
                        <h3 className="text-blue-400 font-bold text-xl mb-3">3. Keep It Simple</h3>
                        <p className="text-gray-300">
                            Don't nest too deeply. If you have many conditions, consider breaking into functions.
                        </p>
                    </div>

                    <div className="p-6 rounded-xl bg-purple-500/10 border-l-4 border-purple-500">
                        <h3 className="text-purple-400 font-bold text-xl mb-3">4. Always Include else for Safety</h3>
                        <p className="text-gray-300">
                            Even if you think you've covered all cases, an else block catches unexpected inputs.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Slide 12: Quick Review Part 1
export function Lesson05Slide12() {
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
                    <BookOpen className="w-8 h-8 text-cyan-400" />
                    <h1 className="text-5xl font-bold text-cyan-400">QUICK REVIEW - PART 1</h1>
                </div>

                <div className="space-y-6">
                    <div className="p-6 rounded-xl bg-cyan-500/10 border-l-4 border-cyan-500">
                        <h3 className="text-cyan-400 font-bold text-xl mb-2">if statement</h3>
                        <p className="text-gray-300">Executes code only if condition is True</p>
                        <code className="text-[#53d22d] block mt-2">if x &gt; 5:</code>
                    </div>

                    <div className="p-6 rounded-xl bg-[#53d22d]/10 border-l-4 border-[#53d22d]">
                        <h3 className="text-[#53d22d] font-bold text-xl mb-2">else statement</h3>
                        <p className="text-gray-300">Fallback when if condition is False</p>
                        <code className="text-cyan-400 block mt-2">else:</code>
                    </div>

                    <div className="p-6 rounded-xl bg-blue-500/10 border-l-4 border-blue-500">
                        <h3 className="text-blue-400 font-bold text-xl mb-2">elif statement</h3>
                        <p className="text-gray-300">Check additional conditions</p>
                        <code className="text-cyan-400 block mt-2">elif x == 10:</code>
                    </div>

                    <div className="p-6 rounded-xl bg-purple-500/10 border-l-4 border-purple-500">
                        <h3 className="text-purple-400 font-bold text-xl mb-2">Indentation</h3>
                        <p className="text-gray-300">4 spaces to define code blocks</p>
                        <code className="text-yellow-400 block mt-2">    print("Indented")</code>
                    </div>

                    <div className="p-6 rounded-xl bg-yellow-500/10 border-l-4 border-yellow-500">
                        <h3 className="text-yellow-400 font-bold text-xl mb-2">Colon required</h3>
                        <p className="text-gray-300">Every if/elif/else must end with :</p>
                        <code className="text-cyan-400 block mt-2">if condition:</code>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Slide 13: Quick Review Part 2
export function Lesson05Slide13() {
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
                    <BookOpen className="w-8 h-8 text-[#53d22d]" />
                    <h1 className="text-5xl font-bold text-[#53d22d]">QUICK REVIEW - PART 2</h1>
                </div>

                <div className="space-y-6">
                    <div className="p-6 rounded-xl bg-cyan-500/10 border border-cyan-500/30">
                        <h3 className="text-cyan-400 font-bold text-xl mb-3">EXECUTION FLOW:</h3>
                        <ul className="text-gray-300 space-y-2 text-lg">
                            <li>• Only ONE block executes (the first True condition)</li>
                            <li>• Conditions are checked top to bottom</li>
                            <li>• Once a True condition is found, rest are skipped</li>
                        </ul>
                    </div>

                    <div className="p-6 rounded-xl bg-[#53d22d]/10 border border-[#53d22d]/30">
                        <h3 className="text-[#53d22d] font-bold text-xl mb-3">COMMON PATTERNS:</h3>
                        <div className="space-y-3 text-gray-300 font-mono">
                            <p>if condition: → Single path</p>
                            <p>if...else: → Two paths</p>
                            <p>if...elif...else: → Multiple paths</p>
                        </div>
                    </div>

                    <div className="p-6 rounded-xl bg-blue-500/10 border border-blue-500/30">
                        <h3 className="text-blue-400 font-bold text-xl mb-3">REMEMBER:</h3>
                        <ul className="text-gray-300 space-y-2 text-lg">
                            <li>• Use == for comparison (not =)</li>
                            <li>• Indentation defines scope</li>
                            <li>• elif needs a condition, else doesn't</li>
                            <li>• Can have multiple elif, but only one else</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Slide 14: Key Takeaways
export function Lesson05Slide14() {
    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-cyan-950 via-blue-950 to-slate-950 text-white p-12 relative overflow-hidden">
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'linear-gradient(cyan 1px, transparent 1px), linear-gradient(90deg, cyan 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }} />
            </div>

            <div className="relative z-10 max-w-5xl mx-auto">
                <h1 className="text-6xl font-bold text-[#53d22d] mb-12 text-center">KEY TAKEAWAYS</h1>

                <div className="space-y-6">
                    {[
                        { icon: "🔀", text: "if/elif/else create decision branches in your code" },
                        { icon: "1️⃣", text: "Only the FIRST True condition executes" },
                        { icon: "📏", text: "Indentation (4 spaces) defines code blocks" },
                        { icon: ":", text: "Always end if/elif/else lines with a colon" },
                        { icon: "==", text: "Use == for comparison, = for assignment" },
                        { icon: "⬇️", text: "Conditions are checked from top to bottom" },
                        { icon: "🛡️", text: "else provides a safety net for unexpected cases" },
                        { icon: "🎯", text: "Order matters when using ranges" }
                    ].map((item, i) => (
                        <div key={i} className="flex items-center gap-4 p-6 rounded-xl bg-cyan-500/10 border border-cyan-500/30 hover:bg-cyan-500/20 transition-colors">
                            <div className="text-4xl">{item.icon}</div>
                            <p className="text-2xl text-gray-200">{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
