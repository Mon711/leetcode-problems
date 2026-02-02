// Problem 125

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
	const lowerString = s.toLowerCase();
	const stringArr = [...lowerString];

	for (let i = 0; i < stringArr.length; i++) {
		if (
			(s[i].charCodeAt(0) >= 32 && s[i].charCodeAt(0) <= 47) ||
			(s[i].charCodeAt(0) >= 58 && s[i].charCodeAt(0) <= 64) ||
			(s[i].charCodeAt(0) >= 91 && s[i].charCodeAt(0) <= 96) ||
			(s[i].charCodeAt(0) >= 123 && s[i].charCodeAt(0) <= 126)
		) {
			stringArr[i] = "";
		}
	}

	if (stringArr.join("") === stringArr.reverse().join("")) return true;

	return false;
};

var isPalindromeOptimised = function (s) {
	// Remove all non-alphanumeric characters and convert to lowercase
	// [^a-z0-9] means "anything that is NOT a lowercase letter or a number"
	const cleanString = s.toLowerCase().replace(/[^a-z0-9]/g, "");

	// Compare the string to its reverse
	return cleanString === cleanString.split("").reverse().join("");
};

var isPalindromeTwoPointer = function (s) {
	const cleanString = s.toLowerCase().replace(/[^a-z0-9]/g, "");

	let left = 0;
	let right = cleanString.length - 1;

	while (left < right) {
		if (cleanString[left] !== cleanString[right]) {
			return false;
		}

		left++;
		right--;
	}

	return true;
};

var isPalindromeMoreOptimised = function (s) {
	let left = 0;
	let right = s.length - 1;

	const isAlphanumeric = (char) => /[a-z0-9]/i.test(char);

	while (left < right) {
		while (left < right && !isAlphanumeric(s[left])) {
			left++;
		}

		while (left < right && !isAlphanumeric(s[right])) {
			right--;
		}

		if (s[left].toLowerCase() !== s[right].toLowerCase()) {
			return false;
		}

		left++;
		right--;
	}

	return true;
};

console.log(isPalindromeMoreOptimised("A man, a plan, a canal: Panama"));
console.log(isPalindromeMoreOptimised("hello whats up?"));
console.log(isPalindromeMoreOptimised("race a car"));
console.log(isPalindromeMoreOptimised(" "));
// console.log(isPalindromeTwoPointer("wow"));
