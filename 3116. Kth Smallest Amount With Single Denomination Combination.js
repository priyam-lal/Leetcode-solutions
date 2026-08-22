/**
 * @param {number[]} coins
 * @param {number} k
 * @return {number}
 */
var findKthSmallest = function (coins, k) {
    // Binary Search on answer
    let left = 1;
    let right = Math.max(...coins) * k;
    let ans = -1;
    // Calculate mid and if they are >= k unique numbers to the left of mid, move left, else move right
    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2);
        if (countOfUniqueMultiples(coins, mid) >= k) {
            ans = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return ans;
};

var countOfUniqueMultiples = (coins, mid) => {
    const n = coins.length;
    let correctedCount = 0;
    for (let expr = 1; expr <= (1<<n) - 1; expr++) {
        let order = 0;
        let LCM = 0;
        for (let i = 0; i < n; i++) {
            // check if bit is set or not
            if (expr & (1 << i)) {
                order++;
                if (LCM === 0) {
                    LCM = coins[i];
                } else {
                    LCM = (coins[i] * LCM) / gcd(coins[i], LCM);
                }
            }

        }
        let exprVal = Math.floor(mid / LCM);
        if (order % 2 === 0) {
            correctedCount -= exprVal;
        } else {
            correctedCount += exprVal;
        }

    }

    return correctedCount;
};

var gcd = (a, b) => {
    if (b === 0) {
        return a;
    }
    return gcd(b, a % b);
};