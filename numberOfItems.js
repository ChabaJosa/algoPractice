function numberOfItems(arr, item) {
  // Write the code that goes here
  //
  counter = 0;
  for (const i in arr) {
    if (arr[i] === item) {
      counter++;
    }
    if (typeof arr[i] === "object") {
      counter += numberOfItems(arr[i], item);
    }
  }
  return counter;
}

var arr = [25, "apple", ["banana", "strawberry", "apple", 25]];
console.log(numberOfItems(arr, 25));
console.log(numberOfItems(arr, "apple"));
