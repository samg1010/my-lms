// src/app/courses/[courseId]/week/[week]/page.tsx

import fs from "fs";
import path from "path";
import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Link from "next/link";
import Quadrilateral from "@/components/Quadrilateral";

// ──────────────────────────────────────────────────────────────
// CONSTANTS & PATHS
// ──────────────────────────────────────────────────────────────
const CONTENT_DIR = path.join(process.cwd(), "src/app/courses/content/bible-year");
const TOTAL_WEEKS = 52;

// ──────────────────────────────────────────────────────────────
// REUSABLE COMPONENTS
// ──────────────────────────────────────────────────────────────
const GraceJourneyRing = ({ currentWeek }: { currentWeek: number }) => {
  const progress = (currentWeek / TOTAL_WEEKS) * 100;
  const stages = [
    { name: "Prevenient Grace", weeks: 13, color: "text-purple-600" },
    { name: "Justifying Grace",   weeks: 13, color: "text-blue-600" },
    { name: "Sanctifying Grace",  weeks: 18, color: "text-green-600" },
    { name: "Perfect Love",       weeks: 8,  color: "text-red-600" },
  ];

  let cumulative = 0;
  const currentStage = stages.find((s) => {
    cumulative += s.weeks;
    return currentWeek <= cumulative;
  }) || stages[stages.length - 1];

  return (
    <div className="my-16 bg-gradient-to-br from-purple-50 via-blue-50 to-red-50 rounded-3xl shadow-2xl p-10 border-4 border-amber-600">
      <h2 className="text-4xl font-bold text-center text-amber-900 mb-8">Your Grace Journey</h2>
      <div className="flex flex-col items-center">
        <div className="relative w-64 h-64">
          <svg className="w-64 h-64 transform -rotate-90">
            <circle cx="128" cy="128" r="120" stroke="#E5E7EB" strokeWidth="16" fill="none" />
            <circle
              cx="128" cy="128" r="120"
              stroke="url(#gradient)"
              strokeWidth="16"
              fill="none"
              strokeDasharray={`${progress * 3.77} 377`}
              className="transition-all duration-1000"
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#9333EA" />
                <stop offset="25%" stopColor="#3B82F6" />
                <stop offset="50%" stopColor="#10B981" />
                <stop offset="100%" stopColor="#EF4444" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="text-6xl font-bold text-amber-900">{currentWeek}</div>
            <div className="text-2xl text-gray-700">of {TOTAL_WEEKS}</div>
          </div>
        </div>
        <h3 className={`text-3xl font-bold mt-6 ${currentStage.color}`}>{currentStage.name}</h3>
        <p className="text-xl text-gray-700">{Math.round(progress)}% Complete</p>
        <p className="mt-8 text-2xl font-bold text-amber-800 italic">“We are going on to perfection!” – John Wesley</p>
      </div>
    </div>
  );
};

const ScriptureReference = ({ reference, version = "NIV" }: { reference: string; version?: string }) => {
  const url = `https://www.biblegateway.com/passage/?search=${encodeURIComponent(reference.trim())}&version=${version.toUpperCase()}`;
  return (
    <div className="my-12 border-l-8 border-amber-600 bg-amber-50 p-8 rounded-r-2xl shadow-xl">
      <h3 className="text-2xl font-bold text-amber-900">
        <Link href={url} target="_blank" rel="noopener noreferrer" className="hover:underline">
          {reference.trim()} ({version.toUpperCase()})
        </Link>
      </h3>
      <p className="text-gray-600 italic">Click to read on BibleGateway.com</p>
    </div>
  );
};

const TeachingVideo = ({ url, title = "Watch This Week's Teaching" }: { url: string; title?: string }) => {
  const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})/i);
  const videoId = match?.[1];
  if (!videoId) return <div className="my-12 p-8 bg-red-100 rounded-xl text-red-800">Invalid video URL</div>;

  return (
    <div className="my-16 bg-white rounded-3xl shadow-2xl overflow-hidden">
      <div className="bg-gradient-to-r from-purple-600 to-amber-600 p-6 text-center">
        <Link href={url} target="_blank" rel="noopener noreferrer" className="text-2xl md:text-3xl font-bold text-white hover:underline">
          {title}
        </Link>
      </div>
      <div className="aspect-video">
        <iframe src={`https://www.youtube.com/embed/${videoId}?rel=0`} allowFullScreen className="w-full h-full border-0" />
      </div>
    </div>
  );
};

