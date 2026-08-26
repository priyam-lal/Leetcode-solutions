/**
 * @param {number} n
 * @param {number[][]} reservedSeats
 * @return {number}
 */
var maxNumberOfFamilies = function (n, reservedSeats) {
    const mp = new Map();

    for (let [row, seat] of reservedSeats) {
        if (!mp.has(row)) {
            mp.set(row, new Set([1, 2, 3]));
        }

        if (seat === 2 || seat === 3) {
            mp.get(row).delete(1);
        } else if (seat === 4 || seat === 5) {
            mp.get(row).delete(1);
            mp.get(row).delete(2);
        } else if (seat === 6 || seat === 7) {
            mp.get(row).delete(2);
            mp.get(row).delete(3);
        } else if (seat === 8 || seat === 9) {
            mp.get(row).delete(3);
        }
    }

    let ans = 0;
    for (let [key, value] of mp) {
        if (value.size === 1) {
            ans += 1;
        } else if (value.size > 1) {
            if (value.has(1) && value.has(3)) {
                ans += 2;
            } else {
                ans += 1;
            }
        }
    }

    return ans += 2 * (n - mp.size);
};