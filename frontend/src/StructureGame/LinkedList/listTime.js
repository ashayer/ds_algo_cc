import { shuffle } from "d3-array";

function generateTime() {
  const randomText = Math.floor(Math.random() * 3);

  let questionText = "";
  let answers;
  switch (randomText) {
    case 0:
      questionText = "Time complexity to remove last node in a SLL without given a pointer?";
      answers = {
        right: "n",
        wrong: shuffle(["1", "logn", "nlogn"]),
        questionText,
      };
      break;
    case 1:
      questionText = "Time complexity to remove a node knowing its pointer and prev node pointer in a SLL?";
      answers = {
        right: "1",
        wrong: shuffle(["n", "logn", "nlogn"]),
        questionText,
      };
      break;
    case 2:
      questionText = "Time complexity to search for a node in a SLL";
      answers = {
        right: "n",
        wrong: shuffle(["1", "logn", "nlogn"]),
        questionText,
      };
      break;
      case 3:
        questionText = "Time complexity to remove last node in a DLL without given a pointer?";
        answers = {
          right: "n",
          wrong: shuffle(["1", "logn", "nlogn"]),
          questionText,
        };
        break;
      case 4:
        questionText = "Time complexity to remove a node knowing its pointer in a DLL?";
        answers = {
          right: "1",
          wrong: shuffle(["n", "logn", "nlogn"]),
          questionText,
        };
        break;
      case 5:
        questionText = "Time complexity to search for a node in a DLL";
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
