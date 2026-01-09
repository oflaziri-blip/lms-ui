# LESSON 03: DATA STRINGS - COMPLETE OUTLINE
## String Manipulation (NO F-STRINGS!)

**Chronos Theme:** Mastering text protocols and data transmission
**Mission:** Learn to manipulate, analyze, and transform text data

**⚠️ CRITICAL:** This lesson replaces the current "Jump Calculations" lesson entirely. NO F-STRINGS ALLOWED per curriculum.

---

## SLIDE-BY-SLIDE BREAKDOWN (30 Slides)

### **PHASE 1: HOOK & CONTEXT (Slides 1-5)**

**Slide 1: Mission Briefing**
- Title: "OPERATION CHRONOS: DATA STRINGS"
- Subtitle: "Text Protocol Mastery"
- Mission Code: L03-STRINGS
- Clearance: Cadet
- Objective: Text Manipulation & Analysis
- Status: 🆕 CREATE NEW

**Slide 2: Character Introduction**
- Commander Aria: "Text is everywhere—usernames, messages, commands. You need to control it."
- Chief Engineer Kael: "Strings are sequences of characters. Master them, and you master communication."
- Status: 🆕 CREATE NEW

**Slide 3: Review - Variables**
- Quick recap of Lesson 02
- `name = "Shadow"`
- `level = 5`
- Problem: "We can store text, but how do we WORK with it?"
- Status: 🆕 CREATE NEW

**Slide 4: Problem Statement**
- Show examples of text manipulation needs:
  - Converting "JOHN DOE" to "John Doe"
  - Extracting first name from "John_Doe_123"
  - Counting characters in a password
  - Finding "@" in an email
- "We need string tools!"
- Status: 🆕 CREATE NEW

