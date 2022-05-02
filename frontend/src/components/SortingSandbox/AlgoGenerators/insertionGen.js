const createLabelObject = (i, j, jMinus) => {
  return [
    { index: i, label: "i" },
    { index: j, label: "j" },
    { index: jMinus, label: "j - 1" },
  ];
};

const sortArrayInsertion = (arrayElements) => {
  const tempArray = [];
  const tempCodeArray = [];
  const varLabelArray = [];

  const arr = JSON.parse(JSON.stringify(arrayElements));
  for (let i = 1; i < arr.length; i += 1) {
    const current = arr[i].value;
    let j = i - 1;
    arr[i].color = "red";
    arr[j].color = "red";
    varLabelArray.push(createLabelObject(i, j + 1, j));
    tempCodeArray.push([4]);
    tempArray.push(JSON.parse(JSON.stringify(arr)));

    while (j >= 0 && arr[j].value > current) {
      const temp = arr[j + 1].value;
      arr[j + 1].value = arr[j].value;
      arr[j].value = temp;
      arr[j + 1].color = "blue";
      varLabelArray.push(createLabelObject(i, j, j - 1));
      j -= 1;
      if (j >= 0) {
        arr[j].color = "red";
      }
      tempCodeArray.push([4, 5]);
      tempArray.push(JSON.parse(JSON.stringify(arr)));
    }
    varLabelArray.push(createLabelObject(i, j, j - 1));
    tempCodeArray.push([7]);
    tempArray.push(JSON.parse(JSON.stringify(arr)));

    arr[j + 1].value = current;
    if (j >= 0) arr[j].color = "blue";
    arr[j + 1].color = "blue";
    varLabelArray.push(createLabelObject(i, j, j - 1));
    tempCodeArray.push([2, 3]);
    tempArray.push(JSON.parse(JSON.stringify(arr)));
  }

  for (let k = 0; k < arr.length; k += 1) {
    arr[k].color = "green";
  }
  varLabelArray.push(createLabelObject(arr.length - 1, arr.length - 1, 0));
  tempCodeArray.push([1]);
  tempArray.push(JSON.parse(JSON.stringify(arr)));

  return [tempArray, tempCodeArray, varLabelArray];
};

export default sortArrayInsertion;
