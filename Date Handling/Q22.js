// 22. Write a JavaScript function to get ISO-8601 numeric representation of the day of the week (1 (for Monday) to 7 (for Sunday)).
//
// Test Data :
//
// dt = new Date(2015, 10, 1);
//
// console.log(ISO_numeric_date(dt));
//
// 7
let dt = new Date(2015, 10, 0);
let ISO_numeric_date = (dt) => {
  let date = dt.getDay();
  if (date == 0) {
    date = 7;
  }
  return date;
};
console.log(ISO_numeric_date(dt));
// .
