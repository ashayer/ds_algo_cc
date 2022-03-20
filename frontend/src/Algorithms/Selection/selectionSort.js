import generateSwap from "./selectionSwap";
import generateTime from "./selectionTime";
import generateSpace from "./selectionSpace";
import generateCode from "./selectionCode";

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
    default:
      return null;
  }
}

export default selectionSortHandler;
