// Problem 41

/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
	const posNums = nums.filter((num) => {
		return num > 0;
	});

	if (posNums.length === 0) {
		return 1;
	}

	const max = Math.max(...posNums);

	posNums.sort((a, b) => a - b);

	const mySet = new Set(posNums);
	const posNumsUnique = [...mySet];

	let index = 0;
	for (let i = 1; i <= max + 1; i++) {
		if (posNumsUnique[index] !== i) {
			return i;
		}
		index++;
	}
};

var firstMissingPositiveOptimised = function (nums) {
	const n = nums.length;

	for (let i = 0; i < n; i++) {
		while (nums[i] > 0 && nums[i] <= n && nums[i] !== nums[nums[i] - 1]) {
			const targetIndex = nums[i] - 1;
			[nums[i], nums[targetIndex]] = [nums[targetIndex], nums[i]];
		}
	}

	for (let i = 0; i < n; i++) {
		if (nums[i] !== i + 1) {
			return i + 1;
		}
	}

    // If all numbers 1 to n are present, the answer is n + 1
    return n + 1;
};

console.log(firstMissingPositiveOptimised([1, 2, 0]));
console.log(firstMissingPositiveOptimised([3, 4, -1, 1]));
console.log(firstMissingPositiveOptimised([7, 8, 9, 11, 12]));
console.log(firstMissingPositiveOptimised([7, -6, 2, 17, 2, 4, 1, 3]));
