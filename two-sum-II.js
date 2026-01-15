// Problem 167

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
	let index1;
	let index2;

	for (let i = 0; i < numbers.length; i++) {
		let remaining = target - numbers[i];
		let j = numbers.indexOf(remaining, i + 1);

		if (j !== -1) {
			index1 = i + 1;
			index2 = j + 1;
			break;
		}
	}

	return [index1, index2];
};

var twoSumOptimised = function (numbers, target) {
	let left = 0;
	let right = numbers.length - 1;

    while(left < right){
        const sum = numbers[left] + numbers[right];
        
        if(sum < target){
            left++
        }else if (sum > target){
            right--;
        }else{
            return [left + 1, right + 1]
        }
    }
};

console.log(twoSumOptimised([2,7,11,15], 9));
console.log(twoSumOptimised([2,3,4], 6));
console.log(twoSumOptimised([-1,0], -1));
console.log(twoSumOptimised([0, 0, 3, 4], 0));
