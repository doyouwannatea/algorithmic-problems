/**
 * @param {number[][]} triangle
 * @return {number}
 */
function minimumTotal(triangle) {
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
console.log(minimumTotal([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]));
//    2
//   3 4
//  6 5 7
// 4 1 8 3

// Output: -10
console.log(minimumTotal([[-10]]));
