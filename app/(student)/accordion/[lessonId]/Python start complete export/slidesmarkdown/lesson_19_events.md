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

# 🎮 L19: Events
## Interactive Security Grid

**Neon City Cyber Academy**
*Module 5: Object-Oriented Programming*

![bg right:40%](https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800)

---

## 🎯 What are Events?

**Events** = Things that happen (clicks, keypresses, timer ticks)

**Event-Driven Programming** = Code that WAITS for events, then RESPONDS

### Examples:
- 🖱️ Click a button → Action happens
- ⌨️ Press a key → Character moves
- ⏰ Timer expires → Game over

**Your code becomes REACTIVE!**

---

## 🔑 The Three Event Methods

```python
screen = turtle.Screen()

# 1. Listen for keyboard events
screen.listen()

# 2. Bind a key to a function
screen.onkey(function_name, 'key')

# 3. Bind mouse click to a function
screen.onclick(function_name)
```

**Critical:** Call `screen.listen()` FIRST!

---

## ⬆️ Task 1: Arrow Key Movement

```python
import turtle

guard = turtle.Turtle()
guard.shape('turtle')

def move_forward():
    guard.forward(20)

screen = turtle.Screen()
screen.listen()
screen.onkey(move_forward, 'Up')

turtle.mainloop()
```

**Press UP arrow to move! Manual override activated!**

---

## 💬 Key Concepts

> **Function vs Function Call:**

```python
# ❌ WRONG - Calls immediately
screen.onkey(move_forward(), 'Up')

# ✅ CORRECT - Passes function reference
screen.onkey(move_forward, 'Up')
```

> "No parentheses! You're giving Python the RECIPE, not cooking it immediately!"

---

## 🖱️ Mouse Click Events

```python
stealth_drone = turtle.Turtle()

def change_color(x, y):
    stealth_drone.color('lime')
    stealth_drone.goto(x, y)

screen = turtle.Screen()
screen.onclick(change_color)

turtle.mainloop()
```

**Click anywhere → Drone teleports AND changes color!**

---

## 📍 Understanding (x, y) Parameters

**onclick functions automatically receive coordinates:**

```python
def my_function(x, y):
    print(f"Clicked at: ({x}, {y})")
```

- `x` = Horizontal position of click
- `y` = Vertical position of click

**You don't pass them - Python does automatically!**

---

## 🎮 4-Direction Control (WASD)

```python
patrol_unit = turtle.Turtle()

def up():
    patrol_unit.forward(30)

def down():
    patrol_unit.backward(30)

def left():
    patrol_unit.left(45)

def right():
    patrol_unit.right(45)

screen = turtle.Screen()
screen.listen()
screen.onkey(up, 'w')
screen.onkey(down, 's')
screen.onkey(left, 'a')
screen.onkey(right, 'd')
```

---

## 🔄 Event Loop Explained

```python
turtle.mainloop()
```

**What this does:**
1. Keeps program running
2. Constantly checks for events
3. Calls your functions when events occur
4. Repeats forever (until you close window)

**Without `mainloop()`, program exits immediately!**

---

## ✅ Lesson Complete!

### You Mastered:
- ✅ Event-driven programming concept
- ✅ `screen.listen()` activation
- ✅ `onkey()` for keyboard events
- ✅ `onclick()` for mouse events
- ✅ Function references vs function calls
- ✅ Building interactive programs

### Next: L20 - Paint Project
**Combine EVERYTHING to build a drawing app!**

---

## 🏆 Challenge

**Build a Security Keypad:**

- 4 arrow keys for movement
- Space bar to toggle pen up/down
- 'c' key to clear screen
- Mouse click to change color

**Make it fully interactive!**

![bg](https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1920)
