/**
 * Lesson 01 - Slide 04: Your Mission
 * Mission objectives with HUD-style display
 */

import React from 'react';
import { CheckSquare, Zap, Award } from 'lucide-react';

export function Lesson01Slide04() {
    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-emerald-950/30 via-gray-900 to-black text-white flex flex-col items-center justify-center p-12">
            <h1 className="text-5xl font-bold mb-12 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                YOUR MISSION
            </h1>

            {/* Mission Brief Card */}
            <div className="max-w-3xl w-full space-y-8">
                {/* Primary Objective */}
                <div className="border-2 border-emerald-500/40 rounded-lg p-8 bg-emerald-950/20 backdrop-blur">
                    <div className="flex items-center gap-3 mb-4">
                        <CheckSquare className="w-8 h-8 text-emerald-400" />
                        <h2 className="text-2xl font-bold text-emerald-400">Primary Objective</h2>
                    </div>
                    <p className="text-xl text-gray-300 leading-relaxed">
                        Manually override the communication protocols to <span className="text-emerald-400 font-bold">wake up Py</span>.
                    </p>
                </div>

                {/* How? */}
                <div className="border-2 border-cyan-500/40 rounded-lg p-8 bg-cyan-950/20 backdrop-blur">
                    <div className="flex items-center gap-3 mb-4">
                        <Zap className="w-8 h-8 text-cyan-400" />
                        <h2 className="text-2xl font-bold text-cyan-400">How?</h2>
                    </div>
                    <p className="text-xl text-gray-300 leading-relaxed">
                        By typing commands directly into the ship's <span className="text-cyan-400 font-bold">Terminal</span> — the control center of all code.
                    </p>
                </div>

                {/* Rewards */}
                <div className="border-2 border-yellow-500/40 rounded-lg p-8 bg-yellow-950/20 backdrop-blur">
                    <div className="flex items-center gap-3 mb-4">
                        <Award className="w-8 h-8 text-yellow-400" />
                        <h2 className="text-2xl font-bold text-yellow-400">Reward Upon Success</h2>
                    </div>
                    <div className="space-y-2 text-lg">
                        <div className="flex items-center gap-2">
                            <span className="text-green-400">✅</span>
                            <span>AI restoration</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-green-400">✅</span>
                            <span>Voice communication online</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-green-400">✅</span>
                            <span className="text-yellow-400 font-bold">120 XP</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
