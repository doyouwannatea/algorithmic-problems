const test = require('../utils/test');

const graph = {
  1: [2, 3],
  2: [4, 5],
  3: [6, 7],
  4: [8, 9],
  5: [10, 11],
  6: [12, 13],
  7: [14, 15],
};

function bfs(graph, root) {
  const nodeList = [root];
  for (const node of nodeList) {
    if (graph[node]) {
      nodeList.push(...graph[node]);
    }
  }
  return nodeList;
}

test([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], bfs(graph, 1));
