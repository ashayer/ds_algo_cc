import { shuffle } from "d3-array";

function generateSwap() {
  let arrayToBeSorted = shuffle([2, 3, 5, 8, 6, 7]); //array with values that are used
  let sortedArrayObject = insertionSort(arrayToBeSorted); //returned sorted object with swaps, the sorted array, and original unsorted array
  console.log(sortedArrayObject);
  while (sortedArrayObject.swaps < 4 || sortedArrayObject.swaps > 11) {
    //while the swaps are not between two common values found by running insertion sort sort again
    arrayToBeSorted = shuffle([2, 3, 5, 8, 6, 7]);
    sortedArrayObject = insertionSort(arrayToBeSorted);
  }
  let correctSwapNumber = Math.floor(
    Math.random() * (sortedArrayObject.swaps + 1 - 3) + 3 //the swap number used for correct answer
  );
  let wrongSwaps = []; //array to hold the 3 wrongly swapped array
  for (let i = 0; i < 3; i++) {
    let wrongSwapNumber = Math.floor(
      Math.random() * (sortedArrayObject.swaps + 1 - 0) + 0 //three wrong swaps in range of max swaps and 0
    );
    while (
      wrongSwapNumber === correctSwapNumber || //if the wrong swap number = correct swap generate another or as already been used
      wrongSwaps.includes(wrongSwapNumber)
    ) {
      wrongSwapNumber = Math.floor(
        Math.random() * (sortedArrayObject.swaps + 1 - 0) + 0
      );
    }
    wrongSwaps[i] = wrongSwapNumber;
  }
  let rightAnswer = generateCorrectSwapArray(
    correctSwapNumber,
    sortedArrayObject.arrayUnsorted
  );
  let wrongAnswers = generateWrongSwapArrays(
    wrongSwaps,
    sortedArrayObject.arrayUnsorted
  );
  let answers = {
    right: rightAnswer,
    wrong: wrongAnswers,
    original: sortedArrayObject.arrayUnsorted,
    swaps: correctSwapNumber,
  };

  return answers;
}

function generateCorrectSwapArray(swaps, originalArray) {
  let array = originalArray.slice();
  let currentSwaps = 0;
  let swapSorted = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = i; j > 0; j--) {
      if (array[j] < array[j - 1]) {
        [array[j], array[j - 1]] = [array[j - 1], array[j]];
        currentSwaps += 1;
        if (currentSwaps === swaps) {
          swapSorted = array.slice();
        }
      }
    }
  }
  return swapSorted;
}

function generateWrongSwapArrays(swapArray, originalArray) {
  let wrongSwapSorted = [];
  for (let i = 0; i < 3; i++) {
    let wrongSwap = swapArray[i];
    let array = originalArray.slice();
    let currentSwaps = 0;
    let swapSorted = [];
    if (wrongSwap === 0) {
      swapSorted = array.slice();
      wrongSwapSorted[i] = swapSorted;
    } else {
      for (let i = 0; i < array.length; i++) {
        for (let j = i; j > 0; j--) {
          if (array[j] < array[j - 1]) {
            [array[j], array[j - 1]] = [array[j - 1], array[j]];
            currentSwaps += 1;
            if (currentSwaps === wrongSwap) {
              swapSorted = array.slice();
            }
          }
        }
      }
      wrongSwapSorted[i] = swapSorted;
    }
  }
  return wrongSwapSorted;
}

function insertionSort(array) {
  let unSortedArray = array.slice();
  let swapCounter = 0;
  for (let i = 1; i < array.length; i++) {
    let current = array[i];
    let j = i - 1;
    while (j > -1 && current < array[j]) {
      array[j + 1] = array[j];
      swapCounter += 1;
      j--;
    }
    array[j + 1] = current;
  }
  let sortedArrayObject = {
    arraySorted: array,
    arrayUnsorted: unSortedArray,
    swaps: swapCounter,
  };

  return sortedArrayObject;
}

export default generateSwap;
