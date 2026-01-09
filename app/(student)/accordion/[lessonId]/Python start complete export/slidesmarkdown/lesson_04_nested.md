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

# 📦 L04: Nested Constructions  
## Boxes Inside Boxes

**Neon City Cyber Academy**
*Module 1: Python Basics*

![bg right:40%](https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800)

---

## 👥 Your Team

**Emily Chen** - *Handler*
> "Today we combine operations. Think of it like Russian nesting dolls - one function inside another."

**Cole Martinez** - *Tech Lead*
> "`int(input())` is the most powerful pattern you'll learn this week. Master this, master data flow."

---

## 🔄 Review: input()

Get text from the user:

```python
name = input("What's your name? ")
print(f"Hello, {name}!")
```

**Problem:** `input()` ALWAYS returns a **string**, even for numbers!

```python
age = input("Age: ")
# If user types "14", age = "14" (text!)
```

---

## 🔢 Review: int() and Type Conversion

Convert strings to numbers:

```python
text_num = "42"
real_num = int(text_num)

print(text_num + text_num)    # 4242 (string concat)
print(real_num + real_num)    # 84 (math)
```

### Type conversion functions:
- `int()` → integer (whole number)
- `float()` → decimal number
- `str()` → string (text)

---

## 💡 The Problem

```python
# Get user's age
age_text = input("Enter age: ")

# Convert to number
age_number = int(age_text)

# Use in calculation
next_year = age_number + 1
print(f"Next year you'll be {next_year}")
```

**That's 3 lines for one simple task!**

Can we do better? YES! 🎯

---

## 🎁 Nested Functions: The Solution

**Combine** `int()` and `input()` in ONE line:

```python
age = int(input("Enter age: "))
next_year = age + 1
print(f"Next year you'll be {next_year}")
```

**One variable, one line!**

---

## 💬 Emily's Nesting Explanation:

> "Think of functions as boxes:"

```
┌─────────────────────┐
│  int(  ________  )  │ ← Outer box
│       │ input() │   │ ← Inner box
│       └─────────┘   │
└─────────────────────┘
```

> "Python executes from INSIDE OUT:"
> 1. `input()` runs first → gets text
> 2. `int()` runs second → converts to number
> 3. Result stored in variable

---

## 🔄 Execution Order

```python
score = int(input("Score: "))
```

### Step-by-step:
1. User types: `95`
2. `input()` returns: `"95"` (string)
3. `int("95")` converts to: `95` (number)
4. `score` gets: `95`

**Reading code:** Inside → Outside
**Execution:** Inside → Outside

---

## 💬 Cole's Rule:

> "The INNERMOST function always executes FIRST."

```python
result = int(input("Number: "))

Order of execution:
  1st: input("Number: ")      ← Innermost
  2nd: int( ... )             ← Outer
  3rd: result = ...           ← Assignment
```

> "Like peeling an onion - start from the center!"

---

## 🧮 Nested Math Operations

```python
x = 5
y = 3

# Multiple operations in one line
result = ((x + y) * 2) - 1

Step by step:
  (5 + 3) = 8
  8 * 2 = 16
  16 - 1 = 15
```

**Parentheses control order** - innermost first!

---

## 🎯 Practice: User Calculator

```python
num1 = int(input("First number: "))
num2 = int(input("Second number: "))

sum_result = num1 + num2
product = num1 * num2

print(f"{num1} + {num2} = {sum_result}")
print(f"{num1} × {num2} = {product}")
```

**Two nested constructions:** `int(input())` used twice!

---

## 🔢 Float Input

For decimal numbers:

```python
price = float(input("Price: $"))
quantity = int(input("Quantity: "))

total = price * quantity
print(f"Total: ${total}")
```

**User enters:** `19.99` and `3`
**Output:** `Total: $59.97`

---

## 🎨 Complex Nesting

You can nest MULTIPLE levels:

