"use client"

import * as React from "react"
import { useParams, useRouter } from "next/navigation"
import { useCourseDetails } from "@/lib/hooks/useCourseDetails"
import { useAuth } from "@/lib/hooks/useAuth"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { ArrowLeft, BookOpen, ChevronRight, FileText, Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"

export default function CourseDetailsPage() {
  const params = useParams()
  const router = useRouter()
  const courseId = params.id as string
  const { course, loading, error } = useCourseDetails(courseId)

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <Skeleton className="h-10 w-10" />
          <div className="space-y-2 flex-1">
            <Skeleton className="h-8 w-64" />
            <Skeleton className="h-4 w-96" />
          </div>
        </div>
        <Card>
          <CardHeader>
            <Skeleton className="h-6 w-48 mb-2" />
            <Skeleton className="h-4 w-full" />
          </CardHeader>
          <CardContent className="space-y-4">
            {[...Array(5)].map((_, i) => (
              <Skeleton key={i} className="h-16 w-full" />
            ))}
          </CardContent>
        </Card>
      </div>
    )
  }

  if (error) {
    return (
      <div className="space-y-6">
        <Button
          variant="ghost"
          onClick={() => router.push("/admin/courses")}
          className="gap-2"
        >
          <ArrowLeft className="h-4 w-4" strokeWidth={1.5} />
          Back to Courses
        </Button>
        <Alert variant="destructive">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      </div>
    )
  }

  if (!course) {
    return (
      <div className="space-y-6">
        <Button
          variant="ghost"
          onClick={() => router.push("/admin/courses")}
          className="gap-2"
        >
          <ArrowLeft className="h-4 w-4" strokeWidth={1.5} />
          Back to Courses
        </Button>
        <Alert>
          <AlertDescription>Course not found</AlertDescription>
        </Alert>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => router.push("/admin/courses")}
        >
          <ArrowLeft className="h-5 w-5" strokeWidth={1.5} />
        </Button>
        <div className="flex-1">
          <h1 className="text-3xl font-bold">{course.title}</h1>
          {course.description && (
            <p className="text-muted-foreground mt-1">{course.description}</p>
          )}
        </div>
      </div>

      {/* Course Info */}
      <div className="flex items-center gap-6 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <BookOpen className="h-4 w-4" strokeWidth={1.5} />
          <span>{course.lessons_count} lessons</span>
        </div>
        {course.duration && (
          <div className="flex items-center gap-2">
            <FileText className="h-4 w-4" strokeWidth={1.5} />
            <span>{course.duration}</span>
          </div>
        )}
      </div>

      {/* Lessons List */}
      <Card>
        <CardHeader>
          <CardTitle>Lessons</CardTitle>
          <CardDescription>
            {course.lessons.length === 0
              ? "No lessons available yet"
              : `${course.lessons.length} lesson${course.lessons.length !== 1 ? "s" : ""} in this course`}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {course.lessons.length === 0 ? (
            <div className="text-center py-12 text-muted-foreground">
              <BookOpen className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>No lessons have been added to this course yet.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {/* Lessons grouped by module */}
              {course.lessonsByModule.map(({ module, lessons }) => (
                <div key={module.id} className="space-y-2">
                  <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">
                    {module.title}
                  </h3>
                  {lessons.map((lesson) => (
                    <LessonItem key={lesson.id} lesson={lesson} courseId={course.id} />
                  ))}
                </div>
              ))}

              {/* Ungrouped lessons (no module) */}
              {course.ungroupedLessons.length > 0 && (
                <div className="space-y-2">
                  {course.lessonsByModule.length > 0 && (
                    <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">
                      Other Lessons
                    </h3>
                  )}
                  {course.ungroupedLessons.map((lesson) => (
                    <LessonItem key={lesson.id} lesson={lesson} courseId={course.id} />
                  ))}
                </div>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

interface LessonItemProps {
  lesson: {
    id: string
    external_id: string
    title: string
    description: string | null
    order_index: number
    is_active: boolean
  }
  courseId: string
}

function LessonItem({ lesson, courseId }: LessonItemProps) {
  const router = useRouter()
  const { user } = useAuth()
  const [isHovered, setIsHovered] = React.useState(false)

  const handleClick = () => {
    // Role-based navigation
    if (user?.role === "admin" || user?.role === "teacher") {
      // Teachers and admins go to teacher hub
      router.push(`/teacher/lesson/${lesson.id}`)
    } else {
      // Students go to lesson runner
      router.push(`/python/${lesson.external_id}`)
    }
  }

  return (
    <div
      className={cn(
        "flex items-center gap-4 p-4 rounded-lg border bg-card transition-all duration-200 cursor-pointer",
        "hover:shadow-md hover:border-primary/50",
        !lesson.is_active && "opacity-60"
      )}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-semibold text-sm">
        {lesson.order_index + 1}
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="font-medium text-foreground">{lesson.title}</h4>
        {lesson.description && (
          <p className="text-sm text-muted-foreground line-clamp-1 mt-1">
            {lesson.description}
          </p>
        )}
      </div>
      <ChevronRight
        className={cn(
          "h-5 w-5 text-muted-foreground transition-transform duration-200",
          isHovered && "translate-x-1"
        )}
        strokeWidth={1.5}
      />
    </div>
  )
}
