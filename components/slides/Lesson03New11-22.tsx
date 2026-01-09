/**
 * Lesson 03 - DATA STRINGS (COMPLETE)
 * Slides 11-22: Methods, Practice, and Closure
 * CONCISE & FOCUSED - No unnecessary length!
 * NO F-STRINGS!
 */

import React from 'react';
import { Eraser, Search, Target, Code2, BookCheck, Rocket, Award, Trophy } from 'lucide-react';
import { Terminal, CodeLine } from './Terminal';
import { CharacterQuote, ProTip, RealWorldExample } from './CharacterQuote';

// ============================================================================
// SLIDE 11: STRING METHODS - STRIP & REPLACE
// ============================================================================
export function Lesson03NewSlide11() {
    return (
        <div className="h-screen w-full overflow-hidden bg-gradient-to-br from-cyan-950 via-blue-950 to-slate-950 text-white relative flex items-center justify-center">
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'linear-gradient(cyan 1px, transparent 1px), linear-gradient(90deg, cyan 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }} />
            </div>

            <div className="relative z-10 max-w-5xl w-full px-8">
                <h1 className="text-4xl font-bold text-[#53d22d] mb-6">STRING METHODS: CLEAN & REPLACE</h1>

                <div className="grid grid-cols-2 gap-8">
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <Eraser className="w-6 h-6 text-cyan-400" />
                            <h3 className="text-cyan-400 font-bold text-xl">.strip()</h3>
                        </div>
                        <Terminal variant="success" title="Python">
                            <CodeLine>text = "  Hello  "</CodeLine>
                            <CodeLine>print(text.strip())</CodeLine>
                            <CodeLine output>Hello</CodeLine>
                        </Terminal>
                        <p className="mt-3 text-sm text-gray-400">Removes whitespace from both ends</p>
                    </div>

                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <Code2 className="w-6 h-6 text-[#53d22d]" />
                            <h3 className="text-[#53d22d] font-bold text-xl">.replace()</h3>
                        </div>
                        <Terminal variant="success" title="Python">
                            <CodeLine>text = "Hello World"</CodeLine>
                            <CodeLine>print(text.replace("World", "Chronos"))</CodeLine>
                            <CodeLine output>Hello Chronos</CodeLine>
                        </Terminal>
                        <p className="mt-3 text-sm text-gray-400">Replaces all occurrences</p>
                    </div>
                </div>

                <div className="mt-8 p-6 bg-cyan-500/10 border-l-4 border-cyan-500 rounded-r-xl">
                    <p className="text-lg text-gray-300">
                        <span className="text-cyan-400 font-bold">Use case:</span> Cleaning user input, text formatting
                    </p>
                </div>
            </div>
        </div>
    );
}

// ============================================================================
// SLIDE 12: STRING METHODS - FIND & COUNT
// ============================================================================
export function Lesson03NewSlide12() {
    return (
        <div className="h-screen w-full overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-950 text-white relative flex items-center justify-center">
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(#06b6d4 1px, transparent 1px)',
                    backgroundSize: '30px 30px'
                }} />
            </div>

            <div className="relative z-10 max-w-4xl w-full px-8">
                <div className="flex items-center gap-3 mb-6">
                    <Search className="w-8 h-8 text-cyan-400" />
                    <h1 className="text-4xl font-bold text-cyan-400">STRING METHODS: SEARCH</h1>
                </div>

                <Terminal variant="success" title="Python">
                    <CodeLine>email = "user@example.com"</CodeLine>
                    <CodeLine>&nbsp;</CodeLine>
                    <CodeLine># Find position of @</CodeLine>
                    <CodeLine>print(email.find("@"))</CodeLine>
                    <CodeLine output>4</CodeLine>
                    <CodeLine>&nbsp;</CodeLine>
                    <CodeLine># Not found returns -1</CodeLine>
                    <CodeLine>print(email.find("xyz"))</CodeLine>
                    <CodeLine output>-1</CodeLine>
                    <CodeLine>&nbsp;</CodeLine>
                    <CodeLine># Count occurrences</CodeLine>
                    <CodeLine>text = "banana"</CodeLine>
                    <CodeLine>print(text.count("a"))</CodeLine>
                    <CodeLine output>3</CodeLine>
                </Terminal>

                <div className="mt-6 p-5 bg-[#53d22d]/10 border-l-4 border-[#53d22d] rounded-r-xl">
                    <p className="text-gray-300">
                        <span className="text-[#53d22d] font-bold">Use case:</span> Email validation, text analysis, pattern detection
                    </p>
                </div>
            </div>
        </div>
    );
}

