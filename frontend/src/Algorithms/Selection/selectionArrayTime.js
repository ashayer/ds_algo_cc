import { shuffle } from "d3-array";
// generate an array that satisfies the best or worst time complexity of selection sort
// since both are n^2 just display a shuffled array or sorted array 30% of the time

const checkArraySorted = (array) => {
  for (let i = 0; i < array.length - 1; i += 1) {
    if (array[i] > array[i + 1]) {
      return false;
    }
  }
  return true;
};

function generateArrayTime() {
  const isSorted = Math.random() < 0.3;

  const rightAnswer = "n\u00B2";
  const wrongAnswers = shuffle(["logn", "nlogn", "n"]);
  let shuffledArray = shuffle([2, 3, 5, 8, 6, 7]);
  while (checkArraySorted(shuffledArray)) {
    shuffledArray = shuffle([2, 3, 5, 8, 6, 7]);
  }

  if (isSorted) {
    shuffledArray.sort();
  }

  const answers = {
    right: rightAnswer,
    wrong: wrongAnswers,
    original: shuffledArray,
  };

  return answers;
}

export default generateArrayTime;
