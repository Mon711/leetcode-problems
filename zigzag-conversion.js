// Prbolem 6

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
	if (s.length < numRows || numRows === 1) {
		return s;
	}

	const rows = new Array(numRows).fill("");
	let goingDown = false;
	let currentRow = 0;

	for (char of s) {
		rows[currentRow] += char;

		if (currentRow === 0 || currentRow === numRows - 1) {
			goingDown = !goingDown;
		}

		currentRow += goingDown ? 1 : -1;
	}

	return rows.join("");
};

console.log(convert("PAYPALISHIRING", 3));
console.log(convert("PAYPALISHIRING", 4));
console.log(convert("A", 1));
console.log(convert("AB", 1));
