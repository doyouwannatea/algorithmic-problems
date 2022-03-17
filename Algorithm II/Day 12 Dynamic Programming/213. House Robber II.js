// @ts-check

/**
 * @param {number[]} nums
 * @return {number}
 */
function rob(nums) {
  if (nums.length < 4) return Math.max(...nums);

  /**
   * @param {number[]} nums
   * @return {number}
   */
  function helpRob(nums) {
    if (nums.length === 0) return 0;
    if (nums.length < 3) return Math.max(...nums);
    const hash = new Map();
    hash.set(0, nums[0]);
    hash.set(1, Math.max(nums[0], nums[1]));
    for (let i = 2; i < nums.length; i++) {
      hash.set(i, Math.max(hash.get(i - 1), hash.get(i - 2) + nums[i]));
    }

    return hash.get(hash.size - 1);
  }

  return Math.max(
    helpRob(nums.slice(0, nums.length - 1)),
    helpRob(nums.slice(1))
  );
}

// Output: 3
console.log(rob([2, 3, 2]));

// Output: 4
console.log(rob([1, 2, 3, 1]));

// Output: 3
console.log(rob([1, 2, 3]));

// Output: 340
console.log(rob([200, 3, 140, 20, 10]));
