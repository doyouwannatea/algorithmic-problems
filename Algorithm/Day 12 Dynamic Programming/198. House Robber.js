/**
 * @param {number[]} nums
 * @return {number}
 */
function rob(nums) {
  let [prev1, prev2] = [0, 0];

  for (const num of nums) {
    const tmp = prev1;
    prev1 = Math.max(prev1, prev2 + num);
    prev2 = tmp;
  }

  return prev1;
}

// 4
console.log(rob([1, 2, 3, 1]));

// 12
console.log(rob([2, 7, 9, 3, 1]));

// 5336
console.log(rob([1000, 1, 1, 1000, 200, 3, 1, 3333]));

// 1000
console.log(rob([1000]));

// 0
console.log(rob([]));
