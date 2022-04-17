/* eslint-disable react/jsx-one-expression-per-line */
import React from "react";
import { Grid, Typography } from "@mui/material/";
import SyntaxHighlighter from "react-syntax-highlighter";

import TextPopover from "../TextPopover";

const SelectionSortCPP = () => {
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
    <SyntaxHighlighter language="cpp" showLineNumbers>
      {codeString}
    </SyntaxHighlighter>
  );
};

const SelectionCode = () => {
  return (
    <Grid container>
      <Grid container sx={{ align: "center", alignItems: "center" }}>
        <Grid
          item
          md={4}
          xs={12}
          sx={{
            border: "1px solid black",
            backgroundColor: "#F0F0F0",
            paddingTop: "40px",
            paddingBottom: "40px",
          }}
        >
          <SelectionSortCPP />
        </Grid>
        <Grid item md={8} xs={12} sx={{ border: "1px solid black" }}>
          <Typography variant="h6">
            This is the code for selection sort in C++. It also be written using a{" "}
            <TextPopover text="NESTED FOR LOOP" id={0} />. On (line 3) the minimum value is set as
            I, the outer most index. The min will always start as the first element in the unsorted
            section. The inner loop will increment through the rest of the array to find the element
            with the smallest value, if the value is found then the index of the minium value is set
            as J LINE 6. Then the index of the minimum value and i, will be swapped. It will repeat
            this loop until I reaches the end of the array.
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SelectionCode;
