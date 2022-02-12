/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
function numMatchingSubseq(s, words) {
  const passed = [];
  const notPassed = [];
  words.forEach((word) => {
    if (passed.includes(word)) return passed.push(word);
    if (notPassed.includes(word)) return;
    let currentLetterIdx = 0;
    for (const letter of s) {
      if (letter === word[currentLetterIdx]) currentLetterIdx++;
      if (currentLetterIdx === word.length) return passed.push(word);
    }
    notPassed.push(word);
  });
  return passed.length;
}

console.log(numMatchingSubseq('abcde', ['a', 'bb', 'acd', 'ace']));
console.log(
  numMatchingSubseq('dsahjpjauf', ['ahjpjau', 'ja', 'ahbwzgqnuk', 'tnmlanowax'])
);
console.log(
  numMatchingSubseq('qlhxagxdqh', [
    'qlhxagxdq',
    'qlhxagxdq',
    'lhyiftwtut',
    'yfzwraahab',
  ])
);
