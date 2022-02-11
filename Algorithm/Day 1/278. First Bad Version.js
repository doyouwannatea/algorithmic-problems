const test = require('../../utils/test');
/**
 * Definition for isBadVersion()
 *
 * @param {number} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 *
 * @param {number} version
 * @param {number} rightVersion
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
function solution(isBadVersion) {
  /**
   * @param {number} n Total versions
   * @return {number} The first bad version
   */
  return function (n) {
    let start = 1,
      end = n;

    while (start <= end) {
      const mid = parseInt((start + end) / 2);
      const isMidBad = isBadVersion(mid);
      const isPreMidBad = isBadVersion(mid - 1);
      const isPostMidBad = isBadVersion(mid + 1);

      if (isMidBad && !isPreMidBad) return mid;
      if (!isMidBad && isPostMidBad) return mid + 1;
      if (isMidBad && isPreMidBad) end = mid - 1;
      if (!isMidBad && !isPostMidBad) start = mid + 1;
    }

    return -1;
  };
}

test(4, solution((v) => v === 4)(5));
