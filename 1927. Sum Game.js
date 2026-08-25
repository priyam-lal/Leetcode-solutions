/**
 * @param {string} num
 * @return {boolean}
 */
var sumGame = function (num) {
    let n = num.length;
    let lqcount = 0, rqcount = 0;
    let lsum = 0, rsum = 0;
    for (let i = 0; i < n; i++) {
        if (i < (n / 2)) {
            if (num[i] === '?') {
                lqcount++;
            } else {
                lsum += Number(num[i]);
            }
        } else {
            if (num[i] === '?') {
                rqcount++;
            } else {
                rsum += Number(num[i]);
            }
        }

    }
    let qcount = Math.abs(lqcount - rqcount);
    if (qcount % 2 === 0) {
        if (qcount != 0) {
            if (lqcount > rqcount && lsum < rsum)  {
                if (lsum + 9 * (qcount / 2) == rsum) {
                    return false;
                }
            } else if(rqcount > lqcount && rsum < lsum) {
                if(rsum + 9 * (qcount / 2) == lsum){
                    return false;
                }
            }
        } else {
            if (lsum === rsum) {
                return false;
            }
        }
    }

    return true;
};