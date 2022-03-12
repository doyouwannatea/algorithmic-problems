// @ts-check

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
function combinationSum2(candidates, target) {
  candidates.sort();
  const res = [];

  /**
   * @param {number[]} arr
   * @param {number} sum
   * @param {number} i
   */
  function dfs(arr, sum, i) {
    if (sum > target) return;
    if (sum === target) {
      res.push([...arr]);
      return;
    }

    while (i < candidates.length) {
      arr.push(candidates[i]);
      dfs(arr, sum + candidates[i], i + 1);
      arr.pop();
      while (i + 1 < candidates.length && candidates[i] === candidates[i + 1]) {
        i++;
      }
      i++;
    }
  }

  dfs([], 0, 0);
  return res;
}

// Output: [
//   [1, 1, 6],
//   [1, 2, 5],
//   [1, 7],
//   [2, 6],
// ];
console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8));

// Output: [[1, 2, 2], [5]];
console.log(combinationSum2([2, 5, 2, 1, 2], 5));
