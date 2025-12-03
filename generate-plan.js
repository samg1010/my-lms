const fs = require('fs');
const path = require('path');

const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
const monthDays = [31,28,31,30,31,30,31,31,30,31,30,31];

const titles = [
  "The Foundations Are Laid","The Father of Faith Rises","Wrestling with God","Egypt to Canaan","Red Sea & Revelation",
  "Tabernacle & End Times","The Cross & Atonement","Wilderness & Demons Cast Out","Rebellion & the Rich Young Ruler","The Final Week Begins",
  "Kingdom Parables","Sower & Mustard Seed","Lamps & Buried Talent","Good Samaritan","Prodigal Son","Lost Sheep & Coin","Rich Man & Lazarus",
  "Unforgiving Servant","Workers in Vineyard","Marriage Feast","Render to Caesar","Widow's Mite","Fig Tree Cursed","Faith Moves Mountains",
  "Last Supper","Garden of Gethsemane","Trial & Denial","Crucifixion","Resurrection","Emmaus Road","Great Commission","Ascension","Pentecost",
  "Early Church","Ananias & Sapphira","Stephen's Martyrdom","Philip & Ethiopian","Saul's Conversion","Cornelius","Peter in Prison",
  "Paul & Barnabas","Council of Jerusalem","First Missionary","Antioch Church","Galatians Grace","Romans Justification","1 Corinthians Love",
  "2 Corinthians Weakness","Ephesians Armor","Philippians Joy","Colossians Supremacy","1 Thessalonians Rapture","2 Thessalonians Day of Lord",
  "1 Timothy Leadership","2 Timothy Last Words","Titus Good Works","Philemon Forgiveness","Hebrews Better Covenant","James Faith Works",
  "1 Peter Suffering","2 Peter False Teachers","1 John Love God","2 John Truth Walk","3 John Hospitality","Jude Contend Faith","The Grace Journey Ring — It Is Finished"
];

let currentDate = 1;
let currentMonth = 0;
let dayOfYear = 1;

const dir = path.join(__dirname, 'src', 'data', 'readingPlan');
fs.mkdirSync(dir, { recursive: true });

for (let week = 1; week <= 52; week++) {
  const days = [];
  for (let d = 1; d <= 7; d++) {
    const isSunday = d === 7;
    const readings = [
      `Genesis ${dayOfYear}–${dayOfYear + 2}`,
      `Matthew ${((dayOfYear - 1) % 28) + 1}`
    ];
    if (isSunday) {
      const psalm = ((week - 1) * 7 + d) % 150 || 150;
      readings.push(`Psalm ${psalm}`, `Proverbs ${week}:1–7`);
    }
    days.push({
      day: d,
      month: months[currentMonth],
      date: currentDate,
      readings,
      renewal: isSunday ? true : undefined
    });

    currentDate++;
    if (currentDate > monthDays[currentMonth]) {
      currentDate = 1;
      currentMonth++;
    }
    dayOfYear++;
  }

  const content = `import type { ReadingWeek } from "./types";

export const week${week}: ReadingWeek = {
  week: ${week},
  title: "${titles[week - 1]}",
  days: ${JSON.stringify(days, null, 2).replace(/"renewal": undefined,\n/g, '')}
};
`;

  fs.writeFileSync(path.join(dir, `week${week}.ts`), content.trim() + "\n");
}

console.log("52 weeks generated — THE PLAN IS COMPLETE");
