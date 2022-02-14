const test = require('../utils/test');

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
function reverseString(s) {
  let l = 0,
    r = s.length - 1;

  while (l < r) {
    const temp = s[l];
    s[l] = s[r];
    s[r] = temp;
    l++;
    r--;
  }

  return s;
}

test(['o', 'l', 'l', 'e', 'h'], reverseString(['h', 'e', 'l', 'l', 'o']));
