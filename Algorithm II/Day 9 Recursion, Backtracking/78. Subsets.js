// @ts-check

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function subsets(nums) {
  const res = [];
  const subset = [];

  function dfs(i) {
    if (i >= nums.length) {
      res.push([...subset]);
      return;
    }

    subset.push(nums[i]);
    dfs(i + 1);

    subset.pop();
    dfs(i + 1);
  }

  dfs(0);
  return res;
}

// Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
console.log(subsets([1, 2, 3]));

// Output: [[],[0]]
console.log(subsets([0]));
