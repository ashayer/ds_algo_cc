/* eslint-disable react/jsx-one-expression-per-line */
import React from "react";
import { Grid, Typography, Box } from "@mui/material/";
import SyntaxHighlighter from "react-syntax-highlighter";
import { lightfair } from "react-syntax-highlighter/dist/esm/styles/hljs";
import TextPopover from "../TextPopUps/TextPopover";

const partitionString = `int partition(vector<int>& arr, int left, int right){
  int pivotValue = arr[left]; 
  int pivotIndex = left; // using leftmost as pivot
  for(int i = left + 1; i<=right;++i){
      if(arr[i] < pivotValue){
          swap(arr[i], arr[++pivotIndex]);
      }
  }
  swap(arr[left], arr[pivotIndex]);
  return pivotIndex;
}`;

const Partition = () => {
  return (
    <SyntaxHighlighter
      language="cpp"
      style={lightfair}
      showLineNumbers
      customStyle={{ fontSize: "large", border: "1px solid black", width: "100%" }}
    >
      {partitionString}
    </SyntaxHighlighter>
  );
};

const BinaryTreeCode = () => {
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
            <Partition />
          </Box>
        </Grid>
        <Grid item md={12} sm={12} xs={12} sx={{ border: "1px solid black", p: 4 }}>
          <Typography variant="h6">
            This is the code for the quick sort algorithm.. The algorithm can be implemented using
            two functions. The quickSort function similar to the one in mergeSort uses
            <TextPopover text="RECURSION" />
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default BinaryTreeCode;
