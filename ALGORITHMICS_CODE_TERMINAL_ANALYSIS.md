# Algorithmics Code Terminal - Complete UI/UX Analysis

## 🎯 Executive Summary

This report documents the **sliding accordion interface** used in Algorithmics' code terminal for Lesson 2, Exercise 4. This is the key feature that allows students to toggle between full-screen coding and viewing task descriptions/output.

---

## 1. Layout Architecture - The Sliding Accordion System

### Three-Panel System
```
┌─────────────────────────────────────────────────────────────────┐
│ Top Nav: [Back] [Progress Circles] [Toolbar Icons] [User]      │
├──────────┬──────────────────────────────────┬───────────────────┤
│          │                                  │                   │
│  LEFT    │         CENTER                   │      RIGHT        │
│  PANEL   │      (Code Editor)               │      PANEL        │
│ (Files)  │                                  │  (Assignment/     │
│          │                                  │   Output)         │
│          │                                  │                   │
│ Toggle   │      Always Visible              │    Toggle         │
│ On/Off   │                                  │    On/Off         │
└──────────┴──────────────────────────────────┴───────────────────┘
```

### Panel States

#### State 1: Assignment View (Default)
- **Left**: Hidden
- **Center**: Code editor (~50% width)
- **Right**: Task description + Output (~50% width)

#### State 2: Full Editor View
- **Left**: Hidden
- **Center**: Code editor (~100% width)
- **Right**: Hidden (slid off-screen)

#### State 3: Files View
- **Left**: Files sidebar (~20% width)
- **Center**: Code editor (~80% width)
- **Right**: Hidden

---

## 2. The Toolbar - Icon Functions

### Location
**Position**: Floating toolbar below top navigation
**Background**: Transparent/semi-transparent
**Icons**: 6-7 purple circular buttons

### Icon Breakdown (Left to Right)

| Icon | Function | Behavior |
|------|----------|----------|
| 📁 Files | Toggle left sidebar | Shows/hides file browser |
| 🔄 History | Version history | Shows code history |
| ⚙️ Settings | Editor settings | Font size, theme, etc. |
| 📄 Assignment | Toggle right panel | **KEY FEATURE** - Slides task description in/out |
| 🔄 Refresh | Reload code | Resets to starter code |
| ↗️ Maximize | Full screen editor | Hides right panel completely |

### The "Assignment" Toggle (Critical Feature)

**Icon**: Document/clipboard icon (4th from left)
**Function**: Accordion slide animation
**Behavior**:
- **Click once**: Right panel slides in from right (shows task + output)
- **Click again**: Right panel slides out to right (hides, editor expands)
- **Animation**: Smooth 300-400ms CSS transition
- **Width**: Right panel is ~40-50% when visible

---

## 3. The Right Panel Content

### When Visible, Contains:

#### A. Success Banner (Top)
```
┌─────────────────────────────────────────┐
│ 🎉 Well done, you passed this level :) │ Green background
│                                         │
│        [Next level] Button              │ Purple button
└─────────────────────────────────────────┘
```

#### B. Task Description
```
┌─────────────────────────────────────────┐
│ Fix bugs in the program                 │
│                                         │
│ TASKS WITH AUTOMATIC CHECK ℹ️           │
│                                         │
│ ✓ Fix errors in the use of variables.  │ Green checkmark
└─────────────────────────────────────────┘
```

#### C. Console Output
```
┌─────────────────────────────────────────┐
│ [▶] [⏭] [⏭⏭] [⏹] [...]               │ Playback controls
│                                         │
│ Guide - Smith                           │ Output text
│ Package price: 58800                    │
│                                         │
│ One of the code's commands is...        │ Additional info
└─────────────────────────────────────────┘
```

---

## 4. The Sliding Animation Mechanism

### CSS Implementation (Estimated)
```css
.right-panel {
  position: fixed;
  right: 0;
  top: 60px;
  width: 50%;
  height: calc(100vh - 60px);
  background: white;
  transform: translateX(0);
  transition: transform 0.3s ease-in-out;
  z-index: 10;
}

.right-panel.hidden {
  transform: translateX(100%); /* Slides off-screen to the right */
}

.code-editor {
  width: 50%;
  transition: width 0.3s ease-in-out;
}

.code-editor.expanded {
  width: 100%; /* Expands when right panel hides */
}
```

### React State Management
```typescript
const [showAssignment, setShowAssignment] = useState(true)
const [showFiles, setShowFiles] = useState(false)

// Toggle assignment panel
const toggleAssignment = () => {
  setShowAssignment(!showAssignment)
}
```

---

## 5. Code Editor Specifications

