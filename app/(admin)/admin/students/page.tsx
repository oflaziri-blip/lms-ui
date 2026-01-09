"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Loader2, AlertCircle, Plus, UserPlus, Trash2 } from "lucide-react"
import { CreateStudentModal } from "@/components/students/CreateStudentModal"
import { AddToGroupModal } from "@/components/students/AddToGroupModal"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

interface Student {
  id: string
  name: string
  username: string
  grade: string
  status: 'active' | 'inactive'
  email: string
}


function StatusBadge({ status }: { status: 'active' | 'inactive' }) {
  return (
    <Badge variant={status === "active" ? "success" : "default"} className="capitalize">
      {status}
    </Badge>
  )
}

export default function StudentsPage() {
  const [students, setStudents] = useState<Student[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null)
  const [showAddToGroup, setShowAddToGroup] = useState(false)
  const [deleteDialog, setDeleteDialog] = useState<{
    open: boolean
    studentId: string
    studentName: string
  } | null>(null)
  const [isDeleting, setIsDeleting] = useState(false)

  const fetchStudents = async () => {
    try {
      setLoading(true)
      setError(null)

      // Use API route instead of direct Supabase calls
      const response = await fetch('/api/users?role=student&includeMetadata=true', {
        credentials: 'include',
      })

      if (!response.ok) {
        if (response.status === 401) {
          setError('You must be logged in to view students')
        } else if (response.status === 403) {
          setError('You do not have permission to view students')
        } else {
          setError('Failed to fetch students')
        }
        setStudents([])
        return
      }

      const result = await response.json()

      if (!result.success || !result.data) {
        setError('Failed to fetch students')
        setStudents([])
        return
      }

      // Transform data to match Student interface
      const transformedStudents: Student[] = result.data.map((user: any) => ({
        id: user.id,
        name: user.name || 'Unknown',
        username: user.username || 'N/A',
        grade: user.grade || 'N/A',
        status: (user.status || 'active') as 'active' | 'inactive',
        email: user.email
      }))

      setStudents(transformedStudents)
    } catch (err: any) {
      console.error('Error fetching students:', err)
      setError(err.message || 'Failed to fetch students')
      setStudents([])
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchStudents()
  }, [])

  const handleAddToGroup = (student: Student) => {
    setSelectedStudent(student)
    setShowAddToGroup(true)
  }

  const handleStudentCreated = () => {
    fetchStudents() // Refresh the list
  }

  const handleEnrollmentSuccess = () => {
    setShowAddToGroup(false)
    setSelectedStudent(null)
    // Could show a success message here
  }

  const handleDelete = async () => {
    if (!deleteDialog) return
    
    setIsDeleting(true)
    try {
      const response = await fetch(`/api/users?id=${deleteDialog.studentId}`, {
        method: 'DELETE',
        credentials: 'include',
      })

      if (!response.ok) {
        throw new Error('Failed to delete student')
      }

      setDeleteDialog(null)
      fetchStudents()
    } catch (error) {
      console.error('Error deleting student:', error)
      alert('Failed to delete student. Please try again.')
    } finally {
      setIsDeleting(false)
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Students</h1>
          <p className="text-muted-foreground">Manage student accounts and enrollments</p>
        </div>
        <CreateStudentModal onStudentCreated={handleStudentCreated} />
      </div>

      {/* Content */}
      <Card>
        <CardContent className="p-0">
          <div className="overflow-hidden rounded-lg border">
            <table className="w-full text-sm">
              <thead className="bg-muted/50">
                <tr className="text-left">
                  <th className="px-4 py-3 font-medium">Full Name</th>
                  <th className="px-4 py-3 font-medium">Username</th>
                  <th className="px-4 py-3 font-medium">Grade</th>
                  <th className="px-4 py-3 font-medium">Status</th>
                  <th className="px-4 py-3 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {loading && (
                  <tr>
                    <td className="px-4 py-5" colSpan={5}>
                      <div className="flex items-center gap-2">
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Loading students...
                      </div>
                    </td>
                  </tr>
                )}
                {error && (
                  <tr>
                    <td className="px-4 py-5 text-rose-600" colSpan={5}>
                      <Alert variant="destructive">
                        <AlertCircle className="h-4 w-4" />
                        <AlertDescription>{error}</AlertDescription>
                      </Alert>
                    </td>
                  </tr>
                )}
                {!loading && students.length === 0 && (
                  <tr>
                    <td className="px-4 py-10 text-center text-muted-foreground" colSpan={5}>
                      No students yet. Click "Create Student" to add the first student.
                    </td>
                  </tr>
                )}
                {students.map((student) => (
                  <tr key={student.id} className="hover:bg-muted/30">
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-xs font-semibold">
                          {student.name.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase() || "S"}
                        </div>
                        <div className="leading-tight">
                          <div className="font-medium">{student.name}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-4">{student.username}</td>
                    <td className="px-4 py-4">{student.grade}</td>
                    <td className="px-4 py-4"><StatusBadge status={student.status} /></td>
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleAddToGroup(student)}
                        >
                          <UserPlus className="h-4 w-4 mr-2" />
                          Add to Group
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="text-destructive hover:text-destructive"
                          onClick={() =>
                            setDeleteDialog({
                              open: true,
                              studentId: student.id,
                              studentName: student.name,
                            })
                          }
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Add to Group Modal */}
      {showAddToGroup && selectedStudent && (
        <AddToGroupModal
          student={selectedStudent}
          onClose={() => {
            setShowAddToGroup(false)
            setSelectedStudent(null)
          }}
          onSuccess={handleEnrollmentSuccess}
        />
      )}

      {/* Delete Confirmation Dialog */}
      {deleteDialog && (
        <Dialog open={deleteDialog.open} onOpenChange={(open) => !open && setDeleteDialog(null)}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Move to Recycle Bin?</DialogTitle>
              <DialogDescription>
                Are you sure you want to move <strong>{deleteDialog.studentName}</strong> to the Recycle Bin?
                This will hide them from the main view, but admins can restore them later.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button
                variant="outline"
                onClick={() => setDeleteDialog(null)}
                disabled={isDeleting}
              >
                Cancel
              </Button>
              <Button
                variant="destructive"
                onClick={handleDelete}
                disabled={isDeleting}
              >
                {isDeleting ? 'Moving...' : 'Move to Bin'}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </div>
  )
}