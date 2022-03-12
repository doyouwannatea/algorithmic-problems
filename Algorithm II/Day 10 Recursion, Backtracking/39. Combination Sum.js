// @ts-check

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
function combinationSum2(candidates, target) {
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
      dfs(arr, sum + candidates[i], i);
      arr.pop();
      i++;
    }
  }

  dfs([], 0, 0);
  return res;
}

// [[2, 2, 3], [7]];
// console.log(combinationSum([2, 3, 6, 7], 7));

// [
//   [2, 2, 2, 2],
//   [2, 3, 3],
//   [3, 5],
// ];
console.log(combinationSum2([2, 3, 5], 8));

// []
console.log(combinationSum2([2], 1));
