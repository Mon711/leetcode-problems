/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

var isValidBST = function(root) {
    // This is our helper function that accepts the extra info (min, max)
    function validate(node, min, max) {
        // 1. Base Case: If we reached the end of a branch (null), it's valid.
        if(node === null){
            return true;
        }

        // 2. Check the Min Limit (if it exists)
        // If the current node is smaller than or equal to the Min allowed -> INVALID
        if(min !== null && node.val <= min){
            return false
        }

        // 3. Check the Max Limit (if it exists)
        // If the current node is larger than or equal to the Max allowed -> INVALID
        if(max !== null && node.val >= max){
            return false;
        }

        // 4. Recursive Step: Check the children
        // AND (&&) operator ensures BOTH sides must be true to return true.
        return validate(node.left, min, node.val) && validate(node.right, node.val, max)
    }

    // Start the process: Check the root with NO limits (null, null)
    return validate(root, null, null)
}