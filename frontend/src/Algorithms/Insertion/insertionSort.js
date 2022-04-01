import generateSwap from "./insertionSwap";
import generateTime from "./insertionTime";
import generateSpace from "./insertionSpace";
import generateCode from "./insertionCode";
import generateArrayTime from "./insertionArrayTime";
import generateDragCode from "./insertionDragCode";

function insertionSortHandler(randomType) {
  switch (randomType) {
    case 0:
      return generateSwap();
    case 1:
      return generateTime();
    case 2:
      return generateSpace();
    case 3:
      return generateCode();
    case 4:
      return generateArrayTime();
    case 5:
      return generateDragCode();
    default:
      return null;
  }
}

export default insertionSortHandler;
