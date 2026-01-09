/**
 * Lesson 02 Slides - Complete Index
 * All 30 slides for Operation Chronos: Memory Containers
 */

// Phase 1: Mission Briefing (Slides 1-7)
import { Lesson02Slide01 } from './Lesson02Slide01';
import { Lesson02Slide02 } from './Lesson02Slide02';
import { Lesson02Slide03 } from './Lesson02Slide03';
import { Lesson02Slide04, Lesson02Slide05, Lesson02Slide06, Lesson02Slide07 } from './Lesson02Slides04-07';

// Phase 2: Core Concepts (Slides 8-16)
import { Lesson02Slide08, Lesson02Slide09, Lesson02Slide10, Lesson02Slide11 } from './Lesson02Slides08-11';
import { Lesson02Slide12, Lesson02Slide13, Lesson02Slide14, Lesson02Slide15, Lesson02Slide16 } from './Lesson02Slides12-16';

// Phase 3: Variables in Action (Slides 17-24)
import { Lesson02Slide17, Lesson02Slide18, Lesson02Slide19, Lesson02Slide20 } from './Lesson02Slides17-20';
import { Lesson02Slide21, Lesson02Slide22, Lesson02Slide23, Lesson02Slide24 } from './Lesson02Slides21-24';

// Phase 4: Advanced Concepts (Slides 25-30)
import { Lesson02Slide25, Lesson02Slide26, Lesson02Slide27, Lesson02Slide28 } from './Lesson02Slides25-28';
import { Lesson02Slide29, Lesson02Slide30 } from './Lesson02Slides29-30';

export const lesson02Slides = [
    // Mission Briefing
    { id: 1, component: Lesson02Slide01, title: 'Operation Chronos: Memory Containers', phase: 'Mission Briefing' },
    { id: 2, component: Lesson02Slide02, title: 'The Problem', phase: 'Mission Briefing' },
    { id: 3, component: Lesson02Slide03, title: 'The Solution', phase: 'Mission Briefing' },
    { id: 4, component: Lesson02Slide04, title: 'Mission Objectives', phase: 'Mission Briefing' },
    { id: 5, component: Lesson02Slide05, title: 'The Terminal', phase: 'Mission Briefing' },
    { id: 6, component: Lesson02Slide06, title: 'Key Terms', phase: 'Mission Briefing' },
    { id: 7, component: Lesson02Slide07, title: 'Real-World Analogy', phase: 'Mission Briefing' },

    // Core Concepts
    { id: 8, component: Lesson02Slide08, title: 'What is a Variable?', phase: 'Core Concepts' },
    { id: 9, component: Lesson02Slide09, title: 'Anatomy of Assignment', phase: 'Core Concepts' },
    { id: 10, component: Lesson02Slide10, title: 'The Assignment Operator', phase: 'Core Concepts' },
    { id: 11, component: Lesson02Slide11, title: 'Variable Naming Rules', phase: 'Core Concepts' },
    { id: 12, component: Lesson02Slide12, title: 'Valid vs Invalid Names', phase: 'Core Concepts' },
    { id: 13, component: Lesson02Slide13, title: 'Data Types: Overview', phase: 'Core Concepts' },
    { id: 14, component: Lesson02Slide14, title: 'Strings Explained', phase: 'Core Concepts' },
    { id: 15, component: Lesson02Slide15, title: 'Integers Explained', phase: 'Core Concepts' },
    { id: 16, component: Lesson02Slide16, title: 'Floats Explained', phase: 'Core Concepts' },

    // Variables in Action
    { id: 17, component: Lesson02Slide17, title: 'Creating Your First Variable', phase: 'Variables in Action' },
    { id: 18, component: Lesson02Slide18, title: 'Using Variables', phase: 'Variables in Action' },
    { id: 19, component: Lesson02Slide19, title: 'Re-assignment', phase: 'Variables in Action' },
    { id: 20, component: Lesson02Slide20, title: 'Variables in Math', phase: 'Variables in Action' },
    { id: 21, component: Lesson02Slide21, title: 'Multiple Variables', phase: 'Variables in Action' },
    { id: 22, component: Lesson02Slide22, title: 'Variable Swapping', phase: 'Variables in Action' },
    { id: 23, component: Lesson02Slide23, title: 'String Concatenation', phase: 'Variables in Action' },
    { id: 24, component: Lesson02Slide24, title: 'F-Strings Preview', phase: 'Variables in Action' },

    // Advanced Concepts
    { id: 25, component: Lesson02Slide25, title: 'Type Checking', phase: 'Advanced Concepts' },
    { id: 26, component: Lesson02Slide26, title: 'Type Conversion', phase: 'Advanced Concepts' },
    { id: 27, component: Lesson02Slide27, title: 'Common Errors', phase: 'Advanced Concepts' },
    { id: 28, component: Lesson02Slide28, title: 'Best Practices', phase: 'Advanced Concepts' },
    { id: 29, component: Lesson02Slide29, title: 'Memory Visualization', phase: 'Advanced Concepts' },
    { id: 30, component: Lesson02Slide30, title: 'Mission Complete', phase: 'Advanced Concepts' },
];

// Export all slides
export {
    Lesson02Slide01, Lesson02Slide02, Lesson02Slide03, Lesson02Slide04,
    Lesson02Slide05, Lesson02Slide06, Lesson02Slide07, Lesson02Slide08,
    Lesson02Slide09, Lesson02Slide10, Lesson02Slide11, Lesson02Slide12,
    Lesson02Slide13, Lesson02Slide14, Lesson02Slide15, Lesson02Slide16,
    Lesson02Slide17, Lesson02Slide18, Lesson02Slide19, Lesson02Slide20,
    Lesson02Slide21, Lesson02Slide22, Lesson02Slide23, Lesson02Slide24,
    Lesson02Slide25, Lesson02Slide26, Lesson02Slide27, Lesson02Slide28,
    Lesson02Slide29, Lesson02Slide30
};

// Helper functions
export function getSlideById(slideId: number) {
    return lesson02Slides.find(slide => slide.id === slideId);
}

export function getAdjacentSlides(currentId: number) {
    const currentIndex = lesson02Slides.findIndex(s => s.id === currentId);
    return {
        previous: currentIndex > 0 ? lesson02Slides[currentIndex - 1] : null,
        next: currentIndex < lesson02Slides.length - 1 ? lesson02Slides[currentIndex + 1] : null
    };
}

export function getSlidesByPhase(phase: string) {
    return lesson02Slides.filter(slide => slide.phase === phase);
}
