// @ts-check
// const { readStdin } = require('../../utils/stdin');

// readStdin((lines) => {
//   const n = Number(lines[0]);
//   const events = lines
//     .slice(1)
//     .map((line) => line.split(' '))
//     .map((line) => [line[0], Number(line[1]), Number(line[2])]);

//   // @ts-ignore
//   func(n, events);
// });

/**
 * @param {number} n
 * @param {['A' | 'D' | 'Q', number, number][]} events
 */
function func(n, events) {
  // 1 - есть сорняк
  // 0 - нет сорняка
  const grid = [];
  let gridLen = 0;

  for (const event of events) {
    switch (event[0]) {
      case 'A':
        // растим сорняк
        gridLen = Math.max(gridLen, event[1] - 1, event[2] - 1);
        if (!grid[event[2] - 1]) {
          grid[event[2] - 1] = new Array(gridLen).fill(0);
        }
        grid[event[2] - 1][event[1] - 1] = 1;
        break;
      case 'D':
        // убираем сорняк
        grid[event[2] - 1][event[1] - 1] = 0;
        break;
      case 'Q':
        // считаем среднюю линию через бинарный поиск
        console.log(findLine(grid));
        break;
    }
  }
}

/**
 * @param {number[][]} grid
 * @returns {number}
 */
function findLine(grid) {
  let l = 0,
    r = grid[0].length,
    a = Number.MAX_SAFE_INTEGER;

  while (l < r) {
    const m = Math.floor((l + r) / 2);
    const weedsBeforeLine = countWeeds(grid, 0, m);
    const weedsAfterLine = countWeeds(grid, m, grid[0].length);

    if (weedsBeforeLine === weedsAfterLine) {
      a = Math.min(a, m);
      r = m - 1;
    } else if (weedsBeforeLine < weedsAfterLine) {
      l = m + 1;
    } else {
      r = m - 1;
    }
  }

  return a === Number.MAX_SAFE_INTEGER ? -1 : a;
}

/**
 * @param {number[][]} grid
 * @param {number} xStart
 * @param {number} xEnd
 * @returns {number}
 */
function countWeeds(grid, xStart, xEnd) {
  let weeds = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = xStart; j < xEnd; j++) {
      if (grid[i][j] === 1) weeds++;
    }
  }
  return weeds;
}

// output:
// 1
// -1
// 2
// 2
func(12, [
  ['A', 1, 1],
  ['A', 2, 1],
  ['Q', -1, -1],
  ['A', 2, 2],
  ['A', 3, 1],
  ['Q', -1, -1],
  ['A', 4, 1],
  ['A', 5, 1],
  ['Q', -1, -1],
  ['D', 1, 1],
  ['D', 5, 1],
  ['Q', -1, -1],
]);
