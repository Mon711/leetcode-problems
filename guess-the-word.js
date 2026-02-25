// Problem 843
/**
 * // This is the master's API interface.
 * // You should not implement it, or speculate about its implementation
 * function Master() {
 *
 *     @param {string} word
 *     @return {integer}
 *     this.guess = function(word) {
 *         ...
 *     };
 * };
 */
/**
 * @param {string[]} words
 * @param {Master} master
 * @return {void}
 */
var findSecretWord = function (words, master) {
	let guesses = 0;

	// for (let i = 0; i < 30; i++) {
	// 	const randomIndex = Math.floor(Math.random() * words.length);
	// 	const candidate = words[randomIndex];

	// 	const score = master.guess(candidate);

    //     if (score === 6) return;

    //     words = words.filter(word => {
    //         let matchCount = 0;
    //         for (let j = 0; j < 6; j++) {
    //             if (word[j] === candidate[j]) {
    //                 matchCount++;
    //             }
    //         }
    //         return matchCount === score;
    //     });
	// }

	while (guesses < 30) {
		const randomIndex = Math.floor(Math.random() * words.length);
		let candidate = words[randomIndex];
		let score = master.guess(candidate);

		if (score === 6) return;

		words = words.filter((word) => {
			let count = 0;
			for (let i = 0; i < word.length; i++) {
				if (word[i] === candidate[i]) count++;
			}

			return count === score;
		});

		guesses++;
	}
};
