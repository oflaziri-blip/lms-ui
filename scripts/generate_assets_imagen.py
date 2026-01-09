"""
Chronos Lesson Asset Generator - Imagen 3
Automatically generates visual assets for lesson slides using Google Vertex AI Imagen 3
"""

import os
import re
from pathlib import Path
from typing import List, Tuple

try:
    from vertexai.preview.vision_models import ImageGenerationModel
    import vertexai
except ImportError:
    print("ERROR: vertexai package not installed.")
    print("Install with: pip install google-cloud-aiplatform")
    exit(1)

# ==================== CONFIGURATION ====================
PROJECT_ID = "images-483722"  # Your GCP project ID
LOCATION = "us-central1"
MODEL_NAME = "imagen-3.0-generate-001"

# Paths
MARKDOWN_FILE = "public/content/python/slides/lesson_01.md"
OUTPUT_DIR = "public/images/lesson01"
OUTPUT_MARKDOWN = "public/content/python/slides/lesson_01_ready.md"

# ==================== FUNCTIONS ====================

def extract_visual_prompts(markdown_path: str) -> List[Tuple[int, str]]:
    """
    Extract all [VISUAL: ...] prompts from markdown file.
    Returns: List of (slide_number, prompt_text)
    """
    if not os.path.exists(markdown_path):
        raise FileNotFoundError(f"Markdown file not found: {markdown_path}")
    
    with open(markdown_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Pattern to match [VISUAL: ...]
    pattern = r'\*\*\[VISUAL:\s*(.*?)\]\*\*'
    matches = re.findall(pattern, content)
    
    # Assign slide numbers sequentially
    prompts = [(i + 1, prompt.strip()) for i, prompt in enumerate(matches)]
    
    print(f"✓ Found {len(prompts)} visual prompts in markdown")
    return prompts


def generate_filename(slide_num: int) -> str:
    """Generate filename for slide image"""
    return f"L01_Slide{slide_num:02d}.png"


def check_image_exists(filepath: str) -> bool:
    """Check if image file already exists"""
    return os.path.exists(filepath)


def initialize_vertex_ai():
    """Initialize Vertex AI with project and location"""
    if PROJECT_ID == "YOUR_PROJECT_ID":
        raise ValueError(
            "\n❌ ERROR: Please set your GCP Project ID!\n"
            "Edit the script and replace 'YOUR_PROJECT_ID' with your actual project ID."
        )
    
    print(f"Initializing Vertex AI...")
    print(f"  Project: {PROJECT_ID}")
    print(f"  Location: {LOCATION}")
    
    vertexai.init(project=PROJECT_ID, location=LOCATION)
    print("✓ Vertex AI initialized")


def generate_image_with_imagen(prompt: str, output_path: str):
    """
    Generate image using Imagen 3 and save to file
    """
    try:
        # Load the model
        model = ImageGenerationModel.from_pretrained(MODEL_NAME)
        
        print(f"  Generating with Imagen 3...")
        print(f"  Prompt preview: {prompt[:80]}...")
        
        # Generate image
        response = model.generate_images(
            prompt=prompt,
            number_of_images=1,
            aspect_ratio="16:9",
            safety_filter_level="block_some",
            person_generation="allow_adult",
            add_watermark=False,
        )
        
        # Save the first (and only) image
        if response and len(response) > 0:
            response[0].save(location=output_path)
            print(f"  ✓ Saved to: {output_path}")
        else:
            print(f"  ✗ No image returned from API")
            
    except Exception as e:
        print(f"  ✗ Error generating image: {str(e)}")
        raise


def update_markdown_with_images(
    original_path: str,
    output_path: str,
    image_dir: str
):
    """
    Create new markdown file with [VISUAL: ...] replaced by image tags
    """
    with open(original_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Pattern to match [VISUAL: ...]
    pattern = r'\*\*\[VISUAL:\s*(.*?)\]\*\*'
    
    slide_counter = 1
    
    def replacement(match):
        nonlocal slide_counter
        prompt_text = match.group(1).strip()
        filename = generate_filename(slide_counter)
        
        # Create markdown image tag with alt text
        alt_text = prompt_text[:100] + "..." if len(prompt_text) > 100 else prompt_text
        image_tag = f'![{alt_text}](/{image_dir}/{filename})'
        
        slide_counter += 1
        return image_tag
    
    # Replace all [VISUAL: ...] with image tags
    updated_content = re.sub(pattern, replacement, content)
    
    # Write to new file
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(updated_content)
    
    print(f"✓ Updated markdown saved to: {output_path}")


def main():
    """Main execution flow"""
    print("=" * 60)
    print("CHRONOS LESSON ASSET GENERATOR - IMAGEN 3")
    print("=" * 60)
    print()
    
    try:
        # Step 1: Create output directory if needed
        os.makedirs(OUTPUT_DIR, exist_ok=True)
        print(f"✓ Output directory ready: {OUTPUT_DIR}")
        print()
        
        # Step 2: Initialize Vertex AI
        initialize_vertex_ai()
        print()
        
        # Step 3: Extract prompts from markdown
        print("Extracting visual prompts from markdown...")
        prompts = extract_visual_prompts(MARKDOWN_FILE)
        print()
        
        # Step 4: Generate images
        print(f"Starting image generation for {len(prompts)} slides...")
        print("-" * 60)
        
        generated_count = 0
        skipped_count = 0
        error_count = 0
        
        for slide_num, prompt in prompts:
            filename = generate_filename(slide_num)
            filepath = os.path.join(OUTPUT_DIR, filename)
            
            print(f"\nSlide {slide_num:02d}: {filename}")
            
            # Check if already exists
            if check_image_exists(filepath):
                print(f"  ⊘ Skipping (already exists)")
                skipped_count += 1
                continue
            
            # Generate image
            try:
                generate_image_with_imagen(prompt, filepath)
                generated_count += 1
            except Exception as e:
                print(f"  ✗ Failed: {e}")
                error_count += 1
        
        print()
        print("-" * 60)
        print(f"Generation Summary:")
        print(f"  ✓ Generated: {generated_count}")
        print(f"  ⊘ Skipped:   {skipped_count}")
        print(f"  ✗ Errors:    {error_count}")
        print()
        
        # Step 5: Update markdown file
        print("Updating markdown file with image tags...")
        update_markdown_with_images(
            MARKDOWN_FILE,
            OUTPUT_MARKDOWN,
            "images/lesson01"
        )
        print()
        
        print("=" * 60)
        print("✓ ASSET GENERATION COMPLETE!")
        print("=" * 60)
        print(f"\nNext steps:")
        print(f"1. Review generated images in: {OUTPUT_DIR}")
        print(f"2. Use updated markdown: {OUTPUT_MARKDOWN}")
        print(f"3. Replace original lesson_01.md if satisfied")
        
    except Exception as e:
        print()
        print("=" * 60)
        print(f"✗ FATAL ERROR: {str(e)}")
        print("=" * 60)
        import traceback
        traceback.print_exc()
        exit(1)


if __name__ == "__main__":
    main()
