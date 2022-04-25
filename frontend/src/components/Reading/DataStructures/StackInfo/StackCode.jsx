/* eslint-disable react/jsx-one-expression-per-line */
import React from "react";
import { Grid, Typography, Box } from "@mui/material/";
import SyntaxHighlighter from "react-syntax-highlighter";
import { lightfair } from "react-syntax-highlighter/dist/esm/styles/hljs";
import TextPopover from "../TextPopUps/TextPopover";

const SelectionSort = () => {
  const codeString = `void SelectionSort(vector<int> arr) {
  for(int i = 0; i < arr.size(); i++) {
    int min = i;
    for(int j = i + 1; j < arr.size(); j++) {
      if(arr[j] < arr[min]) {
        min = j;
      }
    swap(array[min], array[i]);
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

const StackCode = () => {
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
            <SelectionSort />
          </Box>
        </Grid>
        <Grid item md={12} sm={12} xs={12} sx={{ border: "1px solid black", p: 4 }}>
          <Typography variant="h6">
            This is the code for selection sort in C++. It also can be written using a{" "}
            <TextPopover text="NESTED FOR LOOP" />. On (line 3) the minimum index is set as i. The
            min will always start as the first element in the unsorted section, because of this. The
            inner loop will increment through the entire sorted section to the right of the i index
            to find the element with the smallest value, if the value is found then the index of the
            minimum value is set as J (the new minimum element) as seen on (line 6). Then the
            elements of the minimum and i indexes, will be swapped. It will repeat this loop until i
            reaches the end of the array. The algorithm has no other break condition and must run
            through all i*j iterations.
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default StackCode;
