const test = require('../utils/test');

/**
 * @param {string[]} paths
 * @return {string[][]}
 */
function findDuplicate(paths) {}

test(
  [
    ['root/a/2.txt', 'root/c/d/4.txt', 'root/4.txt'],
    ['root/a/1.txt', 'root/c/3.txt'],
  ],
  findDuplicate([
    'root/a 1.txt(abcd) 2.txt(efgh)',
    'root/c 3.txt(abcd)',
    'root/c/d 4.txt(efgh)',
    'root 4.txt(efgh)',
  ])
);
