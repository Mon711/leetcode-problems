/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let result = 0;

    for(const element of nums){
        // x XOR 0 = x
        // x XOR x = 0
        // 0 XOR 0 = 0
        // (a XOR b XOR a) is the same as (a XOR a XOR b)
        result = result ^ element;
    }

    return result;
};

console.log(singleNumber([1]));
