/**
 * Migration Script: Add expectedInputPrompt fields to lesson JSON files
 * 
 * This script scans all lesson JSON files and adds the new expectedInputPrompt
 * field to test cases (defaulting to null). This prepares lessons for the
 * Golden Standard validation system.
 * 
 * Usage: npx ts-node scripts/migrate-lessons-to-strict-validation.ts
 */

import * as fs from 'fs';
import * as path from 'path';

interface TestCase {
    input: string;
    expectedOutput: string;
    expectedInputPrompt?: string | null;
}

interface Exercise {
    id: string;
    type: string;
    testCases?: TestCase[];
    [key: string]: any;
}

interface Lesson {
    lesson_id: string;
    title: string;
    exercises: Exercise[];
    [key: string]: any;
}

const LESSONS_DIR = path.join(process.cwd(), 'public', 'lessons');

function migrateLessonFile(filePath: string): void {
    console.log(`\n📄 Processing: ${path.basename(filePath)}`);

    try {
        // Read the lesson file
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        const lesson: Lesson = JSON.parse(fileContent);

        let modifiedCount = 0;
        let totalTestCases = 0;

        // Process each exercise
        lesson.exercises.forEach((exercise) => {
            if (exercise.testCases && Array.isArray(exercise.testCases)) {
                exercise.testCases.forEach((testCase) => {
                    totalTestCases++;

                    // Add expectedInputPrompt field if it doesn't exist
                    if (!('expectedInputPrompt' in testCase)) {
                        testCase.expectedInputPrompt = null;
                        modifiedCount++;
                    }
                });
            }
        });

        if (modifiedCount > 0) {
            // Write back to file with pretty formatting
            const updatedContent = JSON.stringify(lesson, null, 2);
            fs.writeFileSync(filePath, updatedContent, 'utf-8');

            console.log(`  ✅ Updated ${modifiedCount}/${totalTestCases} test cases`);
        } else {
            console.log(`  ⏭️  Already migrated (${totalTestCases} test cases)`);
        }

    } catch (error) {
        console.error(`  ❌ Error processing file:`, error);
    }
}

function main() {
    console.log('🚀 Starting Lesson Migration to Golden Standard Validation\n');
    console.log('='.repeat(60));

    // Check if lessons directory exists
    if (!fs.existsSync(LESSONS_DIR)) {
        console.error(`❌ Lessons directory not found: ${LESSONS_DIR}`);
        process.exit(1);
    }

    // Get all JSON files in the lessons directory
    const files = fs.readdirSync(LESSONS_DIR)
        .filter(file => file.endsWith('.json'))
        .map(file => path.join(LESSONS_DIR, file));

    if (files.length === 0) {
        console.log('⚠️  No lesson JSON files found');
        process.exit(0);
    }

    console.log(`Found ${files.length} lesson file(s)\n`);

    // Process each file
    files.forEach(migrateLessonFile);

    console.log('\n' + '='.repeat(60));
    console.log('✅ Migration complete!\n');
    console.log('📝 Next steps:');
    console.log('   1. Review the updated JSON files');
    console.log('   2. Add expectedInputPrompt values where needed');
    console.log('   3. Test exercises with the new validation system\n');
}

// Run the migration
main();
