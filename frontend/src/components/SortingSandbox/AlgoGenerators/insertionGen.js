// const Line1 = "1 for (int i = 1; i < arr.len; i++)\n";
// const Line2 = "2   for (int j = i; j > 0; j--)\n";
// const Line3 = "3     if (arr[j] < arr[j-1])\n";
// const Line4 = "4       swap (arr[j],arr[j-1])\n";
// const Line5 = "5     else break;    ";

// const pseudoCodeStringArray = [Line1, Line2, Line3, Line4, Line5];

const codeString = `void InsertionSort(vector<int>& arr) {
  for(int i = 1; i < arr.size(); i++) {
    for(int j = i; j > 0; j--) {
      if(arr[j] < arr[j-1]) {
        swap(arr[j], arr[j-1]);
      }
      else break;
  }
}`;

const sortArrayInsertion = (arrayElements) => {
  const tempArray = [];
  const tempCodeArray = [];
  const arr = JSON.parse(JSON.stringify(arrayElements));
  for (let i = 1; i < arr.length; i += 1) {
    const current = arr[i].value;
    let j = i - 1;
    arr[i].color = "red";
    arr[j].color = "red";

    tempCodeArray.push(1);
    tempArray.push(JSON.parse(JSON.stringify(arr)));

    while (j >= 0 && arr[j].value > current) {
      const temp = arr[j + 1].value;
      arr[j + 1].value = arr[j].value;
      arr[j].value = temp;
      arr[j + 1].color = "blue";
      j -= 1;
      if (j >= 0) {
        arr[j].color = "red";
      }
      tempCodeArray.push(4);
      tempArray.push(JSON.parse(JSON.stringify(arr)));
    }
    arr[j + 1].value = current;

    if (j >= 0) arr[j].color = "blue";
    arr[j + 1].color = "blue";
    tempCodeArray.push(3);
    tempArray.push(JSON.parse(JSON.stringify(arr)));
  }

  for (let k = 0; k < arr.length; k += 1) {
    arr[k].color = "green";
  }
  tempCodeArray.push(1);
  tempArray.push(JSON.parse(JSON.stringify(arr)));

  return [tempArray, tempCodeArray, codeString];
};

export default sortArrayInsertion;
