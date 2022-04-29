/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState } from "react";
import { Grid, Typography, Box } from "@mui/material/";
import TextPopover from "../TextPopUps/TextPopover";
import CodeBlock from "../../CodeBlock";
import HighlightLine from "../../HighlightLine";

const InsertionSort = ({ hoveredLine }) => {
  const codeString = `void InsertionSort(vector<int>& arr) {
  for(int i = 1; i < arr.size(); i++) {
    for(int j = i; j > 0; j--) {
      if(arr[j] < arr[j-1]) {
        swap(arr[j], arr[j-1]);
      }
      else break;
  }
}`;
  return <CodeBlock hoveredLine={hoveredLine} code={codeString} />;
};

const InsertionCode = () => {
  const [hoveredLine, setHoveredLine] = useState(null);

  return (
    <Grid container>
      <Grid container sx={{ align: "center", alignItems: "center" }}>
        <Grid item lg={4} md={12} sm={12} xs={12}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <InsertionSort hoveredLine={hoveredLine} />
          </Box>
        </Grid>
        <Grid item lg={8} md={12} sm={12} xs={12} sx={{ p: 4 }}>
          <Typography variant="h6" gutterBottom>
            This is the code for the Insertion sort algorithm. It utilizes a{" "}
            <TextPopover text="NESTED FOR LOOP" /> to sort a given list.
          </Typography>
          <Typography variant="h6" gutterBottom>
            The outer loop <HighlightLine lineNum={2} setHoveredLine={setHoveredLine} />
            dictates the place in the array we are currently starting at for the inner loop. At each
            iteration all values to left of the ith index will be currently sorted where everything
            to the right is still untouched. Therefore we need to start at the 2nd element, that is
            why i=1 instead of i=0.
          </Typography>
          <Typography variant="h6">
            The inner loop <HighlightLine lineNum={3} setHoveredLine={setHoveredLine} /> will
            function as two comparison pointers where it will compare the current jth element to the
            jth-1 element, the one directly to its left. If the value of the element to the left is
            greater then swap elements. It will keep repeating this behavior until two conditions. J
            reaches the first element of the list OR it finds a value that is less than or equal to
            the current value.
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default InsertionCode;
