// 27. Write a JavaScript function to get a short textual representation of a month, three letters (Jan through Dec).
//
// Test Data :
//
// dt = new Date(2015, 10, 1);
//
// console.log(short_months(dt));
//
// "Nov"

let dt = new Date(2015, 10, 1);
let short_months = (dt) => {
  let month = dt.getMonth();
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return months[month];
};
console.log(short_months(dt));
