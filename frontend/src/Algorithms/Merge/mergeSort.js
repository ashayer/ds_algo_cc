import generateSwap from "./mergeSwap";
import generateTime from "./mergeTime";
import generateSpace from "./mergeSpace";
import generateCode from "./mergeCode";
import generateArrayTime from "./mergeArrayTime";

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
    default:
      return null;
  }
}

export default mergeSortHandler;
