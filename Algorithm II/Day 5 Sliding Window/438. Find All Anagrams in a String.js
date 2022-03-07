/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
const findAnagrams = (s, p) => {
  // initialize output array to be returned at the end and neededChars object to store the chars in p.
  const output = [];
  const neededChars = {};

  // populate neededChars to contain every char in p as a key and how many times that char appears in p as its value.
  for (const char of p) {
    if (char in neededChars) {
      neededChars[char]++;
    } else neededChars[char] = 1;
  }

  // initialize window pointers and the total number of chars needed to form an anagram.
  let left = 0;
  let right = 0;
  let count = p.length;

  // start sliding the window
  while (right < s.length) {
    if (neededChars[s[right]] > 0) count--;
    neededChars[s[right]]--;
    right++;

    if (count === 0) output.push(left);

    if (right - left === p.length) {
      if (neededChars[s[left]] >= 0) count++;
      neededChars[s[left]]++;
      left++;
    }
  }
  return output;
};

// [0, 6]
console.log(findAnagrams('cbaebabacd', 'abc'));

// [0, 1, 2]
// console.log(findAnagrams('abab', 'ab'));

// [1]
// console.log(findAnagrams('baa', 'aa'));
