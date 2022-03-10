const testCase53 = require('./testCase-53.json');

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
function solve(board) {
  const m = board.length,
    n = board[0].length,
    regions = [],
    checked = [];

  function onBorder(i, j) {
    return i === 0 || i === m - 1 || j === 0 || j === n - 1;
  }

  function bfs(i, j) {
    const region = [[i, j]];
    const queue = [[i, j]];

    while (queue.length > 0) {
      const [i, j] = queue.shift();

      const neighbors = [];
      if (i < m - 1) neighbors.push([i + 1, j]);
      if (i > 0) neighbors.push([i - 1, j]);
      if (j < n - 1) neighbors.push([i, j + 1]);
      if (j > 0) neighbors.push([i, j - 1]);

      neighbors.forEach((next) => {
        if (board[next[0]][next[1]] === 'X') return;
        if (checked[next[0]] && checked[next[0]][next[1]]) return;
        if (!checked[next[0]]) checked[next[0]] = [];
        checked[next[0]][next[1]] = true;
        queue.push(next);
        region.push(next);
      });
    }
    return region;
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (!checked[i]) {
        checked[i] = [];
        checked[i][j] = false;
      }
      if (onBorder(i, j) && board[i][j] === 'O' && !checked[i][j]) {
        const region = bfs(i, j);
        regions.push(...region);
      }
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      board[i][j] = 'X';
    }
  }

  regions.forEach((r) => (board[r[0]][r[1]] = 'O'));
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

// Output: ?
// console.log(solve(testCase53));

// Output:
// [
//   ['O', 'X', 'X', 'O', 'X'],
//   ['X', 'X', 'X', 'X', 'O'],
//   ['X', 'X', 'X', 'O', 'X'],
//   ['O', 'X', 'O', 'O', 'O'],
//   ['X', 'X', 'O', 'X', 'O'],
// ];

console.log(
  solve([
    ['O', 'X', 'X', 'O', 'X'],
    ['X', 'O', 'O', 'X', 'O'],
    ['X', 'O', 'X', 'O', 'X'],
    ['O', 'X', 'O', 'O', 'O'],
    ['X', 'X', 'O', 'X', 'O'],
  ])
);
