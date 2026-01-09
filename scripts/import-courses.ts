/**
 * Command-line script to import course data from JSON file
 * 
 * Usage:
 *   npx tsx scripts/import-courses.ts path/to/courses.json
 */

// Load environment variables from .env.local
import { config } from "dotenv"
import { resolve } from "path"
config({ path: resolve(process.cwd(), ".env.local") })

import { readFileSync } from "fs"
import { importCourseData } from "../lib/seedCourses"

async function main() {
  const args = process.argv.slice(2)

  if (args.length === 0) {
    console.error("Usage: npx tsx scripts/import-courses.ts <path-to-json-file>")
    process.exit(1)
  }

  const filePath = args[0]

  try {
    console.log(`Reading JSON file: ${filePath}`)
    const fileContent = readFileSync(filePath, "utf-8")
    const jsonData = JSON.parse(fileContent)

    console.log(`Found ${jsonData.totalCourses || jsonData.courses?.length || 0} courses`)
    console.log("Starting import...")

    const result = await importCourseData(jsonData)

    console.log("\n=== Import Results ===")
    console.log(`Success: ${result.success ? "Yes" : "No"}`)
    console.log(`Courses Created: ${result.coursesCreated}`)
    console.log(`Modules Created: ${result.modulesCreated}`)
    console.log(`Lessons Created: ${result.lessonsCreated}`)
    console.log(`Tasks Created: ${result.tasksCreated}`)

    if (result.errors.length > 0) {
      console.log(`\n=== Errors (${result.errors.length}) ===`)
      result.errors.forEach((error, idx) => {
        console.log(`${idx + 1}. ${error}`)
      })
    }

    if (result.success) {
      console.log("\n✅ Import completed successfully!")
      process.exit(0)
    } else {
      console.log("\n⚠️  Import completed with errors")
      process.exit(1)
    }
  } catch (error: any) {
    console.error("\n❌ Fatal error:", error.message)
    console.error(error.stack)
    process.exit(1)
  }
}

main()
