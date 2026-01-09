/**
 * Lesson 05 - Slides 26-30: Final Review & Completion
 * Practice Tips, Common Patterns, Debugging, Final Review, Mission Complete
 */

import React from 'react';
import { Lightbulb, Code2, Bug, BookCheck, Trophy } from 'lucide-react';
import { Terminal, CodeLine } from './Terminal';

// Slide 26: Practice Tips
export function Lesson05Slide26() {
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
                    <Lightbulb className="w-8 h-8 text-[#53d22d]" />
                    <h1 className="text-5xl font-bold text-[#53d22d]">PRACTICE TIPS</h1>
                </div>

                <div className="space-y-6">
                    <div className="p-6 rounded-xl bg-[#53d22d]/10 border-l-4 border-[#53d22d]">
                        <h3 className="text-[#53d22d] font-bold text-2xl mb-3">1. Start Simple</h3>
                        <p className="text-gray-300 text-lg">
                            Begin with basic if/else before moving to complex elif chains.
                            Master one concept at a time.
                        </p>
                    </div>

                    <div className="p-6 rounded-xl bg-cyan-500/10 border-l-4 border-cyan-500">
                        <h3 className="text-cyan-400 font-bold text-2xl mb-3">2. Test All Paths</h3>
                        <p className="text-gray-300 text-lg">
                            Make sure to test EVERY possible path through your conditionals.
                            Try edge cases and unexpected inputs.
                        </p>
                    </div>

                    <div className="p-6 rounded-xl bg-blue-500/10 border-l-4 border-blue-500">
                        <h3 className="text-blue-400 font-bold text-2xl mb-3">3. Use Meaningful Variable Names</h3>
                        <Terminal variant="default" title="Python">
                            <CodeLine>// Bad</CodeLine>
                            <CodeLine>if x == 1:</CodeLine>
                            <CodeLine>&nbsp;</CodeLine>
                            <CodeLine>// Good</CodeLine>
                            <CodeLine>if user_role == "admin":</CodeLine>
                        </Terminal>
                    </div>

                    <div className="p-6 rounded-xl bg-purple-500/10 border-l-4 border-purple-500">
                        <h3 className="text-purple-400 font-bold text-2xl mb-3">4. Comment Complex Logic</h3>
                        <Terminal variant="default" title="Python">
                            <CodeLine># Check if user meets both age and citizenship requirements</CodeLine>
                            <CodeLine>if age &gt;= 18 and is_citizen:</CodeLine>
                            <CodeLine>    grant_access()</CodeLine>
                        </Terminal>
                    </div>

                    <div className="p-6 rounded-xl bg-yellow-500/10 border-l-4 border-yellow-500">
                        <h3 className="text-yellow-400 font-bold text-2xl mb-3">5. Watch Your Indentation!</h3>
                        <p className="text-gray-300 text-lg">
                            Python is STRICT about indentation. Use 4 spaces consistently.
                            Most errors come from incorrect indentation.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Slide 27: Common Patterns
export function Lesson05Slide27() {
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
                    <Code2 className="w-8 h-8 text-cyan-400" />
                    <h1 className="text-5xl font-bold text-cyan-400">COMMON PATTERNS</h1>
                </div>

                <div className="space-y-8">
                    <div className="p-6 rounded-xl bg-slate-800/50 border border-cyan-500/30">
                        <h3 className="text-cyan-400 font-bold text-xl mb-3">PATTERN 1: Range Checking</h3>
                        <Terminal variant="success" title="Python">
                            <CodeLine>if score &gt;= 90:</CodeLine>
                            <CodeLine>    grade = "A"</CodeLine>
                            <CodeLine>elif score &gt;= 80:</CodeLine>
                            <CodeLine>    grade = "B"</CodeLine>
                            <CodeLine>elif score &gt;= 70:</CodeLine>
                            <CodeLine>    grade = "C"</CodeLine>
                        </Terminal>
                    </div>

                    <div className="p-6 rounded-xl bg-slate-800/50 border border-cyan-500/30">
                        <h3 className="text-cyan-400 font-bold text-xl mb-3">PATTERN 2: Multiple Conditions</h3>
                        <Terminal variant="success" title="Python">
                            <CodeLine>if age &gt;= 18 and has_license:</CodeLine>
                            <CodeLine>    print("Can drive")</CodeLine>
                        </Terminal>
                    </div>

                    <div className="p-6 rounded-xl bg-slate-800/50 border border-cyan-500/30">
                        <h3 className="text-cyan-400 font-bold text-xl mb-3">PATTERN 3: Input Validation</h3>
                        <Terminal variant="success" title="Python">
                            <CodeLine>if value &lt; 0 or value &gt; 100:</CodeLine>
                            <CodeLine>    print("Invalid input")</CodeLine>
                            <CodeLine>else:</CodeLine>
                            <CodeLine>    process(value)</CodeLine>
                        </Terminal>
                    </div>

                    <div className="p-6 rounded-xl bg-slate-800/50 border border-cyan-500/30">
                        <h3 className="text-cyan-400 font-bold text-xl mb-3">PATTERN 4: Category Classification</h3>
                        <Terminal variant="success" title="Python">
                            <CodeLine>if category == "admin":</CodeLine>
                            <CodeLine>    full_access()</CodeLine>
                            <CodeLine>elif category == "user":</CodeLine>
                            <CodeLine>    limited_access()</CodeLine>
                            <CodeLine>else:</CodeLine>
                            <CodeLine>    guest_access()</CodeLine>
                        </Terminal>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Slide 28: Debugging Conditionals
export function Lesson05Slide28() {
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
                    <Bug className="w-8 h-8 text-red-400" />
                    <h1 className="text-5xl font-bold text-red-400">DEBUGGING CONDITIONALS</h1>
                </div>

                <div className="space-y-6">
                    <div className="p-6 rounded-xl bg-yellow-500/10 border-l-4 border-yellow-500">
                        <h3 className="text-yellow-400 font-bold text-xl mb-3">TIP 1: Add Print Statements</h3>
                        <Terminal variant="default" title="Python">
                            <CodeLine>score = 85</CodeLine>
                            <CodeLine>print(f"Score is: {'{score}'}")  # Debug line</CodeLine>
                            <CodeLine>&nbsp;</CodeLine>
                            <CodeLine>if score &gt;= 90:</CodeLine>
                            <CodeLine>    print("Entering A grade block")  # Debug line</CodeLine>
                            <CodeLine>    grade = "A"</CodeLine>
                        </Terminal>
                    </div>

                    <div className="p-6 rounded-xl bg-cyan-500/10 border-l-4 border-cyan-500">
                        <h3 className="text-cyan-400 font-bold text-xl mb-3">TIP 2: Check Your Conditions</h3>
                        <Terminal variant="default" title="Python">
                            <CodeLine>x = 5</CodeLine>
                            <CodeLine>print(x &gt; 10)  # Test the condition alone</CodeLine>
                            <CodeLine>print(x &lt; 10)  # See what returns True/False</CodeLine>
                        </Terminal>
                    </div>

                    <div className="p-6 rounded-xl bg-purple-500/10 border-l-4 border-purple-500">
                        <h3 className="text-purple-400 font-bold text-xl mb-3">TIP 3: Simplify Complex Conditions</h3>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <p className="text-gray-400 mb-2">❌ Hard to debug:</p>
                                <Terminal variant="error" title="Python">
                                    <CodeLine>if a and b or c and not d:</CodeLine>
                                </Terminal>
                            </div>
                            <div>
                                <p className="text-gray-400 mb-2">✅ Easier:</p>
                                <Terminal variant="success" title="Python">
                                    <CodeLine>cond1 = a and b</CodeLine>
                                    <CodeLine>cond2 = c and not d</CodeLine>
                                    <CodeLine>if cond1 or cond2:</CodeLine>
                                </Terminal>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 rounded-xl bg-[#53d22d]/10 border-l-4 border-[#53d22d]">
                        <h3 className="text-[#53d22d] font-bold text-xl mb-3">TIP 4: Test Edge Cases</h3>
                        <p className="text-gray-300 text-lg">
                            Always test: minimum values, maximum values, zero, negative numbers,
                            empty strings, and boundary conditions!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Slide 29: Final Review
export function Lesson05Slide29() {
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
                    <BookCheck className="w-8 h-8 text-[#53d22d]" />
                    <h1 className="text-6xl font-bold text-[#53d22d] mb-12 text-center">FINAL REVIEW</h1>
                </div>

                <div className="space-y-6">
                    {[
                        { title: "if statement", desc: "Executes code when condition is True", code: "if x > 5:" },
                        { title: "else statement", desc: "Fallback when if is False", code: "else:" },
                        { title: "elif statement", desc: "Check additional conditions", code: "elif x == 10:" },
                        { title: "Indentation", desc: "4 spaces to define code blocks", code: "    print('Hello')" },
                        { title: "Comparison", desc: "Use == not = for comparison", code: "if x == 5:" },
                        { title: "and operator", desc: "Both conditions must be True", code: "if a and b:" },
                        { title: "or operator", desc: "At least one must be True", code: "if a or b:" },
                        { title: "not operator", desc: "Reverses the condition", code: "if not x:" },
                        { title: "Nested if", desc: "if inside another if", code: "if a:\n    if b:" },
                        { title: "Order matters", desc: "Check ranges from high to low", code: "if x >= 90:" }
                    ].map((item, i) => (
                        <div key={i} className="flex items-center gap-6 p-6 rounded-xl bg-cyan-500/10 border border-cyan-500/30">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#53d22d]/20 flex items-center justify-center text-[#53d22d] font-bold text-xl">
                                {i + 1}
                            </div>
                            <div className="flex-1">
                                <h3 className="text-cyan-400 font-bold text-xl">{item.title}</h3>
                                <p className="text-gray-300">{item.desc}</p>
                            </div>
                            <code className="text-[#53d22d] bg-[#53d22d]/10 px-4 py-2 rounded font-mono whitespace-pre">
                                {item.code}
                            </code>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

// Slide 30: Mission Complete
export function Lesson05Slide30() {
    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-cyan-950 via-blue-950 to-slate-950 text-white flex items-center justify-center p-12 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'linear-gradient(cyan 1px, transparent 1px), linear-gradient(90deg, cyan 1px, transparent 1px)',
                    backgroundSize: '50px 50px'
                }} />
            </div>

            <div className="absolute inset-0 overflow-hidden">
                {[...Array(30)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-2 h-2 bg-[#53d22d] rounded-full animate-pulse"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 2}s`,
                            opacity: Math.random() * 0.7 + 0.3
                        }}
                    />
                ))}
            </div>

            <div className="relative z-10 text-center max-w-4xl mx-auto">
                <div className="flex justify-center mb-8">
                    <div className="w-32 h-32 rounded-full bg-[#53d22d]/20 flex items-center justify-center" style={{ boxShadow: '0 0 40px rgba(83,210,45,0.5)' }}>
                        <Trophy className="w-20 h-20 text-[#53d22d]" />
                    </div>
                </div>

                <h1 className="text-7xl font-bold bg-gradient-to-r from-cyan-400 via-[#53d22d] to-cyan-400 bg-clip-text text-transparent mb-6 animate-pulse">
                    MISSION COMPLETE!
                </h1>

                <h2 className="text-4xl font-light text-cyan-300 mb-12">
                    LESSON 05: DECISION PROTOCOLS
                </h2>

                <div className="mb-12 p-8 rounded-xl bg-cyan-500/10 border-2 border-cyan-500/30">
                    <h3 className="text-cyan-400 font-bold text-2xl mb-6">WHAT YOU MASTERED:</h3>
                    <div className="grid grid-cols-2 gap-4 text-left">
                        {[
                            'if/elif/else statements',
                            'Indentation rules',
                            'Comparison operators',
                            'Logical operators (and/or/not)',
                            'Nested conditionals',
                            'Complex decision logic',
                            'Input validation',
                            'Real-world applications'
                        ].map((skill, i) => (
                            <div key={i} className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-[#53d22d]/30 flex items-center justify-center flex-shrink-0 mt-1">
                                    <div className="w-3 h-3 rounded-full bg-[#53d22d]" />
                                </div>
                                <p className="text-gray-300 text-lg">{skill}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="p-6 rounded-xl bg-[#53d22d]/10 border-2 border-[#53d22d]/30">
                    <p className="text-gray-300 text-xl mb-4">
                        🎯 <span className="text-[#53d22d] font-bold">NEXT MISSION:</span> Lesson 06 - Loops
                    </p>
                    <p className="text-gray-400">
                        You'll master while and for loops to repeat code efficiently!
                    </p>
                </div>

                <div className="mt-12 inline-block px-8 py-3 rounded-lg bg-[#53d22d]/20 border-2 border-[#53d22d]/50">
                    <p className="text-[#53d22d] font-mono font-bold text-lg">
                        LESSON 05 CLEARED • +315 XP EARNED
                    </p>
                </div>
            </div>
        </div>
    );
}
