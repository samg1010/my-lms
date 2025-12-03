export default function WesleyMethodSection() {
  return (
    <div className="mt-20 bg-amber-100 rounded-3xl p-12 border-8 border-amber-600">
      <h3 className="text-3xl font-black text-amber-900 text-center mb-8">
        John Wesley’s Actual Method (in his own words)
      </h3>
      <p className="text-2xl italic text-center mb-8">
        “I allow no other rule, whether of faith or practice, than the Holy Scriptures.”
      </p>
      <ol className="space-y-6 text-xl max-w-3xl mx-auto">
        <li><strong>1. Scripture</strong> — the only infallible authority</li>
        <li><strong>2. Tradition</strong> — the Church’s best interpreter of Scripture</li>
        <li><strong>3. Reason</strong> — to understand and apply Scripture</li>
        <li><strong>4. Experience</strong> — the Spirit’s witness confirming Scripture</li>
      </ol>
      <p className="mt-8 text-xl font-bold text-center text-amber-900">
        Never four equal partners — one supreme rule with three faithful servants.
      </p>
    </div>
  );
}