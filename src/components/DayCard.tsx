// C:\Users\user\my-lms\src\components\DayCard.tsx   ← overwrite everything
import type { ReadingWeek } from "@/data/readingPlan/types";

type Props = {
  day: ReadingWeek["days"][number];
};

export default function DayCard({ day }: Props) {
  const version = "NIV"; // hard-coded for now so nothing can break

  const passages = day.readings
    .map(r => r.replace(/–/g, "-").trim())
    .join(";");

  const url = `https://www.biblegateway.com/passage/?search=${encodeURIComponent(passages)}&version=${version}`;

  const openBible = () => {
    window.open(url, "_blank");
  };

  return (
    <div style={{ padding: "2rem", border: "4px solid #6366f1", borderRadius: "1rem", background: "white" }}>
      <h2 style={{ fontSize: "3rem", fontWeight: "bold", color: "#4f46e5" }}>
        {day.month} {day.date}
      </h2>

      <div style={{ margin: "2rem 0" }}>
        {day.readings.map((r, i) => (
          <div key={i} style={{ fontSize: "1.5rem", margin: "0.5rem 0" }}>
            {r}
          </div>
        ))}
      </div>

      {/* THIS BUTTON IS IMPOSSIBLE TO MISS */}
      <button
        onClick={openBible}
        style={{
          width: "100%",
          padding: "2rem",
          fontSize: "2rem",
          fontWeight: "bold",
          background: "#4f46e5",
          color: "white",
          border: "none",
          borderRadius: "1rem",
          cursor: "pointer",
          marginTop: "2rem",
        }}
      >
        OPEN TODAY’S READINGS (ONE TAB – {version})
      </button>
    </div>
  );
}