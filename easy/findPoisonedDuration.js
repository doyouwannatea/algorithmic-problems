const test = require('../utils/test');

/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
function findPoisonedDuration(timeSeries, duration) {
  // [1, 2, 3] with duration 2 => 1, 2, 3, 4 in total = 4 seconds
  // [1, 3] with duration 3 => 1, 2, 3, 4, 5 in total = 5 seconds
  let totalTime = 0;
  for (let i = 0; i < timeSeries.length; i++) {
    const timeLeft = timeSeries[i + 1] - timeSeries[i];
    if (timeLeft < duration) {
      totalTime += timeLeft;
    } else {
      totalTime += duration;
    }
  }
  return totalTime;
}

test(7, findPoisonedDuration([1, 2, 5], 3));
