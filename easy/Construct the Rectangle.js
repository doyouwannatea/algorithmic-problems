const test = require('../utils/test');

/**
 * Return an array [L, W] where L and W are the length and width of the web page you designed in sequence.
 * 1. The area of the rectangular web page you designed must equal to the given target area.
 * 2. The width W should not be larger than the length L, which means L >= W.
 * 3. The difference between length L and width W should be as small as possible.
 * @param {number} area
 * @return {number[]} [L, W]
 */
const constructRectangle = function (area) {
  let w = parseInt(Math.sqrt(area));

  while (!Number.isInteger(area / w)) w--;

  return [area / w, w];
};

const res = constructRectangle(122122);
console.log(res, test([427, 286], res));
