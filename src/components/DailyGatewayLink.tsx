// src/components/DailyGatewayLink.tsx
import type { ReadingWeek } from "@/data/readingPlan/types";
import { ReactNode } from "react";

type Props = {
  day: ReadingWeek["days"][number];
  version?: string;        // default = NIV (change once here if you want)
  className?: string;
  children?: ReactNode;
};

export default function DailyGatewayLink({
  day,
  version = "NIV",
  className,
  children,
}: Props) {
  const passages = day.readings
    .map(r => r.replace(/–/g, "-").trim())  // en-dash → hyphen
    .join(";");                             // Genesis 1-2;Matthew 1

  const url = `https://www.biblegateway.com/passage/?search=${encodeURIComponent(
    passages
  )}&version=${version}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-3 font-bold text-white shadow-lg hover:from-indigo-700 hover:to-purple-700 transition-all ${className || ""}`}
    >
      {children || (
        <>
          Open All Passages Together (1 Tab)
        </>
      )}
    </a>
  );
}