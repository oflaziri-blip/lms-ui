import { createClient } from "@supabase/supabase-js"
import * as dotenv from "dotenv"

// Load environment variables
dotenv.config({ path: ".env.local" })

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!

if (!supabaseUrl || !supabaseServiceKey) {
  console.error("Missing environment variables!")
  console.error("NEXT_PUBLIC_SUPABASE_URL:", supabaseUrl ? "✓" : "✗")
  console.error("SUPABASE_SERVICE_ROLE_KEY:", supabaseServiceKey ? "✓" : "✗")
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseServiceKey)

async function diagnoseEnrollments() {
  console.log("🔍 Diagnosing Enrollment Issues\n")

  // 1. Check if enrollments exist
  const { data: allEnrollments, error: allError } = await supabase
    .from("enrollments")
    .select("*")
  
  console.log("1️⃣ All Enrollments (raw):")
  console.log(`   Found: ${allEnrollments?.length || 0} enrollments`)
  if (allError) console.error("   Error:", allError)
  console.log("   Data:", JSON.stringify(allEnrollments, null, 2))
  console.log()

  // 2. Check enrollments with foreign key join
  const { data: enrollmentsWithStudents, error: joinError } = await supabase
    .from("enrollments")
    .select(`
      *,
      student:users!enrollments_student_id_fkey(id, name, email, role, status)
    `)
  
  console.log("2️⃣ Enrollments with Student Join:")
  console.log(`   Found: ${enrollmentsWithStudents?.length || 0} enrollments`)
  if (joinError) console.error("   Error:", joinError)
  console.log("   Data:", JSON.stringify(enrollmentsWithStudents, null, 2))
  console.log()

  // 3. Check if students exist
  if (allEnrollments && allEnrollments.length > 0) {
    const studentIds = allEnrollments.map(e => e.student_id)
    const { data: students, error: studentsError } = await supabase
      .from("users")
      .select("id, name, email, role, status")
      .in("id", studentIds)
    
    console.log("3️⃣ Students from Enrollments:")
    console.log(`   Found: ${students?.length || 0} students`)
    if (studentsError) console.error("   Error:", studentsError)
    console.log("   Data:", JSON.stringify(students, null, 2))
    console.log()

    // 4. Check for missing students
    const foundStudentIds = new Set(students?.map(s => s.id) || [])
    const missingStudentIds = studentIds.filter(id => !foundStudentIds.has(id))
    
    if (missingStudentIds.length > 0) {
      console.log("⚠️  Missing Students:")
      console.log("   Student IDs in enrollments but not in users table:")
      console.log("   ", missingStudentIds)
    } else {
      console.log("✅ All students found in users table")
    }
  }

  console.log("\n🏁 Diagnosis Complete")
}

diagnoseEnrollments().catch(console.error)
