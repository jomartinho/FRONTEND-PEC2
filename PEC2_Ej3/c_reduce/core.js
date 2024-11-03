function sum(array) {
  return array.reduce((acc, num) => acc + num, 0);
}

function productAll(array) {
  return array.reduce((acc, subArray) => {
    return acc * subArray.reduce((subAcc, num) => subAcc * num, 1);
  }, 1);
}

function objectify(array) {
  return array.reduce((obj, [key, value]) => {
    obj[key] = value;
    return obj;
  }, {});
}

function luckyNumbers(array) {
  return array.reduce((acc, num, index) => {
    if (index === array.length - 1) {
      return `${acc} and ${num}`;
    } else {
      return `${acc} ${num},`;
    }
  }, "Your lucky numbers are:");
}

module.exports = {
  sum,
  productAll,
  objectify,
  luckyNumbers,
};
