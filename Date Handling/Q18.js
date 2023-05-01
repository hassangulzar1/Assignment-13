// 18. Write a JavaScript program to calculate age.
//
// Test Data :
//
// console.log(calculate_age(new Date(1982, 11, 4)));
//
// 32
//
// console.log(calculate_age(new Date(1962, 1, 1)));
//
// 53

let calculate_age = (date) => {
  let ful = new Date().getFullYear();
  let birth = date.getFullYear();
  return ful - birth;
};
console.log(calculate_age(new Date(1982, 11, 4)));
console.log(calculate_age(new Date(1962, 1, 1)));
