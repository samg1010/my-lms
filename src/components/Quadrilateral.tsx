// src/components/Quadrilateral.tsx
import type { ReadingWeek } from "@/data/readingPlan/types";
import { Flame } from "lucide-react";
import BibleLink from "./BibleLink";               // ← ADD THIS LINE

interface QuadrilateralProps {
  weekData: ReadingWeek;
}

export default function Quadrilateral({ weekData }: QuadrilateralProps) {
  const { week, title, days } = weekData;

  return (
    <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl p-8 border-4 border-gray-200 dark:border-gray-700 
                    hover:shadow-3xl hover:border-red-500 transition-all duration-500">
      {/* Week Title */}
      <div className="text-center mb-6">
        <h2 className="text-2xl font-black text-red-700 dark:text-red-500 flex items-center justify-center gap-3">
          <Flame className="w-8 h-8" />
          Week {week}: {title}
        </h2>
      </div>

      {/* Days */}
      <div className="space-y-5">
        {days.map((day) => (
          <div
            key={day.date}
            className={`p-5 rounded-2xl border-4 transition-all
              ${day.renewal 
                ? "renewal-day border-red-900" 
                : "bg-gray-50 dark:bg-gray-800 border-gray-300 dark:border-gray-600"
              }`}
          >
            <div className="font-bold text-lg mb-2">
              {day.month} {day.date} • Day {day.day}
              {day.renewal && <span className="renewal-badge ml-3">COVENANT RENEWAL</span>}
            </div>

            <div className="space-y-2">
              {day.readings.map((ref, i) => (
                <div key={i} className="text-base">
                  <BibleLink reference={ref} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}