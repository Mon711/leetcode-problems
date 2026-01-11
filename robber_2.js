/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if (nums.length === 0) return 0;
    if (nums.length === 1) return nums[0];

    let a = nums[0];
    let b = Math.max(nums[0], nums[1]);
    
    // We don't need to declare 'c' here anymore

    for (let i = 2; i < nums.length; i++) {
        let c = Math.max(b, a + nums[i]); // Declare c inside simply for calculation
        a = b;
        b = c;
    }

    return b; // Return b, because it always holds the "latest best answer"
};

console.log(rob([1, 2, 3, 1]));
console.log(rob([2, 7, 9, 3, 1, 4]));
console.log(rob([4, 1, 1, 7]));