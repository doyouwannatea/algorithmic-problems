/**
 * @param {number[][]} int1
 * @param {number[][]} int2
 * @return {number[][]}
 */
function intervalIntersection(int1, int2) {
  const res = [];
  let i = 0,
    j = 0;

  while (i < int1.length && j < int2.length) {
    const [s1, e1] = int1[i];
    const [s2, e2] = int2[j];

    if (e2 >= s1 && e1 >= s2) {
      res.push([Math.max(s1, s2), Math.min(e1, e2)]);
    }

    if (e1 < e2) i++;
    else j++;
  }

  return res;
}

// Output: [[1,2],[5,5],[8,10],[15,23],[24,24],[25,25]]
console.log(
  intervalIntersection(
    [
      [0, 2],
      [5, 10],
      [13, 23],
      [24, 25],
    ],
    [
      [1, 5],
      [8, 12],
      [15, 24],
      [25, 26],
    ]
  )
);
