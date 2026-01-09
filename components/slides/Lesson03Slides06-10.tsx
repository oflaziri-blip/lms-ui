/**
 * Lesson 03 - Slides 06-10: Core Concepts
 * String Length, Negative Indexing, Slicing, F-Strings, Methods
 */

import React from 'react';
import { Ruler, ArrowLeft, Scissors, Sparkles, Wrench } from 'lucide-react';

// Slide 06: String Length
export function Lesson03Slide06() {
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
                    <Ruler className="w-8 h-8 text-cyan-400" />
                    <h1 className="text-5xl font-bold text-cyan-400">STRING LENGTH</h1>
                </div>

                <p className="text-2xl text-gray-300 mb-12">
                    Use <code className="text-[#53d22d] bg-[#53d22d]/10 px-3 py-1 rounded">len()</code> to count characters in a data stream:
                </p>

                <div className="space-y-8">
                    <div className="p-6 rounded-xl bg-slate-800/50 border border-cyan-500/30">
                        <pre className="text-xl font-mono text-gray-300">
                            <code className="text-cyan-400">word = "Python"</code>
                            <code className="block mt-2">print(len(word))     <span className="text-gray-500"># 6</span></code>
                        </pre>
                    </div>

                    <div className="p-6 rounded-xl bg-slate-800/50 border border-cyan-500/30">
                        <pre className="text-xl font-mono text-gray-300">
                            <code className="text-cyan-400">name = "Alex Chen"</code>
                            <code className="block mt-2">print(len(name))     <span className="text-gray-500"># 9 (space counts!)</span></code>
                        </pre>
                    </div>

                    <div className="p-6 rounded-xl bg-slate-800/50 border border-cyan-500/30">
                        <pre className="text-xl font-mono text-gray-300">
                            <code className="text-cyan-400">empty = ""</code>
                            <code className="block mt-2">print(len(empty))    <span className="text-gray-500"># 0</span></code>
                        </pre>
                    </div>
                </div>

                <div className="mt-12 p-6 rounded-xl bg-[#53d22d]/10 border-2 border-[#53d22d]/30 text-center">
                    <p className="text-xl text-gray-300">
                        <span className="text-[#53d22d] font-bold">Length</span> = Total number of characters (including spaces!)
                    </p>
                </div>
            </div>
        </div>
    );
}

