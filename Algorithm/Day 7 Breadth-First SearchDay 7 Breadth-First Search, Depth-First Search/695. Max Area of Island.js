/**
 * @param {number[][]} grid
 * @return {number}
 */
function maxAreaOfIsland(grid) {
  const w = grid[0].length;
  const h = grid.length;
  let maxArea = 0;

  for (let r = 0; r < h; r++) {
    for (let c = 0; c < w; c++) {
      if (grid[r][c] === 1) {
        maxArea = Math.max(maxArea, areaOfIsland(grid, r, c));
      }
    }
  }

  return maxArea;
}

/**
 *
 * @param {number[][]} grid
 * @param {number} row
 * @param {number} col
 * @returns {number}
 */
function areaOfIsland(grid, row, col) {
  const w = grid[0].length;
  const h = grid.length;
  const queue = [[row, col]];
  grid[row][col] = -1;
  let area = 1;

  while (queue.length > 0) {
    const [r, c] = queue.pop();

    const neighbors = [
      r > 0 && [r - 1, c],
      r < h - 1 && [r + 1, c],
      c > 0 && [r, c - 1],
      c < w - 1 && [r, c + 1],
    ].filter(Boolean);

    for (const point of neighbors) {
      const [r, c] = point;
      if (grid[r][c] === 1) {
        area += 1;
        queue.push([r, c]);
        grid[r][c] = -1;
      }
    }
  }

  return area;
}

// 6
console.log(
  maxAreaOfIsland([
    [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
  ])
);

// // 0
// console.log(maxAreaOfIsland([[0, 0, 0, 0, 0, 0, 0, 0]]));
