/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function backspaceCompare(s, t) {
  let i = 0,
    j = 0;
  const ltrsA = [];
  const ltrsB = [];
  while (i < s.length || j < t.length) {
    if (i < s.length) {
      while (s[i] === '#') {
        ltrsA.pop();
        i++;
      }
      ltrsA.push(s[i]);
      i++;
    }

    if (j < t.length) {
      while (t[j] === '#') {
        ltrsB.pop();
        j++;
      }
      ltrsB.push(t[j]);
      j++;
    }
  }

  return ltrsA.join('') === ltrsB.join('');
}

// Output: true
console.log(backspaceCompare('ab#c', 'ad#c'));

// Output: true
console.log(backspaceCompare('ab##', 'c#d#'));

// Output: false
console.log(backspaceCompare('a#c', 'b'));

// Output: false
console.log(backspaceCompare('xywrrmp', 'xywrrm#p'));
