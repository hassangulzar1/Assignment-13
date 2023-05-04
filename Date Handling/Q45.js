// 45. Write a JavaScript function to get time differences in hours between two dates.
//
// Test Data :
//
// dt1 = new Date("October 13, 2014 08:11:00");
//
// dt2 = new Date("October 13, 2014 11:13:00");
//
// console.log(diff_hours(dt1, dt2));
//
// 3

let dt1 = new Date("October 13, 2014 08:11:00");
let dt2 = new Date("October 13, 2014 11:13:00");
let diff_hours = (dt1, dt2) => {
  let date1 = dt1.getTime();
  let date2 = dt2.getTime();
  let compare = Math.abs(date1 - date2);
  return Math.floor(compare / 1000 / 60 / 60);
};
console.log(diff_hours(dt1, dt2));
