"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Home,
  Clock,
  GraduationCap,
  Users,
  Building2,
  User,
  Box,
  Image,
  Settings,
  Factory,
  Menu,
  X,
  Trash2,
} from "lucide-react"
import { Sidebar, SidebarHeader, SidebarContent, SidebarItem, SidebarFooter } from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { SignOutButton } from "@/components/auth/SignOutButton"
import { cn } from "@/lib/utils"

const menuItems = [
  { icon: Home, label: "Start page", href: "/admin/dashboard" },
  { icon: Clock, label: "Schedule", href: "/admin/schedule" },
  { icon: GraduationCap, label: "Groups", href: "/admin/groups" },
  { icon: Users, label: "Students", href: "/admin/students" },
  { icon: Building2, label: "Venues", href: "/admin/venues" },
  { icon: User, label: "Users", href: "/admin/users" },
  { icon: Box, label: "Courses", href: "/admin/courses" },
  { icon: Image, label: "Media", href: "/admin/media" },
  { icon: Trash2, label: "Recycle Bin", href: "/admin/bin" },
  { icon: Building2, label: "Branch Settings", href: "/admin/branch-settings" },
  { icon: Factory, label: "All Branches", href: "/admin/branches" },
  { icon: Settings, label: "Settings", href: "/admin/settings" },
]

export function AdminSidebar() {
  const [collapsed, setCollapsed] = React.useState(false)
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const pathname = usePathname()

  return (
    <>
      {/* Mobile menu button */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="glass"
        >
          {mobileOpen ? (
            <X className="h-5 w-5" strokeWidth={1.5} />
          ) : (
            <Menu className="h-5 w-5" strokeWidth={1.5} />
          )}
        </Button>
      </div>

      {/* Desktop Sidebar */}
      <Sidebar
        collapsible
        defaultCollapsed={collapsed}
        className="hidden lg:flex"
      >
        <SidebarHeader>
          <div className="flex items-center justify-between w-full">
            <h2 className={cn("font-semibold text-lg", collapsed && "hidden")}>
              NIT
            </h2>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setCollapsed(!collapsed)}
            >
              <Menu className="h-5 w-5" strokeWidth={1.5} />
            </Button>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <nav className="space-y-1">
            {menuItems.map((item) => {
              const Icon = item.icon
              const isActive = 
                pathname === item.href || 
                pathname?.startsWith(item.href + "/") ||
                (item.href === "/admin/dashboard" && pathname === "/admin")
              return (
                <Link key={item.href} href={item.href} className="no-underline">
                  <SidebarItem
                    active={isActive}
                    className={cn(collapsed && "justify-center")}
                  >
                    <Icon className="h-5 w-5 flex-shrink-0" strokeWidth={1.5} />
                    {!collapsed && <span className="whitespace-nowrap">{item.label}</span>}
                  </SidebarItem>
                </Link>
              )
            })}
          </nav>
        </SidebarContent>
        <SidebarFooter className="p-4 space-y-2">
          <SignOutButton variant="ghost" className="w-full justify-start" />
          <div className={cn("text-xs text-muted-foreground text-center", collapsed && "hidden")}>
            Version 1.0.0
          </div>
        </SidebarFooter>
      </Sidebar>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-40">
          <div
            className="fixed inset-0 bg-black/50"
            onClick={() => setMobileOpen(false)}
          />
          <Sidebar className="fixed left-0 top-0 z-50">
            <SidebarHeader>
              <div className="flex items-center justify-between w-full">
                <h2 className="font-semibold text-lg">NIT</h2>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setMobileOpen(false)}
                >
                  <X className="h-5 w-5" strokeWidth={1.5} />
                </Button>
              </div>
            </SidebarHeader>
            <SidebarContent>
              <nav className="space-y-1">
                {menuItems.map((item) => {
                  const Icon = item.icon
                  const isActive = 
                    pathname === item.href || 
                    pathname?.startsWith(item.href + "/") ||
                    (item.href === "/admin/dashboard" && pathname === "/admin")
                  return (
                    <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)} className="no-underline">
                      <SidebarItem active={isActive}>
                        <Icon className="h-5 w-5 flex-shrink-0" strokeWidth={1.5} />
                        <span className="whitespace-nowrap">{item.label}</span>
                      </SidebarItem>
                    </Link>
                  )
                })}
              </nav>
            </SidebarContent>
          </Sidebar>
        </div>
      )}
    </>
  )
}