const DiscussionQuestions = () => (
  <div className="my-16 bg-gradient-to-br from-amber-50 to-orange-100 rounded-3xl shadow-2xl p-10 border-4 border-red-700">
    <h2 className="text-4xl font-bold text-red-900 mb-10 text-center">Wesleyan Class-Meeting Questions</h2>
    <ol className="space-y-8 text-xl text-gray-800">
      {[
        "How is it with your soul this week?",
        "Where have you seen God’s prevenient grace at work?",
        "What Scripture spoke most deeply to you?",
        "How did you practice the Three Simple Rules this week?",
        "Where do you need accountability or prayer?"
      ].map((q, i) => (
        <li key={i} className="flex items-start gap-4">
          <span className="text-3xl text-red-800 font-bold">{i + 1}</span>
          <span>{q}</span>
        </li>
      ))}
    </ol>
  </div>
);

const CharlesWesleyHymn = ({ title }: { title: string }) => {
  const hymns: Record<string, { youtube: string; lyrics: string }> = {
    "And Can It Be": { youtube: "https://www.youtube.com/watch?v=sQeIGbKqnu8", lyrics: "And can it be that I should gain..." },
    "O For a Thousand Tongues": { youtube: "https://www.youtube.com/watch?v=6sZCVp5Dv0o", lyrics: "O for a thousand tongues to sing..." },
    "Love Divine, All Loves Excelling": { youtube: "https://www.youtube.com/watch?v=ThG6R7NctjM", lyrics: "Love divine, all loves excelling..." },
  };
  const hymn = hymns[title] || hymns["And Can It Be"];

  return (
    <div className="my-20 bg-gradient-to-b from-amber-50 to-orange-50 rounded-3xl shadow-2xl overflow-hidden border-4 border-amber-700">
      <div className="bg-amber-700 text-white p-8 text-center">
        <h2 className="text-4xl font-bold">Charles Wesley Hymn</h2>
        <h3 className="text-3xl mt-3 italic">{title}</h3>
      </div>
      <div className="p-10 grid md:grid-cols-2 gap-10">
        <div>
          <h4 className="text-2xl font-bold text-amber-900 mb-4">Lyrics</h4>
          <pre className="whitespace-pre-wrap font-serif text-lg leading-relaxed text-gray-800">{hymn.lyrics}</pre>
        </div>
        <div>
          <h4 className="text-2xl font-bold text-amber-900 mb-4">Listen</h4>
          <div className="aspect-video rounded-2xl overflow-hidden shadow-xl">
            <iframe src={`https://www.youtube.com/embed/${hymn.youtube.split("v=")[1]?.split("&")[0]}`} allowFullScreen className="w-full h-full border-0" />
          </div>
        </div>
      </div>
    </div>
  );
};

const CovenantRenewalService = () => (
  <div className="my-20 bg-gradient-to-b from-amber-100 via-orange-50 to-red-50 rounded-3xl shadow-2xl overflow-hidden border-8 border-amber-800">
    <div className="bg-amber-800 text-white p-12 text-center">
      <h2 className="text-5xl font-bold">Covenant Renewal Service</h2>
      <p className="text-2xl mt-4 italic">John Wesley’s Covenant Prayer • 1755</p>
    </div>
    <div className="p-12 prose prose-lg max-w-none text-gray-800">
      {/* ... full Covenant Prayer content (unchanged) ... */}
      <h3 className="text-3xl font-bold text-amber-900 text-center mb-8">
        You have completed the entire Bible in one year.<br />Now renew your covenant with God.
      </h3>
      <div className="bg-white rounded-2xl p-10 shadow-xl my-10 border-4 border-amber-600">
        <h4 className="text-2xl font-bold text-center mb-8 text-amber-900">The Covenant Prayer</h4>
        <p className="text-xl leading-relaxed italic text-center font-serif">
          I am no longer my own, but Thine.<br />
          Put me to what Thou wilt, rank me with whom Thou wilt.<br />
          Put me to doing, put me to suffering.<br />
          Let me be employed for Thee or laid aside for Thee,<br />
          exalted for Thee or brought low for Thee.<br />
          Let me be full, let me be empty.<br />
          Let me have all things, let me have nothing.<br />
          I freely and heartily yield all things to Thy pleasure and disposal.<br />
          <br />
          And now, O glorious and blessed God,<br />
          Father, Son, and Holy Spirit,<br />
          Thou art mine, and I am Thine.<br />
          So be it.<br />
          <br />
          And the covenant which I have made on earth,<br />
          let it be ratified in heaven.<br />
          <strong>Amen.</strong>
        </p>
      </div>
      <div className="text-center mt-12">
        <h4 className="text-3xl font-bold text-amber-900 mb-6">Your Commitment Card</h4>
        <div className="inline-block bg-white rounded-2xl p-8 shadow-2xl border-4 border-amber-700">
          <p className="text-2xl font-bold text-amber-900">Today I renew my covenant with God.</p>
          <p className="text-xl mt-6 italic">“I am Thine.”</p>
          <p className="mt-8 text-lg">Signed: ___________________________</p>
          <p className="mt-4 text-lg">Date: {new Date().toLocaleDateString()}</p>
        </div>
        <p className="mt-8 text-xl font-medium text-amber-800">Print • Sign • Keep Forever</p>
      </div>
      <p className="mt-16 text-3xl font-bold text-amber-900 italic text-center">
        “Best of all, God is with us.” — John Wesley’s last words
      </p>
    </div>
  </div>
);

