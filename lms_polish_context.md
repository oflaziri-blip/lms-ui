# LMS Refactoring & Polishing Guidelines
Act as a Senior Architect auditing the "LMS-UI" codebase.

## 1. Domain Language Translation (CRITICAL)
Our current database uses non-standard naming. You must map concepts as follows:
* **"Section" (Standard)** = `groups` table (Current).
    * *Reason:* Our `groups` table has `start_date`, `end_date`, and `schedule`. These are properties of a Course Section, not a student project team.
* **"Course" (Standard)** = `courses` table (Current).
* **"Enrollment" (Standard)** = `enrollments` table (Current).

## 2. New Feature: "Student Teams" (Missing)
The user wants "Groups" (small student teams). Since `groups` is already taken for "Sections", we will introduce a new concept called **"ProjectTeams"**.
* **Structure:** `ProjectTeamSet` (e.g., "Assignment 1 Teams") -> `ProjectTeam` (e.g., "Team Alpha").
* **Constraint:** A student can be in only ONE `ProjectTeam` per `ProjectTeamSet`.

## 3. Security & Architecture Rules
* **No Client-Side Logic for Enrollment:** The current `useEffect` in `groups/[id]/page.tsx` that triggers enrollment is banned. Move this logic to a **Server Action**.
* **Service Role Usage:** Usage of `createServiceRoleClient` is permitted ONLY in Server Actions that have explicit `requireAdmin()` or `requireTeacher()` checks at the very top.
* **Idempotency:** The `enrollStudent` function must never throw an error if called twice; it should return the existing enrollment.

## 4. Known Technical Debt (Fix these)
* **Infinite Loops:** Fix the dependency array in `app/(admin)/admin/groups/[id]/page.tsx`.
* **Type Safety:** The `authError` variable in `groups/[id]/enroll/route.ts` is missing proper typing.