/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    // Ways to climb one stair
    // [1]
    
    // Ways to climb 2 stairs
    // [1,1] [2]
    
    // Ways to climb 3 stairs
    // [1,1,1] [1,2] [2,1]

    // Ways to climb 4 stairs
    // [1,1,1,1] [2,1,1] [1,2,1] [1,1,2] [2,2]

    if(n <= 2) return n;

    let a = 1;
    let b = 2;
    
    for (let i = 3; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
    }

    return b;
};

console.log(climbStairs(10));
