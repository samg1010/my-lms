 type ReadingWeek = { week: number; title: string; days: { day: number; month: string; date: number; readings: string[]; renewal?: boolean }[] };
export const week2: ReadingWeek = { week:2, title:"The Covenant with Abraham", days:[
  {day:5,month:"January",date:8,readings:["Genesis 20–22","Matthew 8"]},
  {day:6,month:"January",date:9,readings:["Genesis 23–24","Matthew 9"]},
  {day:7,month:"January",date:10,readings:["Genesis 25–26","Matthew 10","Psalm 2","Proverbs 1:8–19"],renewal:true},
  {day:2,month:"January",date:12,readings:["Genesis 27–29","Matthew 11"]},
  {day:3,month:"January",date:13,readings:["Genesis 30–31","Matthew 12"]},
  {day:4,month:"January",date:14,readings:["Genesis 32–34","Matthew 13"]},
  {day:5,month:"January",date:15,readings:["Genesis 35–37","Matthew 14"]}
]};
