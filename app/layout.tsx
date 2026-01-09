import type { Metadata } from "next"
import { Inter, JetBrains_Mono, Orbitron } from "next/font/google"
import { AuthProvider } from "@/lib/hooks/useAuth"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
})

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    template: "%s | NIT",
    default: "Numeris Institute of Technology"
  },
  description: "Numeris Institute of Technology - Modern Learning Management System with industrial minimalist design",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} ${orbitron.variable} font-sans antialiased min-h-screen bg-background text-foreground`}
      >
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  )
}
