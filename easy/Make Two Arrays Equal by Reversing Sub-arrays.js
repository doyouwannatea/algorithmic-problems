/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
const canBeEqual = function (target, arr) {
  if (target.length !== arr.length) return false;

  target.sort();
  arr.sort();

  for (let i = 0; i < array.length; i++) {
    if (target[i] !== arr[i]) {
      return false;
    }
  }

  return true;
};

canBeEqual([1, 2, 3, 4], [2, 4, 1, 3]);
