"use client"

import * as React from "react"
import { ChevronRight, Home } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface BreadcrumbItem {
  label: string
  href?: string
}

interface StudentHeaderProps {
  breadcrumbs: BreadcrumbItem[]
  className?: string
}

export function StudentHeader({ breadcrumbs, className }: StudentHeaderProps) {
  return (
    <header className={cn("glass-strong sticky top-0 z-50 border-b", className)}>
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <nav className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-muted-foreground overflow-x-auto">
          <Link
            href="/"
            className="flex items-center gap-1 hover:text-foreground transition-colors flex-shrink-0"
          >
            <Home className="h-3 w-3 sm:h-4 sm:w-4" strokeWidth={1.5} />
          </Link>
          {breadcrumbs.map((crumb, index) => (
            <React.Fragment key={index}>
              <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" strokeWidth={1.5} />
              {crumb.href ? (
                <Link
                  href={crumb.href}
                  className="hover:text-foreground transition-colors whitespace-nowrap"
                >
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-foreground font-medium whitespace-nowrap">{crumb.label}</span>
              )}
            </React.Fragment>
          ))}
        </nav>
      </div>
    </header>
  )
}
