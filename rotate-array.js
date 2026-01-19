// Problem 189

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
	k = k % nums.length;

	let myMap = new Map();
	let pos = nums.length - k;
	let i = 0;

	while (pos < nums.length) {
		myMap.set(i, nums[pos]);
		pos++;
		i++;
	}

	pos = 0;

	while (pos < nums.length - k) {
		myMap.set(i, nums[pos]);
		i++;
		pos++;
	}

	for (const [index, value] of myMap) {
		nums[index] = value;
	}
};

var rotateOptimised = function (nums, k) {
	k = k % nums.length;

	const reverseArr = (arr, start, end) => {
		while (start < end) {
			[arr[start], arr[end]] = [arr[end], arr[start]];
			start++;
			end--;
		}
	};

	reverseArr(nums, 0, nums.length - 1);

	reverseArr(nums, 0, k - 1);

	reverseArr(nums, k, nums.length - 1);
};

// console.log(rotateOptimised([1, 2, 3, 4, 5, 6, 7], 3));
// console.log(rotateOptimised([-1, -100, 3, 99], 2));
