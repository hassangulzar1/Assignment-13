// Write a js program to find LCM of two numbers using function.
let lcm;
let n1 = 20;
let n2 = 30;
function lCm(n1, n2) {
  let hcf = 0;
  for (let i = 0; i <= n1 || i <= n2; i++) {
    if (n1 % i == 0 && n2 % i == 0) {
      hcf = i;
    }
    lcm = (n1 * n2) / hcf;
  }
}
lCm(n1, n2);
console.log(`lcm of ${n1} and ${n2} = ${lcm}`);
