const test = require('../../utils/test');

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function searchInsert(nums, target) {
  let start = 0,
    end = nums.length - 1;

  while (start <= end) {
    const mid = parseInt((start + end) / 2);
    if (nums[mid] === target) return mid;
    if (nums[mid] > target) end = mid - 1;
    if (nums[mid] < target) start = mid + 1;
  }

  return start;
}

test(2, searchInsert([1, 3, 5, 6], 5));
test(2, searchInsert([1, 3, 5, 6], 4));
