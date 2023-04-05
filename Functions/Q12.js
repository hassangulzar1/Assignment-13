// 12. Write a js program to print all even or odd numbers in given range using function.

function evenNumber(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      console.log(` ${i} is even`);
    }
  }
}

function oddNumber(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 2 != 0) {
      console.log(`${i} is odd`);
    }
  }
}

console.log(evenNumber(10));
console.log(oddNumber(10));
