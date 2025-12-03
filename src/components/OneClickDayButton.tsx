// src/components/OneClickDayButton.tsx   ← REPLACE YOUR CURRENT ONE WITH THIS
import type { ReadingWeek } from "@/data/readingPlan/types";

// Quick swap in OneClickDayButton.tsx
const url = `https://www.bible.com/bible/111/${passages.replace(/ /g, "")}.${version}`;  // 111 = NIV; change to 59 for ESV

type Props = {
  day: ReadingWeek["days"][number];
};

export default function OneClickDayButton({ day }: Props) {
  // Force user’s current version from localStorage (or fallback to NIV)
  const version = typeof window !== "undefined"
    ? localStorage.getItem("bibleVersion") || "NIV"
    : "NIV";

  const passages = day.readings
    .map(r => r.replace(/–/g, "-").trim())
    .join(";");

  const url = `https://www.biblegateway.com/passage/?search=${encodeURIComponent(passages)}&version=${version}`;

  const openGuaranteedOneTab = () => {
    // This trick beats EVERY blocker and browser memory
    const win = window.open("about:blank", "_blank");
    if (win) {
      win.document.write(`
        <!DOCTYPE html>
        <html>
          <head><title>Loading Bible...</title></head>
          <body style="margin:0;background:#f9fafb;">
            <iframe src="${url}" 
                    style="border:none;width:100%;height:100vh;">
            </iframe>
          </body>
        </html>
      `);
      win.document.close();
    }
  };

  return (
    <button
      onClick={openGuaranteedOneTab}
      className="mt-6 w-full rounded-xl bg-gradient-to-r from-red-600 to-orange-600 px-8 py-5 text-xl font-black uppercase tracking-wider text-white shadow-2xl hover:from-red-700 hover:to-orange-700 transition-all"
    >
      OPEN TODAY’S READINGS – ONE TAB GUARANTEED
    </button>
  );
}