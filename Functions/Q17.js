// 17. Write a js program to find sum of digits of a given number using function.
function sumOfdigits(n) {
  let sum = 0;

  let numberStr = n.toString().split("");
  let nums = numberStr.map(function (n) {
    return parseInt(n);
  });

  for (const x of nums) {
    sum += x;
  }
  return sum;
}
let numbers = 12345;
console.log(`sum of ${numbers} is ${sumOfdigits(numbers)}`);
