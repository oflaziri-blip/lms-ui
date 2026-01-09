/**
 * Automated Image Generator using Google AI Studio
 * Uses Puppeteer to automate browser interactions with AI Studio
 */

import puppeteer from 'puppeteer';
import * as fs from 'fs';
import * as path from 'path';

const OUTPUT_DIR = 'public/images/lesson01';
const PROMPTS_FILE = 'scripts/BATCH_PROMPTS.txt';
const AI_STUDIO_URL = 'https://aistudio.google.com/';

// Extract prompts from BATCH_PROMPTS.txt
function extractPrompts(): Array<{ slideNum: number; filename: string; prompt: string }> {
    const content = fs.readFileSync(PROMPTS_FILE, 'utf-8');
    const lines = content.split('\n');
    const prompts: Array<{ slideNum: number; filename: string; prompt: string }> = [];

    let currentSlide: number | null = null;
    let currentFilename: string | null = null;
    let currentPrompt: string | null = null;

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();

        // Skip empty lines and instructions section
        if (!line || line.startsWith('INSTRUCTIONS:') || line.startsWith('Total:') || line.startsWith('Estimated')) {
            continue;
        }

        // Match slide number and filename: # SLIDE 01: L01_Slide01_TitleCard.png
        const slideMatch = line.match(/^#\s+SLIDE\s+(\d+):\s+(L01_Slide\d+.*?\.png)/);
        if (slideMatch) {
            // Save previous prompt if exists
            if (currentSlide !== null && currentFilename && currentPrompt) {
                prompts.push({
                    slideNum: currentSlide,
                    filename: currentFilename,
                    prompt: currentPrompt.trim()
                });
            }

            // Start new prompt
            currentSlide = parseInt(slideMatch[1]);
            currentFilename = slideMatch[2];
            currentPrompt = null;
            continue;
        }

        // Skip separator lines
        if (line.startsWith('#') && line.includes('====')) {
            continue;
        }

        // This is the prompt line
        if (!line.startsWith('#') && line.length > 20 && currentSlide !== null) {
            currentPrompt = line;
        }
    }

    // Don't forget the last prompt
    if (currentSlide !== null && currentFilename && currentPrompt) {
        prompts.push({
            slideNum: currentSlide,
            filename: currentFilename,
            prompt: currentPrompt.trim()
        });
    }

    return prompts.sort((a, b) => a.slideNum - b.slideNum);
}

async function main() {
    console.log('='.repeat(60));
    console.log('AUTOMATED IMAGE GENERATOR - GOOGLE AI STUDIO');
    console.log('='.repeat(60));
    console.log();

    // Create output directory
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    }
    console.log(`✓ Output directory: ${OUTPUT_DIR}`);
    console.log();

    // Extract prompts
    console.log('Extracting prompts...');
    const prompts = extractPrompts();
    console.log(`✓ Found ${prompts.length} prompts`);
    console.log();

    // Launch browser
    console.log('Launching browser...');
    const browser = await puppeteer.launch({
        headless: false, // Show browser so you can see the process
        defaultViewport: { width: 1920, height: 1080 }
    });

    const page = await browser.newPage();
    console.log('✓ Browser launched');
    console.log();

    // Navigate to AI Studio
    console.log(`Opening Google AI Studio...`);
    await page.goto(AI_STUDIO_URL);
    console.log('✓ AI Studio opened');
    console.log();

    console.log('⚠️  IMPORTANT:');
    console.log('1. Please LOG IN to Google AI Studio if needed');
    console.log('2. Navigate to the IMAGE GENERATION section');
    console.log('3. Select "Nano Banana Pro" model');
    console.log('4. Set aspect ratio to 16:9');
    console.log('5. Press ENTER here when ready...');
    console.log();

    // Wait for user to set up
    await new Promise<void>((resolve) => {
        process.stdin.once('data', () => resolve());
    });

    console.log('✓ Starting automated generation...');
    console.log('-'.repeat(60));

    let generated = 0;
    let skipped = 0;

    for (const { slideNum, filename, prompt } of prompts) {
        const filepath = path.join(OUTPUT_DIR, filename);

        console.log(`\nSlide ${slideNum.toString().padStart(2, '0')}: ${filename}`);

        // Check if already exists
        if (fs.existsSync(filepath)) {
            console.log('  ⊘ Skipping (already exists)');
            skipped++;
            continue;
        }

        try {
            console.log(`  Prompt: ${prompt.substring(0, 80)}...`);
            console.log('  Generating...');

            // Find the prompt input field (you'll need to inspect AI Studio to get the right selector)
            const promptSelector = 'textarea[placeholder*="prompt" i], textarea[aria-label*="prompt" i], div[contenteditable="true"]';

            // Clear and enter prompt
            await page.waitForSelector(promptSelector, { timeout: 5000 });
            await page.click(promptSelector);
            await page.keyboard.down('Control');
            await page.keyboard.press('A');
            await page.keyboard.up('Control');
            await page.keyboard.press('Backspace');
            await page.type(promptSelector, prompt);

            // Click generate button (adjust selector based on AI Studio UI)
            const generateButtonSelector = 'button:has-text("Run"), button:has-text("Generate"), button[aria-label*="generate" i]';
            await page.click(generateButtonSelector);

            // Wait for image to be generated (adjust wait time as needed)
            console.log('  Waiting for generation...');
            await page.waitForTimeout(15000); // Wait 15 seconds for generation

            // Download the image (this will depend on AI Studio's UI)
            // You may need to adjust this selector
            const downloadSelector = 'img[alt*="generated" i], img[src*="blob:"]';
            const imageElement = await page.$(downloadSelector);

            if (imageElement) {
                // Get the image source
                const imageSrc = await page.evaluate((img) => img.src, imageElement);

                // Download the image
                const response = await page.goto(imageSrc);
                const buffer = await response!.buffer();

                // Save to file
                fs.writeFileSync(filepath, buffer);
                console.log(`  ✓ Saved to: ${filepath}`);
                generated++;
            } else {
                console.log('  ✗ Could not find generated image');
            }

            // Small delay between generations
            await page.waitForTimeout(2000);

        } catch (error: any) {
            console.log(`  ✗ Error: ${error.message}`);
        }
    }

    console.log();
    console.log('-'.repeat(60));
    console.log('Generation Summary:');
    console.log(`  ✓ Generated: ${generated}`);
    console.log(`  ⊘ Skipped:   ${skipped}`);
    console.log();

    console.log('✓ GENERATION COMPLETE!');
    console.log('Closing browser in 5 seconds...');

    await page.waitForTimeout(5000);
    await browser.close();
}

main().catch(console.error);
