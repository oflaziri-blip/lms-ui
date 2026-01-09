/**
 * Lesson 03 - Slides 24-30: Final Topics & Summary
 * String Methods Deep Dive, Real-World Applications, Review, Mission Complete
 */

import React from 'react';
import { Wrench, Globe, BookOpen, CheckCircle2, Trophy } from 'lucide-react';
import { Terminal, CodeLine } from './Terminal';

// Slide 24: More String Methods
export function Lesson03Slide24() {
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
                    <Wrench className="w-8 h-8 text-cyan-400" />
                    <h1 className="text-5xl font-bold text-cyan-400">MORE STRING METHODS</h1>
                </div>

                <div className="space-y-6">
                    <div className="p-6 rounded-xl bg-slate-800/50 border border-cyan-500/30">
                        <h3 className="text-[#53d22d] font-bold text-xl mb-3">.strip() - Remove Whitespace</h3>
                        <Terminal variant="success" title="Python">
                            <CodeLine>text = "   Hello   "</CodeLine>
                            <CodeLine>print(text.strip())</CodeLine>
                            <CodeLine output>Hello</CodeLine>
                        </Terminal>
                    </div>

                    <div className="p-6 rounded-xl bg-slate-800/50 border border-cyan-500/30">
                        <h3 className="text-[#53d22d] font-bold text-xl mb-3">.startswith() / .endswith()</h3>
                        <Terminal variant="success" title="Python">
                            <CodeLine>filename = "report.pdf"</CodeLine>
                            <CodeLine>print(filename.endswith(".pdf"))</CodeLine>
                            <CodeLine output>True</CodeLine>
                            <CodeLine>&nbsp;</CodeLine>
                            <CodeLine>print(filename.startswith("report"))</CodeLine>
                            <CodeLine output>True</CodeLine>
                        </Terminal>
                    </div>

                    <div className="p-6 rounded-xl bg-slate-800/50 border border-cyan-500/30">
                        <h3 className="text-[#53d22d] font-bold text-xl mb-3">.count() - Count Occurrences</h3>
                        <Terminal variant="success" title="Python">
                            <CodeLine>text = "banana"</CodeLine>
                            <CodeLine>print(text.count("a"))</CodeLine>
                            <CodeLine output>3</CodeLine>
                        </Terminal>
                    </div>

                    <div className="p-6 rounded-xl bg-slate-800/50 border border-cyan-500/30">
                        <h3 className="text-[#53d22d] font-bold text-xl mb-3">.isdigit() / .isalpha()</h3>
                        <Terminal variant="success" title="Python">
                            <CodeLine>print("123".isdigit())</CodeLine>
                            <CodeLine output>True</CodeLine>
                            <CodeLine>&nbsp;</CodeLine>
                            <CodeLine>print("ABC".isalpha())</CodeLine>
                            <CodeLine output>True</CodeLine>
                        </Terminal>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Slide 25: Real-World Applications
export function Lesson03Slide25() {
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
                    <Globe className="w-8 h-8 text-[#53d22d]" />
                    <h1 className="text-5xl font-bold text-[#53d22d]">REAL-WORLD APPLICATIONS</h1>
                </div>

                <p className="text-2xl text-gray-300 mb-12">
                    How Chronos uses strings in real operations:
                </p>

                <div className="space-y-6">
                    <div className="p-6 rounded-xl bg-cyan-500/10 border-l-4 border-cyan-500">
                        <h3 className="text-cyan-400 font-bold text-xl mb-3">1. Data Validation</h3>
                        <Terminal variant="default" title="Email Validator">
                            <CodeLine>email = "agent@chronos.ai"</CodeLine>
                            <CodeLine>&nbsp;</CodeLine>
                            <CodeLine>if "@" in email and email.endswith(".ai"):</CodeLine>
                            <CodeLine>    print("Valid Chronos email")</CodeLine>
                        </Terminal>
                    </div>

                    <div className="p-6 rounded-xl bg-[#53d22d]/10 border-l-4 border-[#53d22d]">
                        <h3 className="text-[#53d22d] font-bold text-xl mb-3">2. Log Parsing</h3>
                        <Terminal variant="success" title="Log Analyzer">
                            <CodeLine>log = "ERROR: System failure at 14:30"</CodeLine>
                            <CodeLine>&nbsp;</CodeLine>
                            <CodeLine>if log.startswith("ERROR"):</CodeLine>
                            <CodeLine>    time = log.split("at ")[1]</CodeLine>
                            <CodeLine>    print(f"Alert sent at {'{time}'}")</CodeLine>
                        </Terminal>
                    </div>

                    <div className="p-6 rounded-xl bg-blue-500/10 border-l-4 border-blue-500">
                        <h3 className="text-blue-400 font-bold text-xl mb-3">3. Data Formatting</h3>
                        <Terminal variant="default" title="Report Generator">
                            <CodeLine>agent_id = "a042"</CodeLine>
                            <CodeLine>status = "active"</CodeLine>
                            <CodeLine>&nbsp;</CodeLine>
                            <CodeLine>report = f"Agent {'{agent_id.upper()}'} is {'{status.upper()}'}"</CodeLine>
                            <CodeLine>print(report)</CodeLine>
                            <CodeLine output>Agent A042 is ACTIVE</CodeLine>
                        </Terminal>
                    </div>

                    <div className="p-6 rounded-xl bg-purple-500/10 border-l-4 border-purple-500">
                        <h3 className="text-purple-400 font-bold text-xl mb-3">4. Password Checking</h3>
                        <Terminal variant="default" title="Security System">
                            <CodeLine>password = input("Enter password: ")</CodeLine>
                            <CodeLine>&nbsp;</CodeLine>
                            <CodeLine>if len(password) &gt;= 8 and password.isalnum():</CodeLine>
                            <CodeLine>    print("Password accepted")</CodeLine>
                        </Terminal>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Slide 26: Quick Review - Part 1
export function Lesson03Slide26() {
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
                        <h3 className="text-cyan-400 font-bold text-xl mb-2">Strings are sequences of characters</h3>
                        <code className="text-gray-300">message = "Hello, Agent!"</code>
                    </div>

                    <div className="p-6 rounded-xl bg-[#53d22d]/10 border-l-4 border-[#53d22d]">
                        <h3 className="text-[#53d22d] font-bold text-xl mb-2">Indexing starts at 0</h3>
                        <code className="text-gray-300">text[0]  # First character</code>
                    </div>

                    <div className="p-6 rounded-xl bg-blue-500/10 border-l-4 border-blue-500">
                        <h3 className="text-blue-400 font-bold text-xl mb-2">Negative indexing from end</h3>
                        <code className="text-gray-300">text[-1]  # Last character</code>
                    </div>

                    <div className="p-6 rounded-xl bg-purple-500/10 border-l-4 border-purple-500">
                        <h3 className="text-purple-400 font-bold text-xl mb-2">Slicing extracts substrings</h3>
                        <code className="text-gray-300">text[0:5]  # Characters 0-4</code>
                    </div>

                    <div className="p-6 rounded-xl bg-yellow-500/10 border-l-4 border-yellow-500">
                        <h3 className="text-yellow-400 font-bold text-xl mb-2">len() returns string length</h3>
                        <code className="text-gray-300">len("Python")  # 6</code>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Slide 27: Quick Review - Part 2
export function Lesson03Slide27() {
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
                    <div className="p-6 rounded-xl bg-cyan-500/10 border-l-4 border-cyan-500">
                        <h3 className="text-cyan-400 font-bold text-xl mb-2">Concatenation with +</h3>
                        <code className="text-gray-300">"Hello" + " " + "World"</code>
                    </div>

                    <div className="p-6 rounded-xl bg-[#53d22d]/10 border-l-4 border-[#53d22d]">
                        <h3 className="text-[#53d22d] font-bold text-xl mb-2">Repetition with *</h3>
                        <code className="text-gray-300">"=" * 20  # ====================</code>
                    </div>

                    <div className="p-6 rounded-xl bg-blue-500/10 border-l-4 border-blue-500">
                        <h3 className="text-blue-400 font-bold text-xl mb-2">F-strings for formatting</h3>
                        <code className="text-gray-300">f"Agent {'{name}'} level {'{level}'}"</code>
                    </div>

                    <div className="p-6 rounded-xl bg-purple-500/10 border-l-4 border-purple-500">
                        <h3 className="text-purple-400 font-bold text-xl mb-2">Strings are immutable</h3>
                        <code className="text-gray-300">text[0] = "X"  # ERROR!</code>
                    </div>

                    <div className="p-6 rounded-xl bg-yellow-500/10 border-l-4 border-yellow-500">
                        <h3 className="text-yellow-400 font-bold text-xl mb-2">Methods return new strings</h3>
                        <code className="text-gray-300">text.upper()  # Creates new string</code>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Slide 28: Common Patterns
export function Lesson03Slide28() {
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
                    <h1 className="text-5xl font-bold text-cyan-400">COMMON PATTERNS</h1>
                </div>

                <p className="text-2xl text-gray-300 mb-12">
                    Essential string patterns every Chronos agent should know:
                </p>

                <div className="grid grid-cols-2 gap-6">
                    <div className="p-6 rounded-xl bg-slate-800/50 border border-cyan-500/30">
                        <h3 className="text-[#53d22d] font-bold mb-3">Get first character</h3>
                        <code className="text-cyan-400">text[0]</code>
                    </div>

                    <div className="p-6 rounded-xl bg-slate-800/50 border border-cyan-500/30">
                        <h3 className="text-[#53d22d] font-bold mb-3">Get last character</h3>
                        <code className="text-cyan-400">text[-1]</code>
                    </div>

                    <div className="p-6 rounded-xl bg-slate-800/50 border border-cyan-500/30">
                        <h3 className="text-[#53d22d] font-bold mb-3">Get first 3 chars</h3>
                        <code className="text-cyan-400">text[:3]</code>
                    </div>

                    <div className="p-6 rounded-xl bg-slate-800/50 border border-cyan-500/30">
                        <h3 className="text-[#53d22d] font-bold mb-3">Get last 3 chars</h3>
                        <code className="text-cyan-400">text[-3:]</code>
                    </div>

                    <div className="p-6 rounded-xl bg-slate-800/50 border border-cyan-500/30">
                        <h3 className="text-[#53d22d] font-bold mb-3">Reverse string</h3>
                        <code className="text-cyan-400">text[::-1]</code>
                    </div>

                    <div className="p-6 rounded-xl bg-slate-800/50 border border-cyan-500/30">
                        <h3 className="text-[#53d22d] font-bold mb-3">Check if empty</h3>
                        <code className="text-cyan-400">if not text:</code>
                    </div>

                    <div className="p-6 rounded-xl bg-slate-800/50 border border-cyan-500/30">
                        <h3 className="text-[#53d22d] font-bold mb-3">Remove spaces</h3>
                        <code className="text-cyan-400">text.strip()</code>
                    </div>

                    <div className="p-6 rounded-xl bg-slate-800/50 border border-cyan-500/30">
                        <h3 className="text-[#53d22d] font-bold mb-3">Split into words</h3>
                        <code className="text-cyan-400">text.split()</code>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Slide 29: Key Takeaways
export function Lesson03Slide29() {
    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-950 text-white p-12 relative overflow-hidden">
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'linear-gradient(#53d22d 1px, transparent 1px), linear-gradient(90deg, #53d22d 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }} />
            </div>

            <div className="relative z-10 max-w-5xl mx-auto">
                <h1 className="text-6xl font-bold text-[#53d22d] mb-12 text-center">KEY TAKEAWAYS</h1>

                <div className="space-y-6">
                    {[
                        { icon: "🔢", text: "Indexing starts at 0, not 1" },
                        { icon: "⬅️", text: "Negative indices count from the end" },
                        { icon: "✂️", text: "Slicing syntax: [start:stop:step]" },
                        { icon: "🔒", text: "Strings are immutable - can't change in place" },
                        { icon: "✨", text: "F-strings are the best way to format" },
                        { icon: "🔄", text: "Methods create new strings, don't modify original" },
                        { icon: "⚠️", text: "String operations are case-sensitive" },
                        { icon: "💡", text: "Use 'in' to check if substring exists" }
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

// Slide 30: Mission Complete (Updated)
export function Lesson03Slide30() {
    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-cyan-950 via-blue-950 to-slate-950 text-white flex items-center justify-center p-12 relative overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'linear-gradient(cyan 1px, transparent 1px), linear-gradient(90deg, cyan 1px, transparent 1px)',
                    backgroundSize: '50px 50px'
                }} />
            </div>

            {/* Floating Particles */}
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
                {/* Trophy Icon */}
                <div className="flex justify-center mb-8">
                    <div className="w-32 h-32 rounded-full bg-[#53d22d]/20 flex items-center justify-center" style={{ boxShadow: '0 0 40px rgba(83,210,45,0.5)' }}>
                        <Trophy className="w-20 h-20 text-[#53d22d]" />
                    </div>
                </div>

                {/* Title */}
                <h1 className="text-7xl font-bold bg-gradient-to-r from-cyan-400 via-[#53d22d] to-cyan-400 bg-clip-text text-transparent mb-6 animate-pulse">
                    MISSION COMPLETE!
                </h1>

                <h2 className="text-4xl font-light text-cyan-300 mb-12">
                    LESSON 03: DATA STREAMS
                </h2>

                {/* Summary */}
                <div className="mb-12 p-8 rounded-xl bg-cyan-500/10 border-2 border-cyan-500/30">
                    <h3 className="text-cyan-400 font-bold text-2xl mb-6">WHAT YOU MASTERED:</h3>
                    <div className="grid grid-cols-2 gap-4 text-left">
                        <div className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-full bg-[#53d22d]/30 flex items-center justify-center flex-shrink-0 mt-1">
                                <div className="w-3 h-3 rounded-full bg-[#53d22d]" />
                            </div>
                            <p className="text-gray-300 text-lg">String indexing (0-based)</p>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-full bg-[#53d22d]/30 flex items-center justify-center flex-shrink-0 mt-1">
                                <div className="w-3 h-3 rounded-full bg-[#53d22d]" />
                            </div>
                            <p className="text-gray-300 text-lg">Negative indexing</p>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-full bg-[#53d22d]/30 flex items-center justify-center flex-shrink-0 mt-1">
                                <div className="w-3 h-3 rounded-full bg-[#53d22d]" />
                            </div>
                            <p className="text-gray-300 text-lg">String slicing [start:stop:step]</p>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-full bg-[#53d22d]/30 flex items-center justify-center flex-shrink-0 mt-1">
                                <div className="w-3 h-3 rounded-full bg-[#53d22d]" />
                            </div>
                            <p className="text-gray-300 text-lg">F-string formatting</p>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-full bg-[#53d22d]/30 flex items-center justify-center flex-shrink-0 mt-1">
                                <div className="w-3 h-3 rounded-full bg-[#53d22d]" />
                            </div>
                            <p className="text-gray-300 text-lg">String methods</p>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-full bg-[#53d22d]/30 flex items-center justify-center flex-shrink-0 mt-1">
                                <div className="w-3 h-3 rounded-full bg-[#53d22d]" />
                            </div>
                            <p className="text-gray-300 text-lg">String immutability</p>
                        </div>
                    </div>
                </div>

                {/* Next Steps */}
                <div className="p-6 rounded-xl bg-[#53d22d]/10 border-2 border-[#53d22d]/30">
                    <p className="text-gray-300 text-xl mb-4">
                        🎯 <span className="text-[#53d22d] font-bold">NEXT MISSION:</span> Lesson 04 - Input & Logic
                    </p>
                    <p className="text-gray-400">
                        You'll master user input and boolean logic!
                    </p>
                </div>

                {/* Status Bar */}
                <div className="mt-12 inline-block px-8 py-3 rounded-lg bg-[#53d22d]/20 border-2 border-[#53d22d]/50">
                    <p className="text-[#53d22d] font-mono font-bold text-lg">
                        LESSON 03 CLEARED • +285 XP EARNED
                    </p>
                </div>
            </div>
        </div>
    );
}
