// src/components/BibleLink.tsx
"use client";

import Link from "next/link";
import { useBibleVersion } from "@/context/BibleVersionContext";  // ← THIS IS THE ONLY CORRECT PATH

export default function BibleLink({ reference }: { reference: string }) {
  const { version } = useBibleVersion();

  const url = `https://www.biblegateway.com/passage/?search=${encodeURIComponent(
    reference.replace(/–/g, "-").trim()
  )}&version=${version === "ASND" ? "ASND" : version === "CEB" ? "CEB" : version}`;

  return (
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="font-bold text-xl text-cyan-400 hover:text-cyan-300 underline decoration-2 underline-offset-4 transition-all"
    >
      {reference}
    </Link>
  );
}