/**
 * @param {number} n
 * @return {number}
 */
var countCommas = function (n) {
    let temp = n;
    let digits = 0;
    while (temp > 0) {
        temp = Math.floor(temp / 10);
        digits++;
    }

    let ans = 0;
    let cnt = 3;
    let pow = 0;
    while (cnt < digits) {
        let curr = 999 * (10 ** (3 * pow));
        n -= curr;
        ans += curr * pow;
        cnt += 3;
        pow++;
    }
    ans += n * pow;

    return ans;

};