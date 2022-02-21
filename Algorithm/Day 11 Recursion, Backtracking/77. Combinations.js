/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
function combine(n, k) {
  // SOLUTION №1
  //   const result = [];
  //   function trav(arr, depth) {
  //     if (arr.length === k) return result.push(arr);
  //     if (depth > n) return;
  //     trav(arr, depth + 1);
  //     trav(arr.concat(depth), depth + 1);
  //   }
  //   trav([], 1);
  //   return result;
  // SOLUTION №1
  //
  // SOLUTION №2
  //   if (n == 1 && k == 1) return [[1]];
  //   const dfs = (currentSolution, startNumber, out) => {
  //     if (currentSolution.length == k) return out.push([...currentSolution]);
  //     for (let i = startNumber; i <= n; i++) {
  //       currentSolution.push(i);
  //       dfs(currentSolution, i + 1, out);
  //       currentSolution.pop();
  //     }
  //   };
  //   const out = [];
  //   dfs([], 1, out);
  //   return out;
  // SOLUTION №2
  //
  // MY SOLUTION
  //   /**
  //    * @param {number[]} currSolution
  //    * @param {number} depth
  //    * @param {number[][]} out
  //    */
  //   function trav(currSolution, depth, out) {
  //     if (currSolution.length === k) return out.push(currSolution);
  //     if (depth > n) return;
  //     trav(currSolution, depth + 1, out);
  //     trav(currSolution.concat(depth), depth + 1, out);
  //   }
  //   const combs = [];
  //   trav([], 1, combs);
  //   return combs;
  // MY SOLUTION
  //
  // SOLUTION №3
  /**
   * @param {number[]} currSolution
   * @param {number} depth
   * @param {number[][]} out
   */
  function trav(currSolution, depth, out) {
    // Base case:
    if (currSolution.length === k) {
      out.push([...currSolution]);
      return;
    }

    // General cases:
    for (let i = depth; i <= n; i++) {
      currSolution.push(i);
      trav(currSolution, i + 1, out);
      currSolution.pop();
    }
  }

  const combs = [];
  trav([], 1, combs);
  return combs;
  // SOLUTION №3
}

// [
//   [2,4],
//   [3,4],
//   [2,3],
//   [1,2],
//   [1,3],
//   [1,4],
// ]
console.log(combine(4, 2));

// [
//   [1]
// ]
console.log(combine(1, 1));
