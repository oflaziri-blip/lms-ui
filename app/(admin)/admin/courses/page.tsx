"use client"

import { CourseGrid } from "@/components/course/CourseGrid"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { useCourses } from "@/lib/hooks/useCourses"
import { Skeleton } from "@/components/ui/skeleton"

export default function CoursesPage() {
  const { courses, loading, error, refetch } = useCourses()

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <Skeleton className="h-10 w-48" />
            <Skeleton className="h-5 w-64" />
          </div>
          <Skeleton className="h-10 w-32" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Skeleton className="h-64" />
          <Skeleton className="h-64" />
          <Skeleton className="h-64" />
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] gap-4">
        <p className="text-lg text-muted-foreground">{error}</p>
        <Button onClick={() => window.location.reload()}>Try Again</Button>
      </div>
    )
  }

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
      <CourseGrid courses={courses} onDelete={refetch} />
    </div>
  )
}
