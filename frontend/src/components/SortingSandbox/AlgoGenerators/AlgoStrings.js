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
