/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function (columnTitle) {
    const len = columnTitle.length;
	let sum = 0;

	for (let i = 0; i < len; i++) {
		sum = sum + (26 ** (len - 1 - i) * (columnTitle[i].charCodeAt(0) - 64));
	}

	return sum;
};

console.log(titleToNumber("A"));
console.log(titleToNumber("AB"));
console.log(titleToNumber("ZY"));
console.log(titleToNumber("FXSHRXW"));
