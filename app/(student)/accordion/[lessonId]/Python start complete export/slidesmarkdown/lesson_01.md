---
marp: true
theme: default
html: true
class: invert
paginate: true
backgroundColor: #0f172a
color: #00ff41
style: |
  section {
    font-family: 'Courier New', monospace;
    font-size: 38px;
    line-height: 1.4;
    color: #e4e4e7;
  }
  h1 {
    color: #22c55e;
    font-size: 85px;
    text-shadow: 0 0 25px #22c55e;
    margin-bottom: 30px;
    text-align: center;
  }
  h2 {
    font-size: 55px;
    color: #60a5fa;
    margin-bottom: 20px;
  }
  code {
    background: #18181b;
    color: #facc15;
    font-size: 34px;
    padding: 10px 20px;
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.5);
  }
  strong {
    color: #ef4444;
  }
  svg { display: block; margin: 20px auto; max-width: 95%; }
---

# 🌆 L01: Introduction to Python
## Print() & Math Operators

**Neon City Cyber Academy**
*Your coding journey begins here*

![bg right:40%](https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800)

---

## 👋 Meet Your Team

**Emily Chen** - *Your Handler*
> "Welcome to the Academy, recruit. I'll guide you through your training."

**Cole Martinez** - *Tech Lead*
> "I'll teach you the tools. Master them, and you'll be unstoppable."

![bg right](https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800)

---

## 🐍 What is Python?

A **programming language** - your tool to command computers.

### Why Python?
- 🎮 **Games**: Minecraft mods, indie games
- 🤖 **AI**: ChatGPT, image generators  
- 🌐 **Web**: Instagram, YouTube, Spotify
- 🔐 **Security**: Ethical hacking tools

**Used by:** Google, Netflix, NASA, Tesla

---

## 💬 Emily Says:

> "Python is named after Monty Python, not the snake! The creators had a sense of humor."

> "Every app you use daily - TikTok, Discord, YouTube - has Python code inside it."

**Python = Easy to learn + Incredibly powerful**

![bg right](https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800)

---

## 📢 Your First Tool: print()

The `print()` function displays text on screen.

```python
print("Hello, World!")
```

### Breakdown:
- `print` → The command
- `()` → Parentheses (required!)
- `"..."` → Text in quotes (a "string")

**Think of it as your computer's megaphone!**

---

## 🎯 Challenge #1: Your First Program

### Type this EXACTLY:

```python
print("Hello, Neon City!")
```

### What happens:
1. Python reads the command
2. Sees `print()`
3. Grabs the text
4. Displays it instantly ⚡

---

## 🔄 Sequential Execution

Python runs code **top to bottom**, one line at a time.

```python
print("Starting mission...")
print("Loading systems...")
print("Ready!")
```

**Output:**
```
Starting mission...
Loading systems...
Ready!
```

Each `print()` creates a **new line**.

---

## 💬 Cole Says:

> "Computers are dumb. They do EXACTLY what you tell them, in EXACTLY the order you say it."

> "If your code doesn't work, 99% of the time it's a typo. Check capitalization, quotes, and parentheses!"

**Python is case-sensitive:** `print` ≠ `Print`

---

## 🧮 Python as a Calculator

You can print **calculations**:

```python
print(5 + 3)      # Output: 8
print(10 - 4)     # Output: 6
```

Python solves the math FIRST, then prints the result.

**Your computer = Super calculator**

![bg right](https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800)

---

## ➕ Operator #1: Addition

```python
print(5 + 3)       # 8
print(100 + 27)    # 127  
print(1 + 1 + 1)   # 3
```

### Uses:
- Game scores
- Shopping carts
- Counting items

**Pro tip:** Use spaces for readability
`5 + 3` is better than `5+3`

---

## ➖ Operator #2: Subtraction

```python
print(10 - 3)      # 7
print(100 - 25)    # 75
print(5 - 5)       # 0
print(3 - 10)      # -7 (negative!)
```

### Uses:
- Reducing health
- Countdown timers
- Calculating change

---

## ✖️ Operator #3: Multiplication

```python
print(5 * 3)       # 15
print(7 * 7)       # 49 
print(2 * 10)      # 20
```

### Cool trick:
```python
print("=" * 10)    # ==========
```
**Repeats text!** We'll use this for borders.

---

## ➗ Operator #4: Division

```python
print(10 / 2)      # 5.0
print(15 / 4)      # 3.75
print(7 / 3)       # 2.333...
```

**Notice:** Python always gives decimals with `/`

Even `10 / 5` returns `2.0` (not just `2`)

---

## 💬 Emily Explains:

> "Division always gives you a float (decimal number) because Python wants to be precise."

