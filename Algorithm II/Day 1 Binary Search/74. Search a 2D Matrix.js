/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
function searchMatrix(matrix, target) {
  // 1. найти строчку в которой можно начать искать элемент (мб. binary search)
  const n = matrix[0].length;
  let left = 0,
    right = matrix.length - 1,
    row = -1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (matrix[mid][0] <= target && matrix[mid][n - 1] >= target) {
      row = mid;
      break;
    }
    if (matrix[mid][0] > target) right = mid - 1;
    else left = mid + 1;
  }

  if (row === -1) return false;
  // 2. найти элемент (binary search)

  row = matrix[row];
  left = 0;
  right = row.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (row[mid] === target) return true;
    if (row[mid] < target) left = mid + 1;
    if (row[mid] > target) right = mid - 1;
  }

  return false;
}

// true
console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    3
  )
);

// true
console.log(searchMatrix([[1, 3]], 3));
