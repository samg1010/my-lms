// src/app/dashboard/page.tsx
import type { NextPage } from 'next';

const DashboardPage: NextPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-900 to-black text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl md:text-8xl font-black text-amber-400 mb-8">
          FEMC DASHBOARD
        </h1>
        <p className="text-2xl md:text-4xl mb-12">
          Welcome to your Bible in a Year journey
        </p>
        <a
          href="/"
          className="inline-block px-16 py-8 bg-amber-600 hover:bg-amber-500 rounded-full font-black text-2xl shadow-2xl"
        >
          Go to Home
        </a>
      </div>
    </div>
  );
};

export default DashboardPage;