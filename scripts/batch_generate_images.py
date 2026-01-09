"""
Simple Batch Image Generator for Chronos Lesson 01
Reads prompts from BATCH_PROMPTS.txt and generates images using Vertex AI Imagen 3
"""

import os
import re
from vertexai.preview.vision_models import ImageGenerationModel
import vertexai

# Configuration
PROJECT_ID = "images-483722"
LOCATION = "us-central1"
MODEL_NAME = "imagen-3.0-generate-001"
PROMPTS_FILE = "scripts/BATCH_PROMPTS.txt"
OUTPUT_DIR = "public/images/lesson01"

def extract_prompts_from_file(filepath):
    """Extract slide number and prompt from BATCH_PROMPTS.txt"""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Split by slide headers
    sections = content.split('# ====')
    prompts = []
    
    for section in sections:
        if not section.strip():
            continue
            
        # Extract slide number from "SLIDE XX:"
        slide_match = re.search(r'SLIDE (\d+):', section)
        if not slide_match:
            continue
        
        slide_num = int(slide_match.group(1))
        
        # Extract filename
        filename_match = re.search(r'(L01_Slide\d+.*?\.png)', section)
        if not filename_match:
            continue
        
        filename = filename_match.group(1)
        
        # Extract prompt (everything after filename line until next section)
        lines = section.split('\n')
        prompt_lines = []
        start_collecting = False
        
        for line in lines:
            if '.png' in line:
                start_collecting = True
                continue
            if start_collecting and line.strip() and not line.startswith('#') and not line.startswith('='):
                prompt_lines.append(line.strip())
        
        if prompt_lines:
            prompt = ' '.join(prompt_lines)
            prompts.append((slide_num, filename, prompt))
    
    return sorted(prompts, key=lambda x: x[0])

def generate_image(model, prompt, output_path):
    """Generate image using Imagen 3"""
    try:
        print(f"  Generating with Imagen 3...")
        print(f"  Prompt: {prompt[:80]}...")
        
        response = model.generate_images(
            prompt=prompt,
            number_of_images=1,
            aspect_ratio="16:9",
            safety_filter_level="block_some",
            person_generation="allow_adult",
            add_watermark=False,
        )
        
        if response and len(response) > 0:
            response[0].save(location=output_path)
            print(f"  ✓ Saved to: {output_path}")
            return True
        else:
            print(f"  ✗ No image returned from API")
            return False
            
    except Exception as e:
        print(f"  ✗ Error: {str(e)}")
        return False

def main():
    print("=" * 60)
    print("CHRONOS LESSON 01 - BATCH IMAGE GENERATOR")
    print("=" * 60)
    print()
    
    # Create output directory
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    print(f"✓ Output directory: {OUTPUT_DIR}")
    print()
    
    # Initialize Vertex AI
    print(f"Initializing Vertex AI...")
    print(f"  Project: {PROJECT_ID}")
    print(f"  Location: {LOCATION}")
    vertexai.init(project=PROJECT_ID, location=LOCATION)
    print("✓ Vertex AI initialized")
    print()
    
    # Load model
    print(f"Loading {MODEL_NAME}...")
    model = ImageGenerationModel.from_pretrained(MODEL_NAME)
    print("✓ Model loaded")
    print()
    
    # Extract prompts
    print(f"Extracting prompts from {PROMPTS_FILE}...")
    prompts = extract_prompts_from_file(PROMPTS_FILE)
    print(f"✓ Found {len(prompts)} prompts")
    print()
    
    # Generate images
    print(f"Starting image generation...")
    print("-" * 60)
    
    generated = 0
    skipped = 0
    errors = 0
    
    for slide_num, filename, prompt in prompts:
        filepath = os.path.join(OUTPUT_DIR, filename)
        
        print(f"\nSlide {slide_num:02d}: {filename}")
        
        # Check if exists
        if os.path.exists(filepath):
            print(f"  ⊘ Skipping (already exists)")
            skipped += 1
            continue
        
        # Generate
        if generate_image(model, prompt, filepath):
            generated += 1
        else:
            errors += 1
        
        # Rate limiting - wait between requests
        if generated < len(prompts):
            import time
            time.sleep(2)  # 2 second delay between API calls
    
    print()
    print("-" * 60)
    print("Generation Summary:")
    print(f"  ✓ Generated: {generated}")
    print(f"  ⊘ Skipped:   {skipped}")
    print(f"  ✗ Errors:    {errors}")
    print()
    
    print("=" * 60)
    print("✓ BATCH GENERATION COMPLETE!")
    print("=" * 60)
    print(f"\nImages saved to: {OUTPUT_DIR}")
    print("Refresh your slides viewer to see the images!")

if __name__ == "__main__":
    main()
