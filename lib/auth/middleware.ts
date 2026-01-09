import { NextRequest, NextResponse } from "next/server"
import type { UserRole } from "@/lib/types/auth"

/**
 * Authentication & Authorization Middleware
 * Validates JWT token and extracts user information
 */
export async function authenticateRequest(request: NextRequest): Promise<{
  user: { id: string; role: UserRole; email: string } | null
  error?: string
}> {
  try {
    // Get token from Authorization header or cookies
    const token =
      request.headers.get("authorization")?.replace("Bearer ", "") ||
      request.cookies.get("auth-token")?.value

    // DEV MODE FALLBACK:
    // If no token provided during local development, return a mock user
    if (!token) {
      if (process.env.NODE_ENV !== "production") {
        const devRole =
          (process.env.NEXT_PUBLIC_AUTH_DEV_ROLE as UserRole) ||
          (process.env.AUTH_DEV_ROLE as UserRole) ||
          "admin"

        return {
          user: {
            id: devRole === "teacher" ? "dev-teacher-1" : "dev-admin-1",
            role: devRole,
            email:
              devRole === "teacher"
                ? "teacher@example.com"
                : "admin@example.com",
          },
        }
      }

      return { user: null, error: "Unauthorized" }
    }

    // Verify JWT token (implement your JWT verification logic)
    // This is a placeholder - replace with your actual JWT verification
    const decoded = await verifyJWT(token) // Implement this function

    if (!decoded || !decoded.userId || !decoded.role) {
      return { user: null, error: "Invalid token" }
    }

    return {
      user: {
        id: decoded.userId,
        role: decoded.role as UserRole,
        email: decoded.email,
      },
    }
  } catch (error) {
    return { user: null, error: "Authentication failed" }
  }
}

/**
 * Placeholder for JWT verification
 * Replace with your actual JWT library (e.g., jose, jsonwebtoken)
 */
async function verifyJWT(token: string): Promise<any> {
  // TODO: Implement actual JWT verification
  // Example with jose:
  // import { jwtVerify } from 'jose'
  // const secret = new TextEncoder().encode(process.env.JWT_SECRET)
  // const { payload } = await jwtVerify(token, secret)
  // return payload
  
  // For now, return mock data for development
  return {
    userId: "user-123",
    role: "admin", // or "teacher"
    email: "user@example.com",
  }
}

/**
 * Check if user has required role
 */
export function hasRole(
  userRole: UserRole | undefined,
  requiredRole: UserRole | UserRole[]
): boolean {
  if (!userRole) return false
  if (Array.isArray(requiredRole)) {
    return requiredRole.includes(userRole)
  }
  return userRole === requiredRole
}

/**
 * Require authentication middleware wrapper
 */
export function requireAuth(
  handler: (req: NextRequest, user: { id: string; role: UserRole }) => Promise<NextResponse>
) {
  return async (req: NextRequest) => {
    const { user, error } = await authenticateRequest(req)

    if (!user || error) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    return handler(req, user)
  }
}

/**
 * Require specific role middleware wrapper
 */
export function requireRole(
  roles: UserRole | UserRole[],
  handler: (req: NextRequest, user: { id: string; role: UserRole }) => Promise<NextResponse>
) {
  return async (req: NextRequest) => {
    const { user, error } = await authenticateRequest(req)

    if (!user || error) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    if (!hasRole(user.role, roles)) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 })
    }

    return handler(req, user)
  }
}
