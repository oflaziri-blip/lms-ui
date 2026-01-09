# Google AI Studio Image Generator - Setup

## Quick Start

### 1. Get Your API Key

1. Go to **Google AI Studio**: https://aistudio.google.com/app/apikey
2. Click **"Get API Key"** or **"Create API Key"**
3. Copy your API key

### 2. Set API Key

**Option A: Environment Variable (Recommended)**
```bash
# PowerShell
$env:GOOGLE_AI_STUDIO_API_KEY="your-api-key-here"

# Then run script
npx tsx scripts/generate-lesson-images.ts
```

**Option B: Direct in Script**
Edit `scripts/generate-lesson-images.ts` line 12:
```typescript
const API_KEY = 'your-api-key-here'; // Paste your key here
```

### 3. Run the Script

```bash
npx tsx scripts/generate-lesson-images.ts
```

## What It Does

1. ✅ Scans `lesson_01.md` for `[VISUAL: ...]` prompts
2. ✅ Checks if images exist (skips duplicates)
3. ✅ Generates 30 images using **Nano Banana** or **Imagen 4**
4. ✅ Saves to `public/images/lesson01/`
5. ✅ Creates `lesson_01_ready.md` with image tags

## Expected Output

```
CHRONOS LESSON ASSET GENERATOR - GOOGLE AI STUDIO
============================================================

✓ Output directory ready: public/images/lesson01
✓ Google AI initialized
✓ Found 30 visual prompts in markdown

Starting image generation for 30 slides...
------------------------------------------------------------

Slide 01: L01_Slide01.png
  Generating with imagen-3.0-generate-001...
  Prompt: Cinematic title text "OPERATION CHRONOS: SYSTEM BOOT"...
  ✓ Saved to: public/images/lesson01/L01_Slide01.png

Slide 02: L01_Slide02.png
  Generating with imagen-3.0-generate-001...
  ✓ Saved to: public/images/lesson01/L01_Slide02.png

...

✓ ASSET GENERATION COMPLETE!
```

## Cost

- **Google AI Studio**: Free tier available!
- Check current pricing at: https://ai.google.dev/pricing

## Troubleshooting

**Error: "API key not set"**
→ Set the `GOOGLE_AI_STUDIO_API_KEY` environment variable or edit script

**Error: "Model not found"**
→ Try changing `MODEL_NAME` to `'nano-banana-pro'` or `'imagen-4'`

**Images not generating**
→ Check API quota limits in Google AI Studio console

## Next Steps

1. Run the script to generate all 30 images
2. Review generated images in `public/images/lesson01/`
3. Replace `lesson_01.md` with `lesson_01_ready.md`
4. Refresh slides viewer to see images! 🎨
