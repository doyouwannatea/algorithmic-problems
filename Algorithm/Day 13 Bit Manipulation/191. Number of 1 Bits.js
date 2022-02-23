/**
 * @param {number} n - a positive integer
 * @return {number}
 */
function hammingWeight(n) {
  return n
    .toString(2)
    .split('')
    .filter((i) => i === '1').length;
}

// 3
console.log(hammingWeight(11));
