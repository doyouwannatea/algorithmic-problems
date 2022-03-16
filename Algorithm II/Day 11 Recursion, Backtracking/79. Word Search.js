// @ts-check

/**
 * @param {string[][]} board
 * @param {string} word
 * @return {boolean}
 */
function exist(board, word) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (find(board, word, i, j, 0)) return true;
    }
  }

  return false;
}

/**
 * @param {string[][]} board
 * @param {string} word
 * @param {number} i
 * @param {number} j
 * @param {number} char
 * @returns {boolean}
 */
function find(board, word, i, j, char) {
  if (char >= word.length) return true;
  if (i < 0 || j < 0 || i == board.length || j == board[i].length) return false;
  if (board[i][j] !== word[char]) return false;
  const ltr = board[i][j];
  board[i][j] = '*';
  const res =
    find(board, word, i, j + 1, char + 1) ||
    find(board, word, i, j - 1, char + 1) ||
    find(board, word, i + 1, j, char + 1) ||
    find(board, word, i - 1, j, char + 1);
  board[i][j] = ltr;
  return res;
}

// Output: true
console.log(
  exist(
    [
      ['A', 'B', 'C', 'E'],
      ['S', 'F', 'C', 'S'],
      ['A', 'D', 'E', 'E'],
    ],
    'ABCCED'
  )
);

// Output: true
console.log(
  exist(
    [
      ['A', 'B', 'C', 'E'],
      ['S', 'F', 'C', 'S'],
      ['A', 'D', 'E', 'E'],
    ],
    'SEE'
  )
);

// Output: false
console.log(
  exist(
    [
      ['A', 'B', 'C', 'E'],
      ['S', 'F', 'C', 'S'],
      ['A', 'D', 'E', 'E'],
    ],
    'ABCB'
  )
);
