function multiplyBy10(array) {
  return array.map((num) => num * 10);
}

function shiftRight(array) {
  return array.map((_, i, arr) => arr[(i - 1 + arr.length) % arr.length]);
}

function onlyVowels(array) {
  return array.map((str) => str.replace(/[^aeiouAEIOU]/g, ""));
}

function doubleMatrix(array) {
  return array.map((subArray) => subArray.map((num) => num * 2));
}

module.exports = {
  multiplyBy10,
  shiftRight,
  onlyVowels,
  doubleMatrix,
};
