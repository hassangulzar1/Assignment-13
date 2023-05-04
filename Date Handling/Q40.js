// 40. Write a JavaScript function to get timezone offset in seconds.
//
// Note : The offset for timezones west of UTC is always negative, and for those east of UTC is always positive.
//
// Test Data :
//
// dt = new Date();
//
// console.log(timezone_offset_in_seconds(dt));
//
// 19800

let dt = new Date();
let timezone_offset_in_seconds = (dt) => {
  let diff = dt.getTimezoneOffset();
  return diff * 60;
};
console.log(timezone_offset_in_seconds(dt));
