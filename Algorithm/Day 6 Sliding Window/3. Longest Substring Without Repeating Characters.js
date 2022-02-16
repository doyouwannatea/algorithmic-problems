/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(s) {
  let i = 0,
    j = 0,
    lngstLen = 0;

  while (i < s.length && j < s.length) {
    if (s.slice(i, j + 1).includes(s[j + 1])) i++;
    else {
      j += 1;
      if (s.slice(i, j + 1).length > lngstLen)
        lngstLen = s.slice(i, j + 1).length;
    }
  }

  return lngstLen;
}

// 3
console.log(lengthOfLongestSubstring('abcabcbb'));

// 1
console.log(lengthOfLongestSubstring('bbbbb'));

// 3
console.log(lengthOfLongestSubstring('pwwkew'));

// 1
console.log(lengthOfLongestSubstring(' '));

// 0
console.log(lengthOfLongestSubstring(''));

// 1
console.log(lengthOfLongestSubstring('aa'));
