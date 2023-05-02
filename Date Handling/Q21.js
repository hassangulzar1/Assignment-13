// 21. Write a JavaScript function to get a full textual representation of the day of the week (Sunday through Saturday).
//
// Test Data :
//
// dt = new Date(2015, 10, 1);
//
// console.log(long_Days(dt));
//
// "Sunday"
let dt = new Date(2015, 10, 1);
let long_Days = (dt) => {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = dt.getDay();
  return days[day];
};

console.log(long_Days(dt));