// ============================================================================
// SLIDE 13: REAL-WORLD EXAMPLE (ARIA)
// ============================================================================
export function Lesson03NewSlide13() {
    return (
        <div className="h-screen w-full overflow-hidden bg-gradient-to-br from-cyan-950 via-blue-950 to-slate-950 text-white relative flex items-center justify-center">
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'linear-gradient(#53d22d 1px, transparent 1px), linear-gradient(90deg, #53d22d 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }} />
            </div>

            <div className="relative z-10 max-w-4xl w-full px-8">
                <h1 className="text-4xl font-bold text-cyan-400 mb-6">REAL-WORLD: USERNAME EXTRACTOR</h1>

                <RealWorldExample>
                    <p className="mb-4 italic text-lg">
                        "Extracting usernames from email addresses in the Chronos database..."
                    </p>
                    <Terminal variant="success" title="Agent Profile System">
                        <CodeLine>email = "agent007@chronos.net"</CodeLine>
                        <CodeLine>&nbsp;</CodeLine>
                        <CodeLine># Find @ position</CodeLine>
                        <CodeLine>at_pos = email.find("@")</CodeLine>
                        <CodeLine>&nbsp;</CodeLine>
                        <CodeLine># Extract username</CodeLine>
                        <CodeLine>username = email[0:at_pos]</CodeLine>
                        <CodeLine>&nbsp;</CodeLine>
                        <CodeLine>print("Welcome,", username.upper())</CodeLine>
                        <CodeLine output>Welcome, AGENT007</CodeLine>
                    </Terminal>
                    <p className="mt-4 text-sm">
                        Combining <span className="text-cyan-400 font-bold">.find()</span>, <span className="text-yellow-400 font-bold">slicing</span>, and <span className="text-[#53d22d] font-bold">.upper()</span>!
                    </p>
                </RealWorldExample>
            </div>
        </div>
    );
}

// ============================================================================
// SLIDE 14: CHALLENGE 1 - TEXT FORMATTER
// ============================================================================
export function Lesson03NewSlide14() {
    return (
        <div className="h-screen w-full overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-950 text-white relative flex items-center justify-center">
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'linear-gradient(cyan 1px, transparent 1px), linear-gradient(90deg, cyan 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }} />
            </div>

            <div className="relative z-10 max-w-4xl w-full px-8">
                <div className="flex items-center gap-3 mb-6">
                    <Target className="w-8 h-8 text-cyan-400" />
                    <h1 className="text-4xl font-bold text-cyan-400">CHALLENGE: TEXT FORMATTER</h1>
                </div>

                <div className="p-8 bg-slate-900/50 border-2 border-cyan-500/30 rounded-xl">
                    <h3 className="text-[#53d22d] font-bold text-2xl mb-6">Task: Clean and format user input</h3>

                    <div className="space-y-4 text-lg text-gray-300">
                        <p><span className="text-cyan-400 font-bold">Given:</span> <code className="text-yellow-400">"  AGENT_007  "</code></p>
                        <p><span className="text-[#53d22d] font-bold">Steps:</span></p>
                        <ol className="list-decimal list-inside space-y-2 ml-4">
                            <li>Remove spaces with .strip()</li>
                            <li>Convert to lowercase with .lower()</li>
                            <li>Replace underscore with hyphen using .replace()</li>
                            <li>Extract just the number part with slicing</li>
                        </ol>
                        <p><span className="text-cyan-400 font-bold">Expected:</span> <code className="text-[#53d22d]">"agent-007"</code> and <code className="text-[#53d22d]">"007"</code></p>
                    </div>
                </div>

                <div className="mt-6 text-center text-sm text-gray-500">
                    Try it yourself before checking the solution!
                </div>
            </div>
        </div>
    );
}

