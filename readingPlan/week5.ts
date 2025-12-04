 type ReadingWeek = { week: number; title: string; days: { day: number; month: string; date: number; readings: string[]; renewal?: boolean }[] };
export const week5: ReadingWeek = { week:5, title:"The Tabernacle & the Law", days:[
  {day:2,month:"February",date:2,readings:["Exodus 28–30","Mark 1"]},
  {day:3,month:"February",date:3,readings:["Exodus 31–33","Mark 2"]},
  {day:4,month:"February",date:4,readings:["Exodus 34–36","Mark 3"]},
  {day:5,month:"February",date:5,readings:["Exodus 37–38","Mark 4"]},
  {day:6,month:"February",date:6,readings:["Exodus 39–40","Mark 5"]},
  {day:7,month:"February",date:7,readings:["Leviticus 1–4","Mark 6","Psalm 6","Proverbs 3:13–35"],renewal:true},
  {day:2,month:"February",date:9,readings:["Leviticus 5–7","Mark 7"]}
]};
