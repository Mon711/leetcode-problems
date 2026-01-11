/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length - (i + 1); j++) {
      if (nums[j] === 0 && nums[j + 1] && nums[j + 1] !== 0) {
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
      }
    }
  }

  return nums;
};

var moveZeroes2 = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === 0 && nums[j] !== 0) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
        i++;
      }

      if (nums[i] !== 0) {
        i++;
      }
    }
  }

  return nums;
};

var moveZeroes2 = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === 0 && nums[j] !== 0) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
        i++;
      }

      if (nums[i] !== 0) {
        i++;
      }
    }
  }

  return nums;
};

var moveZeroes3 = function (nums) {
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    let p1 = nums[k];
    let p2 = nums[i];

    if (p1 !== 0) {
      k++;
    }

    if (p1 === 0 && p2 !== 0) {
      [nums[i], nums[k]] = [nums[k], nums[i]];
      k++;
    }
  }

  return nums;
};

var moveZeroes4 = function (nums) {
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      [nums[i], nums[k]] = [nums[k], nums[i]];
      k++;
    }
  }

  return nums;
};

// ------ Test Function 1 ------
// console.log(moveZeroes([0,1,0,3,12]));
// console.log(moveZeroes([0]));
// console.log(moveZeroes([-1, 0, -2, 0, 3]));

// ------ Test Function 2 ------
// console.log(moveZeroes2([0,1,0,3,12]));
// console.log(moveZeroes2([0]));
// console.log(moveZeroes2([-1, 0, -2, 0, 3]));

// ------ Test Function 3 ------
// console.log(moveZeroes3([1, 0, 3, 12]));
// console.log(moveZeroes3([0]));
// console.log(moveZeroes3([-1, 0, -2, 0, 3]));
// console.log(moveZeroes3([0, 0, 1]));
// console.log(moveZeroes3([1, 0, 0]));
// console.log(moveZeroes3([1, 2, 3]));

// ------ Test Function 4 ------
console.log(moveZeroes4([0, 1, 0, 3, 12]));
console.log(moveZeroes4([0]));
console.log(moveZeroes4([-1, 0, -2, 0, 3]));
console.log(moveZeroes4([0, 0, 1]));
console.log(moveZeroes4([1, 0, 0]));
console.log(moveZeroes4([1, 2, 3]));

