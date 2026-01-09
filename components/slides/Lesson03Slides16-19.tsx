/**
 * Lesson 03 - Slides 16-19: Advanced String Operations
 * Slicing Shortcuts, String Looping, Immutability, Common Errors
 */

import React from 'react';
import { Scissors, RefreshCw, Lock, Bug } from 'lucide-react';
import { Terminal, CodeLine } from './Terminal';

// Slide 16: Slicing Shortcuts
export function Lesson03Slide16() {
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
                    <Scissors className="w-8 h-8 text-cyan-400" />
                    <h1 className="text-5xl font-bold text-cyan-400">SLICING SHORTCUTS</h1>
                </div>

                <p className="text-2xl text-gray-300 mb-12">
                    Powerful shortcuts for common slicing operations:
                </p>

                <div className="space-y-6">
                    <div className="p-6 rounded-xl bg-slate-800/50 border border-cyan-500/30">
                        <h3 className="text-[#53d22d] font-bold text-xl mb-3">FROM START TO INDEX</h3>
                        <Terminal variant="success" title="Python">
                            <CodeLine>text = "ACADEMY"</CodeLine>
                            <CodeLine>print(text[:3])  # Same as [0:3]</CodeLine>
                            <CodeLine output>ACA</CodeLine>
                        </Terminal>
                    </div>

                    <div className="p-6 rounded-xl bg-slate-800/50 border border-cyan-500/30">
                        <h3 className="text-[#53d22d] font-bold text-xl mb-3">FROM INDEX TO END</h3>
                        <Terminal variant="success" title="Python">
                            <CodeLine>text = "ACADEMY"</CodeLine>
                            <CodeLine>print(text[2:])  # Same as [2:7]</CodeLine>
                            <CodeLine output>ADEMY</CodeLine>
                        </Terminal>
                    </div>

                    <div className="p-6 rounded-xl bg-slate-800/50 border border-cyan-500/30">
                        <h3 className="text-[#53d22d] font-bold text-xl mb-3">LAST N CHARACTERS</h3>
                        <Terminal variant="success" title="Python">
                            <CodeLine>text = "ACADEMY"</CodeLine>
                            <CodeLine>print(text[-3:])  # Last 3 characters</CodeLine>
                            <CodeLine output>EMY</CodeLine>
                        </Terminal>
                    </div>

                    <div className="p-6 rounded-xl bg-slate-800/50 border border-cyan-500/30">
                        <h3 className="text-[#53d22d] font-bold text-xl mb-3">FULL COPY</h3>
                        <Terminal variant="success" title="Python">
                            <CodeLine>text = "ACADEMY"</CodeLine>
                            <CodeLine>print(text[:])  # Everything</CodeLine>
                            <CodeLine output>ACADEMY</CodeLine>
                        </Terminal>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Slide 17: String Looping
export function Lesson03Slide17() {
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
                    <RefreshCw className="w-8 h-8 text-[#53d22d]" />
                    <h1 className="text-5xl font-bold text-[#53d22d]">STRING LOOPING</h1>
                </div>

                <p className="text-2xl text-gray-300 mb-12">
                    Strings are <span className="text-cyan-400 font-bold">iterable</span> — you can loop through each character:
                </p>

                <div className="grid grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-cyan-400 font-bold text-2xl mb-6">THE CODE:</h3>
                        <Terminal variant="success" title="Python">
                            <CodeLine>word = "CODE"</CodeLine>
                            <CodeLine>&nbsp;</CodeLine>
                            <CodeLine>for letter in word:</CodeLine>
                            <CodeLine>    print(letter)</CodeLine>
                        </Terminal>
                    </div>

                    <div>
                        <h3 className="text-[#53d22d] font-bold text-2xl mb-6">THE OUTPUT:</h3>
                        <Terminal variant="default" title="Output">
                            <CodeLine output>C</CodeLine>
                            <CodeLine output>O</CodeLine>
                            <CodeLine output>D</CodeLine>
                            <CodeLine output>E</CodeLine>
                        </Terminal>
                    </div>
                </div>

                <div className="mt-12 p-8 rounded-xl bg-cyan-500/10 border-2 border-cyan-500/30">
                    <h3 className="text-cyan-400 font-bold text-2xl mb-4">PRACTICAL EXAMPLE:</h3>
                    <Terminal variant="success" title="Chronos Data Analysis">
                        <CodeLine>agent_code = "A42X"</CodeLine>
                        <CodeLine>&nbsp;</CodeLine>
                        <CodeLine>for char in agent_code:</CodeLine>
                        <CodeLine>    print(f"Processing: {'{char}'}")</CodeLine>
                        <CodeLine>&nbsp;</CodeLine>
                        <CodeLine output className="text-gray-500"># Output:</CodeLine>
                        <CodeLine output>Processing: A</CodeLine>
                        <CodeLine output>Processing: 4</CodeLine>
                        <CodeLine output>Processing: 2</CodeLine>
                        <CodeLine output>Processing: X</CodeLine>
                    </Terminal>
                </div>

                <div className="mt-8 p-6 rounded-xl bg-[#53d22d]/10 border border-[#53d22d]/30">
                    <p className="text-xl text-gray-300">
                        💡 Each iteration, the variable gets the <span className="text-[#53d22d] font-bold">next character</span> in the string!
                    </p>
                </div>
            </div>
        </div>
    );
}

