const test = require('../utils/test');

/**
 * @param {string} target
 * @return {string}
 */
function alphabetBoardPath(target) {
  const board = ['abcde', 'fghij', 'klmno', 'pqrst', 'uvwxy', 'z'];
  let currCol = 0;
  let currRow = 0;
  const result = [];

  // 1. выровняться по колонке (если нельзя, то сделать шаг по строке)
  // 2. выровняться по строке (если нельзя, то сделать шаг по колонке)
  // 3. дойти до нужной буквы и пикнуть её
  target.split('').forEach((letter) => {
    // находим позицию буквы
    const rowIdx = board.findIndex((row) => row.includes(letter));
    const colIdx = board[rowIdx].indexOf(letter);

    while (currCol !== colIdx || currRow !== rowIdx) {
      // передвигаемся по строкам
      while (currRow !== rowIdx) {
        const shift = currRow < rowIdx ? 1 : -1;
        if (!board[currRow + shift][currCol]) break;
        currRow += shift;
        result.push(shift === -1 ? 'U' : 'D');
      }

      // передвигаемся по колонкам
      while (currCol !== colIdx) {
        const shift = currCol < colIdx ? 1 : -1;
        if (!board[currRow][currCol + shift]) break;
        currCol += shift;
        result.push(shift === -1 ? 'L' : 'R');
      }
    }

    result.push('!');
  });
  return result.join('');
}

test('DDR!UURRR!!DDD!', alphabetBoardPath('leet'));
// test('RR!DDRR!UUL!R!', alphabetBoardPath('code'));
