/* eslint-disable max-classes-per-file */
class Node {
  constructor(value, left, middle, right) {
    this.value = value;
    this.left = left;
    this.middle = middle;
    this.right = right;
  }
}

const createTree = (depth, value) => {
  const newNode = new Node();
  if (depth === 2) {
    newNode.value = 0;
  } else {
    newNode.value = value;
  }
  if (depth === 0) {
    return newNode;
  }
  newNode.left = createTree(depth - 1, 1);
  newNode.middle = createTree(depth - 1, 2);
  newNode.right = createTree(depth - 1, 3);
  return newNode;
};

// const UserModel = {
//   one: 0.95,
//   two: 0.8,
//   three: 0.6,
// };

// go down every possible path
// at each node is the value is 1 or 2 then the user got is right
// if the node value is 3 the user got it wrong
// once you reach a node with no children
const depth = 2;
let globalCorrect = 0;
let globalWrong = 0;
const tempArray = [];
let globalArray = [];

const dfs = (start) => {
  if (!start.left && !start.middle && !start.right) {
    tempArray.push(globalArray);
    globalArray = [];
    return;
  }
  if (start.value === 1 || start.value === 2) {
    globalArray.push(start.value);
    globalCorrect += 1;
  } else if (start.value === 3) {
    globalWrong += 1;
    globalArray.push(start.value);
  }

  // Recurse with all children

  dfs(start.left);
  dfs(start.middle);
  dfs(start.right);
};

const MPCHandler = () => {
  const planningTree = createTree(depth, 0);

  dfs(planningTree);

  console.log(planningTree);
  console.log(globalCorrect);
  console.log(globalWrong);
  console.log(tempArray);
};

export default MPCHandler;
