import generateTime from "./listTime";

function mergeSortHandler(randomType) {
  switch (randomType) {
    case 0:
      return generateTime();
    default:
      return null;
  }
}

export default mergeSortHandler;