```python
# Get number, double it, convert to string
text = str(int(input("Number: ")) * 2)

Execution order:
  1. input("Number: ") → "5"
  2. int("5") → 5
  3. 5 * 2 → 10
  4. str(10) → "10"
  5. text = "10"
```

**Rarely needed, but possible!**

---

## 💬 Emily Warns:

> "Don't nest TOO much - code should be readable!"

```python
# ❌ TOO COMPLEX (hard to read)
x = int(str(float(input("???"))))

# ✅ BETTER (clear steps)
user_input = input("Enter number: ")
as_float = float(user_input)
as_int = int(as_float)
```

> "If you need more than 2 levels, use multiple lines."

---

## 🐞 Common Errors

**Error #1: User enters text instead of number**
```python
age = int(input("Age: "))
# User types: "hello"
# ValueError: invalid literal for int()
```

**Fix:** Validate input (we'll learn this with conditionals!)

---

## 🐞 Error #2: Forgetting Conversion

```python
num = input("Number: ")  # Gets "5" as string
doubled = num * 2
print(doubled)           # Output: 55 (not 10!)
```

**Remember:** `input()` returns strings!
Always convert with `int()` or `float()` for math.

---

## 🎯 Challenge: Temperature Converter

```python
celsius = float(input("Celsius: "))
fahrenheit = (celsius * 9/5) + 32

print(f"{celsius}°C = {fahrenheit}°F")
```

**Test it:**
- Input: `0` → Output: `32°F`
- Input: `100` → Output: `212°F`

---

## 🏗️ Project: BMI Calculator

```python
print("=== BMI Calculator ===")

weight = float(input("Weight (kg): "))
height = float(input("Height (m): "))

bmi = weight / (height ** 2)

print(f"Your BMI: {bmi:.1f}")
```

**Real-world nesting:** `float(input())` + math operations!

---

## 🔄 String Nesting

Combine string methods:

```python
name = input("Name: ").strip().upper()

Execution:
  1. input("Name: ") → "  alex  "
  2. .strip() → "alex"
  3. .upper() → "ALEX"
```

**Method chaining = nested operations!**

---

## 💬 Cole's Advanced Pattern:

```python
# Format user input immediately
username = input("Username: ").lower().strip()

# Get and validate number in one line
count = abs(int(input("Count: ")))
# abs() makes it positive

# Multiple conversions
data = str(round(float(input("Price: ")), 2))
# Get decimal, round to 2 places, convert to string
```

---

## 🎲 Random Nested Example

```python
import random

# Generate random number and convert to string
secret = str(random.randint(1, 100))

# Get guess and convert to int
guess = int(input("Guess (1-100): "))

# Compare
if guess == int(secret):
    print("Correct!")
```

**Nested randomness + user input!**

---

## 📊 Multiple Inputs in One Line

```python
# Get two numbers at once
x, y = int(input("X: ")), int(input("Y: "))

# This is actually:
# x = int(input("X: "))
# y = int(input("Y: "))
```

**Advanced shortcut** - use sparingly!

---

## ✅ Lesson Complete!

### You Mastered:
- ✅ `int(input())` pattern (boxes inside boxes)
- ✅ Execution order (inside → outside)
- ✅ `float(input())` for decimals
- ✅ Method chaining (string nesting)
- ✅ Multi-level nesting (when appropriate)
- ✅ Common input errors to avoid

---

## 🏆 Your Assignment

Create an **Order Calculator**:

1. Get item name (string, with `.strip()`)
2. Get price (float)
3. Get quantity (int)
4. Calculate total: `price * quantity`
5. Calculate tax: `total * 0.15`
6. Calculate final: `total + tax`
7. Display formatted receipt

**Use nested constructions where appropriate!**

---

## 🌆 Next Mission!

**L05: Conditionals - The Diamond Flowchart**

Learn to make decisions: `if`, `elif`, `else` - branching logic!

![bg](https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1920)
