import { CourseGrid } from "@/components/course/CourseGrid"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

// Mock course data
const mockCourses = [
  {
    id: "1",
    title: "Python Core",
    description: "Learn the fundamentals of Python programming, from basic syntax to advanced concepts.",
    duration: "8 weeks",
    students: 245,
    lessons: 32,
  },
  {
    id: "2",
    title: "JavaScript Fundamentals",
    description: "Master JavaScript from scratch. Build interactive web applications with modern ES6+ features.",
    duration: "6 weeks",
    students: 189,
    lessons: 24,
  },
  {
    id: "3",
    title: "React Advanced",
    description: "Deep dive into React hooks, context, performance optimization, and advanced patterns.",
    duration: "10 weeks",
    students: 156,
    lessons: 40,
  },
  {
    id: "4",
    title: "Data Structures & Algorithms",
    description: "Comprehensive guide to data structures and algorithms with practical coding challenges.",
    duration: "12 weeks",
    students: 312,
    lessons: 48,
  },
]

export default function CoursesPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold">Courses</h2>
          <p className="text-muted-foreground mt-1">
            Manage and create courses for your students
          </p>
        </div>
        <Button className="hover:scale-105 transition-transform">
          <Plus className="h-4 w-4 mr-2" strokeWidth={1.5} />
          New Course
        </Button>
      </div>
      <CourseGrid courses={mockCourses} />
    </div>
  )
}
