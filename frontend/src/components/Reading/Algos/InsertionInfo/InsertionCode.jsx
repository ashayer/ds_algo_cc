/* eslint-disable react/jsx-one-expression-per-line */
import React from "react";
import { Grid, Typography, Box } from "@mui/material/";
import SyntaxHighlighter from "react-syntax-highlighter";
import { lightfair } from "react-syntax-highlighter/dist/esm/styles/hljs";
import TextPopover from "../TextPopUps/TextPopover";

const InsertionSort = () => {
  const codeString = `void InsertionSort(vector<int> arr) {
  for(int i = 1; i < arr.size(); i++) {
    for(int j = i; j > 0; j--) {
      if(arr[j] < arr[j-1]) {
        swap(arr[j], arr[j-1]);
      }
      else break;
  }
}`;
  return (
    <SyntaxHighlighter
      language="cpp"
      style={lightfair}
      showLineNumbers
      customStyle={{ fontSize: "large", border: "1px solid black", width: "100%" }}
    >
      {codeString}
    </SyntaxHighlighter>
  );
};

const InsertionCode = () => {
  return (
    <Grid container>
      <Grid container sx={{ align: "center", alignItems: "center" }}>
        <Grid item md={12} sm={12} xs={12}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <InsertionSort />
          </Box>
        </Grid>
        <Grid item md={12} sm={12} xs={12} sx={{ border: "1px solid black", p: 4 }}>
          <Typography variant="h6">
            This is the code for the Insertion sort algorithm. It utilizes a{" "}
            <TextPopover text="NESTED FOR LOOP" />. The outer loop (line 2) dictates the place in
            the array we are currently starting at for the inner loop. At each iteration all values
            to left of the ith index will be currently sorted where everything to the right is still
            untouched. Therefore we need to start at the 2nd element, that is why i=1 instead of
            i=0. The inner loop (line 3) will function as two comparison pointers where it will
            compare the current jth element to the jth-1 element, or the one directly to its left.
            If the element to the left is greater the swap places. It will keep repeating this
            behavior until two conditions. J reaches the first element of the list OR it finds a
            value that is less than or equal to the current value.
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default InsertionCode;
