const maximumDifference = (nums) => {
  let res = -1;
  let i = 0;
  let j = 1;

  while (j <= nums.length - 1) {
    if (nums[i] < nums[j]) {
      const diff = nums[j] - nums[i];
      if (diff > res) {
        res = diff;
      }
    } else {
      i = j;
    }

    j += 1;
  }

  return res;
};

maximumDifference([7, 1, 5, 2]);
