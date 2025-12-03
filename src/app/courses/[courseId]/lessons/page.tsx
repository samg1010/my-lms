// src/app/courses/[courseId]/lessons/page.tsx
import { createServerSupabase } from '@/lib/supabase';
import { currentUser } from '@clerk/nextjs/server';
import Link from 'next/link';

const lessons = [
  { id: '1', title: 'Week 1 – The Story So Far', video: 'https://www.youtube.com/embed/_OLezoUvOEQ' },
  { id: '2', title: 'Week 2 – Gospels & Acts', video: 'https://www.youtube.com/embed/7m7Y1ADoq2U' },
  { id: '3', title: 'Week 3 – Paul’s Letters', video: 'https://www.youtube.com/embed/rooBLd2Hbl0' },
  { id: '4', title: 'Week 4 – General Epistles', video: 'https://www.youtube.com/embed/GQ5lZ6e3uSt' },
  { id: '5', title: 'Week 5 – Hebrews & Revelation', video: 'https://www.youtube.com/embed/5Nv2X3p7D8U' },
  { id: '6', title: 'Week 6 – Living the Story Today', video: 'https://www.youtube.com/embed/9k5G9m9Y9kQ' },
];

export default async function LessonsPage({ params }: { params: { courseId: string } }) {
  const user = await currentUser();
  const supabase = await createServerSupabase();
  const { data: progress } = user 
    ? await supabase.from('enrollments').select('progress').eq('user_id', user.id).eq('course_id', params.courseId).single()
    : { data: null };

  const completedUpTo = progress?.progress || 0;

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-8">Course Lessons</h1>
        <div className="space-y-6">
          {lessons.map((lesson, idx) => (
            <Link 
              key={lesson.id}
              href={`/courses/${params.courseId}/lessons/${lesson.id}`}
              className={`block p-8 rounded-2xl border-4 transition-all ${
                idx + 1 <= completedUpTo 
                  ? 'bg-green-50 border-green-500' 
                  : 'bg-white border-gray-200 hover:border-indigo-400'
              }`}
            >
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-2xl font-bold">{lesson.title}</h3>
                  <p className="text-gray-600 mt-2">Watch BibleProject animated overview + reflection</p>
                </div>
                {idx + 1 <= completedUpTo && <span className="text-4xl">Completed</span>}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}