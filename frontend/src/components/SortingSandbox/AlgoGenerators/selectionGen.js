const Line1 = "1 for(int i = 0; i < arr.len; i += 1)\n";
const Line2 = "2 \tint min = i\n";
const Line3 = "3 \tfor(int j = i+1; j < arr.len; j += 1)\n";
const Line4 = "4 \t\tif (arr[j] < arr[min])\n";
const Line5 = "5 \t\t\tmin = j\n";
const Line6 = "6 \tswap(arr[i],arr[min])\n";

const pseudoCodeStringArray = [Line1, Line2, Line3, Line4, Line5, Line6];

const sortArraySelection = (arrayElements) => {
  const tempArray = [];
  const tempCodeArray = [];
  const arr = JSON.parse(JSON.stringify(arrayElements));
  for (let i = 0; i < arr.length; i += 1) {
    let min = i;
    arr[i].color = "red";
    tempCodeArray.push(1);
    tempArray.push(JSON.parse(JSON.stringify(arr)));
    for (let j = i + 1; j < arr.length; j += 1) {
      arr[j].color = "purple";
      tempCodeArray.push(3);
      tempArray.push(JSON.parse(JSON.stringify(arr)));
      if (arr[j].value < arr[min].value) {
        if (min !== i) {
          arr[min].color = "blue";
        }
        min = j;
        arr[min].color = "yellow";
        tempCodeArray.push(4);
        tempArray.push(JSON.parse(JSON.stringify(arr)));
      }
      if (j !== min) {
        arr[j].color = "blue";
      }
      tempCodeArray.push(2);
      tempArray.push(JSON.parse(JSON.stringify(arr)));
    }
    const temp = arr[min].value;
    arr[min].value = arr[i].value;
    arr[i].value = temp;
    tempCodeArray.push(5);
    tempArray.push(JSON.parse(JSON.stringify(arr)));
  }

  for (let k = 0; k < arr.length; k += 1) {
    arr[k].color = "green";
  }
  tempCodeArray.push(6);
  tempArray.push(JSON.parse(JSON.stringify(arr)));

  return [tempArray, tempCodeArray, pseudoCodeStringArray];
};

export default sortArraySelection;
