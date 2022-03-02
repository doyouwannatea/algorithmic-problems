/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function searchRange(nums, target) {
  function left() {
    let l = 0,
      r = nums.length - 1,
      start = -1;

    while (l <= r) {
      const m = Math.floor((l + r) / 2);
      if (nums[m] === target) {
        start = m;
        r = m - 1;
      }
      if (nums[m] < target) l = m + 1;
      if (nums[m] > target) r = m - 1;
    }

    return start;
  }

  function right() {
    let l = 0,
      r = nums.length - 1,
      end = -1;

    while (l <= r) {
      const m = Math.floor((l + r) / 2);
      if (nums[m] === target) {
        end = m;
        l = m + 1;
      }
      if (nums[m] < target) l = m + 1;
      if (nums[m] > target) r = m - 1;
    }

    return end;
  }

  return [left(), right()];
}

// Output: [3,4]
console.log(
  searchRange([5, 7, 7, 8, 8, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 11], 8)
);

// Output: [-1,-1]
console.log(searchRange([5, 7, 7, 8, 8, 10], 6));

// Output: [-1,-1]
console.log(searchRange([], 0));

// Output: [0, 0]
console.log(searchRange([1], 1));

// Output: [0, 0]
console.log(searchRange([1, 2, 3], 1));
