// renders an individual node
function printNode(node) {
  console.log(node.label);
}
//
// renders the taxonomy tree in the correct order
// Ids are random and only the parentIDs matter
//
function renderTaxonomy(inputs) {
  //
  //  First, Find Parent Node ID Null
  //
  let parentElement = [...inputs].filter((item) => {
    return item.parentId === null;
  });
  //
  let i = 0;
  let treeResult = helper(parentElement[0], i, inputs);
  console.log(treeResult);
  //
}
//
function helper(obj, iterator, inputs) {
  //
  //  Now that we have the parent element we will
  //
  let doneIndicator = false;
  let savedObj = obj; // parentElement[0];
  let treeObj = { [`${obj.label}`]: obj }; // { [`${parentElement[0].label}`]: parentElement[0] };
  //
  while (doneIndicator !== true) {
    //
    console.log("---------------->", inputs[iterator]);
    if (inputs[iterator] === undefined) {
      doneIndicator = true;
      break;
    }
    //
    if (
      inputs[iterator].parentId === savedObj.id &&
      inputs[iterator].id < savedObj.id
    ) {
      treeObj[`${savedObj.label}`]["left"] = inputs[iterator];
      iterator++;
      helper(inputs[iterator], iterator, inputs); // savedObj = inputs[iterator];
    }
    //
    if (
      inputs[iterator].parentId === savedObj.id &&
      inputs[iterator].id > savedObj.id
    ) {
      treeObj[`${savedObj.label}`]["right"] = inputs[iterator];
      iterator++;
      helper(inputs[iterator], iterator, inputs); // savedObj = inputs[iterator];
    }
    //
    iterator++;
    //
  }
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
