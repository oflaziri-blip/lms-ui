# LESSON 04: COMPLETE SLIDE-BY-SLIDE SPECIFICATION
## All 22 Slides with Full Content

---

## SLIDES 1-5: HOOK & CONTEXT

### Slide 1: Mission Briefing ✅
**Purpose:** Title card with Chronos branding
**Content:** NESTED PROTOCOLS title, mission code L04-NESTED
**Components:** Layers icon, animated particles, gradient text
**See:** Template in COMPLETE_AI_HANDOFF.md

### Slide 2: Character Introduction
**Purpose:** Introduce Aria and Kael's roles
**Content:**
- Aria: "Real systems combine operations—calculations within calculations"
- Kael: "Nesting is how Python handles complex logic"
**Components:** CharacterQuote, ProTip

### Slide 3: Review - Previous Lessons
**Purpose:** Quick recap of math operators and strings
**Content:**
- Math: `10 + 5 * 2` (PEMDAS)
- Strings: `"Hello" + "World"`
- Variables: `x = 10`
**Components:** Terminal with 3 examples

### Slide 4: The Problem
**Purpose:** Show why we need nesting
**Content:**
- Real scenario: "Calculate total damage: (base +bonus) * multiplier"  
- Show the need to combine operations
- Can't do it in separate steps—need it in one line
**Components:** Yellow alert box, real-world example

### Slide 5: What Are Nested Constructions?
**Purpose:** Define nesting with visual metaphor
**Content:**
- Definition: "Operations inside other operations"
- Visual: Boxes within boxes diagram
- Examples: `print(10 + 5)`, `len("Hello")`
**Components:** Diagram boxes, Terminal examples

---

## SLIDES 6-10: NESTED MATH

### Slide 6: Math Inside Math - Basics
**Purpose:** Introduce parentheses nesting
**Content:**
```python
# Without parentheses
print(10 + 5 * 2)  # 20 (PEMDAS)

# With parentheses (nesting)
print((10 + 5) * 2)  # 30 (forces order)
```
**Explanation:** Parentheses create "inner" calculation
**Components:** Terminal with both examples, green success box

### Slide 7: Multiple Parentheses Levels
**Purpose:** Show deeper nesting
**Content:**
```python
print(((10 + 5) * 2) - 1)
# Step 1: 10 + 5 = 15
# Step 2: 15 * 2 = 30
# Step 3: 30 - 1 = 29
```
**Components:** Terminal, step-by-step breakdown

### Slide 8: Order of Evaluation - Inside Out
**Purpose:** Teach evaluation order
**Content:**
- Rule: "Python works from inside to outside"
- Example: `(((5 + 3) * 2) ** 2)`
- Visual: Highlight each layer
**Components:** Color-coded evaluation steps

### Slide 9: Common Mistakes (Error-First)
**Purpose:** Show what breaks
**Content:**
```python
# ERROR: Missing closing parenthesis
print((10 + 5 * 2)
# SyntaxError: unexpected EOF

# ERROR: Extra parenthesis
print((10 + 5)) * 2))
# SyntaxError: unmatched ')'
```
**Components:** Terminal with variant="error", red alert boxes

### Slide 10: Pro Tips from Kael
**Purpose:** Best practices
**Content:**
- "Always match parentheses—count them!"
- "Work inside-out when reading nested code"
- "Use extra parentheses for clarity, even if not needed"
**Components:** ProTip component with 3 tips

---

## SLIDES 11-15: NESTED FUNCTIONS

### Slide 11: Calculation Inside print()
**Purpose:** Show function nesting basics
**Content:**
```python
# Instead of this:
result = 10 + 5
print(result)

# We can nest:
print(10 + 5)  # 15
```
**Explanation:** The calculation happens INSIDE print()
**Components:** Side-by-side Terminal comparison

### Slide 12: String Operations in print()
**Purpose:** Nesting with strings
**Content:**
```python
print("=" * 20)  # ====================
print("Hello" + " " + "World")  # Hello World
print(len("Chronos"))  # 7
```
**Components:** Terminal with 3 examples

### Slide 13: Function Inside Function
**Purpose:** Functions as arguments
**Content:**
```python
# len() inside print()
print(len("Hello"))  # 5

# Multiple operations
print(len("Hello" + "World"))  # 10
```
**Components:** Terminal, explanation of execution order

