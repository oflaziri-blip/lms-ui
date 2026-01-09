/**
 * Lesson 01 - Slide 03: The Glitch (System Error)
 * Shows styled terminal with error state
 */

import React from 'react';
import { AlertTriangle } from 'lucide-react';
import { Terminal, CodeLine, TerminalError } from './Terminal';

export function Lesson01Slide03() {
    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-red-950/20 via-gray-900 to-black text-white flex flex-col items-center justify-center p-12">
            {/* Title */}
            <div className="flex items-center gap-4 mb-8">
                <AlertTriangle className="w-12 h-12 text-red-500 animate-pulse" />
                <h1 className="text-5xl font-bold text-red-400">CRITICAL ERROR</h1>
            </div>

            {/* Error Terminal */}
            <div className="w-full max-w-3xl">
                <Terminal variant="error" title="SYSTEM STATUS">
                    <CodeLine prompt=">>>">{`SYSTEM STATUS: CRITICAL`}</CodeLine>
                    <CodeLine prompt=">>>">{`AI CORE: OFFLINE`}</CodeLine>
                    <CodeLine prompt=">>>">{`VOICE PROTOCOLS: DISABLED`}</CodeLine>
                    <CodeLine prompt=">>>">{`MANUAL OVERRIDE REQUIRED`}</CodeLine>
                </Terminal>
            </div>

            {/* Message */}
            <div className="mt-12 text-center space-y-4 max-w-2xl">
                <p className="text-xl text-gray-300">
                    The ship's AI, <span className="text-cyan-400 font-bold">"Py"</span> (short for Python), is <span className="text-red-400 font-bold">unresponsive</span>.
                </p>
                <p className="text-lg text-gray-400">
                    Without Py, you're flying blind.
                </p>
            </div>

            {/* Glitch Effect */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent animate-pulse" />
        </div>
    );
}
