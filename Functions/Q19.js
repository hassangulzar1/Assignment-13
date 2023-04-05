// 19. Write a js program to generate nth Fibonacci term using function.
let one = 1;
let add = 1;
let zero = 0;
function nthFibonacci(n) {
  if (n == 1 || n == 2) {
    return 1;
  }
  for (let i = 3; i <= n; i++) {
    let zero = one + add;
    one = add;
    add = zero;
  }
}
nthFibonacci(7);
console.log(zero, one, add);
