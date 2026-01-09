"use client"

import { useUsers } from "@/lib/hooks/useUsers"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { AddUserModal } from "@/components/users/AddUserModal"

function RoleBadge({ role }: { role: "admin" | "teacher" }) {
  return (
    <Badge variant={role === "admin" ? "indigo" : "success"} className="capitalize">
      {role}
    </Badge>
  )
}

function StatusBadge({ status }: { status: "active" | "invited" | "suspended" }) {
  const map = {
    active: "success",
    invited: "warning",
    suspended: "danger",
  } as const
  return (
    <Badge variant={map[status]} className="capitalize">
      {status}
    </Badge>
  )
}

export default function UsersPage() {
  const { users, loading, error } = useUsers()

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold tracking-tight">Users</h1>
        <AddUserModal />
      </div>

      {/* Content */}
      <div className="overflow-hidden rounded-lg border">
        <table className="w-full text-sm">
          <thead className="bg-muted/50">
            <tr className="text-left">
              <th className="px-4 py-3 font-medium">User</th>
              <th className="px-4 py-3 font-medium">Email</th>
              <th className="px-4 py-3 font-medium">Role</th>
              <th className="px-4 py-3 font-medium">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {loading && (
              <tr>
                <td className="px-4 py-5" colSpan={4}>
                  <div className="h-4 w-1/3 bg-muted rounded animate-pulse" />
                </td>
              </tr>
            )}
            {error && (
              <tr>
                <td className="px-4 py-5 text-rose-600" colSpan={4}>
                  {error}
                </td>
              </tr>
            )}
            {!loading && users.length === 0 && (
              <tr>
                <td className="px-4 py-10 text-center text-muted-foreground" colSpan={4}>
                  No users yet. Click "Add New User" to create the first user.
                </td>
              </tr>
            )}
            {users.map((u) => (
              <tr key={u.id} className="hover:bg-muted/30">
                <td className="px-4 py-4">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center text-xs font-semibold">
                      {u.name?.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase() || "U"}
                    </div>
                    <div className="leading-tight">
                      <div className="font-medium">{u.name}</div>
                      {u.phone && <div className="text-muted-foreground text-xs">{u.phone}</div>}
                    </div>
                  </div>
                </td>
                <td className="px-4 py-4">{u.email}</td>
                <td className="px-4 py-4"><RoleBadge role={u.role as any} /></td>
                <td className="px-4 py-4"><StatusBadge status={u.status as any} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

