/**
 * @param {number[][]} grid
 * @return {number}
 */
function shortestPathBinaryMatrix(grid) {
  if (grid[0][0] === 1) return -1;
  if (grid.length === 1) return 1;
  const n = grid.length;
  const paths = [];
  let hasPath = false;

  const queue = [[0, 0, 1]]; // i, j, steps
  while (queue.length > 0) {
    const [i, j, steps] = queue.shift();
    const neighbors = [
      [i - 1, j - 1],
      [i - 1, j],
      [i - 1, j + 1],
      [i, j - 1],
      [i, j + 1],
      [i + 1, j - 1],
      [i + 1, j],
      [i + 1, j + 1],
    ];

    neighbors.forEach((next) => {
      if (!grid[next[0]] || grid[next[0]][next[1]] === undefined) return;
      if (grid[next[0]][next[1]] === 1) return;
      if (next[0] === n - 1 && next[1] === n - 1) {
        paths.push(steps + 1);
        hasPath = true;
        return;
      }
      queue.push([next[0], next[1], steps + 1]);
      grid[next[0]][next[1]] = 1;
    });
  }

  if (!hasPath) return -1;
  return Math.min(...paths);
}

// 2
console.log(
  shortestPathBinaryMatrix([
    [0, 1],
    [1, 0],
  ])
);

// 4
console.log(
  shortestPathBinaryMatrix([
    [0, 0, 0],
    [1, 1, 0],
    [1, 1, 0],
  ])
);

// -1
console.log(
  shortestPathBinaryMatrix([
    [1, 0, 0],
    [1, 1, 0],
    [1, 1, 0],
  ])
);
