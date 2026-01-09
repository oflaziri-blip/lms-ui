# Automated Image Generation with Puppeteer

## What This Does

**Fully automated browser script** that:
1. Opens Google AI Studio in a browser
2. Logs in with your Google AI Ultra account
3. Automatically enters each of the 30 prompts
4. Generates and downloads each image
5. Saves with correct filenames to `public/images/lesson01/`

## How to Run

### Step 1: Install Puppeteer (if not done)
```bash
npm install puppeteer
```

### Step 2: Run the Script
```bash
npx tsx scripts/auto-generate-with-ai-studio.ts
```

### Step 3: Manual Setup (One-Time)
When the browser opens:
1. **Log in** to Google AI Studio if needed
2. Navigate to **Images** tab
3. Select **"Nano Banana Pro"**
4. Set **aspect ratio to 16:9**
5. **Press ENTER** in the terminal

### Step 4: Watch It Work!
The script will:
- Enter each prompt automatically
- Click generate
- Wait for image
- Download and save
- Move to next prompt

**Total time**: ~20-25 minutes for all 30 images

## Note

This script may need adjustments based on AI Studio's UI. If it doesn't work perfectly, the selectors in the script may need to be updated to match the current AI Studio interface.

## Simple Alternative

If browser automation doesn't work smoothly, the manual approach with `BATCH_PROMPTS.txt` is still fastest and most reliable.
