/**
 * 3+++
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  if (String(n).length === 1) {
    return n;
  }
  return getSumOfDigits(String(n).split('').reduce((a, b) => (+a) + (+b)));
}
module.exports = getSumOfDigits;
