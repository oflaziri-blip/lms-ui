# 🤖 GITHUB AUTOMATION & REPO PUSH GUIDE
## For Chronos LMS Content Generation AI

---

## 📋 OBJECTIVE
This document explains how you should manage the repository and push your content (slides, tasks, seeds) directly to the LMS. Proper Git hygiene is required to ensure smooth integration and to avoid breaking the production site.

---

## 🔑 1. AUTHENTICATION & SETUP

Before your first push, ensure your environment is configured:

### **Git Identity**
```bash
git config --global user.name "Chronos-Content-AI"
git config --global user.email "ai-content-generator@chronos-lms.com"
```

### **Authentication**
If you are running in a restricted environment, use a **Personal Access Token (PAT)**:
- Set your token as an environment variable: `GITHUB_TOKEN`
- Use the following format for the remote URL (if prompted):
  `https://[YOUR_TOKEN]@github.com/ISSAMK/lms-ui.git`

---

## 🌳 2. BRANCHING STRATEGY

To keep the repository clean, follow the **Batch-Branch System**:

1. **Pull the latest changes** from `main` before starting every batch.
2. **Create a new branch** for each batch:
   - Format: `content/batch-[X]-module-[Y]`
   - Example: `git checkout -b content/batch-1-module-1`
3. **Push to your branch** and let me (the Architect AI) know when it's ready for review.
4. **Merge to main** will be handled after verification (or you can push directly to `main` IF explicitly instructed by the USER).

---

## 💾 3. THE COMMIT CONVENTION

Use descriptive, atomic commits. Do not commit 50 files in one go.

**Commit Messages (Conventional Commits):**
- `feat(content): Add slides for M1 L04`
- `feat(tasks): Implement 17 tasks for M1 L02`
- `fix(content): Correct typo in L03 slide 5`
- `db(seeds): Add Supabase SQL seeds for Module 1`

**Example Workflow:**
```bash
# After finish Lesson 04 slides
git add components/slides/Lesson04New*
git commit -m "feat(content): Add complete slides for Lesson 04 (22 slides)"

# After finishing tasks
git add public/lessons/lesson_04.json
git commit -m "feat(tasks): Add 17 nested construction tasks"

# Push the batch
git push origin content/batch-1-module-1
```

---

## 🗄️ 4. SUPABASE SEED MANAGEMENT

Every lesson requires database metadata to be visible in the LMS.

1. **Location:** Put your SQL seed files in `supabase/seeds/`.
2. **Naming:** `[module_number]_[lesson_number]_[lesson_title].sql`
3. **Content:** Should include `INSERT` statements for `modules` (if new) and `lessons` tables.

**Example Seed Step:**
```bash
git add supabase/seeds/01_04_nested_constructions.sql
git commit -m "db(seeds): Add metadata for Module 1 Lesson 4"
```

---

## 📁 5. DIRECTORY MAP (WHERE TO PUSH)

| Content Type | Repository Path |
|--------------|-----------------|
| **Slides (React)** | `components/slides/` |
| **Tasks (JSON)** | `public/lessons/` |
| **Test Pages** | `app/test-[lesson-name]/` |
| **DB Seeds** | `supabase/seeds/` |
| **API Routes** | `app/api/` |

---

## 🛠️ 6. THE "AI PUSH" CHECKLIST

Before every `git push`, run these checks:

1. **Linting Check:** Does the code compile? (No major TS errors in the new files).
2. **JSON Validation:** Is the task JSON valid?
3. **Path Check:** Are imports absolute or relative to project root? (Use `@/` for components).
4. **Supabase Check:** Did I include the SQL seed for this lesson?
5. **F-String Check:** Did I accidentally use an f-string in Modules 1-3? (REPLACE with `+` or commas).

---

## 🚀 PUSHING THE CONTENT

When a batch is ready, execute:

```bash
git add .
git commit -m "feat(batch-X): Complete lessons A & B (Slides, Tasks, Seeds)"
git push origin content/batch-X-module-Y
```

---

## 💬 POST-PUSH NOTIFICATION

After pushing, provide the following details to the User/Architect AI:

```
🚀 BATCH COMPLETE & PUSHED

Branch: content/batch-1-module-1
Lessons: M1 L02, M1 L04
Supabase Seeds included: YES

Check the test pages:
- http://localhost:3000/test-improved-slides (Lesson 02)
- http://localhost:3000/test-lesson04 (Lesson 04)
```

**I will then perform the final merge and integration.** 🎓🚀
