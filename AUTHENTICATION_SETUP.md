# Authentication Setup Guide

## ✅ Implementation Complete!

Your LMS now has a complete authentication system using Supabase Auth. Here's what was implemented:

### 📁 Files Created/Updated:

1. **Login Page**: `app/(auth)/login/page.tsx`
   - Clean, centered login form
   - Email and password fields
   - Error handling with alerts
   - Automatic redirect if already logged in

2. **Protected Route Component**: `components/auth/ProtectedRoute.tsx`
   - Wraps protected pages
   - Checks authentication status
   - Supports role-based access (admin/teacher)
   - Redirects to login if not authenticated

3. **Sign Out Button**: `components/auth/SignOutButton.tsx`
   - Added to sidebar footer
   - Signs out and redirects to login

4. **Auth Hook**: `lib/hooks/useAuth.tsx`
   - Updated to use Supabase Auth
   - Fetches user details from database
   - Provides user, isAdmin, isTeacher, isLoading

5. **API Routes**:
   - `app/api/auth/login/route.ts` - Login endpoint
   - `app/api/auth/logout/route.ts` - Logout endpoint
   - `app/api/auth/me/route.ts` - Get current user

6. **Updated Layouts**:
   - `app/(admin)/layout.tsx` - Wrapped with ProtectedRoute
   - `components/layout/AdminSidebar.tsx` - Added Sign Out button

---

## 🔐 How to Create Users in Supabase

### Option 1: Create User via Supabase Dashboard (Recommended)

1. Go to your Supabase Dashboard
2. Navigate to **Authentication** → **Users**
3. Click **"Add User"** → **"Create new user"**
4. Fill in:
   - **Email**: user@example.com
   - **Password**: (set a password)
   - **Auto Confirm User**: ✅ (check this)
5. Click **"Create User"**

### Option 2: Create User via SQL (Link Auth User to Users Table)

After creating a user in Supabase Auth, you need to link it to your `users` table:

```sql
-- After creating user in Supabase Auth Dashboard, insert into users table
INSERT INTO users (id, email, name, role, status)
VALUES (
  'auth-user-id-here',  -- Get this from Auth Dashboard
  'user@example.com',
  'User Name',
  'admin',  -- or 'teacher' or 'student'
  'active'
);
```

### Option 3: Sign Up Flow (Future Implementation)

You can add a sign-up page that:
1. Creates auth user via `supabase.auth.signUp()`
2. Automatically inserts into `users` table via API trigger or function

---

## 🚀 How It Works

### Authentication Flow:

1. **User visits protected route** (e.g., `/admin/dashboard`)
2. **ProtectedRoute checks auth** → Redirects to `/login` if not authenticated
3. **User logs in** → Supabase Auth creates session
4. **Session stored** → In browser cookies/localStorage
5. **User data fetched** → From `users` table in database
6. **Access granted** → User can access protected routes

### Login Flow:

```
/login → Enter credentials → Supabase Auth → Session created → Redirect to /admin/dashboard
```

### Logout Flow:

```
Click Sign Out → Supabase Auth signs out → Session cleared → Redirect to /login
```

---

## 🛡️ Route Protection

### Protected Routes:
- `/admin/*` - All admin routes are protected
- `/` - Root redirects to dashboard (protected)

### Public Routes:
- `/login` - Login page (redirects to dashboard if already logged in)

### Role-Based Access:
```tsx
// Require admin role
<ProtectedRoute requireAdmin>
  <AdminOnlyComponent />
</ProtectedRoute>

// Require teacher or admin
<ProtectedRoute requireTeacher>
  <TeacherComponent />
</ProtectedRoute>
```

---

## 📝 Testing the Authentication

### Test Login:
1. Navigate to `http://localhost:3000/login`
2. Enter credentials of a user created in Supabase
3. Click "Sign In"
4. Should redirect to `/admin/dashboard`

### Test Protected Route:
1. Log out
2. Try accessing `http://localhost:3000/admin/dashboard`
3. Should redirect to `/login`

### Test Sign Out:
1. While logged in, click "Sign Out" in sidebar
2. Should redirect to `/login`

---

## ⚠️ Important Notes

### 1. User Must Exist in Both Tables:
- **Supabase Auth** (for authentication)
- **Users Table** (for role and profile data)

### 2. Email Matching:
- The `email` in Supabase Auth must match the `email` in your `users` table
- User ID (`id`) should be the same in both (use Auth user ID)

### 3. Development vs Production:
- Currently using anonymous RLS policies for development
- **Update RLS policies for production** to enforce proper security

### 4. Password Requirements:
- Supabase has default password requirements
- Minimum 6 characters (can be configured)

---

## 🔧 Troubleshooting

### "Invalid credentials" error:
- Check email/password are correct
- Verify user exists in Supabase Auth Dashboard
- Check user is confirmed (Auto Confirm should be checked)

### User not found after login:
- Verify user exists in `users` table
- Check email matches between Auth and users table
- Check user ID matches

### Redirect loops:
- Clear browser cookies/localStorage
- Check ProtectedRoute logic
- Verify middleware isn't conflicting

### Session not persisting:
- Check Supabase client configuration
- Verify cookies are being set
- Check browser console for errors

---

## 🎯 Next Steps (Optional Enhancements)

1. **Add Sign Up Page** - Allow new users to register
2. **Email Verification** - Send verification emails
3. **Password Reset** - "Forgot Password" flow
4. **Remember Me** - Long-lived sessions
5. **Two-Factor Authentication** - Additional security
6. **OAuth Providers** - Google, GitHub, etc.

---

## 📚 Resources

- [Supabase Auth Documentation](https://supabase.com/docs/guides/auth)
- [Next.js Middleware](https://nextjs.org/docs/app/building-your-application/routing/middleware)
- [React Context API](https://react.dev/reference/react/useContext)

---

Your authentication system is now fully functional! 🎉
