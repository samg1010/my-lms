// src/data/readingPlan/index.ts
import type { ReadingWeek } from "./types";
import { validateWeek } from "./validation";

// Dynamically import all weeks
const weeksContext = require.context("./", false, /^.\/week\d+\.ts$/);
const rawPlan: ReadingWeek[] = [];

weeksContext.keys().forEach((key: string) => {
  const weekNum = parseInt(key.match(/week(\d+)\.ts/)![1], 10);
  const weekModule = weeksContext(key);
  const week = weekModule.default || Object.values(weekModule)[0] as ReadingWeek;
  
  // Validate each week as we load it
  validateWeek(week, weekNum);
  
  rawPlan.push(week);
});

// Optional: sort just in case
rawPlan.sort((a, b) => a.week - b.week);

export const readingPlan = rawPlan;

// Optional helper if you still want a full-plan validator
export function validateEntirePlan() {
  if (readingPlan.length !== 52) {
    throw new Error(`Expected 52 weeks, got ${readingPlan.length}`);
  }
  console.log("2026 RESUME BIBLE plan: All 52 weeks validated successfully!");
}

// Run once at startup
validateEntirePlan();