// 7. Write a js program to print all strong numbers between given interval using functions.

function getFactorial(n) {
  if (n == 0 || n == 1) {
    return 1;
  } else {
    return n * getFactorial(n - 1);
  }
}

function isFactorial(n) {
  let sum = 0;
  let temp = n;
  while (temp > 0) {
    let digit = temp % 10;
    sum += getFactorial(digit);
    temp = Math.floor(temp / 10);
  }
  return sum == n;
}

function allFactorials(s, e) {
  for (let i = s; i <= e; i++) {
    if (isFactorial(i)) {
      console.log(i);
    }
  }
}

allFactorials(1, 5000);
