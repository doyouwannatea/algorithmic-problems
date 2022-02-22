/**
 * @param {number} n
 * @return {number}
 */
function climbStairs(n) {
  const hash = new Map();

  function climb(step, count = 0) {
    if (step < 0) return count;
    if (step === 0) return count + 1;
    if (hash.has(step)) return hash.get(step);
    return hash
      .set(step, climb(step - 1, count) + climb(step - 2, count))
      .get(step);
  }

  return climb(n);
}

// Output: 2
console.log(climbStairs(2));

// Output: 3
console.log(climbStairs(3));

// Output: 13
console.log(climbStairs(6));
