import type { ReadingWeek } from "./types";

export const week1: ReadingWeek = {
  week: 1,
  title: "The Foundations Are Laid",
  days: [
    { day: 4, month: "January", date: 1, readings: ["Genesis 1–2", "Matthew 1"] },
    { day: 5, month: "January", date: 2, readings: ["Genesis 3–5", "Matthew 2"] },
    { day: 6, month: "January", date: 3, readings: ["Genesis 6–8", "Matthew 3"] },
    { day: 7, month: "January", date: 4, readings: ["Genesis 9–11", "Matthew 4", "Psalm 1", "Proverbs 1:1–7"], renewal: true },
    { day: 2, month: "January", date: 5, readings: ["Genesis 12–14", "Matthew 5"] },
    { day: 3, month: "January", date: 6, readings: ["Genesis 15–17", "Matthew 6"] },
    { day: 4, month: "January", date: 7, readings: ["Genesis 18–19", "Matthew 7"] },
  ],
};