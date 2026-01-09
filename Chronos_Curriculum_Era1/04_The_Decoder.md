# 📟 Lesson 04: The Decoder
**Topic:** F-Strings, Concatenation | **Era:** Comms Room

## 🎬 Phase 1: Mission Briefing (Slides 1-6)
1.  **Title Card:** "THE DECODER". `**[VISUAL: Matrix-style raining code with a glowing keyhole]**`
2.  **The Hook:** We are receiving scrambled messages. "Hello [UNKNOWN]".
3.  **Objective:** Inject variable data into text templates using **F-Strings**.
4.  **Old Way:** Concatenation (`+`). `**[VISUAL: Taping broken boxes together]**`
5.  **New Way:** F-Strings. `**[VISUAL: A magic lens revealing hidden data]**`
6.  **Vocab:** **Curly Braces** `{}`.

## 🧠 Phase 2: The Intel (Slides 7-14)
7.  **Syntax:** `f"Text {variable}"`.
8.  **The Magic Key:** The `f` before the quotes unlocks the brackets.
9.  **The Wormhole:** The `{}` brackets are portals where variables travel.
10. **Mixing Types:** F-Strings handle Ints and Strings automatically!
11. **Math Inside:** `f"Next level: {level + 1}"`.
12. **Common Error:** Forgetting the `f`. Prints `{variable}` literally.

## 💻 Phase 3: The Uplink (Slides 15-22)
*Scenario: Threat Warning.*
15. **Setup:** `enemy = "Dragon"`.
16. **Micro-Step 1:** `msg = f"Warning!"`.
17. **Micro-Step 2:** `msg = f"Warning! {enemy}"`.
18. **Micro-Step 3:** `msg = f"Warning! {enemy} detected."`.
19. **Output:** `Warning! Dragon detected.`
20. **Modify:** `enemy = "Slime"`.
21. **Visual:** HUD updates instantly.
22. **Interactive:** Create an intro: `My name is {name}`.

## ⚔️ Phase 4: The 17 Tasks (Slides 23-30)

### ⚡ 5 Typing Tasks
1. `print(f"Hello {name}")`
2. `print(f"Score: {score}")`
3. `print(f"Player {p1} vs {p2}")`
4. `msg = f"Time left: {time}"`
5. `print(f"Year: {year}")`

### 🐞 5 Debugging Tasks
1. `print("Hello {name}")` (Missing f)
2. `print(f"Hello {name)` (Missing })
3. `print(f"Score: score")` (Missing {})
4. `print f"Hi"` (Missing parens)
5. `print(F"Hi")` (Capital F works but suggest lowercase)

### 📝 7 Writing Tasks
*Recruit*
1. `name="Cadet"`. Print welcome message.
2. `item="Key"`. Print found message.
*Agent*
3. `p1="Ash"`, `s1=10`. Print scoreboard.
4. `day="Monday"`, `weather="Sunny"`. Print report.
5. `gun="Laser"`, `ammo=50`. Print status.
*Architect*
6. **Mad Libs:** Noun, Verb, Adjective. Print funny sentence.
7. **Math F-String:** `num=5`. Print `f"Double is {num*2}"`.