const test = require('../../utils/test');

/**
 * @param {number[]} nums
 * @return {number[]}
 */
function sortedSquares(nums) {
  let l = 0,
    r = nums.length - 1;
  const res = [];
  let resEndIdx = nums.length - 1;

  while (l <= r) {
    const start = nums[l] ** 2;
    const end = nums[r] ** 2;
    if (start > end) {
      res[resEndIdx--] = start;
      l++;
    } else {
      res[resEndIdx--] = end;
      r--;
    }
  }

  return res;
}

test([0, 1, 9, 16, 100], sortedSquares([-4, -1, 0, 3, 10]));
test([4, 9, 9, 49, 121], sortedSquares([-7, -3, 2, 3, 11]));
test([4, 9, 9, 121], sortedSquares([-3, 2, 3, 11]));
