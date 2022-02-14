const test = require('../utils/test');

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
  let l = 0,
    r = nums.length - 1;

  while (l < r) {
    const sum = nums[l] + nums[r];

    if (sum === target) return [l + 1, r + 1];
    else if (sum < target) l++;
    else r--;
  }
}

test([1, 2], twoSum([2, 7, 11, 15], 9));
test([1, 3], twoSum([2, 3, 4], 6));
test([2, 3], twoSum([5, 25, 75], 100));
test([4, 5], twoSum([1, 2, 3, 4, 4, 9, 56, 90], 8));
