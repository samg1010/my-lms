 type ReadingWeek = { week: number; title: string; days: { day: number; month: string; date: number; readings: string[]; renewal?: boolean }[] };
export const week4: ReadingWeek = { week:4, title:"The Exodus Begins", days:[
  {day:7,month:"January",date:24,readings:["Exodus 7–9","Matthew 22","Psalm 4","Proverbs 2:1–22"],renewal:true},
  {day:2,month:"January",date:26,readings:["Exodus 10–12","Matthew 23"]},
  {day:3,month:"January",date:27,readings:["Exodus 13–15","Matthew 24"]},
  {day:4,month:"January",date:28,readings:["Exodus 16–18","Matthew 25"]},
  {day:5,month:"January",date:29,readings:["Exodus 19–21","Matthew 26"]},
  {day:6,month:"January",date:30,readings:["Exodus 22–24","Matthew 27"]},
  {day:7,month:"January",date:31,readings:["Exodus 25–27","Matthew 28"]}
]};
