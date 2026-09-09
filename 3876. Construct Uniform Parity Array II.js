/**
 * @param {number[]} nums1
 * @return {boolean}
 */
var uniformArray = function (nums1) {
    let cntEven = 0;
    let min = Number.MAX_SAFE_INTEGER;

    for (let num of nums1) {
        if (num % 2 === 0) {
            cntEven++;
        }
        min = Math.min(min, num);
    }

    if (cntEven === nums1.length) {
        return true;
    }

    return (min % 2 === 0) ? false : true;
};