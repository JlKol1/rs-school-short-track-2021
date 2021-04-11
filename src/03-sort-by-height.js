/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr3) {
  const arr = [...arr3];
  let arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      arr2.push(arr[i]);
      arr2 = arr2.sort((a, b) => a - b);
    }
  }
  for (let s = 0; s < arr.length; s++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr[s] > 0) {
        arr[s] = arr2[j];
        arr2.splice(0, 1);
        break;
      }
    }
  }
  return arr;
}

module.exports = sortByHeight;
