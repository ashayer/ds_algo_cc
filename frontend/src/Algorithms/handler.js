//then it will call the handler of the respect algorithm passing into the function the type of the question
//the respective algorithm handler will then generate the appropriate question and answer object to return to the game component 
import insertionSortHandler from './Insertion/insertionSort';
import selectionSortHandler from './Selection/selectionSort';
import mergeSortHandler from './Merge/mergeSort';
import quickSortHandler from './Quick/quickSort';


function questionHandler(randomTopic, randomType) {
    switch(randomTopic) {
        case 0:
            return insertionSortHandler(randomType);
        case 1:
            return selectionSortHandler(randomType);
        case 2:
            return mergeSortHandler(randomType);
        case 3:
            return quickSortHandler(randomType);
        default:
            console.log("Something went wrong");
    }
}










export default questionHandler;
