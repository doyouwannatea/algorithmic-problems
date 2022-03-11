// @ts-check

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function subsetsWithDup(nums) {
  const res = [];
  const subset = [];
  nums.sort();

  /**
   * @param {number} i
   */
  function dfs(i) {
    if (i >= nums.length) {
      res.push([...subset]);
      return;
    }

    subset.push(nums[i]);
    dfs(i + 1);
    subset.pop();

    while (i + 1 < nums.length && nums[i] === nums[i + 1]) {
      i += 1;
    }

    dfs(i + 1);
  }

  dfs(0);
  return res;
}

// Output: [[],[1],[1,2],[1,2,2],[2],[2,2]]
console.log(subsetsWithDup([1, 2, 2]));

// Output: [[],[0]]
console.log(subsetsWithDup([0]));
