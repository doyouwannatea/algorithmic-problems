const test = require('../utils/test');

/**
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */
function findOcurrences(text, first, second) {
  const words = text.split(' ');
  const third = [];
  let isThird = false;
  words.reduce((prev, curr) => {
    if (isThird) {
      third.push(curr);
    }
    isThird = prev === first && curr === second;

    return curr;
  });

  return third;
}

test(
  ['girl', 'student'],
  findOcurrences('alice is a good girl she is a good student', 'a', 'good')
);
