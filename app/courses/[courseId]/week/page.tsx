// src/app/courses/[courseId]/week/[week]/page.tsx
import { createServerSupabase } from '@/lib/supabase';
import { notFound } from 'next/navigation';

export default async function LessonPage({
  params,
}: {
  params: Promise<{ courseId: string; week: string }>;
}) {
  const { courseId, week } = params;
  const supabase = await createServerSupabase();

  const { data: lesson } = await supabase
    .from('lessons')
    .select('*')
    .eq('course_id', courseId)
    .eq('week', Number(week))
    .single();

  if (!lesson) notFound();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 py-12">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-5xl font-bold text-center mb-4">Week {lesson.week}: {lesson.title}</h1>
        <p className="text-2xl text-center text-gray-700 mb-12">{lesson.reading}</p>

        <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl mb-12">
          <iframe
            src={lesson.video_url}
            allowFullScreen
            className="w-full h-full"
          />
        </div>

        <div className="bg-white rounded-3xl p-10 shadow-xl">
          <h2 className="text-3xl font-bold mb-8">Quick Quiz</h2>
          {/* You can expand this later with real quiz logic */}
          <p className="text-lg text-gray-600">Quiz coming soon — enjoy the video for now!</p>
        </div>
      </div>
    </div>
  );
}