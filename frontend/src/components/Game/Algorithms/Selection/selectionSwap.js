import {shuffle} from 'd3-array';

function selectionSortHandler(){
    let arrayToBeSorted = shuffle([2,3,5,8,6,7]);
    let sortedArrayObject = selectionSort(arrayToBeSorted);
    
    while(sortedArrayObject.swaps < 5){
        arrayToBeSorted = shuffle([2,3,5,8,6,7]);
        sortedArrayObject = selectionSort(arrayToBeSorted);
    }
    let test = [];

    // for(let i =0; i< 100000; i++){
    //     let arrayToBeSorted = shuffle([2,3,5,8,6,7]);
    //     let sortedArrayObject = selectionSort(arrayToBeSorted);
    //     if(!test[sortedArrayObject.swaps]) test[sortedArrayObject.swaps] = 1;
    //     test[sortedArrayObject.swaps] += 1; 
    // }
    //console.log(test);

    let correctSwapNumber = Math.floor(Math.random() * ((sortedArrayObject.swaps+1) - 1) + 1);
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
    for(let i = 0; i < array.length; i++) {
        let min = i;
        for(let j = i+1; j < array.length; j++) { 
            if(array[j] < array[min]) {
                min = j;
            }
        }
        [array[i], array[min]] = [array[min], array[i]];
        if(min !== i){
            currentSwaps += 1;
            if(currentSwaps === swaps){
                swapSorted = array.slice();
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
            for(let i = 0; i < array.length; i++) {
                let min = i;
                for(let j = i+1; j < array.length; j++) { 
                    if(array[j] < array[min]) {
                        min = j;
                    }
                }
                [array[i], array[min]] = [array[min], array[i]];
                if(min !== i){
                    currentSwaps += 1;
                    if(currentSwaps === wrongSwap){
                        swapSorted = array.slice();
                    }
                }
            }
            wrongSwapSorted[i] = swapSorted;
        }
    }
    return wrongSwapSorted;
}

function selectionSort(array){
    let unSortedArray = array.slice();
    let swapCounter = 0;
    for(let i = 0; i < array.length; i++) {
        let min = i;
        for(let j = i+1; j < array.length; j++) { 
            if(array[j] < array[min]) {
                min = j;
            }
        }
        [array[i], array[min]] = [array[min], array[i]];
        if(min !== i){
            swapCounter += 1;
        }
    }

    let sortedArrayObject = {
        arraySorted: array,
        arrayUnsorted: unSortedArray,
        swaps: swapCounter
    };
    
    return sortedArrayObject;
}



export default selectionSortHandler;