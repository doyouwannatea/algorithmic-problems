// @ts-check

/**
 * @param {number[]} nums
 * @return {number}
 */
function rob(nums) {
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

// 4
console.log(rob([1, 2, 3, 1]));

// 12
console.log(rob([2, 7, 9, 3, 1]));

// 5336
console.log(rob([1000, 1, 1, 1000, 200, 3, 1, 3333]));

// 1000
console.log(rob([1000]));

// 2000
console.log(rob([1000, 2000]));

// 0
console.log(rob([]));
