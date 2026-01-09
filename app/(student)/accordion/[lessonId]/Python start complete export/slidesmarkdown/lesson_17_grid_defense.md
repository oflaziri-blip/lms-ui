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

# 🌆 L17: PROJECT - Grid Defense
## Procedural Generation & Urban Environment

**Neon City Cyber Academy**
*Module 4: Visual Algorithms*

![bg right:40%](https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800)

---

## 👥 Your Team

**Emily Chen** - *Handler*
> "Your final test: Build a laser grid defense system. Procedurally generated. Scalable. Pro-level code."

**Cole Martinez** - *Tech Lead*
> "Procedural generation means: Write a function ONCE, use it FOREVER. This is how cities are built in games."

---

## 🎯 Project Brief: Grid Defense

**Mission:** Protect the Neon City server with a laser grid

**Requirements:**
1. Generate grid of laser towers
2. Calculate optimal spacing
3. Verify complete coverage
4. Output defense coordinates

**Constraints:** Text output only (Judge0 compatible)

---

## 🏗️ Procedural Generation Concept

**Manual approach (BAD):**
```python
print("Tower at (0, 0)")
print("Tower at (100, 0)")
print("Tower at (200, 0)")
# ... 97 more times
```

**Procedural approach (GOOD):**
```python
for x in range(0, 1000, 100):
    print(f"Tower at ({x}, 0)")
```

**THIS is procedural generation!**

---

## 🌆 The Laser Grid

<svg width="550" height="450" viewBox="0 0 550 450" xmlns="http://www.w3.org/2000/svg">
  <rect width="550" height="450" fill="#0f172a"/>
  
  <!-- Grid lines (horizontal) -->
  <line x1="50" y1="50" x2="500" y2="50" stroke="#00ff4144" stroke-width="2"/>
  <line x1="50" y1="150" x2="500" y2="150" stroke="#00ff4144" stroke-width="2"/>
  <line x1="50" y1="250" x2="500" y2="250" stroke="#00ff4144" stroke-width="2"/>
  <line x1="50" y1="350" x2="500" y2="350" stroke="#00ff4144" stroke-width="2"/>
  
  <!-- Grid lines (vertical) -->
  <line x1="50" y1="50" x2="50" y2="350" stroke="#00ff4144" stroke-width="2"/>
  <line x1="150" y1="50" x2="150" y2="350" stroke="#00ff4144" stroke-width="2"/>
  <line x1="250" y1="50" x2="250" y2="350" stroke="#00ff4144" stroke-width="2"/>
  <line x1="350" y1="50" x2="350" y2="350" stroke="#00ff4144" stroke-width="2"/>
  <line x1="450" y1="50" x2="450" y2="350" stroke="#00ff4144" stroke-width="2"/>
  <line x1="500" y1="50" x2="500" y2="350" stroke="#00ff4144" stroke-width="2"/>
  
  <!-- Towers -->
  <circle cx="50" cy="50" r="8" fill="#00ff41"/>
  <circle cx="150" cy="50" r="8" fill="#00ff41"/>
  <circle cx="250" cy="50" r="8" fill="#00ff41"/>
  <circle cx="350" cy="50" r="8" fill="#00ff41"/>
  <circle cx="450" cy="50" r="8" fill="#00ff41"/>
  <circle cx="500" cy="50" r="8" fill="#00ff41"/>
  
  <text x="180" y="420" fill="#00d9ff" font-size="16">6x4 grid = 24 towers</text>
</svg>

---

## 💬 Emily's Grid Formula:

> "Two nested loops = 2D grid"

```python
# Generate 3x3 grid
spacing = 100

for row in range(3):
    for col in range(3):
        x = col * spacing
        y = row * spacing
        print(f"Tower at ({x}, {y})")
```

**Output:** 9 tower positions!

---

## 🔢 Grid Generation Code

```python
def generate_grid(width, height, spacing):
    """Generate defense grid coordinates"""
    towers = []
    
    rows = height // spacing + 1
    cols = width // spacing + 1
    
    for row in range(rows):
        for col in range(cols):
            x = col * spacing
            y = row * spacing
            towers.append((x, y))
    
    return towers
```

---

## 🎯 Using the Function

```python
# Generate grid for 300x200 area, 100-unit spacing
grid = generate_grid(300, 200, 100)

print(f"Total towers: {len(grid)}")
for i, (x, y) in enumerate(grid, 1):
    print(f"Tower {i}: ({x}, {y})")
```

