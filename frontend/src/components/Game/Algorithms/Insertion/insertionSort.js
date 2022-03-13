import generateSwap from "./insertionSwap";
import generateTime from "./insertionTime";
import generateSpace from "./insertionSpace";
import generateCode from "./insertionCode";

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
    default:
      console.log("Something went wrong");
  }
}

export default insertionSortHandler;
