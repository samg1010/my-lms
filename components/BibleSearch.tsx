"use client";

import { useState } from "react";
import Link from "next/link";

const VERSIONS = {
  ASND: "ASND",
  NIV: "NIV",
  KJV: "KJV",
  ESV: "ESV",
  NLT: "NLT",
  CEB: "CEB",
} as const;

export default function BibleSearch() {
  const [query, setQuery] = useState("");
  const [version, setVersion] = useState<keyof typeof VERSIONS>("ASND");

  const url = query
    ? `https://www.biblegateway.com/passage/?search=${encodeURIComponent(
        query.trim()
      )}&version=${VERSIONS[version]}`
    : "";

  return (
    <div className="w-full max-w-2xl mx-auto my-12 px-6">
      <div className="flex flex-col sm:flex-row gap-3 items-stretch">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && url && window.open(url, "_blank")}
          placeholder="Type any verse… e.g. Juan 3:16 or John 3:16"
          className="flex-1 px-6 py-4 text-lg font-medium bg-white dark:bg-gray-900 border-4 border-red-800 dark:border-red-700 rounded-2xl focus:outline-none focus:ring-4 focus:ring-red-500/30 placeholder-gray-500"
        />

        <select
          value={version}
          onChange={(e) => setVersion(e.target.value as keyof typeof VERSIONS)}
          className="px-5 py-4 bg-red-700 text-white font-bold rounded-2xl hover:bg-red-600 transition"
        >
          <option value="ASND">Tagalog (ASND)</option>
          <option value="NIV">English (NIV)</option>
          <option value="KJV">KJV</option>
          <option value="ESV">ESV</option>
          <option value="NLT">NLT</option>
          <option value="CEB">Cebuano</option>
        </select>

        {url && (
          <Link
            href={url}
            target="_blank"
            className="px-8 py-4 bg-gradient-to-r from-red-600 to-red-800 text-white font-bold rounded-2xl hover:from-red-700 hover:to-red-900 transition shadow-lg"
          >
            SEARCH
          </Link>
        )}
      </div>
    </div>
  );
}