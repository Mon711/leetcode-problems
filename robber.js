/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];

  // dp[i] stores the maximum money we can rob from the first i houses.
  let dp = [];
  dp[0] = nums[0]; // Best for 1 house
  dp[1] = Math.max(nums[0], nums[1]); // Best for 2 houses

  for (let i = 2; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 1], nums[i] + dp[i - 2])
  }

  return dp[nums.length - 1];
};

console.log(rob([1, 2, 3, 1]));
console.log(rob([2, 7, 9, 3, 1, 4]));
console.log(rob([4, 1, 1, 7]));

