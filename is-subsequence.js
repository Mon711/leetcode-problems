// Problem 392

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
	if (s === t) return true;

	let p1 = 0;
	let p2 = 0;

	while (p1 < s.length && p2 < t.length) {
		if (s[p1] === t[p2]) {
			p1++;
		}

		p2++;
	}

	return p1 === s.length;
};

console.log(isSubsequence("abc", "ahbgdc"));
console.log(isSubsequence("axc", "ahbgdc"));
console.log(isSubsequence("world", "hello, world"));
console.log(isSubsequence("hlood", "hello, world"));
console.log(isSubsequence("hello", "hello"));
