const { red, green, bold } = require('colors');

function test(expect, answer) {
  const equal = JSON.stringify(expect) === JSON.stringify(answer);
  console.log(
    `expect: ${bold(expect)}  answer: ${equal ? green(answer) : red(answer)}`
  );
  return equal;
}

module.exports = test;
