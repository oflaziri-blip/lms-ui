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

# 🚁 L14: Drone Pathfinding
## Linear Algorithms & Navigation

**Neon City Cyber Academy**
*Module 4: Visual Algorithms*

![bg right:40%](https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800)

---

## 👥 Your Team

**Emily Chen** - *Handler*
> "Forget drawing turtles. Today you're programming autonomous drones to navigate the city grid."

**Cole Martinez** - *Tech Lead*
> "Every screen is a coordinate system. Master X and Y, and you control any pixel, any drone, any game object."

---

## 🎯 Module Overview: Drone Pathfinding

**What we're NOT doing:** Drawing cute turtle shapes

**What we ARE doing:** Programming navigation algorithms

### Real-World Applications:
- 🚁 Autonomous drone delivery
- 🎮 Video game character movement
- 🤖 Robot pathfinding
- 📊 Data visualization plotting

**The screen is a battlefield. You control it with coordinates.**

---

## 📐 The Cartesian Coordinate System

<svg width="600" height="400" viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
  <!-- Grid -->
  <defs>
    <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
      <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#00ff4122" stroke-width="1"/>
    </pattern>
  </defs>
  <rect width="600" height="400" fill="url(#grid)" />
  
  <!-- Axes -->
  <line x1="300" y1="0" x2="300" y2="400" stroke="#00d9ff" stroke-width="3"/>
  <line x1="0" y1="200" x2="600" y2="200" stroke="#00d9ff" stroke-width="3"/>
  
  <!-- Labels -->
  <text x="580" y="195" fill="#00d9ff" font-size="20">+X</text>
  <text x="305" y="25" fill="#00d9ff" font-size="20">+Y</text>
  <text x="305" y="380" fill="#00d9ff" font-size="20">-Y</text>
  <text x="25" y="195" fill="#00d9ff" font-size="20">-X</text>
  
  <!-- Origin -->
  <circle cx="300" cy="200" r="8" fill="#f472b6"/>
  <text x="310" y="220" fill="#f472b6" font-size="18">(0, 0)</text>
</svg>

**Origin (0, 0):** The center of your universe

---

## 🎯 Understanding Coordinates

Every point on screen has an address: **(X, Y)**

```python
# Drone position
x = 5   # 5 units RIGHT from origin
y = 3   # 3 units UP from origin
```

<svg width="500" height="300" viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg">
  <rect width="500" height="300" fill="#0f172a" stroke="#00ff41" stroke-width="2"/>
  <line x1="250" y1="0" x2="250" y2="300" stroke="#00d9ff44" stroke-width="1"/>
  <line x1="0" y1="150" x2="500" y2="150" stroke="#00d9ff44" stroke-width="1"/>
  
  <!-- Drone at (5, 3) scaled to (350, 90) -->
  <polygon points="350,80 360,100 340,100" fill="#00ff41"/>
  <circle cx="350" cy="90" r="5" fill="#00ff41"/>
  <text x="365" y="95" fill="#00ff41" font-size="16">(5, 3)</text>
</svg>

---

## 💬 Emily's Coordinate Rules:

> "Think of coordinates like a treasure map:"

- **X (horizontal):** Positive = Right, Negative = Left
- **Y (vertical):** Positive = Up, Negative = Down

> "Moving RIGHT increases X. Moving UP increases Y."

```python
position = (10, 20)
# X = 10 (10 units right of origin)
# Y = 20 (20 units above origin)
```

---

## 🚁 Drone Commands: Linear Movement

```python
# Start at origin
x = 0
y = 0

# Move RIGHT 10 units
x = x + 10    # Now at (10, 0)

# Move UP 5 units
y = y + 5     # Now at (10, 5)

# Move LEFT 3 units
x = x - 3     # Now at (7, 5)

print(f"Drone position: ({x}, {y})")
```

**Output:** `Drone position: (7, 5)`

---

## 📊 Visualizing Movement

<svg width="600" height="400" viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
  <rect width="600" height="400" fill="#0f172a"/>
  
  <!-- Path -->
  <path d="M 100 200 L 300 200 L 300 100 L 200 100" 
        stroke="#00ff41" stroke-width="4" fill="none" 
        stroke-dasharray="10,5"/>
  
  <!-- Points -->
  <circle cx="100" cy="200" r="6" fill="#f472b6"/>
  <text x="105" y="220" fill="#f472b6" font-size="14">(0, 0) START</text>
  
  <circle cx="300" cy="200" r="6" fill="#00d9ff"/>
  <text x="305" y="220" fill="#00d9ff" font-size="14">(10, 0)</text>
  
  <circle cx="300" cy="100" r="6" fill="#00d9ff"/>
  <text x="305" y="95" fill="#00d9ff" font-size="14">(10, 5)</text>
  
  <circle cx="200" cy="100" r="6" fill="#00ff41"/>
  <text x="205" y="95" fill="#00ff41" font-size="14">(7, 5) END</text>
