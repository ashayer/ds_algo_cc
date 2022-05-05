import generateSwap from "./insertionSwap";
import generateTime from "./insertionTime";
import generateSpace from "./insertionSpace";
import generateCode from "./insertionCode";
import generateArrayTime from "./insertionArrayTime";
import generateDragCode from "./insertionDragCode";
import generateDragSwap from "./insertionDragSwap";

function insertionSortHandler(randomType: number) {
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
    case 6:
      return generateDragSwap();
    default:
      return null;
  }
}

export default insertionSortHandler;
