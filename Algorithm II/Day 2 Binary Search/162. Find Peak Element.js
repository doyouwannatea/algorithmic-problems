/**
 * @param {number[]} nums
 * @return {number}
 */
function findPeakElement(nums) {
  let l = 0,
    r = nums.length - 1;

  while (l < r) {
    const m = Math.floor((l + r) / 2);
    if (nums[m - 1] < nums[m] && nums[m + 1] < nums[m]) return m;
    if (nums[m - 1] === undefined && nums[m + 1] < nums[m]) return m;
    if (nums[m + 1] === undefined && nums[m - 1] < nums[m]) return m;
    if (nums[m - 1] > nums[m]) r = m - 1;
    else l = m + 1;
  }

  return l;
}

// 2
console.log(findPeakElement([1, 2, 3, 1]));

// 1 или 5
console.log(findPeakElement([1, 2, 1, 3, 5, 6, 4]));

// 0
console.log(findPeakElement([2, 1]));

// 1
console.log(findPeakElement([1, 3]));

// 0
console.log(findPeakElement([1]));
