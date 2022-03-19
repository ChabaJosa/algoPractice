async function runSequentially(functions) {
  // Write your code here await
  let items = [];
  for (const i in functions) {
    // console.log(functions[i]())
    let holdItem = await functions[i]();
    await items.push(holdItem);
  }
  return items;
}

let counter = 1;
function incrementCounterAsync() {
  return new Promise((resolve, reject) => {
    counter += 1;
    resolve(counter);
  });
}
let promise = runSequentially([incrementCounterAsync, incrementCounterAsync]);

if (promise) {
  promise
    .then((result) => console.log(result))
    .catch((error) => console.log("Error: " + error));
}
module.exports.runSequentially = runSequentially;
