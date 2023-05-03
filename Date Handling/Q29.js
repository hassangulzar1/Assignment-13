// 29. Write a JavaScript function to get a two digit representation of a year.
//
// Examples : 79 or 04
//
// Test Data :
//
// dt = new Date(1989, 10, 1);
//
// console.log(sort_year(dt));
//
// "89"

let dt = new Date(1989, 10, 1);
let sort_year = (dt) => {
  let year = dt.getFullYear();
  return year.toString().slice(2, year.length);
};
console.log(sort_year(dt));
