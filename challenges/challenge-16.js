/**
 * @param {Array<number>} tree
 */
function transformTree(tree) {
  const indexLimit = arguments[1] ?? 0;
  if (tree[indexLimit] === null || indexLimit >= tree.length) {
    return null;
  }
  const subTre = {
    value: tree[indexLimit],
    left: transformTree(tree, indexLimit * 2 + 1),
    right: transformTree(tree, indexLimit * 2 + 2),
  };
  return subTre;
}
console.log(transformTree([3, 1, 0, 8, 12, null, 1]));

/**

{
  value: 3,
  left: {
    value: 1,
    left: {
      value: 8,
      left: null,
      right: null
    },
    right: {
      value: 12,
      left: null,
      right: null
    }
  },
  right: {
    value: 0,
    left: null,
    right: {
      value: 1,
      left: null,
      right: null
    }
  }
}

*/

/**
 * Time Complexity: O(2^n), where n is the height of the recursion tree.
 * Space Complexity: O(n), where n is the height of the recursion tree.
 * Explanation:
 * The time complexity remains O(2^n) due to the binary tree recursion.
 * The space complexity is still O(n) due to the height of the recursion tree.
 */