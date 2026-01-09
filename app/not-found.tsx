import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="text-center space-y-6 max-w-md">
        <div className="flex items-center justify-center gap-4">
          <span className="text-6xl font-bold">404</span>
          <div className="h-12 w-px bg-border" />
          <p className="text-lg text-muted-foreground">This page could not be found.</p>
        </div>
        <div className="flex items-center justify-center gap-4 pt-4">
          <Link href="/">
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" strokeWidth={1.5} />
              Go Back
            </Button>
          </Link>
          <Link href="/admin/dashboard">
            <Button>
              <Home className="mr-2 h-4 w-4" strokeWidth={1.5} />
              Dashboard
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
