/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {  
  let maxDiff = -Infinity;

  let minPrice = prices[0];

  for (let i = 1; i < prices.length; i++) {
    minPrice = Math.min(minPrice, prices[i - 1]);
    let diff = prices[i] - minPrice;
    if (diff > maxDiff) {
      maxDiff = diff;
    }
  }

  if(maxDiff < 0){
    return 0
  }

  return maxDiff;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1]));
console.log(maxProfit([2, 4, 1]));
console.log(maxProfit([1, 2, 3, 4, 5]));
console.log(maxProfit([9, 8, 7, 6, 5]));
