/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var hasValidPath = function (grid) {
    const m = grid.length;
    const n = grid[0].length;
    if(m === 1 && n === 1) {
        return true;
    }
    const nbrArray = [
        [
            [0, 0],
            [0, 0],
        ],
        [
            [0, -1],
            [0, 1],
        ],
        [
            [-1, 0],
            [1, 0],
        ],
        [
            [0, -1],
            [1, 0],
        ],
        [
            [0, 1],
            [1, 0],
        ],
        [
            [0, -1],
            [-1, 0],
        ],
        [
            [0, 1],
            [-1, 0],
        ],
    ];
    const visited = new Array(m + 1).fill().map(() => new Array(n + 1).fill(0));
    return solve(grid, nbrArray, 0, 0, visited, [-1, -1], m, n);
};

const solve = (grid, nbrArray, row, col, visited, parent, m, n) => {
    visited[row][col] = 1;
    if(row === m-1 && col === n-1) {
        return true;
    }
    
    let nbrs = nbrArray[grid[row][col]];

    for(let nbr of nbrs) {
        let nRow = row + nbr[0];
        let nCol = col + nbr[1];
        parent = [row, col];
        if(nRow >= 0 && nRow < m && nCol >=0 && nCol < n && visited[nRow][nCol] == 0) {
            let checknbrs = nbrArray[grid[nRow][nCol]];
            for(let chnbr of checknbrs) {
                let xRow = chnbr[0] + nRow;
                let yCol = chnbr[1] + nCol;
                if(xRow === parent[0] && yCol === parent[1]) {
                    let res = solve(grid, nbrArray, nRow, nCol, visited, parent, m, n);
                    if(res) {
                        return true;
                    }

                }
            }
        }
        
    }
    
    visited[row][col] = 0;
    return false;
};