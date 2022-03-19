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
  const partitionLine1 = "int pivotValue = arr[low]\n";
  const partitionLine2 = "int pivotIndex = low\n";
  const partitionLine3 = "for(int i = low + 1; i<=high; i++)\n";
  const partitionLine4 = "  if(arr[i] < pivotValue)\n";
  const partitionLine5 = "  swap(arr[i], arr[++pivotIndex])\n";
  const partitionLine6 = "swap(arr[low], arr[pivotIndex])\n";
  const partitionLine7 = "return pivotIndex\n";

  const qSortLine1 = "if (low < high)\n";
  const qSortLine2 = "int index = partition(arr, low, high)\n";
  const qSortLine3 = "quickSort(arr, low, index -1)\n";
  const qSortLine4 = "quickSort(arr, index + 1, high)\n";

  const partitionStringArray = [
    partitionLine1,
    partitionLine2,
    partitionLine3,
    partitionLine4,
    partitionLine5,
    partitionLine6,
    partitionLine7,
  ];

  const quickSortStringArray = [qSortLine1, qSortLine2, qSortLine3, qSortLine4];

  const answersOptionsObjectArrayForPartition = [
    {
      right: partitionLine1,
      wrong: [
        "int pivotValue = arr[low + 1]",
        "int pivotValue = arr[high - 1]",
        "int pivotValue = arr[0]",
      ],
    },
    {
      right: partitionLine2,
      wrong: [
        "int pivotIndex = 0",
        "int pivotIndex = high - 1",
        "int pivotIndex = low + 1",
      ],
    },
    {
      right: partitionLine3,
      wrong: [
        "for(int i = low + 1; i<high; i++)",
        "for(int i = low; i<=high; i++)",
        "for(int i = 0; i<=high; i++)",
      ],
    },
    {
      right: partitionLine4,
      wrong: [
        "if(arr[low] < pivotValue)",
        "if(arr[0] < pivotValue)",
        "if(arr[high] > pivotValue)",
      ],
    },
    {
      right: partitionLine5,
      wrong: [
        "swap(arr[high], arr[i++])",
        "swap(arr[++pivotIndex], arr[high])",
        "swap(arr[0], arr[++pivotIndex])",
      ],
    },
    {
      right: partitionLine6,
      wrong: [
        "swap(arr[0], arr[pivotIndex])",
        "swap(arr[high], arr[pivotIndex])",
        "swap(arr[i], arr[low])",
      ],
    },
  ];

  const answersOptionsObjectArrayForQuickSort = [
    {
      right: qSortLine1,
      wrong: ["if (low == high)", "if (high > low)", "if (low > 0)"],
    },
    {
      right: qSortLine2,
      wrong: [
        "int index = partition(arr, 0, low)",
        "int index = partition(arr, low + 1, high)",
        "int index = partition(arr, low - 1, high)",
      ],
    },
    {
      right: qSortLine3,
      wrong: [
        "quickSort(arr, low, high)",
        "quickSort(arr, low, index)",
        "quickSort(arr, 0, index -1)",
      ],
    },
    {
      right: qSortLine4,
      wrong: [
        "quickSort(arr, 0, low)",
        "quickSort(arr, index, high)",
        "quickSort(arr, low, high)",
      ],
    },
  ];

  const isPartition = Math.floor(Math.random() * 2);

  let partitionPseudo = "";
  let quickSortPseudo = "";

  if (isPartition === 0) {
    const randomLineNumber = Math.floor(
      Math.random() * answersOptionsObjectArrayForPartition.length
    ); //random number 0-7
    for (let i = 0; i < partitionStringArray.length; i++) {
      if (i === randomLineNumber) {
        partitionPseudo =
          partitionPseudo + generateEmptyLine(partitionStringArray[i]);
      } else {
        partitionPseudo = partitionPseudo + partitionStringArray[i];
      }
    }

    let answers = {
      right: answersOptionsObjectArrayForPartition[randomLineNumber].right,
      wrong: shuffle(
        answersOptionsObjectArrayForPartition[randomLineNumber].wrong
      ),
      original: partitionPseudo,
    };

    return answers;
  } else {
    const randomLineNumber = Math.floor(
      Math.random() * answersOptionsObjectArrayForQuickSort.length
    ); //random number 0-3
    for (let i = 0; i < quickSortStringArray.length; i++) {
      if (i === randomLineNumber) {
        quickSortPseudo =
          quickSortPseudo + generateEmptyLine(quickSortStringArray[i]);
      } else {
        quickSortPseudo = quickSortPseudo + quickSortStringArray[i];
      }
    }

    let answers = {
      right: answersOptionsObjectArrayForQuickSort[randomLineNumber].right,
      wrong: shuffle(
        answersOptionsObjectArrayForQuickSort[randomLineNumber].wrong
      ),
      original: quickSortPseudo,
    };

    return answers;
  }
}

export default generateCode;
