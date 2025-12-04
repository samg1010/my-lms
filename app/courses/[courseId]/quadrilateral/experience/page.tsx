import Link from "next/link";

export default async function ExperiencePage({
  params,
}: { params: Promise<{ courseId: string }>; }) {
  const { courseId } = await params;

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-red-50 py-20">
      <article className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl p-10 md:p-16 border-8 border-rose-700">
        <Link href={`/courses/${courseId}`} className="inline-block mb-8 text-rose-800 hover:text-rose-900 font-bold text-lg">
          ← Back to Bible in a Year
        </Link>

        <h1 className="text-6xl md:text-7xl font-black text-rose-900 text-center mb-12">Experience</h1>

        <div className="prose prose-xl md:prose-2xl max-w-none text-gray-800 space-y-12">
          <blockquote className="border-l-8 border-rose-700 bg-rose-50 pl-10 py-8 italic text-2xl md:text-3xl text-rose-900 font-medium leading-relaxed">
            “In the evening I went very unwillingly to a society in Aldersgate Street, where one was reading Luther’s preface to the Epistle to the Romans… I felt my heart strangely warmed. I felt I did trust in Christ, Christ alone, for salvation.”
          </blockquote>
          <p className="text-right font-bold text-rose-800 text-xl">— John Wesley, Journal, 24 May 1738</p>

          <h2 className="text-4xl font-bold text-rose-900 mt-20">The Inward Witness of the Holy Spirit</h2>
          <p className="text-xl leading-relaxed">
            Christian experience is the personal appropriation of the gospel and the direct witness of the Holy Spirit to the truth of Scripture.
          </p>

          <ul className="space-y-6 text-xl md:text-2xl bg-rose-50 p-8 rounded-2xl border-l-8 border-rose-700">
            <li>Assurance of pardon and adoption (Rom 8:15–16)</li>
            <li>Growth in grace and the fruit of the Spirit</li>
            <li>The testimony of a cleansed heart (entire sanctification)</li>
            <li>Corporate experience of revival and holy living</li>
            <li>Always tested by Scripture, never independent of it</li>
          </ul>

          <div className="bg-rose-100 rounded-3xl p-12 text-center border-8 border-rose-600 my-16">
            <p className="text-4xl md:text-5xl font-black text-rose-900">
              Experience confirms what Scripture promises.
            </p>
            <p className="text-2xl mt-6 italic text-rose-800">
              “The Spirit himself bears witness with our spirit that we are children of God.”
            </p>
          </div>
        </div>

                      {/* ALBERT OUTLER — FATHER OF THE TERM "WESLEYAN QUADRILATERAL" */}
        <div className="mt-24 bg-gradient-to-r from-gray-100 to-gray-200 rounded-3xl p-10 md:p-14 border-8 border-gray-600">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 text-center mb-8">
            Albert C. Outler (1908–1989)
          </h2>
          <p className="text-xl md:text-2xl text-center italic text-gray-700 mb-8">
            The scholar who first named John Wesley’s method the “Wesleyan Quadrilateral”
          </p>

          <div className="grid md:grid-cols-3 gap-8 text-lg md:text-xl">
            <div className="text-center">
              <p className="font-bold text-gray-900 mb-2">1964</p>
              <p className="text-gray-700">Coined the term in his introduction to <em>John Wesley</em> (Oxford)</p>
            </div>
            <div className="text-center border-x-4 border-gray-500">
              <p className="font-bold text-gray-900 mb-2">Outler’s Own Words</p>
              <blockquote className="italic text-gray-800">
                “Wesley believed that the living core of the Christian faith was revealed in Scripture, illumined by Tradition, vivified in personal Experience, and confirmed by Reason.”
              </blockquote>
            </div>
            <div className="text-center">
              <p className="font-bold text-gray-900 mb-2">Important Clarification</p>
              <p className="text-gray-700">
                Outler later regretted the term because many treated the four sources as equal. He insisted: <strong>Scripture remains primary and supreme</strong>.
              </p>
            </div>
          </div>

          <p className="mt-10 text-2xl md:text-3xl font-bold text-center text-gray-900">
            Scripture → Tradition → Experience → Reason
            <br />
            <span className="text-lg italic text-gray-600">— in that order of authority</span>
          </p>
        </div>
        {/* END OF OUTLER SECTION */}

      </article>
    </div>
  );
}