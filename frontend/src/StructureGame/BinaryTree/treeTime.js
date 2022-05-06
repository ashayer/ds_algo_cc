import { shuffle } from "d3-array";
/*
 ask question about the time complexity of various operations of binary tree

 1. time it takes to delete root node
 2. time it takes to remove any node
 3. time to add node to root
 4. time to add node to a leaf
*/
function generateTime() {
  const answers = {
    right: "logn",
    wrong: shuffle(["n", "nlogn", "1"]),
  };

  return answers;
}

export default generateTime;
