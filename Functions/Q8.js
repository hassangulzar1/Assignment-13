// 8. Write a js program to print all Armstrong numbers between given interval using functions.

function isArmstrong(n) {
  let sumAnswer = 0;

  let numberStr = n.toString().split("");
  let length = numberStr.length;
  let nums = numberStr.map(function (n) {
    return parseInt(n);
  });

  for (const x of nums) {
    sumAnswer += x ** length;
  }

  if (n != sumAnswer) {
    return false;
  }
  return true;
}

let allArmstrong = [];

function findArmstrong(s, e) {
  for (let i = s; i <= e; i++) {
    if (isArmstrong(i)) {
      allArmstrong.push(i);
    }
  }
}
findArmstrong(1, 500);
console.log(` ${allArmstrong.join(",")}   
Armstrong numbers`);
