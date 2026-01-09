"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/lib/hooks/useAuth"
import { Loader2 } from "lucide-react"

interface ProtectedRouteProps {
  children: React.ReactNode
  requireAdmin?: boolean
  requireTeacher?: boolean
}

export function ProtectedRoute({
  children,
  requireAdmin = false,
  requireTeacher = false,
}: ProtectedRouteProps) {
  const router = useRouter()
  const { user, isLoading, isAdmin, isTeacher } = useAuth()

  React.useEffect(() => {
    if (!isLoading) {
      // If not logged in, redirect to login
      if (!user) {
        router.push("/login")
        return
      }

      // Check role-based access
      if (requireAdmin && !isAdmin) {
        router.push("/admin/dashboard") // Redirect to dashboard if not admin
        return
      }

      if (requireTeacher && !isTeacher && !isAdmin) {
        router.push("/admin/dashboard") // Redirect to dashboard if not teacher/admin
        return
      }
    }
  }, [user, isLoading, isAdmin, isTeacher, requireAdmin, requireTeacher, router])

  // Show loading state while checking auth
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center space-y-4">
          <Loader2 className="h-8 w-8 animate-spin text-primary mx-auto" />
          <p className="text-sm text-muted-foreground">Loading...</p>
        </div>
      </div>
    )
  }

  // Don't render children if not authenticated
  if (!user) {
    return null
  }

  // Check role-based access before rendering
  if (requireAdmin && !isAdmin) {
    return null
  }

  if (requireTeacher && !isTeacher && !isAdmin) {
    return null
  }

  // User is authenticated and has required permissions
  return <>{children}</>
}
