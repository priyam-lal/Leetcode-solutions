/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var countMajoritySubarrays = function (nums, target) {
    const n = nums.length;
    let ans = 0;

    /* Iterate through all possible subarrays and whenever the count of target is greater than the count of non-target,
     * increment the answer.
     */

    for (let i = 0; i < n; i++) {
        let cnt = 0;
        for (let j = i; j < n; j++) {
            cnt += (nums[j] === target) ? 1 : -1;
            if(cnt > 0) {
                ans++;
            }

        }
    }

    return ans;

};