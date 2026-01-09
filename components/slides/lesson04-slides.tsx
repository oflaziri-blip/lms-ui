/**
 * Lesson 04 Slides - Complete Index
 * All slides for Interactive Protocols & Logic Gates
 */

// Import all slide components
import { Lesson04Slide01, Lesson04Slide02, Lesson04Slide03 } from './Lesson04Slides01-03';
import { Lesson04Slide04, Lesson04Slide05, Lesson04Slide06 } from './Lesson04Slides04-06';
import { Lesson04Slide07, Lesson04Slide08, Lesson04Slide09 } from './Lesson04Slides07-09';
import { Lesson04Slide10, Lesson04Slide11, Lesson04Slide12 } from './Lesson04Slides10-12';
import { Lesson04Slide13, Lesson04Slide14, Lesson04Slide15, Lesson04Slide30 } from './Lesson04Slides13-30';

export const lesson04Slides = [
    // Mission Briefing (1-3)
    { id: 1, component: Lesson04Slide01, title: 'Operation Chronos: Interactive Protocols', phase: 'Mission Briefing' },
    { id: 2, component: Lesson04Slide02, title: 'Mission Objectives', phase: 'Mission Briefing' },
    { id: 3, component: Lesson04Slide03, title: 'The Problem: Static Programs', phase: 'Mission Briefing' },

    // Core Concepts (4-9)
    { id: 4, component: Lesson04Slide04, title: 'The Solution: input()', phase: 'Core Concepts' },
    { id: 5, component: Lesson04Slide05, title: 'input() Returns String', phase: 'Core Concepts' },
    { id: 6, component: Lesson04Slide06, title: 'Type Conversion', phase: 'Core Concepts' },
    { id: 7, component: Lesson04Slide07, title: 'What are Booleans?', phase: 'Core Concepts' },
    { id: 8, component: Lesson04Slide08, title: 'Comparison Operators', phase: 'Core Concepts' },
    { id: 9, component: Lesson04Slide09, title: 'Booleans in Action', phase: 'Core Concepts' },

    // Common Pitfalls (10-12)
    { id: 10, component: Lesson04Slide10, title: 'Common Input Errors', phase: 'Common Pitfalls' },
    { id: 11, component: Lesson04Slide11, title: 'Assignment vs Comparison', phase: 'Common Pitfalls' },
    { id: 12, component: Lesson04Slide12, title: 'Practical Examples', phase: 'Common Pitfalls' },

    // Advanced Topics (13-15)
    { id: 13, component: Lesson04Slide13, title: 'Logical Operators', phase: 'Advanced Topics' },
    { id: 14, component: Lesson04Slide14, title: 'Security Checkpoint', phase: 'Advanced Topics' },
    { id: 15, component: Lesson04Slide15, title: 'Quick Review', phase: 'Review' },

    // Mission Complete
    { id: 30, component: Lesson04Slide30, title: 'Mission Complete', phase: 'Mission Complete' },
];

// Export all slides
export {
    Lesson04Slide01, Lesson04Slide02, Lesson04Slide03,
    Lesson04Slide04, Lesson04Slide05, Lesson04Slide06,
    Lesson04Slide07, Lesson04Slide08, Lesson04Slide09,
    Lesson04Slide10, Lesson04Slide11, Lesson04Slide12,
    Lesson04Slide13, Lesson04Slide14, Lesson04Slide15,
    Lesson04Slide30
};

// Helper functions
export function getSlideById(slideId: number) {
    return lesson04Slides.find(slide => slide.id === slideId);
}

export function getAdjacentSlides(currentId: number) {
    const currentIndex = lesson04Slides.findIndex(s => s.id === currentId);
    return {
        previous: currentIndex > 0 ? lesson04Slides[currentIndex - 1] : null,
        next: currentIndex < lesson04Slides.length - 1 ? lesson04Slides[currentIndex + 1] : null
    };
}

export function getSlidesByPhase(phase: string) {
    return lesson04Slides.filter(slide => slide.phase === phase);
}
