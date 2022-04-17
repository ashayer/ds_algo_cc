/* eslint-disable react/jsx-one-expression-per-line */
import React from "react";
import { Grid, Typography, Box } from "@mui/material/";
import SyntaxHighlighter from "react-syntax-highlighter";
import { lightfair } from "react-syntax-highlighter/dist/esm/styles/hljs";
import TextPopover from "../TextPopUps/TextPopover";

const mergeString = `void merge(vector<int> arr, int left, int middle, int right) {
  int i = left;
  int j = middle + 1;
  vector<int> temp = arr;

  for(int k = left; k <= right; k++) {
      if(i > middle){
          a[k] = temp[j++];
      }
      else if(j > right){
          a[k] = temp[i++];
      }
      else if(temp[j] < temp[i]){
          a[k] = temp[j++];
      }
      else {
          a[k] = temp[i++];
      }
  }
}`;

const MergeCPP = () => {
  return (
    <SyntaxHighlighter
      language="cpp"
      style={lightfair}
      showLineNumbers
      customStyle={{ fontSize: "large", border: "1px solid black", width: "100%" }}
    >
      {mergeString}
    </SyntaxHighlighter>
  );
};

const mergeSortString = `void mergeSort(vector<int> arr, int left, int right) {
    if(left < right) {
      int middle = left + (right - left) / 2;
      mergeSort(arr, left, middle);
      mergeSort(arr, middle + 1, right);
      merge(arr, left, middle, right);
    }
  }`;

const MergeSortCPP = () => {
  return (
    <SyntaxHighlighter
      language="cpp"
      style={lightfair}
      showLineNumbers
      customStyle={{ fontSize: "large", border: "1px solid black", width: "100%" }}
    >
      {mergeSortString}
    </SyntaxHighlighter>
  );
};

const MergeCode = () => {
  return (
    <Grid container>
      <Grid container sx={{ align: "center", alignItems: "center" }}>
        <Grid item lg={6} md={12} sm={12} xs={12}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <MergeCPP />
          </Box>
        </Grid>
        <Grid item lg={6} md={12} sm={12} xs={12}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <MergeSortCPP />
          </Box>
        </Grid>
        <Grid item md={12} sm={12} xs={12} sx={{ border: "1px solid black", p: 4 }}>
          <Typography variant="h6">
            This is a code snippet of the merge sort algorithm in C++. It utilizes a{" "}
            <TextPopover text="NESTED FOR LOOP" />.
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MergeCode;
