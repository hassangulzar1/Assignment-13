// 49. Write a JavaScript function to get time differences in years between two dates.
//
// Test Data :
//
// dt1 = new Date("June 13, 2014 08:11:00");
//
// dt2 = new Date("October 19, 2017 11:13:00");
//
// console.log(diff_years(dt1, dt2));
//
// 3

let dt1 = new Date("June 13, 2014 08:11:00");
let dt2 = new Date("October 19, 2017 11:13:00");
let diff_years = (dt1, dt2) => {
  let date1 = dt1.getFullYear();
  let date2 = dt2.getFullYear();
  return Math.abs(date1 - date2);
};
console.log(diff_years(dt1, dt2));
