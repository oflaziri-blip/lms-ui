"use client"

import { AdminSidebar } from "@/components/layout/AdminSidebar"
import { ProtectedRoute } from "@/components/auth/ProtectedRoute"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-background flex flex-col">
        <div className="flex flex-1 overflow-hidden">
          <AdminSidebar />
          <main className="flex-1 overflow-auto bg-background">
            <div className="p-6">{children}</div>
          </main>
        </div>
      </div>
    </ProtectedRoute>
  )
}
