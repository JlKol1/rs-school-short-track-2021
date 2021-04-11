/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const arr1 = s1.split('');
  const arr2 = s2.split('');
  let sum = 0;
  for (let i = 0; i < arr2.length; i++) {
    const letter = arr2[i];
    for (let j = 0; j < arr1.length; j++) {
      if (letter === arr1[j]) {
        sum += 1;
        delete arr2[i];
        delete arr1[j];
        break;
      }
    }
  }
  return sum;
}

module.exports = getCommonCharacterCount;
