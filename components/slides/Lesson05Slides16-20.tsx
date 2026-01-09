/**
 * Lesson 05 - Slides 16-20: Advanced Patterns & Nested Logic
 * Complex Conditions, Nested If, Logical Operators, Real-World Examples
 */

import React from 'react';
import { Layers, Zap, Users, FileCode, Database } from 'lucide-react';
import { Terminal, CodeLine } from './Terminal';

// Slide 16: Complex Conditions
export function Lesson05Slide16() {
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
                    <Zap className="w-8 h-8 text-cyan-400" />
                    <h1 className="text-5xl font-bold text-cyan-400">COMPLEX CONDITIONS</h1>
                </div>

                <p className="text-2xl text-gray-300 mb-12">
                    Combine multiple conditions using <code className="text-[#53d22d]">and</code>,
                    <code className="text-[#53d22d] ml-2">or</code>, <code className="text-[#53d22d] ml-2">not</code>:
                </p>

                <div className="space-y-6">
                    <div className="p-6 rounded-xl bg-slate-800/50 border border-cyan-500/30">
                        <h3 className="text-cyan-400 font-bold text-xl mb-3">AND - Both must be True</h3>
                        <Terminal variant="success" title="Python">
                            <CodeLine>age = 20</CodeLine>
                            <CodeLine>has_license = True</CodeLine>
                            <CodeLine>&nbsp;</CodeLine>
                            <CodeLine>if age &gt;= 18 and has_license:</CodeLine>
                            <CodeLine>    print("Can drive")</CodeLine>
                            <CodeLine>else:</CodeLine>
                            <CodeLine>    print("Cannot drive")</CodeLine>
                        </Terminal>
                    </div>

                    <div className="p-6 rounded-xl bg-slate-800/50 border border-cyan-500/30">
                        <h3 className="text-cyan-400 font-bold text-xl mb-3">OR - At least one must be True</h3>
                        <Terminal variant="success" title="Python">
                            <CodeLine>is_weekend = True</CodeLine>
                            <CodeLine>is_holiday = False</CodeLine>
                            <CodeLine>&nbsp;</CodeLine>
                            <CodeLine>if is_weekend or is_holiday:</CodeLine>
                            <CodeLine>    print("Day off!")</CodeLine>
                            <CodeLine>else:</CodeLine>
                            <CodeLine>    print("Work day")</CodeLine>
                        </Terminal>
                    </div>

                    <div className="p-6 rounded-xl bg-slate-800/50 border border-cyan-500/30">
                        <h3 className="text-cyan-400 font-bold text-xl mb-3">NOT - Reverses the condition</h3>
                        <Terminal variant="success" title="Python">
                            <CodeLine>is_raining = False</CodeLine>
                            <CodeLine>&nbsp;</CodeLine>
                            <CodeLine>if not is_raining:</CodeLine>
                            <CodeLine>    print("Go outside!")</CodeLine>
                        </Terminal>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Slide 17: Nested If Statements
export function Lesson05Slide17() {
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
                    <Layers className="w-8 h-8 text-[#53d22d]" />
                    <h1 className="text-5xl font-bold text-[#53d22d]">NESTED IF STATEMENTS</h1>
                </div>

                <p className="text-2xl text-gray-300 mb-12">
                    You can put if statements <span className="text-[#53d22d] font-bold">inside</span> other if statements:
                </p>

                <Terminal variant="success" title="Chronos Security Clearance">
                    <CodeLine>age = int(input("Age: "))</CodeLine>
                    <CodeLine>clearance = input("Clearance level: ")</CodeLine>
                    <CodeLine>&nbsp;</CodeLine>
                    <CodeLine>if age &gt;= 18:</CodeLine>
                    <CodeLine>    if clearance == "high":</CodeLine>
                    <CodeLine>        print("Full access granted")</CodeLine>
                    <CodeLine>    elif clearance == "medium":</CodeLine>
                    <CodeLine>        print("Limited access granted")</CodeLine>
                    <CodeLine>    else:</CodeLine>
                    <CodeLine>        print("Basic access granted")</CodeLine>
                    <CodeLine>else:</CodeLine>
                    <CodeLine>    print("Access denied - Age requirement not met")</CodeLine>
                </Terminal>

                <div className="mt-12 p-8 rounded-xl bg-yellow-500/10 border-2 border-yellow-500/30">
                    <h3 className="text-yellow-400 font-bold text-2xl mb-4">⚠️ IMPORTANT:</h3>
                    <ul className="text-gray-300 space-y-2 text-lg">
                        <li>• Each nested level adds 4 more spaces of indentation</li>
                        <li>• Don't nest too deeply (max 2-3 levels)</li>
                        <li>• Consider using <code className="text-cyan-400">and</code> instead of nesting when possible</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

// Slide 18: User Authentication Example
export function Lesson05Slide18() {
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
                    <Users className="w-8 h-8 text-cyan-400" />
                    <h1 className="text-5xl font-bold text-cyan-400">REAL-WORLD: USER AUTHENTICATION</h1>
                </div>

                <Terminal variant="success" title="Chronos Login System">
                    <CodeLine>username = input("Username: ")</CodeLine>
                    <CodeLine>password = input("Password: ")</CodeLine>
                    <CodeLine>&nbsp;</CodeLine>
                    <CodeLine>if username == "admin" and password == "chronos2024":</CodeLine>
                    <CodeLine>    print("Welcome, Administrator!")</CodeLine>
                    <CodeLine>    print("Full system access granted")</CodeLine>
                    <CodeLine>elif username == "guest" and password == "guest123":</CodeLine>
                    <CodeLine>    print("Welcome, Guest")</CodeLine>
                    <CodeLine>    print("Read-only access granted")</CodeLine>
                    <CodeLine>else:</CodeLine>
                    <CodeLine>    print("Invalid credentials")</CodeLine>
                    <CodeLine>    print("Access denied")</CodeLine>
                </Terminal>

                <div className="mt-12 grid grid-cols-2 gap-6">
                    <div className="p-6 rounded-xl bg-[#53d22d]/10 border border-[#53d22d]/30">
                        <h3 className="text-[#53d22d] font-bold text-xl mb-3">✅ FEATURES:</h3>
                        <ul className="text-gray-300 space-y-2">
                            <li>• Multiple user types</li>
                            <li>• Different access levels</li>
                            <li>• Security validation</li>
                            <li>• Clear feedback messages</li>
                        </ul>
                    </div>

                    <div className="p-6 rounded-xl bg-cyan-500/10 border border-cyan-500/30">
                        <h3 className="text-cyan-400 font-bold text-xl mb-3">🔑 CONCEPTS USED:</h3>
                        <ul className="text-gray-300 space-y-2">
                            <li>• <code className="text-cyan-400">and</code> operator</li>
                            <li>• Multiple elif conditions</li>
                            <li>• String comparison</li>
                            <li>• else fallback</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Slide 19: BMI Calculator Example
export function Lesson05Slide19() {
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
                    <FileCode className="w-8 h-8 text-[#53d22d]" />
                    <h1 className="text-5xl font-bold text-[#53d22d]">REAL-WORLD: BMI CALCULATOR</h1>
                </div>

                <Terminal variant="success" title="Chronos Health Monitor">
                    <CodeLine>weight = float(input("Weight (kg): "))</CodeLine>
                    <CodeLine>height = float(input("Height (m): "))</CodeLine>
                    <CodeLine>&nbsp;</CodeLine>
                    <CodeLine>bmi = weight / (height ** 2)</CodeLine>
                    <CodeLine>&nbsp;</CodeLine>
                    <CodeLine>if bmi &lt; 18.5:</CodeLine>
                    <CodeLine>    print("Underweight")</CodeLine>
                    <CodeLine>elif bmi &lt; 25:</CodeLine>
                    <CodeLine>    print("Normal weight")</CodeLine>
                    <CodeLine>elif bmi &lt; 30:</CodeLine>
                    <CodeLine>    print("Overweight")</CodeLine>
                    <CodeLine>else:</CodeLine>
                    <CodeLine>    print("Obese")</CodeLine>
                    <CodeLine>&nbsp;</CodeLine>
                    <CodeLine>print(f"Your BMI: {'{bmi:.1f}'}")</CodeLine>
                </Terminal>

                <div className="mt-12 p-8 rounded-xl bg-cyan-500/10 border-2 border-cyan-500/30">
                    <h3 className="text-cyan-400 font-bold text-2xl mb-6">WHAT'S HAPPENING:</h3>
                    <div className="space-y-3 text-gray-300 text-lg">
                        <p>1. Calculate BMI using formula</p>
                        <p>2. Check ranges in order (smallest to largest)</p>
                        <p>3. First True condition determines category</p>
                        <p>4. Display both category and exact BMI value</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Slide 20: Discount Calculator Example
export function Lesson05Slide20() {
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
                    <Database className="w-8 h-8 text-cyan-400" />
                    <h1 className="text-5xl font-bold text-cyan-400">REAL-WORLD: DISCOUNT CALCULATOR</h1>
                </div>

                <Terminal variant="success" title="Chronos Store System">
                    <CodeLine>total = float(input("Purchase total: $"))</CodeLine>
                    <CodeLine>is_member = input("Member? (yes/no): ")</CodeLine>
                    <CodeLine>&nbsp;</CodeLine>
                    <CodeLine>if is_member == "yes":</CodeLine>
                    <CodeLine>    if total &gt;= 100:</CodeLine>
                    <CodeLine>        discount = 0.20  # 20% off</CodeLine>
                    <CodeLine>    elif total &gt;= 50:</CodeLine>
                    <CodeLine>        discount = 0.15  # 15% off</CodeLine>
                    <CodeLine>    else:</CodeLine>
                    <CodeLine>        discount = 0.10  # 10% off</CodeLine>
                    <CodeLine>else:</CodeLine>
                    <CodeLine>    if total &gt;= 100:</CodeLine>
                    <CodeLine>        discount = 0.10  # 10% off</CodeLine>
                    <CodeLine>    else:</CodeLine>
                    <CodeLine>        discount = 0  # No discount</CodeLine>
                    <CodeLine>&nbsp;</CodeLine>
                    <CodeLine>final_price = total * (1 - discount)</CodeLine>
                    <CodeLine>print(f"Final price: ${'{final_price:.2f}'}")</CodeLine>
                </Terminal>

                <div className="mt-12 p-6 rounded-xl bg-[#53d22d]/10 border-2 border-[#53d22d]/30">
                    <p className="text-xl text-gray-300 text-center">
                        💡 <span className="text-[#53d22d] font-bold">Complex Logic:</span> Nested conditions handle
                        <span className="text-cyan-400"> membership status</span> AND
                        <span className="text-cyan-400"> purchase amount</span>!
                    </p>
                </div>
            </div>
        </div>
    );
}
