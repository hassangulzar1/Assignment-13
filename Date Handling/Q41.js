// 41. Write a JavaScript function to add specified years to a date.
//
// Test Data :
//
// dt = new Date(2014,10,2);
//
// console.log(add_years(dt, 10).toString());
//
// Output :
//
// "Sat Nov 02 2024 00:00:00 GMT+0530 (India Standard Time)"
let dt = new Date(2014, 10, 2);
let add_years = (dt, add) => {
  let year = dt.getFullYear();
  let month = dt.getMonth();
  let day = dt.getDate();
  let newDate = new Date(year + add, month, day);
  return newDate;
};
console.log(add_years(dt, 10).toString());
