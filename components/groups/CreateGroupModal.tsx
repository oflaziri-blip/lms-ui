"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Loader2, AlertCircle } from "lucide-react"

interface Course {
  id: string
  title: string
}

interface Teacher {
  id: string
  name: string
  email: string
}

interface CreateGroupModalProps {
  onSuccess?: () => void
}

export function CreateGroupModal({ onSuccess }: CreateGroupModalProps) {
  const router = useRouter()
  const [open, setOpen] = React.useState(false)
  const [submitting, setSubmitting] = React.useState(false)
  const [error, setError] = React.useState<string | null>(null)
  
  // Form state
  const [form, setForm] = React.useState({
    name: "",
    courseId: "",
    teacherId: "",
    schedule: "",
    startDate: "",
    endDate: "",
    maxStudents: "30",
  })

  // Data fetching
  const [courses, setCourses] = React.useState<Course[]>([])
  const [teachers, setTeachers] = React.useState<Teacher[]>([])
  const [loadingCourses, setLoadingCourses] = React.useState(false)
  const [loadingTeachers, setLoadingTeachers] = React.useState(false)

  // Fetch courses and teachers when modal opens
  React.useEffect(() => {
    if (open) {
      fetchCourses()
      fetchTeachers()
    }
  }, [open])

  const fetchCourses = async () => {
    try {
      setLoadingCourses(true)
      const res = await fetch("/api/courses", {
        credentials: "include",
      })
      if (!res.ok) {
        throw new Error("Failed to fetch courses")
      }
      const data = await res.json()
      setCourses(data.data || [])
    } catch (error) {
      console.error("Failed to fetch courses:", error)
      setError("Failed to load courses")
    } finally {
      setLoadingCourses(false)
    }
  }

  const fetchTeachers = async () => {
    try {
      setLoadingTeachers(true)
      const res = await fetch("/api/users?role=teacher", {
        credentials: "include",
      })
      if (!res.ok) {
        throw new Error("Failed to fetch teachers")
      }
      const data = await res.json()
      // Filter for teachers only
      const teacherUsers = (data.data || []).filter((user: any) => user.role === "teacher")
      setTeachers(teacherUsers)
    } catch (error) {
      console.error("Failed to fetch teachers:", error)
      setError("Failed to load teachers")
    } finally {
      setLoadingTeachers(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setError(null)

    // Validation
    if (!form.name.trim()) {
      setError("Group name is required")
      setSubmitting(false)
      return
    }

    if (!form.courseId) {
      setError("Please select a course")
      setSubmitting(false)
      return
    }

    try {
      const payload = {
        name: form.name.trim(),
        courseId: form.courseId,
        teacherId: form.teacherId || null,
        schedule: form.schedule.trim() || null,
        startDate: form.startDate || null,
        endDate: form.endDate || null,
        maxStudents: parseInt(form.maxStudents) || 30,
      }

      const res = await fetch("/api/groups", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(payload),
      })

      const result = await res.json()

      if (!res.ok) {
        console.error("Group creation error:", result)
        const errorMessage = result.details 
          ? `${result.error}: ${result.details}`
          : result.error || "Failed to create group"
        throw new Error(errorMessage)
      }

      // Success!
      const newGroupId = result.data?.id

      // Close modal
      setOpen(false)

      // Reset form
      setForm({
        name: "",
        courseId: "",
        teacherId: "",
        schedule: "",
        startDate: "",
        endDate: "",
        maxStudents: "30",
      })
      setError(null)

      // Call onSuccess callback to refresh list
      if (onSuccess) {
        onSuccess()
      }

      // Redirect to the new group's details page
      if (newGroupId) {
        router.push(`/admin/groups/${newGroupId}`)
      }
    } catch (err: any) {
      console.error("Create group error:", err)
      setError(err.message || "Failed to create group. Please try again.")
    } finally {
      setSubmitting(false)
    }
  }

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen)
    if (!newOpen) {
      // Reset form when closing
      setForm({
        name: "",
        courseId: "",
        teacherId: "",
        schedule: "",
        startDate: "",
        endDate: "",
        maxStudents: "30",
      })
      setError(null)
    }
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button>
          <span className="mr-2">+</span>
          Create Group
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Create New Group</DialogTitle>
          <DialogDescription>
            Create a new group and assign a course and teacher
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          <div className="space-y-2">
            <Label htmlFor="name">Group Name *</Label>
            <Input
              id="name"
              placeholder="e.g., Python Core - Group A"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              disabled={submitting}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="course">Course *</Label>
            <Select
              value={form.courseId}
              onValueChange={(value) => setForm({ ...form, courseId: value })}
              disabled={submitting || loadingCourses}
            >
              <SelectTrigger id="course">
                <SelectValue placeholder={loadingCourses ? "Loading courses..." : "Select a course"} />
              </SelectTrigger>
              <SelectContent>
                {courses.map((course) => (
                  <SelectItem key={course.id} value={course.id}>
                    {course.title}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="teacher">Teacher</Label>
            <Select
              value={form.teacherId || "none"}
              onValueChange={(value) => setForm({ ...form, teacherId: value === "none" ? "" : value })}
              disabled={submitting || loadingTeachers}
            >
              <SelectTrigger id="teacher">
                <SelectValue placeholder={loadingTeachers ? "Loading teachers..." : "Select a teacher (optional)"} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="none">No teacher assigned</SelectItem>
                {teachers.map((teacher) => (
                  <SelectItem key={teacher.id} value={teacher.id}>
                    {teacher.name} ({teacher.email})
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="schedule">Schedule</Label>
            <Input
              id="schedule"
              placeholder="e.g., Mon, Wed, Fri - 10:00 AM"
              value={form.schedule}
              onChange={(e) => setForm({ ...form, schedule: e.target.value })}
              disabled={submitting}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="startDate">Start Date</Label>
              <Input
                id="startDate"
                type="date"
                value={form.startDate}
                onChange={(e) => setForm({ ...form, startDate: e.target.value })}
                disabled={submitting}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="endDate">End Date</Label>
              <Input
                id="endDate"
                type="date"
                value={form.endDate}
                onChange={(e) => setForm({ ...form, endDate: e.target.value })}
                disabled={submitting}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="maxStudents">Max Students</Label>
            <Input
              id="maxStudents"
              type="number"
              min="1"
              value={form.maxStudents}
              onChange={(e) => setForm({ ...form, maxStudents: e.target.value })}
              disabled={submitting}
            />
          </div>

          <div className="flex justify-end gap-2 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => handleOpenChange(false)}
              disabled={submitting}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={submitting}>
              {submitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Creating...
                </>
              ) : (
                "Create Group"
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
