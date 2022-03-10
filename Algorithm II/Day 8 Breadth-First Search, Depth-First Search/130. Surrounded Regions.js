/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
function solve(board) {
  const m = board.length,
    n = board[0].length,
    checked = [];

  for (let i = 0; i < m; i++) {
    checked[i] = [];
    for (let j = 0; j < n; j++) {
      checked[i][j] = false;
    }
  }

  const onBorder = (i, j) => i === 0 || i === m - 1 || j === 0 || j === n - 1;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === 'O' && !checked[i][j]) {
        let isCaptured = !onBorder(i, j);
        const region = [[i, j]];
        const queue = [[i, j]];

        while (queue.length > 0) {
          const [i, j] = queue.shift();
          checked[i][j] = true;

          [
            [i + 1, j],
            [i - 1, j],
            [i, j + 1],
            [i, j - 1],
          ].forEach((next) => {
            if (!board[next[0]] || !board[next[0]][next[1]]) return;
            if (board[next[0]][next[1]] === 'X') return;
            if (checked[next[0]][next[1]]) return;

            if (onBorder(next[0], next[1])) {
              isCaptured = false;
            }
            queue.push(next);
            region.push(next);
          });
        }
        if (isCaptured) region.forEach((r) => (board[r[0]][r[1]] = 'X'));
      }
    }
  }

  return board;
}

// Output: [["X","X","X","X"],["X","X","X","X"],["X","X","X","X"],["X","O","X","X"]]
console.log(
  solve([
    ['X', 'X', 'X', 'X'],
    ['X', 'O', 'O', 'X'],
    ['X', 'X', 'O', 'X'],
    ['X', 'O', 'X', 'X'],
  ])
);

// Output: [["X"]]
console.log(solve([['X']]));
