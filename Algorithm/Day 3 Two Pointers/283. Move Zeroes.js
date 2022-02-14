/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums) {
  let insertPos = 0,
    i = 0;

  while (i < nums.length) {
    if (nums[i] !== 0) nums[insertPos++] = nums[i];
    i++;
  }

  while (insertPos < nums.length) {
    nums[insertPos++] = 0;
  }

  nums;
}

moveZeroes([1, 0, 0, 3, 12]); // [1,3,12,0,0]
moveZeroes([0, 1, 0, 3, 12]); // [1,3,12,0,0]
moveZeroes([0, 1, 0, 3, 12, 11, 0]); // [1,3,12,11,0,0,0]
moveZeroes([0]); // [0]
moveZeroes([1]); // [1]
