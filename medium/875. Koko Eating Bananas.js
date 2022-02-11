const { bold } = require('colors');
const test = require('../utils/test');

/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
function minEatingSpeed(piles, h) {
  let min = 1,
    max = Math.max(...piles),
    eatingSpeed = max;

  const computeTime = (speed) =>
    piles.reduce((total, pile) => total + Math.ceil(pile / speed), 0);

  while (min <= max) {
    const mid = parseInt((min + max) / 2);
    const time = computeTime(mid);

    if (time <= h) {
      if (mid < eatingSpeed) eatingSpeed = mid;
      max = mid - 1;
    } else min = mid + 1;
  }

  return eatingSpeed;
}

console.log(bold('875. Koko Eating Bananas'));
test(4, minEatingSpeed([3, 6, 7, 11], 8));
test(30, minEatingSpeed([30, 11, 23, 4, 20], 5));
test(23, minEatingSpeed([4, 11, 20, 23, 30], 6));
