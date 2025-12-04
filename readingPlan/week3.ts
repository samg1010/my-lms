 type ReadingWeek = { week: number; title: string; days: { day: number; month: string; date: number; readings: string[]; renewal?: boolean }[] };
export const week3: ReadingWeek = { week:3, title:"Joseph in Egypt", days:[
  {day:6,month:"January",date:16,readings:["Genesis 38–40","Matthew 15"]},
  {day:7,month:"January",date:17,readings:["Genesis 41–42","Matthew 16","Psalm 3","Proverbs 1:20–33"],renewal:true},
  {day:2,month:"January",date:19,readings:["Genesis 43–45","Matthew 17"]},
  {day:3,month:"January",date:20,readings:["Genesis 46–48","Matthew 18"]},
  {day:4,month:"January",date:21,readings:["Genesis 49–50","Matthew 19"]},
  {day:5,month:"January",date:22,readings:["Exodus 1–3","Matthew 20"]},
  {day:6,month:"January",date:23,readings:["Exodus 4–6","Matthew 21"]}
]};
