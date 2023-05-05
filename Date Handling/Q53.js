// 53. Write a JavaScript function to get the month end date.
let dt = new Date();
let monthEndDate = (dt) => {
  let year = dt.getFullYear();
  let month = dt.getMonth();
  let endDate = new Date(year, month, 0);
  let endDateOfmonth = endDate.getDate();
  return `${year}-${endDateOfmonth}`;
};
console.log(monthEndDate(dt));
