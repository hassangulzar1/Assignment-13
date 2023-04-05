// 18. Write a js program to find factorial of any number using function.
let factorial = 5;
let factorialAnswer = 1;

function factorialCount(n) {
  for (let i = 1; i <= n; i++) {
    factorialAnswer *= i;
  }
}
factorialCount(factorial);
console.log(`Factorial of ${factorial} is ${factorialAnswer}`);
