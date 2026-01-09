'use client';

import React from 'react';
import {
    Lesson03NewSlide01,
    Lesson03NewSlide02,
    Lesson03NewSlide03,
    Lesson03NewSlide04,
    Lesson03NewSlide05
} from '@/components/slides/Lesson03New01-05';

import {
    Lesson03NewSlide06,
    Lesson03NewSlide07,
    Lesson03NewSlide08,
    Lesson03NewSlide09,
    Lesson03NewSlide10
} from '@/components/slides/Lesson03New06-15';

import {
    Lesson03NewSlide11,
    Lesson03NewSlide12,
    Lesson03NewSlide13,
    Lesson03NewSlide14,
    Lesson03NewSlide15,
    Lesson03NewSlide16
} from '@/components/slides/Lesson03New11-22';

import {
    Lesson03NewSlide17,
    Lesson03NewSlide18,
    Lesson03NewSlide19,
    Lesson03NewSlide20,
    Lesson03NewSlide21
} from '@/components/slides/Lesson03New17-21';

export default function TestLesson03Page() {
    const [currentSlide, setCurrentSlide] = React.useState(0);

    const slides = [
        { component: Lesson03NewSlide01, title: 'Slide 1: Mission Briefing' },
        { component: Lesson03NewSlide02, title: 'Slide 2: Character Introduction' },
        { component: Lesson03NewSlide03, title: 'Slide 3: Review - Variables' },
        { component: Lesson03NewSlide04, title: 'Slide 4: Problem Statement' },
        { component: Lesson03NewSlide05, title: 'Slide 5: What is a String?' },
        { component: Lesson03NewSlide06, title: 'Slide 6: String Length - len()' },
        { component: Lesson03NewSlide07, title: 'Slide 7: String Indexing' },
        { component: Lesson03NewSlide08, title: 'Slide 8: String Slicing' },
        { component: Lesson03NewSlide09, title: 'Slide 9: Concatenation & Repetition' },
        { component: Lesson03NewSlide10, title: 'Slide 10: Case Conversion' },
        { component: Lesson03NewSlide11, title: 'Slide 11: Strip & Replace' },
        { component: Lesson03NewSlide12, title: 'Slide 12: Find & Count' },
        { component: Lesson03NewSlide13, title: 'Slide 13: Real-World Example (Aria)' },
        { component: Lesson03NewSlide14, title: 'Slide 14: Challenge 1 - Text Formatter' },
        { component: Lesson03NewSlide15, title: 'Slide 15: Challenge 2 - Text Analyzer' },
        { component: Lesson03NewSlide16, title: 'Slide 16: Pro Tips (Kael)' },
        { component: Lesson03NewSlide17, title: 'Slide 17: Kael\'s Parting Wisdom' },
        { component: Lesson03NewSlide18, title: 'Slide 18: Mastery Checklist' },
        { component: Lesson03NewSlide19, title: 'Slide 19: Next Mission Preview' },
        { component: Lesson03NewSlide20, title: 'Slide 20: Your Assignment' },
        { component: Lesson03NewSlide21, title: 'Slide 21: Lesson Cleared!' },
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
