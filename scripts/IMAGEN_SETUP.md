# Chronos Asset Generator - Setup Instructions

## Prerequisites

1. **Google Cloud Account** with Vertex AI API enabled
2. **Python 3.8+** installed
3. **GCP Project** with billing enabled

## Installation Steps

### 1. Install Dependencies

```bash
pip install google-cloud-aiplatform
```

### 2. Authenticate with Google Cloud

```bash
# Install gcloud CLI if not already installed
# Then authenticate:
gcloud auth application-default login
```

### 3. Enable Vertex AI API

```bash
gcloud services enable aiplatform.googleapis.com --project=YOUR_PROJECT_ID
```

### 4. Configure the Script

Edit `scripts/generate_assets_imagen.py`:

```python
PROJECT_ID = "your-actual-project-id"  # Change this!
```

### 5. Run the Script

```bash
cd c:/Users/ISSAMK/lms-ui
python scripts/generate_assets_imagen.py
```

## What the Script Does

1. ✅ Scans `lesson_01.md` for all `[VISUAL: ...]` prompts
2. ✅ Checks if images already exist (skips if found)
3. ✅ Generates missing images using Imagen 3 (16:9 aspect ratio)
4. ✅ Saves to `public/images/lesson01/L01_Slide01.png` etc.
5. ✅ Creates `lesson_01_ready.md` with image tags inserted

## Expected Output

```
CHRONOS LESSON ASSET GENERATOR - IMAGEN 3
============================================================

✓ Output directory ready: public/images/lesson01
✓ Vertex AI initialized
✓ Found 30 visual prompts in markdown

Starting image generation for 30 slides...
------------------------------------------------------------

Slide 01: L01_Slide01.png
  Generating with Imagen 3...
  ✓ Saved to: public/images/lesson01/L01_Slide01.png

Slide 02: L01_Slide02.png
  ⊘ Skipping (already exists)

...

Generation Summary:
  ✓ Generated: 28
  ⊘ Skipped:   2
  ✗ Errors:    0

✓ Updated markdown saved to: lesson_01_ready.md
✓ ASSET GENERATION COMPLETE!
```

## Cost Estimate

- **Imagen 3**: ~$0.020 per image
- **30 images**: ~$0.60 total
- **Generation time**: ~2-3 minutes

## Troubleshooting

### Error: "Project ID not set"
→ Edit script and replace `YOUR_PROJECT_ID`

### Error: "Permission denied"
→ Run: `gcloud auth application-default login`

### Error: "Vertex AI API not enabled"
→ Enable at: https://console.cloud.google.com/apis/library/aiplatform.googleapis.com

### Error: "Safety filter blocked"
→ Some prompts may be blocked. Review and adjust prompt wording.

## Next Steps

After generation:
1. Review images in `public/images/lesson01/`
2. Replace `lesson_01.md` with `lesson_01_ready.md`
3. Refresh slides viewer to see images!
