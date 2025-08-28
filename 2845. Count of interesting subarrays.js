/**
 * @param {number[]} nums
 * @param {number} modulo
 * @param {number} k
 * @return {number}
 */
var countInterestingSubarrays = function (nums, mod, k) {
    const mp = new Map();
    mp.set(0, 1);

    let sum = 0;
    let count = 0;
    
    for(let i=0; i<nums.length; i++) {
        if(nums[i] % mod == k) {
            sum += 1;
        }
        
        let r1 = sum % mod;
        let r2 = (r1 + mod - k) % mod;
        
        if(mp.has(r2)) {
            count += mp.get(r2);
        }
        
        if(mp.has(r1)) {
            mp.set(r1, mp.get(r1) + 1);
        }
        else {
            mp.set(r1, 1);
        }
    }

    return count;
};