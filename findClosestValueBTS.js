//   Write a function that takes in a Binary Search Tree (BST) and a target integer
//   value and returns the closest value to that target value contained in the BST.

//   You can assume that there will only be one closest value.

//   Solution #1 - Recursively

function findClosestValueInBst(tree, target) {
  // Write your code here.
  return helper(tree, target, tree.value);
  //
}

function helper(tree, target, closest) {
  if (tree === null) {
    return closest;
  }
  if (Math.abs(target - closest) > Math.abs(target - tree.value)) {
    closest = tree.value;
  }
  if (target < tree.value) {
    return helper(tree.left, target, closest);
  }
  if (target > tree.value) {
    return helper(tree.right, target, closest);
  }
  if (target === tree.value) {
    return closest;
  }
}

// This is the class of the input tree. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Do not edit the line below.
exports.findClosestValueInBst = findClosestValueInBst;

//   Solution #2 - Iteratively

// function findClosestValueInBst(tree, target) {
//     // Write your code here.
//       let closest = tree.value
//       let currentNode = tree
//       while(currentNode !== null){
//           if(Math.abs(target - closest) > Math.abs(target - currentNode.value)){
//               closest = currentNode.value
//           }
//           //
//           if(target < currentNode.value){
//               currentNode = currentNode.left
//           } else if(target > currentNode.value){
//               currentNode = currentNode.right
//           } else if(target === currentNode.value){
//               break
//           }
//       }
//       return closest
//   }

//   // This is the class of the input tree. Do not edit.
//   class BST {
//     constructor(value) {
//       this.value = value;
//       this.left = null;
//       this.right = null;
//     }
//   }

//   // Do not edit the line below.
//   exports.findClosestValueInBst = findClosestValueInBst;
