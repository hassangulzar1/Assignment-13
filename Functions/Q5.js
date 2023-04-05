// 5. Write a js program to check whether a number is prime, Armstrong or perfect number using functions.

// 1- cheak number is primeNumber
function primeNumber(num1) {
  if (num1 <= 1) {
    return `${num1} is not prime`;
  }
  for (let i = 2; i <= Math.sqrt(num1); i++) {
    if (num1 % i == 0) {
      return `${num1} is not prime`;
    }
  }
  return `${num1} is prime`;
}
console.log(primeNumber(9));

// 2- cheak number is Armstrong
let givenNumber = 153;
function ArmstrongNumber(n) {
  let sumAnswer = 0;

  let numberStr = n.toString().split("");
  let length = numberStr.length;
  let nums = numberStr.map(function (n) {
    return parseInt(n);
  });

  for (const x of nums) {
    sumAnswer += x ** length;
  }

  if (givenNumber != sumAnswer) {
    console.log(`${givenNumber} is Not Armstrong number`);
  } else {
    console.log(`${givenNumber} is Armstrong number`);
  }
}

ArmstrongNumber(givenNumber);

// 3- cheak number is Perfect or Not

let givenNumber1 = 496;
let sumNumbers = 0;

function perfectNumber(n) {
  for (let i = 1; i < n; i++) {
    if (n % i == 0) {
      sumNumbers += i;
    }
  }
  if (givenNumber1 == sumNumbers) {
    console.log(`${givenNumber1} is Perfect Number`);
  } else {
    console.log(`${givenNumber1} is not Perfect Number`);
  }
}
console.log(perfectNumber(givenNumber1));
