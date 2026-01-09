"use client"

import * as React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Skeleton } from "@/components/ui/skeleton"
import { Alert, AlertDescription } from "@/components/ui/alert"
import {
  Trash2,
  RotateCcw,
  AlertCircle,
  BookOpen,
  Users,
  UserCircle,
} from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

interface DeletedCourse {
  id: string
  title: string
  description: string | null
  deleted_at: string
  lessons_count: number
}

interface DeletedGroup {
  id: string
  name: string
  course_title: string
  deleted_at: string
}

interface DeletedStudent {
  id: string
  name: string
  email: string
  deleted_at: string
}

export default function RecycleBinPage() {
  const [deletedCourses, setDeletedCourses] = React.useState<DeletedCourse[]>([])
  const [deletedGroups, setDeletedGroups] = React.useState<DeletedGroup[]>([])
  const [deletedStudents, setDeletedStudents] = React.useState<DeletedStudent[]>([])
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState<string | null>(null)
  const [actionLoading, setActionLoading] = React.useState(false)
  const [confirmDialog, setConfirmDialog] = React.useState<{
    open: boolean
    type: 'restore' | 'delete'
    itemType: 'course' | 'group' | 'student'
    itemId: string
    itemName: string
  } | null>(null)

  const fetchDeletedItems = async () => {
    try {
      setLoading(true)
      setError(null)

      // Fetch deleted courses
      const coursesRes = await fetch('/api/bin/courses', { credentials: 'include' })
      if (coursesRes.ok) {
        const coursesData = await coursesRes.json()
        setDeletedCourses(coursesData.data || [])
      }

      // Fetch deleted groups
      const groupsRes = await fetch('/api/bin/groups', { credentials: 'include' })
      if (groupsRes.ok) {
        const groupsData = await groupsRes.json()
        setDeletedGroups(groupsData.data || [])
      }

      // Fetch deleted students
      const studentsRes = await fetch('/api/bin/students', { credentials: 'include' })
      if (studentsRes.ok) {
        const studentsData = await studentsRes.json()
        setDeletedStudents(studentsData.data || [])
      }
    } catch (err) {
      console.error('Error fetching deleted items:', err)
      setError('Failed to load deleted items')
    } finally {
      setLoading(false)
    }
  }

  React.useEffect(() => {
    fetchDeletedItems()
  }, [])

  const handleRestore = async (itemType: 'course' | 'group' | 'student', itemId: string) => {
    setActionLoading(true)
    try {
      const response = await fetch(`/api/bin/${itemType}s/${itemId}/restore`, {
        method: 'POST',
        credentials: 'include',
      })

      if (!response.ok) {
        throw new Error('Failed to restore item')
      }

      // Refresh the list
      await fetchDeletedItems()
      setConfirmDialog(null)
    } catch (error) {
      console.error('Error restoring item:', error)
      alert('Failed to restore item. Please try again.')
    } finally {
      setActionLoading(false)
    }
  }

  const handleDeleteForever = async (itemType: 'course' | 'group' | 'student', itemId: string) => {
    setActionLoading(true)
    try {
      const response = await fetch(`/api/bin/${itemType}s/${itemId}`, {
        method: 'DELETE',
        credentials: 'include',
      })

      if (!response.ok) {
        throw new Error('Failed to permanently delete item')
      }

      // Refresh the list
      await fetchDeletedItems()
      setConfirmDialog(null)
    } catch (error) {
      console.error('Error deleting item:', error)
      alert('Failed to permanently delete item. Please try again.')
    } finally {
      setActionLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="space-y-6">
        <Skeleton className="h-12 w-64" />
        <Skeleton className="h-96 w-full" />
      </div>
    )
  }

  if (error) {
    return (
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertDescription>{error}</AlertDescription>
      </Alert>
    )
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Recycle Bin</h1>
        <p className="text-muted-foreground">
          Restore or permanently delete items
        </p>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="courses" className="w-full">
        <TabsList>
          <TabsTrigger value="courses" className="gap-2">
            <BookOpen className="h-4 w-4" strokeWidth={1.5} />
            Deleted Courses ({deletedCourses.length})
          </TabsTrigger>
          <TabsTrigger value="groups" className="gap-2">
            <Users className="h-4 w-4" strokeWidth={1.5} />
            Deleted Groups ({deletedGroups.length})
          </TabsTrigger>
          <TabsTrigger value="students" className="gap-2">
            <UserCircle className="h-4 w-4" strokeWidth={1.5} />
            Deleted Students ({deletedStudents.length})
          </TabsTrigger>
        </TabsList>

        {/* Courses Tab */}
        <TabsContent value="courses" className="space-y-4">
          {deletedCourses.length === 0 ? (
            <Card>
              <CardContent className="flex flex-col items-center justify-center py-12">
                <BookOpen className="h-12 w-12 text-muted-foreground/50 mb-4" strokeWidth={1.5} />
                <h3 className="text-lg font-semibold mb-2">No Deleted Courses</h3>
                <p className="text-sm text-muted-foreground">
                  Deleted courses will appear here
                </p>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-4">
              {deletedCourses.map((course) => (
                <Card key={course.id}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold">{course.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          {course.description || 'No description'}
                        </p>
                        <p className="text-xs text-muted-foreground mt-2">
                          Deleted: {new Date(course.deleted_at).toLocaleString()}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() =>
                            setConfirmDialog({
                              open: true,
                              type: 'restore',
                              itemType: 'course',
                              itemId: course.id,
                              itemName: course.title,
                            })
                          }
                        >
                          <RotateCcw className="h-4 w-4 mr-2" strokeWidth={1.5} />
                          Restore
                        </Button>
                        <Button
                          variant="destructive"
                          size="sm"
                          onClick={() =>
                            setConfirmDialog({
                              open: true,
                              type: 'delete',
                              itemType: 'course',
                              itemId: course.id,
                              itemName: course.title,
                            })
                          }
                        >
                          <Trash2 className="h-4 w-4 mr-2" strokeWidth={1.5} />
                          Delete Forever
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </TabsContent>

        {/* Groups Tab */}
        <TabsContent value="groups" className="space-y-4">
          {deletedGroups.length === 0 ? (
            <Card>
              <CardContent className="flex flex-col items-center justify-center py-12">
                <Users className="h-12 w-12 text-muted-foreground/50 mb-4" strokeWidth={1.5} />
                <h3 className="text-lg font-semibold mb-2">No Deleted Groups</h3>
                <p className="text-sm text-muted-foreground">
                  Deleted groups will appear here
                </p>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-4">
              {deletedGroups.map((group) => (
                <Card key={group.id}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold">{group.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          Course: {group.course_title}
                        </p>
                        <p className="text-xs text-muted-foreground mt-2">
                          Deleted: {new Date(group.deleted_at).toLocaleString()}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() =>
                            setConfirmDialog({
                              open: true,
                              type: 'restore',
                              itemType: 'group',
                              itemId: group.id,
                              itemName: group.name,
                            })
                          }
                        >
                          <RotateCcw className="h-4 w-4 mr-2" strokeWidth={1.5} />
                          Restore
                        </Button>
                        <Button
                          variant="destructive"
                          size="sm"
                          onClick={() =>
                            setConfirmDialog({
                              open: true,
                              type: 'delete',
                              itemType: 'group',
                              itemId: group.id,
                              itemName: group.name,
                            })
                          }
                        >
                          <Trash2 className="h-4 w-4 mr-2" strokeWidth={1.5} />
                          Delete Forever
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </TabsContent>

        {/* Students Tab */}
        <TabsContent value="students" className="space-y-4">
          {deletedStudents.length === 0 ? (
            <Card>
              <CardContent className="flex flex-col items-center justify-center py-12">
                <UserCircle className="h-12 w-12 text-muted-foreground/50 mb-4" strokeWidth={1.5} />
                <h3 className="text-lg font-semibold mb-2">No Deleted Students</h3>
                <p className="text-sm text-muted-foreground">
                  Deleted students will appear here
                </p>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-4">
              {deletedStudents.map((student) => (
                <Card key={student.id}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold">{student.name}</h3>
                        <p className="text-sm text-muted-foreground">{student.email}</p>
                        <p className="text-xs text-muted-foreground mt-2">
                          Deleted: {new Date(student.deleted_at).toLocaleString()}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() =>
                            setConfirmDialog({
                              open: true,
                              type: 'restore',
                              itemType: 'student',
                              itemId: student.id,
                              itemName: student.name,
                            })
                          }
                        >
                          <RotateCcw className="h-4 w-4 mr-2" strokeWidth={1.5} />
                          Restore
                        </Button>
                        <Button
                          variant="destructive"
                          size="sm"
                          onClick={() =>
                            setConfirmDialog({
                              open: true,
                              type: 'delete',
                              itemType: 'student',
                              itemId: student.id,
                              itemName: student.name,
                            })
                          }
                        >
                          <Trash2 className="h-4 w-4 mr-2" strokeWidth={1.5} />
                          Delete Forever
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </TabsContent>
      </Tabs>

      {/* Confirmation Dialog */}
      {confirmDialog && (
        <Dialog open={confirmDialog.open} onOpenChange={(open) => !open && setConfirmDialog(null)}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>
                {confirmDialog.type === 'restore' ? 'Restore Item?' : 'Delete Forever?'}
              </DialogTitle>
              <DialogDescription>
                {confirmDialog.type === 'restore' ? (
                  <>
                    Are you sure you want to restore <strong>{confirmDialog.itemName}</strong>?
                    This will make it visible in the main application again.
                  </>
                ) : (
                  <>
                    Are you sure you want to permanently delete <strong>{confirmDialog.itemName}</strong>?
                    <span className="text-destructive font-semibold"> This action cannot be undone!</span>
                  </>
                )}
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button
                variant="outline"
                onClick={() => setConfirmDialog(null)}
                disabled={actionLoading}
              >
                Cancel
              </Button>
              <Button
                variant={confirmDialog.type === 'restore' ? 'default' : 'destructive'}
                onClick={() => {
                  if (confirmDialog.type === 'restore') {
                    handleRestore(confirmDialog.itemType, confirmDialog.itemId)
                  } else {
                    handleDeleteForever(confirmDialog.itemType, confirmDialog.itemId)
                  }
                }}
                disabled={actionLoading}
              >
                {actionLoading ? 'Processing...' : confirmDialog.type === 'restore' ? 'Restore' : 'Delete Forever'}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </div>
  )
}
