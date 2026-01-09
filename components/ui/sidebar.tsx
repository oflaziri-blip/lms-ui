"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  collapsible?: boolean
  defaultCollapsed?: boolean
}

const Sidebar = React.forwardRef<HTMLDivElement, SidebarProps>(
  ({ className, collapsible = false, defaultCollapsed = false, ...props }, ref) => {
    const [collapsed, setCollapsed] = React.useState(defaultCollapsed)

    return (
      <aside
        ref={ref}
        className={cn(
          "flex h-screen flex-col border-r border-border bg-background text-foreground transition-all duration-300",
          collapsed && collapsible ? "w-16" : "w-64",
          className
        )}
        {...props}
      />
    )
  }
)
Sidebar.displayName = "Sidebar"

const SidebarHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex h-16 items-center border-b px-6", className)}
    {...props}
  />
))
SidebarHeader.displayName = "SidebarHeader"

const SidebarContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex-1 overflow-y-auto px-4 py-4", className)}
    {...props}
  />
))
SidebarContent.displayName = "SidebarContent"

const SidebarFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("border-t px-4 py-4", className)}
    {...props}
  />
))
SidebarFooter.displayName = "SidebarFooter"

const SidebarItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    active?: boolean
  }
>(({ className, active = false, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground cursor-pointer",
      active && "bg-primary/10 text-primary font-semibold",
      className
    )}
    {...props}
  />
))
SidebarItem.displayName = "SidebarItem"

export { Sidebar, SidebarHeader, SidebarContent, SidebarFooter, SidebarItem }
