import { shuffle } from "d3-array";

function generateCode() {
  const Line1 = "for (int i = 0; i < array.length; i++) {\n";
  const Line2 = "\tfor (int j = i; j > 0; j--) {\n";
  const Line3 = "\t\tif (arr[j] < arr[j-1])\n";
  const Line4 = "\t\t\tswap (arr[j],arr[j-1]);\n";
  const Line5 = "\t\telse break;\n";
  const Line6 = "\t}\n";
  const Line7 = "}\n";
  let insertionPseudo = Line1 + Line2 + Line3 + Line4 + Line5 + Line6 + Line7;
  let answers = {
    right: "right",
    wrong: shuffle(["wrong", "wrong", "wrong"]),
    original: insertionPseudo,
  };

  return answers;
}

export default generateCode;
