import { shuffle } from "d3-array";
// to generate a random question that asks about pseudo-code pick a line with meaningful logic
// get the character number in string or make its own variable
// generate similar answers with minor incorrect changes
// put correct string into answer.right and three wrong string into answer.wrong

function generateDragCode() {
  const Line1 = "for(int i = 0; i < arr.len; i += 1)\n";
  const Line2 = "int min = i\n";
  const Line3 = "for(int j = i+1; j < arr.len; j += 1)\n";
  const Line4 = "if (arr[j] < arr[min])\n";
  const Line5 = "min = j\n";
  const Line6 = "swap (arr[i],arr[min])\n";

  const pseudoCodeStringArray = shuffle([
    {
      lineContent: Line1,
      correctIdx: 0,
    },
    {
      lineContent: Line2,
      correctIdx: 1,
    },
    {
      lineContent: Line3,
      correctIdx: 2,
    },
    {
      lineContent: Line4,
      correctIdx: 3,
    },
    {
      lineContent: Line5,
      correctIdx: 4,
    },
    {
      lineContent: Line6,
      correctIdx: 5,
    },
  ]);

  const answers = {
    right: "",
    wrong: [],
    original: pseudoCodeStringArray,
  };

  return answers;
}

export default generateDragCode;
