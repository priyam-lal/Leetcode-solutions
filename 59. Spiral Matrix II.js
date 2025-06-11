/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    const matrix = new Array(n).fill().map(()=> new Array(n).fill(0));
    let top = 0, left = 0;
    let bottom = n-1, right = n-1;
    let count = 1;
    while(count <= n*n) {
        //fill top row
        for(let i=left; i<=right; i++) {
            matrix[top][i] = count;
            count++;
        }
        top++;

        //fill rightmost column
        for(let i=top; i<=bottom; i++) {
            matrix[i][right] = count;
            count++;
        }
        right--;

        //fill bottom row
        for(let i=right; i>=left; i--) {
            matrix[bottom][i] = count;
            count++;
        }
        bottom--;
        
        //fill leftmost column
        for(let i=bottom; i>=top; i--) {
            matrix[i][left] = count;
            count++;
        }
        left++;
    }

    return matrix;
};