**Slide 5: What is a String?**
- Definition: An ordered sequence of characters
- Visual: "HELLO" broken down into H-E-L-L-O
- Each character has a position (index)
- Strings are IMMUTABLE (can't change individual characters)
- Status: 🆕 CREATE NEW

---

### **PHASE 2: STRING BASICS (Slides 6-10)**

**Slide 6: Creating Strings**
- Single quotes: `'Hello'`
- Double quotes: `"Hello"`
- Both work the same!
- When to use which:
  - `"It's working!"` (double quotes when text has apostrophe)
  - `'She said "Hi"'` (single quotes when text has double quotes)
- Status: 🆕 CREATE NEW

**Slide 7: String Length - len()**
- Function: `len(string)`
- Examples:
  ```python
  name = "Chronos"
  print(len(name))  # 7
  
  password = "Secure123"
  print(len(password))  # 9
  ```
- Use case: Password validation, character limits
- Status: 🆕 CREATE NEW

**Slide 8: String Indexing [0]**
- Strings are indexed starting at 0
- Visual diagram:
  ```
  "HELLO"
   01234
  ```
- Examples:
  ```python
  word = "HELLO"
  print(word[0])  # H
  print(word[1])  # E
  print(word[4])  # O
  ```
- Status: 🆕 CREATE NEW

**Slide 9: Negative Indexing [-1]**
- Count from the end with negative numbers
- Visual diagram:
  ```
  "HELLO"
   -5-4-3-2-1
  ```
- Examples:
  ```python
  word = "HELLO"
  print(word[-1])  # O (last character)
  print(word[-2])  # L (second to last)
  ```
- Use case: Getting file extensions, last character
- Status: 🆕 CREATE NEW

**Slide 10: Pro Tips - Zero-Based Indexing (Kael)**
- "Python counts from 0, not 1. This is universal in programming."
- "First character is [0], second is [1], etc."
- "Last character is always [-1]"
- Common mistake: `word[len(word)]` → Error! (should be `word[len(word)-1]` or `word[-1]`)
- Status: 🆕 CREATE NEW

---

### **PHASE 3: STRING OPERATIONS (Slides 11-15)**

**Slide 11: String Concatenation (+)**
- Joining strings together
- Examples:
  ```python
  first = "John"
  last = "Doe"
  full = first + " " + last
  print(full)  # John Doe
  ```
- Multiple concatenation:
  ```python
  print("Agent " + "ID: " + "007")  # Agent ID: 007
  ```
- Status: 🆕 CREATE NEW

**Slide 12: String Repetition (*)**
- Repeating strings
- Examples:
  ```python
  print("=" * 20)  # ====================
  print("Ha" * 3)  # HaHaHa
  print("-" * 10)  # ----------
  ```
- Use case: Creating borders, patterns, separators
- Status: 🆕 CREATE NEW

**Slide 13: String Slicing [start:end]**
- Extract a portion of a string
- Syntax: `string[start:end]` (end is NOT included!)
- Examples:
  ```python
  text = "CHRONOS"
  print(text[0:3])   # CHR (characters 0,1,2)
  print(text[2:5])   # RON (characters 2,3,4)
  print(text[:3])    # CHR (start to 3)
  print(text[3:])    # ONOS (3 to end)
  ```
- Status: 🆕 CREATE NEW

**Slide 14: Common Mistakes**
- ❌ Index out of range:
  ```python
  word = "HI"
  print(word[5])  # Error! Only indices 0,1 exist
  ```
- ❌ Trying to change a character:
  ```python
  word = "HELLO"
  word[0] = "J"  # Error! Strings are immutable
  ```
- ✅ Create a new string instead:
  ```python
  word = "HELLO"
  word = "J" + word[1:]  # JELLO
  ```
- Status: 🆕 CREATE NEW

**Slide 15: Real-World Example (Aria)**
- "Extracting usernames from email addresses"
- Code:
  ```python
  email = "agent007@chronos.net"
  username = email[0:8]  # agent007
  print("Welcome, " + username)
  ```
- Status: 🆕 CREATE NEW

---

### **PHASE 4: STRING METHODS (Slides 16-20)**

**Slide 16: .upper() and .lower()**
- Convert case
- Examples:
  ```python
  name = "John Doe"
  print(name.upper())  # JOHN DOE
  print(name.lower())  # john doe
  ```
- Use case: Case-insensitive comparison
  ```python
  user_input = "YES"
  if user_input.lower() == "yes":
      print("Confirmed!")
  ```
- Status: 🆕 CREATE NEW

**Slide 17: .strip(), .lstrip(), .rstrip()**
- Remove whitespace
- Examples:
  ```python
  text = "  Hello  "
  print(text.strip())   # "Hello"
  print(text.lstrip())  # "Hello  "
  print(text.rstrip())  # "  Hello"
  ```
- Use case: Cleaning user input
- Status: 🆕 CREATE NEW

**Slide 18: .replace(old, new)**
- Replace parts of a string
- Examples:
  ```python
  text = "Hello World"
  print(text.replace("World", "Chronos"))  # Hello Chronos
  
  code = "ERROR_404"
  print(code.replace("_", "-"))  # ERROR-404
  ```
- Replaces ALL occurrences
- Status: 🆕 CREATE NEW

**Slide 19: .find() and .count()**
- `.find(substring)` - Returns index of first occurrence (-1 if not found)
- `.count(substring)` - Counts occurrences
- Examples:
  ```python
  email = "user@example.com"
  print(email.find("@"))      # 4
  print(email.find("xyz"))    # -1 (not found)
  
  text = "banana"
  print(text.count("a"))      # 3
  ```
- Status: 🆕 CREATE NEW

**Slide 20: .split() and .join()**
- `.split(separator)` - Split string into list
- `.join(list)` - Join list into string
- Examples:
  ```python
  # Split
  text = "apple,banana,cherry"
  fruits = text.split(",")
  print(fruits)  # ['apple', 'banana', 'cherry']
  
  # Join
  words = ["Hello", "World"]
  sentence = " ".join(words)
  print(sentence)  # Hello World
  ```
- Note: Lists covered in detail later
- Status: 🆕 CREATE NEW

---

### **PHASE 5: PRACTICE & CHALLENGES (Slides 21-25)**

**Slide 21: Challenge 1 - Name Formatter**
- Task: Convert "JOHN DOE" to "John Doe"
- Hint: Use .lower() and .upper() with slicing
- Solution:
  ```python
  name = "JOHN DOE"
  formatted = name[0].upper() + name[1:].lower()
  print(formatted)  # John doe (close, but needs work on last name too)
  ```
- Status: 🆕 CREATE NEW

**Slide 22: Challenge 2 - Text Analyzer**
- Task: Analyze a string
  - Count total characters
  - Count spaces
  - Count letter 'e'
  - Convert to uppercase
- Example:
  ```python
  text = "Hello World"
  print("Length:", len(text))
  print("Spaces:", text.count(" "))
  print("Letter e:", text.count("e"))
  print("Uppercase:", text.upper())
  ```
- Status: 🆕 CREATE NEW

**Slide 23: Challenge 3 - String Slicer**
- Task: Extract parts from "Agent_007_Active"
  - Get "Agent"
  - Get "007"
  - Get "Active"
- Solution:
  ```python
  code = "Agent_007_Active"
  part1 = code[0:5]      # Agent
  part2 = code[6:9]      # 007
  part3 = code[10:]      # Active
  ```
- Status: 🆕 CREATE NEW

**Slide 24: Advanced - Multi-line Strings**
- Triple quotes for multi-line text
- Examples:
  ```python
  message = """
  CHRONOS ALERT
  Status: Active
  Level: 5
  """
  print(message)
  ```
- Use case: Templates, ASCII art, formatted output
- Status: 🆕 CREATE NEW

**Slide 25: Full Program Example**
- Complete text processor:
  ```python
  # User profile formatter
  raw_name = "  JOHN DOE  "
  raw_email = "JOHN@EXAMPLE.COM"
  
  # Clean and format
  name = raw_name.strip()
  name = name[0].upper() + name[1:].lower()
  email = raw_email.lower()
  
  # Display
  print("=" * 30)
  print("AGENT PROFILE")
  print("=" * 30)
  print("Name: " + name)
  print("Email: " + email)
  print("=" * 30)
  ```
- Status: 🆕 CREATE NEW

---

### **PHASE 6: CLOSURE (Slides 26-30)**

**Slide 26: Kael's Parting Wisdom**
- "Strings are the most common data type you'll work with"
- "Every website, app, and game processes millions of strings per second"
- "Master string manipulation, and you can build anything that communicates"
- Status: 🆕 CREATE NEW

**Slide 27: Mission Complete - Mastery Checklist**
- ✅ Creating strings with quotes
- ✅ String length with len()
- ✅ Indexing and negative indexing
- ✅ String slicing [start:end]
- ✅ Concatenation (+) and repetition (*)
- ✅ String methods (.upper(), .lower(), .strip(), .replace(), .find(), .count())
- ✅ Splitting and joining strings
- Status: 🆕 CREATE NEW

**Slide 28: Next Mission Preview**
- "LESSON 04: NESTED PROTOCOLS"
- "Learn to combine operations for complex tasks"
- "Calculations within calculations!"
- Status: 🆕 CREATE NEW

**Slide 29: Your Assignment**
- Build a text processor:
  1. Take a username: "  AGENT_007  "
  2. Remove spaces
  3. Convert to lowercase
  4. Replace underscores with hyphens
  5. Extract just the number part
  6. Print formatted output
- Bonus: Create a password validator (check length, find special characters)
- Status: 🆕 CREATE NEW

**Slide 30: Lesson Cleared!**
- Trophy animation
- "DATA STRINGS: MASTERED"
- "+150 XP EARNED"
- "Text manipulation unlocked!"
- Status: 🆕 CREATE NEW

---

## CRITICAL REQUIREMENTS MET

✅ **NO F-STRINGS** - Uses only concatenation and comma-separated print
✅ **Comprehensive string coverage** - All essential methods
✅ **Gold Standard pedagogy** - Characters, metaphors, challenges
✅ **Chronos theme** - Agent profiles, system messages
✅ **Error-first teaching** - Shows common mistakes
✅ **Real-world examples** - Email parsing, username formatting
✅ **Graduated complexity** - Simple → Advanced

---

## METHODS COVERED (NO F-STRINGS!)

### String Operations:
- `+` (concatenation)
- `*` (repetition)
- `[index]` (indexing)
- `[start:end]` (slicing)

### String Methods:
- `len()` - Length
- `.upper()` - Uppercase
- `.lower()` - Lowercase
- `.strip()` - Remove whitespace
- `.replace()` - Replace substring
- `.find()` - Find index
- `.count()` - Count occurrences
- `.split()` - Split into list
- `.join()` - Join list into string

### NOT COVERED (Intentionally):
- ❌ F-strings (forbidden by curriculum)
- ❌ .format() (too advanced for Lesson 03)
- ❌ Regular expressions (way too advanced)

**This outline completely replaces the current Lesson 03 and aligns with curriculum: "Strings (we never teach f string)"**
