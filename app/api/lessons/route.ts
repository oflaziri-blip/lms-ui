import { createServerClient } from '@/lib/supabase/client';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const supabase = createServerClient();

  const { searchParams } = new URL(request.url);
  const moduleId = searchParams.get('moduleId');

  let query = supabase
    .from('lessons')
    .select('*')
    .eq('is_active', true)
    .order('lesson_number', { ascending: true });

  if (moduleId) {
    query = query.eq('module_id', moduleId);
  }

  const { data, error } = await query;

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ lessons: data });
}
