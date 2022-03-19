// renders an individual node
function printNode(node) {
  console.log(node.label);
}
//
// renders the taxonomy in the correct order
function renderTaxonomy(inputs) { 
  //
  //  First, Find Parent Node ID Null
  //
  let parent = {};
  //
  inputs.forEach((item) => {
    if (item.parentId === null) {
      parent[item.label] = item;
    }
  });
  //
  // Get Immediate Children
  const parentKey = Object.keys(parent);

  let immediateChildren = {};
  //
  inputs.forEach((item) => {
    if (item.parentId === parent[parentKey[0]].id) {
      immediateChildren[item.label] = item;
    }
  });
  //
  console.log(immediateChildren);
  const childrenKeys = Object.keys(immediateChildren);
  //
  // Loop throught Array again to find children
  // 
  let i = 0;
  while (i < inputs.length) {
    i++;
    if (inputs[i].parentId === childrenKeys[0]) {
      parent[item.label] = item;
    }
  }
  //
}
//
const testInput = [
  { label: "Deer", id: 8, parentId: 7 },
  { label: "Rabbit", id: 9, parentId: 7 },
  { label: "Cow", id: 5, parentId: 3 },
  { label: "Sheep", id: 6, parentId: 3 },
  { label: "Fox", id: 15, parentId: 12 },
  { label: "Bear", id: 10, parentId: 7 },
  { label: "Tasty Birds", id: 17, parentId: 16 },
  { label: "Chicken", id: 18, parentId: 17 },
  { label: "Duck", id: 19, parentId: 17 },
  { label: "Animals", id: 1000, parentId: null },
  { label: "Elk", id: 11, parentId: 7 },
  { label: "Dont-Want-To-Find-Out Mammals", id: 12, parentId: 2 },
  { label: "Elephant", id: 13, parentId: 12 },
  { label: "Tiger", id: 14, parentId: 12 },
  { label: "Mammals", id: 2, parentId: 1000 },
  { label: "Tasty Mammals", id: 3, parentId: 2 },
  { label: "Pig", id: 4, parentId: 3 },
  { label: "Birds", id: 16, parentId: 1000 },
  { label: "Questionablely Tasty Mammals", id: 7, parentId: 2 },
]; 
//
//  This solution does not work
//
renderTaxonomy(testInput);
