// @ts-check

/**
 * @param {number[]} nums
 * @return {boolean}
 */
function canJump(nums) {
  let lastGoodIndexPos = nums.length - 1;

  for (let i = nums.length - 2; i >= 0; i--) {
    if (nums[i] + i >= lastGoodIndexPos) {
      lastGoodIndexPos = i;
    }
  }

  return lastGoodIndexPos === 0;
}

// true
console.log(canJump([2, 3, 1, 1, 4]));

// false
console.log(canJump([3, 2, 1, 0, 4]));

// true
console.log(canJump([2, 0, 0]));
