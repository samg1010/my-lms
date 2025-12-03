import Link from 'next/link';
export const metadata = {
  title: "Resume Bible 2026 — Filipino Evangelical Methodist Church",
  description: "One-year Bible reading plan 2026 • Bible-based · Christ-centered · Spirit-driven",
};
export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 flex items-center justify-center p-8">
      <div className="text-center max-w-4xl">
        <h1 className="text-6xl font-bold text-gray-900 mb-6">
          Bible Learning Management System
        </h1>
        <p className="text-2xl text-gray-700 mb-12">
          Study Scripture deeply • Wesleyan theology • Interactive courses • Free forever
        </p>
        <div className="flex gap-6 justify-center">
          <Link href="/courses" className="bg-indigo-600 text-white px-10 py-5 rounded-xl text-xl font-bold hover:bg-indigo-700 transition shadow-lg">
            Start Learning Now
          </Link>
          <Link href="/sign-up" className="bg-white text-indigo-600 border-4 border-indigo-600 px-10 py-5 rounded-xl text-xl font-bold hover:bg-indigo-50 transition">
            Create Free Account
          </Link>
        </div>
      </div>
    </div>
  );
}