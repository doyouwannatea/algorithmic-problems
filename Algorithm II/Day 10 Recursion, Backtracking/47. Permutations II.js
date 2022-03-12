// @ts-check

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function permuteUnique(nums) {
  const res = [];
  nums.sort();

  /**
   * @param {boolean[]} used
   * @param {number[]} permutation
   */
  function dfs(used, permutation) {
    if (permutation.length === nums.length) {
      res.push([...permutation]);
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if (used[i]) continue;

      permutation.push(nums[i]);
      used[i] = true;

      dfs(used, permutation);

      permutation.pop();
      used[i] = false;

      while (i + 1 < nums.length && nums[i] === nums[i + 1]) {
        i++;
      }
    }
  }

  dfs(new Array(nums.length).fill(false), []);
  return res;
}

// Output:
// [
//   [1, 1, 2],
//   [1, 2, 1],
//   [2, 1, 1],
// ];
console.log(permuteUnique([1, 1, 2]));

// Output:
// [
//   [1, 2, 3],
//   [1, 3, 2],
//   [2, 1, 3],
//   [2, 3, 1],
//   [3, 1, 2],
//   [3, 2, 1],
// ];
console.log(permuteUnique([1, 2, 3]));
