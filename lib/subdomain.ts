export function getSubdomain(hostname: string): string | null {
  if (typeof window === "undefined") {
    // Server-side
    return null
  }
  
  const parts = hostname.split(".")
  
  // For localhost development: student.localhost
  if (hostname.includes("localhost")) {
    const subdomain = parts[0]
    return subdomain !== "localhost" ? subdomain : null
  }
  
  // For production: student.example.com
  if (parts.length >= 3) {
    return parts[0]
  }
  
  return null
}

export function isStudentSubdomain(hostname: string): boolean {
  const subdomain = getSubdomain(hostname)
  return subdomain === "student"
}
