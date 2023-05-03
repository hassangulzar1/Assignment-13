// 31. Write a JavaScript function to get uppercase Ante meridiem and Post meridiem.
let uppercaseAnte = (time) => {
  return `${
    time.getHours() >= 12 ? `${time.getHours()}A.M` : `${time.getHours()}P.M`
  } `;
};
console.log(uppercaseAnte(new Date("March 13, 08 1:20")));
