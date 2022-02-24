/**
 * @param {number[]} nums
 * @return {number}
 */
function singleNumber(nums) {
  return nums.reduce((prev, curr) => prev ^ curr);
  //   const hash = new Map();
  //   for (const num of nums) {
  //     if (!hash.has(num)) hash.set(num, 0);
  //     hash.set(num, hash.get(num) + 1);
  //   }

  //   for (const [num, count] of hash) {
  //     if (count === 1) return num;
  //   }
}
console.log(singleNumber([2, 1, 2]));

// 4
console.log(singleNumber([4, 1, 2, 1, 2]));

// 1
console.log(singleNumber([1]));
