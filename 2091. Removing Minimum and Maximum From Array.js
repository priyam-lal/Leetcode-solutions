/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumDeletions = function (nums) {
    const n = nums.length;
    let min = Number.MAX_SAFE_INTEGER;
    let max = Number.MIN_SAFE_INTEGER;
    let minIdx, maxIdx;
    for (let i = 0; i < n; i++) {
        if (nums[i] < min) {
            min = nums[i];
            minIdx = i;
        }
        if (nums[i] > max) {
            max = nums[i];
            maxIdx = i;
        }
    }

    let smallerIdx = Math.min(minIdx, maxIdx);
    let biggerIdx = Math.max(minIdx, maxIdx);

    let distFromStart = smallerIdx - 0;
    let distFromEnd = (n - 1) - biggerIdx;
    let distBetwIndex = biggerIdx - smallerIdx;

    if (distFromStart < distFromEnd) {
        if (distFromEnd >= distBetwIndex) {
            return biggerIdx + 1;
        } else {
            return distFromStart + distFromEnd + 2;
        }
    } else {
        if (distFromStart >= distBetwIndex) {
            return n - smallerIdx;
        } else {
            return distFromStart + distFromEnd + 2;
        }
    }

};