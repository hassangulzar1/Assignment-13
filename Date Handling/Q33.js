// 33. Write a JavaScript function to get 12-hour format of an hour with leading zeros.
//
// Test Data :
//
// dt = new Date(1989, 10, 1);
//
// console.log(hours_with_zeroes(dt));
//
// "12"
let time = new Date("March 13, 08 12:20");
let hours_with_zeroes = (time) => {
  let hours = time.getHours() % 12 || 12;
  return hours.toString().padStart(2, "0");
};
console.log(hours_with_zeroes(time));
