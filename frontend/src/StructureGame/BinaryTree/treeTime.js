import { shuffle } from "d3-array";

function generateTime() {
  const randomText = Math.floor(Math.random() * 4);

  let questionText = "";
  switch (randomText) {
    case 0:
      questionText = "Time complexity to delete root node of a BST?";

      break;
    case 1:
      questionText = "Time complexity to remove any node in a BST?";

      break;
    case 2:
      questionText = "Time complexity to add a node in a BST?";

      break;
    case 3:
      questionText = "Time complexity to add a LEAF node in a BST?";
      break;
    default:
      break;
  }
  const answers = {
    right: "logn",
    wrong: shuffle(["n", "logn", "nlogn"]),
    questionText,
  };

  return answers;
}

export default generateTime;
