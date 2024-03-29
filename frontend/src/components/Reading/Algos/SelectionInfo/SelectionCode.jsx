/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState } from "react";
import { Grid, Typography, Box } from "@mui/material/";
import CodeBlock from "../../CodeBlock";
import HighlightLine from "../../HighlightLine";
import TextPopover from "../TextPopUps/TextPopover";

const SelectionSort = ({ hoveredLine }) => {
  const codeString = `void SelectionSort(vector<int>& arr) {
  for(int i = 0; i < arr.size(); i++) {
    int min = i;
    for(int j = i + 1; j < arr.size(); j++) {
      if(arr[j] < arr[min]) {
        min = j;
      }
    swap(arr[min], arr[i]);
  }
}`;
  return <CodeBlock hoveredLine={hoveredLine} code={codeString} />;
};

const SelectionCode = () => {
  const [hoveredLine, setHoveredLine] = useState([]);

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
            <SelectionSort hoveredLine={hoveredLine} />
          </Box>
        </Grid>
        <Grid item lg={8} md={12} sm={12} xs={12} sx={{ p: 4 }}>
          <Typography variant="h6" gutterBottom>
            This is the code for the Selection Sort algorithm. It also utilizes a{" "}
            <TextPopover text="NESTED FOR LOOP" />.
          </Typography>
          <Typography variant="h6" gutterBottom>
            On <HighlightLine lineNum={[3]} setHoveredLine={setHoveredLine} /> the minimum index is
            set as the ith index as it will always start at each iteration as the first value in the
            unsorted section.
          </Typography>
          <Typography variant="h6" gutterBottom>
            The inner loop is what will increment through that entire unsorted section to the right
            of the ith index to find the element with the smallest value. The index of that minimum
            element is which is the jth index is assigned to the min index as seen on{" "}
            <HighlightLine lineNum={[6]} setHoveredLine={setHoveredLine} />. It is possible for this
            minimum index to update multiple times as it goes through the rest of the unsorted
            section.
          </Typography>
          <Typography variant="h6" gutterBottom>
            Once that minimum element index is found it will be swapped with the element at index i
            <HighlightLine lineNum={[8]} setHoveredLine={setHoveredLine} />. It will repeat this
            loop until i reaches the end of the array. The algorithm has no other break condition
            and must run through all iterations.
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SelectionCode;
