/**
 * @param {number[]} pkgs
 * @param {number[][]} boxes
 * @return {number}
 */
function minWastedSpace(pkgs, boxes) {
  pkgs.sort((a, b) => a - b);
  const inf = Number.MAX_SAFE_INTEGER;
  const mod = 1e9 + 7;
  const pkgsSum = pkgs.reduce((a, b) => a + b);
  let res = inf;

  for (const box of boxes) {
    box.sort((a, b) => a - b);
    if (box[box.length - 1] < pkgs[pkgs.length - 1]) continue;
    let cur = 0,
      i = 0;

    for (const b of box) {
      const j = binarySearch(pkgs, b + 1);
      cur += b * (j - i);
      i = j;
    }

    res = Math.min(res, cur);
  }

  return res < inf ? (res - pkgsSum) % mod : -1;
}

/**
 * @param {number[]} arr
 * @param {number} b
 * @returns {number}
 */
function binarySearch(arr, b) {
  let l = 0,
    r = arr.length;

  while (l < r) {
    const m = parseInt((l + r) / 2);
    if (arr[m] < b) l = m + 1;
    else r = m;
  }

  return l;
}

// 6
// console.log(
//   minWastedSpace(
//     [2, 3, 5],
//     [
//       [4, 8],
//       [2, 8],
//     ]
//   )
// );

// // -1
// console.log(
//   minWastedSpace(
//     [2, 3, 5],
//     [
//       [1, 4],
//       [2, 3],
//       [3, 4],
//     ]
//   )
// );

// 9
console.log(
  minWastedSpace([3, 5, 8, 10, 11, 12], [[12], [11, 9], [10, 5, 14]])
);
