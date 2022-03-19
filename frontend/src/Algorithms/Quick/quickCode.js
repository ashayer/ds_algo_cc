import { shuffle } from "d3-array";
//to generate a random question that asks about pseudo-code pick a line with meaningful logic
//get the character number in string or make its own variable
//generate similar answers with minor incorrect changes
//put correct string into answer.right and three wrong string into answer.wrong
//answer.original is the entire pseudo code with the missing line replaced with empty space character

//! may need to create separate function for
function generateEmptyLine(string) {
  let emptyString = "";
  for (let i = 0; i < string.length; i++) {
    emptyString = emptyString + " ";
  }
  return emptyString + "\n";
}

function generateCode() {
  const quickLine1 = "int i = low, j = middle+1\n";
  const quickLine2 = "for(int k = low; k <= high; k++)\n";
  const quickLine3 = "  if(i > mid) {aux[k] = array[j++]}\n";
  const quickLine4 = "  else if (j > high) {aux[k] = array[i++]}\n";
  const quickLine5 = "  else if(array[j] < array[i]){aux[k] = array[j++]}\n";
  const quickLine6 = "  else {aux[k] = a[i++]}\n";

  const quickStringArray = [
    quickLine1,
    quickLine2,
    quickLine3,
    quickLine4,
    quickLine5,
    quickLine6,
  ];

  const answersOptionsObjectArrayForquick = [
    {
      right: quickLine1,
      wrong: [
        "",
        "",
        "",
      ],
    },
    {
      right: quickLine2,
      wrong: [
        "",
        "",
        "",
      ],
    },
    {
      right: quickLine3,
      wrong: [
        "",
        "",
        "",
      ],
    },
    {
      right: quickLine4,
      wrong: [
        "",
        "",
        "",
      ],
    },
    {
      right: quickLine5,
      wrong: [
        "",
        "",
        "",
      ],
    },
    {
      right: quickLine6,
      wrong: [
        "",
        "",
        "",
      ],
    },
  ];

  

  const quickORquickSort = Math.floor(Math.random() * 2); //random number 0-1 - 0 means quick 1 means quickSort
  const randomLineNumber = Math.floor(Math.random() * 4); //random number 0-3
  //console.log(pseudoCodeStringArray[randomLineNumber].length, pseudoCodeStringArray[randomLineNumber]);

  let quickPseudo = "";

  if(quickORquickSort === 0){
    for (let i = 0; i < quickStringArray.length; i++) {
      if (i === randomLineNumber) {
        quickPseudo = quickPseudo + generateEmptyLine(quickStringArray[i]);
      } else {
        quickPseudo = quickPseudo + quickStringArray[i];
      }
    }
  
    let answers = {
      right: answersOptionsObjectArrayForquick[randomLineNumber].right,
      wrong: shuffle(answersOptionsObjectArrayForquick[randomLineNumber].wrong),
      original: quickPseudo,
    };
  
    return answers;
  }

}

export default generateCode;
