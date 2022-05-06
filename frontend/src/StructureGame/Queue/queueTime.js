import { shuffle } from "d3-array";

function generateTime() {
  const randomText = Math.floor(Math.random() * 4);

  let questionText = "";
  let answers;
  switch (randomText) {
    case 0:
      questionText = "Time complexity to delete head of a queue?";
      answers = {
        right: "1",
        wrong: shuffle(["n", "logn", "nlogn"]),
        questionText,
      };
      break;
    case 1:
      questionText = "Time complexity to delete tail of a queue?";
      answers = {
        right: "n",
        wrong: shuffle(["1", "logn", "nlogn"]),
        questionText,
      };
      break;
    case 2:
      questionText = "Time complexity to dequeue?";
      answers = {
        right: "1",
        wrong: shuffle(["n", "logn", "nlogn"]),
        questionText,
      };
      break;
    case 3:
      questionText = "Time complexity to enqueue?";
      answers = {
        right: "1",
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
