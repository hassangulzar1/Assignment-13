// 16. Write a js program to check whether a number is palindrome or not using function.
let reverseN;
let palidomeN = 12321;
function palindromeNumber(n) {
  let reverseNumber = n.toString();
  let fullReverse = reverseNumber.split("").reverse().join("");
  let convertToNumber = parseInt(fullReverse);
  reverseN = convertToNumber;
}
palindromeNumber(palidomeN);
if (reverseN === palidomeN) {
  console.log(`${palidomeN} This number is Palindrome`);
} else {
  console.log(`${palidomeN} This number is not Palindrome`);
}
