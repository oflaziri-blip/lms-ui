import React from 'react';
import {
    Layers, Code2, Zap, Target, BookCheck, Trophy,
    Award, AlertTriangle, Lightbulb
} from 'lucide-react';
import { Terminal, CodeLine } from './Terminal';
import { CharacterQuote, ProTip, RealWorldExample } from './CharacterQuote';

// ============================================================================
// SLIDE 06: MATH INSIDE MATH - BASICS
// ============================================================================
export function Lesson04NewSlide06() {
    return (
        <div className="h-screen w-full overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-950 text-white relative flex items-center justify-center">
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'linear-gradient(cyan 1px, transparent 1px), linear-gradient(90deg, cyan 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }} />
            </div>

            <div className="relative z-10 max-w-5xl w-full px-8">
                <h1 className="text-4xl font-bold text-cyan-400 mb-8">MATH NESTING WITH PARENTHESES</h1>

                <div className="grid grid-cols-2 gap-8 items-center">
                    <div>
                        <div className="p-6 bg-slate-900/50 border-2 border-red-500/30 rounded-xl mb-6">
                            <h3 className="text-red-400 font-bold mb-2">Without Parentheses</h3>
                            <Terminal variant="error" title="Standard PEMDAS">
                                <CodeLine>print(10 + 5 * 2)</CodeLine>
                                <CodeLine output>20</CodeLine>
                            </Terminal>
                            <p className="mt-2 text-sm text-gray-400">Multiplication happens first!</p>
                        </div>

                         <div className="p-6 bg-slate-900/50 border-2 border-[#53d22d]/30 rounded-xl">
                            <h3 className="text-[#53d22d] font-bold mb-2">With Parentheses (Nesting)</h3>
                            <Terminal variant="success" title="Forced Order">
                                <CodeLine>print((10 + 5) * 2)</CodeLine>
                                <CodeLine output>30</CodeLine>
                            </Terminal>
                            <p className="mt-2 text-sm text-gray-400">Parentheses force 10+5 to happen first!</p>
                        </div>
                    </div>

                    <div className="p-6 bg-cyan-500/10 border-l-4 border-cyan-500 rounded-r-xl">
                        <p className="text-lg text-gray-300">
                             Parentheses create an <span className="text-cyan-400 font-bold">inner calculation</span>.
                             <br/><br/>
                             Python solves what is inside the parentheses <strong>before</strong> doing anything else.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

// ============================================================================
// SLIDE 07: MULTIPLE PARENTHESES LEVELS
// ============================================================================
export function Lesson04NewSlide07() {
    return (
        <div className="h-screen w-full overflow-hidden bg-gradient-to-br from-cyan-950 via-blue-950 to-slate-950 text-white relative flex items-center justify-center">
            <div className="absolute inset-0 opacity-5">
                 <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(#06b6d4 1px, transparent 1px)',
                    backgroundSize: '30px 30px'
                }} />
            </div>

            <div className="relative z-10 max-w-4xl w-full px-8">
                <h1 className="text-4xl font-bold text-cyan-400 mb-6">DEEPER NESTING</h1>

                <p className="text-xl text-gray-300 mb-8">
                    You can put parentheses inside parentheses!
                </p>

                <Terminal variant="success" title="Multiple Levels">
                    <CodeLine>print(((10 + 5) * 2) - 1)</CodeLine>
                    <CodeLine output>29</CodeLine>
                </Terminal>

                <div className="mt-8 space-y-4">
                    <div className="flex items-center gap-4 text-gray-300">
                        <div className="w-8 h-8 rounded-full bg-cyan-500 flex items-center justify-center font-bold text-black">1</div>
                        <p>Inner most: <span className="font-mono text-cyan-400">10 + 5 = 15</span></p>
                    </div>
                    <div className="flex items-center gap-4 text-gray-300">
                         <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center font-bold text-black">2</div>
                        <p>Middle: <span className="font-mono text-blue-400">15 * 2 = 30</span></p>
                    </div>
                    <div className="flex items-center gap-4 text-gray-300">
                         <div className="w-8 h-8 rounded-full bg-[#53d22d] flex items-center justify-center font-bold text-black">3</div>
                        <p>Outer: <span className="font-mono text-[#53d22d]">30 - 1 = 29</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

// ============================================================================
// SLIDE 08: ORDER OF EVALUATION - INSIDE OUT
// ============================================================================
export function Lesson04NewSlide08() {
    return (
        <div className="h-screen w-full overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-950 text-white relative flex items-center justify-center">
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'linear-gradient(cyan 1px, transparent 1px), linear-gradient(90deg, cyan 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }} />
            </div>

            <div className="relative z-10 max-w-5xl w-full px-8">
                <h1 className="text-4xl font-bold text-[#53d22d] mb-8">RULE: INSIDE-OUT</h1>

                <div className="p-8 bg-slate-900/50 border-2 border-[#53d22d]/30 rounded-xl text-center mb-12">
                     <p className="text-2xl text-gray-300">
                        Python always works from the <span className="text-[#53d22d] font-bold">INSIDE</span> to the <span className="text-cyan-400 font-bold">OUTSIDE</span>.
                    </p>
                </div>

                <div className="flex justify-center items-center gap-2 font-mono text-3xl">
                    <span className="text-gray-500">((</span>
                    <span className="text-cyan-400">(5 + 3)</span>
                    <span className="text-blue-400"> * 2)</span>
                    <span className="text-[#53d22d]"> ** 2)</span>
                </div>

                <div className="mt-12 grid grid-cols-3 gap-4">
                     <div className="text-center">
                        <div className="h-2 w-full bg-cyan-400 mb-2"></div>
                        <p className="text-cyan-400 font-bold">Step 1</p>
                        <p className="text-gray-400">5 + 3 = 8</p>
                     </div>
                     <div className="text-center">
                        <div className="h-2 w-full bg-blue-400 mb-2"></div>
                        <p className="text-blue-400 font-bold">Step 2</p>
                         <p className="text-gray-400">8 * 2 = 16</p>
                     </div>
                     <div className="text-center">
                        <div className="h-2 w-full bg-[#53d22d] mb-2"></div>
                         <p className="text-[#53d22d] font-bold">Step 3</p>
                         <p className="text-gray-400">16 ** 2 = 256</p>
                     </div>
                </div>
            </div>
        </div>
    );
}

// ============================================================================
// SLIDE 09: COMMON MISTAKES
// ============================================================================
export function Lesson04NewSlide09() {
    return (
        <div className="h-screen w-full overflow-hidden bg-gradient-to-br from-cyan-950 via-blue-950 to-slate-950 text-white relative flex items-center justify-center">
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'repeating-linear-gradient(45deg, #ef4444 0, #ef4444 1px, transparent 0, transparent 50%)',
                    backgroundSize: '10px 10px'
                }} />
            </div>

            <div className="relative z-10 max-w-4xl w-full px-8">
                <div className="flex items-center gap-4 mb-8">
                    <AlertTriangle className="w-10 h-10 text-red-500 animate-pulse" />
                    <h1 className="text-4xl font-bold text-red-500">SYSTEM ALERTS</h1>
                </div>

                <div className="space-y-6">
                    <div className="p-6 bg-red-500/10 border-l-4 border-red-500 rounded-r-xl">
                        <h3 className="text-red-400 font-bold mb-2">Missing Closing Parenthesis</h3>
                        <Terminal variant="error">
                            <CodeLine>print((10 + 5 * 2)</CodeLine>
                            <CodeLine error>SyntaxError: unexpected EOF while parsing</CodeLine>
                        </Terminal>
                        <p className="mt-2 text-sm text-gray-400">You opened 2 parentheses but only closed 1!</p>
                    </div>

                    <div className="p-6 bg-red-500/10 border-l-4 border-red-500 rounded-r-xl">
                        <h3 className="text-red-400 font-bold mb-2">Extra Parenthesis</h3>
                        <Terminal variant="error">
                            <CodeLine>print((10 + 5)) * 2))</CodeLine>
                            <CodeLine error>SyntaxError: unmatched unmatched unmatched ')'apos;)unmatched ')'apos;apos;)unmatched unmatched ')'apos;)unmatched ')'apos;apos;</CodeLine>
                        </Terminal>
                        <p className="mt-2 text-sm text-gray-400">Count your parentheses carefully!</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

