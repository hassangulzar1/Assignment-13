// 42. Write a JavaScript function to add specified weeks to a date.
//
// Test Data :
//
// dt = new Date(2014,10,2);
//
// console.log(add_weeks(dt, 10).toString());
//
// Output :
//
// "Sun Jan 11 2015 00:00:00 GMT+0530 (India Standard Time)"

let dt = new Date(2014, 10, 2);
let add_weeks = (dt, add) => {
  let days = 7 * add;
  let year = dt.getFullYear();
  let month = dt.getMonth();
  let day = dt.getDate();
  let newDate = new Date(year, month, day + days);
  return newDate;
};
console.log(add_weeks(dt, 10).toString());
