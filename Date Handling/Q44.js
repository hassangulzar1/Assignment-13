// 44. Write a JavaScript function to get time differences in minutes between two dates.
//
// Test Data :
//
// dt1 = new Date("October 13, 2014 11:11:00");
//
// dt2 = new Date("October 13, 2014 11:13:00");
//
// console.log(diff_minutes(dt1, dt2));
//
// 2

let dt1 = new Date("October 13, 2014 11:11:00");
let dt2 = new Date("October 13, 2014 11:13:00");

let diff_minutes = (dt1, dt2) => {
  let date1 = dt1.getTime();
  let date2 = dt2.getTime();
  let miliSeconds = Math.abs(date1 - date2);
  return `${miliSeconds / 1000 / 60}mins`;
};
console.log(diff_minutes(dt1, dt2));
