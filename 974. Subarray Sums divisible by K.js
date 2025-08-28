/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysDivByK = function(nums, k) {
    const mp = new Map();
    
    let sum = 0;
    let ans = 0;
    
    for(let i=1; i<=nums.length+1; i++) {
        
        let curr = sum % k;
        curr = (curr < 0)? curr + k: curr;
        
        if(mp.has(curr)) {
            ans += mp.get(curr);
            mp.set(curr, mp.get(curr) + 1);
        } else {
            mp.set(curr, 1);
        }
        if(i > nums.length) {
            break;
        }
        sum += nums[i-1];
    }

    return ans;
};