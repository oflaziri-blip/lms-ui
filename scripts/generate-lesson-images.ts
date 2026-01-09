/**
 * Chronos Lesson Asset Generator
 * Uses Google AI Studio (Gemini API) to generate images with Nano Banana / Imagen
 */

import { GoogleGenerativeAI } from '@google/generative-ai';
import * as fs from 'fs';
import * as path from 'path';

// ==================== CONFIGURATION ====================
const API_KEY = process.env.GOOGLE_AI_STUDIO_API_KEY || 'YOUR_API_KEY_HERE';
const MODEL_NAME = 'imagen-3.0-generate-001'; // or 'nano-banana-pro'
const MARKDOWN_FILE = 'public/content/python/slides/lesson_01.md';
const OUTPUT_DIR = 'public/images/lesson01';
const OUTPUT_MARKDOWN = 'public/content/python/slides/lesson_01_ready.md';

// ==================== TYPES ====================
interface VisualPrompt {
    slideNumber: number;
    prompt: string;
}

// ==================== FUNCTIONS ====================

/**
 * Extract all [VISUAL: ...] prompts from markdown
 */
function extractVisualPrompts(markdownPath: string): VisualPrompt[] {
    if (!fs.existsSync(markdownPath)) {
        throw new Error(`Markdown file not found: ${markdownPath}`);
    }

    const content = fs.readFileSync(markdownPath, 'utf-8');

    // Match **[VISUAL: ...]**
    const pattern = /\*\*\[VISUAL:\s*(.*?)\]\*\*/g;
    const matches = [...content.matchAll(pattern)];

    const prompts: VisualPrompt[] = matches.map((match, index) => ({
        slideNumber: index + 1,
        prompt: match[1].trim()
    }));

    console.log(`✓ Found ${prompts.length} visual prompts in markdown`);
    return prompts;
}

/**
 * Generate filename for slide
 */
function generateFilename(slideNum: number): string {
    return `L01_Slide${slideNum.toString().padStart(2, '0')}.png`;
}

/**
 * Check if image already exists
 */
function imageExists(filepath: string): boolean {
    return fs.existsSync(filepath);
}

/**
 * Generate image using Google AI Studio API
 */
async function generateImage(
    genAI: GoogleGenerativeAI,
    prompt: string,
    outputPath: string
): Promise<void> {
    try {
        console.log(`  Generating with ${MODEL_NAME}...`);
        console.log(`  Prompt: ${prompt.substring(0, 80)}...`);

        const model = genAI.getGenerativeModel({ model: MODEL_NAME });

        // Generate image
        const result = await model.generateContent({
            contents: [{
                role: 'user',
                parts: [{
                    text: `Generate image: ${prompt}. Style: 16:9 aspect ratio, high quality, cinematic.`
                }]
            }]
        });

        const response = await result.response;

        // Extract image data (this depends on the actual API response format)
        // You may need to adjust based on what the API returns
        const imageData = response.candidates?.[0]?.content?.parts?.[0];

        if (imageData && 'inlineData' in imageData) {
            const base64Data = imageData.inlineData.data;
            const buffer = Buffer.from(base64Data, 'base64');
            fs.writeFileSync(outputPath, buffer);
            console.log(`  ✓ Saved to: ${outputPath}`);
        } else {
            throw new Error('No image data in response');
        }
    } catch (error: any) {
        console.log(`  ✗ Error: ${error.message}`);
        throw error;
    }
}

/**
 * Update markdown with image tags
 */
function updateMarkdown(
    originalPath: string,
    outputPath: string,
    imageDir: string
): void {
    const content = fs.readFileSync(originalPath, 'utf-8');

    let slideCounter = 1;

    const updatedContent = content.replace(
        /\*\*\[VISUAL:\s*(.*?)\]\*\*/g,
        (match, promptText) => {
            const filename = generateFilename(slideCounter);
            const altText = promptText.length > 100
                ? promptText.substring(0, 100) + '...'
                : promptText;

            slideCounter++;
            return `![${altText}](/${imageDir}/${filename})`;
        }
    );

    fs.writeFileSync(outputPath, updatedContent, 'utf-8');
    console.log(`✓ Updated markdown saved to: ${outputPath}`);
}

/**
 * Main execution
 */
async function main() {
    console.log('='.repeat(60));
    console.log('CHRONOS LESSON ASSET GENERATOR - GOOGLE AI STUDIO');
    console.log('='.repeat(60));
    console.log();

    try {
        // Validate API key
        if (API_KEY === 'YOUR_API_KEY_HERE' || !API_KEY) {
            throw new Error(
                'Please set your Google AI Studio API key!\n' +
                'Either:\n' +
                '1. Set environment variable: GOOGLE_AI_STUDIO_API_KEY\n' +
                '2. Or edit the script and replace YOUR_API_KEY_HERE'
            );
        }

        // Create output directory
        if (!fs.existsSync(OUTPUT_DIR)) {
            fs.mkdirSync(OUTPUT_DIR, { recursive: true });
        }
        console.log(`✓ Output directory ready: ${OUTPUT_DIR}`);
        console.log();

        // Initialize Google AI
        console.log('Initializing Google AI Studio...');
        const genAI = new GoogleGenerativeAI(API_KEY);
        console.log('✓ Google AI initialized');
        console.log();

        // Extract prompts
        console.log('Extracting visual prompts...');
        const prompts = extractVisualPrompts(MARKDOWN_FILE);
        console.log();

        // Generate images
        console.log(`Starting image generation for ${prompts.length} slides...`);
        console.log('-'.repeat(60));

        let generated = 0;
        let skipped = 0;
        let errors = 0;

        for (const { slideNumber, prompt } of prompts) {
            const filename = generateFilename(slideNumber);
            const filepath = path.join(OUTPUT_DIR, filename);

            console.log(`\nSlide ${slideNumber.toString().padStart(2, '0')}: ${filename}`);

            if (imageExists(filepath)) {
                console.log('  ⊘ Skipping (already exists)');
                skipped++;
                continue;
            }

            try {
                await generateImage(genAI, prompt, filepath);
                generated++;

                // Rate limiting - wait 1 second between requests
                await new Promise(resolve => setTimeout(resolve, 1000));
            } catch (error) {
                console.log(`  ✗ Failed`);
                errors++;
            }
        }

        console.log();
        console.log('-'.repeat(60));
        console.log('Generation Summary:');
        console.log(`  ✓ Generated: ${generated}`);
        console.log(`  ⊘ Skipped:   ${skipped}`);
        console.log(`  ✗ Errors:    ${errors}`);
        console.log();

        // Update markdown
        console.log('Updating markdown file...');
        updateMarkdown(MARKDOWN_FILE, OUTPUT_MARKDOWN, 'images/lesson01');
        console.log();

        console.log('='.repeat(60));
        console.log('✓ ASSET GENERATION COMPLETE!');
        console.log('='.repeat(60));
        console.log('\nNext steps:');
        console.log(`1. Review images in: ${OUTPUT_DIR}`);
        console.log(`2. Use updated markdown: ${OUTPUT_MARKDOWN}`);
        console.log(`3. Replace original if satisfied`);

    } catch (error: any) {
        console.log();
        console.log('='.repeat(60));
        console.log(`✗ FATAL ERROR: ${error.message}`);
        console.log('='.repeat(60));
        console.error(error);
        process.exit(1);
    }
}

// Run if executed directly
if (require.main === module) {
    main();
}
