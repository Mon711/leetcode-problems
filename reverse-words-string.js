// Problem 151

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    s = s.replace(/\s+/g, " ").trim();
    const wordsArr = s.split(" ");

    return wordsArr.reverse().join(" ");
};

console.log(reverseWords("the sky is blue"));
console.log(reverseWords("  hello world  "));
