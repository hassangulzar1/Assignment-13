// 7. Write a JavaScript function to test whether a date is a weekend.

// Note : Use standard Saturday/Sunday definition of a weekend.
//
// Test Data :
//
// console.log(is_weekend('Nov 15, 2014'));
//
// console.log(is_weekend('Nov 16, 2014'));
//
// console.log(is_weekend('Nov 17, 2014'));
//
// Output :
//
// "weekend"
//
// "weekend"
//
// undefined

let is_Weekend = (time) => {
  let date = new Date(time);
  if (date.getDay() == 6 || date.getDay() == 0) {
    return "Weekend";
  } else {
    return undefined;
  }
};
console.log(is_Weekend("Nov 15, 2014"));
console.log(is_Weekend("Nov 16, 2014"));
console.log(is_Weekend("Nov 17, 2014"));
