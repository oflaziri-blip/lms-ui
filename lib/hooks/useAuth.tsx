"use client"

import { useState, useEffect, createContext, useContext } from "react"
import { useRouter } from "next/navigation"
import { supabase } from "@/lib/supabase/client"
import type { User, AuthContextType } from "@/lib/types/auth"

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    // Check initial session
    checkSession()

    // Listen for auth state changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user) {
        // User is logged in, fetch user details
        fetchUserDetails(session.user.id)
      } else {
        // User is logged out
        setUser(null)
        setIsLoading(false)
      }
    })

    return () => {
      subscription.unsubscribe()
    }
  }, [])

  const checkSession = async () => {
    try {
      const { data: { session } } = await supabase.auth.getSession()
      
      if (session?.user) {
        // Fetch user details from database
        await fetchUserDetails(session.user.id)
      } else {
        setUser(null)
      }
    } catch (error) {
      console.error("Session check error:", error)
      setUser(null)
    } finally {
      setIsLoading(false)
    }
  }

  const fetchUserDetails = async (userId: string) => {
    try {
      // Fetch user details from Supabase users table
      const { data: userData, error } = await supabase
        .from("users")
        .select("id, email, name, role, status, avatar_url")
        .eq("id", userId)
        .single()

      if (error) {
        console.error("User fetch error:", error)
        // If user not found in users table, try to get from auth metadata
        const { data: { user: authUser } } = await supabase.auth.getUser()
        if (authUser) {
          setUser({
            id: authUser.id,
            email: authUser.email || "",
            name: authUser.user_metadata?.name || authUser.email?.split("@")[0] || "User",
            role: authUser.user_metadata?.role || "student",
          })
        }
        return
      }

      if (userData) {
        setUser({
          id: userData.id,
          email: userData.email,
          name: userData.name,
          role: userData.role as "admin" | "teacher" | "student",
          avatarUrl: userData.avatar_url,
        })
      }
    } catch (error) {
      console.error("Fetch user details error:", error)
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