// ============================================================================
// SLIDE 10: PRO TIPS
// ============================================================================
export function Lesson04NewSlide10() {
    return (
        <div className="h-screen w-full overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-950 text-white relative flex items-center justify-center">
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(#06b6d4 1px, transparent 1px)',
                    backgroundSize: '30px 30px'
                }} />
            </div>

            <div className="relative z-10 max-w-4xl w-full px-8">
                <h1 className="text-4xl font-bold text-cyan-400 mb-8">ENGINEERING BEST PRACTICES</h1>

                <ProTip>
                    <div className="space-y-6">
                         <div className="flex items-start gap-4">
                            <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 font-bold">1</div>
                            <p className="text-lg text-gray-300">
                                <span className="text-cyan-400 font-bold">Match your pairs:</span> For every <span className="font-mono">(</span> there must be a <span className="font-mono">)</span>.
                            </p>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 font-bold">2</div>
                            <p className="text-lg text-gray-300">
                                <span className="text-cyan-400 font-bold">Read Inside-Out:</span> When reading code, find the innermost parentheses first.
                            </p>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 font-bold">3</div>
                            <p className="text-lg text-gray-300">
                                <span className="text-cyan-400 font-bold">Clarity is King:</span> Use extra parentheses if it makes the math easier to read, even if not strictly needed.
                            </p>
                        </div>
                    </div>
                </ProTip>
            </div>
        </div>
    );
}

