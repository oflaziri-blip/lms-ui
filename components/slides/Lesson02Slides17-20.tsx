/**
 * Lesson 02 - Slides 17-24: Variables in Action
 * Creating, Using, Re-assigning, Math, Multiple Variables
 */

import React from 'react';
import { Play, RefreshCw, Calculator, Users, Plus } from 'lucide-react';
import { Terminal, CodeLine } from './Terminal';

// Slide 17: Creating Your First Variable
export function Lesson02Slide17() {
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
                    <Play className="w-8 h-8 text-[#53d22d]" />
                    <h1 className="text-5xl font-bold text-[#53d22d]">CREATING YOUR FIRST VARIABLE</h1>
                </div>

                <p className="text-2xl text-gray-300 mb-12">
                    Let's create a variable <span className="text-cyan-400 font-bold">step-by-step</span>:
                </p>

                <div className="space-y-8">
                    <div className="p-6 rounded-xl bg-cyan-500/10 border-l-4 border-cyan-500">
                        <h3 className="text-cyan-400 font-bold text-xl mb-3">STEP 1: Choose a name</h3>
                        <p className="text-gray-300 text-lg">Let's store a player's score. We'll call it <code className="text-cyan-400 bg-cyan-400/10 px-2 py-1 rounded">player_score</code></p>
                    </div>

                    <div className="p-6 rounded-xl bg-cyan-500/10 border-l-4 border-cyan-500">
                        <h3 className="text-cyan-400 font-bold text-xl mb-3">STEP 2: Use the = operator</h3>
                        <p className="text-gray-300 text-lg">This tells Python: "I want to store something"</p>
                    </div>

                    <div className="p-6 rounded-xl bg-cyan-500/10 border-l-4 border-cyan-500">
                        <h3 className="text-cyan-400 font-bold text-xl mb-3">STEP 3: Provide the value</h3>
                        <p className="text-gray-300 text-lg">Let's store the number <code className="text-[#53d22d] bg-[#53d22d]/10 px-2 py-1 rounded">1000</code></p>
                    </div>
                </div>

                <div className="mt-12">
                    <h3 className="text-[#53d22d] font-bold text-2xl mb-6 text-center">COMPLETE CODE:</h3>
                    <Terminal variant="success" title="Python Console">
                        <CodeLine prompt=">>>">player_score = 1000</CodeLine>
                        <CodeLine className="text-[#53d22d]"># ✓ Variable created!</CodeLine>
                        <CodeLine className="text-gray-500"># Python stored 1000 in memory with the label "player_score"</CodeLine>
                    </Terminal>
                </div>

                <div className="mt-12 p-6 rounded-xl bg-[#53d22d]/10 border-2 border-[#53d22d]/30 text-center">
                    <p className="text-gray-300 text-xl">
                        🎉 Congratulations! You just created your first variable!
                    </p>
                </div>
            </div>
        </div>
    );
}

