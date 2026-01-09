# COMPLETE TASK SPECIFICATIONS
## Lesson 02 (17 Tasks) + Lesson 04 (17 Tasks)

---

## LESSON 02: VARIABLES (17 TASKS)

### File: `public/lessons/lesson_02.json`

```json
{
  "lesson_id": "lesson_02",
  "title": "Memory Containers: Variables",
  "module": "Module 1: Python Basics",
  "duration_minutes": 60,
  "slide_url": "/test-improved-slides",
  "objectives": [
    "Understand what variables are and why they're essential",
    "Create and name variables following Python conventions",
    "Store numbers and strings in variables",
    "Reassign and update variable values",
    "Use variables in calculations and operations"
  ],
  "description": "Master Python variables - the containers that store your data. Learn to create, name, and use variables effectively.",
  "exercises": [
    {
      "id": "l02_task_01",
      "type": "code",
      "title": "Task 1: Create Your First Variable",
      "description": "Create a variable named 'score' and assign it the value 100. Then print it.",
      "starterCode": "# Create variable score = 100\n# Print the score",
      "solution": "score = 100\nprint(score)",
      "testCases": [
        {
          "input": "",
          "expectedOutput": "100\n"
        }
      ],
      "tasks": [
        "Use = to assign value",
        "Print the variable"
      ],
      "xp": 10
    },
    {
      "id": "l02_task_02",
      "type": "code",
      "title": "Task 2: String Variable",
      "description": "Create a variable named 'name' with the value 'Shadow'. Print it.",
      "starterCode": "# Create variable name = 'Shadow'\n# Print name",
      "solution": "name = 'Shadow'\nprint(name)",
      "testCases": [
        {
          "input": "",
          "expectedOutput": "Shadow\n"  
        }
      ],
      "tasks": [
        "Create string variable",
        "Print the variable"
      ],
      "xp": 10
    },
    {
      "id": "l02_task_03",
      "type": "code",
      "title": "Task 3: Multiple Variables",
      "description": "Create two variables: age = 25 and level = 5. Print both on separate lines.",
      "starterCode": "# Create age = 25\n# Create level = 5\n# Print both",
      "solution": "age = 25\nlevel = 5\nprint(age)\nprint(level)",
      "testCases": [
        {
          "input": "",
          "expectedOutput": "25\n5\n"
        }
      ],
      "tasks": [
        "Create two variables",
        "Print both values"
      ],
      "xp": 10
    },
    {
      "id": "l02_task_04",
      "type": "code",
      "title": "Task 4: Valid Variable Names",
      "description": "Create a variable with snake_case naming: user_score = 150. Print it.",
      "starterCode": "# Create user_score = 150",
      "solution": "user_score = 150\nprint(user_score)",
      "testCases": [
        {
          "input": "",
          "expectedOutput": "150\n"
        }
      ],
      "tasks": [
        "Use snake_case naming",
        "Print the variable"
      ],
      "xp": 10
    },
    {
      "id": "l02_task_05",
      "type": "code",
      "title": "Task 5: Descriptive Names",
      "description": "Create variables with descriptive names: player_health = 100, max_health = 100. Print player_health.",
      "starterCode": "# Create player_health = 100\n# Create max_health = 100\n# Print player_health",
      "solution": "player_health = 100\nmax_health = 100\nprint(player_health)",
      "testCases": [
        {
          "input": "",
          "expectedOutput": "100\n"
        }
      ],
      "tasks": [
        "Use descriptive names",
        "Create two variables",
        "Print one of them"
      ],
      "xp": 15
    },
    {
      "id": "l02_task_06",
      "type": "code",
      "title": "Task 6: Reassigning Variables",
      "description": "Create x = 10, then reassign x = 20. Print x (should show 20).",
      "starterCode": "# Create x = 10\n# Reassign x = 20\n# Print x",
      "solution": "x = 10\nx = 20\nprint(x)",
      "testCases": [
        {
          "input": "",
          "expectedOutput": "20\n"
        }
      ],
      "tasks": [
        "Create variable",
        "Reassign new value",
        "Print shows latest value"
      ],
      "xp": 15
    },
    {
      "id": "l02_task_07",
      "type": "code",
      "title": "Task 7: Updating with Operations",
      "description": "Create score = 100, then update score = score + 50. Print score (should show 150).",
      "starterCode": "# Create score = 100\n# Update score = score + 50\n# Print score",
      "solution": "score = 100\nscore = score + 50\nprint(score)",
      "testCases": [
        {
          "input": "",
          "expectedOutput": "150\n"
        }
      ],
      "tasks": [
        "Create initial value",
        "Update using itself",
        "Print new value"
      ],
      "xp": 15
    },
    {
      "id": "l02_task_08",
      "type": "code",
      "title": "Task 8: Variables in Calculations",
      "description": "Create x = 10 and y = 5. Print x + y.",
      "starterCode": "# Create x = 10, y = 5\n# Print x + y",
      "solution": "x = 10\ny = 5\nprint(x + y)",
      "testCases": [
        {
          "input": "",
          "expectedOutput": "15\n"
        }
      ],
      "tasks": [
        "Create two variables",
        "Add them in print()"
      ],
      "xp": 15
    },
    {
      "id": "l02_task_09",
      "type": "code",
      "title": "Task 9: Complex Calculation",
      "description": "Create base = 50, bonus = 20, multiplier = 2. Print (base + bonus) * multiplier.",
      "starterCode": "# Create the three variables\n# Print the calculation",
      "solution": "base = 50\nbonus = 20\nmultiplier = 2\nprint((base + bonus) * multiplier)",
      "testCases": [
        {
          "input": "",
          "expectedOutput": "140\n"
        }
      ],
      "tasks": [
        "Create three variables",
        "Use parentheses for order",
        "Print the result"
      ],
      "xp": 20
    },
    {
      "id": "l02_task_10",
      "type": "code",
      "title": "Task 10: Storing Results",
      "description": "Create x = 10, y = 5. Create result = x * y. Print result.",
      "starterCode": "# Create x = 10, y = 5\n# Create result = x * y\n# Print result",
      "solution": "x = 10\ny = 5\nresult = x * y\nprint(result)",
      "testCases": [
        {
          "input": "",
          "expectedOutput": "50\n"
        }
      ],
      "tasks": [
        "Create two variables",
        "Store calculation in new variable",
        "Print the result variable"
      ],
      "xp": 15
    },
    {
      "id": "l02_task_11",
      "type": "code",
      "title": "Task 11: String Variables",
      "description": "Create first_name = 'John' and last_name = 'Doe'. Print both with a space between using comma.",
      "starterCode": "# Create the two name variables\n# Print with comma",
      "solution": "first_name = 'John'\nlast_name = 'Doe'\nprint(first_name, last_name)",
      "testCases": [
        {
          "input": "",
          "expectedOutput": "John Doe\n"
        }
      ],
      "tasks": [
        "Create two string variables",
        "Use comma in print to separate"
      ],
      "xp": 15
    },
    {
      "id": "l02_task_12",
      "type": "code",
      "title": "Task 12: String Concatenation with Variables",
      "description": "Create agent = 'Shadow'. Print 'Agent: ' + agent.",
      "starterCode": "# Create agent = 'Shadow'\n# Print 'Agent: ' + agent",
      "solution": "agent = 'Shadow'\nprint('Agent: ' + agent)",
      "testCases": [
        {
          "input": "",
          "expectedOutput": "Agent: Shadow\n"
        }
      ],
      "tasks": [
        "Create string variable",
        "Use + to concatenate"
      ],
      "xp": 15
    },
    {
      "id": "l02_task_13",
      "type": "code",
      "title": "Task 13: Combining Variables",
      "description": "Create x = 5, y = 10, z = 15. Print x + y + z.",
      "starterCode": "# Create three variables\n# Print sum",
      "solution": "x = 5\ny = 10\nz = 15\nprint(x + y + z)",
      "testCases": [
        {
          "input": "",
          "expectedOutput": "30\n"
        }
      ],
      "tasks": [
        "Create three variables",
        "Add all three"
      ],
      "xp": 15
    },
    {
      "id": "l02_task_14",
      "type": "code",
      "title": "Task 14: Text and Number Variables",
      "description": "Create label = 'Score:' and value = 100. Print them with comma separation.",
      "starterCode": "# Create label and value\n# Print both",
      "solution": "label = 'Score:'\nvalue = 100\nprint(label, value)",
      "testCases": [
        {
          "input": "",
          "expectedOutput": "Score: 100\n"  
        }
      ],
      "tasks": [
        "Create string and number variables",
        "Print with comma (auto space)"
      ],
      "xp": 20
    },
    {
      "id": "l02_task_15",
      "type": "debug",
      "title": "Task 15: Fix Undefined Variable",
      "description": "Fix the error - variable must be created before use!",
      "brokenCode": "print(undefined_var)",
      "starterCode": "print(undefined_var)",
      "solution": "undefined_var = 42\nprint(undefined_var)",
      "testCases": [
        {
          "input": "",
          "expectedOutput": "42\n"
        }
      ],
      "tasks": [
        "Create the variable first",
        "Then print it"
      ],
      "xp": 15
    },
    {
      "id": "l02_task_16",
      "type": "debug",
      "title": "Task 16: Fix Typo in Variable Name",
      "description": "Fix the typo - variable names must match exactly!",
      "brokenCode": "score = 100\nprint(scroe)",
      "starterCode": "score = 100\nprint(scroe)",
      "solution": "score = 100\nprint(score)",
      "testCases": [
        {
          "input": "",
          "expectedOutput": "100\n"
        }
      ],
      "tasks": [
        "Fix the typo in print statement",
        "Variable names are case-sensitive"
      ],
      "xp": 15
    },
    {
      "id": "l02_task_17",
      "type": "code",
      "title": "Task 17: Complete Program",
      "description": "Create a character profile: name = 'Shadow', level = 10, health = 100. Print formatted output:\n===\nAGENT: Shadow\nLEVEL: 10\nHEALTH: 100\n===",
      "starterCode": "# Create the three variables\n# Print formatted profile",
      "solution": "name = 'Shadow'\nlevel = 10\nhealth = 100\nprint('===')\nprint('AGENT:', name)\nprint('LEVEL:', level)\nprint('HEALTH:', health)\nprint('===')",
      "testCases": [
        {
          "input": "",
          "expectedOutput": "===\nAGENT: Shadow\nLEVEL: 10\nHEALTH: 100\n===\n"
        }
      ],
      "tasks": [
        "Create three variables",
        "Print border",
        "Print each with label",
        "Print closing border"
      ],
      "xp": 25
    }
  ]
}
```

