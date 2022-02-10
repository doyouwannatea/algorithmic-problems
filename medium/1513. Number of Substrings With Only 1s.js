const test = require('../utils/test');

/**
 * @param {string} s
 * @return {number}
 */
function numSub(s) {
  let res = 0;
  let one = 0;
  for (let num of s) {
    if (num === '1') one++, (res += one);
    else one = 0;
  }
  return res % (1e9 + 7);
}

test(9, numSub('0110111'));
// Explanation: There are 9 substring in total with only 1's characters.
// "1" -> 5 times.
// "11" -> 3 times.
// "111" -> 1 time.
