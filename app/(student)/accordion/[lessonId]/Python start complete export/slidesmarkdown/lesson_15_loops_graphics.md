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

# 🔁 L15: Loops in Graphics
## Pattern Recognition & Efficiency

**Neon City Cyber Academy**
*Module 4: Visual Algorithms*

![bg right:40%](https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800)

---

## 👥 Your Team

**Emily Chen** - *Handler*
> "Programmers are lazy - in a good way. Never write the same code twice when you can loop it."

**Cole Martinez** - *Tech Lead*
> "A square is 4 lines. A hexagon is 6 lines. Writing each one manually? Amateur hour. Loop it."

---

## 🎯 The Problem: Repetitive Code

**Bad Code (Beginner):**
```python
# Draw square manually
print("Move 100")
print("Turn 90")
print("Move 100")
print("Turn 90")
print("Move 100")
print("Turn 90")
print("Move 100")
print("Turn 90")
```

**Lines of code:** 8
**Maintainability:** Terrible
**Efficiency:** 0/10

---

## ✅ The Solution: Loops

**Good Code (Professional):**
```python
# Draw square with loop
for i in range(4):
    print("Move 100")
    print("Turn 90")
```

**Lines of code:** 3
**Maintainability:** Excellent
**Efficiency:** 10/10

**THIS is why loops exist!**

---

## 🔲 Square Pattern (Visual)

<svg width="400" height="400" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="400" fill="#0f172a"/>
  <rect x="100" y="100" width="200" height="200"
 fill="none" stroke="#00ff41" stroke-width="4"/>
  
  <!-- Corner markers -->
  <circle cx="100" cy="100" r="6" fill="#f472b6"/>
  <text x="75" y="95" fill="#f472b6" font-size="14">1</text>
  
  <circle cx="300" cy="100" r="6" fill="#f472b6"/>
  <text x="310" y="95" fill="#f472b6" font-size="14">2</text>
  
  <circle cx="300" cy="300" r="6" fill="#f472b6"/>
  <text x="310" y="310" fill="#f472b6" font-size="14">3</text>
  
  <circle cx="100" cy="300" r="6" fill="#f472b6"/>
  <text x="75" y="310" fill="#f472b6" font-size="14">4</text>
  
  <text x="150" y="380" fill="#00d9ff" font-size="18">4 sides = range(4)</text>
</svg>

---

## 💬 Emily's Loop Logic:

> "Ask yourself: What repeats?"

**Square:** 4 identical sides
**Hexagon:** 6 identical sides
**Circle (approximation):** 360 tiny segments

> "The pattern: `for i in range(N)` where N = number of repetitions"

---

## 🔷 Hexagon Pattern

<svg width="450" height="400" viewBox="0 0 450 400" xmlns="http://www.w3.org/2000/svg">
  <rect width="450" height="400" fill="#0f172a"/>
  
  <!-- Hexagon -->
  <polygon points="225,50 325,125 325,250 225,325 125,250 125,125"
 fill="none" stroke="#00d9ff" stroke-width="4"/>
  
  <!-- Center point -->
  <circle cx="225" cy="187" r="5" fill="#00ff41"/>
  
  <text x="150" y="370" fill="#00d9ff" font-size="18">6 sides = range(6)</text>
  <text x="130" y="390" fill="#999" font-size="14">Each turn: 360/6 = 60°</text>
</svg>

```python
for i in range(6):
    print("Move 100")
    print("Turn 60")  # 360/6 = 60 degrees
```

---

## 🔢 Calculating Total Distance

```python
# Square perimeter
side_length = 100
num_sides = 4

total_distance = side_length * num_sides
print(f"Total distance: {total_distance}")  # 400
```

**This is text output - perfect for Judge0!**

---

## 💬 Cole's Efficiency Rule:

> "If you're copy-pasting code, you're doing it wrong."

