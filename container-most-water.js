// Problem 11

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
	let left = 0;
	let right = height.length - 1;
	let maxFound = 0;

	while (left < right) {
		const width = right - left;

		const currentHeight = Math.min(height[left], height[right]);

		maxFound = Math.max(maxFound, currentHeight * width);

		if (height[left] < height[right]) {
			left++;
		} else {
			right--;
		}
	}

	return maxFound;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
console.log(maxArea([1, 1]));
