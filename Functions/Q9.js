// 9. Write a js program to print all perfect numbers between given interval using functions.

function isPerfect(n) {
  let sumNumbers = 0;

  for (let i = 1; i < n; i++) {
    if (n % i == 0) {
      sumNumbers += i;
    }
  }
  if (n == sumNumbers) {
    return true;
  } else {
    return false;
  }
}

let allPerfectNumbers = [];

function allPerfect(s, e) {
  for (let i = s; i <= e; i++) {
    if (isPerfect(i)) {
      allPerfectNumbers.push(i);
    }
  }
}
allPerfect(1, 10000);

console.log(`${allPerfectNumbers.join(",")} are perfect numbers`);
