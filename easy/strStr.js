const test = require('../utils/test');

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
function strStr(haystack, needle) {
  if (needle === '') return 0;
  if (haystack.length < needle.length) return -1;
  let index = -1;
  for (let i = 0; i < haystack.length - needle.length + 1; i++) {
    if (haystack[i] === needle[0]) {
      index = i;
      let found = true;
      for (let j = 0; j < needle.length; j++) {
        if (haystack[j + i] !== needle[j]) {
          found = false;
          index = -1;
          break;
        }
      }
      if (found) {
        return index;
      }
    }
  }
  return index;
}

test(2, strStr('dasx2dsxx', 'sx'));
