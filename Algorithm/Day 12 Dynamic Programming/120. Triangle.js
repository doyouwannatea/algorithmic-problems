/**
 * @param {number[][]} triangle
 * @return {number}
 */
function minimumTotal(triangle) {
  // --- эталонное решение ---
  // const n = triangle.length;
  // const minlen = triangle[triangle.length - 1];
  // for (let layer = n - 2; layer >= 0; layer--) {
  //   for (let i = 0; i <= layer; i++) {
  //     minlen[i] = Math.min(minlen[i], minlen[i + 1]) + triangle[layer][i];
  //   }
  // }
  // return minlen[0];
  // --- эталонное решение ---

  const n = triangle.length;
  const minlen = triangle[triangle.length - 1];
  for (let layer = n - 2; layer >= 0; layer--) {
    for (let i = 0; i <= layer; i++) {
      minlen[i] = Math.min(minlen[i], minlen[i + 1]) + triangle[layer][i];
    }
  }
  return minlen[0];
}

// Output: 11
// console.log(minimumTotal([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]));
//    2
//   3 4
//  6 5 7
// 4 1 8 3

// Output: -10
// console.log(minimumTotal([[-10]]));

// Output: -33
console.log(
  minimumTotal([
    [-1],
    [9, -2],
    [0, 4, 5],
    [7, 4, -4, -5],
    [9, 6, 0, 5, 7],
    [9, 2, -9, -4, 5, -2],
    [-4, -9, -5, -7, -5, -5, -2],
    [-9, 5, -6, -4, 4, 1, 6, -4],
    [-4, 3, 9, -2, 8, 6, -9, -2, -2],
    [7, -6, 9, 8, -4, 2, -4, -2, -1, -2],
    [0, 3, 2, 4, 0, -6, 7, 6, 7, -5, 2],
    [9, 0, -8, 6, 4, 6, 2, 5, -9, 9, -1, -6],
    [6, -3, -4, -5, 0, 3, 3, 4, -6, -4, -7, 7, 3],
  ])
);
