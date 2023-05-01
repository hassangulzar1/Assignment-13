// 13. Write a JavaScript function that will return the number of minutes in hours and minutes.
//
//
//
// Test Data :
//
// console.log(timeConvert(200));
//
// Output :
//
// "200 minutes = 3 hour(s) and 20 minute(s)."

let timeConvert = (minutes) => {
  let value = 0;
  for (let i = 0; i < minutes; i++) {
    let result = 60 * i;
    if (result > minutes) {
      value = result;
      break;
    }
    if (result === minutes) {
      console.log(` ${minutes} = ${result / 60} hours`);
    }
  }
  let hour = value - 60;
  let min = minutes - hour;
  return `${minutes} minutes = ${hour / 60} hours and ${min} minutes`;
};

console.log(timeConvert(220));
