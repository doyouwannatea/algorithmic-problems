/**
 * @param {string} str
 * @return {string[]}
 */
function letterCasePermutation(str) {
  const res = [];
  trav(res, str, '');
  return res;
}

/**
 * @param {string[]} res
 * @param {string} str
 * @param {string} currStr
 */
function trav(res, str, currStr) {
  if (currStr.length === str.length) {
    res.push(currStr);
    return;
  }

  const ltr = str[currStr.length].toLowerCase();

  trav(res, str, currStr + ltr);
  if (ltr !== ltr.toUpperCase()) trav(res, str, currStr + ltr.toUpperCase());
}

// Output: ["a1b2","a1B2","A1b2","A1B2"]
console.log(letterCasePermutation('a1b2'));

// Output: ["3z4","3Z4"]
console.log(letterCasePermutation('3z4'));
