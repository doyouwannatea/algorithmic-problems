const test = require('../utils/test');

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
function reverseString(s) {
  s = s.split('');
  let l = 0,
    r = s.length - 1;

  while (l < r) {
    const temp = s[l];
    s[l] = s[r];
    s[r] = temp;
    l++;
    r--;
  }

  return s.join('');
}

/**
 * @param {string} s
 * @return {string}
 */
function reverseWords(s) {
  return s.split(' ').map(reverseString).join(' ');
}

test(
  "s'teL ekat edoCteeL tsetnoc",
  reverseWords("Let's take LeetCode contest")
);
