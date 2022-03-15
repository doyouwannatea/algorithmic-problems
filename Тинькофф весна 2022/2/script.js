// @ts-check
// const { readStdin } = require('../../utils/stdin');

// readStdin((lines) => {
//   const nums = lines.map(Number);
//   func(nums);
// });

/**
 * @param {number[]} nums
 */
function func(nums) {
  let actions = 0;
  const total = Math.ceil(nums.reduce((a, b) => a + b) / nums.length);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > total) {
      actions++;
      let j = 0;
      while (nums[i] > total) {
        if (nums[j] < total) {
          nums[j]++;
          nums[i]--;
        }

        j++;
        if (j === nums.length) j = 0;
      }
    }
  }
  console.log(actions);
}

// 2
func([29, 27, 2, 4, 3, 5, 6, 7, 8, 9]);
