/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
function minSubArrayLen(target, nums) {
  let left = 0,
    right = 0,
    len = Number.MAX_SAFE_INTEGER,
    sum = 0;

  while (right < nums.length) {
    sum += nums[right];

    while (sum >= target) {
      len = Math.min(len, right - left + 1);
      sum -= nums[left];
      left++;
    }

    right++;
  }

  return len === Number.MAX_SAFE_INTEGER ? 0 : len;
}

// Output: 2
console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]));

// Output: 1
console.log(minSubArrayLen(4, [1, 4, 4]));

// Output: 0
console.log(minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1]));

// Output: 1
console.log(minSubArrayLen(11, [1, 1, 1, 100000, 1, 1, 1, 1]));
