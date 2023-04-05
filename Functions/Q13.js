// Write a js program to find sum of all natural numbers between 1 to n using function.

let sum = 0;
function sumOfnatural(n) {
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
}

console.log(sumOfnatural(5));
console.log(sum);
