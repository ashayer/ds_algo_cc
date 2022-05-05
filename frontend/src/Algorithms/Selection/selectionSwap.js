import { shuffle } from "d3-array";

function generateCorrectSwapArray(swaps, originalArray) {
  const array = originalArray.slice();
  let currentSwaps = 0;
  let swapSorted = [];
  for (let i = 0; i < array.length; i += 1) {
    let min = i;
    for (let j = i + 1; j < array.length; j += 1) {
      if (array[j] < array[min]) {
        min = j;
      }
    }
    [array[i], array[min]] = [array[min], array[i]];
    if (min !== i) {
      currentSwaps += 1;
      if (currentSwaps === swaps) {
        swapSorted = array.slice();
      }
    }
  }
  return swapSorted;
}

function generateWrongSwapArrays(swapArray, originalArray) {
  const wrongSwapSorted = [];
  for (let k = 0; k < 3; k += 1) {
    const wrongSwap = swapArray[k];
    const array = originalArray.slice();
    let currentSwaps = 0;
    let swapSorted = [];
    if (wrongSwap === 0) {
      swapSorted = array.slice();
      wrongSwapSorted[k] = swapSorted;
    } else {
      for (let i = 0; i < array.length; i += 1) {
        let min = i;
        for (let j = i + 1; j < array.length; j += 1) {
          if (array[j] < array[min]) {
            min = j;
          }
        }
        [array[i], array[min]] = [array[min], array[i]];
        if (min !== i) {
          currentSwaps += 1;
          if (currentSwaps === wrongSwap) {
            swapSorted = array.slice();
          }
        }
      }
      wrongSwapSorted[k] = swapSorted;
    }
  }
  return wrongSwapSorted;
}

function selectionSort(array) {
  const unSortedArray = array.slice();
  let swapCounter = 0;
  for (let i = 0; i < array.length; i += 1) {
    let min = i;
    for (let j = i + 1; j < array.length; j += 1) {
      if (array[j] < array[min]) {
        min = j;
      }
    }
    [array[i], array[min]] = [array[min], array[i]];
    if (min !== i) {
      swapCounter += 1;
    }
  }

  const sortedArrayObject = {
    arraySorted: array,
    arrayUnsorted: unSortedArray,
    swaps: swapCounter,
  };

  return sortedArrayObject;
}

function generateSwap() {
  let arrayToBeSorted = shuffle([2, 3, 5, 8, 6, 7]);
  let sortedArrayObject = selectionSort(arrayToBeSorted);

  while (sortedArrayObject.swaps < 5) {
    arrayToBeSorted = shuffle([2, 3, 5, 8, 6, 7]);
    sortedArrayObject = selectionSort(arrayToBeSorted);
  }

  const correctSwapNumber = Math.floor(Math.random() * (sortedArrayObject.swaps + 1 - 1) + 1);
  const wrongSwaps = [];
  for (let i = 0; i < 3; i += 1) {
    let wrongSwapNumber = Math.floor(Math.random() * (sortedArrayObject.swaps + 1 - 0) + 0);
    while (wrongSwapNumber === correctSwapNumber || wrongSwaps.includes(wrongSwapNumber)) {
      wrongSwapNumber = Math.floor(Math.random() * (sortedArrayObject.swaps + 1 - 0) + 0);
    }
    wrongSwaps[i] = wrongSwapNumber;
  }
  const rightAnswer = generateCorrectSwapArray(
    correctSwapNumber,
    sortedArrayObject.arrayUnsorted,
    sortedArrayObject.swaps,
  );
  const wrongAnswers = generateWrongSwapArrays(wrongSwaps, sortedArrayObject.arrayUnsorted);
  const answers = {
    right: rightAnswer,
    wrong: wrongAnswers,
    original: sortedArrayObject.arrayUnsorted,
    swaps: correctSwapNumber,
  };

  return answers;
}

// function selectionTest(){
//     let test = [];

//     for(let i =0; i< 100000; i+= 1){
//         let arrayToBeSorted = shuffle([2,3,5,8,6,7]);
//         let sortedArrayObject = selectionSort(arrayToBeSorted);
//         if(!test[sortedArrayObject.swaps]) test[sortedArrayObject.swaps] = 1;
//         test[sortedArrayObject.swaps] += 1;
//     }
//     console.log(test);
// }

export default generateSwap;