// Slide 07: Negative Indexing
export function Lesson03Slide07() {
    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-cyan-950 via-blue-950 to-slate-950 text-white p-12 relative overflow-hidden">
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'linear-gradient(#53d22d 1px, transparent 1px), linear-gradient(90deg, #53d22d 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }} />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto">
                <div className="flex items-center gap-3 mb-8">
                    <ArrowLeft className="w-8 h-8 text-[#53d22d]" />
                    <h1 className="text-5xl font-bold text-[#53d22d]">NEGATIVE INDEXING</h1>
                </div>

                <p className="text-2xl text-gray-300 mb-12">
                    Python lets you count <span className="text-cyan-400 font-bold">backwards from the end</span>:
                </p>

                <div className="mb-12 p-8 rounded-xl bg-slate-800/50 border-2 border-cyan-500/30">
                    <div className="text-center mb-6">
                        <code className="text-3xl font-mono text-cyan-400">word = "CYBER"</code>
                    </div>

                    <div className="flex justify-center gap-4 mb-4">
                        {['C', 'Y', 'B', 'E', 'R'].map((char, i) => (
                            <div key={i} className="text-center">
                                <div className="text-cyan-400 font-mono text-sm mb-2">[{i}]</div>
                                <div className="w-20 h-20 rounded-lg bg-cyan-500/20 border-2 border-cyan-500/50 flex items-center justify-center">
                                    <span className="text-3xl font-bold text-[#53d22d]">{char}</span>
                                </div>
                                <div className="text-red-400 font-mono text-sm mt-2">[{i - 5}]</div>
                            </div>
                        ))}
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-center mt-8">
                        <div className="text-cyan-400 font-mono">Forward: 0 → 1 → 2 → 3 → 4</div>
                        <div className="text-red-400 font-mono">Backward: -5 ← -4 ← -3 ← -2 ← -1</div>
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-6">
                    <div className="p-6 rounded-xl bg-cyan-500/10 border border-cyan-500/30">
                        <pre className="text-lg font-mono">
                            <code className="text-gray-300">print(word[-1])</code>
                            <code className="block text-[#53d22d] mt-2"># R (last)</code>
                        </pre>
                    </div>
                    <div className="p-6 rounded-xl bg-cyan-500/10 border border-cyan-500/30">
                        <pre className="text-lg font-mono">
                            <code className="text-gray-300">print(word[-2])</code>
                            <code className="block text-[#53d22d] mt-2"># E (2nd last)</code>
                        </pre>
                    </div>
                    <div className="p-6 rounded-xl bg-cyan-500/10 border border-cyan-500/30">
                        <pre className="text-lg font-mono">
                            <code className="text-gray-300">print(word[-5])</code>
                            <code className="block text-[#53d22d] mt-2"># C (first)</code>
                        </pre>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Slide 08: String Slicing
export function Lesson03Slide08() {
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
                    <Scissors className="w-8 h-8 text-cyan-400" />
                    <h1 className="text-5xl font-bold text-cyan-400">STRING SLICING</h1>
                </div>

                <p className="text-2xl text-gray-300 mb-12">
                    Extract a <span className="text-[#53d22d] font-bold">substring</span> (slice of the data train):
                </p>

                <div className="mb-12 p-8 rounded-xl bg-slate-800/50 border-2 border-cyan-500/30">
                    <pre className="text-xl font-mono text-gray-300 space-y-3">
                        <code className="text-cyan-400">text = "PYTHON"</code>
                        <code className="block mt-4"></code>
                        <code className="block">print(text[0:3])     <span className="text-gray-500"># PYT (characters 0, 1, 2)</span></code>
                        <code className="block">print(text[2:5])     <span className="text-gray-500"># THO (characters 2, 3, 4)</span></code>
                        <code className="block">print(text[1:4])     <span className="text-gray-500"># YTH</span></code>
                    </pre>
                </div>

                <div className="mb-8 p-6 rounded-xl bg-[#53d22d]/10 border-2 border-[#53d22d]/30">
                    <h3 className="text-[#53d22d] font-bold text-2xl mb-4">SYNTAX: string[start:stop]</h3>
                    <ul className="text-gray-300 text-lg space-y-2">
                        <li>• <span className="text-cyan-400 font-bold">start</span>: First index to include</li>
                        <li>• <span className="text-cyan-400 font-bold">stop</span>: First index to EXCLUDE (stop before this)</li>
                        <li>• <span className="text-[#53d22d] font-bold">Result</span>: characters from start to stop-1</li>
                    </ul>
                </div>

                <div className="p-6 rounded-xl bg-yellow-500/10 border-2 border-yellow-500/30">
                    <p className="text-xl text-gray-300">
                        💡 <span className="text-yellow-400 font-bold">Remember:</span> The stop index is <span className="text-red-400">exclusive</span> —
                        like a fence you can't cross!
                    </p>
                </div>
            </div>
        </div>
    );
}

