import { shuffle } from "d3-array";

function generateSwap() {
  //let arrayToBeSorted = shuffle([2, 3, 5, 8, 6, 7]); //array with values that are used
  let arrayToBeSorted = [2,8,6,7,5,3]; //array with values that are used
  let sortedArrayObject = quickSortCaller(arrayToBeSorted); //returned sorted object with swaps, the sorted array, and original unsorted array

//   while (sortedArrayObject.swaps < 3) {
//     //needs to be at least 3 as you need at least
//     //while the swaps are not at least 3 sort another array
//     arrayToBeSorted = shuffle([2, 3, 5, 8, 6, 7]);
//     sortedArrayObject = quickSortCaller(arrayToBeSorted);
//     console.log("swaps were 0");
//   }

  let correctSwapNumber = Math.floor(
    Math.random() * (sortedArrayObject.swaps + 1 - 3) + 3 //the swap number used for correct answer with a max value of 7 and smallest of 3
  );

  let rightAnswer = generateCorrectSwapArray(
    correctSwapNumber,
    sortedArrayObject.arrayUnsorted
  );
  let wrongAnswers = []; //array to hold the 3 wrongly swapped array

  for (let i = 0; i < 3; i++) {
    wrongAnswers[i] = shuffle([2, 3, 5, 8, 6, 7]);
    // while (wrongAnswers[i] === rightAnswer) {
    //   wrongAnswers[i] = shuffle([2, 3, 5, 8, 6, 7]);
    // }
  }
  console.log(wrongAnswers);
  console.log(rightAnswer);

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


  //quickSort(unsortedArray);
  //console.log(swapSorted);

  return swapSorted;
}

let swapCounter = 0;
function quickSortCaller(array) {
  let unsortedArray = array.slice();

  swapCounter = 0;
  let sortedArray = quickSort(array, 0, array.length - 1);
  console.log(sortedArray);
  let sortedArrayObject = {
    arraySorted: sortedArray,
    arrayUnsorted: unsortedArray,
    swaps: swapCounter,
  };

  return sortedArrayObject;
}

function quickSort(arr, start, end) {
    console.log(start, end);
    // Base case or terminating case
    if (start >= end) {
        return;
    }
    
    // Returns pivotIndex
    let index = partition(arr, start, end);
    
    // Recursively apply the same logic to the left and right subarrays
    quickSort(arr, start, index - 1);
    quickSort(arr, index + 1, end);
}

function partition(arr, start, end){
    // Taking the last element as the pivot
    const pivotValue = arr[end];
    let pivotIndex = start; 
    for (let i = start; i < end; i++) {
        if (arr[i] < pivotValue) {
        // Swapping elements
        [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
        // Moving to next element
        pivotIndex++;
        }
    }
    
    // Putting the pivot value in the middle
    [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]] 
    return pivotIndex;
};

//generates an array where the value at index n is the number of times it takes n swaps to sort array
// function quickTest() {
//   let swapCounterArray = [];
//   let once = false;
//   for (let i = 0; i < 1000000; i++) {
//     let arrayToBeSortedTest = shuffle([2, 3, 5, 8, 6, 7]);
//     let test = quickSortCaller(arrayToBeSortedTest);
//     if (!swapCounterArray[test.swaps]) {
//       swapCounterArray[test.swaps] = 1;
//     }
//     if (test.swaps === 7 && !once) {
//       once = true;
//       console.log(test);
//     }
//     swapCounterArray[test.swaps] += 1;
//   }

//   console.log(swapCounterArray);
// }

export default generateSwap;
