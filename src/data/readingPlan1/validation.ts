// src/data/readingPlan/validation.ts
import type { ReadingWeek } from "./types";
import { z } from "zod";

// Relaxed schema — only cares about structure, not day order
// CORRECT SCHEMA — accepts exactly 7 days, in any order
const ReadingWeekSchema = z.object({
  week: z.number(),
  title: z.string(),
  days: z
    .array(
      z.object({
        day: z.number().min(1).max(7),
        month: z.string(),
        date: z.number().min(1).max(31),
        readings: z.array(z.string()).min(2),
        renewal: z.boolean().optional(),
      })
    )
    .length(7), // ← This is the key: EXACTLY 7 days
});

export function validateWeek(week: ReadingWeek, weekNumber: number): asserts week is ReadingWeek {
  // 1. Basic Zod structure
  ReadingWeekSchema.parse(week);

  // 2. Week number matches filename
  if (week.week !== weekNumber) {
    throw new Error(`Week number mismatch: expected ${weekNumber}, got ${week.week}`);
  }

  // 3. Exactly one Sunday with renewal: true + Psalm + Proverbs
  const sundays = week.days.filter(d => d.renewal);
  if (sundays.length !== 1) {
    throw new Error(`Week ${week.week} must have exactly one day with renewal: true`);
  }
  const sunday = sundays[0];
  if (!sunday.readings.some(r => r.startsWith("Psalm")) || !sunday.readings.some(r => r.startsWith("Proverbs"))) {
    throw new Error(`Week ${week.week} Sunday missing Psalm/Proverbs`);
  }

  // 4. All readings are real-looking Bible references
  const refPattern = /^(Genesis|Exodus|Leviticus|Numbers|Deuteronomy|Joshua|Judges|Ruth|1 Samuel|2 Samuel|1 Kings|2 Kings|1 Chronicles|2 Chronicles|Ezra|Nehemiah|Esther|Job|Psalm|Proverbs|Ecclesiastes|Song of Songs|Isaiah|Jeremiah|Lamentations|Ezekiel|Daniel|Hosea|Joel|Amos|Obadiah|Jonah|Micah|Nahum|Habakkuk|Zephaniah|Haggai|Zechariah|Malachi|Matthew|Mark|Luke|John|Acts|Romans|1 Corinthians|2 Corinthians|Galatians|Ephesians|Philippians|Colossians|1 Thessalonians|2 Thessalonians|1 Timothy|2 Timothy|Titus|Philemon|Hebrews|James|1 Peter|2 Peter|1 John|2 John|3 John|Jude|Revelation) \d+/;
  for (const day of week.days) {
    for (const reading of day.readings) {
      if (!refPattern.test(reading.replace(/[–-]/g, "-"))) {
        console.warn(`Suspicious reading in week ${week.week}: "${reading}"`);
      }
    }
  }
}