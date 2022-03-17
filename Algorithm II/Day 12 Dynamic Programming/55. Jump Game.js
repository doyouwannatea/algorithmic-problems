// @ts-check

/**
 * @param {number[]} nums
 * @return {boolean}
 */
function canJump(nums) {
  /**
   * @param {number} idx
   * @returns {boolean}
   */
  function jump(idx) {
    if (idx >= nums.length) return false;
    if (idx === nums.length - 1) return true;

    for (let i = nums[idx]; i > 0; i--) {
      if (jump(idx + i)) return true;
    }

    return false;
  }
  return jump(0);
}

// true
console.log(canJump([2, 3, 1, 1, 4]));

// false
console.log(canJump([3, 2, 1, 0, 4]));
