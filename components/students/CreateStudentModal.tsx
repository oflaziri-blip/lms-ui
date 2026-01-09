"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Loader2, AlertCircle, UserPlus } from "lucide-react"

interface CreateStudentModalProps {
  onStudentCreated: () => void
}

export function CreateStudentModal({ onStudentCreated }: CreateStudentModalProps) {
  const [open, setOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Form fields
  const [fullName, setFullName] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [grade, setGrade] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      // Create student via secure backend API route
      // This uses SERVICE_ROLE_KEY on the backend, so admin won't get logged out
      const response = await fetch('/api/admin/create-student', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include', // Include cookies for authentication
        body: JSON.stringify({
          fullName,
          username,
          password,
          grade,
        }),
      })

      const result = await response.json()

      if (!response.ok) {
        // Handle different error types
        if (response.status === 401) {
          setError('You must be logged in to create students')
        } else if (response.status === 403) {
          setError('You do not have permission to create students')
        } else if (response.status === 409) {
          setError(result.details || result.error || 'Username already exists')
        } else if (response.status === 400) {
          setError(result.details || result.error || 'Invalid input data')
        } else {
          setError(result.details || result.error || 'Failed to create student')
        }
        setIsSubmitting(false)
        return
      }

      if (!result.success) {
        setError(result.error || 'Failed to create student')
        setIsSubmitting(false)
        return
      }

      // Success - close modal and refresh list
      setOpen(false)
      onStudentCreated()

      // Dispatch event to notify other components (like enrollment modals) that a new student was created
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent('studentCreated', {
          detail: { studentId: result.data.id }
        }))
      }

      // Reset form
      setFullName("")
      setUsername("")
      setPassword("")
      setGrade("")
    } catch (err: any) {
      console.error("Student creation error:", err)
      setError(err.message || "An unexpected error occurred. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleOpenChange = (newOpen: boolean) => {
    if (!isSubmitting) {
      setOpen(newOpen)
      if (!newOpen) {
        // Reset form when closing
        setFullName("")
        setUsername("")
        setPassword("")
        setGrade("")
        setError(null)
      }
    }
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button>
          <UserPlus className="h-4 w-4 mr-2" />
          Create Student
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create New Student</DialogTitle>
          <DialogDescription>
            Add a new student account. They will log in with their username and password.
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
            <Label htmlFor="fullName">Full Name</Label>
            <Input
              id="fullName"
              type="text"
              placeholder="John Doe"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              disabled={isSubmitting}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="username">Username</Label>
            <Input
              id="username"
              type="text"
              placeholder="johndoe123"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              disabled={isSubmitting}
            />
            <p className="text-xs text-muted-foreground">
              Students will log in with this username (no email required)
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Enter a secure password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              disabled={isSubmitting}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="grade">Grade/Level</Label>
            <Input
              id="grade"
              type="text"
              placeholder="Grade 10"
              value={grade}
              onChange={(e) => setGrade(e.target.value)}
              required
              disabled={isSubmitting}
            />
          </div>

          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => setOpen(false)}
              disabled={isSubmitting}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Creating...
                </>
              ) : (
                "Create Student"
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}