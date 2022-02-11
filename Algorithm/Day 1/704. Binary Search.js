const test = require('../../utils/test');

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function search(nums, target) {
  let start = 0,
    end = nums.length - 1;

  while (start <= end) {
    const mid = parseInt((start + end) / 2);
    if (nums[mid] === target) return mid;
    if (nums[mid] > target) end = mid - 1;
    if (nums[mid] < target) start = mid + 1;
  }

  return -1;
}

test(4, search([-1, 0, 3, 5, 9, 12], 9));
test(-1, search([-1, 0, 3, 5, 9, 12], 2));
test(1, search([-1, 0, 3, 5, 9, 12], 0));
