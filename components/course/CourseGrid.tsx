"use client"

import * as React from "react"
import { CourseCard } from "./CourseCard"
import { Skeleton } from "@/components/ui/skeleton"
import { cn } from "@/lib/utils"

interface Course {
  id: string
  title: string
  description: string | null
  duration?: string
  students?: number
  lessons?: number
}

interface CourseGridProps {
  courses?: Course[]
  loading?: boolean
  className?: string
  onDelete?: () => void
}

export function CourseGrid({ courses, loading = false, className, onDelete }: CourseGridProps) {
  if (loading) {
    return (
      <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", className)}>
        {[...Array(6)].map((_, i) => (
          <CardSkeleton key={i} />
        ))}
      </div>
    )
  }

  if (!courses || courses.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">No courses yet. Create your first course to get started.</p>
      </div>
    )
  }

  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", className)}>
      {courses.map((course) => (
        <CourseCard
          key={course.id}
          id={course.id}
          title={course.title}
          description={course.description || "No description available"}
          duration={course.duration}
          students={course.students}
          lessons={course.lessons}
          onDelete={onDelete}
        />
      ))}
    </div>
  )
}

function CardSkeleton() {
  return (
    <div className="rounded-lg border bg-card p-6 space-y-4">
      <Skeleton className="h-6 w-3/4" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-2/3" />
      <div className="flex gap-4">
        <Skeleton className="h-4 w-20" />
        <Skeleton className="h-4 w-20" />
      </div>
      <Skeleton className="h-10 w-full" />
    </div>
  )
}
