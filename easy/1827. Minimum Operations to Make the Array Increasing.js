/**
 * @param {number[]} nums
 * @return {number}
 */
function minOperations(nums) {
  let operNum = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] <= nums[i - 1]) {
      const diff = nums[i - 1] - nums[i] + 1;
      nums[i] += diff;
      operNum += diff;
    }
  }

  return operNum;
}

console.log(minOperations([1, 1, 1])); // 3
console.log(minOperations([1, 5, 2, 4, 1])); // 14
console.log(minOperations([8])); // 0
