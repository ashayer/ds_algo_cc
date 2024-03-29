import { shuffle } from "d3-array";

function generateEmptyLine(string, lineNum) {
  let emptyString = lineNum.toString();
  for (let i = 0; i < string.length; i += 1) {
    emptyString = `${emptyString} `;
  }
  return `${emptyString}\n`;
}

function generateCode() {
  const Line1 = "1 for (int i = 0; i < arr.len; i++)\n";
  const Line2 = "2   for (int j = i; j > 0; j--)\n";
  const Line3 = "3     if (arr[j] < arr[j-1])\n";
  const Line4 = "4       swap (arr[j],arr[j-1])\n";
  const Line5 = "5     else break;    ";

  const pseudoCodeStringArray = [Line1, Line2, Line3, Line4, Line5];

  const answersOptionsObjectArray = [
    {
      right: Line1,
      wrong: [
        "for(int i = 1; i < arr.len; i++)",
        "for(int i = arr.len; i <= arr.len; i--)",
        "for(int i = 0; i <= arr.len; i--)",
      ],
    },
    {
      right: Line2,
      wrong: [
        "for(int j = 0; j < arr.len; j++)",
        "for(int j = 1; j < arr.len; j++)",
        "for(int j = i; j < arr.len; j++)",
      ],
    },
    {
      right: Line3,
      wrong: [
        "if(arr[i] < arr[j-1])",
        "if(arr[j] < arr[i-1])",
        "if(arr[i] > arr[j-1])",
      ],
    },
    {
      right: Line4,
      wrong: [
        "swap(arr[i],arr[i-1])",
        "swap(arr[j],arr[i-1])",
        "swap(arr[i],arr[j-1])",
      ],
    },
  ];

  const randomLineNumber = Math.floor(Math.random() * 4); // random number 0-3

  let insertionPseudo = "";

  for (let i = 0; i < pseudoCodeStringArray.length; i += 1) {
    if (i === randomLineNumber) {
      insertionPseudo += generateEmptyLine(pseudoCodeStringArray[i], randomLineNumber + 1);
    } else {
      insertionPseudo += pseudoCodeStringArray[i];
    }
  }

  const answers = {
    right: answersOptionsObjectArray[randomLineNumber].right.slice(2),
    wrong: shuffle(answersOptionsObjectArray[randomLineNumber].wrong),
    original: insertionPseudo,
  };

  return answers;
}

export default generateCode;