// Slide 18: String Immutability
export function Lesson03Slide18() {
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
                    <Lock className="w-8 h-8 text-yellow-400" />
                    <h1 className="text-5xl font-bold text-yellow-400">STRING IMMUTABILITY</h1>
                </div>

                <p className="text-2xl text-gray-300 mb-12">
                    Strings are <span className="text-red-400 font-bold">immutable</span> — you can't change them, only create new ones!
                </p>

                <div className="mb-12 p-8 rounded-xl bg-red-500/10 border-2 border-red-500/30">
                    <h3 className="text-red-400 font-bold text-2xl mb-4">❌ THIS WON'T WORK:</h3>
                    <Terminal variant="error" title="Python">
                        <CodeLine>text = "Hello"</CodeLine>
                        <CodeLine>text[0] = "Y"  # Trying to change 'H' to 'Y'</CodeLine>
                        <CodeLine output className="text-red-400">TypeError: 'str' object does not support item assignment</CodeLine>
                    </Terminal>
                </div>

                <div className="mb-12 p-8 rounded-xl bg-[#53d22d]/10 border-2 border-[#53d22d]/30">
                    <h3 className="text-[#53d22d] font-bold text-2xl mb-4">✅ DO THIS INSTEAD:</h3>
                    <Terminal variant="success" title="Python">
                        <CodeLine>text = "Hello"</CodeLine>
                        <CodeLine>&nbsp;</CodeLine>
                        <CodeLine className="text-gray-500"># Option 1: Reassign the variable</CodeLine>
                        <CodeLine>text = "Yello"</CodeLine>
                        <CodeLine>&nbsp;</CodeLine>
                        <CodeLine className="text-gray-500"># Option 2: Build a new string</CodeLine>
                        <CodeLine>text = "Y" + text[1:]</CodeLine>
                        <CodeLine>print(text)</CodeLine>
                        <CodeLine output>Yello</CodeLine>
                    </Terminal>
                </div>

                <div className="p-6 rounded-xl bg-cyan-500/10 border-2 border-cyan-500/30">
                    <p className="text-xl text-gray-300">
                        💡 <span className="text-cyan-400 font-bold">This is a FEATURE, not a bug!</span> It makes strings
                        <span className="text-[#53d22d]"> safe</span> and <span className="text-[#53d22d]">predictable</span> in Chronos systems.
                    </p>
                </div>
            </div>
        </div>
    );
}

// Slide 19: Common String Errors
export function Lesson03Slide19() {
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
                    <Bug className="w-8 h-8 text-red-400" />
                    <h1 className="text-5xl font-bold text-red-400">COMMON STRING ERRORS</h1>
                </div>

                <div className="space-y-6">
                    <div className="p-6 rounded-xl bg-red-500/10 border-l-4 border-red-500">
                        <h3 className="text-red-400 font-bold text-xl mb-3">ERROR 1: Index Out of Range</h3>
                        <Terminal variant="error" title="Python">
                            <CodeLine>word = "CAT"  # Indices: 0, 1, 2</CodeLine>
                            <CodeLine>print(word[3])  # No index 3!</CodeLine>
                            <CodeLine output className="text-red-400">IndexError: string index out of range</CodeLine>
                        </Terminal>
                    </div>

                    <div className="p-6 rounded-xl bg-red-500/10 border-l-4 border-red-500">
                        <h3 className="text-red-400 font-bold text-xl mb-3">ERROR 2: Forgetting Quotes</h3>
                        <Terminal variant="error" title="Python">
                            <CodeLine>name = Alex  # Missing quotes!</CodeLine>
                            <CodeLine output className="text-red-400">NameError: name 'Alex' is not defined</CodeLine>
                            <CodeLine>&nbsp;</CodeLine>
                            <CodeLine className="text-[#53d22d]"># Fix: name = "Alex"</CodeLine>
                        </Terminal>
                    </div>

                    <div className="p-6 rounded-xl bg-red-500/10 border-l-4 border-red-500">
                        <h3 className="text-red-400 font-bold text-xl mb-3">ERROR 3: Type Mismatch</h3>
                        <Terminal variant="error" title="Python">
                            <CodeLine>age = 25</CodeLine>
                            <CodeLine>msg = "Age: " + age  # Can't add int to str!</CodeLine>
                            <CodeLine output className="text-red-400">TypeError: can only concatenate str to str</CodeLine>
                            <CodeLine>&nbsp;</CodeLine>
                            <CodeLine className="text-[#53d22d]"># Fix: msg = "Age: " + str(age)</CodeLine>
                        </Terminal>
                    </div>

                    <div className="p-6 rounded-xl bg-red-500/10 border-l-4 border-red-500">
                        <h3 className="text-red-400 font-bold text-xl mb-3">ERROR 4: Trying to Modify String</h3>
                        <Terminal variant="error" title="Python">
                            <CodeLine>word = "cat"</CodeLine>
                            <CodeLine>word[0] = "b"  # Strings are immutable!</CodeLine>
                            <CodeLine output className="text-red-400">TypeError: 'str' object does not support item assignment</CodeLine>
                            <CodeLine>&nbsp;</CodeLine>
                            <CodeLine className="text-[#53d22d]"># Fix: word = "b" + word[1:]</CodeLine>
                        </Terminal>
                    </div>
                </div>
            </div>
        </div>
    );
}
