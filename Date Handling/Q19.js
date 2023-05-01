// 19. Write a JavaScript function to get the day of the month, 2 digits with leading zeros.
//
// Test Data :
//
// d= new Date(2015, 10, 1);
//
// console.log(day_of_the_month(d));
//
// "01"
let d = new Date(2015, 10, 10);
let day_of_the_month = (d) => {
  let day = d.getDate().toString().padStart(2, "0");
  return day;
};
console.log(day_of_the_month(d));
