/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function search(nums, target) {
  // 1. найти наименьший элемент в массиве (bs)
  let left = 0,
    right = nums.length - 1;
  // target = 1
  //              4
  // [4, 5, 6, 7, 0, 1, 2]
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] > nums[right]) left = mid + 1;
    else right = mid;
  }

  // 2. решить на какой стороне искать target
  let start = left;
  left = 0;
  right = nums.length - 1;

  if (target >= nums[start] && target <= nums[right]) {
    left = start;
  } else {
    right = start;
  }

  // 3. найти target (bs)
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) return mid;
    if (nums[mid] < target) left = mid + 1;
    if (nums[mid] > target) right = mid - 1;
  }

  return -1;
}

// Output: 5
console.log(search([4, 5, 6, 7, 0, 1, 2], 1));

// Output: 6
console.log(search([2, 4, 5, 6, 7, 0, 1], 1));

// Output: -1
console.log(search([4, 5, 6, 7, 0, 1, 2], 3));

// Output: -1
console.log(search([1], 0));

// Output: 0
console.log(search([6, 7, 1, 2, 3, 4, 5], 6));

// Output: 113
console.log(
  search(
    [
      57, 58, 59, 62, 63, 66, 68, 72, 73, 74, 75, 76, 77, 78, 80, 81, 86, 95,
      96, 97, 98, 100, 101, 102, 103, 110, 119, 120, 121, 123, 125, 126, 127,
      132, 136, 144, 145, 148, 149, 151, 152, 160, 161, 163, 166, 168, 169, 170,
      173, 174, 175, 178, 182, 188, 189, 192, 193, 196, 198, 199, 200, 201, 202,
      212, 218, 219, 220, 224, 225, 229, 231, 232, 234, 237, 238, 242, 248, 249,
      250, 252, 253, 254, 255, 257, 260, 266, 268, 270, 273, 276, 280, 281, 283,
      288, 290, 291, 292, 294, 295, 298, 299, 4, 10, 13, 15, 16, 17, 18, 20, 22,
      25, 26, 27, 30, 31, 34, 38, 39, 40, 47, 53, 54,
    ],
    30
  )
);
