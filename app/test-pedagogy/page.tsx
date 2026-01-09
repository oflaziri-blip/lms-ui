import React from 'react';
import { Lesson02TestSlide01, Lesson02TestSlide02, Lesson02TestSlide03, Lesson02TestSlide04, Lesson02TestSlide05 } from '@/components/slides/Lesson02PedagogyTest';

export default function TestPedagogyPage() {
    return (
        <div className="bg-black min-h-screen text-white">
            <div className="bg-slate-900 p-4 border-b border-cyan-500 sticky top-0 z-50 flex justify-between items-center shadow-lg">
                <div>
                    <h1 className="text-xl font-bold text-[#53d22d] font-mono">PEDAGOGICAL STRUCTURE TEST</h1>
                    <p className="text-sm text-gray-400">Reviewing "Gold Standard" flow for Lesson 02</p>
                </div>
                <div className="text-xs font-mono text-cyan-400">
                    HOOK &rarr; REVIEW &rarr; VISUAL &rarr; CODE &rarr; CHALLENGE
                </div>
            </div>

            <div className="space-y-4">
                <section className="border-b-4 border-[#53d22d]">
                    <div className="bg-slate-800 p-2 text-center font-bold text-[#53d22d]">SLIDE 1: MISSION BRIEFING (HOOK)</div>
                    <Lesson02TestSlide01 />
                </section>

                <section className="border-b-4 border-yellow-500">
                    <div className="bg-slate-800 p-2 text-center font-bold text-yellow-500">SLIDE 2: SYSTEM DIAGNOSTIC (REVIEW)</div>
                    <Lesson02TestSlide02 />
                </section>

                <section className="border-b-4 border-cyan-500">
                    <div className="bg-slate-800 p-2 text-center font-bold text-cyan-500">SLIDE 3: SCHEMATIC LOGIC (VISUAL)</div>
                    <Lesson02TestSlide03 />
                </section>

                <section className="border-b-4 border-blue-500">
                    <div className="bg-slate-800 p-2 text-center font-bold text-blue-500">SLIDE 4: PROTOCOL (CODE ANALYSIS)</div>
                    <Lesson02TestSlide04 />
                </section>

                <section className="border-b-4 border-purple-500">
                    <div className="bg-slate-800 p-2 text-center font-bold text-purple-500">SLIDE 5: FIELD ASSIGNMENT (CHALLENGE)</div>
                    <Lesson02TestSlide05 />
                </section>
            </div>
        </div>
    );
}
