// Compatibility shim for imports that reference useAuth.ts
// Re-export from the actual TSX module.
export * from "./useAuth.tsx";

"use client"

import { useState, useEffect, createContext, useContext } from "react"
import type { User, AuthContextType } from "@/lib/types/auth"

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Fetch current user on mount
    fetchUser()
  }, [])

  const fetchUser = async () => {
    try {
      const response = await fetch("/api/auth/me", {
        credentials: "include",
      })
      
      if (response.ok) {
        const data = await response.json()
        setUser(data.user)
      } else {
        setUser(null)
      }
    } catch (error) {
      console.error("Auth fetch error:", error)
      setUser(null)
    } finally {
      setIsLoading(false)
    }
  }

  const value: AuthContextType = {
    user,
    isLoading,
    isAdmin: user?.role === "admin",
    isTeacher: user?.role === "teacher",
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
