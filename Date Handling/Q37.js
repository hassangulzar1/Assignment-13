// 37. Write a JavaScript function to get Timezone.
//
// Test Data :
//
// dt = new Date();
//
// console.log(seconds_with_leading_zeros(dt));
//
// "India Standard Time"
let dt = new Date();
let standerd_time = (dt) => {
  let time = dt.toTimeString();
  let index = time.indexOf("(");
  return time.slice(index + 1, time.length - 1);
};

console.log(standerd_time(dt));
