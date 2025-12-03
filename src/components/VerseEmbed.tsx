// src/components/VerseEmbed.tsx

import { Passage, Search } from "scripture-api";

// Free API key for testing (replace with yours later for production)
const API_KEY = "de4e12af7f28f599-02"; // Default public key for scripture.api.bible
const DEFAULT_BIBLE_ID = "de4e12af7f28f599-02"; // ESV (English Standard Version)

// Translation IDs (add more as needed)
const translations = {
  esv: "de4e12af7f28f599-02",   // ESV
  kjv: "1cedb4c2459a0a36-01",   // KJV
  niv: "1cedb4c2459a0a36-02",   // NIV (use a real NIV ID if available)
  nasb: "1cedb4c2459a0a36-03", // NASB
  nlt: "1cedb4c2459a0a36-04",  // NLT
};

type VerseEmbedProps = {
  reference: string;  // e.g., "John 3:16" or "John 3:16|kjv"
};

export default async function VerseEmbed({ reference }: VerseEmbedProps) {
  // Parse reference and optional translation (e.g., "John 3:16|kjv")
  const [ref, trans = "esv"] = reference.split("|");
  const bibleId = translations[trans.toLowerCase() as keyof typeof translations] || DEFAULT_BIBLE_ID;

  try {
    const passage = new Passage(API_KEY);
    const verseData = await passage.getChapter({
      contentType: "json",
      bibleId,
      passageId: ref.trim(),
    });

    if (!verseData.data || !verseData.data.content) {
      return <p className="text-red-500">Verse not found: {ref}</p>;
    }

    const content = verseData.data.content; // JSON with verses
    const referenceStr = verseData.data.reference;

    return (
      <div className="my-12 border-l-8 border-amber-600 bg-amber-50 p-8 rounded-r-xl shadow-lg">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl font-bold text-amber-900">{referenceStr}</h3>
          <select
            defaultValue={trans.toUpperCase()}
            className="px-4 py-2 bg-white border border-amber-300 rounded-lg text-amber-800 font-medium"
            onChange={(e) => {
              const newTrans = e.target.value.toLowerCase();
              // Simple reload with query param for demo (use state in real app)
              window.location.href = window.location.pathname + `?v=${ref}|${newTrans}`;
            }}
          >
            <option value="esv">ESV</option>
            <option value="kjv">KJV</option>
            <option value="niv">NIV</option>
            <option value="nasb">NASB</option>
            <option value="nlt">NLT</option>
          </select>
        </div>
        <div className="text-xl leading-relaxed text-gray-800 italic">
          {typeof content === "string" ? content : JSON.stringify(content)} {/* Handle JSON/text */}
        </div>
        <p className="text-sm text-amber-700 mt-4 text-right">— {trans.toUpperCase()}</p>
      </div>
    );
  } catch (error) {
    return <p className="text-red-500">Error loading verse: {error.message}</p>;
  }
}