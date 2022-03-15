// @ts-check
// const { readStdin } = require('../../utils/stdin');

// readStdin((lines) => {
//   const [n, m, k] = lines[0].split(' ').map(Number);
//   const stages = lines[1].split(' ').map(Number);
//   func(n, m, k, stages);
// });

/**
 * @param {number} n количество этапов
 * @param {number} m ограничение на объединение этапов подряд
 * @param {number} k объем аккумулятора
 * @param {number[]} stages этапы
 */
function func(n, m, k, stages) {
  // запомнить последовательности, при проходе через которые у нас не полностью садится аккумулятор
  //    k = 3
  //    2 1 0 2 1 <- аккумулятор после прохождения этапа
  //    1 1 1 3 3 <- этап
  //       🔼 тут запоминаем с 0 по i
  //    2 1 0 0 0 <- аккумулятор после прохождения этапа
  //    1 1 1 3 3 <- этап
  //           🔼 тут длина последовательности == 0

  const unitedStages = [];
  let l = 0,
    r = 0,
    accum = k;

  while (r < stages.length) {
    accum -= stages[r];

    if (r - l === m - 1 || accum <= 0) {
      if ((r - l === m - 1 || accum === 0) && r - l > 0) {
        unitedStages.push([l + 1, r - l + 1]);
      } else if (accum < 0 && r - l - 1 > 0) {
        unitedStages.push([l + 1, r - l]);
      }

      l = r + 1;
      accum = k;
    }

    r++;
  }

  const accumProfit = unitedStages.reduce(
    (accum, stage) => (accum += stage[1] - 1),
    0
  );
  console.log(accumProfit);
  console.log(unitedStages.length);
  for (const stage of unitedStages) {
    console.log(`${stage[0]} ${stage[1]}`);
  }
}

// 2 на сколько сократилось кол-во аккумуляторов
// 1 кол-во объединённых этапов
// 1 3 начальный этап / кол-во этапов в объединении
func(5, 3, 3, [1, 1, 1, 3, 3]);
console.log('');

// 4
// 2
// 1 3
// 4 3
func(6, 3, 3, [1, 1, 1, 1, 1, 1]);
console.log('');

// 0
// 0
func(5, 5, 2, [2, 4, 6, 8, 10]);
