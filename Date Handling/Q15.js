// 15. Write a JavaScript function to get the quarter (1 to 4) of the year.
//
//
//
// Test Data :
//
// console.log(quarter_of_the_year(new Date(2015, 1, 21)));
//
// 2
//
// console.log(quarter_of_the_year(new Date(2015, 10, 18)));
//
// 4

let quarter_of_the_year = (date) => {
  let getMonth = date.getMonth() + 1;
  let counter = 0;
  for (let i = 1; i <= getMonth; i++) {
    let count = i * 3;
    counter++;
    if (count >= getMonth) {
      break;
    }
  }
  return counter;
};

console.log(quarter_of_the_year(new Date(2015, 1, 21)));
