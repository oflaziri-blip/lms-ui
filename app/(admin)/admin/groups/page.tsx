"use client"

import * as React from "react"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Skeleton } from "@/components/ui/skeleton"
import {
  Users,
  Search,
  Calendar,
  User,
  ArrowRight,
  Trash2,
} from "lucide-react"
import { useGroups } from "@/lib/hooks/useGroups"
import { CreateGroupModal } from "@/components/groups/CreateGroupModal"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

export default function GroupsPage() {
  const { groups, loading, error, refetch } = useGroups()
  const [searchQuery, setSearchQuery] = React.useState("")
  const [deleteDialog, setDeleteDialog] = React.useState<{
    open: boolean
    groupId: string
    groupName: string
  } | null>(null)
  const [isDeleting, setIsDeleting] = React.useState(false)

  const handleDelete = async () => {
    if (!deleteDialog) return
    
    setIsDeleting(true)
    try {
      const response = await fetch(`/api/groups/${deleteDialog.groupId}`, {
        method: 'DELETE',
        credentials: 'include',
      })

      if (!response.ok) {
        throw new Error('Failed to delete group')
      }

      setDeleteDialog(null)
      refetch()
    } catch (error) {
      console.error('Error deleting group:', error)
      alert('Failed to delete group. Please try again.')
    } finally {
      setIsDeleting(false)
    }
  }

  const filteredGroups = groups.filter(
    (group) =>
      group.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      group.course.toLowerCase().includes(searchQuery.toLowerCase()) ||
      group.teacher.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const totalStudents = groups.reduce((sum, g) => sum + g.enrolledCount, 0)
  const activeGroups = groups.filter((g) => g.isActive).length

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <Skeleton className="h-10 w-48" />
          <Skeleton className="h-10 w-32" />
        </div>
        <Skeleton className="h-10 w-80" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Skeleton className="h-28" />
          <Skeleton className="h-28" />
          <Skeleton className="h-28" />
        </div>
        <div className="space-y-4">
          <Skeleton className="h-32" />
          <Skeleton className="h-32" />
          <Skeleton className="h-32" />
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
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Groups</h1>
          <p className="text-muted-foreground">
            Manage your class groups and enrollments
          </p>
        </div>
        <CreateGroupModal onSuccess={refetch} />
      </div>

      {/* Search */}
      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" strokeWidth={1.5} />
        <Input
          placeholder="Search groups, courses, or teachers..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-9"
        />
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              TOTAL GROUPS
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold tracking-tight">
              {groups.length}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              TOTAL STUDENTS
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold tracking-tight">
              {totalStudents}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              ACTIVE GROUPS
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold tracking-tight">
              {activeGroups}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Groups List */}
      <div className="grid grid-cols-1 gap-4">
        {filteredGroups.length === 0 ? (
          <Card>
            <CardContent className="flex flex-col items-center justify-center py-12">
              <Users className="h-12 w-12 text-muted-foreground/50 mb-4" strokeWidth={1.5} />
              <h3 className="text-lg font-semibold mb-2">No Groups Found</h3>
              <p className="text-sm text-muted-foreground text-center max-w-sm">
                {searchQuery
                  ? "Try adjusting your search query"
                  : "Create your first group to get started"}
              </p>
            </CardContent>
          </Card>
        ) : (
          filteredGroups.map((group) => (
            <Card key={group.id} className="hover:shadow-lg transition-all">
              <CardContent className="p-6">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  {/* Group Info */}
                  <Link href={`/admin/groups/${group.id}`} className="flex-1 space-y-3 no-underline">
                    <div>
                      <h3 className="text-xl font-semibold mb-1">
                        {group.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {group.course}
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <User className="h-4 w-4" strokeWidth={1.5} />
                        <span>{group.teacher}</span>
                      </div>
                      {group.schedule && (
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Calendar className="h-4 w-4" strokeWidth={1.5} />
                          <span>{group.schedule}</span>
                        </div>
                      )}
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Users className="h-4 w-4" strokeWidth={1.5} />
                        <span>
                          {group.enrolledCount}/{group.maxStudents} students
                        </span>
                      </div>
                    </div>
                  </Link>

                  {/* Progress & Status */}
                  <div className="flex items-center gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold tracking-tight">
                        {group.maxStudents > 0
                          ? Math.round((group.enrolledCount / group.maxStudents) * 100)
                          : 0}%
                      </div>
                      <p className="text-xs text-muted-foreground">Full</p>
                    </div>

                    <div className="flex items-center gap-2">
                      <div
                        className={`h-2 w-2 rounded-full ${
                          group.isActive ? "bg-emerald-500" : "bg-slate-400"
                        }`}
                      />
                      <span className="text-sm">
                        {group.isActive ? "Active" : "Inactive"}
                      </span>
                    </div>

                    <Button
                      variant="outline"
                      size="icon"
                      className="text-destructive hover:text-destructive"
                      onClick={(e) => {
                        e.preventDefault()
                        e.stopPropagation()
                        setDeleteDialog({
                          open: true,
                          groupId: group.id,
                          groupName: group.name,
                        })
                      }}
                    >
                      <Trash2 className="h-4 w-4" strokeWidth={1.5} />
                    </Button>

                    <Link href={`/admin/groups/${group.id}`}>
                      <Button variant="ghost" size="icon">
                        <ArrowRight className="h-5 w-5 text-muted-foreground" strokeWidth={1.5} />
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>

      {/* Delete Confirmation Dialog */}
      {deleteDialog && (
        <Dialog open={deleteDialog.open} onOpenChange={(open) => !open && setDeleteDialog(null)}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Move to Recycle Bin?</DialogTitle>
              <DialogDescription>
                Are you sure you want to move <strong>{deleteDialog.groupName}</strong> to the Recycle Bin?
                This will hide it from the main view, but admins can restore it later.
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
