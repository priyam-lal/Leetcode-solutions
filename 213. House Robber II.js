/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    const n = nums.length;
    const dp1 = new Array(n).fill();
    const dp2 = new Array(n).fill();
    //If first house is robbed
    dp1[0] = nums[0];
    dp1[1] = dp1[0];

    for(let i=2; i<n; i++) {
        if(i == n-1) {
            dp1[i] = dp1[i-1];
            break;
        }
        let rob = nums[i] + dp1[i-2];
        let notRob = dp1[i-1];
        dp1[i] = Math.max(rob, notRob);
    }

    //If first house is not robbed
    dp2[0] = 0;
    dp2[1] = nums[1];

    for(let i=2; i<n; i++) {
        let rob = nums[i] + dp2[i-2];
        let notRob = dp2[i-1];
        dp2[i] = Math.max(rob, notRob);
    }

    return Math.max(dp1[n-1], dp2[n-1]);
    
};