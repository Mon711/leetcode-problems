// Problem No. 387

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
	const myMap = new Map();

	for (const char of s) {
		myMap.set(char, (myMap.get(char) ?? 0) + 1);
	}

	let x;

	for (const [char, count] of myMap) {
		if (count === 1) {
			x = char;
			break;
		}
	}

	return s.indexOf(x) ?? -1;
};

var firstUniqChar2 = function (s) {
	const charCount = {};

	for (const char of s) {
		charCount[char] = (charCount[char] ?? 0) + 1;
	}

	for (let i = 0; i < s.length; i++) {
		if (charCount[s[i]] === 1) {
			return i;
		}
	}

	return -1;
};

console.log(firstUniqChar2("leetcode"));
console.log(firstUniqChar2("loveleetcode"));
console.log(firstUniqChar2("aabb"));
