// src/app/dashboard/page.tsx
export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-900 to-black text-white p-8">
      <h1 className="text-5xl font-black text-amber-400 mb-6">
        FEMC Dashboard
      </h1>
      <p className="text-2xl">Welcome to your Bible in a Year journey!</p>
      <div className="mt-12">
        <a
          href="/courses/bible-2026/week/1"
          className="inline-block px-12 py-6 bg-amber-600 hover:bg-amber-500 rounded-full font-bold text-xl"
        >
          Begin Reading Now
        </a>
      </div>
    </div>
  );
}