/**
 * Lesson 02 - Slides 25-30: Advanced Concepts
 * Type Checking, Conversion, Errors, Best Practices, Memory, Summary
 */

import React from 'react';
import { Search, RefreshCw, AlertTriangle, Award, Cpu, CheckCircle2 } from 'lucide-react';
import { Terminal, CodeLine } from './Terminal';

// Slide 25: Type Checking
export function Lesson02Slide25() {
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
                    <Search className="w-8 h-8 text-cyan-400" />
                    <h1 className="text-5xl font-bold text-cyan-400">TYPE CHECKING</h1>
                </div>

                <p className="text-2xl text-gray-300 mb-12">
                    Use the <code className="text-[#53d22d] bg-[#53d22d]/10 px-3 py-1 rounded">type()</code> function to check what type of data a variable holds:
                </p>

                <Terminal variant="success" title="Python Console">
                    <CodeLine prompt=">>>">name = "Cipher"</CodeLine>
                    <CodeLine prompt=">>>">type(name)</CodeLine>
                    <CodeLine output>&lt;class 'str'&gt;</CodeLine>
                    <CodeLine prompt=">>>">&nbsp;</CodeLine>
                    <CodeLine prompt=">>>">score = 100</CodeLine>
                    <CodeLine prompt=">>>">type(score)</CodeLine>
                    <CodeLine output>&lt;class 'int'&gt;</CodeLine>
                    <CodeLine prompt=">>>">&nbsp;</CodeLine>
                    <CodeLine prompt=">>>">price = 19.99</CodeLine>
                    <CodeLine prompt=">>>">type(price)</CodeLine>
                    <CodeLine output>&lt;class 'float'&gt;</CodeLine>
                </Terminal>

                <div className="mt-12 grid grid-cols-3 gap-6">
                    <div className="p-6 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-center">
                        <code className="text-cyan-400 text-2xl font-bold">str</code>
                        <p className="text-gray-400 mt-2">String (text)</p>
                    </div>
                    <div className="p-6 rounded-xl bg-[#53d22d]/10 border border-[#53d22d]/30 text-center">
                        <code className="text-[#53d22d] text-2xl font-bold">int</code>
                        <p className="text-gray-400 mt-2">Integer (whole number)</p>
                    </div>
                    <div className="p-6 rounded-xl bg-blue-500/10 border border-blue-500/30 text-center">
                        <code className="text-blue-400 text-2xl font-bold">float</code>
                        <p className="text-gray-400 mt-2">Float (decimal)</p>
                    </div>
                </div>

                <div className="mt-12 p-6 rounded-xl bg-cyan-500/10 border-2 border-cyan-500/30">
                    <p className="text-gray-300 text-xl text-center">
                        💡 Knowing the type helps you understand what operations you can perform on the data!
                    </p>
                </div>
            </div>
        </div>
    );
}

// Slide 26: Type Conversion
export function Lesson02Slide26() {
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
                    <RefreshCw className="w-8 h-8 text-[#53d22d]" />
                    <h1 className="text-5xl font-bold text-[#53d22d]">TYPE CONVERSION</h1>
                </div>

                <p className="text-2xl text-gray-300 mb-12">
                    You can <span className="text-cyan-400 font-bold">convert</span> between data types using special functions:
                </p>

                <div className="space-y-8">
                    <div className="p-6 rounded-xl bg-cyan-500/10 border-l-4 border-cyan-500">
                        <h3 className="text-cyan-400 font-bold text-2xl mb-4">str() — Convert to String</h3>
                        <Terminal variant="default" title="Python">
                            <CodeLine>age = 25</CodeLine>
                            <CodeLine>age_text = str(age)</CodeLine>
                            <CodeLine>print("Age: " + age_text)  # Works!</CodeLine>
                            <CodeLine output>Age: 25</CodeLine>
                        </Terminal>
                    </div>

                    <div className="p-6 rounded-xl bg-[#53d22d]/10 border-l-4 border-[#53d22d]">
                        <h3 className="text-[#53d22d] font-bold text-2xl mb-4">int() — Convert to Integer</h3>
                        <Terminal variant="success" title="Python">
                            <CodeLine>text_number = "42"</CodeLine>
                            <CodeLine>real_number = int(text_number)</CodeLine>
                            <CodeLine>result = real_number + 8</CodeLine>
                            <CodeLine>print(result)</CodeLine>
                            <CodeLine output>50</CodeLine>
                        </Terminal>
                    </div>

                    <div className="p-6 rounded-xl bg-blue-500/10 border-l-4 border-blue-500">
                        <h3 className="text-blue-400 font-bold text-2xl mb-4">float() — Convert to Float</h3>
                        <Terminal variant="default" title="Python">
                            <CodeLine>whole = 100</CodeLine>
                            <CodeLine>decimal = float(whole)</CodeLine>
                            <CodeLine>print(decimal)</CodeLine>
                            <CodeLine output>100.0</CodeLine>
                        </Terminal>
                    </div>
                </div>

                <div className="mt-12 p-6 rounded-xl bg-yellow-500/10 border-2 border-yellow-500/30">
                    <h3 className="text-yellow-400 font-bold text-xl mb-3">⚠️ BE CAREFUL</h3>
                    <Terminal variant="error" title="Python">
                        <CodeLine>int("hello")  # Can't convert text to number!</CodeLine>
                        <CodeLine output className="text-red-400">ValueError: invalid literal for int()</CodeLine>
                    </Terminal>
                </div>
            </div>
        </div>
    );
}

