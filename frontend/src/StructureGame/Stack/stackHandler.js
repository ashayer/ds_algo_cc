import generateTime from "./stackTime";

function selectionSortHandler(randomType) {
  switch (randomType) {
    case 0:
      return generateTime();
    default:
      return null;
  }
}

export default selectionSortHandler;
