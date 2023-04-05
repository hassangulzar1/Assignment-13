// 20. Write a js program to find GCD (HCF) of two numbers using function.

let hcf = 0;

let n1 = 20;
let n2 = 30;

function hCf(n1, n2) {
  for (let i = 0; i <= n1 || i <= n2; i++) {
    if (n1 % i == 0 && n2 % i == 0) {
      hcf = i;
    }
  }
}
hCf(n1, n2);
console.log(`${n1} and ${n2} HCF = ${hcf}`);
