"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { supabase } from "@/lib/supabase/client"
import { Button } from "@/components/ui/button"
import { LogOut } from "lucide-react"

interface SignOutButtonProps {
  variant?: "default" | "outline" | "ghost" | "destructive"
  className?: string
}

export function SignOutButton({ variant = "ghost", className }: SignOutButtonProps) {
  const router = useRouter()
  const [isSigningOut, setIsSigningOut] = React.useState(false)

  const handleSignOut = async () => {
    try {
      setIsSigningOut(true)
      
      // Sign out from Supabase
      const { error } = await supabase.auth.signOut()

      if (error) {
        console.error("Sign out error:", error)
        alert("Failed to sign out. Please try again.")
        setIsSigningOut(false)
        return
      }

      // Redirect to login page
      router.push("/login")
      router.refresh() // Refresh to clear auth state
    } catch (error) {
      console.error("Sign out error:", error)
      alert("An unexpected error occurred. Please try again.")
      setIsSigningOut(false)
    }
  }

  return (
    <Button
      variant={variant}
      onClick={handleSignOut}
      disabled={isSigningOut}
      className={className}
    >
      <LogOut className="mr-2 h-4 w-4" strokeWidth={1.5} />
      {isSigningOut ? "Signing out..." : "Sign Out"}
    </Button>
  )
}
