/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function threeSum(nums) {
  nums.sort((a, b) => a - b);
  const res = [];

  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let l = i + 1,
      r = nums.length - 1;

    while (l < r) {
      const sum = nums[i] + nums[l] + nums[r];
      if (sum > 0) r--;
      else if (sum < 0) l++;
      else {
        res.push([nums[i], nums[l], nums[r]]);
        l++;
        while (nums[l] === nums[l - 1] && l < r) l++;
      }
    }
  }

  return res;
}

// [[-1, -1, 2], [-1, 0, 1]]
console.log(threeSum([-1, 0, 1, 2, -1, -1, -1 - 4]));

// []
console.log(threeSum([]));

// []
console.log(threeSum([0]));

// [[0,0,0]]
console.log(threeSum([0, 0, 0]));
