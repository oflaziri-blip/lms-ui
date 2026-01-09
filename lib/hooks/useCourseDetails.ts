"use client"

import { useEffect, useState } from "react"

interface Lesson {
  id: string
  external_id: string
  title: string
  description: string | null
  order_index: number
  is_active: boolean
  module_id: string | null
  modules?: {
    id: string
    title: string
    order_index: number
  }
}

interface CourseDetails {
  id: string
  title: string
  description: string | null
  duration: string | null
  lessons_count: number
  is_active: boolean
  created_at: string
  updated_at: string
  lessons: Lesson[]
  lessonsByModule: Array<{
    module: {
      id: string
      title: string
      order_index: number
    }
    lessons: Lesson[]
  }>
  ungroupedLessons: Lesson[]
}

export function useCourseDetails(courseId: string | null) {
  const [course, setCourse] = useState<CourseDetails | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!courseId) {
      setLoading(false)
      return
    }

    async function fetchCourseDetails() {
      try {
        setLoading(true)
        setError(null)
        const res = await fetch(`/api/courses/${courseId}`, {
          credentials: "include",
        })
        
        // Check if response has content
        const contentType = res.headers.get("content-type")
        if (!contentType || !contentType.includes("application/json")) {
          throw new Error("Invalid response format from server")
        }

        // Get response text first to handle empty responses
        const text = await res.text()
        if (!text) {
          throw new Error("Empty response from server")
        }

        let data
        try {
          data = JSON.parse(text)
        } catch (parseError) {
          console.error("JSON parse error:", parseError, "Response text:", text)
          throw new Error("Invalid JSON response from server")
        }

        if (!res.ok) {
          throw new Error(data.error || `Failed to fetch course details (${res.status})`)
        }

        if (!data.success || !data.data) {
          throw new Error("Invalid response structure from server")
        }

        setCourse(data.data)
      } catch (e: any) {
        console.error("Fetch course details error:", e)
        setError(e.message || "Unknown error occurred")
      } finally {
        setLoading(false)
      }
    }

    fetchCourseDetails()
  }, [courseId])

  return { course, loading, error }
}
