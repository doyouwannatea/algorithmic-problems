/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
function checkInclusion(s1, s2) {
  let l = 0,
    r = s1.length;

  const isInc = (str = '') => {
    let ltrs = s1;
    for (let i = 0; i < str.length; i++) {
      const idx = ltrs.indexOf(str[i]);
      if (idx === -1) return false;
      ltrs = ltrs.slice(0, idx) + ltrs.slice(idx + 1);
    }
    return ltrs.length === 0;
  };

  while (r <= s2.length) {
    if (isInc(s2.slice(l++, r++))) return true;
  }

  return false;
}

// // true
// console.log(checkInclusion('ab', 'eidbaooo'));

// // false
// console.log(checkInclusion('ab', 'eidboaoo'));

// // false
// console.log(checkInclusion('ab', 'eidboaoo'));

// true
console.log(checkInclusion('adc', 'dcda'));
