# Fix RLS Policy Violations for Course Import

The import is failing because Row Level Security (RLS) policies are blocking the insert operations. Here are two solutions:

## Solution 1: Use Service Role Key (Recommended)

This is the most secure approach. It bypasses RLS only for admin operations.

### Step 1: Get Your Service Role Key

1. Go to your Supabase Dashboard
2. Navigate to **Settings** → **API**
3. Copy the **`service_role` key** (NOT the anon key)
4. ⚠️ **Keep this secret!** Never expose it to the client-side

### Step 2: Add to Environment Variables

Add this to your `.env.local` file:

```env
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key-here
```

### Step 3: Restart Your Dev Server

```bash
npm run dev
```

The import script will now use the service role key to bypass RLS.

---

## Solution 2: Update RLS Policies (Quick Fix)

If you can't use the service role key (or for development only), update the RLS policies:

### Step 1: Run the SQL Fix

1. Go to Supabase SQL Editor
2. Run the file: `lib/database/fix_courses_rls.sql`
3. This will update the RLS policies to be more permissive

### Step 2: Try Import Again

Go back to `/admin/settings` and try importing again.

---

## Verification

After applying either solution:

1. Go to `/admin/settings`
2. Click "Select JSON File"
3. Upload your course data JSON
4. The import should now succeed

---

## Security Notes

- **Solution 1 (Service Role)**: ✅ More secure - Only bypasses RLS for server-side admin operations
- **Solution 2 (RLS Update)**: ⚠️ Less secure - Allows inserts if policies are met, but still requires authentication

For production, use **Solution 1**.

---

## Troubleshooting

### "SUPABASE_SERVICE_ROLE_KEY not set" Warning
- Make sure you added it to `.env.local`
- Restart your dev server
- The script will fall back to anon key (which may still fail RLS)

### Still Getting RLS Errors After Solution 2
- Make sure you ran the SQL in Supabase SQL Editor
- Check that the policies were created successfully
- Verify your user has the 'admin' role in the database
