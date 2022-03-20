import { shuffle } from "d3-array";
// to generate a random question that asks about pseudo-code pick a line with meaningful logic
// get the character number in string or make its own variable
// generate similar answers with minor incorrect changes
// put correct string into answer.right and three wrong string into answer.wrong
function generateEmptyLine(string) {
  let emptyString = "";
  for (let i = 0; i < string.length; i += 1) {
    emptyString += " ";
  }
  return `${emptyString}\n`;
}

function generateCode() {
  const Line1 = "for(int i = 0; i < arr.len; i += 1)\n";
  const Line2 = "  int min = i\n";
  const Line3 = "    for(int j = i+1; j < arr.len; j += 1)\n";
  const Line4 = "      if (arr[j] < arr[min])\n";
  const Line5 = "        min = j\n";
  const Line6 = "     swap (arr[i],arr[min])";

  const pseudoCodeStringArray = [Line1, Line2, Line3, Line4, Line5, Line6];

  const answersOptionsObjectArray = [
    {
      right: Line1,
      wrong: [
        "for(int i = 1; i < arr.len; i += 1)",
        "for(int i = arr.len; i > 0; i--)",
        "for(int i = arr.len; i > 0; i--)",
      ],
    },
    {
      right: Line2,
      wrong: [
        "int min = 1",
        "int min = 0",
        "int min = arr.len",
      ],
    },
    {
      right: Line3,
      wrong: [
        "for(int j = 0; j < arr.len; j += 1)",
        "for(int j = i; j < arr.len; j += 1)",
        "for(int j = 1; j < arr.len; j += 1)",
      ],
    },
    {
      right: Line4,
      wrong: [
        "if(arr[i] < arr[j]))",
        "if(arr[j] > arr[min]))",
        "if(arr[i] < arr[min])",
      ],
    },
    {
      right: Line5,
      wrong: [
        "min = 1",
        "min = 0",
        "min = i",
      ],
    },
    {
      right: Line6,
      wrong: [
        "swap(arr[i],arr[j])",
        "swap(arr[min],arr[j])",
        "swap(arr[i],arr[i-1])",
      ],
    },
  ];

  const randomLineNumber = Math.floor(Math.random() * 6); // random number 0-5
  let selectionPseudo = "";

  for (let i = 0; i < pseudoCodeStringArray.length; i += 1) {
    if (i === randomLineNumber) {
      selectionPseudo += generateEmptyLine(pseudoCodeStringArray[i]);
    } else {
      selectionPseudo += pseudoCodeStringArray[i];
    }
  }

  const answers = {
    right: answersOptionsObjectArray[randomLineNumber].right,
    wrong: shuffle(answersOptionsObjectArray[randomLineNumber].wrong),
    original: selectionPseudo,
  };

  return answers;
}

export default generateCode;