// ============================================================================
// SLIDE 15: CHALLENGE 2 - TEXT ANALYZER
// ============================================================================
export function Lesson03NewSlide15() {
    return (
        <div className="h-screen w-full overflow-hidden bg-gradient-to-br from-cyan-950 via-blue-950 to-slate-950 text-white relative flex items-center justify-center">
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(#06b6d4 1px, transparent 1px)',
                    backgroundSize: '30px 30px'
                }} />
            </div>

            <div className="relative z-10 max-w-4xl w-full px-8">
                <div className="flex items-center gap-3 mb-6">
                    <Code2 className="w-8 h-8 text-[#53d22d]" />
                    <h1 className="text-4xl font-bold text-[#53d22d]">CHALLENGE: TEXT ANALYZER</h1>
                </div>

                <Terminal variant="success" title="Python">
                    <CodeLine>text = "Hello Chronos World"</CodeLine>
                    <CodeLine>&nbsp;</CodeLine>
                    <CodeLine>print("Length:", len(text))</CodeLine>
                    <CodeLine output>Length: 19</CodeLine>
                    <CodeLine>&nbsp;</CodeLine>
                    <CodeLine>print("Spaces:", text.count(" "))</CodeLine>
                    <CodeLine output>Spaces: 2</CodeLine>
                    <CodeLine>&nbsp;</CodeLine>
                    <CodeLine>print("Letter 'o':", text.count("o"))</CodeLine>
                    <CodeLine output>Letter 'o': 3</CodeLine>
                    <CodeLine>&nbsp;</CodeLine>
                    <CodeLine>print("Uppercase:", text.upper())</CodeLine>
                    <CodeLine output>Uppercase: HELLO CHRONOS WORLD</CodeLine>
                </Terminal>

                <div className="mt-6 p-5 bg-[#53d22d]/10 border-l-4 border-[#53d22d] rounded-r-xl">
                    <p className="text-gray-300">
                        <span className="text-[#53d22d] font-bold">Try it:</span> Analyze your own text with len(), .count(), and .upper()!
                    </p>
                </div>
            </div>
        </div>
    );
}

// ============================================================================
// SLIDE 16: PRO TIPS (KAEL)
// ============================================================================
export function Lesson03NewSlide16() {
    return (
        <div className="h-screen w-full overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-950 text-white relative flex items-center justify-center">
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'linear-gradient(#53d22d 1px, transparent 1px), linear-gradient(90deg, #53d22d 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }} />
            </div>

            <div className="relative z-10 max-w-4xl w-full px-8">
                <h1 className="text-4xl font-bold text-[#53d22d] mb-8">CHIEF ENGINEER'S PRO TIPS</h1>

                <div className="space-y-6">
                    <ProTip>
                        <p className="mb-3">
                            <span className="text-[#53d22d] font-bold">Strings are immutable</span> — methods return NEW strings, they don't change the original.
                        </p>
                        <div className="text-sm font-mono">
                            <p className="text-gray-400">name = "john"</p>
                            <p className="text-gray-400">name.upper()  # Returns "JOHN"</p>
                            <p className="text-gray-400">print(name)   # Still "john"!</p>
                        </div>
                    </ProTip>

                    <div className="p-6 bg-[#53d22d]/10 border-l-4 border-[#53d22d] rounded-r-xl">
                        <h4 className="text-[#53d22d] font-bold text-lg mb-3">💡 PRO TIP</h4>
                        <p className="text-gray-300 mb-3">
                            Chain methods together for powerful transformations:
                        </p>
                        <code className="text-cyan-400">text.strip().lower().replace("_", "-")</code>
                    </div>

                    <div className="p-6 bg-yellow-500/10 border-l-4 border-yellow-500 rounded-r-xl">
                        <h4 className="text-yellow-400 font-bold text-lg mb-3">⚠️ REMEMBER</h4>
                        <p className="text-gray-300">
                            Slicing <code className="text-cyan-400">[start:end]</code> does NOT include the end index!
                            <br />
                            <code className="text-gray-400">"HELLO"[0:3]</code> → <code className="text-[#53d22d]">"HEL"</code> (not "HELL")
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Continue with closure slides...
