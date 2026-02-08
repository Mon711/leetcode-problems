// Problem 14

/**
 * @param {string[]} strs
 * @return {string}
 */

// Horizontal Scanning
var longestCommonPrefix = function (strs) {
	// return the first element if its the only one
	if (strs.length === 1) {
		return strs[0];
	}

	// find common prefix within first 2 elements
	let firstElement = strs[0];
	let secondElement = strs[1];

	let pos = 0;
	let commonPrefix = "";

	while (pos < firstElement.length && pos < secondElement.length) {
		if (firstElement[pos] !== secondElement[pos]) {
			break;
		}

		commonPrefix += firstElement[pos];
		pos++;
	}

	// Return empty string if no common prefix between
	// first 2 elements
	if (commonPrefix === "") {
		return "";
	}


	// Check the common prefix amongst other remaining elements
	for (let i = 2; i < strs.length; i++) {
		let j = 0;

		while (j < commonPrefix.length) {
			if (commonPrefix[j] !== strs[i][j]) {
				commonPrefix = commonPrefix.substring(0, j);
			}

            j++;
		}

        // If common prefix becomes empty, return it immediately
		if (commonPrefix === "") {
			return "";
		}
	}

	return commonPrefix;
};

// Vertical Scanning
var longestCommonPrefixVertical = function (strs){
    if(strs.length === 1) return strs[0];

    for (let i = 0; i < strs[0].length; i++) {
        const char = strs[0][i];

        for (let j = 1; j < strs.length; j++) {
            if(i === strs[j].length || strs[j][i] !== char){
                return strs[0].substring(0, i)
            }
        }
        
    }

    return strs[0];
}

console.log(longestCommonPrefixVertical(["flower", "flow", "flight"]));
console.log(longestCommonPrefixVertical(["dog","racecar","car"]));
console.log(longestCommonPrefixVertical([""]));
