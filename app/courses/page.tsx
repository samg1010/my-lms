// src/app/courses/page.tsx   ← FINAL FIXED VERSION

import Link from "next/link";

const courses = [
  {
    id: "157326bb-7f37-400d-b519-250d4705da07",
    title: "Bible in a Year",
    subtitle: "2025",
    description: "Read through the entire Bible in 52 weeks with guided readings, memory verses, and reflections.",
  },
  // add more courses later
];

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-8">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">Choose Your Journey</h1>
        <p className="text-2xl text-gray-600">Free biblical courses • Start instantly</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-5xl mx-auto">
        {courses.map((course) => (
          <Link
            key={course.id}
            href={`/courses/${course.id}`}   // ← ONLY THIS LINK — never hard-code /week/1
            className="group block transform hover:scale-105 transition-all duration-300"
          >
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
              <div className="bg-gradient-to-r from-purple-600 to-purple-700 p-16 text-center">
                <h2 className="text-7xl font-bold text-white">Cross</h2>
              </div>
              <div className="p-10 text-center">
                <h3 className="text-3xl font-bold text-gray-800 mb-3">{course.title}</h3>
                <p className="text-xl text-gray-600 mb-6">{course.subtitle}</p>
                <p className="text-gray-700 leading-relaxed mb-8">{course.description}</p>
                <button className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white font-bold text-xl py-5 rounded-2xl hover:from-purple-700 hover:to-purple-800 transition-all">
                  Start This Course – Free
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}