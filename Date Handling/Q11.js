// 11. Write a JavaScript function to get the maximum date from an array of dates.
//
//
//
// Test Data :
//
// console.log(max_date(['2015/02/01', '2015/02/02', '2015/01/03']));
//
// Output :
//
// "2015/02/02"

let max_date = (dt) => {
  let miliSeconds = [];
  for (let i = 0; i < dt.length; i++) {
    let date = new Date(dt[i]);
    miliSeconds.push(date.getTime());
  }
  let minimum = Math.max(...miliSeconds);
  let date = new Date(minimum);
  let year = date.getFullYear().toString();
  let month = (date.getMonth() + 1).toString();
  let day = date.getDate().toString();
  return `${year}/${month.padStart(2, "0")}/${day.padStart(2, "0")}`;
};
console.log(max_date(["2015/02/01", "2015/02/02", "2015/01/03"]));
