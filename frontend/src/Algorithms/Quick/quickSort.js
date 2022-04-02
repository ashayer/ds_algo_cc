import generateSwap from "./quickSwap";
import generateTime from "./quickTime";
import generateSpace from "./quickSpace";
import generateCode from "./quickCode";
import generateArrayTime from "./quickArrayTime";
import generateDragCode from "./quickDragCode";
import generateDragSwap from "./quickDragSwap";

function quickSortHandler(randomType) {
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

export default quickSortHandler;
