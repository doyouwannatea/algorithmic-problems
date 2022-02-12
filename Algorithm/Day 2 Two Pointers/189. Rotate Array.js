// const test = require('../../utils/test');

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function rotate(nums, k) {
  k %= nums.length;

  function reverse(arr, l, r) {
    while (l < r) {
      const temp = arr[l];
      arr[l] = arr[r];
      arr[r] = temp;
      l++;
      r--;
    }
  }

  reverse(nums, 0, nums.length - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, nums.length - 1);
  return nums;
}

rotate([1, 2, 3, 4, 5, 6, 7], 3);
rotate([-1, -100, 3, 99], 2);
rotate([1, 2], 5);
rotate([1, 2, 3], 4);

// test([5, 6, 7, 1, 2, 3, 4], rotate([1, 2, 3, 4, 5, 6, 7], 3));
// [1, 2, 3, 4, 5, 6, 7], 3
// [7, 1, 2, 3, 4, 5, 6], 2
// [6, 7, 1, 2, 3, 4, 5], 1
// [5, 6, 7, 1, 2, 3, 4], 0
//
// test([3, 99, -1, -100], rotate([-1, -100, 3, 99], 2));
// test([2, 1], rotate([1, 2], 5));
// test([3, 1, 2], rotate([1, 2, 3], 4));
// [1, 2, 3], 4
// [3, 1, 2], 3
// [2, 3, 1], 2
// [1, 2, 3], 1
// [3, 1, 2], 0
