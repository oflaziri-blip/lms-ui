"use client"

import { cn } from "@/lib/utils"

export function Badge({
  children,
  className,
  variant = "default",
}: {
  children: React.ReactNode
  className?: string
  variant?: "default" | "success" | "warning" | "danger" | "indigo"
}) {
  const variants: Record<string, string> = {
    default:
      "bg-muted text-foreground/90 border border-border",
    success:
      "bg-emerald-100 text-emerald-800 border border-emerald-200 dark:bg-emerald-900/20 dark:text-emerald-300 dark:border-emerald-900",
    warning:
      "bg-amber-100 text-amber-800 border border-amber-200 dark:bg-amber-900/20 dark:text-amber-300 dark:border-amber-900",
    danger:
      "bg-rose-100 text-rose-800 border border-rose-200 dark:bg-rose-900/20 dark:text-rose-300 dark:border-rose-900",
    indigo:
      "bg-indigo-100 text-indigo-800 border border-indigo-200 dark:bg-indigo-900/20 dark:text-indigo-300 dark:border-indigo-900",
  }
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  )
}

