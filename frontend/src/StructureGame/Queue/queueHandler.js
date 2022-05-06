import generateTime from "./queueTime";

function insertionSortHandler(randomType) {
  switch (randomType) {
    case 0:
      return generateTime();
    default:
      return null;
  }
}

export default insertionSortHandler;
