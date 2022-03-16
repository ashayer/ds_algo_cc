import { current } from "@reduxjs/toolkit";
import { shuffle } from "d3-array";

function generateSwap() {
  let arrayToBeSorted = shuffle([2, 3, 5, 8, 6, 7]); //array with values that are used
  let sortedArrayObject = mergeSortCaller(arrayToBeSorted); //returned sorted object with swaps, the sorted array, and original unsorted array

  while (sortedArrayObject.swaps < 3) {
    //needs to be at least 3 as you need at least
    //while the swaps are not at least 3 sort another array
    arrayToBeSorted = shuffle([2, 3, 5, 8, 6, 7]);
    sortedArrayObject = mergeSortCaller(arrayToBeSorted);
    console.log("swaps were 0");
  }

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
    while (wrongAnswers[i] === rightAnswer) {
      wrongAnswers[i] = shuffle([2, 3, 5, 8, 6, 7]);
    }
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
  const mergeSort = (array) => {
    let half = array.length / 2;
    if (array.length % 2 === 1) {
      //ensure the left half is larger on odd splits
      half += 1;
    }
    // Base case or terminating case
    if (array.length < 2) {
      return array;
    }

    const left = array.splice(0, half); //left is first half of array, array becomes second half
    return merge(mergeSort(left, swapCounter), mergeSort(array, swapCounter));
  };

  const merge = (left, right) => {
    let arr = [];

    // Break out of loop if any one of the array gets empty
    while (left.length && right.length) {
      // Pick the smaller among the smallest element of left and right sub arrays
      if (left[0] <= right[0]) {
        arr.push(left.shift());
      } else {
        currentSwaps++;
        arr.push(right.shift());
        if (currentSwaps === swaps) {
          //if the current swap number equals the questions' then stop sorting
          //! if the entire array is half the total length that means the rest of the array is sorted
          //! hacky solution where the remaining elements are just added from original

          swapSorted = [...arr, ...left, ...right].slice();
          if (swapSorted.length === 3) {
            let tempFirstThree = originalArray.slice(0, 3).sort();
            console.log(originalArray);
            swapSorted.unshift(tempFirstThree[2]);
            swapSorted.unshift(tempFirstThree[1]);
            swapSorted.unshift(tempFirstThree[0]);
          } else if (swapSorted.length === 2) {
            let tempFirstThree = originalArray.slice(0, 3).sort();
            let tempLast = originalArray[originalArray.length - 1];
            swapSorted.unshift(tempFirstThree[2]);
            swapSorted.unshift(tempFirstThree[1]);
            swapSorted.unshift(tempFirstThree[0]);
            swapSorted.push(tempLast);
          }
          return [...arr, ...left, ...right];
        }
      }
    }

    // Concatenating the leftover elements
    // (in case we didn't go through the entire left or right array)
    return [...arr, ...left, ...right];
  };

  mergeSort(unsortedArray);
  //console.log(swapSorted);

  return swapSorted;
}

let swapCounter = 0;
function mergeSortCaller(array) {
  let unsortedArray = array.slice();

  swapCounter = 0;
  let sortedArray = mergeSort(array);

  let sortedArrayObject = {
    arraySorted: sortedArray,
    arrayUnsorted: unsortedArray,
    swaps: swapCounter,
  };

  return sortedArrayObject;
}

function mergeSort(array) {
  let half = array.length / 2;
  if (array.length % 2 === 1) {
    //ensure the left half is larger on odd splits
    half += 1;
  }
  // Base case or terminating case
  if (array.length < 2) {
    return array;
  }

  const left = array.splice(0, half); //left is first half of array, array becomes second half
  return merge(mergeSort(left, swapCounter), mergeSort(array, swapCounter));
}

function merge(left, right) {
  let arr = [];

  // Break out of loop if any one of the array gets empty
  while (left.length && right.length) {
    // Pick the smaller among the smallest element of left and right sub arrays
    if (left[0] <= right[0]) {
      arr.push(left.shift());
    } else {
      swapCounter++;
      arr.push(right.shift());
    }
  }

  // Concatenating the leftover elements
  // (in case we didn't go through the entire left or right array)
  return [...arr, ...left, ...right];
}

//generates an array where the value at index n is the number of times it takes n swaps to sort array
// function mergeTest() {
//   let swapCounterArray = [];
//   let once = false;
//   for (let i = 0; i < 1000000; i++) {
//     let arrayToBeSortedTest = shuffle([2, 3, 5, 8, 6, 7]);
//     let test = mergeSortCaller(arrayToBeSortedTest);
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
