const readline = require('readline');

/**
 * @param {(lines: string[]) => void} cb
 */
function readStdin(cb) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false,
  });
  const lines = [];
  rl.on('line', (line) => lines.push(line));
  rl.on('close', () => cb(lines));
}

readStdin((lines) => {
  // пример использования
  const grid = lines.map((row) => row.split(' ').map(Number));
  findIslandArea(grid);
});

/**
 * @param {number[][]} grid
 * @returns {number}
 */
function findIslandArea(grid) {
  console.log(grid);
  return 0;
}
