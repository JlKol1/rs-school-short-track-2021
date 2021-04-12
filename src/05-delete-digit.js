/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(be) {
  const string = String(be);
  let arr = [];
  for (let i = 0; i < string.length; i++) {
    arr.push(string.slice(0, i) + string.slice(i + 1));
  }
  arr = arr.map((el) => el * 1);
  return Math.max(...arr);
}

module.exports = deleteDigit;
