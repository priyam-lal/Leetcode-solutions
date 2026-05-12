/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    const n = piles.length;
    // Binary search on answer
    let left = 0, right = Math.max(...piles);
    let ans = Number.MAX_SAFE_INTEGER;

    while(left <= right) {
        let mid = Math.floor((right-left)/2) + left;
        let time = 0;
        for(let i=0; i<n; i++) {
            time += Math.ceil(piles[i]/mid);
        }
        if(time <= h) {
            ans = Math.min(ans, mid);
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return ans;
};