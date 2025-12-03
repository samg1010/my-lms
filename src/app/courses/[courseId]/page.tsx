// src/app/courses/[courseId]/page.tsx
// FULLY RESPONSIVE + NO EXTERNAL BUTTON NEEDED

import Link from "next/link";

export default async function BibleInAYearLanding({
  params,
}: {
  params: Promise<{ courseId: string }>;
}) {
  const { courseId } = await params;

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-900 via-red-900 to-black text-white overflow-hidden">
      {/* Hero */}
      <section className="relative pt-16 pb-20 px-6 sm:pt-24 sm:pb-32">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative max-w-5xl mx-auto text-center">
          <h1 className="text-5xl leading-tight sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-6 sm:mb-8">
            Bible in a Year
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-amber-300 mb-8 sm:mb-10">
            A 52-week holy fire through every page of Scripture — the Wesleyan way
          </p>

          <blockquote className="text-base sm:text-lg md:text-2xl lg:text-3xl italic font-medium text-amber-200 max-w-4xl mx-auto mb-10 sm:mb-12 leading-snug px-4">
            “I want to know one thing — the way to heaven… God Himself has condescended to teach the way.
            He hath written it down in a book. O give me that book! At any price, give me the book of God!”
            <br />
            <span className="block mt-4 sm:mt-6 text-amber-400 font-bold text-sm sm:text-base md:text-lg">
              — John Wesley
            </span>
          </blockquote>

          <p className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-bold mb-12 sm:mb-16 leading-relaxed px-4">
            This is not another reading plan.<br className="hidden sm:block" />
            This is <span className="text-amber-400">formation</span>.
            This is <span className="text-amber-400">revival</span>.
            This is <span className="text-amber-400">Jesus</span>,<br className="hidden sm:block" />
            until your heart burns like Emmaus.
          </p>

          <Link
            href={`/courses/${courseId}/week/1`}
            className="inline-block text-2xl sm:text-3xl md:text-4xl px-12 sm:px-16 md:px-20 py-8 sm:py-10 md:py-12 
                       bg-gradient-to-r from-amber-600 to-red-700 hover:from-amber-500 hover:to-red-600 
                       rounded-2xl font-black tracking-wider shadow-2xl transform hover:scale-105 transition-all"
          >
            Begin Right Now — Week 1 Awaits
          </Link>
        </div>
      </section>

      {/* Video */}
      <section className="max-w-5xl mx-auto px-6 -mt-8 sm:-mt-16 mb-16 sm:mb-20">
        <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-4 sm:border-8 border-amber-600">
          <iframe
            src="https://www.youtube.com/embed/Tq5tBSnf4mM?rel=0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full aspect-video"
            title="Welcome"
          />
        </div>
      </section>

      {/* Final Call */}
      <section className="py-24 sm:py-32 text-center px-6">
        <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-8 leading-tight">
          The fire is lit.<br className="sm:hidden" />
          The table is set.<br className="sm:hidden" />
          The Spirit is ready.
        </p>
        <p className="text-2xl sm:text-3xl md:text-5xl font-bold text-amber-400 mb-12 sm:mb-16">
          Will you say yes?
        </p>

        <Link
          href={`/courses/${courseId}/week/1`}
          className="inline-block text-2xl sm:text-3xl md:text-4xl lg:text-5xl px-12 sm:px-16 md:px-24 py-8 sm:py-10 md:py-14 
                     bg-gradient-to-r from-red-700 to-amber-600 hover:from-red-600 hover:to-amber-500 
                     rounded-2xl font-black shadow-2xl w-full max-w-md transform hover:scale-105 transition-all"
        >
          Yes — I’m In. Start Week 1
        </Link>

        <p className="mt-20 text-2xl md:text-4xl italic text-amber-300">
          “Best of all, God is with us.” — John Wesley
        </p>
        <p className="mt-10 text-3xl font-bold">
          He still is.<br className="sm:hidden" /> Step in.<br className="sm:hidden" /> Today.
        </p>
      </section>
    </div>
  );
}