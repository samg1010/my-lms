// src/components/GlobalVersionSelector.tsx
"use client";

import { useBibleVersion } from "@/context/BibleVersionContext";

const labels: Record<string, string> = {
  ASND: "Tagalog (ASND)",
  NIV: "English (NIV)",
  KJV: "KJV",
  ESV: "ESV",
  NLT: "NLT",
  CEB: "Cebuano",
};

export default function GlobalVersionSelector() {
  const { version, setVersion } = useBibleVersion();

  return (
    <div className="flex items-center justify-center gap-6 my-12 px-6">
      <span className="text-2xl font-bold text-white drop-shadow-lg">
        Bible Version:
      </span>
      <select
        value={version}
        onChange={(e) => setVersion(e.target.value as any)}
        className="px-8 py-4 bg-white dark:bg-black border-4 border-red-700 rounded-2xl text-xl font-bold text-red-700 dark:text-red-400 shadow-2xl focus:outline-none focus:ring-4 focus:ring-red-500/50"
      >
        {Object.entries(labels).map(([key, label]) => (
          <option key={key} value={key}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
}