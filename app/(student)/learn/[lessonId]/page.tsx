"use client"

import * as React from "react"
import { useParams } from "next/navigation"
import { LessonRunner } from "@/components/lesson/LessonRunner"
import { Lesson } from "@/lib/types/lesson"
import { Loader2, AlertCircle } from "lucide-react"
import { Card } from "@/components/ui/card"

export default function LessonPage() {
  const params = useParams()
  const lessonId = params.lessonId as string
  
  const [lesson, setLesson] = React.useState<Lesson | null>(null)
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState<string | null>(null)

  React.useEffect(() => {
    const fetchLesson = async () => {
      try {
        setLoading(true)
        setError(null)
        
        // Fetch lesson data from public directory
        const response = await fetch(`/lessons/${lessonId}.json`)
        
        if (!response.ok) {
          throw new Error(`Lesson not found: ${lessonId}`)
        }
        
        const data = await response.json()
        setLesson(data)
      } catch (err) {
        console.error("Error loading lesson:", err)
        setError(err instanceof Error ? err.message : "Failed to load lesson")
      } finally {
        setLoading(false)
      }
    }

    if (lessonId) {
      fetchLesson()
    }
  }, [lessonId])

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center">
        <div className="text-center space-y-4">
          <Loader2 className="h-12 w-12 animate-spin text-cyan-400 mx-auto" strokeWidth={1.5} />
          <p className="text-muted-foreground">Loading lesson...</p>
        </div>
      </div>
    )
  }

  if (error || !lesson) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center p-4">
        <Card className="p-8 max-w-md glass border-red-500/30">
          <div className="flex items-start gap-4">
            <AlertCircle className="h-8 w-8 text-red-500 flex-shrink-0" strokeWidth={1.5} />
            <div>
              <h2 className="text-xl font-bold text-red-500 mb-2">Lesson Not Found</h2>
              <p className="text-muted-foreground mb-4">
                {error || "The requested lesson could not be loaded."}
              </p>
              <p className="text-sm text-muted-foreground">
                Lesson ID: <code className="text-cyan-400">{lessonId}</code>
              </p>
            </div>
          </div>
        </Card>
      </div>
    )
  }

  return <LessonRunner lesson={lesson} />
}
