import Link from "next/link";

export default async function TraditionPage({
  params,
}: { params: Promise<{ courseId: string }>; }) {
  const { courseId } = await params;

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-blue-50 to-indigo-50 py-20">
      <article className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl p-10 md:p-16 border-8 border-sky-700">
        <Link href={`/courses/${courseId}`} className="inline-block mb-8 text-sky-800 hover:text-sky-900 font-bold text-lg">
          ← Back to Bible in a Year
        </Link>

        <h1 className="text-6xl md:text-7xl font-black text-sky-900 text-center mb-12">Tradition</h1>

        <div className="prose prose-xl md:prose-2xl max-w-none text-gray-800 space-y-12">
          <blockquote className="border-l-8 border-sky-700 bg-sky-50 pl-10 py-8 italic text-2xl md:text-3xl text-sky-900 font-medium leading-relaxed">
            “I receive the primitive church as the best interpreter of Scripture… I reverence the Fathers, but I reverence the Scriptures more.”
          </blockquote>
          <p className="text-right font-bold text-sky-800 text-xl">— John Wesley</p>

          <h2 className="text-4xl font-bold text-sky-900 mt-20">The Living Voice of the Church Catholic</h2>
          <p className="text-xl leading-relaxed">
            Tradition is the Church’s historic interpretation of Scripture across the centuries. It is authoritative only insofar as it faithfully reflects the written Word.
          </p>

          <ul className="space-y-6 text-xl md:text-2xl bg-sky-50 p-8 rounded-2xl border-l-8 border-sky-700">
            <li>Ecumenical creeds (Apostles’, Nicene, Athanasian)</li>
            <li>Consensus of the Church Fathers and councils</li>
            <li>Anglican Articles of Religion and Homilies</li>
            <li>Wesley’s own Standard Sermons and Notes on the New Testament</li>
            <li>The lived orthodoxy of holy Christians through the ages</li>
          </ul>

          <div className="bg-sky-100 rounded-3xl p-12 text-center border-8 border-sky-600 my-16">
            <p className="text-4xl md:text-5xl font-black text-sky-900">
              Tradition is Scripture’s most experienced interpreter.
            </p>
            <p className="text-2xl mt-6 italic text-sky-800">
              “We stand on the shoulders of two thousand years of saints.”
            </p>
          </div>
        </div>
      </article>
    </div>
  );
}