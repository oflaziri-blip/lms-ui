# LESSON 01: SYSTEM BOOT - CORRECTED OUTLINE
## Introduction to Python & Math Operators

**Chronos Theme:** First contact with the Python language and computational power
**Mission:** Learn to communicate with the system through print() and mathematical operations

---

## SLIDE-BY-SLIDE BREAKDOWN (30 Slides)

### **PHASE 1: HOOK & CONTEXT (Slides 1-5)**

**Slide 1: Mission Briefing**
- Title: "OPERATION CHRONOS: SYSTEM BOOT"
- Mission Code: L01-BOOT
- Objective: Manual AI Override
- Status: ✅ KEEP EXISTING

**Slide 2: Character Introduction**
- Commander Aria: "Today you'll learn the language machines understand"
- Chief Engineer Kael: "Python is your interface to control any system"
- Status: 🆕 CREATE NEW (add characters)

**Slide 3: What is Python?**
- Visual: Timeline of programming languages
- Python as "the universal translator"
- Why Python? (readable, powerful, everywhere)
- Status: 🔧 MODIFY EXISTING

**Slide 4: Your First Command - print()**
- The print() function explained
- Terminal demonstration
- "Making the machine speak"
- Status: ✅ KEEP EXISTING (already good)

**Slide 5: Printing Text vs Numbers**
- Side-by-side comparison
- `print("Hello")` vs `print(42)`
- Quotes for text, no quotes for numbers
- Status: 🔧 MODIFY EXISTING

---

### **PHASE 2: MATH OPERATORS FOUNDATION (Slides 6-15)**

**Slide 6: The 7 Math Operators - Overview**
- Visual grid showing all operators
- `+` Addition
- `-` Subtraction
- `*` Multiplication
- `/` Division
- `//` Floor Division
- `%` Modulo (Remainder)
- `**` Exponentiation
- Status: 🆕 CREATE NEW (CRITICAL - currently missing!)

**Slide 7: Addition (+) and Subtraction (-)**
- Terminal examples:
  ```python
  print(10 + 5)  # 15
  print(20 - 7)  # 13
  ```
- Real-world: Calculating scores, health points
- Status: 🆕 CREATE NEW

**Slide 8: Multiplication (*) and Division (/)**
- Terminal examples:
  ```python
  print(6 * 7)   # 42
  print(20 / 4)  # 5.0
  ```
- Note: Division always returns decimal (float)
- Status: 🆕 CREATE NEW