```python
# ❌ BAD: Hard to modify
print("Forward 50")
print("Forward 50")
print("Forward 50")

# ✅ GOOD: Change once, affects all
for i in range(3):
    print("Forward 50")
```

> "Want to change 50 to 100? One edit vs three edits."

---

## 🎨 Pattern: Triangle

<svg width="400" height="400" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="400" fill="#0f172a"/>
  
  <!-- Triangle -->
  <polygon points="200,80 320,300 80,300"
 fill="none" stroke="#fbbf24" stroke-width="4"/>
  
  <text x="120" y="360" fill="#fbbf24" font-size="18">3 sides = range(3)</text>
  <text x="120" y="380" fill="#999" font-size="14">Each turn: 360/3 = 120°</text>
</svg>

```python
for i in range(3):
    print("Move 100")
    print("Turn 120")  # 360/3 = 120 degrees
```

---

## 🔄 The General Formula

**For ANY regular polygon:**

```python
num_sides = 8  # Octagon
turn_angle = 360 / num_sides  # 45 degrees

for i in range(num_sides):
    print(f"Move 100")
    print(f"Turn {turn_angle}")
```

**Works for triangle (3), square (4), pentagon (5), hexagon (6)...**

---

## 📊 Distance Tracking Example

```python
side_length = 50
num_sides = 6  # Hexagon

# Calculate total distance BEFORE drawing
total = 0
for i in range(num_sides):
    total += side_length

print(f"Drone will travel {total} units")
# Output: Drone will travel 300 units
```

---

## 💬 Emily's Real-World Example:

> "Game development uses this constantly:"

```python
# Spawn 10 enemies in a circle
num_enemies = 10
for i in range(num_enemies):
    angle = (360 / num_enemies) * i
    print(f"Spawn enemy at angle {angle}")
```

**Output:**
```
Spawn enemy at angle 0.0
Spawn enemy at angle 36.0
Spawn enemy at angle 72.0
...
```

---

## 🎯 Nested Loops: Grid Pattern

```python
# Create 3x3 grid
for row in range(3):
    for col in range(3):
        x = col * 100
        y = row * 100
        print(f"Place marker at ({x}, {y})")
```

<svg width="350" height="350" viewBox="0 0 350 350" xmlns="http://www.w3.org/2000/svg">
  <rect width="350" height="350" fill="#0f172a"/>
  <circle cx="50" cy="50" r="8" fill="#00ff41"/>
  <circle cx="150" cy="50" r="8" fill="#00ff41"/>
  <circle cx="250" cy="50" r="8" fill="#00ff41"/>
  <circle cx="50" cy="150" r="8" fill="#00ff41"/>
  <circle cx="150" cy="150" r="8" fill="#00ff41"/>
  <circle cx="250" cy="150" r="8" fill="#00ff41"/>
  <circle cx="50" cy="250" r="8" fill="#00ff41"/>
  <circle cx="150" cy="250" r="8" fill="#00ff41"/>
  <circle cx="250" cy="250" r="8" fill="#00ff41"/>
</svg>

---

## 🔢 Challenge: Star Pattern

```python
# 5-pointed star
num_points = 5
for i in range(num_points):
    print("Move 100")
    print("Turn 144")  # 720/5 = 144 degrees
    
print("Star complete!")
```

**Why 144?** Stars use 720° instead of 360°!

---

## ✅ Lesson Complete!

### You Mastered:
- ✅ Loops for repetitive patterns
- ✅ `range(N)` for N repetitions
- ✅ Distance calculation with loops
- ✅ Turn angles: 360/sides
- ✅ Nested loops for grids
- ✅ Code efficiency principles

### Next: L16 - Conditional Drawing
**Boundary checking and collision detection**

---

## 🏆 Your Assignment

Create a **Pattern Generator**:

1. Write a function `polygon(sides)` that prints commands for ANY polygon
2. Calculate turn angle: `360 / sides`
3. Use a loop to print move/turn commands
4. Test with triangle (3), square (4), hexagon (6)

![bg](https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1920)