// ──────────────────────────────────────────────────────────────
// MAIN PAGE COMPONENT
// ──────────────────────────────────────────────────────────────
export default async function BibleWeekPage({
  params,
}: {
  params: Promise<{ courseId: string; week: string }>;
}) {
  const { courseId, week } = await params;
  const weekNum = parseInt(week, 10);   // ← DEFINED HERE, BEFORE ANY USE

  const filePath = path.join(CONTENT_DIR, `week${week}.md`);
  const markdown = fs.existsSync(filePath)
    ? fs.readFileSync(filePath, "utf8")
    : `# Week ${week}`;

  return (
    <div className="min-h-screen bg-stone-50 py-12">
      <article className="max-w-4xl mx-auto bg-white shadow-2xl rounded-3xl p-8 md:p-16">
        <GraceJourneyRing currentWeek={weekNum} />

        {/* Quadrilateral on special weeks */}
        {[4, 5, 12, 26, 38, 52].includes(weekNum) && (
          <Quadrilateral courseId={courseId} />
        )}

        {/* Discussion questions on most special weeks */}
        {[4, 5, 12, 26, 38].includes(weekNum) && <DiscussionQuestions />}

        {/* Full celebration on Week 52 */}
        {weekNum === 52 && <CovenantRenewalService />}

        <ReactMarkdown
  remarkPlugins={[remarkGfm]}
  components={{
    p: ({ children }) => {
      const text = React.Children.toArray(children).join("").trim();

      // 1. Keep your existing special blocks exactly as they were
      if (text.startsWith("[[hymn:") && text.endsWith("]]")) {
        const m = text.match(/\[\[hymn:\s*(.+?)\]\]/i);
        if (m) return <CharlesWesleyHymn title={m[1].trim()} />;
      }
      if (text.startsWith("[[video:") && text.endsWith("]]")) {
        const m = text.match(/\[\[video:\s*(.+?)(?:\s*\|\s*(.+?))?\]\]/i);
        if (m) return <TeachingVideo url={m[1].trim()} title={m[2]?.trim()} />;
      }
      if (/^\[\[.*\]\]$/.test(text) && !text.includes("hymn:") && !text.includes("video:")) {
        const m = text.match(/\[\[(.+?)(?: *\| *(.+?))?\]\]/);
        if (m) return <ScriptureReference reference={m[1].trim()} version={m[2]?.trim() || "NIV"} />;
      }

      // 2. NEW: Auto-link ANY Bible reference (this is what restores the plan)
      const autoLinkedText = text.replace(
        /([1-3]?\s*[A-Za-zÀ-ÿ]+(?:\s+[A-Za-zÀ-ÿ]+){0,2})\s*(\d+(?::\d+(?:-\d+)?)?(?:\s*[-–—]\s*\d+(?::\d+(?:-\d+)?)?)?)/gi,
        (_, book, ref) => {
          const cleanBook = book.trim();
          const cleanRef = ref.replace(/\s+/g, "").replace(/[-–—]/g, "-");
          const url = `https://www.biblegateway.com/passage/?search=${encodeURIComponent(
            `${cleanBook} ${cleanRef}`
          )}&version=NIV`;
          return `<a href="${url}" target="_blank" rel="noopener noreferrer" class="font-semibold text-amber-700 underline hover:text-amber-900 hover:no-underline">${cleanBook} ${cleanRef}</a>`;
        }
      );

      // If we made any links, use dangerouslySetInnerHTML; otherwise fall back to normal <p>
      if (autoLinkedText !== text) {
        return (
          <p
            className="prose prose-lg max-w-none text-gray-800 leading-relaxed my-6"
            dangerouslySetInnerHTML={{ __html: autoLinkedText }}
          />
        );
      }

      // Normal paragraph (unchanged)
      return <p className="prose prose-lg max-w-none text-gray-800 leading-relaxed my-6">{children}</p>;
    },
  }}
>
  {markdown}
</ReactMarkdown>
      </article>
    </div>
  );
}