/* eslint-disable no-shadow */
const Line1 = "1 for(int i = 0; i < arr.len; i += 1)\n";
const Line2 = "2 \tint min = i\n";
const Line3 = "3 \tfor(int j = i+1; j < arr.len; j += 1)\n";
const Line4 = "4 \t\tif (arr[j] < arr[min])\n";
const Line5 = "5 \t\t\tmin = j\n";
const Line6 = "6 \tswap(arr[i],arr[min])\n";

const pseudoCodeStringArray = [Line1, Line2, Line3, Line4, Line5, Line6];

const sortArrayMerge = (arrayElements) => {
  const tempArray = [];
  const tempCodeArray = [];

  const arr = JSON.parse(JSON.stringify(arrayElements));

  function merge(array, low, middle, high) {
    const n1 = middle - low + 1;
    const n2 = high - middle;
    const left = new Array(n1);
    const right = new Array(n2);
    for (let i = 0; i < n1; i += 1) {
      left[i] = array[low + i].value;
      arr[low + i].color = "red";
      tempCodeArray.push(1);
      tempArray.push(JSON.parse(JSON.stringify(arr)));
    }

    for (let i = 0; i < n2; i += 1) {
      right[i] = array[middle + 1 + i].value;
      arr[middle + 1 + i].color = "red";
      tempCodeArray.push(1);
      tempArray.push(JSON.parse(JSON.stringify(arr)));
    }

    let i = 0;
    let j = 0;
    let k = low;

    while (i < n1 && j < n2) {
      if (left[i] <= right[j]) {
        // bars[k].style.height = `${left[i]}%`;
        arr[k].value = left[i];
        tempCodeArray.push(1);
        tempArray.push(JSON.parse(JSON.stringify(arr)));
        array[k].value = left[i];
        i += 1;
        k += 1;
      } else {
        // bars[k].style.height = `${right[j]}%`;
        arr[k].value = left[j];
        tempCodeArray.push(1);
        tempArray.push(JSON.parse(JSON.stringify(arr)));
        array[k].value = right[j];
        j += 1;
        k += 1;
      }
    }

    while (i < n1) {
      arr[k].value = left[i];
      tempCodeArray.push(1);
      tempArray.push(JSON.parse(JSON.stringify(arr)));
      array[k].value = left[i];
      i += 1;
      k += 1;
    }
    while (j < n2) {
      arr[k].value = left[j];
      tempCodeArray.push(1);
      tempArray.push(JSON.parse(JSON.stringify(arr)));
      array[k].value = right[j];
      j += 1;
      k += 1;
    }
  }

  function mergeSort(array, left, right) {
    if (left < right) {
      const middle = left + Math.floor((right - left) / 2);

      mergeSort(array, left, middle);

      mergeSort(array, middle + 1, right);

      merge(array, left, middle, right);
    }
    return array;
  }

  mergeSort(arr, 0, arr.length - 1);

  return [tempArray, tempCodeArray, pseudoCodeStringArray];
};

export default sortArrayMerge;
