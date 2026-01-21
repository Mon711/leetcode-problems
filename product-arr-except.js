// Problem 238

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
	const n = nums.length;
	const prefixProducts = new Array(n);
	const suffixProducts = new Array(n);
	const result = new Array(n);

	prefixProducts[0] = 1;
	for (let i = 1; i < n; i++) {
		prefixProducts[i] = prefixProducts[i - 1] * nums[i - 1];
	}

	suffixProducts[n - 1] = 1;
	for (let i = n - 2; i >= 0; i--) {
		suffixProducts[i] = suffixProducts[i + 1] * nums[i + 1];
	}

	for (let i = 0; i < n; i++) {
		result[i] = prefixProducts[i] * suffixProducts[i];
	}

	return result;
};

var productExceptSelfOptimised = function (nums) {
	const n = nums.length;
	const result = new Array(n);

	result[0] = 1;
	for (let i = 1; i < n; i++) {
		result[i] = result[i - 1] * nums[i - 1];
	}

	let suffix = 1;
	for (let i = n - 1; i >= 0; i--) {
		result[i] = result[i] * suffix;

		suffix = suffix * nums[i];
	}

	return result;
};

console.log(productExceptSelfOptimised([1, 2, 3, 4]));
console.log(productExceptSelfOptimised([-1, 1, 0, -3, 3]));
