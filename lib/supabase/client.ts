import { createClient } from "@supabase/supabase-js"
import type { Database } from "./types"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY

// Check for missing environment variables and log warning instead of crashing
if (!supabaseUrl || !supabaseAnonKey) {
  console.error("❌ Missing Supabase environment variables!")
  console.error("Please set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY in your .env.local file")
  console.error("The app will continue to load but authentication features will not work.")
}

// Create a safe Supabase client with fallback values to prevent crashes
// Use placeholder values if env vars are missing (client will fail gracefully on API calls)
const safeSupabaseUrl = supabaseUrl || "https://placeholder.supabase.co"
const safeSupabaseKey = supabaseAnonKey || "placeholder-key"

// Client-side Supabase client (uses anon key, respects RLS)
export const supabase = createClient<Database>(safeSupabaseUrl, safeSupabaseKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
  },
})

// Export a helper to check if Supabase is properly configured
export const isSupabaseConfigured = (): boolean => {
  return !!(supabaseUrl && supabaseAnonKey)
}

// For server-side operations (API routes)
// Respects RLS and requires user authentication
export function createServerClient() {
  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error("Missing Supabase environment variables. Cannot create server client.")
  }
  return createClient<Database>(supabaseUrl, supabaseAnonKey, {
    auth: {
      persistSession: false,
    },
  })
}

// For admin operations that need to bypass RLS (use with caution!)
// Only use this in protected admin routes
export function createServiceRoleClient() {
  if (!supabaseServiceRoleKey) {
    console.warn("SUPABASE_SERVICE_ROLE_KEY not set, falling back to anon key")
    return createServerClient()
  }
  
  return createClient<Database>(supabaseUrl, supabaseServiceRoleKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  })
}
