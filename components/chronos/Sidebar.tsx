"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, FileText, Settings, BarChart } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
    { icon: Home, label: "Command", href: "/dashboard" },
    { icon: FileText, label: "Dossier", href: "/profile" },
    { icon: BarChart, label: "Stats", href: "/stats" },
    { icon: Settings, label: "System", href: "/settings" }
]

export function Sidebar() {
    const pathname = usePathname()

    return (
        <div
            className="w-20 min-h-screen border-r flex flex-col items-center py-6 gap-4"
            style={{
                backgroundColor: 'var(--chronos-bg-void)',
                borderColor: 'var(--chronos-accent-time-glow)'
            }}
        >
            {navItems.map((item) => {
                const Icon = item.icon
                const isActive = pathname === item.href

                return (
                    <Link
                        key={item.href}
                        href={item.href}
                        className="group relative flex items-center justify-center w-12 h-12 rounded-lg transition-all duration-300"
                        style={{
                            backgroundColor: isActive ? 'rgba(0, 217, 255, 0.15)' : 'transparent',
                            borderWidth: '1px',
                            borderStyle: 'solid',
                            borderColor: isActive ? 'var(--chronos-accent-time)' : 'transparent'
                        }}
                    >
                        <Icon
                            className="w-5 h-5 transition-colors duration-300"
                            style={{
                                color: isActive ? 'var(--chronos-accent-time)' : 'var(--chronos-text-muted)'
                            }}
                        />

                        {/* Tooltip */}
                        <div
                            className="absolute left-full ml-2 px-3 py-1.5 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-50"
                            style={{
                                backgroundColor: 'var(--chronos-bg-nebula)',
                                color: 'var(--chronos-text-primary)',
                                fontFamily: 'var(--font-jetbrains-mono)',
                                fontSize: '0.75rem',
                                boxShadow: '0 4px 6px var(--chronos-accent-time-glow)'
                            }}
                        >
                            {item.label}
                        </div>

                        {/* Hover glow */}
                        <div
                            className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            style={{
                                boxShadow: '0 0 20px var(--chronos-accent-time-glow)'
                            }}
                        />
                    </Link>
                )
            })}
        </div>
    )
}
