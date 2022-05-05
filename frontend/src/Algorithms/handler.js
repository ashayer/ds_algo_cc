import insertionSortHandler from "./Insertion/insertionSort";
import selectionSortHandler from "./Selection/selectionSort";
import mergeSortHandler from "./Merge/mergeSort";
import quickSortHandler from "./Quick/quickSort";

function questionHandler(randomTopic, randomType) {
  switch (randomTopic) {
    case 0:
      return insertionSortHandler(randomType);
    case 1:
      return selectionSortHandler(randomType);
    case 2:
      return mergeSortHandler(randomType);
    case 3:
      return quickSortHandler(randomType);
    default:
      return null;
  }
}

export default questionHandler;
