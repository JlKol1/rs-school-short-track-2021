/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let num = [];
  const firstInMatrix = matrix[0];
  const columnCount = matrix[0].length;
  for (let i = 0; i < columnCount; i++) {
    for (let j = 1; j < matrix.length; j++) {
      if (matrix[j - 1][i] !== 0) {
        num.push(matrix[j][i]);
      }
    }
  }
  num = num.concat(firstInMatrix);
  return num.reduce((sum, current) => sum + current);
}

module.exports = getMatrixElementsSum;
