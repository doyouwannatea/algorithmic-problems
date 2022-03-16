// @ts-check

/**
 * @param {string} digits
 * @return {string[]}
 */
function letterCombinations(digits) {
  if (digits.length < 1) return [];
  const res = [];
  const lettersByNumber = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
  };

  /**
   * @param {string[]} perm
   * @param {number} num
   */
  function path(perm, num) {
    if (perm.length === digits.length) {
      res.push([...perm]);
      return;
    }

    const ltrs = lettersByNumber[digits[num]];
    for (let i = 0; i < ltrs.length; i++) {
      perm.push(ltrs[i]);
      path(perm, num + 1);
      perm.pop();
    }
  }

  path([], 0);
  return res.map((digits) => digits.join(''));
}

// Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
console.log(letterCombinations('23'));

// Output: []
console.log(letterCombinations(''));

// Output: ["a","b","c"]
console.log(letterCombinations('2'));
