const test = require('../utils/test');

/**
 * @param {number} ax1
 * @param {number} ay1
 * @param {number} ax2
 * @param {number} ay2
 * @param {number} bx1
 * @param {number} by1
 * @param {number} bx2
 * @param {number} by2
 * @return {number}
 */
function computeArea(ax1, ay1, ax2, ay2, bx1, by1, bx2, by2) {
  const computeRect = (x1, y1, x2, y2) => (x2 - x1) * (y2 - y1);
  const computeIntersection = () => {
    const left = Math.max(ax1, bx1);
    const top = Math.min(ay2, by2);
    const right = Math.min(ax2, bx2);
    const bottom = Math.max(ay1, by1);

    const width = right - left;
    const height = top - bottom;

    if (width < 0 || height < 0) return 0;

    return width * height;
  };

  const rect1 = computeRect(ax1, ay1, ax2, ay2);
  const rect2 = computeRect(bx1, by1, bx2, by2);
  return rect1 + rect2 - computeIntersection();
}

test(45, computeArea(-3, 0, 3, 4, 0, -1, 9, 2));
