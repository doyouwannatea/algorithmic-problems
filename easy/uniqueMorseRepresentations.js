const test = require('../utils/test');

/**
 * @param {string[]} words
 * @return {number}
 */
function uniqueMorseRepresentations(words) {
  const alphabet = {
    a: '.-',
    b: '-...',
    c: '-.-.',
    d: '-..',
    e: '.',
    f: '..-.',
    g: '--.',
    h: '....',
    i: '..',
    j: '.---',
    k: '-.-',
    l: '.-..',
    m: '--',
    n: '-.',
    o: '---',
    p: '.--.',
    q: '--.-',
    r: '.-.',
    s: '...',
    t: '-',
    u: '..-',
    v: '...-',
    w: '.--',
    x: '-..-',
    y: '-.--',
    z: '--..',
  };

  const representations = new Set();

  words.forEach((word) => {
    const morse = word.split('').reduce((prev, curr) => {
      prev += alphabet[curr];
      return prev;
    }, '');
    representations.add(morse);
  });

  return representations.size;
}

test(2, uniqueMorseRepresentations(['gin', 'zen', 'gig', 'msg']));
