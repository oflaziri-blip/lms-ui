# Project Handover Context: Cyberpunk LMS

## 1. Project Overview
**Name:** LMS UI (Cyberpunk Edition)
**Goal:** Build a high-fidelity, gamified Learning Management System with a specific focus on a "Cyberpunk/Sci-Fi" aesthetic for Python & Go programming courses.
**Current State:** The student dashboard and lesson execution environment have been significantly refactored to match a dark, neon-green "Cyberpunk" design.

## 2. Technical Stack
- **Framework:** Next.js 14+ (App Router)
- **Styling:** Tailwind CSS (Custom config for Cyberpunk colors)
- **Icons:** Lucide React
- **Language:** TypeScript
- **Runtime (Code Execution):** Pyodide (WebAssembly Python)
- **State Management:** React Local State (mostly), URL params for routing.

## 3. Key Features & Accomplishments

### 3.1 Student Dashboard (`app/(student)/dashboard/page.tsx`)
- **Design:** Complete overhaul to "Cyberpunk" aesthetic (Dark Blue/Black backgrounds, Neon Green accents).
- **Hero Section:** Dynamic "Continue Learning" card that updates based on progress.
- **Mission Map:** A timeline/node-based view of the course modules ("Eras").
- **Stats:** XP tracking, "Missions Completed" counters.
- **Widgets:** Challenge of the day, Leaderboard placeholders.
- **Testing Mode:** Logic added to unlock/complete lessons for development testing (`ANALYSIS_MODE` flag).

### 3.2 Lesson Execution Environment (`app/(student)/python/[lessonId]/page.tsx`)
- **Layout:** Rebuilt into a flexible 3-column layout:
    1.  **Left Panel (25%):** Instructions (`InstructionsPanel.tsx`), Task Checklist, Tips.
    2.  **Center Panel (50%):** Code Editor (`CodeEditorPanel.tsx`) wrapping Monaco Editor.
    3.  **Right Panel (25%):** Terminal Output (`TerminalOutputPanel.tsx`).
- **Theme:** Fully dark-themed with Neon Green primary colors.
- **Components Created/Refactored:**
    - `InstructionsPanel`: Displays content + checklist.
    - `CodeEditorPanel`: Wraps Monaco, handles tabs/filename display.
    - `TerminalOutputPanel`: Mock terminal UI + real output display.
    - `CodeTerminalPyodide`: Integrated Pyodide execution, updated to Dark Mode (Monaco `vs-dark`).
    - `QuizChallenge` & `TypingChallenge`: Styled to match Cyberpunk theme.
    - `ProgressSnake`: Top navigation bar updated to Neon/Dark style.

### 3.3 Course Content
- **Course Data:** `public/python-go-1-course-full.json` contains the full structure (32 Lessons, 6 Eras).
- **Lesson 01:** Full slide deck implementation using React components (not static images).
- **Assets:** System for generating/using assets found in `components/slides`.

## 4. Key File Locations

| Component | Path | Description |
|-----------|------|-------------|
| **Dashboard Page** | `app/(student)/dashboard/page.tsx` | Main student landing page. |
| **Lesson Page** | `app/(student)/python/[lessonId]/page.tsx` | The IDE/Lesson runner. |
| **Terminal Comp** | `components/lesson/challenges/CodeTerminalPyodide.tsx` | The Pyodide wrapper + Monaco Editor. |
| **Instructions** | `components/lesson/InstructionsPanel.tsx` | Left panel of lesson view. |
| **Output Panel** | `components/lesson/TerminalOutputPanel.tsx` | Right panel of lesson view. |
| **Quiz Comp** | `components/lesson/challenges/QuizChallenge.tsx` | Multiple choice question logic. |
| **Course JSON** | `public/python-go-1-course-full.json` | Source of truth for curriculum. |

## 5. Outstanding Tasks / Next Steps

1.  **Content Population:**
    - The JSON file (`public/python-go-1-course-full.json`) has structure but empty `tasks: []` arrays for most lessons.
    - Need to define tasks (checklists) for each lesson to populate the `InstructionsPanel`.

2.  **Lesson 02 - 32 Implementation:**
    - Only Lesson 01 slides are fully built.
    - Need to create slide components or content for the remaining lessons.

3.  **Mobile Responsiveness:**
    - The 3-column layout is desktop-first. Need to verify stacking behavior on mobile.

4.  **Backend Integration (Future):**
    - Currently using mock/local logic for progress. Will need connection to a real backend DB for persisting user progress.

5.  **Clean Up:**
    - Remove `ANALYSIS_MODE` / `TESTING MODE` flags when ready for production.

## 6. How to Run
1.  `npm run dev`
2.  Navigate to `http://localhost:3001/dashboard`

## 7. Known Issues/Notes
- **Token Usage:** The previous chat session was long. This context file serves as a checkpoint.
- **Editor Theme:** Monaco editor theme was forced to `vs-dark` to fix white glare issues.
