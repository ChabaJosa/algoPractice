// Given an array of positive integers representing the values of coins in your
// possession, write a function that returns the minimum amount of change (the
// minimum sum of money) that you
// create. The given coins can have
// any positive integer value and aren't necessarily unique (i.e., you can have
// multiple coins of the same value).
//
function nonConstructibleChange(coins) {
  // Write your code here.
  let changeNum = 0;
  let sortedCoins = coins.sort((a, b) => a - b);
  for (let i = 0; i < coins.length; i++) {
    changeNum += sortedCoins[i];
    if (changeNum + 1 < sortedCoins[i + 1]) {
      return changeNum + 1;
    }
  }
  //
  if (coins.length < 2) {
    return coins.includes(1) ? 2 : 1;
  } else {
    return (
      coins.reduce(
        (previousValue, currentValue) => previousValue + currentValue
      ) + 1
    );
  }
}

// Do not edit the line below.
exports.nonConstructibleChange = nonConstructibleChange;
