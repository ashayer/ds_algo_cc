import { shuffle } from "d3-array";

function generateSwap() {
  let arrayToBeSorted = shuffle([2, 3, 5, 8, 6, 7]); //array with values that are used
  let sortedArrayObject = quickSortCaller(arrayToBeSorted); //returned sorted object with swaps, the sorted array, and original unsorted array
  while (sortedArrayObject.swaps < 4) {
    //while the swaps are not at least 4 sort another array
    arrayToBeSorted = shuffle([2, 3, 5, 8, 6, 7]);
    sortedArrayObject = quickSortCaller(arrayToBeSorted);
  }
  let correctSwapNumber = Math.floor(
    Math.random() * (sortedArrayObject.swaps + 1 - 2) + 2 //the swap number used for correct answer with a max value of 9 and smallest of 2
  );

  let rightAnswer = generateCorrectSwapArray(
    correctSwapNumber,
    sortedArrayObject.arrayUnsorted
  );
  let wrongAnswers = []; //array to hold the 3 wrongly swapped array

  for (let i = 0; i < 3; i++) {
    wrongAnswers[i] = shuffle([2, 3, 5, 8, 6, 7]);
    while (wrongAnswers[i] === rightAnswer) {
      wrongAnswers[i] = shuffle([2, 3, 5, 8, 6, 7]);
    }
  }

  let answers = {
    right: rightAnswer,
    wrong: wrongAnswers,
    original: sortedArrayObject.arrayUnsorted,
    swaps: correctSwapNumber,
  };

  return answers;
}

function generateCorrectSwapArray(swaps, originalArray) {
  let currentSwaps = 0;
  let unsortedArray = originalArray.slice();
  let swapSorted = [];
  let alreadySliced = false;

  const quickSort = (arr, start, end) => {
    // Base case or terminating case
    if (start < end) {
      // Returns pivotIndex
      let index = partition(arr, start, end);

      // Recursively apply the same logic to the left and right subarrays
      quickSort(arr, start, index - 1);
      quickSort(arr, index + 1, end);
    }
  };

  const partition = (arr, start, end) => {
    let pivot = arr[start];
    let pivotIndex = start;

    for (let i = start + 1; i <= end; i++) {
      if (
        arr[i] < pivot ||
        (arr[i] === pivot && Math.floor(Math.random() * 2) === 0)
      ) {
        pivotIndex++;
        [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
        if (arr[i] !== arr[pivotIndex]) {
          currentSwaps++;
          if (currentSwaps === swaps && !alreadySliced) {
            swapSorted = arr.slice();
            alreadySliced = true;
            return pivotIndex;
          }
        }
      }
    }
    [arr[start], arr[pivotIndex]] = [arr[pivotIndex], arr[start]];
    if (arr[start] !== arr[pivotIndex]) {
      currentSwaps++;
      if (currentSwaps === swaps && !alreadySliced) {
        swapSorted = arr.slice();
        alreadySliced = true;
        return pivotIndex;
      }
    }

    return pivotIndex;
  };

  quickSort(unsortedArray, 0, unsortedArray.length - 1);

  return swapSorted;
}

let swapCounter = 0;
function quickSortCaller(array) {
  let unsortedArray = array.slice();

  swapCounter = 0;
  quickSort(array, 0, array.length - 1);
  let sortedArray = array;
  let sortedArrayObject = {
    arraySorted: sortedArray,
    arrayUnsorted: unsortedArray,
    swaps: swapCounter,
  };

  return sortedArrayObject;
}

function quickSort(arr, start, end) {
  // Base case or terminating case
  if (start < end) {
    // Returns pivotIndex
    let index = partition(arr, start, end);

    // Recursively apply the same logic to the left and right subarrays
    quickSort(arr, start, index - 1);
    quickSort(arr, index + 1, end);
  }
}

function partition(arr, start, end) {
  let pivot = arr[start];
  let pivotIndex = start;

  for (let i = start + 1; i <= end; i++) {
    if (
      arr[i] < pivot ||
      (arr[i] === pivot && Math.floor(Math.random() * 2) === 0)
    ) {
      pivotIndex++;
      if (arr[i] !== arr[pivotIndex]) {
        swapCounter++;
      }
      [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
    }
  }
  if (arr[start] !== arr[pivotIndex]) {
    swapCounter++;
  }
  [arr[start], arr[pivotIndex]] = [arr[pivotIndex], arr[start]];

  return pivotIndex;
}

// function partition(arr, start, end) {
//   // Taking the last element as the pivot
//   let pivotIndex = start;
//   for (let i = start; i < end; i++) {
//     if (arr[i] < arr[end]) {
//       //add to swap counter if swapped values are different
//       console.log(pivotIndex, i);
//       if (arr[pivotIndex] !== arr[i]) {
//         swapCounter++;
//       }
//       // Swapping elements
//       [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
//       // Moving to next element
//       pivotIndex++;
//     }
//   }
//   //add to swap counter if swapped values are different
//   console.log(pivotIndex, end);
//   if (arr[pivotIndex] !== arr[end]) {

//     swapCounter++;
//   }
//   // Putting the pivot value in the middle
//   [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]];

//   return pivotIndex;
// }

//generates an array where the value at index n is the number of times it takes n swaps to sort array of size 6
// function quickTest() {
//   let swapCounterArray = [];
//   let once = false;
//   for (let i = 0; i < 1000000; i++) {
//     let arrayToBeSortedTest = shuffle([2, 3, 5, 8, 6, 7]);
//     let test = quickSortCaller(arrayToBeSortedTest);
//     if (!swapCounterArray[test.swaps]) {
//       swapCounterArray[test.swaps] = 1;
//     }
//     if (test.swaps === 9 && !once) {
//       once = true;
//       console.log(test);
//     }
//     swapCounterArray[test.swaps] += 1;
//   }

//   console.log(swapCounterArray);
// }

export default generateSwap;
