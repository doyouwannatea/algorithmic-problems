const test = require('../utils/test');

/**
 * @param {number[][]} points
 * @return {number}
 */
function minTimeToVisitAllPoints(points) {
  const currPos = points.shift();
  let steps = 0;

  while (points.length) {
    const point = points[0];

    if (point[0] === currPos[0] && point[1] === currPos[1]) {
      points.shift();
      continue;
    }

    if (point[0] !== currPos[0] && point[1] !== currPos[1]) {
      currPos[0] += currPos[0] < point[0] ? 1 : -1;
      currPos[1] += currPos[1] < point[1] ? 1 : -1;
    } else {
      if (point[0] === currPos[0]) {
        currPos[1] += currPos[1] < point[1] ? 1 : -1;
      } else {
        currPos[0] += currPos[0] < point[0] ? 1 : -1;
      }
    }

    steps += 1;
  }

  return steps;
}

test(
  7,
  minTimeToVisitAllPoints([
    [1, 1],
    [3, 4],
    [-1, 0],
  ])
);
