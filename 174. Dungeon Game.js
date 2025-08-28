/**
 * @param {number[][]} dungeon
 * @return {number}
 */
var calculateMinimumHP = function(dungeon) {
    const m = dungeon.length;
    const n = dungeon[0].length;
    const dp = new Array(m).fill().map(() => new Array(n).fill(0)); // contains minimum health required at i, j  to reach princess

    for(let i=m-1; i>=0; i--) {
        for(let j=n-1; j>=0; j--) {
            if(i == m-1 && j == n-1) {
                if(dungeon[m-1][n-1] < 0) {
                    dp[i][j] = Math.abs(dungeon[m-1][n-1]) + 1;
                } else {
                    dp[i][j] = 1;
                }
            }
            else {
                let right = (j < n-1)? dp[i][j+1] : Number.MAX_SAFE_INTEGER;
                let down = (i < m-1)? dp[i+1][j] : Number.MAX_SAFE_INTEGER;
                let result = Math.min(right, down) - dungeon[i][j];
                dp[i][j] = (result > 0)? result : 1;
            }
        }
    }

    return dp[0][0];    
};

// const solve = (dungeon, row, col, m, n, dp) => {
//     if(row == m-1 && col == n-1) {
//         if(dungeon[m-1][n-1] < 0) {
//             return Math.abs(dungeon[m-1][n-1]) + 1;
//         } else {
//             return 1;
//         }
//     }

//     if(row == m || col == n) {
//         return Number.MAX_SAFE_INTEGER;
//     }

//     if(dp[row][col] != -1) {
//         return dp[row][col];
//     }

//     const minReq = Math.min(solve(dungeon, row+1, col, m, n, dp), solve(dungeon, row, col+1, m, n, dp));
//     let result = minReq - dungeon[row][col];

//     return dp[row][col] = (result > 0)? result : 1;

// }
