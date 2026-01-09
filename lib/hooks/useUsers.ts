"use client"

import { useEffect, useState } from "react"
import type { LMSUser } from "@/lib/types/user"

export function useUsers() {
  const [users, setUsers] = useState<LMSUser[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchUsers()
  }, [])

  async function fetchUsers() {
    try {
      setLoading(true)
      const res = await fetch("/api/users", { credentials: "include" })
      if (!res.ok) throw new Error("Failed to fetch users")
      const data = await res.json()
      setUsers(data.data)
    } catch (e: any) {
      setError(e.message || "Unknown error")
    } finally {
      setLoading(false)
    }
  }

  async function createUser(payload: any) {
    const res = await fetch("/api/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify(payload),
    })
    
    if (!res.ok) {
      const errorData = await res.json().catch(() => ({ error: "Failed to create user" }))
      throw new Error(errorData.error || "Failed to create user")
    }
    
    const data = await res.json()
    
    // Only optimistically update if we got valid data
    if (data.success && data.data) {
      // Optimistically add to list (prepend new user)
      setUsers((prev) => [data.data, ...prev])
      return data.data as LMSUser
    } else {
      throw new Error("Invalid response from server")
    }
  }

  return { users, loading, error, refetch: fetchUsers, createUser }
}

