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
---

# 🎨 L20: Neon City Graffiti Tool
## Final Graphics Project

**Neon City Cyber Academy**
*Module 5: Object-Oriented Programming*

![bg right:40%](https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800)

---

## 🎯 Project Overview

**Build a digital spray paint system!**

### Features:
- ✏️ Draw with arrow keys
- 🎨 Change colors with number keys
- 🖊️ Pen up/down control
- 🗑️ Clear canvas

**Combines:** Objects + Methods + Events + Loops

---

## 🛠️ Step 1: Setup

```python
import turtle

# Create the pen object
pen = turtle.Turtle()
pen.shape('circle')
pen.color('cyan')
pen.pensize(3)
pen.speed(0)

turtle.done()
```

**Foundation complete - pen ready to draw!**

---

## 🎨 Step 2: Color Palette

```python
def color_cyan():
    pen.color('cyan')

def color_magenta():
    pen.color('magenta')

def color_yellow():
    pen.color('yellow')

screen = turtle.Screen()
screen.bgcolor('black')  # Neon canvas!
screen.listen()
screen.onkey(color_cyan, '1')
screen.onkey(color_magenta, '2')
screen.onkey(color_yellow, '3')
```

---

## ⌨️ Step 3: Movement Controls

```python
def move_forward():
    pen.forward(20)

def move_backward():
    pen.backward(20)

def turn_left():
    pen.left(15)

def turn_right():
    pen.right(15)

screen.onkey(move_forward, 'Up')
screen.onkey(move_backward, 'Down')
screen.onkey(turn_left, 'Left')
screen.onkey(turn_right, 'Right')
```

---

## 🖊️ Step 4: Pen Control

```python
def pen_up():
    pen.penup()   # Stop drawing

def pen_down():
    pen.pendown()  # Start drawing

def clear_canvas():
    pen.clear()    # Erase everything

screen.onkey(pen_up, 'u')
screen.onkey(pen_down, 'd')
screen.onkey(clear_canvas, 'c')
```

**Now you can move without drawing!**

---

## 🎮 Complete Control Scheme

| Key | Action |
|-----|--------|
| **1, 2, 3** | Change color |
| **Arrow Keys** | Move/turn pen |
| **U** | Pen up (stop drawing) |
| **D** | Pen down (start drawing) |
| **C** | Clear canvas |

---

## 💡 Pro Features

```python
# Speed control
pen.speed(0)  # Instant = smoother drawing

# Thicker lines
pen.pensize(5)

# Hide the turtle cursor
pen.hideturtle()

# Custom background
screen.bgcolor('#0a0a0a')
```

---

## 🎨 Art Techniques

**Dotted Lines:**
```python
for i in range(20):
    pen.pendown()
    pen.forward(5)
    pen.penup()
    pen.forward(5)
```

**Gradient Effect:**
```python
colors = ['cyan', 'blue', 'magenta', 'red']
for i in range(40):
    pen.color(colors[i % 4])
    pen.forward(10)
    pen.right(10)
```

---

## ✅ Project Complete!

### You Built:
- ✅ Interactive paint program
- ✅ Color switching system
- ✅ Movement controls
- ✅ Pen state management
- ✅ Clear function

**This is a REAL application! Share your art!**

---

## 🏆 Extension Challenges

1. **Add more colors** (4-9 keys)
2. **Create shape stamps** (press 's' for star)
3. **Save/load drawings** (advanced!)
4. **Fill tool** (`begin_fill()`, `end_fill()`)

**Get creative - it's YOUR tool!**

![bg](https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1920)
