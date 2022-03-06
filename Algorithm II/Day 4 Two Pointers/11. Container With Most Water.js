/**
 * @param {number[]} height
 * @return {number}
 */
function maxArea(height) {
  let l = 0,
    r = height.length - 1,
    res = 0;

  while (l < r) {
    const area = (r - l) * Math.min(height[l], height[r]);
    if (area > res) res = area;
    if (height[l] < height[r]) l++;
    else r--;
  }

  return res;
}

// 49
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));

// 1
console.log(maxArea([1, 1]));

// 0
console.log(maxArea([]));

// 17
console.log(maxArea([2, 3, 4, 5, 18, 17, 6]));
