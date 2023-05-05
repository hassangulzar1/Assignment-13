// 50. Write a JavaScript function to get the week start date.
let dt = new Date("october 1, 1975");
let weekStartDate = (dt) => {
  let startDate = dt.getDate();
  let startDay = dt.getDay();
  let year = dt.getFullYear();
  let month = dt.getMonth();
  let start = startDate - startDay;

  if (start < 0) {
    let newDate = new Date(year - 1, month, 0);
    let date = newDate.getDate();
    let abs = Math.abs(start);
    return date - abs;
  } else {
    return start;
  }
};
console.log(weekStartDate(dt));
