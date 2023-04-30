// 5. Write a JavaScript function to compare dates (i.e. greater than, less than or equal to).

// Test Data :
//
// console.log(compare_dates(new Date('11/14/2013 00:00'), new Date('11/14/2013 00:00')));
//
// console.log(compare_dates(new Date('11/14/2013 00:01'), new Date('11/14/2013 00:00')));
//
// console.log(compare_dates(new Date('11/14/2013 00:00'), new Date('11/14/2013 00:01')));
//
// Output :
//
// "Date1 = Date2"
//
// "Date1 > Date2"
//
// "Date2 > Date1"

let compare_Dates = (d1, d2) => {
  if (d1.getTime() === d2.getTime()) {
    return `Date1 = Date2`;
  } else if (d1 > d2) {
    return `Date1 > Date2`;
  } else if (d2 > d1) {
    return `Date2 > Date1`;
  }
};
console.log(
  compare_Dates(new Date("11/14/2013 00:00"), new Date("11/14/2013 00:00"))
);
console.log(
  compare_Dates(new Date("11/14/2013 00:01"), new Date("11/14/2013 00:00"))
);
console.log(
  compare_Dates(new Date("11/14/2013 00:00"), new Date("11/14/2013 00:01"))
);
