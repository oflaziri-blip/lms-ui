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

# ◆ L05: Conditional Statements
## The Diamond Flowchart

**Neon City Cyber Academy**
*Module 2: Control Structures*

![bg right:40%](https://images.unsplash.com/photo-1509228468518-180dd4864904?w=800)

---

## 👥 Your Team

**Emily Chen** - *Handler*
> "Until now, your code ran line by line. Today you learn to make DECISIONS - the heart of all intelligent programs."

**Cole Martinez** - *Tech Lead*
> "Think of conditionals as diamond-shaped forks in the road. The program asks a question, then chooses a path."

---

## 🔄 Code So Far: Sequential

Every program we've written runs **top to bottom**:

```python
print("Step 1")
print("Step 2")
print("Step 3")
```

**Problem:** No decisions! No branching! Every user gets the same experience.

**Solution:** Conditional statements! 💎

---

## ◆ The Diamond Flowchart

```
        START
          │
          ▼
      ┌───────┐
      │ Ask:  │
      │ Age?  │
      └───┬───┘
          │
    ┌─────┴─────┐
    │  Age≥18?  │  ← DECISION (Diamond)
    └─────┬─────┘
      ┌───┴───┐
   YES│       │NO
      ▼       ▼
   [Adult] [Minor]
      │       │
      └───┬───┘
          ▼
         END
```

---

## 🎯 The if Statement

```python
age = 20

if age >= 18:
    print("You are an adult")
    print("Access granted")
```

### Syntax:
- `if` keyword
- **condition** (True or False)
- colon `:`
- **indented block** (runs if True)

---

## 💬 Emily's Guide to if:

> "The `if` statement asks a YES/NO question:"

```python
if temperature > 30:
    print("It's hot!")
```

> "If the answer is YES (True), run the indented code."
> "If the answer is NO (False), skip it entirely."

**The condition MUST evaluate to Boolean: `True` or `False`**

---

## ⚖️ Comparison Operators

Used in conditions:

| Operator | Meaning | Example | Result |
|----------|---------|---------|--------|
| `==` | Equal to | `5 == 5` | True |
| `!=` | Not equal | `5 != 3` | True |
| `>` | Greater than | `7 > 4` | True |
| `<` | Less than | `3 < 8` | True |
| `>=` | Greater or equal | `5 >= 5` | True |
| `<=` | Less or equal | `4 <= 3` | False |

---

## ⚠️ Common Mistake: = vs ==

```python
# ❌ WRONG (assignment)
if age = 18:
    print("Adult")

# ✅ CORRECT (comparison)
if age == 18:
    print("Exactly 18!")
```

**`=` assigns**, **`==` compares**!

---

## 🔀 The else Statement

Run code when condition is **False**:

```python
age = 15

if age >= 18:
    print("Adult - access granted")
else:
    print("Minor - access denied")
```

**One or the other** will run, never both!

---

## 💬 Cole's Flowchart:

```
      ┌─────────┐
      │ age≥18? │
      └────┬────┘
       ┌───┴───┐
    YES│       │NO
       ▼       ▼
   [Print   [Print
    Adult]   Minor]
```

> "The diamond has TWO exits: YES path and NO path."
> "The program MUST take one path - it can't take both!"

---

## 🎭 The elif Statement

Multiple conditions:

```python
score = 75

if score >= 90:
    print("Grade: A")
elif score >= 80:
    print("Grade: B")
elif score >= 70:
    print("Grade: C")
else:
    print("Grade: F")
```

**Checks top to bottom**, stops at first True!

---

## ◆ Multi-Diamond Flowchart

```
    ┌──────────┐
    │ score≥90?│
    └────┬─────┘
      NO│   │YES → [A]
    ┌───┴──────┐
    │ score≥80?│
    └────┬─────┘
      NO│   │YES → [B]
    ┌───┴──────┐
    │ score≥70?│
    └────┬─────┘
      NO│   │YES → [C]
        ▼
       [F]
```

---

## 💬 Emily's elif Logic:

> "`elif` means 'else if' - it's a secondary check."

```python
if temperature > 30:
    print("Hot")
elif temperature > 20:
    print("Warm")
elif temperature > 10:
    print("Cool")
else:
    print("Cold")
```

> "Python checks each condition in ORDER. Once it finds True, it STOPS - the rest are skipped!"

---

## 🔍 Indentation Matters!

```python
# ✅ CORRECT
if age >= 18:
    print("Line 1 - inside if")
    print("Line 2 - inside if")
print("Line 3 - outside if")

# ❌ WRONG (IndentationError)
if age >= 18:
print("This will crash")
```

**Indentation = block membership**
Use 4 spaces (or 1 tab)

---

## 🎯 Boolean Values

Conditions create Booleans:

```python
is_adult = age >= 18    # True or False

if is_adult:
    print("Adult")
else:
    print("Minor")
```

**You can store the result** and use it later!

---

## 🔗 Logical Operators: and

Combine conditions (both must be True):

```python
age = 25
has_license = True

if age >= 18 and has_license:
    print("You can drive")
else:
    print("You cannot drive")
```

**Truth table:**
- `True and True` → True
- `True and False` → False
- `False and True` → False
- `False and False` → False

---

## 🔗 Logical Operators: or

At least ONE must be True:

```python
day = "Saturday"

if day == "Saturday" or day == "Sunday":
    print("It's the weekend!")
else:
    print("It's a weekday")
```

**Truth table:**
- `True or True` → True
- `True or False` → True
- `False or True` → True
- `False or False` → False

---

## 🔗 Logical Operators: not

Reverse the condition:

```python
logged_in = False

if not logged_in:
    print("Please log in")
else:
    print("Welcome back!")
```

**Truth table:**
- `not True` → False
- `not False` → True

---

## 💬 Cole's Compound Conditions:

```python
score = 85
attendance = 95

if score >= 80 and attendance >= 90:
    print("Excellent student!")
elif score >= 70 or attendance >= 90:
    print("Good student!")
else:
    print("Needs improvement")
```

> "You can combine AND, OR, NOT in complex ways. Use parentheses for clarity!"

---

## 🎮 Example: Access Control

```python
username = input("Username: ")
password = input("Password: ")

if username == "admin" and password == "1234":
    print("✅ Access granted")
    print("Welcome, admin!")
else:
    print("❌ Access denied")
    print("Invalid credentials")
```

---

## 🔢 Example: Number Classifier

```python
num = int(input("Number: "))

if num > 0:
    print("Positive")
elif num < 0:
    print("Negative")
else:
    print("Zero")
```

**Three-way decision** with `elif`!

---

## 🌡️ Example: Temperature Advisory

```python
temp = int(input("Temperature (°C): "))

if temp >= 35:
    print("Extreme heat warning!")
elif temp >= 25:
    print("Pleasant weather")
elif temp >= 10:
    print("Cool - wear a jacket")
else:
    print("Cold - bundle up!")
```

---

## 🎯 Challenge: Grade Calculator

```python
score = int(input("Score (0-100): "))

if score >= 90:
    grade = "A"
elif score >= 80:
    grade = "B"
elif score >= 70:
    grade = "C"
elif score >= 60:
    grade = "D"
else:
    grade = "F"

print(f"Your grade: {grade}")
```

---

## 🔐 Challenge: Password Strength

```python
password = input("Enter password: ")
length = len(password)

if length >= 12 and any(c.isdigit() for c in password):
    print("Strong password ✅")
elif length >= 8:
    print("Moderate password ⚠️")
else:
    print("Weak password ❌")
```

---

## 🐞 Common Errors

**Error #1: Missing colon**
```python
if age >= 18      # ❌ SyntaxError
    print("Adult")
```

**Error #2: Wrong indentation**
```python
if age >= 18:
print("Adult")    # ❌ IndentationError
```

**Error #3: Using = instead of ==**
```python
if age = 18:      # ❌ SyntaxError
    print("18")
```

---

## ✅ Lesson Complete!

### You Mastered:
- ✅ if/elif/else statements
- ✅ Diamond flowchart visualization
- ✅ Comparison operators (==, !=, >, <, >=, <=)
- ✅ Logical operators (and, or, not)
- ✅ Boolean values (True/False)
- ✅ Proper indentation
- ✅ Multi-way decisions

---

## 🏆 Your Assignment

Create a **Vending Machine Program**:

1. Show menu with prices
2. Get user's selection (1-4)
3. Get amount paid
4. Use if/elif/else to:
   - Check if selection is valid
   - Check if payment is enough
   - Calculate change
   - Dispense item

**Combine everything you've learned!**

---

## 🌆 Next Mission!

**L06: Nested Conditionals**

**Security Clearance Levels** - if statements INSIDE if statements!

![bg](https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1920)
