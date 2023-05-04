// 36. Write a JavaScript function to get seconds with leading zeros (00 through 59).
//
// Test Data :
//
// dt = new Date(1989, 10, 1);
//
// console.log(seconds_with_leading_zeros(dt));
//
// "00"
let dt = new Date("July 20, 69 00:20:9");
let seconds_with_leading_zeros = (dt) => {
  return dt.getSeconds() < 10 ? "0" + dt.getSeconds() : dt.getSeconds();
};
console.log(seconds_with_leading_zeros(dt));
