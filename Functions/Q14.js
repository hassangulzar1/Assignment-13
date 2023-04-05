// 14. Write a js program to find sum of all even or odd numbers in given range using function.

let evenSum = 0;
let oddSum = 0;
function sumOfeven(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 2 == 0) {
      evenSum += i;
    }
  }
}
function sumOfodd(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 2 != 0) {
      oddSum += i;
    }
  }
}

sumOfeven(10);
sumOfodd(10);

console.log(`Sum of Even ${evenSum}`);
console.log(`Sum of Odd ${oddSum}`);
