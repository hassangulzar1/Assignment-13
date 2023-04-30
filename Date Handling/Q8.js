// 8. Write a JavaScript function to get difference between two dates in days.
//
//
//
// Test Data :
//
// console.log(date_diff_indays('04/02/2014', '11/04/2014'));
//
// console.log(date_diff_indays('12/02/2014', '11/04/2014'));
//
// Output :
//
// 216
//
// -28

let date_diff_indays = (d1, d2) => {
  let day = 1000 * 60 * 60 * 24;
  let date1 = new Date(d1).getTime();
  let date2 = new Date(d2).getTime();
  return (date2 - date1) / day;
};
console.log(date_diff_indays("04/02/2014", "11/04/2014"));
console.log(date_diff_indays("12/02/2014", "11/04/2014"));
