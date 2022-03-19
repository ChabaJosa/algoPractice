// Write a function that takes in a non-empty array of integers that are sorted
// in ascending order and returns a new array of the same length with the squares
// of the original integers also sorted in ascending order.

function sortedSquaredArray(array) {
  // Write your code here.
  let lesser = array[0];
  let bigger = array[array.length - 1];
  let result = [];
  //
  for (let i = 0; i < array.length; i++) {
    console.log("Heree ", array[i]);
    if (Math.abs(array[i]) >= Math.abs(lesser)) {
      result.push(array[i] * array[i]);
    } else {
      //
      //	Additional Checks
      //
      result.unshift(array[i] * array[i]);
    }
  }
  //
  //	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift
  //	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
  //
  return result;
}

// Do not edit the line below.
exports.sortedSquaredArray = sortedSquaredArray;
