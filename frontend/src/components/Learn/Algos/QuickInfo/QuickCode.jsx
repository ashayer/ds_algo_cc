/* eslint-disable react/jsx-one-expression-per-line */
import React from "react";
import { Grid, Typography } from "@mui/material/";
import SyntaxHighlighter from "react-syntax-highlighter";
import { lightfair } from "react-syntax-highlighter/dist/esm/styles/hljs";
import TextPopover from "../TextPopUps/TextPopover";

const InsertionSortCPP = () => {
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
    <SyntaxHighlighter language="cpp" style={lightfair} showLineNumbers>
      {codeString}
    </SyntaxHighlighter>
  );
};

const QuickCode = () => {
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
          <InsertionSortCPP />
        </Grid>
        <Grid item md={8} xs={12} sx={{ border: "1px solid black" }}>
          <Typography variant="h6">
            This is a code snippet of the insertion sort algorithm in C++. It utilizes a{" "}
            <TextPopover text="NESTED FOR LOOP" />.
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default QuickCode;
