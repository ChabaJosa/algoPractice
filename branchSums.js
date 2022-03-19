// Write a function that takes in a Binary Tree and returns a list of its branch
// sums ordered from leftmost branch sum to rightmost branch sum.
// A branch sum is the sum of all values in a Binary Tree branch. A Binary Tree
// branch is a path of nodes in a tree that starts at the root node and ends at
// any leaf node.
//
// This is the class of the input root.
// Do not edit it.
//
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
  //
  //  I added the insert method so I can 
  //  make the function log the result here 
  //
  insert(values, i = 0) {
    if (i >= values.length) return;
    const queue = [this];
    while (queue.length > 0) {
      let current = queue.shift();
      if (current.left === null) {
        current.left = new BinaryTree(values[i]);
        break;
      }
      queue.push(current.left);
      if (current.right === null) {
        current.right = new BinaryTree(values[i]);
        break;
      }
      queue.push(current.right);
    }
    this.insert(values, i + 1);
    return this;
  }
}
//
//
function branchSums(root) {
  // Write your code here.
  let sums = [];
  helper(root, 0, sums);
  console.log(sums);
  return sums;
}

function helper(node, total, sumsArr) {
  if (!node) {
    return;
  }
  const newRunningSum = total + node.value;
  if (!node.left && !node.right) {
    sumsArr.push(newRunningSum);
    return;
  }
  //
  helper(node.left, Number(newRunningSum), sumsArr);
  helper(node.right, Number(newRunningSum), sumsArr);
}

// Do not edit the lines below.
//
const tree = new BinaryTree(1).insert([2, 3, 4, 5, 6, 7, 8, 9, 10]);
//
branchSums(tree);
