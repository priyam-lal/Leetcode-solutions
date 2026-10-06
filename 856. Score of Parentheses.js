/**
 * @param {string} s
 * @return {number}
 */
var scoreOfParentheses = function (s) {
    const n = s.length;
    let depth = 0;
    let score = 0;

    for (let i = 0; i < n; i++) {
        if(s[i] === '(') {
            depth++;
        } else {
            if(s[i-1] === '(') {
                depth--;
                score += 1<<depth;
            } else {
                depth--;
            }
        }
    }

    return score;

};