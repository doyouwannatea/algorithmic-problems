/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function permute(nums) {
  const res = [];
  dfs(nums, [], new Array(nums.length).fill(false), res);
  return res;
}

function dfs(nums, path, used, res) {
  if (path.length === nums.length) {
    res.push([...path]);
    return;
  }

  for (let i = 0; i < nums.length; i++) {
    if (used[i]) continue;

    path.push(nums[i]);
    used[i] = true;
    dfs(nums, path, used, res);
    path.pop();
    used[i] = false;
  }
}

// Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
console.log(permute([1, 2, 3]));

// Output: [[0,1],[1,0]]
// console.log(permute([0, 1]));

// Output: [[1]]
// console.log(permute([1]));
