const testcase35 = require('./713. test-35.json');
const testcase42 = require('./713. test-42.json');

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function numSubarrayProductLessThanK(nums, k) {
  let left = 0,
    right = 0;
  let prod = 1,
    res = 0;

  while (right < nums.length) {
    if (k <= 1) return 0;
    prod *= nums[right];
    while (prod >= k) prod /= nums[left++];
    res += right - left + 1;
    right++;
  }
  return res;
}

// [10], [5], [2], [6], [10, 5], [5, 2], [2, 6], [5, 2, 6]
// Output: 8
console.log(numSubarrayProductLessThanK([10, 5, 2, 6], 100));

// Output: 0
console.log(numSubarrayProductLessThanK([1, 2, 3], 0));

// Output: 27168
console.log(numSubarrayProductLessThanK(testcase35.nums, testcase35.k));

// Output: 27040
console.log(numSubarrayProductLessThanK(testcase42.nums, testcase42.k));
