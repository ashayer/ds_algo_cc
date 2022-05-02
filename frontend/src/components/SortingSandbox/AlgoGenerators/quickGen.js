const createLabelObject = (pivotIndex, pivot, left, right, i) => {
  return [
    { index: left, label: "left" },
    { index: right, label: "right" },
    { index: pivotIndex, label: "pivotVal" },
    { index: pivot, label: "pindex" },
    { index: i, label: "i" },
  ];
};

const sortArrayQuick = (arrayElements) => {
  const tempArray = [];
  const tempCodeArray = [];
  const varLabelArray = [];

  const arr = JSON.parse(JSON.stringify(arrayElements));

  function pushToArrays(pivot, pivotIndex, left, right, i, highlight) {
    varLabelArray.push(createLabelObject(pivot, pivotIndex, left, right, i));
    tempCodeArray.push(highlight);
    tempArray.push(JSON.parse(JSON.stringify(arr)));
  }

  function partition(array, start, end) {
    const pivot = arr[start].value;
    let pivotIndex = start;
    for (let a = start; a <= end; a += 1) {
      arr[a].color = "purple";
    }
    arr[start].color = "red";
    pushToArrays(start, pivotIndex, start, end, start + 1, [2, 3]);
    for (let i = start + 1; i <= end; i += 1) {
      pushToArrays(start, pivotIndex, start, end, i, [5]);

      if (arr[i].value < pivot) {
        pivotIndex += 1;
        pushToArrays(start, pivotIndex, start, end, i, [6]);
        const tempVal = arr[pivotIndex].value;
        arr[pivotIndex].value = arr[i].value;
        arr[i].value = tempVal;
        pushToArrays(start, pivotIndex, start, end, i, [7]);
      } else {
        pushToArrays(start, pivotIndex, start, end, i, [4]);
      }
    }
    const tempVal = arr[pivotIndex].value;
    arr[pivotIndex].value = arr[start].value;
    arr[start].value = tempVal;

    for (let a = start; a <= end; a += 1) {
      arr[a].color = "blue";
    }
    pushToArrays(start, pivotIndex, start, end, 0, [10]);

    return pivotIndex;
  }
  function quickSort(array, start, end) {
    if (start < end) {
      const index = partition(array, start, end);
      quickSort(array, start, index - 1);
      quickSort(array, index + 1, end);
    }
    return array;
  }

  quickSort(arr, 0, arr.length - 1);
  for (let a = 0; a < arr.length; a += 1) {
    arr[a].color = "green";
  }
  pushToArrays(0, arr.length - 1, 0, arr.length - 1, 0, [1]);

  return [tempArray, tempCodeArray, varLabelArray];
};

export default sortArrayQuick;
