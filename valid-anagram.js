/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

var isAnagram = function (s, t) {
	if (s.length !== t.length) return false;

	const myMap = new Map();

	for (const char of s) {
		myMap.set(char, (myMap.get(char) || 0) + 1);
	}

	for (const char of t) {
		if (!myMap.get(char)) {
			return false;
		}

		myMap.set(char, myMap.get(char) - 1);
	}

	return true;
};

console.log(isAnagram("aacc", "ccac"));
console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("rat", "car"));
console.log(isAnagram("ab", "a"));
console.log(isAnagram("a@b", "ba@"));
