/**
 * @param {character[][]} grid
 * @return {number}
 */
function numIslands(grid) {
  const m = grid.length,
    n = grid[0].length;
  let count = 0;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === '1') {
        const queue = [[i, j]];
        while (queue.length > 0) {
          const [i, j] = queue.shift();
          const neighbors = [
            i < m - 1 && [i + 1, j],
            i > 0 && [i - 1, j],
            j < n - 1 && [i, j + 1],
            j > 0 && [i, j - 1],
          ].filter(Boolean);
          neighbors.forEach(([i, j]) => {
            if (grid[i][j] === '1') {
              grid[i][j] = '0';
              queue.push([i, j]);
            }
          });
        }
        count++;
      }
    }
  }
  return count;
}

//   Output: 1
console.log(
  numIslands([
    ['1', '1', '1', '1', '0'],
    ['1', '1', '0', '1', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '0', '0', '0'],
  ])
);

//   Output: 3
console.log(
  numIslands([
    ['1', '1', '0', '0', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '1', '0', '0'],
    ['0', '0', '0', '1', '1'],
  ])
);
