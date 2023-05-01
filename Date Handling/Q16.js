// 16. Write a JavaScript function to count the number of days passed since beginning of the year.
//
//
//
// Test Data :
//
// console.log(days_passed(new Date(2015, 0, 15)));
//
// 15
//
// console.log(days_passed(new Date(2015, 11, 14)));
//
// 348

let days_passed = (date) => {
  let day = 1000 * 60 * 60 * 24;
  let timeTodays = (date.getTime() / day).toFixed(0);
  let getYear = date.getFullYear();
  let yearMili = new Date(getYear, 0, 0).getTime();
  let yearTime = (yearMili / day).toFixed(0);
  return timeTodays - yearTime;
};
console.log(days_passed(new Date(2015, 0, 15)));
console.log(days_passed(new Date(2015, 11, 14)));
