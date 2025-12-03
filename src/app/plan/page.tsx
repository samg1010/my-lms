// src/app/plan/page.tsx
import BibleSearch from "@/components/BibleSearch";
import GlobalVersionSelector from "@/components/GlobalVersionSelector";
import { BibleVersionProvider } from "@/context/BibleVersionContext";
import Image from "next/image";
import { readingPlan } from "@/data/readingPlan";
import Quadrilateral from "@/components/Quadrilateral";
import DarkModeToggle from "@/components/DarkModeToggle";

export default function PlanPage() {
  return (
    <BibleVersionProvider>
      <>
        {/* Church Header */}
        <div className="w-full bg-red-800 py-12 text-white text-center">
          <Image
            src="/church/logo.png"
            alt="Filipino Evangelical Methodist Church"
            width={180}
            height={180}
            className="mx-auto mb-6 rounded-full shadow-2xl"
            priority
          />
          <h1 className="text-5xl md:text-6xl font-black tracking-tight">
            RESUME BIBLE 2026
          </h1>
          <p className="text-4xl mt-4 font-medium">
            Filipino Evangelical Methodist Church
          </p>
          <p className="text-xl mt-3 opacity-95">
            Bible-based · Christ-centered · Spirit-driven
          </p>
        </div>

        <BibleSearch />
        <GlobalVersionSelector />

        {/* Weeks Grid */}
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
            {readingPlan.map((week) => (
              <Quadrilateral key={week.week} weekData={week} />
            ))}
          </div>
        </div>
      </>
    </BibleVersionProvider>
  );

  return (
    <BibleVersionProvider>
      {/* Header, Search, Version Selector, Grid... */}

      {/* ← THIS IS ALL YOU NEED TO ADD → */}
      <DarkModeToggle />
    </BibleVersionProvider>
  );
}