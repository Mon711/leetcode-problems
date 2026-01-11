/**
 * @param {string} s
 * @return {number}
 */
const romanObj = {
	I: 1,
	V: 5,
	X: 10,
	L: 50,
	C: 100,
	D: 500,
	M: 1000,
};

var romanToInt = function (s) {
	let sum = 0;

	for (let i = 0; i < s.length; i++) {
		if (
			(s[i] === "I" && (s[i + 1] === "V" || s[i + 1] === "X")) ||
			(s[i] === "X" && (s[i + 1] === "L" || s[i + 1] === "C")) ||
			(s[i] === "C" && (s[i + 1] === "D" || s[i + 1] === "M"))
		) {
			sum = sum + (romanObj[s[i + 1]] - romanObj[s[i]]);

			// will skip 2 iteartions in one go as there is i++ in the for loop declaration too
			i++;
		}else{
            sum += romanObj[s[i]]
        }
	}

    return sum;
};

var romanToInt2 = function (s){
    let total = 0;

    for (let i = 0; i < s.length; i++) {
        let currentVal = romanObj[s[i]]
        let nextVal = romanObj[s[i + 1]]

        if(currentVal < nextVal){
            total -= currentVal
        }else{
            total +=currentVal
        }
    }

    return total;
}

console.log(romanToInt2("III"));
console.log(romanToInt2("LVIII"));
console.log(romanToInt2("MCMXCIV"));

