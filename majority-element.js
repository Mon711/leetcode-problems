/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
	let hashTable = {};

	for (const num of nums) {
		if (!hashTable[num]) {
			hashTable[num] = 1;
		} else {
			hashTable[num]++;
		}
	}

	for (const number in hashTable) {
		if (hashTable[number] > nums.length / 2) {
			return Number(number);
		}
	}
};

var majorityElementMap = function (nums) {
	let counts = new Map();
	let majorityThereshold = nums.length / 2;

	for (let num of nums) {
		let currentCount = counts.get(num) || 0;
		let newCount = currentCount + 1;

		if (newCount > majorityThereshold) {
			return num;
		}

		counts.set(num, newCount);
	}
};

// Linear Time and O(1) space complexity
var majorityElementOptimised = function (nums){
    let candidate = null;
    let count = 0;

    for (const num of nums){
        if(count === 0){
            candidate = num;
        }

        if(num === candidate){
            count++
        }else{
            count--
        }
    }

    return candidate;
}

console.log(majorityElementOptimised([3,2,3]));
console.log(majorityElementOptimised([2,2,1,1,1,2,2]));
