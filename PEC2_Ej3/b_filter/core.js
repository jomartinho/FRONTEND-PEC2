function onlyEven(array) {
  return array.filter((num) => num % 2 === 0);
}

function onlyOneWord(array) {
  return array.filter((str) => !str.includes(" "));
}

function positiveRowsOnly(array) {
  return array.filter((row) => row.every((num) => num > 0));
}

function allSameVowels(array) {
  return array.filter((word) => {
    const vowels = word.match(/[aeiouAEIOU]/g);
    return vowels && vowels.every((vowel) => vowel === vowels[0]);
  });
}

module.exports = {
  onlyEven,
  onlyOneWord,
  positiveRowsOnly,
  allSameVowels,
};
