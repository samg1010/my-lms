import Link from "next/link";
import BackToCourseLink from "@/components/quadrilateral/BackToCourseLink";
import WesleyMethodSection from "@/components/quadrilateral/WesleyMethodSection";
import OutlerSection from "@/components/quadrilateral/OutlerSection";

export default async function ScripturePage({
  params,
}: { params: Promise<{ courseId: string }>; }) {
  const { courseId } = await params;

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 py-20">
      <article className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl p-10 md:p-16 border-8 border-amber-700">
        <BackToCourseLink courseId={courseId} />

        <h1 className="text-6xl md:text-7xl font-black text-amber-900 text-center mb-12">
          Scripture
        </h1>

        <div className="prose prose-xl md:prose-2xl max-w-none text-gray-800 space-y-12">
          <blockquote className="border-l-8 border-amber-700 bg-amber-50 pl-10 py-8 italic text-2xl md:text-3xl text-amber-900 font-medium leading-relaxed">
            “I am a Bible-bigot. I follow it in all things, both great and small.”
          </blockquote>
          <p className="text-right font-bold text-amber-800 text-xl">— John Wesley</p>

          <h2 className="text-4xl font-bold text-amber-900 mt-20">The Supreme & Final Authority</h2>
          <p className="text-xl leading-relaxed">
            Wesley’s entire theological method began and ended with Holy Scripture as the sole infallible rule of faith and practice.
          </p>

          <ul className="space-y-6 text-xl md:text-2xl bg-amber-50 p-8 rounded-2xl border-l-8 border-amber-700">
            <li>Primary source and final court of appeal</li>
            <li>Contains all things necessary to salvation</li>
            <li>Judges Tradition, Reason, and Experience — never judged by them</li>
            <li>“Let me be homo unius libri”</li>
          </ul>

          <WesleyMethodSection />
          <OutlerSection />
        </div>
      </article>
    </div>
  );
}