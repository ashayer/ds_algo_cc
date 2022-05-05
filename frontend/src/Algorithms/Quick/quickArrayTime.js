import { shuffle } from "d3-array";
// generate an array that satisfies the best or worst time complexity of quick sort
// this is done by first randomly deciding between best or worst randomly
// if best then show shuffled array
// otherwise generate a sorted array in ascending or descending order

const checkArraySorted = (array) => {
  for (let i = 0; i < array.length - 1; i += 1) {
    if (array[i] > array[i + 1]) {
      return false;
    }
  }
  return true;
};

const createBestCase = () => {
  const rightAnswer = "nlogn";
  const wrongAnswers = shuffle(["logn", "n", "n\u00B2"]);
  let shuffledArray = shuffle([2, 3, 5, 8, 6, 7]);
  while (checkArraySorted(shuffledArray)) {
    shuffledArray = shuffle([2, 3, 5, 8, 6, 7]);
  }

  const answers = {
    right: rightAnswer,
    wrong: wrongAnswers,
    original: shuffledArray,
  };

  return answers;
};

const createWorstCase = () => {
  const rightAnswer = "n\u00B2";
  const wrongAnswers = shuffle(["logn", "nlogn", "n"]);
  const isAscendingOrder = Math.random() > 0.5;
  const sortedArray = [2, 3, 5, 6, 7, 8];
  if (!isAscendingOrder) {
    sortedArray.reverse();
  }

  const answers = {
    right: rightAnswer,
    wrong: wrongAnswers,
    original: sortedArray,
  };

  return answers;
};

function generateArrayTime() {
  const isBestCase = Math.random() > 0.5;

  if (isBestCase) {
    return createBestCase();
  }
  return createWorstCase();
}

export default generateArrayTime;
