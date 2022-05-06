import generateTime from "./treeTime";

function quickSortHandler(randomType) {
  switch (randomType) {
    case 0:
      return generateTime();
    default:
      return null;
  }
}

export default quickSortHandler;
