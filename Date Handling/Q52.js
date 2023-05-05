// 52. Write a JavaScript function to get the month start date.
let dt = new Date();
let monthStartDate = (dt) => {
  let year = dt.getFullYear();
  let month = dt.getMonth() + 1;
  let monthString = month < 10 ? `0${month}` : month;
  return `${year}-${monthString}`;
};
console.log(monthStartDate(dt));