**Output:**
```
Total towers: 12
Tower 1: (0, 0)
Tower 2: (100, 0)
Tower 3: (200, 0)
...
```

---

## 💬 Cole's Optimization Tip:

> "Calculate BEFORE generating:"

```python
width, height = 500, 400
spacing = 50

# Calculate grid dimensions
cols = (width // spacing) + 1   # 11 columns
rows = (height // spacing) + 1  # 9 rows
total = cols * rows              # 99 towers

print(f"Grid will need {total} towers")
```

> "Always estimate resources BEFORE building!"

---

## 🏢 City Skyline Generator

<svg width="600" height="300" viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
  <rect width="600" height="300" fill="#0f172a"/>
  
  <!-- Buildings -->
  <rect x="50" y="150" width="80" height="150" fill="#00d9ff33" stroke="#00d9ff" stroke-width="2"/>
  <rect x="150" y="100" width="70" height="200" fill="#00d9ff33" stroke="#00d9ff" stroke-width="2"/>
  <rect x="240" y="120" width="90" height="180" fill="#00d9ff33" stroke="#00d9ff" stroke-width="2"/>
  <rect x="350" y="80" width="75" height="220" fill="#00d9ff33" stroke="#00d9ff" stroke-width="2"/>
  <rect x="445" y="140" width="85" height="160" fill="#00d9ff33" stroke="#00d9ff" stroke-width="2"/>
  
  <!-- Windows -->
  <rect x="60" y="160" width="10" height="10" fill="#fbbf24"/>
  <rect x="80" y="160" width="10" height="10" fill="#fbbf24"/>
  <rect x="60" y="180" width="10" height="10" fill="#fbbf24"/>
  
  <text x="180" y="290" fill="#00ff41" font-size="14">Procedurally Generated</text>
</svg>

---

## 🎨 Skyline Code

```python
import random

def generate_skyline(num_buildings):
    """Generate city skyline coordinates"""
    x = 0
    for i in range(num_buildings):
        width = random.randint(50, 100)
        height = random.randint(100, 250)
        print(f"Building {i+1}: x={x}, w={width}, h={height}")
        x += width + 20  # 20-unit gap
        
generate_skyline(5)
```

---

## 🔐 Defense Tower Function

```python
def draw_defense_tower(height):
    """Print ASCII art of defense tower"""
    # Top
    print("  /\\")
    
    # Body (based on height)
    for i in range(height):
        print(" |  |")
    
    # Base
    print("|____|")

# Test
draw_defense_tower(3)
```

**Output:**
```
  /\
 |  |
 |  |
 |  |
|____|
```

---

## 💬 Emily's Design Pattern:

> "Procedural generation follows a template:"

1. **Define parameters** (width, height, spacing)
2. **Calculate dimensions** (rows, cols, total)
3. **Loop through grid** (nested for loops)
4. **Generate each element** (position, size, etc.)
5. **Store or print result**

> "This pattern generates EVERYTHING: Cities, dungeons, forests, space!"

---

## 🎯 Coverage Verification

```python
def verify_coverage(grid, target_width, target_height, laser_range):
    """Check if grid covers entire area"""
    # For each tower, check if it reaches boundaries
    max_x = max(x for x, y in grid)
    max_y = max(y for x, y in grid)
    
    covered_x = max_x + laser_range >= target_width
    covered_y = max_y + laser_range >= target_height
    
    return covered_x and covered_y

# Test
grid = [(0,0), (100,0), (200,0)]
print(verify_coverage(grid, 250, 100, 50))  # True
```

---

## 🏆 Final Project Challenge

**Build a complete Grid Defense System:**

1. Function: `generate_defense_grid(width, height, spacing)`
2. Calculate total towers needed
3. Generate all tower coordinates
4. Print formatted output
5. Verify 100% coverage

**Bonus:** Add tower IDs (ALPHA-001, ALPHA-002...)

---

## ✅ Module Complete!

### You Mastered (L14-L17):
- ✅ Cartesian coordinates & navigation
- ✅ Distance calculations (Pythagorean)
- ✅ Pattern efficiency with loops
- ✅ Boundary detection & collision
- ✅ Procedural generation algorithms
- ✅ Function-based design

### Real-World Skills Gained:
🎮 Game development basics
🤖 Robotics navigation
📊 Data visualization
🏗️ Procedural world generation

---

## 🌆 Congratulations, Agent!

You've completed the **Drone Pathfinding Module**!

**Next:** Module 5 - Object-Oriented Programming
**Learn:** Classes, objects, methods, and advanced Python

![bg](https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1920)
