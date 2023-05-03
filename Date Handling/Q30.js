// 30. Write a JavaScript function to get lowercase Ante meridiem and Post meridiem.

let lowercaseAnte = () => {
  let time = new Date();
  let hours = time.getHours();
  let min = time.getMinutes();
  return `${hours <= 12 ? `${hours}:${min}a.m` : `${hours}:${min}p.m`} `;
};
console.log(lowercaseAnte());
