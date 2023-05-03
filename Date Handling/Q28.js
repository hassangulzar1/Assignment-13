// 28. Write a JavaScript function to get a full numeric representation of a year (4 digits).
//
// Test Data :
//
// dt = new Date(2015, 10, 1);
//
// console.log(full_year(dt));
//
// 2015

let dt = new Date(2015, 10, 1);
let full_year = (dt) => {
  return dt.getFullYear();
};
console.log(full_year(dt));
