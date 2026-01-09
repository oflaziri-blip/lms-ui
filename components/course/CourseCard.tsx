"use client"

import * as React from "react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, Clock, Users, Trash2 } from "lucide-react"
import { cn } from "@/lib/utils"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

interface CourseCardProps {
  id?: string
  title: string
  description: string
  duration?: string
  students?: number
  lessons?: number
  className?: string
  onClick?: () => void
  onDelete?: () => void
}

export function CourseCard({
  id,
  title,
  description,
  duration,
  students,
  lessons,
  className,
  onClick,
  onDelete,
}: CourseCardProps) {
  const [showDeleteDialog, setShowDeleteDialog] = React.useState(false)
  const [isDeleting, setIsDeleting] = React.useState(false)

  const handleCardClick = (e: React.MouseEvent) => {
    // Don't navigate if clicking buttons
    if ((e.target as HTMLElement).closest('button')) {
      return
    }
    if (onClick) {
      onClick()
    }
  }

  const handleDelete = async () => {
    if (!id) return
    
    setIsDeleting(true)
    try {
      const response = await fetch(`/api/courses/${id}`, {
        method: 'DELETE',
        credentials: 'include',
      })

      if (!response.ok) {
        throw new Error('Failed to delete course')
      }

      setShowDeleteDialog(false)
      if (onDelete) {
        onDelete()
      }
    } catch (error) {
      console.error('Error deleting course:', error)
      alert('Failed to delete course. Please try again.')
    } finally {
      setIsDeleting(false)
    }
  }

  const cardContent = (
    <>
      <Card
        className={cn(
          "cursor-pointer transition-all duration-200 hover:shadow-lg hover:scale-[1.02]",
          className
        )}
        onClick={handleCardClick}
      >
        <CardHeader>
          <CardTitle className="text-xl">{title}</CardTitle>
          <CardDescription className="line-clamp-2">{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            {lessons && (
              <div className="flex items-center gap-1">
                <BookOpen className="h-4 w-4" strokeWidth={1.5} />
                <span>{lessons} lessons</span>
              </div>
            )}
            {duration && (
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" strokeWidth={1.5} />
                <span>{duration}</span>
              </div>
            )}
            {students !== undefined && (
              <div className="flex items-center gap-1">
                <Users className="h-4 w-4" strokeWidth={1.5} />
                <span>{students} students</span>
              </div>
            )}
          </div>
        </CardContent>
        <CardFooter className="gap-2">
          <Button
            variant="outline"
            className="flex-1"
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              // TODO: Implement edit functionality
            }}
          >
            Edit Course
          </Button>
          {id && (
            <Button
              variant="outline"
              size="icon"
              className="text-destructive hover:text-destructive"
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                setShowDeleteDialog(true)
              }}
            >
              <Trash2 className="h-4 w-4" strokeWidth={1.5} />
            </Button>
          )}
        </CardFooter>
      </Card>

      {/* Delete Confirmation Dialog */}
      <Dialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Move to Recycle Bin?</DialogTitle>
            <DialogDescription>
              Are you sure you want to move this course to the Recycle Bin? This will hide it from the main view, but admins can restore it later.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setShowDeleteDialog(false)}
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
    </>
  )

  // If id is provided, wrap in Link for navigation
  if (id && !onClick) {
    return (
      <Link href={`/admin/courses/${id}`} className="no-underline">
        {cardContent}
      </Link>
    )
  }

  return cardContent
}