// ============================================================================
// SLIDE 11: CALCULATION INSIDE PRINT
// ============================================================================
export function Lesson04NewSlide11() {
    return (
        <div className="h-screen w-full overflow-hidden bg-gradient-to-br from-cyan-950 via-blue-950 to-slate-950 text-white relative flex items-center justify-center">
             <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'linear-gradient(cyan 1px, transparent 1px), linear-gradient(90deg, cyan 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }} />
            </div>

            <div className="relative z-10 max-w-5xl w-full px-8">
                <h1 className="text-4xl font-bold text-cyan-400 mb-8">NESTING IN FUNCTIONS</h1>

                <div className="grid grid-cols-2 gap-8">
                    <div className="opacity-50">
                        <h3 className="text-gray-400 font-bold mb-4">Old Way (Step-by-Step)</h3>
                        <Terminal variant="success">
                            <CodeLine>result = 10 + 5</CodeLine>
                            <CodeLine>print(result)</CodeLine>
                            <CodeLine output>15</CodeLine>
                        </Terminal>
                    </div>

                    <div>
                        <h3 className="text-[#53d22d] font-bold mb-4">Nested Way (Efficient)</h3>
                        <Terminal variant="success">
                            <CodeLine>print(10 + 5)</CodeLine>
                            <CodeLine output>15</CodeLine>
                        </Terminal>
                         <div className="mt-4 p-4 bg-cyan-500/10 border border-cyan-500/30 rounded-lg">
                            <p className="text-gray-300">
                                The calculation happens <span className="text-cyan-400 font-bold">INSIDE</span> the print function!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// ============================================================================
// SLIDE 12: STRING OPERATIONS IN PRINT
// ============================================================================
export function Lesson04NewSlide12() {
    return (
        <div className="h-screen w-full overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-950 text-white relative flex items-center justify-center">
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(#06b6d4 1px, transparent 1px)',
                    backgroundSize: '30px 30px'
                }} />
            </div>

            <div className="relative z-10 max-w-4xl w-full px-8">
                <h1 className="text-4xl font-bold text-cyan-400 mb-6">NESTED STRING OPERATIONS</h1>

                <p className="text-xl text-gray-300 mb-8">
                    You can do the same with strings!
                </p>

                <Terminal variant="success" title="String Nesting">
                    <CodeLine># String Multiplication</CodeLine>
                    <CodeLine>print("=" * 20)</CodeLine>
                    <CodeLine output>====================</CodeLine>
                    <CodeLine>&nbsp;</CodeLine>
                    <CodeLine># String Concatenation</CodeLine>
                    <CodeLine>print("""Hello"quot;Hello"Hello"quot;"quot;Hello""Hello"quot;Hello"Hello"quot;"quot;" + " " + """World"quot;World"World"quot;"quot;World""World"quot;World"World"quot;"quot;")</CodeLine>
                    <CodeLine output>Hello World</CodeLine>
                </Terminal>

                 <div className="mt-8 p-6 bg-blue-500/10 border-l-4 border-blue-500 rounded-r-xl">
                    <p className="text-lg text-gray-300">
                        Python creates the final string first, then prints it.
                    </p>
                </div>
            </div>
        </div>
    );
}

// ============================================================================
// SLIDE 13: FUNCTION INSIDE FUNCTION
// ============================================================================
export function Lesson04NewSlide13() {
    return (
        <div className="h-screen w-full overflow-hidden bg-gradient-to-br from-cyan-950 via-blue-950 to-slate-950 text-white relative flex items-center justify-center">
            <div className="absolute inset-0 opacity-5">
                 <div className="absolute inset-0" style={{
                    backgroundImage: 'linear-gradient(#53d22d 1px, transparent 1px), linear-gradient(90deg, #53d22d 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }} />
            </div>

            <div className="relative z-10 max-w-4xl w-full px-8">
                <h1 className="text-4xl font-bold text-[#53d22d] mb-8">FUNCTION INCEPTION</h1>

                <div className="space-y-8">
                    <div>
                        <h3 className="text-cyan-400 font-bold mb-2 text-xl">Functions as Arguments</h3>
                        <Terminal variant="success">
                             <CodeLine># len() inside print()</CodeLine>
                             <CodeLine>print(len("""Hello"quot;Hello"Hello"quot;"quot;Hello""Hello"quot;Hello"Hello"quot;"quot;"))</CodeLine>
                             <CodeLine output>5</CodeLine>
                        </Terminal>
                    </div>

                    <div>
                        <h3 className="text-blue-400 font-bold mb-2 text-xl">Combined Operations</h3>
                         <Terminal variant="success">
                             <CodeLine># Concatenate THEN measure</CodeLine>
                             <CodeLine>print(len("""Hello"quot;Hello"Hello"quot;"quot;Hello""Hello"quot;Hello"Hello"quot;"quot;" + """World"quot;World"World"quot;"quot;World""World"quot;World"World"quot;"quot;"))</CodeLine>
                             <CodeLine output>10</CodeLine>
                        </Terminal>
                    </div>
                </div>

                <div className="mt-8 text-center text-gray-400 italic">
                    """Hello"quot;Hello"Hello"quot;"quot;Hello""Hello"quot;Hello"Hello"quot;"quot;" + """World"quot;World"World"quot;"quot;World""World"quot;World"World"quot;"quot;" becomes "HelloWorld" (10 chars), then len() counts it.
                </div>
            </div>
        </div>
    );
}

// ============================================================================
// SLIDE 14: MULTIPLE OPERATIONS IN ONE LINE
// ============================================================================
export function Lesson04NewSlide14() {
    return (
        <div className="h-screen w-full overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-950 text-white relative flex items-center justify-center">
             <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(#06b6d4 1px, transparent 1px)',
                    backgroundSize: '30px 30px'
                }} />
            </div>

            <div className="relative z-10 max-w-4xl w-full px-8">
                <h1 className="text-4xl font-bold text-cyan-400 mb-8">COMPLEX NESTING</h1>

                <p className="text-xl text-gray-300 mb-6">
                    Combining math, strings, and functions:
                </p>

                <Terminal variant="success" title="Advanced Examples">
                     <CodeLine># 1. Measure two strings and add lengths</CodeLine>
                     <CodeLine>print(len("""Hello"quot;Hello"Hello"quot;"quot;Hello""Hello"quot;Hello"Hello"quot;"quot;") + len("""World"quot;World"World"quot;"quot;World""World"quot;World"World"quot;"quot;"))</CodeLine>
                     <CodeLine output>10</CodeLine>
                     <CodeLine>&nbsp;</CodeLine>
                     <CodeLine># 2. Calculate repeat count</CodeLine>
                     <CodeLine>print("-" * (5 + 5))</CodeLine>
                     <CodeLine output>----------</CodeLine>
                     <CodeLine>&nbsp;</CodeLine>
                     <CodeLine># 3. Format output with math</CodeLine>
                     <CodeLine>print("""Score:"quot;Score:"Score:"quot;"quot;Score:""Score:"quot;Score:"Score:"quot;"quot;", (100 + 50) * 2)</CodeLine>
                     <CodeLine output>Score: 300</CodeLine>
                </Terminal>
            </div>
        </div>
    );
}

// ============================================================================
// SLIDE 15: REAL-WORLD EXAMPLE
// ============================================================================
export function Lesson04NewSlide15() {
    return (
        <div className="h-screen w-full overflow-hidden bg-gradient-to-br from-cyan-950 via-blue-950 to-slate-950 text-white relative flex items-center justify-center">
            <div className="absolute inset-0 opacity-5">
                 <div className="absolute inset-0" style={{
                    backgroundImage: 'linear-gradient(cyan 1px, transparent 1px), linear-gradient(90deg, cyan 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }} />
            </div>

            <div className="relative z-10 max-w-4xl w-full px-8">
                <h1 className="text-4xl font-bold text-[#53d22d] mb-8">REAL-WORLD APPLICATION</h1>

                <RealWorldExample>
                    <p className="mb-6 italic text-lg">
                        """In the Chronos user database, we sanitize inputs in a single line."quot;In the Chronos user database, we sanitize inputs in a single line."In the Chronos user database, we sanitize inputs in a single line."quot;"quot;In the Chronos user database, we sanitize inputs in a single line.""In the Chronos user database, we sanitize inputs in a single line."quot;In the Chronos user database, we sanitize inputs in a single line."In the Chronos user database, we sanitize inputs in a single line."quot;"quot;"
                    </p>

                    <div className="bg-slate-900/80 p-6 rounded-lg border border-cyan-500/30 font-mono mb-6">
                         <div className="text-gray-400 mb-2"># User input is messy</div>
                         <div className="text-purple-400">username = """  AGENT_007  "quot;  AGENT_007  "  AGENT_007  "quot;"quot;  AGENT_007  ""  AGENT_007  "quot;  AGENT_007  "  AGENT_007  "quot;"quot;"</div>
                         <br/>
                         <div className="text-gray-400 mb-2"># Clean and measure in one step</div>
                         <div className="text-blue-400">print<span className="text-white">(</span><span className="text-yellow-400">len</span><span className="text-white">(</span>username.strip().lower()<span className="text-white">))</span></div>
                         <div className="text-[#53d22d] mt-2"># Output: 9</div>
                    </div>

                    <p className="text-sm text-gray-400">
                        We strip spaces, convert to lowercase, and count the length—all nested together.
                    </p>
                </RealWorldExample>
            </div>
        </div>
    );
}

// Export all slides
// Exports handled inline