---

## LESSON 04: NESTED CONSTRUCTIONS (17 TASKS)

### File: `public/lessons/lesson_04.json`

```json
{
  "lesson_id": "lesson_04",
  "title": "Nested Protocols: Multi-Layer Operations",
  "module": "Module 1: Python Basics",
  "duration_minutes": 60,
  "slide_url": "/test-lesson04",
  "objectives": [
    "Understand nested constructions and why they're powerful",
    "Use parentheses to control order of operations",
    "Nest calculations inside print() and other functions",
    "Combine multiple operations in single expressions",
    "Build complex programs with nested logic"
  ],
  "description": "Master nested constructions - operations within operations. Learn to combine calculations, functions, and string operations for complex tasks. NO F-STRINGS!",
  "exercises": [
    {
      "id": "l04_task_01",
      "type": "code",
      "title": "Task 1: Simple Nested Math",
      "description": "Print the result of (5 + 3) * 2",
      "starterCode": "# Print (5 + 3) * 2",
      "solution": "print((5 + 3) * 2)",
      "testCases": [
        {
          "input": "",
          "expectedOutput": "16\n"
        }
      ],
      "tasks": [
        "Use parentheses for nesting",
        "5+3=8, then 8*2=16"
      ],
      "xp": 10
    },
    {
      "id": "l04_task_02",
      "type": "code",
      "title": "Task 2: Three Level Nesting",
      "description": "Print the result of ((10 + 5) * 2) - 1",
      "starterCode": "# Print (((10 + 5) * 2) - 1",
      "solution": "print(((10 + 5) * 2) - 1)",
      "testCases": [
        {
          "input": "",
          "expectedOutput": "29\n"
        }
      ],
      "tasks": [
        "Work inside-out",
        "10+5=15, 15*2=30, 30-1=29"
      ],
      "xp": 15
    },
    {
      "id": "l04_task_03",
      "type": "code",
      "title": "Task 3: Calculation in print()",
      "description": "Print the calculation 20 + 15 directly (don't use a variable)",
      "starterCode": "# Print 20 + 15",
      "solution": "print(20 + 15)",
      "testCases": [
        {
          "input": "",
          "expectedOutput": "35\n"
        }
      ],
      "tasks": [
        "Calculation happens inside print()"
      ],
      "xp": 10
    },
    {
      "id": "l04_task_04",
      "type": "code",
      "title": "Task 4: String Repetition Nesting",
      "description": "Print '=' repeated 10 times using multiplication",
      "starterCode": "# Print '=' * 10",
      "solution": "print('=' * 10)",
      "testCases": [
        {
          "input": "",
          "expectedOutput": "==========\n"
        }
      ],
      "tasks": [
        "String operation inside print()"
      ],
      "xp": 10
    },
    {
      "id": "l04_task_05",
      "type": "code",
      "title": "Task 5: Function in Function",
      "description": "Print the length of 'Chronos' using len() inside print()",
      "starterCode": "# Print len('Chronos')",
      "solution": "print(len('Chronos'))",
      "testCases": [
        {
          "input": "",
          "expectedOutput": "7\n"
        }
      ],
      "tasks": [
        "len() function inside print()",
        "Counts 7 characters"
      ],
      "xp": 15
    },
    {
      "id": "l04_task_06",
      "type": "code",
      "title": "Task 6: Nested String Operations",
      "description": "Print the length of 'Hello' + 'World' (concatenate first, then measure)",
      "starterCode": "# Print len('Hello' + 'World')",
      "solution": "print(len('Hello' + 'World'))",
      "testCases": [
        {
          "input": "",
          "expectedOutput": "10\n"
        }
      ],
      "tasks": [
        "Concatenate inside len()",
        "len() inside print()",
        "Result is 10"
      ],
      "xp": 15
    },
    {
      "id": "l04_task_07",
      "type": "code",
      "title": "Task 7: Math with Parentheses",
      "description": "Print the result of (100 + 50) / 3",
      "starterCode": "# Print (100 + 50) / 3",
      "solution": "print((100 + 50) / 3)",
      "testCases": [
        {
          "input": "",
          "expectedOutput": "50.0\n"
        }
      ],
      "tasks": [
        "Add first, then divide",
        "100+50=150, 150/3=50.0"
      ],
      "xp": 15
    },
    {
      "id": "l04_task_08",
      "type": "code",
      "title": "Task 8: Repetition with Calculation",
      "description": "Print '-' repeated (5 + 5) times",
      "starterCode": "# Print '-' * (5 + 5)",
      "solution": "print('-' * (5 + 5))",
      "testCases": [
        {
          "input": "",
          "expectedOutput": "----------\n"
        }
      ],
      "tasks": [
        "Calculate 5+5 first",
        "Then repeat '-' 10 times"
      ],
      "xp": 15
    },
    {
      "id": "l04_task_09",
      "type": "code",
      "title": "Task 9: Multiple len() Operations",
      "description": "Print len('Hello') + len('World')",
      "starterCode": "# Print len('Hello') + len('World')",
      "solution": "print(len('Hello') + len('World'))",
      "testCases": [
        {
          "input": "",
          "expectedOutput": "10\n"
        }
      ],
      "tasks": [
        "len('Hello') = 5",
        "len('World') = 5",
        "5 + 5 = 10"
      ],
      "xp": 20
    },
    {
      "id": "l04_task_10",
      "type": "code",
      "title": "Task 10: Complex Expression",
      "description": "Print ((15 + 5) * 3) - 10",
      "starterCode": "# Print ((15 + 5) * 3) - 10",
      "solution": "print(((15 + 5) * 3) - 10)",
      "testCases": [
        {
          "input": "",
          "expectedOutput": "50\n"
        }
      ],
      "tasks": [
        "15+5=20",
        "20*3=60",
        "60-10=50"
      ],
      "xp": 20
    },
    {
      "id": "l04_task_11",
      "type": "code",
      "title": "Task 11: Variables in Nesting",
      "description": "Given x = 10 and y = 5, print (x + y) * 2",
      "starterCode": "x = 10\ny = 5\n# Print (x + y) * 2",
      "solution": "x = 10\ny = 5\nprint((x + y) * 2)",
      "testCases": [
        {
          "input": "",
          "expectedOutput": "30\n"
        }
      ],
      "tasks": [
        "Add variables first",
        "10+5=15, 15*2=30"
      ],
      "xp": 20
    },
    {
      "id": "l04_task_12",
      "type": "code",
      "title": "Task 12: String Formatting with Nesting",
      "description": "Print 'Score:' and (100 + 50) * 2 using comma separation",
      "starterCode": "# Print 'Score:', (100 + 50) * 2",
      "solution": "print('Score:', (100 + 50) * 2)",
      "testCases": [
        {
          "input": "",
          "expectedOutput": "Score: 300\n"
        }
      ],
      "tasks": [
        "Calculate in print()",
        "Use comma to separate text and number"
      ],
      "xp": 20
    },
    {
      "id": "l04_task_13",
      "type": "code",
      "title": "Task 13: Deeply Nested Math",
      "description": "Print (((5 + 3) * 2) ** 2) - 10",
      "starterCode": "# Print (((5 + 3) * 2) ** 2) - 10",
      "solution": "print((((5 + 3) * 2) ** 2) - 10)",
      "testCases": [
        {
          "input": "",
          "expectedOutput": "246\n"
        }
      ],
      "tasks": [
        "5+3=8",
        "8*2=16",
        "16**2=256",
        "256-10=246"
      ],
      "xp": 25
    },
    {
      "id": "l04_task_14",
      "type": "code",
      "title": "Task 14: Combined Operations",
      "description": "Print a border, text, and border using nesting:\n'=' * 20, 'HELLO', '=' * 20 (all in one print with commas)",
      "starterCode": "# Print '=' * 20, 'HELLO', '=' * 20",
      "solution": "print('=' * 20, 'HELLO', '=' * 20)",
      "testCases": [
        {
          "input": "",
          "expectedOutput": "==================== HELLO ====================\n"
        }
      ],
      "tasks": [
        "Three items in one print()",
        "String operations with commas"
      ],
      "xp": 25
    },
    {
      "id": "l04_task_15",
      "type": "code",
      "title": "Task 15: Real Calculation",
      "description": "Calculate perimeter: length = 10, width = 5. Print (length + width) * 2",
      "starterCode": "length = 10\nwidth = 5\n# Print perimeter",
      "solution": "length = 10\nwidth = 5\nprint((length + width) * 2)",
      "testCases": [
        {
          "input": "",
          "expectedOutput": "30\n"
        }
      ],
      "tasks": [
        "Perimeter formula: (l+w)*2",
        "(10+5)*2 = 30"
      ],
      "xp": 20
    },
    {
      "id": "l04_task_16",
      "type": "debug",
      "title": "Task 16: Fix Missing Parenthesis",
      "description": "Fix the syntax error - missing closing parenthesis!",
      "brokenCode": "print((10 + 5 * 2)",
      "starterCode": "print((10 + 5 * 2)",
      "solution": "print((10 + 5) * 2)",
      "testCases": [
        {
          "input": "",
          "expectedOutput": "30\n"
        }
      ],
      "tasks": [
        "Add closing parenthesis",
        "Match opening and closing"
      ],
      "xp": 15
    },
    {
      "id": "l04_task_17",
      "type": "code",
      "title": "Task 17: Complete Program",
      "description": "Create a damage calculator:\nbase = 50, bonus = 20, multiplier = 2\nPrint formatted output:\n==========\nDAMAGE REPORT\n==========\nTotal: (calculation)\n==========",
      "starterCode": "# Create variables and print formatted report",
      "solution": "base = 50\nbonus = 20\nmultiplier = 2\nprint('=' * 10)\nprint('DAMAGE REPORT')\nprint('=' * 10)\nprint('Total:', (base + bonus) * multiplier)\nprint('=' * 10)",
      "testCases": [
        {
          "input": "",
          "expectedOutput": "==========\nDAMAGE REPORT\n==========\nTotal: 140\n==========\n"
        }
      ],
      "tasks": [
        "Create three variables",
        "Print borders with repetition",
        "Nest calculation in print()",
        "Format complete report"
      ],
      "xp": 30
    }
  ]
}
```

---

These are the complete, ready-to-use JSON files. Copy them exactly!
