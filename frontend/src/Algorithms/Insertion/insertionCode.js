import { shuffle } from "d3-array";

function generateCode() {
  let insertionPseudo =
    "for (let i = 1; i < array.length; i++)\n" +
    "let current = array[i]\n" +
    "let j = i-1;\n" +
    "while ((j > -1) && (current < array[j]))\n" +
    "array[j+1] = array[j]\n" +
    "j--;\n" +
    "array[j+1] = current\n";

  let answers = {
    right: "right",
    wrong: shuffle(["wrong", "wrong", "wrong"]),
    original: insertionPseudo
  };

  return answers;
}

export default generateCode;
