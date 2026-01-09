'use client';

import React from 'react';
// Import existing slides 1-5 (keep as is)
import { Lesson01Slide01 } from '@/components/slides/Lesson01Slide01';
import { Lesson01Slide02 } from '@/components/slides/Lesson01Slide02';
import { Lesson01Slide03 } from '@/components/slides/Lesson01Slide03';
import { Lesson01Slide04 } from '@/components/slides/Lesson01Slide04';
import { Lesson01Slide05 } from '@/components/slides/Lesson01Slide05';

// Import NEW corrected slides 6-30
import {
    Lesson01CorrectedSlide06,
    Lesson01CorrectedSlide07,
    Lesson01CorrectedSlide08,
    Lesson01CorrectedSlide09,
    Lesson01CorrectedSlide10
} from '@/components/slides/Lesson01Corrected06-10';

import {
    Lesson01CorrectedSlide11,
    Lesson01CorrectedSlide12,
    Lesson01CorrectedSlide13,
    Lesson01CorrectedSlide14,
    Lesson01CorrectedSlide15
} from '@/components/slides/Lesson01Corrected11-15';

import {
    Lesson01CorrectedSlide16,
    Lesson01CorrectedSlide17,
    Lesson01CorrectedSlide18,
    Lesson01CorrectedSlide19,
    Lesson01CorrectedSlide20,
    Lesson01CorrectedSlide21
} from '@/components/slides/Lesson01Corrected16-21';

import {
    Lesson01CorrectedSlide22,
    Lesson01CorrectedSlide23,
    Lesson01CorrectedSlide24,
    Lesson01CorrectedSlide25,
    Lesson01CorrectedSlide26,
    Lesson01CorrectedSlide27,
    Lesson01CorrectedSlide28,
    Lesson01CorrectedSlide29,
    Lesson01CorrectedSlide30
} from '@/components/slides/Lesson01Corrected22-30';