### Slide 14: Multiple Operations in One Line
**Purpose:** Complex nesting
**Content:**
```python
print(len("Hello") + len("World"))  # 10
print("-" * (5 + 5))  # ----------
print("Score:", (100 + 50) * 2)  # Score: 300
```
**Components:** Terminal with 3 progressive examples

### Slide 15: Real-World Example - Aria
**Purpose:** Practical application
**Content:**
**Scenario:** "User registration system - validate and format username"
```python
username = "  AGENT_007  "
print(len(username.strip().lower()))  # 9
# Strips spaces, converts to lowercase, counts length
```
**Components:** RealWorldExample, detailed explanation

---

## SLIDES 16-20: PRACTICE & CHALLENGES

### Slide 16: Challenge 1 - Simple Calculator
**Purpose:** Basic nesting practice
**Content:**
**Mission:** Calculate `(25 + 15) * 3`
**Expected Output:** `120`
**Components:** Challenge card with given/expected format

### Slide 17: Challenge 2 - Complex Expression
**Purpose:** Multiple levels
**Content:**
**Mission:** Calculate `((100 + 50) / 3) + 10`
**Expected Output:** `60.0`
**Components:** Challenge card, hint about order

### Slide 18: Challenge 3 - String & Math Combo
**Purpose:** Mix data types
**Content:**
**Mission:** Print border with number: `"=" * (10 + 10)` then text
**Expected Output:** 
```
====================
CHRONOS SYSTEM
====================
```
**Components:** Challenge card with multi-line output

### Slide 19: Challenge 4 - Deeply Nested
**Purpose:** Advanced nesting
**Content:**
**Mission:** Calculate `(((5 + 3) * 2) ** 2) - 10`
**Expected Output:** `246`
**Explanation:** (5+3)=8, 8*2=16, 16²=256, 256-10=246
**Components:** Challenge with step-by-step solution

### Slide 20: Full Program Example
**Purpose:** Integration
**Content:**
```python
# Combat damage calculator
base = 50
bonus = 20
multiplier = 2

print("=" * 30)
print("DAMAGE REPORT")
print("=" * 30)
print("Total:", (base + bonus) * multiplier)
print("=" * 30)
```
**Components:** Complete program in Terminal

---

## SLIDES 21-22: CLOSURE

### Slide 21: Mastery Checklist & Kael's Wisdom
**Purpose:** Summary and wisdom
**Content:**
**Checklist:**
- ✓ Nested math with parentheses
- ✓ Order of evaluation (inside-out)
- ✓ Functions inside functions
- ✓ Calculations in print()
- ✓ Complex multi-level nesting

**Kael's Wisdom:**
"Nesting is the foundation of all complex programs. Master it now, and you'll build anything later."

**Components:** BookCheck icon, ProTip, checklist grid

### Slide 22: Lesson Cleared!
**Purpose:** Victory screen
**Content:**
- Trophy icon (large, animated)
- "LESSON CLEARED!"
- "NESTED PROTOCOLS: MASTERED"
- "+150 XP EARNED"
- "Next: Module 2 - Logic & Flow"
**Components:** Trophy icon, green gradient text, particles

---

## FILE ORGANIZATION

Split slides into 3 files:

**File 1:** `Lesson04New01-05.tsx`
- Slides 1-5 (Hook & Context)
- Export all 5 functions

**File 2:** `Lesson04New06-15.tsx`
- Slides 6-15 (Nested Math & Functions)
- Export all 10 functions

**File 3:** `Lesson04New16-22.tsx`
- Slides 16-22 (Practice & Closure)
- Export all 7 functions

---

## IMPORTS FOR EACH FILE

```tsx
import React from 'react';
import { 
    Layers, Code2, Zap, Target, BookCheck, Trophy, 
    Award, AlertTriangle, Lightbulb 
} from 'lucide-react';
import { Terminal, CodeLine } from './Terminal';
import { CharacterQuote, ProTip, RealWorldExample } from './CharacterQuote';
```

---

## EXPORT PATTERN

At the end of each file:
```tsx
export {
    Lesson04NewSlide01,
    Lesson04NewSlide02,
    Lesson04NewSlide03,
    Lesson04NewSlide04,
    Lesson04NewSlide05
};
```

---

This specification gives you the exact content for every slide. Follow the templates in COMPLETE_AI_HANDOFF.md for the JSX structure!
