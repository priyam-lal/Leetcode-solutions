/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    const n = nums.length;
    const dp = new Array(n).fill();
    dp[0] = nums[0];
    dp[1] = Math.max(dp[0], nums[1]);
    
    for (let i = 2; i < n; i++) {
        let rob = nums[i] + dp[i - 2];
        let notRob = dp[i - 1];
        dp[i] = Math.max(rob, notRob);
    }

    return dp[n - 1];
    // return solve(0, nums, dp);
};

// const solve = (i, nums, dp) => {
//     if(i >= nums.length) {
//         return 0;
//     }
//     if(dp[i] != -1) {
//         return dp[i];
//     }

//     let rob = nums[i] + solve(i+2, nums, dp);
//     let notRob = solve(i+1, nums, dp);

//     return dp[i] = Math.max(rob, notRob);
// }