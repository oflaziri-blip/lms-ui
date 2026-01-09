'use client';

import React from 'react';
import {
    Lesson04NewSlide01,
    Lesson04NewSlide02,
    Lesson04NewSlide03,
    Lesson04NewSlide04,
    Lesson04NewSlide05
} from '@/components/slides/Lesson04New01-05';

import {
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
} from '@/components/slides/Lesson04New06-15';

import {
    Lesson04NewSlide16,
    Lesson04NewSlide17,
    Lesson04NewSlide18,
    Lesson04NewSlide19,
    Lesson04NewSlide20,
    Lesson04NewSlide21,
    Lesson04NewSlide22
} from '@/components/slides/Lesson04New16-22';

export default function TestLesson04Page() {
    const [currentSlide, setCurrentSlide] = React.useState(0);

    const slides = [
        { component: Lesson04NewSlide01, title: 'Slide 1: Mission Briefing' },
        { component: Lesson04NewSlide02, title: 'Slide 2: Character Introduction' },
        { component: Lesson04NewSlide03, title: 'Slide 3: Review - Previous Lessons' },
        { component: Lesson04NewSlide04, title: 'Slide 4: The Problem' },
        { component: Lesson04NewSlide05, title: 'Slide 5: What Are Nested Constructions?' },
        { component: Lesson04NewSlide06, title: 'Slide 6: Math Inside Math - Basics' },
        { component: Lesson04NewSlide07, title: 'Slide 7: Multiple Parentheses Levels' },
        { component: Lesson04NewSlide08, title: 'Slide 8: Order of Evaluation - Inside Out' },
        { component: Lesson04NewSlide09, title: 'Slide 9: Common Mistakes (Error-First)' },
        { component: Lesson04NewSlide10, title: 'Slide 10: Pro Tips from Kael' },
        { component: Lesson04NewSlide11, title: 'Slide 11: Calculation Inside print()' },
        { component: Lesson04NewSlide12, title: 'Slide 12: String Operations in print()' },
        { component: Lesson04NewSlide13, title: 'Slide 13: Function Inside Function' },
        { component: Lesson04NewSlide14, title: 'Slide 14: Multiple Operations in One Line' },
        { component: Lesson04NewSlide15, title: 'Slide 15: Real-World Example - Aria' },
        { component: Lesson04NewSlide16, title: 'Slide 16: Challenge 1 - Simple Calculator' },
        { component: Lesson04NewSlide17, title: 'Slide 17: Challenge 2 - Complex Expression' },
        { component: Lesson04NewSlide18, title: 'Slide 18: Challenge 3 - String & Math Combo' },
        { component: Lesson04NewSlide19, title: 'Slide 19: Challenge 4 - Deeply Nested' },
        { component: Lesson04NewSlide20, title: 'Slide 20: Full Program Example' },
        { component: Lesson04NewSlide21, title: 'Slide 21: Mastery Checklist & Kael\'s Wisdom' },
        { component: Lesson04NewSlide22, title: 'Slide 22: Lesson Cleared!' },
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