</svg>

---

## 💬 Cole's Navigation Insight:

> "Every movement is just MATH:"

```python
# Forward (direction matters!)
x += distance  # If facing right
y += distance  # If facing up

# The drone doesn't 'know' directions
# It only knows: change X, change Y
```

> "In advanced systems, we add a 'heading' (angle). But today: pure coordinates."

---

## 📏 Calculating Distance

How far between two points?

**Pythagorean Theorem:** `distance = √(Δx² + Δy²)`

```python
import math

x1, y1 = 0, 0   # Start
x2, y2 = 3, 4   # End

delta_x = x2 - x1  # 3
delta_y = y2 - y1  # 4

distance = math.sqrt(delta_x**2 + delta_y**2)
print(distance)    # 5.0
```

**3-4-5 triangle:** Classic example!

---

## 🎯 Distance Visualization

<svg width="500" height="400" viewBox="0 0 500 400" xmlns="http://www.w3.org/2000/svg">
  <rect width="500" height="400" fill="#0f172a"/>
  
  <!-- Triangle -->
  <line x1="100" y1="300" x2="400" y2="300" stroke="#00d9ff" stroke-width="2"/>
  <line x1="400" y1="300" x2="400" y2="100" stroke="#00d9ff" stroke-width="2"/>
  <line x1="100" y1="300" x2="400" y2="100" stroke="#00ff41" stroke-width="4"/>
  
  <!-- Labels -->
  <text x="240" y="330" fill="#00d9ff" font-size="18">Δx = 3</text>
  <text x="410" y="210" fill="#00d9ff" font-size="18">Δy = 4</text>
  <text x="220" y="190" fill="#00ff41" font-size="20">distance = 5</text>
  
  <!-- Points -->
  <circle cx="100" cy="300" r="8" fill="#f472b6"/>
  <circle cx="400" cy="100" r="8" fill="#f472b6"/>
</svg>

---

## 🔢 Example: Delivery Route

```python
# Drone starts at warehouse
warehouse_x, warehouse_y = 0, 0

# Customer location
customer_x, customer_y = 6, 8

# Calculate delivery distance
dx = customer_x - warehouse_x  # 6
dy = customer_y - warehouse_y  # 8

distance = (dx**2 + dy**2) ** 0.5  # sqrt
print(f"Delivery distance: {distance:.2f} km")
```

**Output:** `Delivery distance: 10.00 km`

---

## 💬 Emily's Real-World Context:

> "GPS uses coordinates constantly:"

- Your phone: (Latitude, Longitude) = (X, Y)
- Google Maps: Calculates distance between points
- Uber: Finds nearest driver using distance formula

> "Every 'Find Near Me' feature? **Coordinate math.**"

---

## 🎮 Game Development Application

```python
# Player position
player_x = 10
player_y = 15

# Enemy position
enemy_x = 13
enemy_y = 19

# Check if enemy is in range
attack_range = 5
distance = ((enemy_x - player_x)**2 + 
            (enemy_y - player_y)**2) ** 0.5

if distance <= attack_range:
    print("Enemy in range! FIRE!")
else:
    print("Too far. Move closer.")
```

---

## 🚁 Drone Simulation (Text-Based)

```python
# Drone flight path
x, y = 0, 0
path = []

# Mission waypoints
x, y = x + 5, y + 0
path.append((x, y))

x, y = x + 0, y + 3
path.append((x, y))

x, y = x - 2, y + 2
path.append((x, y))

print("Flight path:")
for i, pos in enumerate(path, 1):
    print(f"Waypoint {i}: {pos}")
```

---

## 📊 Output Format

```
Flight path:
Waypoint 1: (5, 0)
Waypoint 2: (5, 3)
Waypoint 3: (3, 5)
```

**This is what Judge0 will test:** Text output, not graphics!

---

## ✅ Lesson Complete!

### You Mastered:
- ✅ Cartesian coordinate system (X, Y)
- ✅ Origin point (0, 0)
- ✅ Positive/negative directions
- ✅ Linear movement (changing X and Y)
- ✅ Distance calculation (Pythagorean theorem)
- ✅ Flight path simulation

### Next Mission: L15 - Loops in Graphics
**Pattern Recognition: Drawing shapes efficiently**

---

## 🏆 Your Assignment

Create a **Patrol Route Calculator**:

1. Define 4 waypoints as (x, y) tuples
2. Calculate distance between each consecutive pair
3. Print total patrol distance
4. Use `math.sqrt()` for accuracy

**Hint:** Loop through waypoints with `for i in range(len(points)-1)`

![bg](https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1920)
