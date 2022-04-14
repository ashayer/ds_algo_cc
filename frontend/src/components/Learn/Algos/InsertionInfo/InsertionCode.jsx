import React from "react";
import { Typography, Grid } from "@mui/material";
import SyntaxHighlighter from "react-syntax-highlighter";

const InsertionSortCPP = () => {
  const codeString = `void InsertionSort(vector<int> arr) {
  for(int i = 0; i < arr.size(); i++) {
    for(int j = i; j > 0; j--) {
      if(arr[j] < arr[j-1]) {
        swap(arr[j], arr[j-1]);
      }
      else break;
  }
}`;
  return (
    <SyntaxHighlighter language="cpp" showLineNumbers>
      {codeString}
    </SyntaxHighlighter>
  );
};
const InsertionCode = () => {
  return (
    <Grid container>
      <Grid item md={6} sx={{ border: "1px solid black" }}>
        <InsertionSortCPP />
      </Grid>
      <Grid item md={6} sx={{ border: "1px solid black" }}>
        <Typography variant="h6">
          This is a code snippet of the insertion sort algorithm in C++. It utilized a NESTED FOR
          LOOP. The outer loop (line 2) dictates the place in the array we are currently starting at
          for the inner loop. At each iteration all values to left of the ith place will be
          currently sorted where everything to the right is untouched. The inner loop (line3) will
          function as a comparison pointer where it will compar the current jth value to the jth-1
          value, or the one directly to its left and swap them until j reaches the first element of
          the array. The inner loop ends if the element to the left of j is less than or equal to
          the value at j.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default InsertionCode;
