// 32. Write a JavaScript function to swatch Internet time (000 through 999).
//
// Test Data :
//
// dt = new Date(1989, 10, 1);
//
// console.log(internet_time(dt));
//
// 812

let dt = new Date("March 13, 08 22:59");
let internet_time = (dt) => {
  let oneBeat = 60 + 26.4;
  let hoursTOsec = dt.getHours() * 60 * 60;
  let minTosec = dt.getMinutes() * 60;
  let seconds = dt.getSeconds();
  let sumOfall = hoursTOsec + minTosec + seconds;
  return (sumOfall / oneBeat).toFixed(0);
};
console.log(internet_time(dt));
