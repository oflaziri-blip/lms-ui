/**
 * Lesson 04 - NESTED CONSTRUCTIONS
 * Slides 06-15: Nested Math & Functions
 */

import React from 'react';
import { Layers, Code2, Zap, Target, BookCheck, Trophy, Award, AlertTriangle, Lightbulb } from 'lucide-react';
import { Terminal, CodeLine } from './Terminal';
import { CharacterQuote, ProTip, RealWorldExample } from './CharacterQuote';

// ============================================================================
// SLIDE 06: Math Inside Math - Basics
// ============================================================================
function Lesson04NewSlide06() {
    return (
        <div className="h-screen w-full overflow-hidden bg-gradient-to-br from-cyan-950 via-blue-950 to-slate-950 text-white relative flex items-center justify-center">
            <div className="relative z-10 max-w-4xl w-full px-8">
                <h1 className="text-4xl font-bold text-cyan-400 mb-6">Math Inside Math - Basics</h1>
                <Terminal title="Python">
                    <CodeLine># Without parentheses</CodeLine>
                    <CodeLine>print(10 + 5 * 2)</CodeLine>
                    <CodeLine output>20</CodeLine>
                    <CodeLine># With parentheses (nesting)</CodeLine>
                    <CodeLine>print((10 + 5) * 2)</CodeLine>
                    <CodeLine output>30</CodeLine>
                </Terminal>
                <div className="mt-8 p-6 bg-green-500/10 border-l-4 border-green-500 rounded-r-xl">
                    <p className="text-lg text-gray-300">
                        Parentheses create an "inner" calculation that runs first.
                    </p>
                </div>
            </div>
        </div>
    );
}

// ============================================================================
// SLIDE 07: Multiple Parentheses Levels
// ============================================================================
function Lesson04NewSlide07() {
    return (
        <div className="h-screen w-full overflow-hidden bg-gradient-to-br from-cyan-950 via-blue-950 to-slate-950 text-white relative flex items-center justify-center">
            <div className="relative z-10 max-w-4xl w-full px-8">
                <h1 className="text-4xl font-bold text-cyan-400 mb-6">Multiple Parentheses Levels</h1>
                <Terminal title="Python">
                    <CodeLine>print(((10 + 5) * 2) - 1)</CodeLine>
                    <CodeLine output>29</CodeLine>
                </Terminal>
                 <div className="mt-8 p-6 bg-cyan-500/10 border-l-4 border-cyan-500 rounded-r-xl">
                    <p># Step 1: 10 + 5 = 15</p>
                    <p># Step 2: 15 * 2 = 30</p>
                    <p># Step 3: 30 - 1 = 29</p>
                </div>
            </div>
        </div>
    );
}

// ============================================================================
// SLIDE 08: Order of Evaluation - Inside Out
// ============================================================================
function Lesson04NewSlide08() {
    return (
        <div className="h-screen w-full overflow-hidden bg-gradient-to-br from-cyan-950 via-blue-950 to-slate-950 text-white relative flex items-center justify-center">
            <div className="relative z-10 max-w-4xl w-full px-8">
                <h1 className="text-4xl font-bold text-cyan-400 mb-6">Order of Evaluation - Inside Out</h1>
                <p className="text-2xl text-gray-300 mb-6 text-center">
                    Python works from inside to outside
                </p>
                <Terminal title="Python">
                    <CodeLine>(((5 + 3) * 2) ** 2)</CodeLine>
                </Terminal>
            </div>
        </div>
    );
}

// ============================================================================
// SLIDE 09: Common Mistakes (Error-First)
// ============================================================================
function Lesson04NewSlide09() {
    return (
        <div className="h-screen w-full overflow-hidden bg-gradient-to-br from-cyan-950 via-blue-950 to-slate-950 text-white relative flex items-center justify-center">
            <div className="relative z-10 max-w-4xl w-full px-8">
                <h1 className="text-4xl font-bold text-red-500 mb-6">Common Mistakes</h1>
                <Terminal variant="error" title="Python">
                    <CodeLine># ERROR: Missing closing parenthesis</CodeLine>
                    <CodeLine>print((10 + 5 * 2)</CodeLine>
                    <CodeLine output>SyntaxError: unexpected EOF</CodeLine>
                    <CodeLine># ERROR: Extra parenthesis</CodeLine>
                    <CodeLine>print((10 + 5)) * 2))</CodeLine>
                    <CodeLine output>SyntaxError: unmatched ')'</CodeLine>
                </Terminal>
            </div>
        </div>
    );
}

// ============================================================================
// SLIDE 10: Pro Tips from Kael
// ============================================================================
function Lesson04NewSlide10() {
    return (
        <div className="h-screen w-full overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-950 text-white relative flex items-center justify-center">
            <div className="relative z-10 max-w-5xl w-full px-8">
                <ProTip>
                    <p>"Always match parentheses—count them!"</p>
                    <p>"Work inside-out when reading nested code"</p>
                    <p>"Use extra parentheses for clarity, even if not needed"</p>
                </ProTip>
            </div>
        </div>
    );
}

