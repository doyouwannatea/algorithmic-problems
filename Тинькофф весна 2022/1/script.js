// @ts-check
// const { readStdin } = require('../../utils/stdin');

// readStdin((lines) => {
//   const nums = lines[0].split(' ').map(Number);
//   func(nums[0], nums[1], nums[2]);
// });

/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 */
function func(a, b, c) {
  let coins = 0;

  while (a >= b) {
    a += (b % c) - b;
    coins += Math.floor(b / c);
  }

  console.log(coins);
}

// 4
func(10, 5, 2);

// 3
func(13, 5, 3);

// 4
func(14, 5, 3);

// 2
func(13, 9, 4);
