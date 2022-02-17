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
        maxArea = Math.max(maxArea, trav(grid, r, c));
      }
    }
  }

  return maxArea;
}

/**
 *
 * @param {number[][]} grid
 * @param {number} i
 * @param {number} j
 * @returns {number}
 */
function trav(grid, i, j) {
  if (
    i < 0 ||
    j < 0 ||
    i > grid.length - 1 ||
    j > grid[0].length - 1 ||
    !grid[i][j]
  )
    return 0;
  grid[i][j] = 0;
  return (
    1 +
    trav(grid, i + 1, j) +
    trav(grid, i - 1, j) +
    trav(grid, i, j + 1) +
    trav(grid, i, j - 1)
  );
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
