import generateSwap from "./quickSwap";
import generateTime from "./quickTime";
import generateSpace from "./quickSpace";
import generateCode from "./quickCode";

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
    default:
      return null;
  }
}

export default quickSortHandler;
