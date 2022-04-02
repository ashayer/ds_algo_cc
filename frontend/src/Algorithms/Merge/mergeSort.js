import generateSwap from "./mergeSwap";
import generateTime from "./mergeTime";
import generateSpace from "./mergeSpace";
import generateCode from "./mergeCode";
import generateArrayTime from "./mergeArrayTime";
import generateDragCode from "./mergeDragCode";
import generateDragSwap from "./mergeDragSwap";

function mergeSortHandler(randomType) {
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

export default mergeSortHandler;
