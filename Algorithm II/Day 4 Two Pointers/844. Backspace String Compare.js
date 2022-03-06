/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function backspaceCompare(s, t) {
  let i = s.length - 1,
    j = t.length - 1;
  let skipS = '',
    skipT = '';

  while (i >= 0 || j >= 0) {
    while (i >= 0) {
        if (s[i] === '#') { i--; skipS++ }
        else if (skipS > 0) { i--; skipS-- }
        else break
    }
    while (j >= 0) {
        if (t[j] === '#') { j--; skipT++ }
        else if (skipT > 0) { j--; skipT-- }
        else break
    }

    if (i >= 0 && j >= 0 && s[i] !== t[j]) {
        return false
    }

    if (i < 0 ^ j < 0) {
        return false
    }
    
    i--; j--;
  }

  return true
}

// Output: true
console.log(backspaceCompare('ab#c', 'ad#c'));

// Output: true
console.log(backspaceCompare('ab##', 'c#d#'));

// Output: false
console.log(backspaceCompare('a#c', 'b'));

// Output: false
console.log(backspaceCompare('xywrrmp', 'xywrrm#p'));

// Output: true
console.log(backspaceCompare('xywrrmp', 'xywrrmu#p'));
