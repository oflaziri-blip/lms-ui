/**
 * Lesson 05 - Complete Slide Index (30 Slides)
 * All slides for Decision Protocols & Conditional Logic
 */

// Import all slide components
import { Lesson05Slide01, Lesson05Slide02, Lesson05Slide03, Lesson05Slide15 } from './lesson05-slides';
import { Lesson05Slide04, Lesson05Slide05, Lesson05Slide06, Lesson05Slide07, Lesson05Slide08 } from './Lesson05Slides04-08';
import { Lesson05Slide09, Lesson05Slide10, Lesson05Slide11, Lesson05Slide12, Lesson05Slide13, Lesson05Slide14 } from './Lesson05Slides09-14';
import { Lesson05Slide16, Lesson05Slide17, Lesson05Slide18, Lesson05Slide19, Lesson05Slide20 } from './Lesson05Slides16-20';
import { Lesson05Slide21, Lesson05Slide22, Lesson05Slide23, Lesson05Slide24, Lesson05Slide25 } from './Lesson05Slides21-25';
import { Lesson05Slide26, Lesson05Slide27, Lesson05Slide28, Lesson05Slide29, Lesson05Slide30 } from './Lesson05Slides26-30';

export const lesson05SlidesArray = [
    // Mission Briefing (1-3)
    { id: 1, component: Lesson05Slide01, title: 'Operation Chronos: Decision Protocols', phase: 'Mission Briefing' },
    { id: 2, component: Lesson05Slide02, title: 'Mission Objectives', phase: 'Mission Briefing' },
    { id: 3, component: Lesson05Slide03, title: 'The if Statement', phase: 'Core Concepts' },

    // Core Concepts (4-8)
    { id: 4, component: Lesson05Slide04, title: 'The else Statement', phase: 'Core Concepts' },
    { id: 5, component: Lesson05Slide05, title: 'The elif Statement', phase: 'Core Concepts' },
    { id: 6, component: Lesson05Slide06, title: 'Indentation Rules', phase: 'Core Concepts' },
    { id: 7, component: Lesson05Slide07, title: 'Common Errors', phase: 'Core Concepts' },
    { id: 8, component: Lesson05Slide08, title: 'Practical Example: Grade System', phase: 'Core Concepts' },

    // Advanced Examples (9-15)
    { id: 9, component: Lesson05Slide09, title: 'Example: Age Classifier', phase: 'Examples' },
    { id: 10, component: Lesson05Slide10, title: 'Example: Number Sign Checker', phase: 'Examples' },
    { id: 11, component: Lesson05Slide11, title: 'Best Practices', phase: 'Best Practices' },
    { id: 12, component: Lesson05Slide12, title: 'Quick Review - Part 1', phase: 'Review' },
    { id: 13, component: Lesson05Slide13, title: 'Quick Review - Part 2', phase: 'Review' },
    { id: 14, component: Lesson05Slide14, title: 'Key Takeaways', phase: 'Review' },
    { id: 15, component: Lesson05Slide15, title: 'Checkpoint', phase: 'Checkpoint' },

    // Advanced Patterns (16-20)
    { id: 16, component: Lesson05Slide16, title: 'Complex Conditions', phase: 'Advanced' },
    { id: 17, component: Lesson05Slide17, title: 'Nested If Statements', phase: 'Advanced' },
    { id: 18, component: Lesson05Slide18, title: 'Real-World: User Authentication', phase: 'Real-World Examples' },
    { id: 19, component: Lesson05Slide19, title: 'Real-World: BMI Calculator', phase: 'Real-World Examples' },
    { id: 20, component: Lesson05Slide20, title: 'Real-World: Discount Calculator', phase: 'Real-World Examples' },

    // More Examples (21-25)
    { id: 21, component: Lesson05Slide21, title: 'Example: Temperature Advisor', phase: 'More Examples' },
    { id: 22, component: Lesson05Slide22, title: 'Example: Voting Eligibility', phase: 'More Examples' },
    { id: 23, component: Lesson05Slide23, title: 'Example: Password Strength', phase: 'More Examples' },
    { id: 24, component: Lesson05Slide24, title: 'Example: Letter Grade System', phase: 'More Examples' },
    { id: 25, component: Lesson05Slide25, title: 'Challenge: Leap Year Calculator', phase: 'More Examples' },

    // Final Review & Completion (26-30)
    { id: 26, component: Lesson05Slide26, title: 'Practice Tips', phase: 'Final Review' },
    { id: 27, component: Lesson05Slide27, title: 'Common Patterns', phase: 'Final Review' },
    { id: 28, component: Lesson05Slide28, title: 'Debugging Conditionals', phase: 'Final Review' },
    { id: 29, component: Lesson05Slide29, title: 'Final Review', phase: 'Final Review' },
    { id: 30, component: Lesson05Slide30, title: 'Mission Complete', phase: 'Mission Complete' },
];

// Export as lesson05Slides for compatibility
export { lesson05SlidesArray as lesson05Slides };

// Export all slides
export {
    Lesson05Slide01, Lesson05Slide02, Lesson05Slide03, Lesson05Slide04, Lesson05Slide05,
    Lesson05Slide06, Lesson05Slide07, Lesson05Slide08, Lesson05Slide09, Lesson05Slide10,
    Lesson05Slide11, Lesson05Slide12, Lesson05Slide13, Lesson05Slide14, Lesson05Slide15,
    Lesson05Slide16, Lesson05Slide17, Lesson05Slide18, Lesson05Slide19, Lesson05Slide20,
    Lesson05Slide21, Lesson05Slide22, Lesson05Slide23, Lesson05Slide24, Lesson05Slide25,
    Lesson05Slide26, Lesson05Slide27, Lesson05Slide28, Lesson05Slide29, Lesson05Slide30
};

// Helper functions
export function getSlideById(slideId: number) {
    return lesson05SlidesArray.find(slide => slide.id === slideId);
}

export function getAdjacentSlides(currentId: number) {
    const currentIndex = lesson05SlidesArray.findIndex(s => s.id === currentId);
    return {
        previous: currentIndex > 0 ? lesson05SlidesArray[currentIndex - 1] : null,
        next: currentIndex < lesson05SlidesArray.length - 1 ? lesson05SlidesArray[currentIndex + 1] : null
    };
}

export function getSlidesByPhase(phase: string) {
    return lesson05SlidesArray.filter(slide => slide.phase === phase);
}
