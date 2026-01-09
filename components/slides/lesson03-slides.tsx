/**
 * Lesson 03 Slides - Complete Index
 * All 30 slides for Data Streams & String Indexing
 */

// Phase 1: Mission Briefing (Slides 1-5)
import { Lesson03Slide01 } from './Lesson03Slide01';
import { Lesson03Slide02, Lesson03Slide03, Lesson03Slide04, Lesson03Slide05 } from './Lesson03Slides02-05';

// Phase 2: Core Concepts (Slides 6-10)
import { Lesson03Slide06, Lesson03Slide07, Lesson03Slide08, Lesson03Slide09, Lesson03Slide10 } from './Lesson03Slides06-10';

// Phase 3: Mission Complete (Slide 11)
import { Lesson03Slide11 } from './Lesson03Slide11';

// Phase 4: String Operations (Slides 12-15)
import { Lesson03Slide12, Lesson03Slide13, Lesson03Slide14, Lesson03Slide15 } from './Lesson03Slides12-15';

// Phase 5: Advanced Operations (Slides 16-19)
import { Lesson03Slide16, Lesson03Slide17, Lesson03Slide18, Lesson03Slide19 } from './Lesson03Slides16-19';

// Phase 6: Advanced Topics (Slides 20-23)
import { Lesson03Slide20, Lesson03Slide21, Lesson03Slide22, Lesson03Slide23 } from './Lesson03Slides20-23';

// Phase 7: Final Topics & Summary (Slides 24-30)
import { Lesson03Slide24, Lesson03Slide25, Lesson03Slide26, Lesson03Slide27, Lesson03Slide28, Lesson03Slide29, Lesson03Slide30 } from './Lesson03Slides24-30';

export const lesson03Slides = [
    // Mission Briefing
    { id: 1, component: Lesson03Slide01, title: 'Operation Chronos: Data Streams', phase: 'Mission Briefing' },
    { id: 2, component: Lesson03Slide02, title: 'Mission Objectives', phase: 'Mission Briefing' },
    { id: 3, component: Lesson03Slide03, title: 'What is a String?', phase: 'Mission Briefing' },
    { id: 4, component: Lesson03Slide04, title: 'The Index Train', phase: 'Mission Briefing' },
    { id: 5, component: Lesson03Slide05, title: 'Accessing Characters', phase: 'Mission Briefing' },

    // Core Concepts
    { id: 6, component: Lesson03Slide06, title: 'String Length', phase: 'Core Concepts' },
    { id: 7, component: Lesson03Slide07, title: 'Negative Indexing', phase: 'Core Concepts' },
    { id: 8, component: Lesson03Slide08, title: 'String Slicing', phase: 'Core Concepts' },
    { id: 9, component: Lesson03Slide09, title: 'F-Strings', phase: 'Core Concepts' },
    { id: 10, component: Lesson03Slide10, title: 'String Methods', phase: 'Core Concepts' },
    { id: 11, component: Lesson03Slide11, title: 'Checkpoint Summary', phase: 'Core Concepts' },

    // String Operations
    { id: 12, component: Lesson03Slide12, title: 'String Concatenation', phase: 'String Operations' },
    { id: 13, component: Lesson03Slide13, title: 'String Multiplication', phase: 'String Operations' },
    { id: 14, component: Lesson03Slide14, title: 'Escape Characters', phase: 'String Operations' },
    { id: 15, component: Lesson03Slide15, title: 'Finding Characters', phase: 'String Operations' },

    // Advanced Operations
    { id: 16, component: Lesson03Slide16, title: 'Slicing Shortcuts', phase: 'Advanced Operations' },
    { id: 17, component: Lesson03Slide17, title: 'String Looping', phase: 'Advanced Operations' },
    { id: 18, component: Lesson03Slide18, title: 'String Immutability', phase: 'Advanced Operations' },
    { id: 19, component: Lesson03Slide19, title: 'Common String Errors', phase: 'Advanced Operations' },

    // Advanced Topics
    { id: 20, component: Lesson03Slide20, title: 'String Comparison', phase: 'Advanced Topics' },
    { id: 21, component: Lesson03Slide21, title: 'Step Slicing', phase: 'Advanced Topics' },
    { id: 22, component: Lesson03Slide22, title: 'Practical Challenge', phase: 'Advanced Topics' },
    { id: 23, component: Lesson03Slide23, title: 'Best Practices', phase: 'Advanced Topics' },

    // Final Topics & Summary
    { id: 24, component: Lesson03Slide24, title: 'More String Methods', phase: 'Final Topics' },
    { id: 25, component: Lesson03Slide25, title: 'Real-World Applications', phase: 'Final Topics' },
    { id: 26, component: Lesson03Slide26, title: 'Quick Review - Part 1', phase: 'Review' },
    { id: 27, component: Lesson03Slide27, title: 'Quick Review - Part 2', phase: 'Review' },
    { id: 28, component: Lesson03Slide28, title: 'Common Patterns', phase: 'Review' },
    { id: 29, component: Lesson03Slide29, title: 'Key Takeaways', phase: 'Review' },
    { id: 30, component: Lesson03Slide30, title: 'Mission Complete', phase: 'Mission Complete' },
];

// Export all slides
export {
    Lesson03Slide01, Lesson03Slide02, Lesson03Slide03, Lesson03Slide04,
    Lesson03Slide05, Lesson03Slide06, Lesson03Slide07, Lesson03Slide08,
    Lesson03Slide09, Lesson03Slide10, Lesson03Slide11, Lesson03Slide12,
    Lesson03Slide13, Lesson03Slide14, Lesson03Slide15, Lesson03Slide16,
    Lesson03Slide17, Lesson03Slide18, Lesson03Slide19, Lesson03Slide20,
    Lesson03Slide21, Lesson03Slide22, Lesson03Slide23, Lesson03Slide24,
    Lesson03Slide25, Lesson03Slide26, Lesson03Slide27, Lesson03Slide28,
    Lesson03Slide29, Lesson03Slide30
};

// Helper functions
export function getSlideById(slideId: number) {
    return lesson03Slides.find(slide => slide.id === slideId);
}

export function getAdjacentSlides(currentId: number) {
    const currentIndex = lesson03Slides.findIndex(s => s.id === currentId);
    return {
        previous: currentIndex > 0 ? lesson03Slides[currentIndex - 1] : null,
        next: currentIndex < lesson03Slides.length - 1 ? lesson03Slides[currentIndex + 1] : null
    };
}

export function getSlidesByPhase(phase: string) {
    return lesson03Slides.filter(slide => slide.phase === phase);
}
