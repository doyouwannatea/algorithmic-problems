// @ts-check
// const { readStdin } = require('../../utils/stdin');

// readStdin((lines) => {
//   const [s, t1, t2] = lines.map((line) => line.trim());
//   func(s, t1, t2);
// });

/**
 * @param {string} s
 * @param {string} t1
 * @param {string} t2
 */
function func(s, t1, t2) {
  let minJoint = Number.MAX_SAFE_INTEGER;
  const allRed = [];

  /**
   * @param {number[]} variant
   * @param {number} currRed
   * @param {number} currS
   */
  function findRed(variant, currRed, currS) {
    if (variant.length === t1.length) {
      allRed.push([...variant]);
      return;
    }
    if (currS >= s.length) return;

    if (t1[currRed] === s[currS]) {
      variant.push(currS);
      findRed(variant, currRed + 1, currS + 1);
      variant.pop();
      findRed(variant, currRed, currS + 1);
    } else {
      findRed(variant, currRed, currS + 1);
    }
  }

  findRed([], 0, 0);

  allRed.forEach((red) => {
    let jointCount = 0;
    let currBlue = 0;
    let isRed = red[0] === 0;

    for (let i = 0; i < s.length; i++) {
      if (red.includes(i)) {
        if (!isRed) jointCount++;
        isRed = true;
        continue;
      }

      if (s[i] === t2[currBlue]) {
        if (isRed) jointCount++;
        currBlue++;
        isRed = false;
      } else return;
    }

    minJoint = Math.min(minJoint, jointCount);
  });

  console.log(minJoint);
}

// 3
func('stopgame', 'sam', 'topge');

// 4
func('ababbaba', 'abbb', 'abaa');

// 3
func('ljjljlljjl', 'jljjl', 'ljljl');
