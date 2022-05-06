import generateTime from "./queueTime";

function queueHandler(randomType) {
  switch (randomType) {
    case 0:
      return generateTime();
    default:
      return null;
  }
}

export default queueHandler;
