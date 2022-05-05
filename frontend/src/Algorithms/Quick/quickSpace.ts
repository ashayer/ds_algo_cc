import { shuffle } from "d3-array";

function generateSpace() {
  const answers = {
    right: "logn",
    wrong: shuffle(["nlogn", "1", "n"]),
  };

  return answers;
}

export default generateSpace;
