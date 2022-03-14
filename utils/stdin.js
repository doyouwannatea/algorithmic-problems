const readline = require('readline');

/**
 * отправить file.txt в stdin: cat stdin.txt | node script.js
 *
 * отправить file.txt в stdin а затем результат в stdout: cat stdin.txt | node script.js > stdout.txt
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

module.exports = {
  readStdin,
};
