// 26. Write a JavaScript function to get a numeric representation of a month, with leading zeros (01 through 12).
//
// Test Data :
//
// dt = new Date(2015, 10, 1);
//
// console.log(numeric_month(dt));
//
// "11"
let dt = new Date(2015, 10, 1);
let numeric_month = (dt) => {
  return (dt.getMonth() + 1).toString().padStart(2, "0");
};
console.log(numeric_month(dt));
