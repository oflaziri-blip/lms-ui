"use client"

import * as React from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useUsers } from "@/lib/hooks/useUsers"

type Role = "admin" | "teacher"

export function AddUserModal() {
  const { createUser, refetch } = useUsers()
  const [open, setOpen] = React.useState(false)
  const [submitting, setSubmitting] = React.useState(false)
  const [error, setError] = React.useState<string | null>(null)

  const [form, setForm] = React.useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    role: "teacher" as Role,
    // Teacher-only
    bio: "",
    hourlyRate: "",
    tags: "",
  })

  function update<K extends keyof typeof form>(key: K, value: (typeof form)[K]) {
    setForm((f) => ({ ...f, [key]: value }))
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitting(true)
    setError(null)
    
    try {
      const payload: any = {
        name: form.name,
        email: form.email,
        password: form.password || undefined,
        phone: form.phone || undefined,
        role: form.role,
      }
      if (form.role === "teacher") {
        payload.meta = {
          bio: form.bio || undefined,
          hourlyRate: form.hourlyRate ? Number(form.hourlyRate) : undefined,
          tags: form.tags
            ? form.tags
                .split(",")
                .map((t) => t.trim())
                .filter(Boolean)
            : [],
        }
      }
      
      // Create user via API
      const response = await createUser(payload)
      
      // If successful, refresh the user list from server
      if (response) {
        // Refetch users to ensure list is up-to-date
        await refetch()
        
        // Reset form
        setForm({
          name: "",
          email: "",
          password: "",
          phone: "",
          role: "teacher",
          bio: "",
          hourlyRate: "",
          tags: "",
        })
        
        // Close modal after successful creation
        setOpen(false)
      }
    } catch (err: any) {
      setError(err.message || "Failed to create user")
    } finally {
      setSubmitting(false)
    }
  }

  function generateTempPassword() {
    const temp = Math.random().toString(36).slice(-10)
    update("password", temp)
  }

  // Reset form when modal closes
  function handleOpenChange(newOpen: boolean) {
    setOpen(newOpen)
    if (!newOpen) {
      // Reset form when closing modal
      setForm({
        name: "",
        email: "",
        password: "",
        phone: "",
        role: "teacher",
        bio: "",
        hourlyRate: "",
        tags: "",
      })
      setError(null)
    }
  }

  const isTeacher = form.role === "teacher"

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button className="gap-2">
          + Add New User
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Create User</DialogTitle>
        </DialogHeader>
        <form onSubmit={onSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" value={form.name} onChange={(e) => update("name", e.target.value)} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" value={form.email} onChange={(e) => update("email", e.target.value)} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="flex gap-2">
                <Input id="password" type="text" value={form.password} onChange={(e) => update("password", e.target.value)} placeholder="Enter or generate" />
                <Button type="button" variant="outline" onClick={generateTempPassword}>Generate</Button>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" value={form.phone} onChange={(e) => update("phone", e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="role">Role</Label>
              <select
                id="role"
                value={form.role}
                onChange={(e) => update("role", e.target.value as Role)}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              >
                <option value="admin">Admin</option>
                <option value="teacher">Teacher</option>
              </select>
            </div>
          </div>

          {isTeacher && (
            <div className="rounded-md border p-4 space-y-4">
              <div className="space-y-2">
                <Label htmlFor="bio">Bio</Label>
                <textarea
                  id="bio"
                  className="w-full rounded-md border border-input bg-background p-2 text-sm"
                  rows={3}
                  value={form.bio}
                  onChange={(e) => update("bio", e.target.value)}
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="hourlyRate">Hourly Rate</Label>
                  <Input id="hourlyRate" type="number" min="0" step="0.01" value={form.hourlyRate} onChange={(e) => update("hourlyRate", e.target.value)} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="tags">Specialization/Tags (comma separated)</Label>
                  <Input id="tags" placeholder="Python, React" value={form.tags} onChange={(e) => update("tags", e.target.value)} />
                </div>
              </div>
            </div>
          )}

          {error && <p className="text-sm text-rose-600">{error}</p>}

          <div className="flex justify-end gap-2">
            <Button type="button" variant="outline" onClick={() => setOpen(false)} disabled={submitting}>Cancel</Button>
            <Button type="submit" disabled={submitting}>{submitting ? "Creating..." : "Create User"}</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}

