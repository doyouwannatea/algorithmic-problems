/**
 * @param {number[][]} isConnected
 * @return {number}
 */
function findCircleNum(isConnected) {
  const n = isConnected.length;
  const checked = Array(n).fill(false);
  let count = 0;

  for (let i = 0; i < n; i++) {
    if (checked[i]) continue;
    const queue = [i];
    while (queue.length > 0) {
      const city = queue.shift();
      isConnected[city].forEach((c, idx) => {
        if (c === 0) return;
        if (checked[idx]) return;
        queue.push(idx);
        checked[idx] = true;
      });
    }
    count++;
  }

  return count;
}

// Output: 2
console.log(
  findCircleNum([
    [1, 1, 0],
    [1, 1, 0],
    [0, 0, 1],
  ])
);

// Output: 3
console.log(
  findCircleNum([
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1],
  ])
);
