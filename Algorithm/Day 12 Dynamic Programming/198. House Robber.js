/**
 * @param {number[]} nums
 * @return {number}
 */
function rob(nums) {
  // Рекурсия с мемоизацией
  //   /**
  //    * @param {number[]} nums
  //    * @param {number} idx
  //    * @param {Map<number, number>} hash
  //    * @returns {number}
  //    */
  //   function rec(nums, idx, hash) {
  //     if (idx >= nums.length) return 0;
  //     if (hash.has(idx)) return hash.get(idx);
  //     const res = Math.max(
  //       nums[idx] + rec(nums, idx + 2, hash),
  //       rec(nums, idx + 1, hash)
  //     );
  //     return hash.set(idx, res).get(idx);
  //   }
  //   return rec(nums, 0, new Map());
  //
  //   Динамическое программирование
  if (nums.length === 1) return nums[0];
  let prev2 = nums[0],
    prev1 = Math.max(nums[0], nums[1]),
    curr = prev1;
  for (let i = 2; i < nums.length; i++) {
    curr = Math.max(prev1, prev2 + nums[i]);
    prev2 = prev1;
    prev1 = curr;
  }
  return curr;
}

// 4
console.log(rob([1, 2, 3, 1]));

// 12
console.log(rob([2, 7, 9, 3, 1]));

// 5336
console.log(rob([1000, 1, 1, 1000, 200, 3, 1, 3333]));

// 1000
console.log(rob([1000]));