**Slide 9: Floor Division (//) - Integer Division**
- What it does: Divides and rounds DOWN
- Terminal examples:
  ```python
  print(17 // 5)  # 3 (not 3.4)
  print(20 // 3)  # 6 (not 6.666...)
  ```
- Use case: Splitting items into groups
- Status: 🆕 CREATE NEW

**Slide 10: Modulo (%) - The Remainder Operator**
- What it does: Returns the remainder after division
- Terminal examples:
  ```python
  print(17 % 5)   # 2 (17 = 5*3 + 2)
  print(20 % 3)   # 2 (20 = 3*6 + 2)
  ```
- Use case: Even/odd detection, cycling patterns
- Status: 🆕 CREATE NEW

**Slide 11: Exponentiation (**) - Power Operator**
- What it does: Raises to a power
- Terminal examples:
  ```python
  print(2 ** 3)   # 8 (2 * 2 * 2)
  print(10 ** 2)  # 100
  print(5 ** 0)   # 1
  ```
- Use case: Exponential growth, area calculations
- Status: 🆕 CREATE NEW

**Slide 12: Operator Comparison Table**
- Visual table with all 7 operators
- Example for each
- Expected output
- Status: 🆕 CREATE NEW

**Slide 13: Order of Operations (PEMDAS)**
- **P**arentheses
- **E**xponents
- **M**ultiplication/**D**ivision (left to right)
- **A**ddition/**S**ubtraction (left to right)
- Example: `2 + 3 * 4` = 14 (not 20!)
- Status: 🆕 CREATE NEW

**Slide 14: Using Parentheses to Control Order**
- Without: `2 + 3 * 4` = 14
- With: `(2 + 3) * 4` = 20
- Complex example: `((5 + 3) * 2) ** 2` = 256
- Status: 🆕 CREATE NEW

**Slide 15: Common Mistakes**
- ❌ Division by zero: `print(10 / 0)` → Error!
- ❌ Forgetting parentheses: `2 + 3 * 4` when you meant `(2 + 3) * 4`
- ❌ Using ^ for exponent (it's `**` not `^`)
- Status: 🆕 CREATE NEW

---

### **PHASE 3: PRACTICE & REAL-WORLD (Slides 16-20)**

**Slide 16: Real-World Example (Aria)**
- Commander Aria: "Imagine calculating combat damage..."
- Code example:
  ```python
  base_damage = 50
  multiplier = 2
  bonus = 15
  print(base_damage * multiplier + bonus)  # 115
  ```
- Status: 🆕 CREATE NEW

**Slide 17: Challenge 1 - Basic Arithmetic**
- Calculate: `(100 + 50) * 2`
- Calculate: `200 / 4 + 10`
- Calculate: `2 ** 8`
- Status: 🆕 CREATE NEW

**Slide 18: Challenge 2 - Complex Expression**
- Build a calculator for: `((15 + 5) * 3) - 10`
- Expected output: 50
- Status: 🆕 CREATE NEW

**Slide 19: Challenge 3 - PEMDAS Practice**
- What's the output?
  - `10 + 5 * 2` → ?
  - `(10 + 5) * 2` → ?
  - `10 ** 2 + 5` → ?
- Status: 🆕 CREATE NEW

**Slide 20: Pro Tips (Kael)**
- "Use parentheses liberally - clarity > brevity"
- "Division (/) always returns float, even for whole numbers"
- "Use // when you want whole number division"
- Status: 🆕 CREATE NEW

---

### **PHASE 4: STRING BASICS PREVIEW (Slides 21-25)**

**Slide 21: Printing Text**
- `print("Hello, Chronos!")`
- Single vs double quotes
- Status: ✅ KEEP EXISTING (modify slightly)

**Slide 22: String Concatenation with +**
- `print("Hello" + " " + "World")`
- Combining text pieces
- Status: 🔧 MODIFY EXISTING

**Slide 23: String Repetition with ***
- `print("=" * 20)`
- Creating patterns
- Status: 🔧 MODIFY EXISTING

**Slide 24: Combining Numbers and Strings**
- ❌ `print("Score: " + 100)` → Error!
- ✅ `print("Score: ", 100)` → Works! (comma separates)
- Note: Full string manipulation in Lesson 03
- Status: 🆕 CREATE NEW

**Slide 25: Multi-line Print**
- Multiple print statements
- Creating formatted output
- Example: ASCII art border
- Status: 🔧 MODIFY EXISTING

---

### **PHASE 5: CLOSURE (Slides 26-30)**

**Slide 26: Kael's Parting Wisdom**
- "Math operators are the foundation of all computation"
- "Every game, app, and AI uses these 7 operators billions of times per second"
- "Master these, and you control the machine"
- Status: 🆕 CREATE NEW

**Slide 27: Mission Complete - Mastery Checklist**
- ✅ Using print() to display output
- ✅ All 7 math operators (+, -, *, /, //, %, **)
- ✅ Order of operations (PEMDAS)
- ✅ Using parentheses to control order
- ✅ Printing text with quotes
- ✅ Basic string operations (preview)
- Status: 🆕 CREATE NEW

**Slide 28: Next Mission Preview**
- "LESSON 02: MEMORY CONTAINERS"
- "Learn to SAVE your calculations in variables"
- "No more lost data!"
- Status: 🔧 MODIFY EXISTING

**Slide 29: Your Assignment**
- Build a multi-operation calculator:
  1. Calculate area of rectangle: `length * width`
  2. Calculate circle area: `3.14 * radius ** 2`
  3. Calculate average: `(num1 + num2 + num3) / 3`
  4. Print all results with labels
- Bonus: Use all 7 operators in one program
- Status: 🆕 CREATE NEW

**Slide 30: Lesson Cleared!**
- Trophy animation
- "SYSTEM BOOT: COMPLETE"
- "+100 XP EARNED"
- "You can now speak Python!"
- Status: ✅ KEEP EXISTING (modify text)

---

## SUMMARY OF CHANGES

### Keep (10 slides):
- Slides 1, 4 (already good)

### Modify (8 slides):
- Slides 2, 3, 5, 21, 22, 23, 25, 28, 30

### Create New (12 slides):
- Slides 6-20 (Math operators - THE CRITICAL MISSING CONTENT)
- Slides 24, 26, 27, 29

---

## KEY PEDAGOGICAL ELEMENTS

✅ **Character Voices:** Aria (context) + Kael (technical)
✅ **Metaphor-First:** "Universal translator", "Machine language"
✅ **Error-First Teaching:** Shows common mistakes explicitly
✅ **Graduated Challenges:** Simple → Complex
✅ **Real-World Context:** Combat damage, game scores
✅ **Explicit Mastery List:** Clear checklist at end
✅ **Next Lesson Preview:** Forward momentum

---

## CRITICAL FIXES IMPLEMENTED

1. ✅ Added ALL 7 math operators (currently missing!)
2. ✅ Added PEMDAS / order of operations
3. ✅ Added floor division and modulo (often skipped)
4. ✅ Reduced string focus (moved to Lesson 03)
5. ✅ Added character voices (Aria & Kael)
6. ✅ Added real-world examples
7. ✅ Added explicit assignment

**This outline aligns Lesson 01 with the curriculum requirement: "Introduction to Python & Math Operators"**