export default function TestLesson01CorrectedPage() {
    const [currentSlide, setCurrentSlide] = React.useState(0);

    const slides = [
        { component: Lesson01Slide01, title: 'Slide 1: Mission Briefing' },
        { component: Lesson01Slide02, title: 'Slide 2: Welcome Message' },
        { component: Lesson01Slide03, title: 'Slide 3: What is Python?' },
        { component: Lesson01Slide04, title: 'Slide 4: First Command - print()' },
        { component: Lesson01Slide05, title: 'Slide 5: The Terminal' },
        { component: Lesson01CorrectedSlide06, title: 'Slide 6: The 7 Math Operators ⭐ NEW' },
        { component: Lesson01CorrectedSlide07, title: 'Slide 7: Addition & Subtraction ⭐ NEW' },
        { component: Lesson01CorrectedSlide08, title: 'Slide 8: Multiplication & Division ⭐ NEW' },
        { component: Lesson01CorrectedSlide09, title: 'Slide 9: Floor Division ⭐ NEW' },
        { component: Lesson01CorrectedSlide10, title: 'Slide 10: Modulo (Remainder) ⭐ NEW' },
        { component: Lesson01CorrectedSlide11, title: 'Slide 11: Exponentiation ⭐ NEW' },
        { component: Lesson01CorrectedSlide12, title: 'Slide 12: Operator Reference Table ⭐ NEW' },
        { component: Lesson01CorrectedSlide13, title: 'Slide 13: PEMDAS ⭐ NEW' },
        { component: Lesson01CorrectedSlide14, title: 'Slide 14: Parentheses Control ⭐ NEW' },
        { component: Lesson01CorrectedSlide15, title: 'Slide 15: Common Mistakes ⭐ NEW' },
        { component: Lesson01CorrectedSlide16, title: 'Slide 16: Real-World Example (Aria) ⭐ NEW' },
        { component: Lesson01CorrectedSlide17, title: 'Slide 17: Challenge 1 ⭐ NEW' },
        { component: Lesson01CorrectedSlide18, title: 'Slide 18: Challenge 2 ⭐ NEW' },
        { component: Lesson01CorrectedSlide19, title: 'Slide 19: Challenge 3 ⭐ NEW' },
        { component: Lesson01CorrectedSlide20, title: 'Slide 20: Pro Tips (Kael) ⭐ NEW' },
        { component: Lesson01CorrectedSlide21, title: 'Slide 21: Printing Text ⭐ NEW' },
        { component: Lesson01CorrectedSlide22, title: 'Slide 22: String Concatenation ⭐ NEW' },
        { component: Lesson01CorrectedSlide23, title: 'Slide 23: String Repetition ⭐ NEW' },
        { component: Lesson01CorrectedSlide24, title: 'Slide 24: Combining Numbers & Strings ⭐ NEW' },
        { component: Lesson01CorrectedSlide25, title: 'Slide 25: Multi-line Print ⭐ NEW' },
        { component: Lesson01CorrectedSlide26, title: 'Slide 26: Kael\'s Parting Wisdom ⭐ NEW' },
        { component: Lesson01CorrectedSlide27, title: 'Slide 27: Mastery Checklist ⭐ NEW' },
        { component: Lesson01CorrectedSlide28, title: 'Slide 28: Next Mission Preview ⭐ NEW' },
        { component: Lesson01CorrectedSlide29, title: 'Slide 29: Your Assignment ⭐ NEW' },
        { component: Lesson01CorrectedSlide30, title: 'Slide 30: Lesson Cleared! ⭐ NEW' },
    ];

    const CurrentSlideComponent = slides[currentSlide].component;

    const handleKeyPress = React.useCallback((e: KeyboardEvent) => {
        if (e.key === 'ArrowRight' || e.key === ' ') {
            setCurrentSlide(prev => Math.min(prev + 1, slides.length - 1));
        } else if (e.key === 'ArrowLeft') {
            setCurrentSlide(prev => Math.max(prev - 1, 0));
        }
    }, [slides.length]);

    React.useEffect(() => {
        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
    }, [handleKeyPress]);

    return (
        <div className="relative h-screen w-screen overflow-hidden bg-black">
            {/* Slide Content */}
            <CurrentSlideComponent />

            {/* Navigation Controls (Overlay) */}
            <div className="absolute top-4 left-0 right-0 z-50 flex justify-center">
                <div className="bg-black/80 backdrop-blur-sm px-6 py-3 rounded-full border border-cyan-500/30 shadow-lg">
                    <div className="flex items-center gap-6">
                        <button
                            onClick={() => setCurrentSlide(prev => Math.max(prev - 1, 0))}
                            disabled={currentSlide === 0}
                            className="px-4 py-2 bg-cyan-500/20 hover:bg-cyan-500/30 disabled:opacity-30 disabled:cursor-not-allowed text-cyan-400 rounded-lg transition-colors text-sm font-mono"
                        >
                            ← PREV
                        </button>

                        <div className="text-center">
                            <div className="text-cyan-400 font-mono text-xs mb-1">
                                {slides[currentSlide].title}
                            </div>
                            <div className="text-gray-400 font-mono text-xs">
                                Slide {currentSlide + 1} / {slides.length}
                            </div>
                        </div>

                        <button
                            onClick={() => setCurrentSlide(prev => Math.min(prev + 1, slides.length - 1))}
                            disabled={currentSlide === slides.length - 1}
                            className="px-4 py-2 bg-cyan-500/20 hover:bg-cyan-500/30 disabled:opacity-30 disabled:cursor-not-allowed text-cyan-400 rounded-lg transition-colors text-sm font-mono"
                        >
                            NEXT →
                        </button>
                    </div>
                </div>
            </div>

            {/* Keyboard Hint */}
            <div className="absolute bottom-4 right-4 z-50 bg-black/60 backdrop-blur-sm px-4 py-2 rounded-lg border border-gray-700">
                <p className="text-gray-400 text-xs font-mono">
                    Use <span className="text-cyan-400">← →</span> or <span className="text-cyan-400">SPACE</span> to navigate
                </p>
            </div>

            {/* Progress Bar */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-800">
                <div
                    className="h-full bg-gradient-to-r from-cyan-500 to-[#53d22d] transition-all duration-300"
                    style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
                />
            </div>
        </div>
    );
}
