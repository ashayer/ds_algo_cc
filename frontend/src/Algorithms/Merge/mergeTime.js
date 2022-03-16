import { shuffle } from "d3-array";

function generateTime() {
  let answers = {
    right: "nlogn",
    wrong: shuffle(["n", "logn", "n\u00B2"]),
  };

  return answers;
}

export default generateTime;
