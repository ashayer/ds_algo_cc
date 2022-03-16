import { shuffle } from "d3-array";
//to generate a random question that asks about pseudo-code pick a line with meaningful logic
//get the character number in string or make its own variable
//generate similar answers with minor incorrect changes
//put correct string into answer.right and three wrong string into answer.wrong
//answer.original is the entire pseudo code with the missing line replaced with emptyspace character

function generateEmptyLine(string) {
  let emptyString = "";
  for (let i = 0; i < string.length; i++) {
    emptyString = emptyString + " ";
  }
  return emptyString + "\n";
}

function generateCode() {
  const Line1 = "for (int i = 0; i < arr.len; i++)\n";
  const Line2 = "  for (int j = i; j > 0; j--)\n";
  const Line3 = "    if (arr[j] < arr[j-1])\n";
  const Line4 = "      swap (arr[j],arr[j-1])\n";
  const Line5 = "    else break;    ";

  const pseudoCodeStringArray = [Line1, Line2, Line3, Line4, Line5];

  const answersOptionsObjectArrayForMerge = [
    {
      right: Line1,
      wrong: [
        "for(int i = 1; i < arr.len; i++)",
        "for(int i = arr.len; i <= arr.len; i--)",
        "for(int i = 0; i <= arr.len; i--)",
      ],
    },
  ];

  const answersOptionsObjectArrayForMergeSort = [
    {
      right: Line1,
      wrong: [
        "for(int i = 1; i < arr.len; i++)",
        "for(int i = arr.len; i <= arr.len; i--)",
        "for(int i = 0; i <= arr.len; i--)",
      ],
    },
  ];

  const randomLineNumber = Math.floor(Math.random() * 4); //random number 0-3
  //console.log(pseudoCodeStringArray[randomLineNumber].length, pseudoCodeStringArray[randomLineNumber]);

  let mergePseudo = "";

  for (let i = 0; i < pseudoCodeStringArray.length; i++) {
    if (i === randomLineNumber) {
      mergePseudo =
        mergePseudo + generateEmptyLine(pseudoCodeStringArray[i]);
    } else {
      mergePseudo = mergePseudo + pseudoCodeStringArray[i];
    }
  }

  let answers = {
    right: "right", //answersOptionsObjectArray[randomLineNumber].right,
    wrong: ["wrong", "wrong", "wrong"],//shuffle(answersOptionsObjectArray[randomLineNumber].wrong),
    original: mergePseudo,
  };

  return answers;
}

export default generateCode;
