import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { createServerClient } from "@/lib/supabase/client"

export async function middleware(request: NextRequest) {
  const hostname = request.headers.get("host") || ""
  const url = request.nextUrl.clone()
  const pathname = url.pathname

  // Check if this is a student subdomain
  const isStudent = hostname.startsWith("student.")

  if (isStudent) {
    const response = NextResponse.next()
    response.headers.set("x-subdomain", "student")
    return response
  }

  // Public routes that don't require authentication
  const isLoginPage = pathname === "/login"
  
  // Allow API routes and public assets
  if (pathname.startsWith("/api") || pathname.startsWith("/_next") || pathname.startsWith("/favicon")) {
    return NextResponse.next()
  }

  // Allow login page
  if (isLoginPage) {
    return NextResponse.next()
  }

  // ============================================================================
  // TRAFFIC COP: Strict Portal Separation
  // ============================================================================
  
  try {
    // Get user session to check role
    const supabase = createServerClient()
    const { data: { session } } = await supabase.auth.getSession()
    
    if (session?.user) {
      // Fetch user role from database
      const { data: userData } = await supabase
        .from("users")
        .select("role")
        .eq("id", session.user.id)
        .single() as { data: any; error: any }
      
      const userRole = (userData?.role as string) || session.user.user_metadata?.role
      
      // RULE 1: Students CANNOT access /admin or /staff routes
      if (userRole === 'student' && (pathname.startsWith('/admin') || pathname.startsWith('/staff'))) {
        console.log(`[Middleware] Blocking student from accessing ${pathname}, redirecting to /student`)
        url.pathname = '/student'
        return NextResponse.redirect(url)
      }
      
      // RULE 2: Staff (teachers/admins) CANNOT access /student routes
      // Exception: Allow if they have a preview mode flag
      const isPreviewMode = request.cookies.get('preview-mode')?.value === 'true'
      if ((userRole === 'teacher' || userRole === 'admin') && pathname.startsWith('/student') && !isPreviewMode) {
        console.log(`[Middleware] Blocking staff from accessing ${pathname}, redirecting to /admin`)
        url.pathname = '/admin'
        return NextResponse.redirect(url)
      }
    }
  } catch (error) {
    console.error('[Middleware] Error checking user role:', error)
    // On error, allow request through - ProtectedRoute will handle auth
  }

  // All other routes are protected - ProtectedRoute component will handle auth check
  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
}
