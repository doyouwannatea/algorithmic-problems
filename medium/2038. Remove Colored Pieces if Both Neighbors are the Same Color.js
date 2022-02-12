const test = require('../utils/test');

/**
 * @param {string} c
 * @return {boolean}
 */
function winnerOfGame(c) {
  let a = 0,
    b = 0;

  for (let i = 1; i < c.length - 1; i++) {
    if (c[i - 1] === c[i] && c[i] === c[i + 1]) {
      if (c[i] === 'A') a += 1;
      else b += 1;
    }
  }

  return a > b;
}

test(true, winnerOfGame('AAABABB'));
test(false, winnerOfGame('AA'));
test(false, winnerOfGame('ABBBBBBBAAA'));
test(true, winnerOfGame('AAAAABBB'));
test(false, winnerOfGame('B'));
test(true, winnerOfGame('AAAAABBBBBBAAAAA'));
