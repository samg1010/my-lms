import { ClerkProvider } from '@clerk/nextjs';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'My LMS',
  description: 'Private learning platform',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-gray-50 dark:bg-black text-black dark:text-white min-h-screen">
        {children}
      </body>
    </html>
  );

// In your main layout or _app.tsx
useEffect(() => {
  analytics.page();
  analytics.track("app_opened");
}, []);

// In DayCard.tsx — right after the button click
const handleOneClick = () => {
  analytics.track("day_completed", {
    week: currentWeek.week,
    day: day.date,
    month: day.month,
    readings: day.readings,
    version: currentVersion,
  });

  // …your existing open-one-tab code
};

// When user changes version
analytics.track("version_changed", { from: old, to: newVersion });

// On January 1 when they open Week 1 again
analytics.track("year_restarted", { year: 2026 });
}