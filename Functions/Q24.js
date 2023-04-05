// 24. Write a js program to find maximum and minimum elements in array using function.

let array = [1, 22, 100, 55];

function minElemets(arr) {
  return Math.min(...arr);
}
function maxElemets(arr) {
  return Math.max(...arr);
}

console.log(minElemets(array));
console.log(maxElemets(array));
