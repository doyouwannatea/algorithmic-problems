// @ts-check

/**
 * @param {number} n
 * @return {string[]}
 */
function generateParenthesis(n) {
  const res = [];
  /**
   * @param {string} str
   * @param {number} open
   * @param {number} close
   */
  function backtrack(str, open, close) {
    if (str.length === n * 2) {
      res.push(str);
      return;
    }

    if (open < n) {
      backtrack(str + '(', open + 1, close);
    }

    if (close < open) {
      backtrack(str + ')', open, close + 1);
    }
  }
  backtrack('', 0, 0);
  return res;
}

// Output: ["((()))","(()())","(())()","()(())","()()()"]
console.log(generateParenthesis(3));

// Output: ["()"]
console.log(generateParenthesis(1));
