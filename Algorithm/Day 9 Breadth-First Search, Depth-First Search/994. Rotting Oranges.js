/**
 * @param {number[][]} grid
 * @return {number}
 */
function orangesRotting(grid) {
  const m = grid.length,
    n = grid[0].length,
    rottenOrangesQueue = [];
  let time = 0,
    rottenOrangesTick = [];

  // find all rotten oranges
  for (let i = 0; i < m; i++)
    for (let j = 0; j < n; j++)
      if (grid[i][j] === 2) rottenOrangesQueue.push([i, j]);

  const dir = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];
  while (rottenOrangesQueue.length > 0) {
    const orange = rottenOrangesQueue.shift();

    dir.forEach((d) => {
      const next = [orange[0] + d[0], orange[1] + d[1]];
      if (next[0] > -1 && next[0] < m && next[1] > -1 && next[1] < n) {
        if (grid[next[0]][next[1]] === 1) {
          grid[next[0]][next[1]] = 2;
          rottenOrangesTick.push(next);
        }
      }
    });

    if (rottenOrangesQueue.length === 0 && rottenOrangesTick.length > 0) {
      rottenOrangesQueue.push(...rottenOrangesTick);
      rottenOrangesTick = [];
      time++;
    }
  }

  for (let i = 0; i < m; i++)
    for (let j = 0; j < n; j++) if (grid[i][j] === 1) return -1;

  return time;
}

// Output: 4
console.log(
  orangesRotting([
    [2, 1, 1],
    [1, 1, 0],
    [0, 1, 1],
  ])
);

// Output: -1
console.log(
  orangesRotting([
    [2, 1, 1],
    [0, 1, 1],
    [1, 0, 1],
  ])
);

// Output: 0
console.log(orangesRotting([[0, 2]]));
