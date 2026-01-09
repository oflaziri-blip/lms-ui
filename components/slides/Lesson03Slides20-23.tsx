/**
 * Lesson 03 - Slides 20-23: Advanced Topics & Practical Examples
 * String Comparison, Step Slicing, Practical Challenges, Best Practices
 */

import React from 'react';
import { Scale, Zap, Target, Award } from 'lucide-react';
import { Terminal, CodeLine } from './Terminal';

// Slide 20: String Comparison
export function Lesson03Slide20() {
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
                    <Scale className="w-8 h-8 text-cyan-400" />
                    <h1 className="text-5xl font-bold text-cyan-400">STRING COMPARISON</h1>
                </div>

                <p className="text-2xl text-gray-300 mb-12">
                    Compare strings using comparison operators:
                </p>

                <div className="space-y-6">
                    <div className="p-6 rounded-xl bg-slate-800/50 border border-cyan-500/30">
                        <h3 className="text-[#53d22d] font-bold text-xl mb-3">EQUALITY (==)</h3>
                        <Terminal variant="success" title="Python">
                            <CodeLine>password = "CHRONOS"</CodeLine>
                            <CodeLine>user_input = "CHRONOS"</CodeLine>
                            <CodeLine>&nbsp;</CodeLine>
                            <CodeLine>print(password == user_input)</CodeLine>
                            <CodeLine output>True</CodeLine>
                            <CodeLine>&nbsp;</CodeLine>
                            <CodeLine>print("chronos" == "CHRONOS")</CodeLine>
                            <CodeLine output>False  # Case sensitive!</CodeLine>
                        </Terminal>
                    </div>

                    <div className="p-6 rounded-xl bg-slate-800/50 border border-cyan-500/30">
                        <h3 className="text-[#53d22d] font-bold text-xl mb-3">INEQUALITY (!=)</h3>
                        <Terminal variant="success" title="Python">
                            <CodeLine>status1 = "Active"</CodeLine>
                            <CodeLine>status2 = "Inactive"</CodeLine>
                            <CodeLine>&nbsp;</CodeLine>
                            <CodeLine>print(status1 != status2)</CodeLine>
                            <CodeLine output>True</CodeLine>
                        </Terminal>
                    </div>

                    <div className="p-6 rounded-xl bg-slate-800/50 border border-cyan-500/30">
                        <h3 className="text-[#53d22d] font-bold text-xl mb-3">ALPHABETICAL COMPARISON</h3>
                        <Terminal variant="success" title="Python">
                            <CodeLine>print("apple" &lt; "banana")</CodeLine>
                            <CodeLine output>True  # 'a' comes before 'b'</CodeLine>
                            <CodeLine>&nbsp;</CodeLine>
                            <CodeLine>print("Zebra" &lt; "apple")</CodeLine>
                            <CodeLine output>True  # Uppercase comes before lowercase!</CodeLine>
                        </Terminal>
                    </div>
                </div>

                <div className="mt-8 p-6 rounded-xl bg-yellow-500/10 border-2 border-yellow-500/30">
                    <p className="text-xl text-gray-300">
                        ⚠️ <span className="text-yellow-400 font-bold">Remember:</span> String comparison is
                        <span className="text-red-400"> case-sensitive</span> and uses
                        <span className="text-cyan-400"> ASCII/Unicode</span> values!
                    </p>
                </div>
            </div>
        </div>
    );
}

