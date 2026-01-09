"use client"

import * as React from "react"
import { useParams } from "next/navigation"
import { LessonLayoutAccordion } from "@/components/lesson/LessonLayoutAccordion"
import { Lesson } from "@/lib/types/lesson"
import { Loader2, AlertCircle } from "lucide-react"
import { Card } from "@/components/ui/card"

export default function AccordionLessonPage() {
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
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center space-y-4">
          <Loader2 className="h-12 w-12 animate-spin text-purple-600 mx-auto" strokeWidth={1.5} />
          <p className="text-gray-600">Loading lesson...</p>
        </div>
      </div>
    )
  }

  if (error || !lesson) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <Card className="p-8 max-w-md border-red-300">
          <div className="flex items-start gap-4">
            <AlertCircle className="h-8 w-8 text-red-500 flex-shrink-0" strokeWidth={1.5} />
            <div>
              <h2 className="text-xl font-bold text-red-600 mb-2">Lesson Not Found</h2>
              <p className="text-gray-600 mb-4">
                {error || "The requested lesson could not be loaded."}
              </p>
            </div>
          </div>
        </Card>
      </div>
    )
  }

  return <LessonLayoutAccordion lesson={lesson} />
}
