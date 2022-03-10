/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
function allPathsSourceTarget(graph) {
  const stack = [[0]],
    res = [];

  while (stack.length > 0) {
    const path = stack.pop(); // [0, 1, 3, ...]
    const currNode = path[path.length - 1]; // 3
    graph[currNode].forEach((i) => {
      if (i === graph.length - 1) {
        res.push([...path, i]);
        return;
      }
      stack.push([...path, i]);
    });
  }

  return res;
}

// return in ANY way
// Output: [[0,1,3],[0,2,3]]
console.log(allPathsSourceTarget([[1, 2], [3], [3], []]));

// return in ANY way
// Output: [[0,4],[0,3,4],[0,1,3,4],[0,1,2,3,4],[0,1,4]]
console.log(allPathsSourceTarget([[4, 3, 1], [3, 2, 4], [3], [4], []]));