> "If you divide 10 cookies among 3 people, the answer isn't just '3' - it's '3.33 cookies each'. Python shows the exact math!"

---

## ⬇️ Operator #5: Floor Division

The `//` operator rounds DOWN to the nearest whole number.

```python
print(10 // 3)     # 3 (not 3.33)
print(15 // 4)     # 3 (not 3.75)
print(7 // 2)      # 3 (not 3.5)
```

### Real example:
"10 cookies, 3 people. How many does each get?"
`10 // 3 = 3` (with some left over!)

---

## 📐 Operator #6: Modulo (%)

Gets the **REMAINDER** after division.

```python
print(10 % 3)      # 1 (10 ÷ 3 = 3 remainder 1)
print(15 % 4)      # 3
print(8 % 2)       # 0 (no remainder)
```

### Uses:
- Check if number is even: `x % 2 == 0`
- Cycle through lists
- "What's left over?"

---

## 💬 Cole's Pro Tip:

> "Use `//` and `%` together:"

```python
print(17 // 5)     # 3 (full groups)
print(17 % 5)      # 2 (leftover)
```

> "17 items, groups of 5: You get **3 complete groups** with **2 left over**!"

---

## ⚡ Operator #7: Exponent (**)

Raises a number to a power.

```python
print(2 ** 3)      # 8 (2×2×2)
print(5 ** 2)      # 25 (5×5)
print(10 ** 3)     # 1000
print(2 ** 10)     # 1024 (kilobyte!)
```

**This is how computers handle HUGE numbers!**

Powers of 2 are everywhere in computing.

---

## 📊 All 7 Operators

| Symbol | Name | Example | Result |
|--------|------|---------|--------|
| `+` | Addition | `5 + 3` | 8 |
| `-` | Subtraction | `10 - 4` | 6 |
| `*` | Multiplication | `6 * 7` | 42 |
| `/` | Division | `15 / 4` | 3.75 |
| `//` | Floor Division | `15 // 4` | 3 |
| `%` | Modulo | `15 % 4` | 3 |
| `**` | Exponent | `2 ** 5` | 32 |

---

## 🔢 Order of Operations (PEMDAS)

```python
print(2 + 3 * 4)       # 14 (not 20!)
# 3*4=12 first, then +2

print((2 + 3) * 4)     # 20
# Parentheses first: 2+3=5, then *4
```

**Parentheses = Your control over math order!**

---

## 💬 Emily's Warning:

> "Order matters! This is the #1 cause of math bugs:"

```python
print(100 - 20 * 2)    # 60
print((100 - 20) * 2)  # 160
```

> "Always use parentheses when you're unsure. It makes your code clearer!"

---

## 🎨 ASCII Art with Math

Combine print() and math for visual art!

```python
print("=" * 30)
print("   CYBER ACADEMY")
print("=" * 30)
print("Level:", 5 + 3)
print("Points:", 100 * 10)
print("=" * 30)
```

**Creativity + Code = Awesome!**

---

## 🏆 Final Challenge: Build a Calculator

Create a program showing ALL 7 operations:

```python
print("=" * 40)
print("    PYTHON CALCULATOR")
print("=" * 40)
print("25 + 7 =", 25 + 7)
print("25 - 7 =", 25 - 7)
print("25 * 7 =", 25 * 7)
print("25 / 7 =", 25 / 7)
print("25 // 7 =", 25 // 7)
print("25 % 7 =", 25 % 7)
print("25 ** 2 =", 25 ** 2)
print("=" * 40)
```

---

## 🐞 Common Errors

**Error #1:** Syntax Error
```python
print(5 +)        # Missing number!
```

**Error #2:** Dividing by Zero
```python
print(10 / 0)     # CRASH!
```

**Error #3:** Forgetting Quotes
```python
print(Hello)      # Python looks for variable
```

**Errors are normal! Read the messages - they help you.**

---

## 💬 Cole's Final Words:

> "Professional developers see 100+ errors per day. We just know how to fix them fast."

> "Every expert was once a beginner. You took the first step today. Keep coding!"

![bg right](https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=800)

---

## ✅ Lesson Complete!

### You Mastered:
- ✅ Using `print()` to display output
- ✅ Sequential code execution
- ✅ **All 7 math operators**
- ✅ Order of operations (PEMDAS)
- ✅ ASCII art with code

### Next Mission: L02 - Variables
**Learn to STORE data, not just display it!**

---

## 🚀 Your Assignment

Create **3 calculator programs** with:
1. Different numbers
2. Creative borders
3. Your own style

**Practice makes perfect!**

See you next lesson, Agent. 🌆

![bg](https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1920)
