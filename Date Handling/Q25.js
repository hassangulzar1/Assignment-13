// 25. Write a JavaScript function to get a full textual representation of a month, such as January or June.
//
// Test Data :
//
// dt = new Date(2015, 10, 1);
//
// console.log(full_month(dt));
//
// "November"
let dt = new Date(2015, 10, 1);
let full_month = (dt) => {
  let mounths = [
    "january",
    "february",
    "march",
    "april",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let monthGet = dt.getMonth();
  return mounths[monthGet];
};
console.log(full_month(dt));
