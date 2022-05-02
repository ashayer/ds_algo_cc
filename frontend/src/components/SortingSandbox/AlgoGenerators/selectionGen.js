const createLabelObject = (i, j, min) => {
  return [
    { index: i, label: "i" },
    { index: j, label: "j" },
    { index: min, label: "min" },
  ];
};

const sortArraySelection = (arrayElements) => {
  const tempArray = [];
  const tempCodeArray = [];
  const varLabelArray = [];

  const arr = JSON.parse(JSON.stringify(arrayElements));
  for (let i = 0; i < arr.length; i += 1) {
    let min = i;
    arr[i].color = "red";
    varLabelArray.push(createLabelObject(i, i + 1, min));
    tempCodeArray.push([1]);
    tempArray.push(JSON.parse(JSON.stringify(arr)));
    for (let j = i + 1; j < arr.length; j += 1) {
      arr[j].color = "purple";
      varLabelArray.push(createLabelObject(i, j, min));
      tempCodeArray.push([3]);
      tempArray.push(JSON.parse(JSON.stringify(arr)));
      if (arr[j].value < arr[min].value) {
        if (min !== i) {
          arr[min].color = "blue";
        }
        min = j;
        arr[min].color = "purple";
        varLabelArray.push(createLabelObject(i, j, min));

        tempCodeArray.push([4]);
        tempArray.push(JSON.parse(JSON.stringify(arr)));
      }
      if (j !== min) {
        arr[j].color = "blue";
      }
      varLabelArray.push(createLabelObject(i, j, min));

      tempCodeArray.push([2]);
      tempArray.push(JSON.parse(JSON.stringify(arr)));
    }
    const temp = arr[min].value;
    arr[min].value = arr[i].value;
    arr[i].value = temp;
    if (min !== i) {
      arr[min].color = "blue";
    }
    tempCodeArray.push([5]);
    varLabelArray.push(createLabelObject(i, arr.length - 1, min));
    tempArray.push(JSON.parse(JSON.stringify(arr)));
  }

  for (let k = 0; k < arr.length; k += 1) {
    arr[k].color = "green";
  }
  varLabelArray.push(createLabelObject(arr.length - 1, arr.length - 1, 0));
  tempCodeArray.push([6]);
  tempArray.push(JSON.parse(JSON.stringify(arr)));

  return [tempArray, tempCodeArray, varLabelArray];
};

export default sortArraySelection;
