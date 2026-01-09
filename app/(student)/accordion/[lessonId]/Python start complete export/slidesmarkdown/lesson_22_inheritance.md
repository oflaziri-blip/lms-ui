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

# 🛡️ L22: Inheritance
## Security Droid Upgrade

**Neon City Cyber Academy**
*Module 5: Object-Oriented Programming*

![bg right:40%](https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800)

---

## 🔄 The Upgrade Problem

**Current:** Worker Droids can greet and work

**Need:** Security Droids that can ALSO patrol

**Bad Solution:** Copy all Worker code + add patrol

**Good Solution:** INHERIT from Worker, ADD new features!

---

## 🎯 What is Inheritance?

**Inheritance** = Child class gets ALL features of parent class

### Real World:
- 👤 **Parent:** Human
- 👶 **Child:** Baby (inherits eyes, hair, etc.)
- ➕ **Extra:** Learns to code (new skill!)

**Code:** SecurityDroid inherits from Droid + adds patrol()

---

## 📐 Creating a Child Class

```python
class Droid:
    def __init__(self, name, battery_level):
        self.name = name
        self.battery_level = battery_level
    
    def greet(self):
        print(f"Greetings. I am {self.name}, Worker Unit.")

class SecurityDroid(Droid):
    pass  # Inherits everything!
```

**Syntax:** `class Child(Parent):`

---

## 🔍 What Gets Inherited?

```python
security = SecurityDroid('GUARD-X1', 100)
security.greet()  # Works! Inherited from Droid
```

**SecurityDroid automatically has:**
- ✅ `__init__` method
- ✅ `name` and `battery_level` attributes
- ✅ `greet()` method

**WITHOUT writing any code!**

---

## ➕ Adding New Methods

```python
class SecurityDroid(Droid):
    def patrol(self):
        print(f"[{self.name}] Initiating sector patrol. All clear.")
```

```python
guard = SecurityDroid('SENTINEL-9', 98)
guard.greet()   # Inherited method
guard.patrol()  # New method!
```

**Child has parent features PLUS its own!**

---

## 💬 Parent vs Child Capabilities

```python
worker = Droid('WORKER-5', 100)
guard = SecurityDroid('GUARD-5', 100)

# Worker can only greet
worker.greet()  # ✅ Works
# worker.patrol()  # ❌ Error! Workers can't patrol

# Guard can do BOTH
guard.greet()   # ✅ Inherited
guard.patrol()  # ✅ Unique to SecurityDroid
```

**Inheritance = Code reuse without copy-paste!**

---

## 🌳 Inheritance Hierarchy

```
    Droid (Parent)
    ├── greet()
    ├── __init__()
    │
    └── SecurityDroid (Child)
        ├── greet() [inherited]
        ├── __init__() [inherited]
        └── patrol() [new]
```

**SecurityDroid IS-A Droid (with extras!)**

---

## 🎯 Multiple Child Classes

```python
class Droid:
    # Base class

class SecurityDroid(Droid):
    def patrol(self):
        print("Patrolling...")

class MedicDroid(Droid):
    def heal(self):
        print("Healing unit...")

class CombatDroid(Droid):
    def attack(self):
        print("Engaging target!")
```

**One parent, many specialized children!**

---

## 💡 When to Use Inheritance

**Use when:**
- Child "IS-A" type of Parent
- Need to add features to existing code
- Want to reuse code without copying

**Examples:**
- Dog IS-A Animal
- SecurityDroid IS-A Droid
- ElectricCar IS-A Car

---

## 🔧 Quick Reference

```python
# Define parent
class Parent:
    def method1(self):
        pass

# Child inherits from Parent
class Child(Parent):
    def method2(self):
        pass

# Create instances
p = Parent()
p.method1()  # ✅

c = Child()
c.method1()  # ✅ Inherited
c.method2()  # ✅ Own method
```

---

## ✅ Lesson Complete!

### You Mastered:
- ✅ What inheritance is (child from parent)
- ✅ Syntax: `class Child(Parent):`
- ✅ Child automatically gets parent methods
- ✅ Adding new methods to child class
- ✅ IS-A relationship
- ✅ Multiple children from one parent

### Next: L23 - Advanced Inheritance
**Method overriding and super()!**

---

## 🏆 Challenge

**Create a Droid Hierarchy:**

- Base: `Droid`
- Children: `WorkerDroid`, `SecurityDroid`, `CommanderDroid`
- Each child adds 2 unique methods
- Create instances of each type

**Build a complete droid army!**

![bg](https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1920)
