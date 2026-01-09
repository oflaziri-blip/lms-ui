/**
 * Lesson 05 - Slides 21-25: More Examples & Practice
 * Temperature Converter, Voting Eligibility, Password Strength, Letter Grade, Leap Year
 */

import React from 'react';
import { Thermometer, Vote, Lock, GraduationCap, Calendar } from 'lucide-react';
import { Terminal, CodeLine } from './Terminal';

// Slide 21: Temperature Converter
export function Lesson05Slide21() {
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
                    <Thermometer className="w-8 h-8 text-cyan-400" />
                    <h1 className="text-5xl font-bold text-cyan-400">EXAMPLE: TEMPERATURE ADVISOR</h1>
                </div>

                <Terminal variant="success" title="Chronos Weather System">
                    <CodeLine>temp = int(input("Temperature (°C): "))</CodeLine>
                    <CodeLine>&nbsp;</CodeLine>
                    <CodeLine>if temp &gt;= 30:</CodeLine>
                    <CodeLine>    print("It's hot! Stay hydrated")</CodeLine>
                    <CodeLine>elif temp &gt;= 20:</CodeLine>
                    <CodeLine>    print("Perfect weather!")</CodeLine>
                    <CodeLine>elif temp &gt;= 10:</CodeLine>
                    <CodeLine>    print("A bit cool, wear a jacket")</CodeLine>
                    <CodeLine>elif temp &gt;= 0:</CodeLine>
                    <CodeLine>    print("Cold! Bundle up")</CodeLine>
                    <CodeLine>else:</CodeLine>
                    <CodeLine>    print("Freezing! Stay inside")</CodeLine>
                </Terminal>

                <div className="mt-12 grid grid-cols-2 gap-6">
                    <div className="p-6 rounded-xl bg-cyan-500/10 border border-cyan-500/30">
                        <h3 className="text-cyan-400 font-bold text-xl mb-3">TEST IT:</h3>
                        <div className="space-y-2 text-gray-300 font-mono">
                            <p>35°C → It's hot!</p>
                            <p>22°C → Perfect weather!</p>
                            <p>15°C → Wear a jacket</p>
                            <p>5°C → Bundle up</p>
                            <p>-5°C → Stay inside</p>
                        </div>
                    </div>

                    <div className="p-6 rounded-xl bg-[#53d22d]/10 border border-[#53d22d]/30">
                        <h3 className="text-[#53d22d] font-bold text-xl mb-3">PATTERN:</h3>
                        <ul className="text-gray-300 space-y-2">
                            <li>• Check from highest to lowest</li>
                            <li>• Each range is mutually exclusive</li>
                            <li>• else catches everything below 0</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Slide 22: Voting Eligibility
export function Lesson05Slide22() {
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
                    <Vote className="w-8 h-8 text-[#53d22d]" />
                    <h1 className="text-5xl font-bold text-[#53d22d]">EXAMPLE: VOTING ELIGIBILITY</h1>
                </div>

                <Terminal variant="success" title="Chronos Civic System">
                    <CodeLine>age = int(input("Age: "))</CodeLine>
                    <CodeLine>is_citizen = input("Citizen? (yes/no): ")</CodeLine>
                    <CodeLine>&nbsp;</CodeLine>
                    <CodeLine>if age &gt;= 18 and is_citizen == "yes":</CodeLine>
                    <CodeLine>    print("You are eligible to vote!")</CodeLine>
                    <CodeLine>elif age &lt; 18:</CodeLine>
                    <CodeLine>    years_left = 18 - age</CodeLine>
                    <CodeLine>    print(f"You can vote in {'{years_left}'} years")</CodeLine>
                    <CodeLine>else:</CodeLine>
                    <CodeLine>    print("You must be a citizen to vote")</CodeLine>
                </Terminal>

                <div className="mt-12 p-8 rounded-xl bg-cyan-500/10 border-2 border-cyan-500/30">
                    <h3 className="text-cyan-400 font-bold text-2xl mb-6">LOGIC FLOW:</h3>
                    <div className="space-y-3 text-gray-300 text-lg">
                        <p>1. Check BOTH age AND citizenship (using <code className="text-[#53d22d]">and</code>)</p>
                        <p>2. If age is the problem, calculate years remaining</p>
                        <p>3. Otherwise, citizenship is the issue</p>
                        <p>4. Notice how we use <span className="text-yellow-400">f-strings</span> for dynamic messages!</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Slide 23: Password Strength Checker
export function Lesson05Slide23() {
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
                    <Lock className="w-8 h-8 text-cyan-400" />
                    <h1 className="text-5xl font-bold text-cyan-400">EXAMPLE: PASSWORD STRENGTH</h1>
                </div>

                <Terminal variant="success" title="Chronos Security Validator">
                    <CodeLine>password = input("Enter password: ")</CodeLine>
                    <CodeLine>length = len(password)</CodeLine>
                    <CodeLine>&nbsp;</CodeLine>
                    <CodeLine>if length &gt;= 12:</CodeLine>
                    <CodeLine>    print("Strong password ✓")</CodeLine>
                    <CodeLine>elif length &gt;= 8:</CodeLine>
                    <CodeLine>    print("Medium password ⚠")</CodeLine>
                    <CodeLine>elif length &gt;= 6:</CodeLine>
                    <CodeLine>    print("Weak password ✗")</CodeLine>
                    <CodeLine>else:</CodeLine>
                    <CodeLine>    print("Too short! Minimum 6 characters")</CodeLine>
                </Terminal>

                <div className="mt-12 grid grid-cols-2 gap-6">
                    <div className="p-6 rounded-xl bg-[#53d22d]/10 border border-[#53d22d]/30">
                        <h3 className="text-[#53d22d] font-bold text-xl mb-3">NEW CONCEPT:</h3>
                        <p className="text-gray-300">
                            <code className="text-cyan-400">len()</code> function returns the length of a string
                        </p>
                        <Terminal variant="success" title="Python">
                            <CodeLine>len("hello")  # Returns 5</CodeLine>
                            <CodeLine>len("chronos")  # Returns 7</CodeLine>
                        </Terminal>
                    </div>

                    <div className="p-6 rounded-xl bg-cyan-500/10 border border-cyan-500/30">
                        <h3 className="text-cyan-400 font-bold text-xl mb-3">STRENGTH LEVELS:</h3>
                        <ul className="text-gray-300 space-y-2">
                            <li>• 12+ chars → Strong ✓</li>
                            <li>• 8-11 chars → Medium ⚠</li>
                            <li>• 6-7 chars → Weak ✗</li>
                            <li>• &lt;6 chars → Too short</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Slide 24: Letter Grade System
export function Lesson05Slide24() {
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
                    <GraduationCap className="w-8 h-8 text-[#53d22d]" />
                    <h1 className="text-5xl font-bold text-[#53d22d]">EXAMPLE: DETAILED GRADE SYSTEM</h1>
                </div>

                <Terminal variant="success" title="Chronos Academy Grading">
                    <CodeLine>score = int(input("Enter score (0-100): "))</CodeLine>
                    <CodeLine>&nbsp;</CodeLine>
                    <CodeLine>if score &gt; 100 or score &lt; 0:</CodeLine>
                    <CodeLine>    print("Invalid score!")</CodeLine>
                    <CodeLine>elif score &gt;= 97:</CodeLine>
                    <CodeLine>    print("A+ - Outstanding!")</CodeLine>
                    <CodeLine>elif score &gt;= 93:</CodeLine>
                    <CodeLine>    print("A - Excellent")</CodeLine>
                    <CodeLine>elif score &gt;= 90:</CodeLine>
                    <CodeLine>    print("A- - Very Good")</CodeLine>
                    <CodeLine>elif score &gt;= 87:</CodeLine>
                    <CodeLine>    print("B+ - Good")</CodeLine>
                    <CodeLine>elif score &gt;= 83:</CodeLine>
                    <CodeLine>    print("B - Above Average")</CodeLine>
                    <CodeLine>elif score &gt;= 80:</CodeLine>
                    <CodeLine>    print("B- - Average")</CodeLine>
                    <CodeLine>elif score &gt;= 70:</CodeLine>
                    <CodeLine>    print("C - Passing")</CodeLine>
                    <CodeLine>elif score &gt;= 60:</CodeLine>
                    <CodeLine>    print("D - Needs Improvement")</CodeLine>
                    <CodeLine>else:</CodeLine>
                    <CodeLine>    print("F - Failing")</CodeLine>
                </Terminal>

                <div className="mt-12 p-6 rounded-xl bg-yellow-500/10 border-2 border-yellow-500/30">
                    <p className="text-xl text-gray-300 text-center">
                        💡 <span className="text-yellow-400 font-bold">Pro Tip:</span> Always validate input first!
                        Notice how we check for invalid scores using <code className="text-cyan-400">or</code>
                    </p>
                </div>
            </div>
        </div>
    );
}

// Slide 25: Leap Year Calculator
export function Lesson05Slide25() {
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
                    <Calendar className="w-8 h-8 text-cyan-400" />
                    <h1 className="text-5xl font-bold text-cyan-400">CHALLENGE: LEAP YEAR CALCULATOR</h1>
                </div>

                <Terminal variant="success" title="Chronos Calendar System">
                    <CodeLine>year = int(input("Enter year: "))</CodeLine>
                    <CodeLine>&nbsp;</CodeLine>
                    <CodeLine>if year % 400 == 0:</CodeLine>
                    <CodeLine>    print(f"{'{year}'} is a leap year")</CodeLine>
                    <CodeLine>elif year % 100 == 0:</CodeLine>
                    <CodeLine>    print(f"{'{year}'} is NOT a leap year")</CodeLine>
                    <CodeLine>elif year % 4 == 0:</CodeLine>
                    <CodeLine>    print(f"{'{year}'} is a leap year")</CodeLine>
                    <CodeLine>else:</CodeLine>
                    <CodeLine>    print(f"{'{year}'} is NOT a leap year")</CodeLine>
                </Terminal>

                <div className="mt-12 p-8 rounded-xl bg-cyan-500/10 border-2 border-cyan-500/30">
                    <h3 className="text-cyan-400 font-bold text-2xl mb-6">LEAP YEAR RULES:</h3>
                    <div className="space-y-3 text-gray-300 text-lg">
                        <p>1. If divisible by 400 → <span className="text-[#53d22d]">Leap year</span> (e.g., 2000)</p>
                        <p>2. Else if divisible by 100 → <span className="text-red-400">NOT leap year</span> (e.g., 1900)</p>
                        <p>3. Else if divisible by 4 → <span className="text-[#53d22d]">Leap year</span> (e.g., 2024)</p>
                        <p>4. Else → <span className="text-red-400">NOT leap year</span></p>
                    </div>
                </div>

                <div className="mt-6 p-6 rounded-xl bg-purple-500/10 border border-purple-500/30">
                    <p className="text-lg text-gray-300 text-center">
                        🧠 <span className="text-purple-400 font-bold">Complex Logic:</span> Order matters!
                        We check 400 first, then 100, then 4.
                    </p>
                </div>
            </div>
        </div>
    );
}
