/**
 * Lesson 01 Slides - Complete Index
 * All 30 slides for Operation Chronos: System Boot
 */

// Phase 1: Mission Briefing (Slides 1-6)
import { Lesson01Slide01 } from './Lesson01Slide01';
import { Lesson01Slide02 } from './Lesson01Slide02';
import { Lesson01Slide03 } from './Lesson01Slide03';
import { Lesson01Slide04 } from './Lesson01Slide04';
import { Lesson01Slide05 } from './Lesson01Slide05';
import { Lesson01Slide06 } from './Lesson01Slide06';

// Phase 2: The Intel (Slides 7-14)
import { Lesson01Slide07 } from './Lesson01Slide07';
import { Lesson01Slide08 } from './Lesson01Slide08';
import { Lesson01Slide09 } from './Lesson01Slide09';
import { Lesson01Slide10 } from './Lesson01Slide10';
import { Lesson01Slide11 } from './Lesson01Slide11';
import { Lesson01Slide12 } from './Lesson01Slide12';
import { Lesson01Slide13 } from './Lesson01Slide13';
import { Lesson01Slide14 } from './Lesson01Slide14';

// Phase 3: Code Uplink (Slides 15-22)
import { Lesson01Slide15 } from './Lesson01Slide15';
import { Lesson01Slide16, Lesson01Slide17, Lesson01Slide18, Lesson01Slide19 } from './Lesson01Slides16-19';
import { Lesson01Slide20 } from './Lesson01Slide20';
import { Lesson01Slide21, Lesson01Slide22 } from './Lesson01Slides21-22';

// Phase 4: Mission Deployment (Slides 23-30)
import { Lesson01Slide23, Lesson01Slide24, Lesson01Slide25, Lesson01Slide26 } from './Lesson01Slides23-26';
import { Lesson01Slide27, Lesson01Slide28, Lesson01Slide29, Lesson01Slide30 } from './Lesson01Slides27-30';

export const lesson01Slides = [
    // Mission Briefing
    { id: 1, component: Lesson01Slide01, title: 'Operation Chronos: System Boot', phase: 'Mission Briefing' },
    { id: 2, component: Lesson01Slide02, title: 'Welcome, Cadet', phase: 'Mission Briefing' },
    { id: 3, component: Lesson01Slide03, title: 'Critical Error', phase: 'Mission Briefing' },
    { id: 4, component: Lesson01Slide04, title: 'Your Mission', phase: 'Mission Briefing' },
    { id: 5, component: Lesson01Slide05, title: 'The Terminal', phase: 'Mission Briefing' },
    { id: 6, component: Lesson01Slide06, title: 'Key Terms', phase: 'Mission Briefing' },

    // The Intel
    { id: 7, component: Lesson01Slide07, title: 'What is print()?', phase: 'The Intel' },
    { id: 8, component: Lesson01Slide08, title: 'Anatomy of print()', phase: 'The Intel' },
    { id: 9, component: Lesson01Slide09, title: 'Parentheses - The Airlock', phase: 'The Intel' },
    { id: 10, component: Lesson01Slide10, title: 'Strings Need Protection', phase: 'The Intel' },
    { id: 11, component: Lesson01Slide11, title: 'Crash Alert #1', phase: 'The Intel' },
    { id: 12, component: Lesson01Slide12, title: 'Crash Alert #2', phase: 'The Intel' },
    { id: 13, component: Lesson01Slide13, title: 'Success!', phase: 'The Intel' },
    { id: 14, component: Lesson01Slide14, title: 'Knowledge Check', phase: 'The Intel' },

    // Code Uplink
    { id: 15, component: Lesson01Slide15, title: 'Sending the Wake-Up Signal', phase: 'Code Uplink' },
    { id: 16, component: Lesson01Slide16, title: 'Micro-Step 1: The Command', phase: 'Code Uplink' },
    { id: 17, component: Lesson01Slide17, title: 'Micro-Step 2: Open Channel', phase: 'Code Uplink' },
    { id: 18, component: Lesson01Slide18, title: 'Micro-Step 3: The Signal', phase: 'Code Uplink' },
    { id: 19, component: Lesson01Slide19, title: 'Micro-Step 4: Seal Channel', phase: 'Code Uplink' },
    { id: 20, component: Lesson01Slide20, title: 'AI Online', phase: 'Code Uplink' },
    { id: 21, component: Lesson01Slide21, title: 'Sending a Second Signal', phase: 'Code Uplink' },
    { id: 22, component: Lesson01Slide22, title: 'Your Turn', phase: 'Code Uplink' },

    // Mission Deployment
    { id: 23, component: Lesson01Slide23, title: 'Final Training Sequence', phase: 'Mission Deployment' },
    { id: 24, component: Lesson01Slide24, title: 'Typing Tasks', phase: 'Mission Deployment' },
    { id: 25, component: Lesson01Slide25, title: 'Debugging Tasks', phase: 'Mission Deployment' },
    { id: 26, component: Lesson01Slide26, title: 'Writing Tasks', phase: 'Mission Deployment' },
    { id: 27, component: Lesson01Slide27, title: 'Combat Strategy', phase: 'Mission Deployment' },
    { id: 28, component: Lesson01Slide28, title: 'Debugging Secret', phase: 'Mission Deployment' },
    { id: 29, component: Lesson01Slide29, title: 'Architect Challenge', phase: 'Mission Deployment' },
    { id: 30, component: Lesson01Slide30, title: 'Lesson 01 Cleared', phase: 'Mission Deployment' },
];

// Export all slides
export {
    Lesson01Slide01, Lesson01Slide02, Lesson01Slide03, Lesson01Slide04,
    Lesson01Slide05, Lesson01Slide06, Lesson01Slide07, Lesson01Slide08,
    Lesson01Slide09, Lesson01Slide10, Lesson01Slide11, Lesson01Slide12,
    Lesson01Slide13, Lesson01Slide14, Lesson01Slide15, Lesson01Slide16,
    Lesson01Slide17, Lesson01Slide18, Lesson01Slide19, Lesson01Slide20,
    Lesson01Slide21, Lesson01Slide22, Lesson01Slide23, Lesson01Slide24,
    Lesson01Slide25, Lesson01Slide26, Lesson01Slide27, Lesson01Slide28,
    Lesson01Slide29, Lesson01Slide30
};

// Helper functions
export function getSlideById(slideId: number) {
    return lesson01Slides.find(slide => slide.id === slideId);
}

export function getAdjacentSlides(currentId: number) {
    const currentIndex = lesson01Slides.findIndex(s => s.id === currentId);
    return {
        previous: currentIndex > 0 ? lesson01Slides[currentIndex - 1] : null,
        next: currentIndex < lesson01Slides.length - 1 ? lesson01Slides[currentIndex + 1] : null
    };
}

export function getSlidesByPhase(phase: string) {
    return lesson01Slides.filter(slide => slide.phase === phase);
}