// Slide 18: Using Variables
export function Lesson02Slide18() {
    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-cyan-950 via-blue-950 to-slate-950 text-white p-12 relative overflow-hidden">
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'linear-gradient(cyan 1px, transparent 1px), linear-gradient(90deg, cyan 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }} />
            </div>

            <div className="relative z-10 max-w-5xl mx-auto">
                <h1 className="text-5xl font-bold text-cyan-400 mb-8">USING VARIABLES</h1>

                <p className="text-2xl text-gray-300 mb-12">
                    Once stored, you can <span className="text-[#53d22d] font-bold">use the variable</span> anywhere by typing its name:
                </p>

                <Terminal variant="success" title="Python Console">
                    <CodeLine prompt=">>>">agent_name = "Cipher"</CodeLine>
                    <CodeLine prompt=">>>">agent_level = 10</CodeLine>
                    <CodeLine className="text-gray-500"># Variables are stored. Now let's use them:</CodeLine>
                    <CodeLine prompt=">>>">&nbsp;</CodeLine>
                    <CodeLine prompt=">>>">print(agent_name)</CodeLine>
                    <CodeLine output>Cipher</CodeLine>
                    <CodeLine prompt=">>>">&nbsp;</CodeLine>
                    <CodeLine prompt=">>>">print(agent_level)</CodeLine>
                    <CodeLine output>10</CodeLine>
                    <CodeLine prompt=">>>">&nbsp;</CodeLine>
                    <CodeLine prompt=">>>">print("Agent:", agent_name, "Level:", agent_level)</CodeLine>
                    <CodeLine output>Agent: Cipher Level: 10</CodeLine>
                </Terminal>

                <div className="mt-12 grid grid-cols-2 gap-6">
                    <div className="p-6 rounded-xl bg-[#53d22d]/10 border border-[#53d22d]/30">
                        <h3 className="text-[#53d22d] font-bold text-xl mb-3">💡 KEY INSIGHT</h3>
                        <p className="text-gray-300">When Python sees a variable name, it automatically replaces it with the stored value!</p>
                    </div>
                    <div className="p-6 rounded-xl bg-cyan-500/10 border border-cyan-500/30">
                        <h3 className="text-cyan-400 font-bold text-xl mb-3">🔄 REUSABLE</h3>
                        <p className="text-gray-300">You can use the same variable as many times as you want!</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Slide 19: Re-assignment
export function Lesson02Slide19() {
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
                    <h1 className="text-5xl font-bold text-[#53d22d]">RE-ASSIGNMENT</h1>
                </div>

                <p className="text-2xl text-gray-300 mb-12">
                    Variables can <span className="text-cyan-400 font-bold">change</span>! You can assign a new value anytime:
                </p>

                <Terminal variant="success" title="Python Console">
                    <CodeLine prompt=">>>">health = 100</CodeLine>
                    <CodeLine prompt=">>>">print(health)</CodeLine>
                    <CodeLine output>100</CodeLine>
                    <CodeLine className="text-gray-500"># Player takes damage!</CodeLine>
                    <CodeLine prompt=">>>">health = 75</CodeLine>
                    <CodeLine prompt=">>>">print(health)</CodeLine>
                    <CodeLine output>75</CodeLine>
                    <CodeLine className="text-gray-500"># Player finds health pack!</CodeLine>
                    <CodeLine prompt=">>>">health = 100</CodeLine>
                    <CodeLine prompt=">>>">print(health)</CodeLine>
                    <CodeLine output>100</CodeLine>
                </Terminal>

                <div className="mt-12 p-8 rounded-xl bg-yellow-500/10 border-2 border-yellow-500/30">
                    <h3 className="text-yellow-400 font-bold text-2xl mb-4">⚠️ IMPORTANT</h3>
                    <p className="text-gray-300 text-xl leading-relaxed">
                        When you re-assign a variable, the <span className="text-red-400 font-bold">old value is erased</span> and
                        replaced with the <span className="text-[#53d22d] font-bold">new value</span>.
                        Python doesn't remember the old value!
                    </p>
                </div>

                <div className="mt-8 p-6 rounded-xl bg-cyan-500/10 border border-cyan-500/30">
                    <p className="text-gray-300 text-lg text-center">
                        Think of it like <span className="text-cyan-400 font-bold">overwriting a file</span> —
                        the container stays the same, but the contents change!
                    </p>
                </div>
            </div>
        </div>
    );
}

// Slide 20: Variables in Math
export function Lesson02Slide20() {
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
                    <Calculator className="w-8 h-8 text-cyan-400" />
                    <h1 className="text-5xl font-bold text-cyan-400">VARIABLES IN MATH</h1>
                </div>

                <p className="text-2xl text-gray-300 mb-12">
                    Variables work <span className="text-[#53d22d] font-bold">perfectly</span> with math operations:
                </p>

                <Terminal variant="success" title="Python Console">
                    <CodeLine prompt=">>>">base_damage = 50</CodeLine>
                    <CodeLine prompt=">>>">critical_multiplier = 2</CodeLine>
                    <CodeLine prompt=">>>">&nbsp;</CodeLine>
                    <CodeLine prompt=">>>">total_damage = base_damage * critical_multiplier</CodeLine>
                    <CodeLine prompt=">>>">print(total_damage)</CodeLine>
                    <CodeLine output>100</CodeLine>
                    <CodeLine className="text-[#53d22d]"># ✓ Variables used in calculation!</CodeLine>
                </Terminal>

                <div className="mt-12 grid grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-cyan-400 font-bold text-xl mb-4">MORE EXAMPLES:</h3>
                        <Terminal variant="default" title="Python">
                            <CodeLine>price = 100</CodeLine>
                            <CodeLine>discount = 20</CodeLine>
                            <CodeLine>final_price = price - discount</CodeLine>
                            <CodeLine className="text-gray-500"># final_price is now 80</CodeLine>
                        </Terminal>
                    </div>

                    <div>
                        <h3 className="text-[#53d22d] font-bold text-xl mb-4">SELF-UPDATE:</h3>
                        <Terminal variant="success" title="Python">
                            <CodeLine>score = 100</CodeLine>
                            <CodeLine>score = score + 50</CodeLine>
                            <CodeLine className="text-gray-500"># score is now 150!</CodeLine>
                            <CodeLine className="text-gray-500"># Old value (100) + 50 = new value</CodeLine>
                        </Terminal>
                    </div>
                </div>

                <div className="mt-12 p-6 rounded-xl bg-[#53d22d]/10 border-2 border-[#53d22d]/30">
                    <p className="text-gray-300 text-xl text-center">
                        💡 <code className="text-cyan-400 bg-cyan-400/10 px-2 py-1 rounded">score = score + 50</code> means:
                        "Take the current value of score, add 50, then store the result back in score"
                    </p>
                </div>
            </div>
        </div>
    );
}
