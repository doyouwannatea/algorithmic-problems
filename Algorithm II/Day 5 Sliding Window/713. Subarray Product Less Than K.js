const testcase35 = require('./713. test-35.json');
const testcase42 = require('./713. test-42.json');

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function numSubarrayProductLessThanK(nums, k) {
  let l = 0,
    r = 0,
    count = 0;

  const hash = new Map();

  while (l >= 0 || r < nums.length) {
    while (r < nums.length) {
      if (l === r) hash.set(l + r - 1, 1);
      hash.set(l + r, hash.get(l + r - 1) * nums[r]);
      if (hash.get(l + r) < k) count++;
      l++;
      r++;
    }
    l -= 2;
    r -= 1;
    while (l >= 0) {
      hash.set(l + r, hash.get(l + r + 1) * nums[l]);
      if (hash.get(l + r) < k) count++;
      r--;
      l--;
    }
    l += 1;
    r += 2;
  }

  return count;
}

// [10], [5], [2], [6], [10, 5], [5, 2], [2, 6], [5, 2, 6]
// Output: 8
console.log(numSubarrayProductLessThanK([10, 5, 2, 6], 100));

// Output: 0
// console.log(numSubarrayProductLessThanK([1, 2, 3], 0));

// Output: ?
// console.log(numSubarrayProductLessThanK(testcase35.nums, testcase35.k));

// Output: ?
console.log(numSubarrayProductLessThanK(testcase42.nums, testcase42.k));
