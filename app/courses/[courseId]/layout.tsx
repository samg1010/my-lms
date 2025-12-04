// No Prisma import needed anymore
// src/app/courses/[courseId]/layout.tsx

export async function generateStaticParams() {
  // Replace with your real course IDs (or just the one you're testing)
  return [
    { courseId: "157326bb-7f37-400d-b519-250d4705da07" },
    // Add more real course IDs here later if you want
  ];
}

export default function CourseLayout({ children }: { children: React.ReactNode }) {
  return <div className="min-h-screen bg-gray-50">{children}</div>;
}