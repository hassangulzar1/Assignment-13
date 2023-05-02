// 22. Write a JavaScript function to get ISO-8601 numeric representation of the day of the week (1 (for Monday) to 7 (for Sunday)).
//
// Test Data :
//
// dt = new Date(2015, 10, 1);
//
// console.log(ISO_numeric_date(dt));
//
// 7
let dt = new Date(2015, 10, 8);
let ISO_numeric_date = (dt) => {
  let date = dt.getDay();
  let days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
  return days[date];
};
console.log(ISO_numeric_date(dt));
