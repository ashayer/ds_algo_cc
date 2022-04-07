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
const currentState = [1, 2];

let test = [];
const calculatePercentage = (array) => {
  let [stateCorrect, stateTotal] = currentState;
  let totalQuestions = array.length;
  let totalCorrect = 0;
  for (let i = 0; i < totalQuestions; i += 1) {
    if (array[i] < 3) {
      totalCorrect += 1;
    }
  }

  if (!test[totalCorrect + stateCorrect]) {
    test[totalCorrect + stateCorrect] = 1;
  } else {
    test[totalCorrect + stateCorrect] += 1;
  }
  if ((totalCorrect + stateCorrect) / (totalQuestions + stateTotal) === 0.8) {
    return true;
  }
  return false;
};

let stopRecursion = false;

const dfs = (start) => {
  if (!stopRecursion) {
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
      arrayOfArray.push(tempArray.slice());
      if (calculatePercentage(tempArray.slice())) {
        stopRecursion = true;
      }
      tempArray.pop();
    }
    if (start.left && start.left.visited) {
      console.log("getting here");
    }

    dfs(start.left);
    dfs(start.middle);
    dfs(start.right);

    if (start.left && start.left.visited && start.right.visited && start.middle.visited) {
      start.visited = true;
      tempArray.pop();
    }

    return start;
  }
  return start;
};

const MPCHandler = () => {
  const planningTree = createTree(globalDepth, 0);
  dfs(planningTree);

  // eslint-disable-next-line no-unused-vars
  const idealPath = arrayOfArray[arrayOfArray.length - 1];
  console.log(idealPath);
  console.log(test);
};

export default MPCHandler;