// Slide 21: Step Slicing
export function Lesson03Slide21() {
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
                    <Zap className="w-8 h-8 text-[#53d22d]" />
                    <h1 className="text-5xl font-bold text-[#53d22d]">STEP SLICING</h1>
                </div>

                <p className="text-2xl text-gray-300 mb-12">
                    Advanced slicing with <code className="text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded">step</code> parameter:
                    <code className="text-[#53d22d] bg-[#53d22d]/10 px-3 py-1 rounded ml-2">[start:stop:step]</code>
                </p>

                <div className="space-y-6">
                    <div className="p-6 rounded-xl bg-slate-800/50 border border-cyan-500/30">
                        <h3 className="text-cyan-400 font-bold text-xl mb-3">EVERY OTHER CHARACTER</h3>
                        <Terminal variant="success" title="Python">
                            <CodeLine>text = "ABCDEFGH"</CodeLine>
                            <CodeLine>print(text[::2])  # Step of 2</CodeLine>
                            <CodeLine output>ACEG</CodeLine>
                        </Terminal>
                    </div>

                    <div className="p-6 rounded-xl bg-slate-800/50 border border-cyan-500/30">
                        <h3 className="text-cyan-400 font-bold text-xl mb-3">REVERSE STRING</h3>
                        <Terminal variant="success" title="Python">
                            <CodeLine>text = "CHRONOS"</CodeLine>
                            <CodeLine>print(text[::-1])  # Negative step reverses</CodeLine>
                            <CodeLine output>SONORHC</CodeLine>
                        </Terminal>
                    </div>

                    <div className="p-6 rounded-xl bg-slate-800/50 border border-cyan-500/30">
                        <h3 className="text-cyan-400 font-bold text-xl mb-3">EVERY THIRD CHARACTER</h3>
                        <Terminal variant="success" title="Python">
                            <CodeLine>text = "0123456789"</CodeLine>
                            <CodeLine>print(text[::3])  # Step of 3</CodeLine>
                            <CodeLine output>0369</CodeLine>
                        </Terminal>
                    </div>

                    <div className="p-6 rounded-xl bg-slate-800/50 border border-cyan-500/30">
                        <h3 className="text-cyan-400 font-bold text-xl mb-3">RANGE WITH STEP</h3>
                        <Terminal variant="success" title="Python">
                            <CodeLine>text = "ABCDEFGH"</CodeLine>
                            <CodeLine>print(text[1:7:2])  # Start at 1, stop at 7, step 2</CodeLine>
                            <CodeLine output>BDF</CodeLine>
                        </Terminal>
                    </div>
                </div>

                <div className="mt-8 p-6 rounded-xl bg-[#53d22d]/10 border-2 border-[#53d22d]/30">
                    <p className="text-xl text-gray-300">
                        💡 <span className="text-[#53d22d] font-bold">Pro Tip:</span>
                        <code className="text-cyan-400 bg-cyan-400/10 px-2 py-1 rounded ml-2">[::-1]</code> is the fastest way to reverse a string!
                    </p>
                </div>
            </div>
        </div>
    );
}

// Slide 22: Practical Challenge
export function Lesson03Slide22() {
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
                    <Target className="w-8 h-8 text-cyan-400" />
                    <h1 className="text-5xl font-bold text-cyan-400">PRACTICAL CHALLENGE</h1>
                </div>

                <div className="mb-12 p-8 rounded-xl bg-cyan-500/10 border-2 border-cyan-500/30">
                    <h2 className="text-3xl font-bold text-[#53d22d] mb-6">MISSION: Agent Badge Generator</h2>
                    <p className="text-xl text-gray-300 mb-6">
                        Create a formatted badge for Chronos agents using all your string skills!
                    </p>
                </div>

                <Terminal variant="success" title="Chronos Badge System">
                    <CodeLine>first_name = "Alex"</CodeLine>
                    <CodeLine>last_name = "Chen"</CodeLine>
                    <CodeLine>agent_id = "A-042"</CodeLine>
                    <CodeLine>clearance = "Level 5"</CodeLine>
                    <CodeLine>&nbsp;</CodeLine>
                    <CodeLine className="text-gray-500"># Create formatted badge</CodeLine>
                    <CodeLine>border = "=" * 40</CodeLine>
                    <CodeLine>full_name = first_name + " " + last_name</CodeLine>
                    <CodeLine>badge = f"""</CodeLine>
                    <CodeLine>{'{border}'}</CodeLine>
                    <CodeLine>  CHRONOS SECURITY CLEARANCE</CodeLine>
                    <CodeLine>  Agent: {'{full_name.upper()}'}</CodeLine>
                    <CodeLine>  ID: {'{agent_id}'}</CodeLine>
                    <CodeLine>  Clearance: {'{clearance}'}</CodeLine>
                    <CodeLine>{'{border}'}</CodeLine>
                    <CodeLine>"""</CodeLine>
                    <CodeLine>print(badge)</CodeLine>
                </Terminal>

                <div className="mt-12 p-6 rounded-xl bg-slate-800/50 border border-[#53d22d]/30">
                    <h3 className="text-[#53d22d] font-bold text-xl mb-4">OUTPUT:</h3>
                    <pre className="text-lg font-mono text-gray-300">
                        <code>========================================</code>
                        <code className="block">  CHRONOS SECURITY CLEARANCE</code>
                        <code className="block">  Agent: ALEX CHEN</code>
                        <code className="block">  ID: A-042</code>
                        <code className="block">  Clearance: Level 5</code>
                        <code className="block">========================================</code>
                    </pre>
                </div>
            </div>
        </div>
    );
}

