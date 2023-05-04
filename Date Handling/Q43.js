// 43. Write a JavaScript function to add specified months to a date.
//
// Test Data :
//
// dt = new Date(2014,10,2);
//
// console.log(add_months(dt, 10).toString());
//
// Output :
//
// "Wed Sep 02 2015 00:00:00 GMT+0530 (India Standard Time)"
let dt = new Date(2014, 10, 2);
let add_months = (dt, mon) => {
  let year = dt.getFullYear();
  let month = dt.getMonth();
  let day = dt.getDate();
  let newDate = new Date(year, month + mon, day);
  return newDate;
};
console.log(add_months(dt, 10).toString());