// Slide 27: Common Errors
export function Lesson02Slide27() {
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
                    <AlertTriangle className="w-8 h-8 text-red-400" />
                    <h1 className="text-5xl font-bold text-red-400">COMMON ERRORS</h1>
                </div>

                <p className="text-2xl text-gray-300 mb-12">
                    The most common variable error: <span className="text-red-400 font-bold">NameError</span>
                </p>

                <div className="mb-12 p-8 rounded-xl bg-red-500/10 border-2 border-red-500/30">
                    <h3 className="text-red-400 font-bold text-2xl mb-4">❌ ERROR: Using before defining</h3>
                    <Terminal variant="error" title="Python">
                        <CodeLine prompt=">>>">print(player_name)</CodeLine>
                        <CodeLine output className="text-red-400">NameError: name 'player_name' is not defined</CodeLine>
                        <CodeLine className="text-gray-500"># You forgot to create the variable first!</CodeLine>
                    </Terminal>
                </div>

                <div className="mb-12 p-8 rounded-xl bg-[#53d22d]/10 border-2 border-[#53d22d]/30">
                    <h3 className="text-[#53d22d] font-bold text-2xl mb-4">✅ FIX: Define before using</h3>
                    <Terminal variant="success" title="Python">
                        <CodeLine prompt=">>>">player_name = "Nova"  # Create first</CodeLine>
                        <CodeLine prompt=">>>">print(player_name)     # Then use</CodeLine>
                        <CodeLine output>Nova</CodeLine>
                    </Terminal>
                </div>

                <div className="space-y-6">
                    <div className="p-6 rounded-xl bg-yellow-500/10 border-l-4 border-yellow-500">
                        <h3 className="text-yellow-400 font-bold text-xl mb-3">⚠️ TYPOS</h3>
                        <Terminal variant="error" title="Python">
                            <CodeLine>player_score = 100</CodeLine>
                            <CodeLine>print(playerscore)  # Missing underscore!</CodeLine>
                            <CodeLine output className="text-red-400">NameError: name 'playerscore' is not defined</CodeLine>
                        </Terminal>
                    </div>

                    <div className="p-6 rounded-xl bg-yellow-500/10 border-l-4 border-yellow-500">
                        <h3 className="text-yellow-400 font-bold text-xl mb-3">⚠️ CASE SENSITIVITY</h3>
                        <Terminal variant="error" title="Python">
                            <CodeLine>Score = 100</CodeLine>
                            <CodeLine>print(score)  # Wrong case!</CodeLine>
                            <CodeLine output className="text-red-400">NameError: name 'score' is not defined</CodeLine>
                        </Terminal>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Slide 28: Best Practices
export function Lesson02Slide28() {
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
                    <Award className="w-8 h-8 text-[#53d22d]" />
                    <h1 className="text-5xl font-bold text-[#53d22d]">BEST PRACTICES</h1>
                </div>

                <p className="text-2xl text-gray-300 mb-12">
                    Follow these rules to write <span className="text-cyan-400 font-bold">professional</span> Python code:
                </p>

                <div className="space-y-6">
                    <div className="p-6 rounded-xl bg-[#53d22d]/10 border-l-4 border-[#53d22d]">
                        <h3 className="text-[#53d22d] font-bold text-xl mb-3">1. Use snake_case</h3>
                        <div className="grid grid-cols-2 gap-4">
                            <Terminal variant="success" title="✅ GOOD">
                                <CodeLine>player_health = 100</CodeLine>
                                <CodeLine>max_score = 9999</CodeLine>
                            </Terminal>
                            <Terminal variant="error" title="❌ BAD">
                                <CodeLine>PlayerHealth = 100</CodeLine>
                                <CodeLine>maxScore = 9999</CodeLine>
                            </Terminal>
                        </div>
                    </div>

                    <div className="p-6 rounded-xl bg-cyan-500/10 border-l-4 border-cyan-500">
                        <h3 className="text-cyan-400 font-bold text-xl mb-3">2. Use descriptive names</h3>
                        <div className="grid grid-cols-2 gap-4">
                            <Terminal variant="success" title="✅ GOOD">
                                <CodeLine>player_health = 100</CodeLine>
                                <CodeLine>enemy_damage = 25</CodeLine>
                            </Terminal>
                            <Terminal variant="error" title="❌ BAD">
                                <CodeLine>x = 100</CodeLine>
                                <CodeLine>y = 25</CodeLine>
                            </Terminal>
                        </div>
                    </div>

                    <div className="p-6 rounded-xl bg-blue-500/10 border-l-4 border-blue-500">
                        <h3 className="text-blue-400 font-bold text-xl mb-3">3. Don't use reserved words</h3>
                        <Terminal variant="error" title="❌ NEVER DO THIS">
                            <CodeLine>print = "hello"  # Breaks print()!</CodeLine>
                            <CodeLine>if = 5           # 'if' is a keyword!</CodeLine>
                            <CodeLine>class = "A"      # 'class' is reserved!</CodeLine>
                        </Terminal>
                    </div>

                    <div className="p-6 rounded-xl bg-purple-500/10 border-l-4 border-purple-500">
                        <h3 className="text-purple-400 font-bold text-xl mb-3">4. Be consistent</h3>
                        <p className="text-gray-300">Pick a naming style and stick with it throughout your code!</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
