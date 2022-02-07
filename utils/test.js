const { red, green, bold } = require('colors');

function test(expect, answer) {
  const equal = JSON.stringify(expect) === JSON.stringify(answer);
  console.log(
    `answer ${bold(answer)} is ${
      equal ? green('right') : red.underline('wrong')
    }`
  );
  if (!equal) {
    console.log(`${green.underline('right')} answer is ${bold(expect)}`);
  }
  return equal;
}

module.exports = test;
