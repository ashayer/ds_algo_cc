export const insertionString = `void InsertionSort(vector<int>& arr) {
    for(int i = 1; i < arr.size(); i++) {
      for(int j = i; j > 0; j--) {
        if(arr[j] < arr[j-1]) {
          swap(arr[j], arr[j-1]);
        }
        else break;
    }
}`;

export const selectionString = `void SelectionSort(vector<int>& arr) {
    for(int i = 0; i < arr.size(); i++) {
      int min = i;
      for(int j = i + 1; j < arr.size(); j++) {
        if(arr[j] < arr[min]) {
          min = j;
        }
      swap(arr[min], arr[i]);
    }
}`;

export const mergeString = `void merge(vector<int>& arr, int left, int middle, int right) {
  int i = left;
  int j = middle + 1;
  vector<int> temp = arr;

  for(int k = left; k <= right; k++) {
      if(i > middle){
          arr[k] = temp[j++];
      }
      else if(j > right){
          arr[k] = temp[i++];
      }
      else if(temp[j] < temp[i]){
          arr[k] = temp[j++];
      }
      else { // temp[j] > temp[i]
          arr[k] = temp[i++];
      }
  }
}`;

export const quickString = `int partition(vector<int>& arr, int left, int right){
  int pivotValue = arr[left]; 
  int pivotIndex = left;
  for(int i = left + 1; i<=right;i++){
      if(arr[i] < pivotValue){
          pivotIndex++;
          swap(arr[i], arr[pivotIndex]);
      }
  }
  swap(arr[left], arr[pivotIndex]);
  return pivotIndex;
}`;
