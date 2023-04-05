// 6. Write a js program to find all prime numbers between given interval using functions.

function isPrime(num1) {
  if (num1 <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num1); i++) {
    if (num1 % i == 0) {
      return false;
    }
  }
  return true;
}

let prime = [];

function allPrime(s, e) {
  for (let i = s; i <= e; i++) {
    if (isPrime(i)) {
      prime.push(i);
    }
  }
}

allPrime(1, 20);
console.log(prime.join(","));
