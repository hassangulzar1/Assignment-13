// 23. Write a JavaScript function to get English ordinal suffix for the day of the month, 2 characters (st, nd, rd or th.).
//
// Test Data :
//
// dt = new Date(2015, 10, 1);
//
// console.log(english_ordinal_suffix(dt));
//
// "1st"
let dt = new Date(2015, 10, 23);
let english_ordinal_suffix = (dt) => {
  let date = dt.getDate().toString();
  if (date == 1 || date.endsWith("1")) {
    return date + "st";
  } else if (date == 2 || date.endsWith("2")) {
    return date + "nd";
  } else if (date == 3 || date.endsWith("3")) {
    return date + "rd";
  } else {
    return date + "th";
  }
};
console.log(english_ordinal_suffix(dt));
