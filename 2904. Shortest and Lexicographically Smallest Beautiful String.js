/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var shortestBeautifulSubstring = function (s, k) {
    const n = s.length;
    let left = 0, right = 0;
    let cnt = 0;
    let currVal = 0n;
    let ansString = [-1, -1];
    let minlen = n;
    let minVal = Infinity;

    while (right < n && left < n) {
        while (right < n) {
            if (s[right] === '1') {
                cnt++;
            }
            currVal = (currVal << 1n) + BigInt(s[right]);
            if (cnt === k) {
                break;
            }
            right++;
        }

        while (cnt === k) {
            let currlen = right - left + 1;
            if (minlen > currlen) {
                minlen = currlen;
                minVal = currVal;
                ansString[0] = left;
                ansString[1] = right;
            } else if(minlen === currlen) {
                if(currVal < minVal) {
                    minVal = currVal;
                    ansString[0] = left;
                    ansString[1] = right;
                }
            }
            if (s[left] === '1') {
                cnt--;
                currVal = currVal - (1n << BigInt(right - left));
            }  
            left++;
        }
        right++;
    }

    return s.substring(ansString[0], ansString[1]+1);

};