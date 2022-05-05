import { shuffle } from "d3-array";
// generate an array that satisfies the best or worst time complexity of insertion sort
// this is done by first randomly deciding between best or worst randomly
// if best then simply show an already sorted array
// otherwise generate a randomly shuffled array and check it is not sorted

const checkArraySorted = (array) => {
  for (let i = 0; i < array.length - 1; i += 1) {
    if (array[i] > array[i + 1]) {
      return false;
    }
  }
  return true;
};

const createBestCase = () => {
  const rightAnswer = "n";
  const wrongAnswers = shuffle(["logn", "nlogn", "n\u00B2"]);
  const answers = {
    right: rightAnswer,
    wrong: wrongAnswers,
    original: [2, 3, 5, 6, 7, 8],
  };

  return answers;
};

const createWorstCase = () => {
  const rightAnswer = "n\u00B2";
  const wrongAnswers = shuffle(["logn", "nlogn", "n"]);
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

function generateArrayTime() {
  const isBestCase = Math.random() > 0.5;

  if (isBestCase) {
    return createBestCase();
  }
  return createWorstCase();
}

export default generateArrayTime;
