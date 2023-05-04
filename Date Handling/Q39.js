// 39. Write a JavaScript function to get difference to Greenwich time (GMT) in hours.
//
// Test Data :
//
// dt = new Date();
//
// console.log(diff_to_GMT(dt));
//
// "+05.500"
let dt = new Date();
let diff_to_GMT = (dt) => {
  let diff = dt.getTimezoneOffset();
  let hours = Math.floor(diff / 60).toString();
  let minutes = Math.floor(diff % 60).toString();
  return `${hours}.${minutes.padStart(2, "0")} `;
};
console.log(diff_to_GMT(dt));
