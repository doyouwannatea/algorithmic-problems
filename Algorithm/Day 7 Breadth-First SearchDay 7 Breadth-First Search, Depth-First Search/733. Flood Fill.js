/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
function floodFill(image, sr, sc, newColor) {
  const oldColor = image[sr][sc];
  if (oldColor === newColor) return image;
  image[sr][sc] = newColor;
  const queue = [[sr, sc]];

  while (queue.length > 0) {
    const pixel = queue.pop();
    const neighbors = [
      [pixel[0] - 1, pixel[1]],
      [pixel[0] + 1, pixel[1]],
      [pixel[0], pixel[1] - 1],
      [pixel[0], pixel[1] + 1],
    ];

    for (const clr of neighbors) {
      if (
        image[clr[0]] !== undefined &&
        image[clr[0]][clr[1]] !== undefined &&
        image[clr[0]][clr[1]] === oldColor
      ) {
        image[clr[0]][clr[1]] = newColor;
        queue.push([clr[0], clr[1]]);
      }
    }
  }

  return image;
}

// [[2, 2, 2], [2, 2, 2]]
console.log(
  floodFill(
    [
      [0, 0, 0],
      [0, 0, 0],
    ],
    0,
    0,
    2
  )
);

// [[0,0,0],[0,2,0]]
console.log(
  floodFill(
    [
      [0, 0, 0],
      [0, 1, 0],
    ],
    1,
    1,
    2
  )
);

// [[0,0,0],[0,2,0]]
console.log(
  floodFill(
    [
      [0, 0, 0],
      [0, 1, 1],
    ],
    1,
    1,
    1
  )
);
