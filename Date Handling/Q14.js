// 14. Write a JavaScript function to get the amount of days of a year.
//
// Test Data :
//
// console.log(days_of_a_year(2015));
//
// 365
//
// console.log(days_of_a_year(2016));
//
// 366

let days_of_a_year = (year) => {
  let leapYear = false;
  for (let i = 0; i < 1000; i++) {
    let table = 4 * i;
    if (table == year) {
      leapYear = true;
    }
  }
  if (leapYear) {
    return 366;
  } else {
    return 365;
  }
};
console.log(days_of_a_year(2015));
console.log(days_of_a_year(2016));
