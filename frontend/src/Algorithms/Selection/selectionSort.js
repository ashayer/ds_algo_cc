import generateSwap from "./selectionSwap";
import generateTime from "./selectionTime";
import generateSpace from "./selectionSpace";
import generateCode from "./selectionCode";
import generateArrayTime from "./selectionArrayTime";
import generateDragCode from "./selectionDragCode";
import generateDragSwap from "./selectionDragSwap";

function selectionSortHandler(randomType) {
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

export default selectionSortHandler;