### Visual Design
- **Background**: Light gray/white (#f3f4f6)
- **Line Numbers**: Left side, gray color
- **Syntax Highlighting**: 
  - Keywords (def, return, print): Blue (#4f46e5)
  - Strings: Red/pink (#ef4444)
  - Numbers: Teal (#14b8a6)
  - Comments: Gray (#6b7280)

### Editor Features
- **Font**: Monospace (Consolas/Monaco)
- **Font Size**: ~14px
- **Line Height**: 1.5-1.6
- **Tab Size**: 4 spaces
- **Word Wrap**: Enabled

---

## 6. Console Output Panel

### Playback Controls
**Icons** (Purple buttons):
- ▶️ Run/Play
- ⏭️ Step Forward
- ⏭️⏭️ Skip to End
- ⏹️ Stop
- ... More options

### Output Display
- **Background**: White
- **Text**: Monospace font
- **Color**: Dark gray/black
- **Format**: Plain text output from Python execution

---

## 7. The Complete User Flow

### Scenario: Student Solving a Coding Task

1. **Initial State**:
   - Right panel visible with task description
   - Code editor at 50% width
   - Student reads: "Fix bugs in the program"

2. **Student Wants More Space**:
   - Clicks "Maximize" or "Assignment" icon
   - Right panel slides out to the right
   - Code editor expands to 100% width
   - Student can focus on coding

3. **Student Runs Code**:
   - Clicks ▶️ Run button (in console controls)
   - Output appears in console section
   - If correct: Green success banner appears

4. **Student Checks Task**:
   - Clicks "Assignment" icon again
   - Right panel slides back in from right
   - Shows task checklist with green checkmarks
   - Shows console output below

5. **Success**:
   - Green banner: "Well done, you passed this level :)"
   - Purple "Next level" button appears
   - Click to advance to next exercise

---

## 8. Key UI/UX Patterns

### Accordion Slide Animation
- **Direction**: Horizontal (left ← → right)
- **Speed**: ~300-400ms
- **Easing**: ease-in-out
- **Trigger**: Click toolbar icon
- **State**: Toggles between visible/hidden

### Panel Widths
- **Right Panel Visible**: Editor 50% | Panel 50%
- **Right Panel Hidden**: Editor 100% | Panel 0%
- **Left Panel Visible**: Files 20% | Editor 80%

### Responsive Behavior
- Panels stack on mobile (not tested)
- Toolbar remains fixed at top
- Smooth transitions prevent jarring layout shifts

---

## 9. Technical Implementation Notes

### React Resizable Panels Alternative
Instead of `react-resizable-panels`, Algorithmics uses:
- **Fixed-width panels** with CSS transforms
- **Toggle buttons** instead of drag handles
- **Simpler state management** (boolean show/hide)

### Advantages of This Approach
1. **Simpler**: No drag complexity
2. **Predictable**: Always 50/50 or 100/0
3. **Mobile-friendly**: Easy to adapt for small screens
4. **Performance**: CSS transforms are GPU-accelerated

### Implementation Pattern
```typescript
// Component structure
<div className="terminal-layout">
  {/* Left Panel - Files */}
  <div className={cn(
    "left-panel",
    !showFiles && "hidden"
  )}>
    {/* Files content */}
  </div>

  {/* Center - Code Editor */}
  <div className={cn(
    "code-editor",
    !showAssignment && "expanded"
  )}>
    {/* Monaco Editor */}
  </div>

  {/* Right Panel - Assignment/Output */}
  <div className={cn(
    "right-panel",
    !showAssignment && "slide-out"
  )}>
    {/* Task description */}
    {/* Console output */}
  </div>
</div>
```

---

## 10. Console Output Integration

### Output Placement
**Location**: Bottom of right panel (when visible)
**Behavior**: 
- Appears after running code
- Scrollable if output is long
- Persists when toggling panel

### Playback Controls
**Purpose**: Step through code execution
**Icons**:
- Play: Run entire program
- Step: Execute one line at a time
- Skip: Jump to end
- Stop: Halt execution

**Use Case**: Debugging and learning flow control

---

## 11. Success State

### Green Banner
**Trigger**: All tasks completed correctly
**Content**:
- Heading: "Well done, you passed this level :)"
- Button: "Next level" (purple, full-width)
**Position**: Top of right panel
**Animation**: Slide down from top

### Task Checklist
**Format**: 
```
✓ Fix errors in the use of variables. (strikethrough + green check)
```
**Updates**: Real-time as student completes sub-tasks

---

## 12. Comparison: Algorithmics vs Current NIT

| Feature | Algorithmics | Current NIT | Recommendation |
|---------|--------------|-------------|----------------|
| **Panel Toggle** | Slide accordion | Resizable drag | **Adopt slide accordion** |
| **Panel Widths** | Fixed 50/50 or 100/0 | Variable drag | **Use fixed widths** |
| **Toolbar** | Floating icons | Inline buttons | **Use floating toolbar** |
| **Assignment View** | Toggleable panel | Always visible | **Add toggle** |
| **Console** | Integrated in right panel | Separate section | **Integrate in panel** |
| **Success Banner** | Top of right panel | Modal overlay | **Use panel banner** |

---

## 13. Implementation Recommendations for NIT

### High Priority

#### 1. Add Sliding Accordion
```typescript
// Replace react-resizable-panels with CSS transforms
const [showAssignment, setShowAssignment] = useState(true)

<div className={cn(
  "right-panel fixed right-0 w-1/2 h-full bg-white",
  "transition-transform duration-300 ease-in-out",
  !showAssignment && "translate-x-full"
)}>
  {/* Assignment content */}
</div>
```

#### 2. Add Toolbar Icons
- Files icon (toggle left sidebar)
- Assignment icon (toggle right panel)
- Maximize icon (hide right panel)
- Run/Stop/Step controls

#### 3. Integrate Console in Right Panel
- Move console output from bottom to right panel
- Show below task description
- Add playback controls

### Medium Priority

#### 4. Add Success Banner
- Green background
- Appears at top of right panel
- "Next level" button
- Slide-down animation

#### 5. Task Checklist
- Show sub-tasks with checkboxes
- Auto-check when completed
- Strikethrough completed tasks

### Low Priority

#### 6. Polish Details
- Add tooltips to toolbar icons
- Smooth transitions (300ms)
- Keyboard shortcuts (Ctrl+B for files, Ctrl+J for assignment)

---

## 14. CSS Utilities Needed

```css
/* Slide animations */
.slide-in-right {
  animation: slideInRight 0.3s ease-in-out;
}

@keyframes slideInRight {
  from { transform: translateX(100%); }
  to { transform: translateX(0); }
}

.slide-out-right {
  animation: slideOutRight 0.3s ease-in-out;
}

@keyframes slideOutRight {
  from { transform: translateX(0); }
  to { transform: translateX(100%); }
}

/* Panel widths */
.w-editor-split { width: 50%; }
.w-editor-full { width: 100%; }
.w-panel-right { width: 50%; }
```

---

## 15. Key Takeaways

### What Makes This Interface Excellent:

1. **Flexibility**: Students can choose their view
2. **Simplicity**: One-click toggle, no dragging
3. **Predictability**: Always 50/50 or 100/0
4. **Focus**: Can hide distractions when coding
5. **Context**: Can quickly check task requirements

### The "Accordion" Metaphor:
- Panels slide in/out like an accordion
- Only one side panel visible at a time
- Center (editor) always visible
- Smooth, animated transitions

---

## 🎨 Visual Specifications

### Colors
- **Toolbar Icons**: Purple (#8b5cf6)
- **Success Banner**: Green (#22c55e)
- **Editor Background**: Light gray (#f3f4f6)
- **Panel Background**: White (#ffffff)
- **Border**: Light gray (#e5e7eb)

### Spacing
- **Toolbar Height**: ~60px
- **Panel Padding**: 24px
- **Icon Size**: 40x40px
- **Icon Spacing**: 8px gap

### Typography
- **Code**: Consolas, 14px, line-height 1.5
- **Task Title**: Sans-serif, 24px, bold
- **Output**: Monospace, 13px

---

## 🔧 Implementation Checklist for NIT

- [ ] Remove `react-resizable-panels` dependency
- [ ] Add CSS transform-based sliding panels
- [ ] Create toolbar with toggle icons
- [ ] Implement `showAssignment` state
- [ ] Add slide animations (300ms ease-in-out)
- [ ] Move console output to right panel
- [ ] Add success banner component
- [ ] Add task checklist with auto-check
- [ ] Add playback controls (Run, Step, Stop)
- [ ] Test on mobile (stack panels vertically)

---

## 📊 User Experience Benefits

### For Students:
- ✅ **More coding space** when needed
- ✅ **Quick reference** to task requirements
- ✅ **Integrated output** - no context switching
- ✅ **Visual progress** - checkmarks on completed tasks
- ✅ **Immediate feedback** - success banner

### For Teachers:
- ✅ **Structured tasks** - clear sub-goals
- ✅ **Auto-grading** - automatic task checking
- ✅ **Progress tracking** - see which tasks completed

---

## 🎯 Summary

The Algorithmics sliding accordion interface is superior to a traditional resizable split because:

1. **Simpler UX**: Click to toggle vs. drag to resize
2. **Predictable**: Always same widths
3. **Faster**: One click vs. precise dragging
4. **Mobile-ready**: Easy to adapt for touch
5. **Professional**: Smooth animations, polished feel

**Recommendation**: Replace the current NIT resizable panels with this sliding accordion system for a better student experience.

---

**Analysis Date**: 2026-01-08
**URL**: learn.alg.academy/lesson?module=1&lesson=20258&task=46502&level=5
**Screenshot**: [`screenshots/algorithmics-code-terminal.png`](screenshots/algorithmics-code-terminal.png)
