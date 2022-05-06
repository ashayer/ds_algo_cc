import generateTime from "./treeTime";

function treeHandler(randomType) {
  switch (randomType) {
    case 0:
      return generateTime();
    default:
      return null;
  }
}

export default treeHandler;
