# 🖐 Lesson 05: Biometric Scan
**Topic:** `input()`, `int()`, Casting | **Era:** The Time Gate

## 🎬 Phase 1: Mission Briefing (Slides 1-6)
1.  **Title Card:** "BIOMETRIC SCAN". `**[VISUAL: A high-tech laser grid blocking a door]**`
2.  **The Hook:** The Gate is locked. It requires User Identification.
3.  **The Problem:** Our code is static. We need to make it **Interactive**.
4.  **The Tool:** `input()`. Pauses and listens.
5.  **The Trap:** `input()` returns Strings. "10" is text, not a number.
6.  **The Fix:** `int()`. The Transformer machine.

## 🧠 Phase 2: The Intel (Slides 7-14)
7.  **Input Flow:** User -> Keyboard -> Variable.
8.  **The Pause:** The code STOPS until you hit Enter. `**[VISUAL: Hourglass]**`
9.  **Type Error:** `input() + 5` = Crash.
10. **Casting:** `int(input())`. Wrapping the command.
11. **Syntax:** `name = input("Prompt: ")`.
12. **Visual:** A machine stripping "quotes" off a number.

## 💻 Phase 3: The Uplink (Slides 15-22)
*Scenario: Security Check.*
15. **Setup:** Ask for Name.
16. **Step 1:** `name = input("Identify: ")`.
17. **Step 2:** Ask for Birth Year.
18. **Step 3:** `year = int(input("Year: "))`.
19. **Step 4:** `age = 3042 - year`.
20. **Output:** `print(f"Access Granted. Age {age}")`.
21. **Modify:** Remove `int()` and watch it crash.
22. **Interactive:** Ask "How many dragons?" and multiply by 2.

## ⚔️ Phase 4: The 17 Tasks (Slides 23-30)

### ⚡ 5 Typing Tasks
1. `name = input("Name: ")`
2. `age = int(input("Age: "))`
3. `print(f"Hi {name}")`
4. `num = int(input("Number: "))`
5. `color = input("Color: ")`

### 🐞 5 Debugging Tasks
1. `name = input("Name: "` (Missing paren)
2. `age = input("Age: ")` -> `age + 1` (Need int)
3. `int(input "Num")` (Syntax)
4. `color = input(Color)` (Prompt needs quotes)
5. `input = "Hi"` (Don't overwrite function name)

### 📝 7 Writing Tasks
*Recruit*
1. Ask for favorite food. Print it.
2. Ask for a number. Print it.
*Agent*
3. **Adder:** Ask for 2 numbers. Print sum.
4. **Dog Years:** Ask age. Multiply by 7.
5. **Area:** Ask Length/Width. Print Area.
*Architect*
6. **Shop:** Ask Price and Quantity. Print Total.
7. **Time Left:** Ask "Current Year". Calculate years to 3050.