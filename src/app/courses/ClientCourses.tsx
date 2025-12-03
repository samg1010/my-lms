// src/app/courses/ClientCourses.tsx
'use client';

import Link from 'next/link';
import { useUser } from '@clerk/nextjs';
import { createClient } from '@/lib/supabase-client';

export default function ClientCourses({ courses }: { courses: any[] }) {
  const { user } = useUser();
  const supabase = createClient();

  const enroll = async (courseId: string) => {
    if (!user) {
      alert('Please sign in first');
      return;
    }

    await supabase
      .from('enrollments')
      .upsert(
        { user_id: user.id, course_id: courseId },
        { onConflict: 'user_id,course_id' }
      );

    window.location.href = `/courses/${courseId}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-6xl font-bold text-center mb-16 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          Free Bible Courses
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {courses.map((course) => (
            <div key={course.id} className="group">
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden transform group-hover:scale-105 transition-all duration-500">
                <div className="h-64 bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                  <span className="text-white text-8xl font-bold">Cross</span>
                </div>

                <div className="p-10">
                  <h2 className="text-3xl font-bold mb-4">{course.title}</h2>
                  <p className="text-gray-600 mb-10 leading-relaxed">
                    {course.description}
                  </p>

                  <button
                    onClick={() => enroll(course.id)}
                    className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-5 rounded-2xl font-bold text-2xl hover:from-indigo-700 hover:to-purple-700 transition shadow-lg"
                  >
                    Start This Course – Free
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}