// ============================================================================
// SLIDE 11: Calculation Inside print()
// ============================================================================
function Lesson04NewSlide11() {
    return (
        <div className="h-screen w-full overflow-hidden bg-gradient-to-br from-cyan-950 via-blue-950 to-slate-950 text-white relative flex items-center justify-center">
            <div className="relative z-10 max-w-4xl w-full px-8">
                <h1 className="text-4xl font-bold text-cyan-400 mb-6">Calculation Inside print()</h1>
                <div className="grid grid-cols-2 gap-8">
                    <Terminal title="Python">
                        <CodeLine># Instead of this:</CodeLine>
                        <CodeLine>result = 10 + 5</CodeLine>
                        <CodeLine>print(result)</CodeLine>
                    </Terminal>
                    <Terminal title="Python">
                        <CodeLine># We can nest:</CodeLine>
                        <CodeLine>print(10 + 5)</CodeLine>
                        <CodeLine output>15</CodeLine>
                    </Terminal>
                </div>
            </div>
        </div>
    );
}

// ============================================================================
// SLIDE 12: String Operations in print()
// ============================================================================
function Lesson04NewSlide12() {
    return (
        <div className="h-screen w-full overflow-hidden bg-gradient-to-br from-cyan-950 via-blue-950 to-slate-950 text-white relative flex items-center justify-center">
            <div className="relative z-10 max-w-4xl w-full px-8">
                <h1 className="text-4xl font-bold text-cyan-400 mb-6">String Operations in print()</h1>
                <Terminal title="Python">
                    <CodeLine>print("=" * 20)</CodeLine>
                    <CodeLine output>====================</CodeLine>
                    <CodeLine>print("Hello" + " " + "World")</CodeLine>
                    <CodeLine output>Hello World</CodeLine>
                    <CodeLine>print(len("Chronos"))</CodeLine>
                    <CodeLine output>7</CodeLine>
                </Terminal>
            </div>
        </div>
    );
}

// ============================================================================
// SLIDE 13: Function Inside Function
// ============================================================================
function Lesson04NewSlide13() {
    return (
        <div className="h-screen w-full overflow-hidden bg-gradient-to-br from-cyan-950 via-blue-950 to-slate-950 text-white relative flex items-center justify-center">
            <div className="relative z-10 max-w-4xl w-full px-8">
                <h1 className="text-4xl font-bold text-cyan-400 mb-6">Function Inside Function</h1>
                <Terminal title="Python">
                    <CodeLine># len() inside print()</CodeLine>
                    <CodeLine>print(len("Hello"))</CodeLine>
                    <CodeLine output>5</CodeLine>
                    <CodeLine># Multiple operations</CodeLine>
                    <CodeLine>print(len("Hello" + "World"))</CodeLine>
                    <CodeLine output>10</CodeLine>
                </Terminal>
            </div>
        </div>
    );
}

// ============================================================================
// SLIDE 14: Multiple Operations in One Line
// ============================================================================
function Lesson04NewSlide14() {
    return (
        <div className="h-screen w-full overflow-hidden bg-gradient-to-br from-cyan-950 via-blue-950 to-slate-950 text-white relative flex items-center justify-center">
            <div className="relative z-10 max-w-4xl w-full px-8">
                <h1 className="text-4xl font-bold text-cyan-400 mb-6">Multiple Operations in One Line</h1>
                <Terminal title="Python">
                    <CodeLine>print(len("Hello") + len("World"))</CodeLine>
                    <CodeLine output>10</CodeLine>
                    <CodeLine>print("-" * (5 + 5))</CodeLine>
                    <CodeLine output>----------</CodeLine>
                    <CodeLine>print("Score:", (100 + 50) * 2)</CodeLine>
                    <CodeLine output>Score: 300</CodeLine>
                </Terminal>
            </div>
        </div>
    );
}

// ============================================================================
// SLIDE 15: Real-World Example - Aria
// ============================================================================
function Lesson04NewSlide15() {
    return (
        <div className="h-screen w-full overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-950 text-white relative flex items-center justify-center">
            <div className="relative z-10 max-w-5xl w-full px-8">
                <RealWorldExample>
                    <p>User registration system - validate and format username</p>
                    <Terminal title="Python">
                        <CodeLine>username = "  AGENT_007  "</CodeLine>
                        <CodeLine>print(len(username.strip().lower()))</CodeLine>
                        <CodeLine output>9</CodeLine>
                    </Terminal>
                </RealWorldExample>
            </div>
        </div>
    );
}

export {
    Lesson04NewSlide06,
    Lesson04NewSlide07,
    Lesson04NewSlide08,
    Lesson04NewSlide09,
    Lesson04NewSlide10,
    Lesson04NewSlide11,
    Lesson04NewSlide12,
    Lesson04NewSlide13,
    Lesson04NewSlide14,
    Lesson04NewSlide15
};
