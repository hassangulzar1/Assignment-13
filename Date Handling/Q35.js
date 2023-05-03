// 35. Write a JavaScript function to get minutes with leading zeros (00 to 59).
//
// Test Data :
//
// dt = new Date(1989, 10, 1);
//
// console.log(minutes_with_leading_zeros(dt));
//
// "00"

let dt = new Date("March 13, 08 13:5");
let minutes_with_leading_zeros = (dt) => {
  let min = dt.getMinutes();
  return min.toString().padStart(2, "0");
};
console.log(minutes_with_leading_zeros(dt));
