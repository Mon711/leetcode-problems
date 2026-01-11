// Problem No. 217

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
	const myMap = new Map();

	for (const num of nums) {
		myMap.set(num, (myMap.get(num) || 0) + 1);
		if (myMap.get(num) > 1) {
			return true;
		}
	}

	return false;
};

var containsDuplicate2 = function(nums){
    const mySet = new Set(nums);
    return nums.length !== mySet.size;
}

var containsDuplicate3 = function(nums){
    const mySet = new Set();

    for(const num of nums){
        // .has() in a Set is O(1) on average
        if(mySet.has(num)){
            return true
        }

        mySet.add(num);
    }

    return false
}

console.log(containsDuplicate3([1,2,3,1]));
console.log(containsDuplicate3([1,2,3,4]));
console.log(containsDuplicate3([1,1,1,3,3,4,3,2,4,2]));

