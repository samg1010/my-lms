import Link from "next/link";

export default async function ReasonPage({
  params,
}: { params: Promise<{ courseId: string }>; }) {
  const { courseId } = await params;

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-green-50 py-20">
      <article className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl p-10 md:p-16 border-8 border-emerald-700">
        <Link href={`/courses/${courseId}`} className="inline-block mb-8 text-emerald-800 hover:text-emerald-900 font-bold text-lg">
          ← Back to Bible in a Year
        </Link>

        <h1 className="text-6xl md:text-7xl font-black text-emerald-900 text-center mb-12">Reason</h1>

        <div className="prose prose-xl md:prose-2xl max-w-none text-gray-800 space-y-12">
          <blockquote className="border-l-8 border-emerald-700 bg-emerald-50 pl-10 py-8 italic text-2xl md:text-3xl text-emerald-900 font-medium leading-relaxed">
            “To renounce reason is to renounce religion… All irrational religion is false religion.”
          </blockquote>
          <p className="text-right font-bold text-emerald-800 text-xl">— John Wesley, “The Case of Reason Impartially Considered”</p>

          <h2 className="text-4xl font-bold text-emerald-900 mt-20">Illumined Reason as God’s Gift</h2>
          <p className="text-xl leading-relaxed">
            Reason, when enlightened by the Holy Spirit, enables us to understand Scripture, order doctrine, and defend the faith against error and enthusiasm.
          </p>

          <ul className="space-y-6 text-xl md:text-2xl bg-emerald-50 p-8 rounded-2xl border-l-8 border-emerald-700">
            <li>Logical coherence and avoidance of contradiction</li>
            <li>Systematic arrangement of biblical truth</li>
            <li>Rejection of superstition and fanaticism</li>
            <li>Apologetic defense of the gospel</li>
            <li>Wesley: “Think, and let think.”</li>
          </ul>

          <div className="bg-emerald-100 rounded-3xl p-12 text-center border-8 border-emerald-600 my-16">
            <p className="text-4xl md:text-5xl font-black text-emerald-900">
              Enlightened reason serves Scripture — never sits in judgment over it.
            </p>
          </div>
        </div>
      </article>
    </div>
  );
}