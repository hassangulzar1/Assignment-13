// 34. Write a JavaScript function to get 24-hour format of an hour without leading zeros.
//
// Test Data :
//
// dt = new Date(1989, 10, 1);
//
// console.log(hours_without_zeroes(dt));
//
// 0

let dt = new Date("March 13, 08 13:20");
let hours_without_zeroes = (dt) => {
  let time = dt.getHours();
  return time % 12 || 12;
};
console.log(hours_without_zeroes(dt));
