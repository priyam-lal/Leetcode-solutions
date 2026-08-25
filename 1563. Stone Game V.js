/**
 * @param {number[]} stoneValue
 * @return {number}
 */
var stoneGameV = function (stoneValue) {
    const n = stoneValue.length;
    const prefixSum = new Array(n + 1).fill(0);

    for (let i = 1; i < n + 1; i++) {
        prefixSum[i] = prefixSum[i - 1] + stoneValue[i - 1];
    }

    //state definition -> dp[i][j] gives the max score possible for array size range (i, j)
    const dp = new Array(n+1).fill().map(() => new Array(n+1).fill(0));
    for(let i=n-1; i>=0; i--) {
        for(let j=i+1; j<n; j++) {

            let score = 0;

            for(let mid=i; mid<j; mid++) {
                let leftSum = prefixSum[mid+1] - prefixSum[i];
                let rightSum = prefixSum[j+1] - prefixSum[mid+1];
                if(leftSum > rightSum) {
                    score = Math.max(score, rightSum + dp[mid+1][j])

                } else if(leftSum < rightSum) {
                    score = Math.max(score, leftSum + dp[i][mid])

                } else {
                    score = Math.max(score, rightSum + dp[mid+1][j], leftSum + dp[i][mid]);
                }
                
            }

            dp[i][j] = score;
        }
    }

    return dp[0][n-1];

};