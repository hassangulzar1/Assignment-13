// . Write a JavaScript function to get the month name from a particular date.
// Test Data :
//
// console.log(month_name(new Date("10/11/2009")));
//
// console.log(month_name(new Date("11/13/2014")));
//
// Output :
//
// "October"
//
// "November"

let month_name = (date) => {
  let Curr = new Date(date).getMonth();
  let Months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "december",
  ];
  return Months[Curr];
};
console.log(month_name("10/11/2009"));
console.log(month_name("11/13/2014"));
