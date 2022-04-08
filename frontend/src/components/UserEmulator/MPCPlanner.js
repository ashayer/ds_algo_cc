/* eslint-disable prefer-const */
class Node {
  constructor(value, left, middle, right, id) {
    this.value = value;
    this.visited = false;
    this.left = left;
    this.id = id;
    this.middle = middle;
    this.right = right;
  }
}

const globalDepth = 10;

const createTree = (depth, value) => {
  const newNode = new Node();
  if (depth === globalDepth) {
    newNode.value = 0;
    newNode.id = "0";
  } else {
    newNode.value = value;
    newNode.id = (globalDepth - depth).toString() + value.toString();
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

let tempArray = [];
let arrayOfArray = [];
let stateTotal = 0;
let stateCorrect = 0;
let denominator = 0;
let x = 0;

const calculatePercentage = (array) => {
  let totalQuestions = globalDepth;
  let totalCorrect = 0;
  for (let i = 0; i < globalDepth; i += 1) {
    if (array[i] < 3) {
      totalCorrect += 1;
    }
  }
  if (parseFloat(x.toFixed(1)) >= 1) {
    if (totalCorrect / totalQuestions === 1) {
      return true;
    }
  } else if (totalCorrect / totalQuestions === parseFloat(x.toFixed(1))) {
    return true;
  } else if (parseFloat(x.toFixed(1)) < 0) {
    if (totalCorrect / totalQuestions === 0) {
      return true;
    }
  }
  return false;
};

const dfs = (start) => {
  if (!start) {
    return start;
  }

  if (tempArray[tempArray.length - 1] && tempArray[tempArray.length - 1].visited) {
    tempArray.pop();
  }
  if (!(start.value === 0) && !start.visited) {
    tempArray.push(start.value);
  }

  if (start.left === undefined && start.middle === undefined && start.right === undefined) {
    start.visited = true;

    if (calculatePercentage(tempArray.slice())) {
      arrayOfArray.push(tempArray.slice());
    }
    tempArray.pop();
  }

  dfs(start.left);
  dfs(start.middle);
  dfs(start.right);

  if (start.left && start.left.visited && start.right.visited && start.middle.visited) {
    start.visited = true;
    tempArray.pop();
  }

  return start;
};

const MPCHandler = (correct, total) => {
  tempArray = [];
  arrayOfArray = [];
  stateCorrect = correct;
  stateTotal = total;
  denominator = stateTotal + globalDepth;
  x = (0.75 * denominator - stateCorrect) / globalDepth;
  const planningTree = createTree(globalDepth, 0);
  dfs(planningTree);

  const idealPath = arrayOfArray[Math.floor(Math.random() * arrayOfArray.length)];
  return idealPath;
};

export default MPCHandler;
