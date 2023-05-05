// 51. Write a JavaScript function to get the week end date.
let date = new Date("october 20, 1975");
let weekEnd = (dt) => {
  let currDate = dt.getDate();
  let currDay = dt.getDay();
  let y = dt.getFullYear();
  let m = dt.getMonth();
  for (let i = 0; i < 7; i++) {
    currDate++;
    currDay++;
    if (currDay == 7) {
      break;
    }
  }
  let num = 0;
  let newDate = new Date(y, m, 0).getDate();
  newDate < currDate
    ? console.log(Math.abs(newDate - currDate))
    : console.log(currDate);
};
weekEnd(date);
