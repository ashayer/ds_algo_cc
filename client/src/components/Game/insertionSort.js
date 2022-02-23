import {shuffle} from 'd3-array';

function insertionSortHandler(){
    let arrayToBeSorted = shuffle([1,8,3,9,5,6]);

    let sortedArrayObject = insertionSort(arrayToBeSorted);

    while(sortedArrayObject.swaps < 4 || sortedArrayObject.swaps > 11){
        arrayToBeSorted = shuffle([1,2,3,4,5,6]);
        sortedArrayObject = insertionSort(arrayToBeSorted);
    }

    
    let correctSwapNumber = Math.floor(Math.random() * ((sortedArrayObject.swaps+1) - 3) + 3);

    let wrongSwaps = []
    for(let i = 0; i < 3; i++) {
        let wrongSwapNumber = Math.floor(Math.random() * ((sortedArrayObject.swaps+1) - 0) + 0);
        while((wrongSwapNumber === correctSwapNumber) || (wrongSwaps.includes(wrongSwapNumber))){
            wrongSwapNumber = Math.floor(Math.random() * ((sortedArrayObject.swaps+1) - 0) + 0);
        }
        wrongSwaps[i] = wrongSwapNumber;
    
    }
    let rightAnswer = generateCorrectSwapArray(correctSwapNumber, sortedArrayObject.arrayUnsorted, sortedArrayObject.swaps);

    let wrongAnswers = generateWrongSwapArrays(wrongSwaps, sortedArrayObject.arrayUnsorted);
        
    
    
    let answers = {
        right: rightAnswer,
        wrong: wrongAnswers,
        original: sortedArrayObject.arrayUnsorted,
        swaps: correctSwapNumber
    }

    return answers;
}

function generateCorrectSwapArray(swaps, originalArray){
    let array = originalArray.slice();
    let currentSwaps = 0;
    let swapSorted = [];
    for (let i = 0; i < array.length; i++) {
        for(let j = i; j > 0; j--) {
            if(array[j] < array[j-1]) {
                [array[j], array[j-1]] = [array[j-1], array[j]];
                currentSwaps += 1;
                if(currentSwaps === swaps){
                    swapSorted = array.slice();
                }
            }
        }
    }
    return swapSorted;

}

function generateWrongSwapArrays(swapArray, originalArray){
    let wrongSwapSorted = [];
    for (let i = 0; i < 3; i++) {
        let wrongSwap = swapArray[i];
        let array = originalArray.slice();
        let currentSwaps = 0;
        let swapSorted = [];
        if(wrongSwap === 0){
            swapSorted = array.slice();
            wrongSwapSorted[i] = swapSorted;
        }
        else{
            for (let i = 0; i < array.length; i++) {
                for(let j = i; j > 0; j--) {
                    if(array[j] < array[j-1]) {
                        [array[j], array[j-1]] = [array[j-1], array[j]];
                        currentSwaps += 1;
                        if(currentSwaps === wrongSwap){
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



function insertionSort(array){

    let unSortedArray = array.slice();
    let swapCounter = 0;
    for (let i = 1; i < array.length; i++) {
        let current = array[i];
        let j = i-1; 
        while ((j > -1) && (current < array[j])) {
            array[j+1] = array[j];
            swapCounter += 1;
            j--;
        }
        array[j+1] = current;
    }
    let sortedArrayObject = {
        arraySorted: array,
        arrayUnsorted: unSortedArray,
        swaps: swapCounter
    };
    
    return sortedArrayObject;
}



export default insertionSortHandler;

/*

shuffle array of size 6 of numbers 1-10 no repeats
https://www.npmjs.com/package/d3-array
sort using insertion sort and track number of swaps
if swaps > 3 and < 12 than continue otherwise generate another array and sort again
generate 1 correctSwaps greater than 3 and less than or equal to max swaps needed to sort entire array
generate 3 other numbers < || > correctSwaps <= max swaps and >= 0 and != correctIndex
run insertion sort using correctSwaps and get array
run insertion sort using wrongSwaps and get 3 arrays 
store in object and return to game component
pass to answer component and generate answers based on array values


*/