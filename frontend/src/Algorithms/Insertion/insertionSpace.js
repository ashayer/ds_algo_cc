import { shuffle } from "d3-array";

function generateSpace() {
  const answers = {
    right: "1",
    wrong: shuffle(["nlogn", "n", "logn"]),
  };

  return answers;
}

export default generateSpace;