// Slide 09: F-Strings
export function Lesson03Slide09() {
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
                    <Sparkles className="w-8 h-8 text-[#53d22d]" />
                    <h1 className="text-5xl font-bold text-[#53d22d]">F-STRINGS</h1>
                </div>

                <p className="text-2xl text-gray-300 mb-12">
                    The most powerful string formatting tool in Python:
                </p>

                <div className="mb-12 p-8 rounded-xl bg-slate-800/50 border-2 border-cyan-500/30">
                    <pre className="text-xl font-mono text-gray-300 space-y-2">
                        <code className="text-cyan-400">agent = "Shadow"</code>
                        <code className="text-cyan-400 block">health = 85</code>
                        <code className="text-cyan-400 block">damage = 23</code>
                        <code className="block mt-4"></code>
                        <code className="block">report = f"{'{agent}'} took {'{damage}'} damage. Health: {'{health - damage}'}"</code>
                        <code className="block">print(report)</code>
                        <code className="block text-[#53d22d] mt-2"># Shadow took 23 damage. Health: 62</code>
                    </pre>
                </div>

                <div className="mb-8 p-6 rounded-xl bg-cyan-500/10 border-2 border-cyan-500/30">
                    <h3 className="text-cyan-400 font-bold text-2xl mb-4">SYNTAX:</h3>
                    <ul className="text-gray-300 text-lg space-y-3">
                        <li>• Put <code className="text-[#53d22d] bg-[#53d22d]/10 px-2 py-1 rounded">f</code> before the opening quote</li>
                        <li>• Use <code className="text-[#53d22d] bg-[#53d22d]/10 px-2 py-1 rounded">{'{}'}</code> for variables/expressions</li>
                        <li>• Python automatically inserts the values!</li>
                    </ul>
                </div>

                <div className="p-6 rounded-xl bg-[#53d22d]/10 border border-[#53d22d]/30">
                    <p className="text-xl text-gray-300">
                        💡 F-strings can do <span className="text-[#53d22d] font-bold">math</span> and
                        <span className="text-cyan-400 font-bold"> type conversion</span> automatically!
                    </p>
                </div>
            </div>
        </div>
    );
}

// Slide 10: String Methods
export function Lesson03Slide10() {
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
                    <Wrench className="w-8 h-8 text-cyan-400" />
                    <h1 className="text-5xl font-bold text-cyan-400">STRING METHODS</h1>
                </div>

                <p className="text-2xl text-gray-300 mb-12">
                    Built-in functions to manipulate strings:
                </p>

                <div className="space-y-6">
                    <div className="p-6 rounded-xl bg-slate-800/50 border border-cyan-500/30">
                        <h3 className="text-[#53d22d] font-bold text-xl mb-3">.upper() / .lower()</h3>
                        <pre className="text-lg font-mono text-gray-300">
                            <code className="text-cyan-400">message = "Hello Agent"</code>
                            <code className="block mt-2">print(message.upper())  <span className="text-gray-500"># HELLO AGENT</span></code>
                            <code className="block">print(message.lower())  <span className="text-gray-500"># hello agent</span></code>
                        </pre>
                    </div>

                    <div className="p-6 rounded-xl bg-slate-800/50 border border-cyan-500/30">
                        <h3 className="text-[#53d22d] font-bold text-xl mb-3">.replace()</h3>
                        <pre className="text-lg font-mono text-gray-300">
                            <code className="text-cyan-400">text = "I love cats!"</code>
                            <code className="block mt-2">new = text.replace("cats", "dogs")</code>
                            <code className="block text-[#53d22d]"># I love dogs!</code>
                        </pre>
                    </div>

                    <div className="p-6 rounded-xl bg-slate-800/50 border border-cyan-500/30">
                        <h3 className="text-[#53d22d] font-bold text-xl mb-3">.split()</h3>
                        <pre className="text-lg font-mono text-gray-300">
                            <code className="text-cyan-400">sentence = "Code is awesome"</code>
                            <code className="block mt-2">words = sentence.split()</code>
                            <code className="block text-[#53d22d]"># ['Code', 'is', 'awesome']</code>
                        </pre>
                    </div>
                </div>

                <div className="mt-8 p-6 rounded-xl bg-yellow-500/10 border-2 border-yellow-500/30">
                    <p className="text-xl text-gray-300">
                        ⚠️ <span className="text-yellow-400 font-bold">Important:</span> Strings are <span className="text-red-400 font-bold">immutable</span> —
                        methods create NEW strings, they don't modify the original!
                    </p>
                </div>
            </div>
        </div>
    );
}
