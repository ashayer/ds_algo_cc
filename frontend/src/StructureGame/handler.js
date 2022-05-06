import queueHandler from "./Queue/queueHandler";
import stackHandler from "./Stack/stackHandler";
import listHandler from "./LinkedList/listHandler";
import treeHandler from "./BinaryTree/treeHandler";

function questionHandlerStructure(randomTopic, randomType) {
  switch (randomTopic) {
    case 0:
      return queueHandler(randomType);
    case 1:
      return stackHandler(randomType);
    case 2:
      return listHandler(randomType);
    case 3:
      return treeHandler(randomType);
    default:
      return null;
  }
}

export default questionHandlerStructure;
