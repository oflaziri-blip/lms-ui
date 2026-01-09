'use client';

import React from 'react';
import {
    Lesson02ImprovedSlide01,
    Lesson02ImprovedSlide02,
    Lesson02ImprovedSlide03,
    Lesson02ImprovedSlide04,
    Lesson02ImprovedSlide05
} from '@/components/slides/Lesson02Improved01-05';
import {
    Lesson02ImprovedSlide06,
    Lesson02ImprovedSlide07,
    Lesson02ImprovedSlide08,
    Lesson02ImprovedSlide09,
    Lesson02ImprovedSlide10
} from '@/components/slides/Lesson02Improved06-15';
import {
    Lesson02ImprovedSlide11,
    Lesson02ImprovedSlide12,
    Lesson02ImprovedSlide13,
    Lesson02ImprovedSlide14,
    Lesson02ImprovedSlide15
} from '@/components/slides/Lesson02Improved11-20';
import {
    Lesson02ImprovedSlide16,
    Lesson02ImprovedSlide17,
    Lesson02ImprovedSlide18,
    Lesson02ImprovedSlide19,
    Lesson02ImprovedSlide20,
    Lesson02ImprovedSlide21,
    Lesson02ImprovedSlide26,
    Lesson02ImprovedSlide27,
    Lesson02ImprovedSlide28,
    Lesson02ImprovedSlide29,
    Lesson02ImprovedSlide30
} from '@/components/slides/Lesson02Improved16-30';

export default function TestImprovedSlidesPage() {
    const [currentSlide, setCurrentSlide] = React.useState(0);

    const slides = [
        { component: Lesson02ImprovedSlide01, title: 'Slide 1: Mission Briefing' },
        { component: Lesson02ImprovedSlide02, title: 'Slide 2: Character Introduction' },
        { component: Lesson02ImprovedSlide03, title: 'Slide 3: Previous Lesson Review' },
        { component: Lesson02ImprovedSlide04, title: 'Slide 4: Problem Statement' },
        { component: Lesson02ImprovedSlide05, title: 'Slide 5: Conceptual Foundation (RAM)' },
        { component: Lesson02ImprovedSlide06, title: 'Slide 6: Visual Metaphor' },
        { component: Lesson02ImprovedSlide07, title: 'Slide 7: Formal Definition' },
        { component: Lesson02ImprovedSlide08, title: 'Slide 8: First Example Walkthrough' },
        { component: Lesson02ImprovedSlide09, title: 'Slide 9: Syntax Rules' },
        { component: Lesson02ImprovedSlide10, title: 'Slide 10: Pro Tips (Kael)' },
        { component: Lesson02ImprovedSlide11, title: 'Slide 11: Variables Can Change' },
        { component: Lesson02ImprovedSlide12, title: 'Slide 12: Using Variables in Math' },
        { component: Lesson02ImprovedSlide13, title: 'Slide 13: Real-World Example (Aria)' },
        { component: Lesson02ImprovedSlide14, title: 'Slide 14: Multiple Variables' },
        { component: Lesson02ImprovedSlide15, title: 'Slide 15: Swapping Variables' },
        { component: Lesson02ImprovedSlide16, title: 'Slide 16: Update Shortcuts' },
        { component: Lesson02ImprovedSlide17, title: 'Slide 17: Common Mistakes' },
        { component: Lesson02ImprovedSlide18, title: 'Slide 18: Challenge 1 - Battle Simulator' },
        { component: Lesson02ImprovedSlide19, title: 'Slide 19: Challenge 2 - Calculator' },
        { component: Lesson02ImprovedSlide20, title: 'Slide 20: Challenge 3 - Character Profile' },
        { component: Lesson02ImprovedSlide21, title: 'Slide 21: Advanced - Multiple Assignment' },
        { component: Lesson02ImprovedSlide26, title: 'Slide 26: Kael\'s Parting Wisdom' },
        { component: Lesson02ImprovedSlide27, title: 'Slide 27: Mission Complete - Mastery Checklist' },
        { component: Lesson02ImprovedSlide28, title: 'Slide 28: Next Mission Preview' },
        { component: Lesson02ImprovedSlide29, title: 'Slide 29: Your Assignment' },
        { component: Lesson02ImprovedSlide30, title: 'Slide 30: Lesson Cleared!' },
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
