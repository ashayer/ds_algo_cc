import { shuffle } from "d3-array";

function generateTime() {
  const randomText = Math.floor(Math.random() * 3);

  let questionText = "";
  let answers;
  switch (randomText) {
    case 0:
      questionText = "Time complexity to pop";
      answers = {
        right: "1",
        wrong: shuffle(["n", "logn", "nlogn"]),
        questionText,
      };
      break;
    case 1:
      questionText = "Time complexity to push";
      answers = {
        right: "1",
        wrong: shuffle(["n", "logn", "nlogn"]),
        questionText,
      };
      break;
    case 2:
      questionText = "Time complexity to add element to bottom of almost full stack";
      answers = {
        right: "n",
        wrong: shuffle(["1", "logn", "nlogn"]),
        questionText,
      };
      break;
    default:
      break;
  }

  return answers;
}

export default generateTime;
