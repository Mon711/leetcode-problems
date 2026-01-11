/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let W = [];

    W[0] = 0;
    W[1] = 1;
    W[2] = 2;

    for (let i = 3; i <= n; i++) {
        W[i] = W[i-1] + W[i-2]
    }

    return W[n]
};