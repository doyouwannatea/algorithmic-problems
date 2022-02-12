const test = require('../utils/test');
/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
function reversePrefix(word, ch) {
  const idx = word.indexOf(ch);
  if (idx === -1) return word;

  return (
    word
      .slice(0, idx + 1)
      .split('')
      .reverse()
      .join('') + word.slice(idx + 1)
  );
}
test('dcbaefd', reversePrefix('abcdefd', 'd'));
test('zxyxxe', reversePrefix('xyxzxe', 'z'));
test('abcd', reversePrefix('abcd', 'z'));
