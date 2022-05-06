import { shuffle } from "d3-array";

function generateTime() {
  const randomText = Math.floor(Math.random() * 4);

  let questionText = "";
  let answers;
  switch (randomText) {
    case 0:
      questionText = "Time complexity to delete head of queue";
      answers = {
        right: "1",
        wrong: shuffle(["n", "logn", "nlogn"]),
        questionText,
      };
      break;
    case 1:
      questionText = "What is the time it takes to delete any node in a BST?";
      answers = {
        right: "n\u00B2",
        wrong: shuffle(["n", "logn", "nlogn"]),
        questionText,
      };
      break;
    case 2:
      questionText = "What is the time it takes to add a node in a BST?";
      answers = {
        right: "n\u00B2",
        wrong: shuffle(["n", "logn", "nlogn"]),
        questionText,
      };
      break;
    case 3:
      questionText = "What is the time it takes to add a LEAF node in a BST?";
      answers = {
        right: "n\u00B2",
        wrong: shuffle(["n", "logn", "nlogn"]),
        questionText,
      };
      break;
    default:
      break;
  }

  return answers;
}

export default generateTime;
