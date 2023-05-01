// 20. Write a JavaScript function to get a textual representation of a day (three letters, Mon through Sun).
//
// Test Data :
//
// dt = new Date(2015, 10, 1);
//
// console.log(short_Days(dt));
//
// "Sun"
let dt = new Date(2015, 10, 1);
let short_Days = (dt) => {
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let day = dt.getDay();
  return days[day];
};
console.log(short_Days(dt));
