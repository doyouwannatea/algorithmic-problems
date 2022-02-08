const test = require('../utils/test');

/**
 * @param {number[]} nums
 * @return {number[]}
 */
function sortEvenOdd(nums) {
  const odd = nums.filter((_, idx) => idx % 2 !== 0);
  const even = nums.filter((_, idx) => idx % 2 === 0);
  odd.sort((a, b) => b - a);
  even.sort((a, b) => a - b);

  const result = [];
  for (let i = 0; i < nums.length; i++) {
    result.push(i % 2 === 0 ? even[parseInt(i / 2)] : odd[parseInt(i / 2)]);
  }

  return result;
}

test([2, 3, 4, 1], sortEvenOdd([4, 1, 2, 3]));
