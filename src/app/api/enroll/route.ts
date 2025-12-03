// src/app/api/enroll/route.ts
import { createServerSupabase } from '@/lib/supabase';
import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const user = await currentUser();
  if (!user) return redirect('/sign-in');

  const url = new URL(request.url);
  const courseId = url.searchParams.get('course');
  if (!courseId) return redirect('/courses');

  const supabase = await createServerSupabase();

  const { error } = await supabase
    .from('enrollments')
    .upsert(
      {
        user_id: user.id,           // ← Clerk string ID
        course_id: courseId,
        progress: 0,
      },
      { onConflict: 'user_id,course_id' }
    );

  if (error) {
    console.error('Enrollment failed:', error);
    return NextResponse.redirect(new URL('/courses', request.url));
  }

  // This line is the key — force redirect even if headers were sent
  return NextResponse.redirect(new URL(`/courses/${courseId}`, request.url));
}