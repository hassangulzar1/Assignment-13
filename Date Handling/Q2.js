// 2. Write a JavaScript function to get the current date.
//
//
//
// Note : Pass a separator as an argument.
//
// Test Data :
//
// console.log(curday('/'));
//
// console.log(curday('-'));
//
// Output :
//
// "11/13/2014"
//
// "11-13-2014"

function curday(separator) {
  let date = new Date();
  let dateString = date.toLocaleDateString();
  return dateString.replace(/\//g, separator);
}
console.log(curday("-"));
console.log(curday("/"));