// Slide 23: Best Practices
export function Lesson03Slide23() {
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
                    <Award className="w-8 h-8 text-[#53d22d]" />
                    <h1 className="text-5xl font-bold text-[#53d22d]">BEST PRACTICES</h1>
                </div>

                <p className="text-2xl text-gray-300 mb-12">
                    Professional string handling in Chronos systems:
                </p>

                <div className="space-y-6">
                    <div className="p-6 rounded-xl bg-[#53d22d]/10 border-l-4 border-[#53d22d]">
                        <h3 className="text-[#53d22d] font-bold text-xl mb-3">1. Use F-Strings for Formatting</h3>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <p className="text-gray-400 mb-2">❌ Avoid:</p>
                                <code className="text-red-400">msg = "Agent " + name + " level " + str(level)</code>
                            </div>
                            <div>
                                <p className="text-gray-400 mb-2">✅ Prefer:</p>
                                <code className="text-[#53d22d]">msg = f"Agent {'{name}'} level {'{level}'}"</code>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 rounded-xl bg-cyan-500/10 border-l-4 border-cyan-500">
                        <h3 className="text-cyan-400 font-bold text-xl mb-3">2. Use Negative Indexing for Last Elements</h3>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <p className="text-gray-400 mb-2">❌ Verbose:</p>
                                <code className="text-red-400">last = text[len(text) - 1]</code>
                            </div>
                            <div>
                                <p className="text-gray-400 mb-2">✅ Clean:</p>
                                <code className="text-cyan-400">last = text[-1]</code>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 rounded-xl bg-blue-500/10 border-l-4 border-blue-500">
                        <h3 className="text-blue-400 font-bold text-xl mb-3">3. Use .lower() for Case-Insensitive Comparison</h3>
                        <Terminal variant="default" title="Python">
                            <CodeLine>user_input = "CHRONOS"</CodeLine>
                            <CodeLine>password = "chronos"</CodeLine>
                            <CodeLine>&nbsp;</CodeLine>
                            <CodeLine>if user_input.lower() == password.lower():</CodeLine>
                            <CodeLine>    print("Access granted")</CodeLine>
                        </Terminal>
                    </div>

                    <div className="p-6 rounded-xl bg-purple-500/10 border-l-4 border-purple-500">
                        <h3 className="text-purple-400 font-bold text-xl mb-3">4. Use 'in' for Substring Checks</h3>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <p className="text-gray-400 mb-2">❌ Complex:</p>
                                <code className="text-red-400">if text.find("error") != -1:</code>
                            </div>
                            <div>
                                <p className="text-gray-400 mb-2">✅ Simple:</p>
                                <code className="text-purple-400">if "error" in text:</code>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 rounded-xl bg-yellow-500/10 border-l-4 border-yellow-500">
                        <h3 className="text-yellow-400 font-bold text-xl mb-3">5. Remember: Strings Are Immutable</h3>
                        <p className="text-gray-300">
                            Methods like <code className="text-cyan-400">.upper()</code>, <code className="text-cyan-400">.replace()</code>
                            return NEW strings — they don't modify the original!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
