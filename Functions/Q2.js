// 2. Write a js program to find diameter, circumference and area of circle using functions.
function measureDiameter(r) {
  return 2 * r;
}
function measureCircumference(r) {
  return 2 * Math.PI * r;
}
function measureArea(r) {
  return Math.PI * Math.pow(r, 2);
}
console.log(measureDiameter(2));
console.log(measureCircumference(2));
console.log(measureArea(3));
